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
