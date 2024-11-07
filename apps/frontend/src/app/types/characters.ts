import { PrimaryKeyOf, ReferenceTo } from './general';
import { Inventory } from './inventory';
import { SpellBase, SpellCasterInfo } from './spells';
import { Action } from './actions';
import { Attributes } from './attributes';
import { Ability, Condition, HpInfo, SizeCategory } from './entities';
import { Skills } from './skills';

export enum Lifestyle {
  Wretched = 'Wretched',
  Squalid = 'Squalid',
  Poor = 'Poor',
  Modest = 'Modest',
  Comfortable = 'Comfortable',
  Wealthy = 'Wealthy',
  Aristocratic = 'Aristocratic',
}

export interface Appearance {
  height?: number;
  weight?: number;
  visuals?: string;
  eyeColor?: string;
  hairColor?: string;
  skinColor?: string;
  img?: string;
  sizeCategory: SizeCategory;
}

export interface Character {
  // General
  id: number;
  img?: string;
  name: string;
  level?: number;
  gender?: 'Male' | 'Female' | 'Other';
  // xp: number;

  class?: ReferenceTo<'Class'>; // TODO: value checker (p-autocomplete) 7
  background?: string;
  species: ReferenceTo<'Species'>; // TODO: value checker (p-autocomplete) 7
  player?: string; // todo: Pick<Player, PRIMARY_KEY_OF.Player>; // TODO Klasse erstellen 3 // p autocomplete 7
  abilities?: string[]; // todo: wo ist der unterschied? // Klassenmerkmale, Spezieseigenschaften & Klassen und Hintergrundeigenschaften, implizit durch Klasse, Spezies und Level, aber optional hinzufügen weiterer // auch properties und class_properties // prüfen und dokumentieren pls 3

  // Combat
  inspiration?: boolean;
  deathSaves: boolean[]; // jeder wert mit false ist ein fehlschlag, jeder mit true ein success
  attributes?: Attributes;
  skills?: Skills;
  // todo: implizit initiative?: number; // TODO anzeigen auf form 2 und detailview 1
  speed?: number; // TODO
  ac?: number; // TODO
  hp?: HpInfo;
  // todo implizit passiveWisdom: number; // TODO anzeigen auf form 2 und detailview 1
  actions?: Action[];
  conditions?: Condition[];

  // Lore
  age?: number;
  personality?: string;
  ideals?: string;
  bonds?: string;
  flaws?: string;
  alignment?: string;
  appearance?: Appearance; // TODO anzeigen auf form 2 und detailview 1
  description?: string; // TODO anzeigen auf form 2 und detailview 1
  relationships?: any[]; // TODO anzeigen auf form 3 und detailview 2 // todo datentyp oder sowas 2
  languages?: string[]; // TODO anzeigen auf form 3 und detailview 2, auch gucken was dnd seitig das max ist
  friendlyFactions?: ReferenceTo<'Faction'>[]; // TODO Ordne Faction objekt zu // todo pick 1 // todo anzeigen 5form,4detail
  enemyFactions?: ReferenceTo<'Faction'>[]; // TODO Ordne Faction objekt zu // todo pick 1 // todo anzeigen 5form ,4 detail
  faith?: string; // TODO anzeigen auf form 2 und detailview 1
  lifestyle?: Lifestyle; // TODO anzeigen auf form (dropdown pls)4 und detailview 1

  inventory?: PrimaryKeyOf<'Inventory'> | Inventory; // ! TODO Alle Referenzen so machen (entweder mit pk oder reference to, das wichtige ist der rechte part xD), dann hat man zum einen Klick referenz und die möglichkeit über joins direkt alles zu laden ohne den typ ändern zu müssen

  spellCasterInfo?: PrimaryKeyOf<'SpellCasterInfo'> | SpellCasterInfo;
  // HochsprungOhneAnlauf: -0.30 implizit errechnen
  // HochsprungMitAnlauf: -0.60
  // WeitsprungOhneAnlauf: 0.15
  // WeitsprungMitAnlauf: 0.30
}
export interface Species {
  id: number;
  img?: string;
  name: string;
  description?: string;
  abilities?: Ability[]; // Todo refto!!
}

export interface Class {
  id: number;
  img?: string;
  name: string;
  description?: string;
  abilities?: Ability[];
  subclasses?: ReferenceTo<'Class'>[]; // TODO ausdenken was wir hier machen 4
  learnableSpells?: ReferenceTo<'Spell'>[]; // todo pautocomplete auf form view
}

export interface Subclass extends Class {
  subclassName: string;
  subclassDescription: string;
  parentClass: string;
}
