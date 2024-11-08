import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import {
  Ability,
  Action,
  ActionType,
  Attribute,
  ChallengeRating,
  DamageEffect,
  DamageType,
  getSizeCategoryEntries,
  Language,
  Skill,
  skillAttributes,
} from '@campaign-manager/shared';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'app-monster-form-view',
  templateUrl: './monster-form-view.component.html',
  styleUrl: './monster-form-view.component.scss',
})
export class MonsterFormViewComponent {
  monsterForm: FormGroup;

  // Sizes
  sizes = this.getSizes();

  // Challenge Ratings
  challengeRatings = Object.values(ChallengeRating).map((cr) => ({
    label: cr,
    value: cr,
  }));

  // Language Datatable
  languageForm: FormGroup;
  currentLanguage: Language | null = null;
  selectedLanguages: Language[] = [];

  // Ability Datatable
  abilityForm: FormGroup;
  currentAbility: Ability | null = null;
  selectedAbilities: Ability[] = [];

  // Action Datatable
  actionForm: FormGroup;
  currentAction: Action | null = null;
  selectedActions: Action[] = [];
  actionTypeSuggestions: string[] = [];

  // Damage Responses
  filteredDamageResponses: { label: string; value: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.monsterForm = this.createMonsterForm();
    this.languageForm = this.createLanguageForm();
    this.abilityForm = this.createAbilityForm();
    this.actionForm = this.createActionForm();
  }

  private createMonsterForm(): FormGroup {
    return this.fb.group({
      monsterImage: [null],
      name: [''],
      type: [''],
      description: [''],
      attributes: this.createAttributesFormGroup(),
      actions: this.fb.array([]),
      skills: this.createSkillsFormGroup(),
      abilities: this.fb.array([]),
      traits: [''],
      challengeRating: [null],
      damageResponses: this.fb.group({
        immune: [[]],
        vulnerable: [[]],
        resistant: [[]],
      }),
      sizeCategory: [null],
      languageNoteOverride: [''],
      languages: this.fb.array([]),
    });
  }

  private createLanguageForm(): FormGroup {
    return this.fb.group({
      name: ['', []],
      note: ['', []],
    });
  }

  getLanguages(): Language[] {
    return this.monsterForm.get('languages')?.value || [];
  }

  setLanguages(languages: Language[]) {
    const languageFormArray = this.monsterForm.get('languages') as FormArray;
    languageFormArray.clear();
    languages.forEach((language) => {
      languageFormArray.push(this.fb.group(language));
    });
  }

  private createAbilityForm(): FormGroup {
    return this.fb.group({
      name: ['', []],
      description: ['', []],
    });
  }

  getAbilities(): Ability[] {
    return this.monsterForm.get('abilities')?.value || [];
  }

  setAbilities(abilities: Ability[]) {
    const abilityFormArray = this.monsterForm.get('abilities') as FormArray;
    abilityFormArray.clear();
    abilities.forEach((ability) => {
      abilityFormArray.push(this.fb.group(ability));
    });
  }

  private createActionForm(): FormGroup {
    return this.fb.group({
      name: ['', []],
      description: ['', []],
      type: ['', []],
    });
  }

  getActions(): Action[] {
    return this.monsterForm.get('actions')?.value || [];
  }

  setActions(actions: Action[]) {
    const actionFormArray = this.monsterForm.get('actions') as FormArray;
    actionFormArray.clear();
    actions.forEach((action) => {
      actionFormArray.push(this.fb.group(action));
    });
  }

  searchActionTypes(event: any) {
    // Beispielhafte Implementierung der Suchlogik
    const query = event.query.toLowerCase();
    this.actionTypeSuggestions = Object.values(ActionType).filter((type) =>
      type.toLowerCase().includes(query)
    );
  }

  onSubmit() {
    console.log(this.monsterForm.value);
  }

  getSizes(): any[] {
    return getSizeCategoryEntries();
  }

  descriptionMaxLength = 500;
  get descriptionLength(): number {
    return this.monsterForm.get('description')?.value.length || 0;
  }

  traitsMaxLength = 500;
  get traitsLength(): number {
    return this.monsterForm.get('traits')?.value.length || 0;
  }

  getAttributes(): any {
    return Object.values(Attribute);
  }

  createAttributesFormGroup = () => {
    const attributesGroup: { [key: string]: FormGroup } = {};
    Object.values(Attribute).forEach((attr) => {
      attributesGroup[attr] = this.fb.group({
        value: [10],
        prof: [false],
      });
    });

    return this.fb.group(attributesGroup);
  };

  preventAccordionNavigation(event: KeyboardEvent): void {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.stopPropagation();
    }
  }

  getModifier(attr: Attribute | string): number {
    const value = this.monsterForm.get('attributes.' + attr + '.value')?.value;
    return Math.floor((value - 10) / 2);
  }

  getProficiencyBonus(): number {
    const bonus =
      Math.floor((this.monsterForm.get('challengeRating')?.value - 1) / 4) + 2;
    return bonus;
  }

  getSkills(): any[] {
    const skills: any[] = [];
    Object.values(Skill).forEach((key) => {
      skills.push({ skill_key: key, ...skillAttributes[key] });
    });
    return skills;
  }

  getSkillModifier(mod_attr: Attribute, skill: string): number {
    const proficiency = this.monsterForm.get(`skills.${skill}`)?.value;
    const attribute_modifier = this.getModifier(mod_attr);
    const proficiency_bonus = this.getProficiencyBonus();
    const jackOfAllTrades = this.monsterForm.get(
      `skills.jackOfAllTrades`
    )?.value;
    const proficiency_multiplier =
      proficiency === 'expert'
        ? 2
        : proficiency === 'proficient'
        ? 1
        : jackOfAllTrades
        ? 0.5
        : 0;

    return attribute_modifier + proficiency_bonus * proficiency_multiplier;
  }

  cycleProficiency(skill: string): void {
    let new_value = 'untrained';
    const fc = this.monsterForm.get('skills')?.get(skill);
    const current_value = fc?.value;
    if (current_value === 'untrained') {
      new_value = 'proficient';
    }
    if (current_value === 'proficient') {
      new_value = 'expert';
    }
    fc?.patchValue(new_value);
  }

  getProficiency(skill: string): string {
    return this.monsterForm.get('skills')?.get(skill)?.value;
  }

  createSkillsFormGroup = (): FormGroup => {
    const skillsGroup: { [key: string]: FormControl } = {};

    Object.keys(skillAttributes).forEach((skill) => {
      skillsGroup[skill] = this.fb.control('untrained');
    });

    const weapon_skills: FormGroup = this.fb.group({
      armor: this.fb.group({
        light: [false],
        medium: [false],
        heavy: [false],
        shields: [false],
      }),
      weapons: this.fb.group({
        simple: [false],
        martial: [false],
        other: [false],
      }),
    });

    return this.fb.group({
      ...skillsGroup,
      jackOfAllTrades: [false],
      ...weapon_skills,
    });
  };

  getDamageTypeSelectItems(): { label: string; value: string }[] {
    return Object.entries(DamageType).map(([key, value]) => ({
      label: key,
      value: value as string,
    }));
  }

  filterDamageResponses(
    event: AutoCompleteCompleteEvent,
    effect: DamageEffect
  ) {
    const query = event.query.toLowerCase();
    const selectedImmune = this.getDamageResponses(
      'immune' as unknown as DamageEffect
    );
    const selectedVulnerable = this.getDamageResponses(
      'vulnerable' as unknown as DamageEffect
    );
    const selectedResistant = this.getDamageResponses(
      'resistant' as unknown as DamageEffect
    );

    this.filteredDamageResponses = this.getDamageTypeSelectItems()
      .filter((item) => item.label.toLowerCase().includes(query))
      .filter((item) => {
        const itemValue = item.value as DamageType;
        const isNotSelected =
          !selectedImmune.some((damageType) => damageType === itemValue) &&
          !selectedVulnerable.some((damageType) => damageType === itemValue) &&
          !selectedResistant.some((damageType) => damageType === itemValue);
        return isNotSelected;
      });
  }

  getDamageResponses(effect: DamageEffect): DamageType[] {
    const responses =
      this.monsterForm.get(`damageResponses.${effect}`)?.value || [];
    return responses.map(
      (response: { label: string; value: string }) =>
        response.value as DamageType
    );
  }

  convertToDamageEffect(effect: string): DamageEffect {
    return effect as unknown as DamageEffect;
  }
}
