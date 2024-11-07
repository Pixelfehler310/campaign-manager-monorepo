import { Character } from './characters';
import { Encounter, Faction, Quest } from './campaigns';
import { ReferenceTo } from './general';

export interface Region {
  id: number;
  img?: string;
  name: string;
  description?: string;
  notableFeatures?: string[];
  locations?: ReferenceTo<'Location'>[]; // map to Location
  factions?: ReferenceTo<'Faction'>[] | Faction[]; // map to Faction
  quests?: ReferenceTo<'Quest'>[] | Quest[]; // zusammengesetzt aus locations + zusätzliche regionalquests
  rumors?: ReferenceTo<'Rumor'>[]; // map to Rumor
}

export interface Rumor {
  id: number;
  name: string;
  from: ReferenceTo<'Character'>[]; // map to Character
  content: string;
}

export interface Location {
  id: number;
  img?: string;
  name: string;
  type: string;
  description: string;
  notableFeatures: string[];
  encounters?: ReferenceTo<'Encounter'>[]; // map to Encounter TODO weg mit de schese
  // quests?: ReferenceTo<'Quest'>[] | Quest[]; // map to Quest
  // rumors?: ReferenceTo<'Rumor'>[] | Rumor[]; // map to Rumor
}
