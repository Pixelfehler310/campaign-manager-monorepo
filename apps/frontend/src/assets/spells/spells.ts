import { SpellEffect } from './../../app/types/spells';
import {
  SpellBase,
  SpellLevel,
  SpellLevelEffect,
  SpellComponent,
  AttackSpell,
  HealSpell,
  DefenseSpell,
  UtilitySpell,
} from 'src/app/types/spells';
import { Attribute } from 'src/app/types/attributes';
import { DiceType } from 'src/app/types/dice';
import { DiceData } from 'src/app/types/dice';

/*
export const fireball: AttackSpell = {
  id: 1,
  img: 'fireball.png',
  name: 'Fireball',
  level: 3,
  school: 'Evocation',
  castingTime: 1,
  duration: 0,
  description: 'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.',
  range: '150 feet',
  concentration: false,
  attributeModifier: Attribute.INT,
  damageType: 'Fire',
  attackBonus: 5,
  components: [
    { type: 'verbal', description: 'Utter incantations' },
    { type: 'somatic', description: 'Aiming gesture' },
    { type: 'material', description: 'A tiny ball of bat guano and sulfur', consumed: true }
  ],
  effects: [
    { type: 'damage', description: '8d6 Fire Damage', diceData: {[DiceType.D6]: 8}, level: 3 }
  ],
  scalingEffects: [
    { level: 4, effects: [{ type: 'damage', description: '9d6 Fire Damage', diceData: {[DiceType.D6]: 9}, level:4}] },
    { level: 5, effects: [{ type: 'damage', description: '10d6 Fire Damage', diceData:  {[DiceType.D6] : 10}, level:5 }] }
  ]
};
*/
// Angriff-Zauber Beispiel mit scalingEffects
// Attack Spell example with all values from SpellBase
const attack: AttackSpell = {
  id: 1,
  img: './img/fireball.png',
  name: 'Fireball',
  level: 3,
  school: 'Evocation',
  castingTime: 1, // in seconds
  duration: 0, // Instant effect
  description: 'A blazing fireball that causes fire damage in an area.',
  range: '150 feet',
  components: [
    { type: 'verbal', description: 'A brief incantation' },
    { type: 'somatic', description: 'Hand gesture to shape the flame' },
    {
      type: 'material',
      description: 'A pinch of sulfur and bat guano',
      consumed: true,
    },
  ],
  effects: [
    {
      type: 'damage',
      description: 'Deals fire damage in the area.',
      duration: 0,
      level: 3,
      diceData: { [DiceType.D6]: 8 }, // 8d6 damage at level 3
    },
  ],
  scalingEffects: [
    {
      level: 4,
      effects: [
        {
          type: 'damage',
          description: 'Deals additional fire damage at higher levels.',
          duration: 0,
          level: 4,
          diceData: { [DiceType.D6]: 9 }, // 9d6 damage at level 4
        },
      ],
    },
    {
      level: 5,
      effects: [
        {
          type: 'damage',
          description: 'Deals additional fire damage at even higher levels.',
          duration: 0,
          level: 5,
          diceData: { [DiceType.D6]: 10 }, // 10d6 damage at level 5
        },
      ],
    },
  ],
  damageType: 'Fire',
  attackBonus: 2, // optional attack bonus
  concentration: false,
};

// Defense Spell example with all values from SpellBase
const defense: DefenseSpell = {
  id: 2,
  img: './img/fireball.png',
  name: 'Mage Armor',
  level: 1,
  school: 'Abjuration',
  castingTime: 1, // in seconds
  duration: 3600, // 1 hour
  description: 'Creates a protective magical aura that increases AC.',
  range: 'Self',
  components: [
    { type: 'verbal', description: 'A protective incantation' },
    { type: 'somatic', description: 'Hand gesture to form the shield' },
  ],
  effects: [
    {
      type: 'buff',
      description: 'Increases armor class by 3.',
      duration: 3600,
      level: 1,
    },
  ],
  scalingEffects: [
    {
      level: 3,
      effects: [
        {
          type: 'buff',
          description: 'Increases armor class by an additional 2.',
          duration: 3600,
          level: 3,
          diceData: { [DiceType.D4]: 1 }, // additional 1d4
        },
      ],
    },
  ],
  shieldValue: 3, // Value of the shield or protection
  concentration: false,
};

// Healing Spell example with all values from SpellBase
const heal: HealSpell = {
  id: 3,
  img: './img/fireball.png',
  name: 'Healing Light',
  level: 2,
  school: 'Evocation',
  castingTime: 1, // in seconds
  duration: 0,
  description: 'Restores a certain amount of hit points.',
  range: 'Touch',
  components: [
    { type: 'verbal', description: 'A healing blessing' },
    { type: 'somatic', description: 'A gentle touch' },
  ],
  effects: [
    {
      type: 'healing',
      description: 'Heals for 2d8 points.',
      duration: 0,
      level: 2,
      diceData: { [DiceType.D8]: 2 }, // 2d8 healing at level 2
    },
  ],
  scalingEffects: [
    {
      level: 3,
      effects: [
        {
          type: 'healing',
          description: 'Healing increases to 3d8 points.',
          duration: 0,
          level: 3,
          diceData: { [DiceType.D8]: 3 },
        },
      ],
    },
  ],
  healingAmount: 16, // Example value for maximum healing
  usesDice: true,
  concentration: false,
};

// Utility Spell example with all values from SpellBase
const utility: UtilitySpell = {
  id: 4,
  img: './img/fireball.png',
  name: 'Teleport',
  level: 7,
  school: 'Conjuration',
  castingTime: 1, // in seconds
  duration: 0,
  description: 'Allows immediate travel to a known location.',
  range: '10 feet',
  components: [
    { type: 'verbal', description: 'Incantation for teleportation' },
    { type: 'somatic', description: 'Hand gesture for orientation' },
  ],
  scalingEffects: [
    {
      level: 8,
      effects: [
        {
          type: 'utility',
          description:
            'Allows additional party members to accompany the caster.',
          duration: 0,
          level: 8,
        },
      ],
    },
  ],
  utilityType: 'Teleportation',
  concentration: false,
};
