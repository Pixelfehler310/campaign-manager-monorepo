import { Character } from './characters';
import { Monster } from './monsters';
import { Item } from './inventory';
import { Location, Region } from './regions';
import { PrimaryKeyOf, ReferenceTo } from './general';

export interface Campaign {
  name: string;
  description: string;
  world: World;
  story: Story;
  playerCharacters: ReferenceTo<'Character'>[];
}

export interface World {
  name: string;
  regions: ReferenceTo<'Region'>[];
  factions: ReferenceTo<'Faction'>[];
  keyNPCs: ReferenceTo<'Character'>[];
  encounters: ReferenceTo<'Encounter'>[]; // TODO TYPE INTERFACE
  quests: ReferenceTo<'Quest'>[];
}

export interface Story {
  id: number;
  title: string;
  overview: string;
  acts: ReferenceTo<'Act'>[];
}

export interface Act {
  id: number;
  name: string;
  description: string;
  chapter: ReferenceTo<'Chapter'>[];
}

export interface Chapter {
  id: number;
  name: string;
  description: string;
  timeline: ReferenceTo<'Event'>[] | ReferenceTo<'Chapter'>[];
}

export interface Faction {
  id: number;
  name: string;
  description: string;
  leaders: ReferenceTo<'Character'>[];
  allies: ReferenceTo<'Character'>[];
  enemies: ReferenceTo<'Character'>[];
}

export interface Event {
  id: number;
  name: string;
  description: string;
  outcome: string;
  location: ReferenceTo<'Location'> | Location;
}

export interface Encounter extends Event {
  id: number;
  monsters: ReferenceTo<'Monster'>[];
}

export interface Quest {
  id: number;
  name: string;
  description: string;
  objectives: string[];
  rewards: ReferenceTo<'Item'>[];
  startingPoint: ReferenceTo<'Location'>;
  npcsInvolved: ReferenceTo<'Character'>[];
}
