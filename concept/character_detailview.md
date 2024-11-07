### Character Detailview

Dient zum Anzeigen aller Daten eines Spielers
Orientiert an dem Charactersheet für DnD 5e

#### Daten:

````javascript
export interface Character {
  img?: string; // else default
  name: string;
  player?: string; // else NPC
  classes?: Class[]; // default: None
  species: Species;
  level: number; // Show if !isNPC
  description?: string; // Panel
  background?: string; // Panel
  stats?: Stats;
  skills: Skills;
  attack: Attack[];
  abilities?: Ability[];
  inventory?: Item[];
  spells?: Spell[];
  spellSlots: number[];
  appearance: string;
  relationships?: Relationship[];
}

export interface Stats {
  hp: number;
  ac: number;
  speed: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export type Dice = 'D100' | 'D20' | 'D10' | 'D12' | 'D10' | 'D8' | 'D6' | 'D4';

export type DamageType = 'Hieb' | 'Stich' | '...'; // TODO 0 (GPT fragen nach DND 5e DamageTypes)

export interface Attack {
  dice?: Partial<{ [d in Dice]: number }>;
  bonus: number;
  damage_type: DamageType;
  description: string;
  // formula?
}

export interface Ability {
  name: string;
  description: string;
}

export interface Skills {
  acrobatics: number;
  animalHandling?: number;
  arcana: number;
  athletics: number;
  deception: number;
  history: number;
  insight: number;
  intimidation: number;
  investigation: number;
  medicine: number;
  nature: number;
  perception: number;
  performance: number;
  persuasion: number;
  religion: number;
  sleightOfHand: number;
  stealth: number;
  survival: number;
}

export interface Relationship {
  npc: string;
  relationship: string;
}

export interface Item {
  img?: string; // Show on Card else default
  name: string;
  description: string;  (ellipsis)
  type: string; // Show on Card
  properties: string[];
}

export interface Spell {
  img?: string; // Show on Card
  name: string; // Show on Card
  level: number; // Show on Card, 'Cantrip' if === 0
  school?: string;
  description: string;
  components: string[]; // Show on Card
  castingTime: string; // Show on Card
  range: string; // Show on Card
  duration: string; // Show on Card
  concentration: boolean; // Show on Card
  // learnableBy: Class[] ? // TODO Besser aus Classes Laden // Pick<Class, ...>[] erst machen wenn backend da ist, needs specific filter
}```
````
