import { DiceData } from './dice';
import { Attribute } from './attributes';

export interface Action {
  name: string;
  description?: string;
  type: ActionType;
}

// TODO keine ahnung wie das hier in dnd tatsächlich ist 2
// export enum AttackType {
//   MeleeWeapon = 'MeleeWeapon',  // Nahkampf mit Waffe
//   MeleeUnarmed = 'MeleeUnarmed', // Nahkampf ohne Waffe (z.B. Faustschlag)
//   RangedWeapon = 'RangedWeapon', // Fernkampf mit Waffe
//   RangedThrown = 'RangedThrown', // Geworfene Waffen
//   SpellAttack = 'SpellAttack',   // Zauberangriffe
//   SpellSave = 'SpellSave',       // Zauber, bei denen der Gegner einen Rettungswurf machen muss
// }

export enum ActionType {
  Attack = 'Attack',
  Melee = 'Melee',
  Defense = 'Defense',
  Heal = 'Heal',
  Utility = 'Utility',
}

export interface Attack extends Action {
  range: number; // von bis zahl, (zwei zahlen notwendig)
  attackBonus: number;
  // todo 6 evtl impliziert errechenbar? jein xD manche weapons haben noch nen bonus, wenn man den zu den items bzw den weapons packt ist das hier implizit errechenbar, dann muss man aber waffe oder sowas mitspeichern, für spellangriffe auch von relevanz
  // rest der formel kriegt man über gpt raus
  proficiency: boolean; // ermitteln aus waffentyp und waffenskills
  damage: DiceData;
  damageType: DamageType;
  attackType: AttackType;
}

export enum AttackType {
  Melee = 'Melee',
  Ranged = 'Ranged',
  Spell = 'Spell',
}

export enum DamageType {
  Slashing = 'Slashing',
  Lightning = 'Lightning',
  Bludgeoning = 'Bludgeoning',
  Piercing = 'Piercing',
  Fire = 'Fire',
  Cold = 'Cold',
  Poison = 'Poison',
  Acid = 'Acid',
  Psychic = 'Psychic',
  Necrotic = 'Necrotic',
  Radiant = 'Radiant',
  Thunder = 'Thunder',
  Force = 'Force',
}
