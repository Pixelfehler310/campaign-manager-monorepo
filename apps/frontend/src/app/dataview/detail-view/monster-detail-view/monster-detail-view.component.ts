import { Component } from '@angular/core';
import { getSizeCategoryEntries } from 'src/app/types/entities';
import { Attribute } from 'src/app/types/attributes';
import { Skill, skillAttributes } from 'src/app/types/skills';
import {
  ChallengeRating,
  Language,
  DamageEffect,
} from 'src/app/types/monsters';
import { Ability } from 'src/app/types/entities';
import { Action, ActionType, DamageType } from 'src/app/types/actions';

@Component({
  selector: 'app-monster-detail-view',
  templateUrl: './monster-detail-view.component.html',
  styleUrls: ['./monster-detail-view.component.scss'],
})
export class MonsterDetailViewComponent {
  // Sizes
  sizes = this.getSizes();

  // Challenge Ratings
  challengeRatings = Object.values(ChallengeRating).map((cr) => ({
    label: cr,
    value: cr,
  }));

  // Damage Responses
  filteredDamageResponses: { label: string; value: string }[] = [];

  getName(): string {
    return 'Skeleton';
  }

  getType(): string {
    return 'Undead';
  }

  getSize(): string {
    return 'Medium';
  }

  getSizes(): any[] {
    return getSizeCategoryEntries();
  }

  getChallengeRating(): string {
    return '1/4';
  }

  getDescription(): string {
    return 'A skeleton is a reanimated skeleton, mindless and driven by dark magic. It is a common undead creature, often found in the service of necromancers or other evil beings.';
  }

  descriptionMaxLength = 500;
  get descriptionLength(): number {
    return this.getDescription().length || 0;
  }

  getTraits(): string {
    return 'Skeletons have the following traits: ';
  }

  traitsMaxLength = 500;
  get traitsLength(): number {
    return this.getTraits().length || 0;
  }

  getLanguageNoteOverride(): string {
    return "The skeleton understands all languages it knew in life but can't speak.";
  }

  getLanguages(): any[] {
    return [
      { name: 'Common', note: 'Widely spoken' },
      { name: 'Elvish', note: 'Spoken by elves' },
    ];
  }

  getAbilities(): Ability[] {
    return [
      { id: 1, name: 'Darkvision', description: 'Can see in the dark' },
      {
        id: 2,
        name: 'Undead Fortitude',
        description:
          'When reduced to 0 hit points, can make a Constitution saving throw to stay at 1 hit point',
      },
    ];
  }

  getDamageVulnerabilities(): string[] {
    return ['Fire', 'Radiant'];
  }

  getDamageImmunities(): string[] {
    return ['Poison', 'Necrotic'];
  }

  getDamageResistances(): string[] {
    return ['Cold', 'Lightning'];
  }

  getActions(): Action[] {
    return [
      {
        name: 'Shortsword',
        description:
          'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.',
        type: ActionType.Melee,
      },
      {
        name: 'Shortbow',
        description:
          'Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 6 (1d8 + 2) piercing damage.',
        type: ActionType.Attack,
      },
    ];
  }
}
