import { DiceData } from './dice';
import { DamageType, AttackType } from './actions';

export enum Attribute {
  STR = 'Strength',
  DEX = 'Dexterity',
  CON = 'Constitution',
  INT = 'Intelligence',
  WIS = 'Wisdom',
  CHA = 'Charisma',
}

export type Attributes = Record<Attribute, AttributeValue>;

export interface AttributeValue {
  value: number;
  prof: boolean;
}
