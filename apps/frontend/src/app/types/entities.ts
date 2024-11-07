import { DiceType } from './dice';

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
