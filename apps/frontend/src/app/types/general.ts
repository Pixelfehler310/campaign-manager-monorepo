import {
  Encounter,
  Faction,
  Quest,
  Story,
  Act,
  Chapter,
  Event,
} from './campaigns';
import { Character, Class, Species } from './characters';
import { Item, Inventory } from './inventory';
import { Monster } from './monsters';
import { Location, Region, Rumor } from './regions';
import { Spell, SpellCasterInfo } from './spells';

// TODO REFERENCE TO Object mit id und name und PrimaryKeyOf Type mit nur id
type ReferenceToClass = Pick<Class, 'id' | 'name'>;
type ReferenceToCharacter = Pick<Character, 'id' | 'name'>;
type ReferenceToSpecies = Pick<Species, 'id' | 'name'>;
type ReferenceToItem = Pick<Item, 'id' | 'name'>;
type ReferenceToSpell = Pick<Spell, 'id' | 'name'>;
type ReferenceToRegion = Pick<Region, 'id' | 'name'>;
type ReferenceToMonster = Pick<Monster, 'id' | 'name'>;
type ReferenceToEncounter = Pick<Encounter, 'id' | 'name'>;
type ReferenceToLocation = Pick<Location, 'id' | 'name'>;
type ReferenceToFaction = Pick<Faction, 'id' | 'name'>;
type ReferenceToEvent = Pick<Event, 'id' | 'name'>;
type ReferenceToQuest = Pick<Quest, 'id' | 'name'>;
type ReferenceToRumor = Pick<Rumor, 'id' | 'name'>;
type ReferenceToStory = Pick<Story, 'id' | 'title'>;
type ReferenceToAct = Pick<Act, 'id' | 'name'>;
type ReferenceToChapter = Pick<Chapter, 'id' | 'name'>;

// Definiere die Primärschlüssel für alle Typen
type PrimaryKeyOfClass = Pick<Class, 'id'>;
type PrimaryKeyOfCharacter = Pick<Character, 'id'>;
type PrimaryKeyOfSpecies = Pick<Species, 'id'>;
type PrimaryKeyOfItem = Pick<Item, 'id'>;
type PrimaryKeyOfSpell = Pick<Spell, 'id'>;
type PrimaryKeyOfRegion = Pick<Region, 'id'>;
type PrimaryKeyOfMonster = Pick<Monster, 'id'>;
type PrimaryKeyOfEncounter = Pick<Encounter, 'id'>;
type PrimaryKeyOfLocation = Pick<Location, 'id'>;
type PrimaryKeyOfFaction = Pick<Faction, 'id'>;
type PrimaryKeyOfEvent = Pick<Event, 'id'>;
type PrimaryKeyOfQuest = Pick<Quest, 'id'>;
type PrimaryKeyOfRumor = Pick<Rumor, 'id'>;
type PrimaryKeyOfStory = Pick<Story, 'id'>;
type PrimaryKeyOfAct = Pick<Act, 'id'>;
type PrimaryKeyOfChapter = Pick<Chapter, 'id'>;
type PrimaryKeyOfInventory = Pick<Inventory, 'id'>;
type PrimaryKeyOfSpellCasterInfo = Pick<SpellCasterInfo, 'entity_id'>;

// Erstelle ein Objekt, das die Primärschlüssel enthält
type PrimaryKeys = {
  Class: PrimaryKeyOfClass;
  Character: PrimaryKeyOfCharacter;
  Species: PrimaryKeyOfSpecies;
  Item: PrimaryKeyOfItem;
  Spell: PrimaryKeyOfSpell;
  Region: PrimaryKeyOfRegion;
  Monster: PrimaryKeyOfMonster;
  Encounter: PrimaryKeyOfEncounter;
  Location: PrimaryKeyOfLocation;
  Faction: PrimaryKeyOfFaction;
  Event: PrimaryKeyOfEvent;
  Quest: PrimaryKeyOfQuest;
  Rumor: PrimaryKeyOfRumor;
  Story: PrimaryKeyOfStory;
  Act: PrimaryKeyOfAct;
  Chapter: PrimaryKeyOfChapter;
  Inventory: PrimaryKeyOfInventory;
  SpellCasterInfo: PrimaryKeyOfSpellCasterInfo;
};

type Objects = {
  Class: Class;
  Character: Character;
  Species: Species;
  Item: Item;
  Spell: Spell;
  Region: Region;
  Monster: Monster;
  Encounter: Encounter;
  Location: Location;
  Faction: Faction;
  Event: Event;
  Quest: Quest;
  Rumor: Rumor;
  Story: Story;
  Act: Act;
  Chapter: Chapter;
  Inventory: Inventory;
  SpellCasterInfo: SpellCasterInfo;
};

export type PrimaryKeyOf<T extends keyof PrimaryKeys> = PrimaryKeys[T];

// TODO gucken wo nur primary keys und wo eine namensreference gebraucht wird
type References = {
  Class: ReferenceToClass;
  Character: ReferenceToCharacter;
  Species: ReferenceToSpecies;
  Item: ReferenceToItem;
  Spell: ReferenceToSpell;
  Region: ReferenceToRegion;
  Monster: ReferenceToMonster;
  Encounter: ReferenceToEncounter;
  Location: ReferenceToLocation;
  Faction: ReferenceToFaction;
  Event: ReferenceToEvent;
  Quest: ReferenceToQuest;
  Rumor: ReferenceToRumor;
  Story: ReferenceToStory;
  Act: ReferenceToAct;
  Chapter: ReferenceToChapter;
};

export type ReferenceTo<T extends keyof References> = References[T];

// todo resolveReference()-Methode die das objekt vom backend lädt
// todo resolveReferenceList()-Methode die mehrere objekte vom backend lädt (join- request -> mehr performance)

export function isFullEntity<T extends keyof References>(
  entity: ReferenceTo<T> | Objects[T]
): entity is Objects[T] {
  console.warn(
    'full Obj',
    entity as Objects[T],
    Object.keys(entity as Objects[T]).length
  );
  console.warn(
    'reference Obj',
    entity as ReferenceTo<T>,
    Object.keys(entity as ReferenceTo<T>).length
  );

  return (
    Object.keys(entity as Objects[T]).length >
    Object.keys(entity as ReferenceTo<T>).length
  );
}

export function isFullEntityOrPrimaryKey<T extends keyof PrimaryKeys>(
  entity: PrimaryKeyOf<T> | Objects[T]
): entity is Objects[T] {
  console.warn(
    'full Obj',
    entity as Objects[T],
    Object.keys(entity as Objects[T]).length
  );
  console.warn(
    'reference Obj',
    entity as PrimaryKeyOf<T>,
    Object.keys(entity as PrimaryKeyOf<T>).length
  );

  return (
    Object.keys(entity as Objects[T]).length >
    Object.keys(entity as PrimaryKeyOf<T>).length
  );
}
