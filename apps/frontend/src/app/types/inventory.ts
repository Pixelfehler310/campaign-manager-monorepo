import { Attack } from './actions';
import { PrimaryKeyOf, ReferenceTo } from './general';

export interface Inventory {
  id: number;
  money?: {
    platin: number;
    gold: number;
    silver: number;
    copper: number;
  };
  items: ReferenceTo<'Item'>[]; // Quantity selbst berechnen pls, Items ggf mappen auf Item type
}

export interface ItemTemplate {
  id: number;
  name: string;
  description?: string;
  img?: string;
  type?: ItemType;
  cost?: { amount: number; unit: MoneyUnit };
}

export interface Item {
  id: number;
  name: string; // fk
  inventory?: Inventory; // | ReferenceTo; // eig nicht undefined möglich, da teil des schlüssels
  item_template?: ItemTemplate; // | ReferenceTo; // eig nicht undefined möglich, da teil des schlüssels
  description?: string; // rausnehmen
  img?: string; // rausnehmen
  type?: ItemType; // rausnehmen
  cost?: { amount: number; unit: MoneyUnit }; // rausnehmen
  weight?: number; // rausnehmen
}

export enum MoneyUnit {
  PLATIN = 1,
  GOLD = 2,
  SILVER = 3,
  COPPER = 4,
}

export function getMoneyUnitOptions() {
  return Object.keys(MoneyUnit)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({ label: key, value: (MoneyUnit as any)[key] }));
}

export enum ItemType {
  Weapon = 'Weapon',
  Armor = 'Armor',
  Potion = 'Potion',
  Gear = 'Gear',
  Food = 'Food',
  Tool = 'Tool',
  Scroll = 'Scroll',
  Artifact = 'Artifact',
}

export function getItemTypeOptions() {
  return Object.keys(ItemType)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({ label: key, value: (ItemType as any)[key] }));
}

export interface Weapon extends Item {
  attacks: Attack[];
}

export interface Armor extends Item {
  armorClass: number;
  armorType: ArmorType;
}

export enum ArmorType {
  Light = 'Light',
  Medium = 'Medium',
  Heavy = 'Heavy',
  Shield = 'Shield',
}

export function getArmorTypeOptions() {
  return Object.keys(ArmorType)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({ label: key, value: (ArmorType as any)[key] }));
}

export interface Tool extends Item {
  toolType: ToolType;
}

export enum ToolType {
  Artisan = 'Artisan',
  Disguise = 'Disguise',
  Forgery = 'Forgery',
  Gaming = 'Gaming',
  Herbalism = 'Herbalism',
  Musical = 'Musical',
  Navigator = 'Navigator',
  Poisoner = 'Poisoner',
  Thieves = 'Thieves',
}

export function getToolTypeOptions() {
  return Object.keys(ToolType)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({ label: key, value: (ToolType as any)[key] }));
}
