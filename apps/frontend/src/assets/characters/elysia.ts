import { SizeCategory } from '@campaign-manager/shared';
import { DiceType } from 'apps/frontend/src/app/types/dice';
import {
  DamageType,
  AttackType,
  Attack,
  ActionType,
} from 'src/app/types/actions';
import { Attribute } from 'src/app/types/attributes';
import { Character, Lifestyle } from 'src/app/types/characters';

export const elysia: Character = {
  id: 0,
  img: 'fairy.jpg',
  name: 'Elysia Windwhisper',
  level: 4,
  class: { id: 0, name: 'Rogue' },
  background: 'Outlander',
  species: { id: 0, name: 'Elf' },
  player: 'Lia',
  personality: 'Quick-witted and charming',
  abilities: ['Fey Ancestry'],
  ideals: 'Freedom and exploration',
  bonds: 'Protects the forest',
  flaws: 'Curiosity often gets her in trouble',
  attributes: {
    [Attribute.STR]: { value: 10, prof: false },
    [Attribute.DEX]: { value: 18, prof: true },
    [Attribute.CON]: { value: 12, prof: false },
    [Attribute.INT]: { value: 14, prof: false },
    [Attribute.WIS]: { value: 13, prof: false },
    [Attribute.CHA]: { value: 16, prof: true },
  },
  skills: {
    jackOfAllTrades: true,
    [Skill.Acrobatics]: 'proficient',
    [Skill.Arcana]: 'untrained',
    [Skill.Athletics]: 'untrained',
    [Skill.Deception]: 'proficient',
    [Skill.History]: 'untrained',
    [Skill.Insight]: 'untrained',
    weapon_skills: {
      armor: {
        light: true,
        medium: false,
        heavy: false,
        shields: false,
      },
      weapons: {
        easy: false,
        war: true,
        other: [],
      },
    },
  },
  speed: 35,
  ac: 15,
  hp: {
    max: 30,
    current: 28,
    temp: 0,
    dice: DiceType.D6,
    regenerationDiceCount: 4,
  },
  actions: [
    {
      name: 'Shortbow Shot',
      range: 80,
      attackBonus: 7,
      proficiency: true,
      damage: { [DiceType.D6]: 2 },
      damageType: DamageType.Piercing,
      attackType: AttackType.Ranged,
      type: ActionType.Attack,
    } as Attack,
  ],
  age: 120,
  gender: 'Female',
  alignment: 'Chaotic Good',
  appearance: {
    height: 5.5,
    weight: 120,
    visuals: 'Long silver hair and piercing green eyes',
    eyeColor: 'Green',
    hairColor: 'Silver',
    skinColor: 'Pale',
    img: 'assets/characters/img/elysia.png',
    sizeCategory: SizeCategory.Medium, // Medium
  },
  description: 'A free-spirited elf with a knack for stealth and deception.',
  relationships: [],
  languages: ['Common', 'Elvish', 'Sylvan'],
  friendlyFactions: [{ id: 0, name: 'The Green Blades' }],
  enemyFactions: [{ id: 0, name: 'The Iron Hand' }],
  inventory: {
    id: 0,
    money: {
      platin: 5,
      gold: 75,
      silver: 20,
      copper: 150,
    },
    items: [
      { id: 0, name: "Thieves' Tools" },
      { id: 0, name: 'Dagger' },
      { id: 0, name: 'Leather Armor' },
      { id: 0, name: 'Healing Potion' },
      { id: 0, name: 'Musical Instrument' },
      { id: 0, name: 'Cloak of Elvenkind' },
      { id: 0, name: 'Mysterious Map' },
    ],
  },
  spellCasterInfo: undefined,
  inspiration: true,
  lifestyle: Lifestyle.Comfortable, // A bit better than average
  faith: 'Nature Spirits',
  conditions: [],
  deathSaves: [],
};
