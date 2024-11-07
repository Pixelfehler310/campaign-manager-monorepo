### Character Detailview

Dient zum Anzeigen aller Daten einer Region

#### Daten:

```javascript
interface Character {
  img?: string // else default
  name: string;
  player?: string; // else NPC
  classes?: Class[]; // default: None
  species: Species;
  level: number; // Show if !isNPC
  description?: string;
  background?: string;
  stats?: CharacterStats;
  abilities?: Ability[];
  inventory?: Item[];
  spells?: Spell[];
  appearance: string;
  relationships?: Relationship[];
}

interface CharacterStats {
  hp: number;
  ac: number;
  attack: Attack[];
  skills: Skill[];
}

export type Dice = 'D100'| 'D20' | 'D10' | 'D12' | 'D10' | 'D8' | 'D6' | 'D4'

export type DamageType = 'Hieb'| 'Stich' | '...' // TODO

interface Attack {
  dice: {[dice: Dice]: count};
  bonus: number;
  damage_type: DamageType;
  description: string;
  // formula?
}

interface Ability {
  name: string;
  description: string;
}

interface Skills {
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

interface Relationship {
  npc: string;
  relationship: string;
}
```
