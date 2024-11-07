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

export enum DiceType {
  D2 = 2,
  D4 = 4,
  D6 = 6,
  D8 = 8,
  D10 = 10,
  D12 = 12,
  D20 = 20,
  D100 = 100,
}

export type DiceData = {
  [key in DiceType]?: number; // Jeder Key ist vom Typ DiceType und kann eine Zahl oder undefined sein
};

export function getDiceTypes(
  diceData: DiceData
): { dice: DiceType; count: number }[] {
  const diceTypes: { dice: DiceType; count: number }[] = [];
  for (const [key, value] of Object.entries(diceData)) {
    if (value) {
      diceTypes.push({ dice: Number(key), count: value });
    }
  }
  return diceTypes;
}

export function formatDamage(damage: DiceData): string {
  return Object.entries(damage)
    .map(([diceType, count]) => `${count}x D${diceType}`)
    .join(', ');
}

export function getDiceKeys(): string[] {
  return Object.keys(DiceType).filter((key) => isNaN(Number(key)));
}

export function getDiceEntries(): { label: string; value: number }[] {
  return getDiceKeys().map((key) => ({
    label: key,
    value: DiceType[key as keyof typeof DiceType],
  }));
}

export enum SizeCategory {
  Tiny = 'Tiny',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  Huge = 'Huge',
  Gargantuan = 'Gargantuan',
}

export function getSizeCategory(
  size: number | string
): SizeCategory | undefined {
  if (size == 1) return SizeCategory.Tiny;
  if (size == 2) return SizeCategory.Small;
  if (size == 3) return SizeCategory.Medium;
  if (size == 4) return SizeCategory.Large;
  if (size == 5) return SizeCategory.Huge;
  if (size == 6) return SizeCategory.Gargantuan;
  return undefined;
}

export function getSizeCategoryEntries(): { label: string; value: string }[] {
  return Object.entries(SizeCategory).map(([key, value]) => ({
    label: key,
    value: value,
  }));
}

export interface HpInfo {
  // TODO auf detail und formviews hübsch anzeigen
  max: number; // todo so ne leiste von prime ng wär hier echt cool 6
  current: number;
  temp?: number;
  dice: DiceType; // DiceType sollte ne iconclass enum bekommen icon sollte dann hier angezeigt werden
  regenerationDiceCount?: number; // TODO max, used, implizit dadurch remaining 2
}

export interface Ability {
  // todo hier steckt noch mehr dahinter glaub ich da weiß ich dnd seitig nicht so genau wie das da ist
  id: number;
  name: string;
  description: string;
}

export enum Condition {
  Blinded = 'Blinded',
  Charmed = 'Charmed',
  Deafened = 'Deafened',
  Frightened = 'Frightened',
  Paralyzed = 'Paralyzed',
  Petrified = 'Petrified',
  Poisoned = 'Poisoned',
  Prone = 'Prone',
  Restrained = 'Restrained',
  Stunned = 'Stunned',
  Unconscious = 'Unconscious',
}

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

export interface DamageResponse {
  damageType: DamageType;
  effect: DamageEffect;
}

export interface DamageEffect {
  effect: 'immune' | 'vulnerable' | 'resistant';
}

export interface Language {
  name: string;
  note?: string;
}

export enum ChallengeRating { // Coool, aber warum nicht einfach ne Zahl? xD
  CR_0 = '0',
  CR_1_8 = '1/8',
  CR_1_4 = '1/4',
  CR_1_2 = '1/2',
  CR_1 = '1',
  CR_2 = '2',
  CR_3 = '3',
  CR_4 = '4',
  CR_5 = '5',
  CR_6 = '6',
  CR_7 = '7',
  CR_8 = '8',
  CR_9 = '9',
  CR_10 = '10',
  CR_11 = '11',
  CR_12 = '12',
  CR_13 = '13',
  CR_14 = '14',
  CR_15 = '15',
  CR_16 = '16',
  CR_17 = '17',
  CR_18 = '18',
  CR_19 = '19',
  CR_20 = '20',
  CR_21 = '21',
  CR_22 = '22',
  CR_23 = '23',
  CR_24 = '24',
  CR_25 = '25',
  CR_26 = '26',
  CR_27 = '27',
  CR_28 = '28',
  CR_29 = '29',
  CR_30 = '30',
}

export interface Monster {
  id: number;
  // TODO Parent class Entity for Player & Others 3
  name: string;
  type: string;
  description?: string;
  attributes?: Attributes;
  actions?: Action[];
  skills?: Skills;
  abilities?: Ability[];
  traits?: string[];
  challengeRating?: ChallengeRating;
  img?: string;
  damageResponses?: DamageResponse[]; // TODO auf wiki card updaten 2
  sizeCategory: SizeCategory;
  languages?: Language[]; // TODO müsste eigener Typ, da feste Werte // SIS: keine festen werte, wegen homebrew content, aber eigener typ ist trd gut, glaube nur dass die beschreibung sehr selten relevant ist und standardmäßig ausgeblendet werden soll, also lieber bei language p autocomplete mit diesen chips da drin, in den items beim autocomplete vorschlag kann man dann ggf die beschreibung mit anzeigen
  languageNoteOverride?: string;
}

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

export enum Skill {
  Acrobatics = 'acrobatics',
  Arcana = 'arcana',
  Athletics = 'athletics',
  Deception = 'deception',
  History = 'history',
  Insight = 'insight',
  Intimidation = 'intimidation',
  Investigation = 'investigation',
  Medicine = 'medicine',
  Nature = 'nature',
  Perception = 'perception',
  Performance = 'performance',
  Persuasion = 'persuasion',
  Religion = 'religion',
  SleightOfHand = 'sleightOfHand',
  Stealth = 'stealth',
  Survival = 'survival',
  AnimalHandling = 'animalHandling',
}

export const skillAttributes: Record<
  // todo hübsch machen, label ist vermutlich redundant 2
  Skill,
  { label: string; modifierAttribute: Attribute }
> = {
  [Skill.Acrobatics]: { label: 'Acrobatics', modifierAttribute: Attribute.DEX },
  [Skill.AnimalHandling]: {
    label: 'Animal Handling',
    modifierAttribute: Attribute.WIS,
  },
  [Skill.Arcana]: { label: 'Arcana', modifierAttribute: Attribute.INT },
  [Skill.Athletics]: { label: 'Athletics', modifierAttribute: Attribute.STR },
  [Skill.Deception]: { label: 'Deception', modifierAttribute: Attribute.CHA },
  [Skill.History]: { label: 'History', modifierAttribute: Attribute.INT },
  [Skill.Insight]: { label: 'Insight', modifierAttribute: Attribute.WIS },
  [Skill.Intimidation]: {
    label: 'Intimidation',
    modifierAttribute: Attribute.CHA,
  },
  [Skill.Investigation]: {
    label: 'Investigation',
    modifierAttribute: Attribute.INT,
  },
  [Skill.Medicine]: { label: 'Medicine', modifierAttribute: Attribute.WIS },
  [Skill.Nature]: { label: 'Nature', modifierAttribute: Attribute.INT },
  [Skill.Perception]: { label: 'Perception', modifierAttribute: Attribute.WIS },
  [Skill.Performance]: {
    label: 'Performance',
    modifierAttribute: Attribute.CHA,
  },
  [Skill.Persuasion]: { label: 'Persuasion', modifierAttribute: Attribute.CHA },
  [Skill.Religion]: { label: 'Religion', modifierAttribute: Attribute.INT },
  [Skill.SleightOfHand]: {
    label: 'Sleight of Hand',
    modifierAttribute: Attribute.DEX,
  },
  [Skill.Stealth]: { label: 'Stealth', modifierAttribute: Attribute.DEX },
  [Skill.Survival]: { label: 'Survival', modifierAttribute: Attribute.WIS },
};

export type SkillProficiency = 'untrained' | 'proficient' | 'expert';

export type Skills = Partial<Record<Skill, SkillProficiency>> & {
  jackOfAllTrades?: boolean;
  weapon_skills?: WeaponSkills;
  // proficiencyBonus = Math.floor((characterLevel - 1) / 4) + 2;
};

export interface WeaponSkills {
  // TODO auf form und detailview anzeigen (4,2)
  armor?: {
    // todo armortype enum
    light?: boolean;
    medium?: boolean;
    heavy?: boolean;
    shields?: boolean;
  }; // todo weapon type enum
  weapons?: {
    easy?: boolean;
    war?: boolean;
    other?: string[];
  };
}

export function toAction(params: Spell): Action | undefined {
  return undefined;
}

export type SpellType = 'Attack' | 'Heal' | 'Utility'; // ...

//TODO Struktur wurde versucht zu überarbeiten, aber die Auswirkung auf das Backend ist nicht klar. Deshalb habe ich die meisten
//TODO Strukturen erstmal so belassen.
export interface SpellBase {
  id: number;
  img?: string;
  name: string;
  level: number;
  school?: string;
  castingTime?: number; // in Sekunden
  duration?: number; // in Sekunden
  description?: string;
  range?: string;
  components?: SpellComponent[];
  effects?: SpellEffect[];
  // Erstmal raus, todo für später: spell upcasten scalingEffects?: SpellLevelEffect[]; // Fester Wert, meist dicedata / number (beides möglich) in die spezifische spell klasse
  attributeModifier?: Attribute;
  concentration?: boolean; // Anzeigen auf der Karte
  diceData?: DiceData;
}

export interface SpellEffect {
  // todo hier merkst du selber, dass verschiedene typen verschiedene daten benötigen, deswegen würde ich hier auch aufteilen und die nirgends zusammenführen
  // aber dass ein spell mehrere verschiedene effecte hat ist ein sehr guter und sinnvoller gedanke. Es gibt ja z.b auch necromancer spells die dmg austeilen und gleichzeitig healen
  type: 'damage' | 'healing' | 'buff' | 'debuff' | 'utility';
  description: string;
  // duration?: number; // Für Buffs/Debuffs/Utilities in Runden oder Sekunden nur // TODO  in den typen einbauen wo es auch gebracuht wird // btw wir nehmen alles in sekunden / minuten / tagen, 6s ^= einer runde
  // diceData?: DiceData; // Optionaler Würfelwurf für diesen Effekt // TODO s.o
  level: number;
}

// Also:
export interface DamageSpellEffect extends SpellEffect {
  // todo das ergibt irgendwie noch nicht so viel sinn was ich hier mache, müssen wier mal zusammen drüber reden
  type: 'damage';
  attackBonus: number;
  dmgDiceData: number;
}

export interface BuffSpellEffect extends SpellEffect {
  // TODO
}

// export interface SpellLevelEffect {
//   level: number; // Stufe, auf der der Zauber gewirkt wird
//   effects: SpellEffect[]; // z.B. erhöhter Schaden bei höheren Stufen
// }

//TODO sollte man die Zauber am besten so aufteilen? Oder kann man das irgendwie entspannter für die Datenbank machen?
// Datenbank juckt nicht, das krieg ich da alles schon igwie hin :P wir machen da ne richtig hübsche multitable struktur draus, ist schon gut die so aufzuteilen :3
// Alle Spells sollten in ihrer spezifischen form auch eine korrelierende Action speichern, oder zumindest alle infos für eine action bereitstellen (zum beispiel durch extends Action)
// Dann kann man vllt auch attack spells von attackaction extenden lassen usw.
// Kurze info zu dnd spells:
// Es gibt attackspells die wie angriffe sind, wo anfangs ein angriffswurf erforderlich ist (d20), darauf wird ein angriffsbonus gerechnet (im spell definiert)
// Es gibt andere die keinen angriffswurf sondern einen rettungswurf erfordern. da wird über eine formel (aus dem character sheet oder dem phb zu entnehmen) angewendet um zu gucken welchen wert das ANGEGRIFFENE Entity erreichen muss. Oft wird dann immer mit einer festen Anzahl an dmg würfeln geworfen, besteht das angegriffene objekt den rettungswurf, wird der schaden oft halbiert und es werden keine debuffsauferlegt, besteht es den rettungswurf nicht, dann gibt es oft noch nen debuff dazu
// Es gibt bestimmt auch andere Angriffe die keine spells sind die sowas erfordern, also sollte das schon in der action berücksichtigt werden
// bsp: dissonantes flüstern

// Die
// Angriff-Zauber
// export interface AttackSpell extends SpellBase {
//   effects: SpellEffect[]; // Zum Beispiel Schadenseffekte und Debuffs kombiniert
//   damageType: string; // Schadensart, z.B. Feuer, Eis, etc.
//   attackBonus?: number;
//   // Weitere spezifische Felder für Angriff-Zauber
// }

// // Verteidigungs-Zauber
// export interface DefenseSpell extends SpellBase {
//   effects: SpellEffect[]; // Zum Beispiel Schadenseffekte und Debuffs kombiniert
//   shieldValue: number; // Wert des Schilds oder Schutzes
//   duration: number; // Dauer in Sekunden
//   // Weitere spezifische Felder für Verteidigungs-Zauber
// }

// // Heil-Zauber
// export interface HealSpell extends SpellBase {
//   effects: SpellEffect[]; // Zum Beispiel Schadenseffekte und Debuffs kombiniert
//   healingBonus: number; // formel ist manchmal zahl + dice, manchmal nur dice, und manchmal nur zahl
//   healingDice?: DiceData;
//   // Weitere spezifische Felder für Heil-Zauber
// }

// export interface UtilitySpell extends SpellBase {
//   utilityType: string; // z.B. Teleportation, Unsichtbarkeit, etc.
// }

export interface SpellComponent {
  // hübsch :D // item id / type zuordnen
  type: 'verbal' | 'somatic' | 'material';
  description: string; // Beschreibung oder Details
  consumed?: boolean; // Gibt an, ob die Komponente aufgebraucht wird
}

export interface SpellLevel {
  level: number; // Zauberstufe
  spells: ReferenceTo<'Spell'>[]; // Referenzen zu Zaubern dieser Stufe
  currentSlots: number; // Verfügbare Slots auf dieser Stufe
  maxSlots: number; // Maximale Anzahl an Slots auf dieser Stufe
}

export interface SpellCasterInfo {
  entity_id: number;
  spellLevel: SpellLevel[];
  spellClass?: ReferenceTo<'Class'>;
  spellAttribute?: Attribute;
  spellAttackbonus?: number;
  spellSavingThrow?: string; // number / implizit errechenbar, festgelegte Formel
}

export interface Spell {
  // TODO aufteilen in superklasse, atkspell, defspell, healspell, ... 3
  id: number;
  img?: string; // Show on Card
  name: string;
  level: number;
  school?: string;
  castingTime?: number; // in seconds
  duration?: number; // in seconds
  description?: string;
  range?: string;
  components?: string[];
  concentration?: boolean; // Show on Card
  diceData?: DiceData;
}

/*export interface SpellLevel {
//  spells: ReferenceTo<'Spell'>[];
//  currentSlots: number;
//  maxSlots: number;
//}

export interface Spell {
  // TODO aufteilen in superklasse, atkspell, defspell, healspell, ... 3
  id: number;
  img?: string; // Show on Card
  name: string;
  level: number;
  school?: string;
  castingTime?: number; // in seconds
  duration?: number; // in seconds
  description?: string;
  range?: string;
  components?: string[];
  concentration?: boolean; // Show on Card
  diceData?: DiceData;
}

//export interface SpellCasterInfo {
  entity_id: number;
  spellLevel: SpellLevel[];
  spellClass?: ReferenceTo<'Class'>;
  spellAttribute?: Attribute;
  spellAttackbonus?: number;
  spellSavingThrow?: string; // number / implizit errechenbar, festgelegte Formel
}*/
