import { Inventory } from './../../../types/inventory';
import { elysia } from '../../../../assets/characters/elysia';
import {
  Attribute,
  Character,
  DiceData,
  DiceType,
  getDiceTypes,
  isFullEntityOrPrimaryKey,
  Skill,
  skillAttributes,
  SpellCasterInfo,
} from '@campaign-manager/shared';
// character-detailview.component.ts
import { Component, Input } from '@angular/core';
import { faelan } from '../../../../assets/characters/faelan';

interface CharacterDetail extends Character {
  inventory: Inventory;
  spellCasterInfo: SpellCasterInfo;
}

@Component({
  selector: 'app-character-detail-view',
  templateUrl: './character-detail-view.component.html',
  styleUrls: ['./character-detail-view.component.scss'],
})
export class CharacterDetailViewComponent {
  @Input() id: number = 0;
  character?: CharacterDetail;
  isFullEntityOrPrimaryKey: any = isFullEntityOrPrimaryKey;

  constructor() {
    if (this.id == 0) {
      this.character = faelan as CharacterDetail;
    }
  }

  ngOnInit(): void {}

  hasSpells(): boolean {
    return true;
  }

  range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  getAttributes(): any[] {
    const attributeList: any[] = [];
    Object.values(Attribute).forEach((key) => {
      attributeList.push({
        label: key,
        ...this.character?.attributes?.[key],
      });
    });
    return attributeList;
  }

  getSkills(): any[] {
    const attributeList: any[] = [];
    Object.values(Skill).forEach((key) => {
      attributeList.push({
        label: skillAttributes[key].label,
        key: key,
        proficiency: this.character?.skills?.[key],
      });
    });
    return attributeList;
  }

  getModifier(attr: any): number {
    const value = attr.value || 0;
    return Math.floor((value - 10) / 2); // Standard D&D Modifikatorberechnung
  }

  getSkillLabel(skill: Skill): string {
    return skillAttributes[skill].label;
  }

  getSkillModifier(skill: Skill): number {
    const modifierAttribute = skillAttributes[skill]?.modifierAttribute; // Ermittlung des Modifikators der angegebenen skill
    const modifier = this.getModifier(
      this.character?.attributes?.[modifierAttribute]
    );
    const proficiencyBonus = this.getProficiencyBonus();
    const proficiency = this.character?.skills?.[skill];
    const proficiencyBonusMultiplier =
      proficiency === 'expert' ? 2 : proficiency === 'proficient' ? 1 : 0;

    return modifier + proficiencyBonus * proficiencyBonusMultiplier;
  }

  getProficiencyBonus(): number {
    return Math.ceil((this.character?.level ?? 1) / 4) + 1;
  }

  getDamageDiceTypes(
    damageData: DiceData
  ): { dice: DiceType; count: number }[] {
    return getDiceTypes(damageData);
  }
}
