import { DiceType } from './dice';
import { DamageType, AttackType, ActionType } from './actions';
import { Attribute } from './attributes';
import { Character, Lifestyle, Species } from './characters';
import { Condition, SizeCategory } from './entities';
import { Monster } from './monsters';
import { Skill } from './skills';
import { Reference } from './general';
import { Item, ItemType, Weapon } from './inventory';
import { Spell } from './spells';
import { Faction } from './campaigns';
import { Quest, Encounter } from './world/quests';
import { Rumor, Region } from './regions';

const exampleCharacter: Character = {
  // General Info
  img: 'https://example.com/character-image.jpg',
  name: 'Thalion Moonshadow',
  level: 5,
  gender: 'Male',
  class: 'Rogue',
  background: 'Outlander',
  species: 'Elf',
  player: 'Alex',
  abilities: ['Darkvision, Keen Senses'],

  // Combat Info
  inspiration: true,
  deathSaves: [true, false, false], // 1 Success, 2 Failures
  attributes: {
    [Attribute.STR]: { value: 10, prof: false },
    [Attribute.DEX]: { value: 18, prof: true },
    [Attribute.CON]: { value: 14, prof: false },
    [Attribute.INT]: { value: 12, prof: false },
    [Attribute.WIS]: { value: 13, prof: false },
    [Attribute.CHA]: { value: 16, prof: true },
  },
  skills: {
    [Skill.Athletics]: 'proficient',
    [Skill.Stealth]: 'expert',
    [Skill.Investigation]: 'proficient',
    [Skill.Perception]: 'proficient',
    jackOfAllTrades: true,
  },
  speed: 30,
  ac: 15,
  hp: {
    max: 36,
    current: 20,
    temp: 5,
    dice: DiceType.D8,
    regenerationDiceCount: 5,
  },
  actions: [
    {
      name: 'Sneak Attack',
      type: ActionType.Attack,
      description: 'Deals extra damage when you have advantage.',
    },
    {
      name: 'Cunning Action',
      type: ActionType.Utility,
      description: 'You can Dash, Disengage, or Hide as a bonus action.',
    },
  ],
  conditions: [Condition.Poisoned],

  // Lore
  age: 120,
  personality: 'Reserved and thoughtful, but fiercely loyal.',
  ideals: 'Freedom and independence are the highest ideals.',
  bonds: 'His loyalty to his clan is unshakable.',
  flaws: 'He struggles to trust others outside of his close circle.',
  alignment: 'Chaotic Good',
  appearance: {
    height: 180,
    weight: 75,
    eyeColor: 'Green',
    hairColor: 'Silver',
    skinColor: 'Pale',
    sizeCategory: SizeCategory.Medium,
    visuals: 'Wears a dark cloak and light armor.',
  },
  description:
    'Thalion is a lithe and agile elf with quick reflexes and a sharp mind.',
  relationships: [
    { name: 'Elandra', relationship: 'Sister', status: 'Alive' },
    { name: 'Toren', relationship: 'Mentor', status: 'Deceased' },
  ],
  languages: ['Common', 'Elvish', 'Thieves Cant'],
  friendlyFactions: ['Moonshadow Clan'],
  enemyFactions: ['Dark Brotherhood'],
  faith: 'Worships Corellon, the Elven god of magic and arts.',
  lifestyle: Lifestyle.Modest,

  // Inventory
  inventory: {
    money: {
      platin: 0,
      gold: 15,
      silver: 40,
      copper: 100,
    },
    items: ['Short Sword', 'Thieves Tools'],
  },

  // Spellcasting Info
  spellCasterInfo: {
    spellLevel: [
      { spells: [], currentSlots: 2, maxSlots: 3 }, // Level 1 spells
      { spells: [], currentSlots: 1, maxSlots: 2 }, // Level 2 spells
    ],
    spellClass: 'Rogue',
    spellAttribute: Attribute.INT,
    spellAttackbonus: 5,
    spellSavingThrow: '13',
    spellslots: [3, 2],
    spellslots_max: [3, 2],
  },
};
