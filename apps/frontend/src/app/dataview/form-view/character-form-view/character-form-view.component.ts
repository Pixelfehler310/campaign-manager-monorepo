import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { Dropdown } from 'primeng/dropdown';
import { map, Observable, of } from 'rxjs';
import { DiceType } from 'src/app/types/dice';
import { Action, Attack, AttackType, DamageType } from 'src/app/types/actions';
import { Attribute } from 'src/app/types/attributes';
import { Skill, skillAttributes } from 'src/app/types/skills';

@Component({
  selector: 'app-character-form-view',
  templateUrl: './character-form-view.component.html',
  styleUrls: ['./character-form-view.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class CharacterFormViewComponent {
  characterForm: FormGroup;
  proficiency_options = [
    { name: 'Geübt', class: 'proficient' },
    { name: 'Experte', class: 'expert' },
  ];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cd: ChangeDetectorRef
  ) {
    this.characterForm = this.createCharacterForm();

    console.warn(this.characterForm.get('name'));
    console.warn(this.characterForm);
  }

  private createCharacterForm(): FormGroup {
    return this.fb.group({
      name: [''],
      level: [null],
      class: this.fb.group({
        // todo autocomplete 6
        name: [''],
      }),
      background: [''],
      species: this.fb.group({
        // todo autocomplete 6
        name: [''],
      }),
      player: [''],
      personality: [''],
      abilities: this.fb.array([]), // Leeres Array für Fähigkeiten
      ideals: [''],
      bonds: [''],
      flaws: [''],
      attributes: this.createAttributesFormGroup(),
      skills: this.createSkillsFormGroup(),
      speed: [null],
      ac: [null],
      hp: this.fb.group({
        max: [null],
        temp: [null],
        current: [null],
        dice: [''],
        regenerationDiceCount: [null],
      }),
      actions: this.fb.array([]), // todo eigentlich kein feld, implizit durch items 5
      age: [null],
      alignment: [''],
      gender: ['Other'],
      appearance: this.fb.group({
        height: [null],
        weight: [null],
        visuals: [''],
        eyeColor: [''],
        hairColor: [''],
        skinColor: [''],
        img: [''],
        sizeCategory: [''],
      }),
      description: [''],
      img: [''],
      relationships: this.fb.array([]), // Leeres Array für Beziehungen
      languages: this.fb.array([]), // Leeres Array für Sprachen
      friendlyFactions: this.fb.array([]), // Leeres Array für freundliche Fraktionen
      enemyFactions: this.fb.array([]), // Leeres Array für feindliche Fraktionen
      inventory: this.fb.group({
        money: this.fb.group({
          platin: [0],
          gold: [0],
          silver: [0],
          copper: [0],
        }),
        items: this.fb.array([this.createItem()]), // Leeres Array für Gegenstände
      }),
      spellCasterInfo: this.fb.group({
        spellLevel: this.fb.array([this.createSpellLevel()]), // Leeres Array für Zauberlevel
        spellClass: [''],
        spellAttribute: [''],
        spellAttackbonus: [0],
        spellSavingThrow: [''],
      }),
      inspiration: [false],
      lifestyle: [''],
      faith: [''],
      conditions: this.fb.array([]), // Leeres Array für Bedingungen
      deathSaves: this.fb.array([]), // Leeres Array für Todesspeicher
    });
  }

  private createAttributeForm(attribute: {
    value: number;
    prof: boolean;
  }): FormGroup {
    return this.fb.group({
      value: [attribute.value],
      prof: [attribute.prof],
    });
  }

  private createActionForm(action: any): FormGroup {
    return this.fb.group({
      name: [''],
      range: [null],
      attackBonus: [null],
      proficiency: [false],
      damage: this.fb.group({}), // Leeres Objekt für Schaden
      damageType: [''],
      attackType: [''],
      type: [''],
    });
  }

  getAttributes(): any {
    return Object.values(Attribute);
  }

  getSkills(): any[] {
    const skills: any[] = [];
    Object.values(Skill).forEach((key) => {
      skills.push({ skill_key: key, ...skillAttributes[key] });
    });
    return skills;
  }

  getModifier(attr: Attribute | string): number {
    const fg = this.characterForm.get('attributes');
    const value = this.characterForm.get(
      'attributes.' + attr + '.value'
    )?.value;
    return Math.floor((value - 10) / 2); // Standard D&D Modifikatorberechnung
  }

  preventAccordionNavigation(event: KeyboardEvent): void {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.stopPropagation();
    }
  }

  getSkillModifier(mod_attr: Attribute, skill: string): number {
    const character_level = this.characterForm.get('level')?.value;
    const proficiency = this.characterForm.get(`skills.${skill}`)?.value;
    const attribute_modifier = this.getModifier(mod_attr);
    const proficiency_bonus = this.getProficiencyBonus();
    const jackOfAllTrades = this.characterForm.get(
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

  getDiceTypes(): SelectItem[] {
    return Object.keys(DiceType).map((key) => ({
      label: key,
      value: DiceType[key as keyof typeof DiceType], // Name wird hier auf Großbuchstaben formatiert, kannst du anpassen
    }));
  }
  getAttackTypes(): SelectItem[] {
    return Object.keys(AttackType).map((key) => ({
      value: key,
      label: AttackType[key as keyof typeof AttackType], // Hier bleibt die Beschriftung wie im Enum definiert
    }));
  }

  getDamageTypes(): { label: string; value: DamageType }[] {
    return Object.keys(DamageType).map((key) => ({
      label: key,
      value: DamageType[key as keyof typeof DamageType],
    }));
  }

  cycleProficiency(skill: string): void {
    let new_value = 'untrained';
    const fc = this.characterForm.get('skills')?.get(skill);
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
    return this.characterForm.get('skills')?.get(skill)?.value;
  }

  getProficiencyBonus(): number {
    const bonus =
      Math.floor((this.characterForm.get('level')?.value - 1) / 4) + 2;
    return bonus;
  }

  cycleGender(): void {
    let new_value = 'Male';
    const fc = this.characterForm?.get('gender');
    const current_value = fc?.value;
    if (current_value === 'Male') {
      new_value = 'Female';
    }
    if (current_value === 'Female') {
      new_value = 'Other';
    }
    fc?.patchValue(new_value);
  }

  getGender(): string {
    return this.characterForm?.get('gender')?.value;
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: [''], // todo rest aus backend laden 4
    });
  }

  createSpellLevel(): FormGroup {
    return this.fb.group({
      spells: [this.createSpell()],
      currentSlots: [0],
      maxSlots: [0],
    });
  }

  createSpell(): FormGroup {
    return this.fb.group({
      // todo andere infos aus spell laden 4
      name: [''],
    });
  }

  get actions(): FormArray {
    return this.characterForm.get('actions') as FormArray;
  }

  get items(): FormArray {
    return this.characterForm.get('inventory.items') as FormArray;
  }

  get spells(): FormArray {
    return this.characterForm.get('spells') as FormArray;
  }

  get conditions(): FormArray {
    return this.characterForm.get('conditions') as FormArray;
  }

  addAction(action: Action) {
    // todo action anzeigen, kommt implizit aus items & spells 6
  }

  addItem() {
    this.items.push(this.createItem());
  }

  addSpell() {
    this.spells.push(this.createSpell());
  }

  addCondition() {
    this.conditions.push(this.fb.control(''));
  }

  onSubmit() {
    this.confirmationService.confirm({
      message: 'Möchten Sie das Formular absenden?',
      accept: () => {
        const json = JSON.stringify(this.characterForm.value, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'character.json';
        a.click();
        URL.revokeObjectURL(url);
        this.messageService.add({
          severity: 'success',
          summary: 'Erfolg',
          detail: 'Daten erfolgreich gespeichert!',
        });
      },
    });
  }

  // Dynamische Erstellung der Skills
  createSkillsFormGroup = (): FormGroup => {
    const skillsGroup: { [key: string]: FormControl } = {};

    // Erstelle FormControl für jede Fähigkeit basierend auf skillAttributes
    Object.keys(skillAttributes).forEach((skill) => {
      skillsGroup[skill] = this.fb.control('untrained'); // Einfache FormControl für jeden Skill
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

    const fromgroup = this.fb.group({
      ...skillsGroup,
      jackOfAllTrades: [false],
      ...weapon_skills,
    });

    return fromgroup;
  };

  // Automatisiertes Hinzufügen von Attributen
  createAttributesFormGroup = () => {
    const attributesGroup: { [key: string]: FormGroup } = {};
    Object.values(Attribute).forEach((attr) => {
      attributesGroup[attr] = this.fb.group({
        value: [10],
        prof: [false],
      });
    });

    const group = this.fb.group(attributesGroup);
    return group;
  };
}
