import { DiceType } from 'src/app/types/dice';
import {
  DamageType,
  AttackType,
  Attack,
  ActionType,
} from 'src/app/types/actions';
import { Attribute } from 'src/app/types/attributes';
import { Character, Lifestyle } from 'src/app/types/characters';
import { SizeCategory } from 'src/app/types/entities';
import { Skill } from '@campaign-manager/shared';

export const faelan: Character = {
  id: 0,
  // img: 'fairy.jpg',
  name: 'Faelan',
  level: 3,
  class: { id: 0, name: 'Barde' },
  background: 'Sonderling',
  species: { id: 0, name: 'Dryade' },
  player: 'Simon',
  personality:
    'ch hebe ständig Dinge auf, spiele damit herum und mache sie dann aus Versehen kaputt, neugierig, (zurückhaltend)',
  // abilities: [
  //   'Bardische Inspiration: 1xD6 für eine andere Kreatur',
  //   'Sprache des Waldes: Tiere verstehen dich (Sylvan) und du kannst ihre Gesten deuten',
  //   'Gute Beeren: Einmal pro Tag: 1xD6 + 1 LP (???)',
  //   'Baumwandeln: Du kannst einen Baum im Umkreis von 3m nutzen um über ihn zu einem anderen Baum im Umkreis von 18m zu wandeln (1x pro Tag gratis, sonst Stufe 1 Zauber)',
  //   'Wanderer: Guter Orientierungssinn',
  //   'Lied der Erholung: 1x W6 für jede Kreatur bei kurzer Rast',
  //   'Partikel des Potenzials: ??? Tash 30',
  //   'Schöpfende Macht: ??? Tash 30',
  // ],
  ideals: 'Dem Stamm Ruhm bringen und ihnen durch gutes Handeln gedenken.',
  bonds:
    'Ich bin der Letzte meines Stammes und es liegt an mir, seinen Namen in die Legenden eingehen zu lassen',
  flaws:
    's. Persönlichkeitsmerkmal, Die Last, meinen Stamm zu vertreten, erdrückt mich und ich lebe in ständiger Angst, Fehler zu machen.',
  attributes: {
    [Attribute.STR]: { value: 9, prof: false },
    [Attribute.DEX]: { value: 14, prof: true },
    [Attribute.CON]: { value: 11, prof: false },
    [Attribute.INT]: { value: 12, prof: false },
    [Attribute.WIS]: { value: 11, prof: false },
    [Attribute.CHA]: { value: 16, prof: true },
  },
  // skills: {
  //   jackOfAllTrades: true,
  //   [Skill.Athletics]: 'proficient',
  //   [Skill.Performance]: 'proficient',
  //   [Skill.Medicine]: 'proficient',
  //   [Skill.Nature]: 'proficient',
  //   [Skill.Survival]: 'proficient',
  //   weapon_skills: {
  //     armor: {
  //       light: true,
  //       medium: false,
  //       heavy: false,
  //       shields: false,
  //     },
  //     weapons: {
  //       easy: false,
  //       war: false,
  //       other: [],
  //     },
  //   },
  // },
  speed: 9,
  ac: 12,
  // hp: {
  //   max: 14,
  //   current: 28,
  //   temp: 0,
  //   dice: DiceType.D8,
  //   regenerationDiceCount: 1,
  // },
  // actions: [
  //   {
  //     name: 'Dolchstich',
  //     range: 0,
  //     attackBonus: 2,
  //     proficiency: true,
  //     damage: { [DiceType.D4]: 1 },
  //     damageType: DamageType.Piercing,
  //     attackType: AttackType.Melee,
  //     type: ActionType.Attack,
  //   } as Attack,
  //   {
  //     name: 'Dolchwurf',
  //     range: 6,
  //     attackBonus: 2,
  //     proficiency: true,
  //     damage: { [DiceType.D4]: 1 },
  //     damageType: DamageType.Piercing,
  //     attackType: AttackType.Ranged,
  //     type: ActionType.Attack,
  //   } as Attack,
  // ],
  age: 137,
  gender: 'Male',
  alignment: 'Chaotic Good',
  // appearance: {
  //   height: 5.5,
  //   weight: 55,
  //   visuals: 'Long silver hair and piercing green eyes',
  //   eyeColor: 'Grün',
  //   hairColor: 'Grün',
  //   skinColor: 'Grün',
  //   img: 'assets/characters/img/elysia.png',
  //   sizeCategory: SizeCategory.Medium, // Medium
  // },
  description: 'A free-spirited elf with a knack for stealth and deception.',
  relationships: [],
  languages: ['Common', 'Elvish', 'Sylvan'],
  // friendlyFactions: [{ id: 0, name: 'The Green Blades' }],
  // enemyFactions: [{ id: 0, name: 'The Iron Hand' }],
  // inventory: {
  //   id: 0,
  //   money: {
  //     platin: 5,
  //     gold: 75,
  //     silver: 20,
  //     copper: 150,
  //   },
  //   items: [
  //     { id: 0, name: 'Stab' },
  //     { id: 0, name: 'Dolch' },
  //     { id: 0, name: 'Dolch' },
  //     { id: 0, name: 'Lederrüstung' },
  //     { id: 0, name: 'Kostüm' },
  //     { id: 0, name: 'Kostüm' },
  //     { id: 0, name: 'Verkleidungsausrüstung' },
  //     { id: 0, name: 'Laier' },
  //     { id: 0, name: 'Trinkschlauch' },
  //     { id: 0, name: 'Blockflöte' },
  //     { id: 0, name: 'Reisekleidung' },
  //     { id: 0, name: 'Rucksack' },
  //   ],
  // },
  // spellCasterInfo: {
  //   entity_id: 1,
  //   spellLevel: [
  //     {
  //       spells: [
  //         { id: 0, name: 'Druidenkunst' },
  //         { id: 0, name: 'Klingenbann' },
  //         { id: 0, name: 'Einfache Illusion' },
  //       ],
  //       currentSlots: 0,
  //       maxSlots: 0,
  //     },
  //     {
  //       spells: [
  //         { id: 0, name: 'Heilendes Wort' },
  //         { id: 0, name: 'Dissonantes Flüstern' },
  //         { id: 0, name: 'Schlaf' },
  //         { id: 0, name: 'Identifizieren' },
  //         { id: 0, name: 'Gute Beeren' },
  //       ],
  //       currentSlots: -1,
  //       maxSlots: 4,
  //     },
  //     {
  //       spells: [
  //         { id: 0, name: 'Macht der Vorstellungskraft' },
  //         { id: 0, name: 'Schutzwind' },
  //       ],
  //       currentSlots: -1,
  //       maxSlots: 2,
  //     },
  //   ],
  //   spellClass: { id: 0, name: 'Barde' },
  //   spellAttribute: Attribute.CHA,
  //   spellSavingThrow: '',
  //   spellAttackbonus: 0,
  // },
  inspiration: true,
  lifestyle: Lifestyle.Comfortable, // A bit better than average
  faith: 'Nature Spirits',
  conditions: [],
  deathSaves: [],
};
