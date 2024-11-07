// species-mock-data.ts
import { Species } from 'src/app/types/characters';
import { Ability } from 'src/app/types/entities';
// Beispiel-Abilities
export const abilities: Ability[] = [
  {
    id: 1,
    name: 'Fire Breath',
    description:
      'Allows the species to exhale a cone of fire, dealing damage in an area.',
  },
  {
    id: 2,
    name: 'Regeneration',
    description: 'Heals a small amount of health each turn.',
  },
  {
    id: 3,
    name: 'Camouflage',
    description:
      'Makes the species harder to detect by blending into surroundings.',
  },
];

// Beispiel-Species
export const species: Species[] = [
  {
    id: 1,
    name: 'Dragonkin',
    img: './img/dragonkin.png', // Beispielbildpfad
    description: 'A mighty species with dragon-like abilities and appearance.',
    abilities: [abilities[0], abilities[1]], // Verknüpfung zu den Abilities
  },
];
