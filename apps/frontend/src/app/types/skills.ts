import { Attribute } from './attributes';

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
