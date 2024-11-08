import { Monster } from './../../app/types/monsters';
import { ReferenceTo } from './../../app/types/general';
import {
  Encounter,
  Faction,
  Location,
  Quest,
  Region,
  Rumor,
} from '@campaign-manager/shared';

export const factions: Faction[] = [
  {
    id: 0,
    name: 'Forest Guardians',
    description: 'Protectors of the ancient woods.',
    leaders: [{ id: 1, name: 'Elder Treebeard' }],
    allies: [{ id: 2, name: 'Wood Elves' }],
    enemies: [{ id: 3, name: 'Fire Cultists' }],
  },
  {
    id: 1,
    name: 'Desert Nomads',
    description: 'A roaming tribe of desert dwellers.',
    leaders: [{ id: 4, name: 'Nomad Chieftain' }],
    allies: [{ id: 5, name: 'Sand Shamans' }],
    enemies: [{ id: 6, name: 'Scorpion Cult' }],
  },
];

// Mocked Quests
export const quests: Quest[] = [
  {
    id: 0,
    name: 'Find the Lost Artifact',
    description: 'Locate the ancient relic hidden in the Mystic Woods.',
    objectives: [
      'Travel to Mystic Woods',
      'Defeat the Bandits',
      'Find the Artifact',
    ],
    rewards: [{ id: 1, name: 'Ancient Sword' }],
    startingPoint: { id: 0, name: 'Old Treehouse' }, // Reference to Location
    npcsInvolved: [{ id: 1, name: 'Elder Treebeard' }], // Reference to NPC/Character
  },
  {
    id: 1,
    name: 'Defend the Oasis',
    description: 'Protect the Scorched Oasis from desert raiders.',
    objectives: ['Fortify the Oasis', 'Repel the Raiders'],
    rewards: [{ id: 2, name: 'Desert Shield' }],
    startingPoint: { id: 2, name: 'Scorched Oasis' }, // Reference to Location
    npcsInvolved: [{ id: 4, name: 'Nomad Chieftain' }], // Reference to NPC/Character
  },
];

export const encounters: Encounter[] = [
  {
    id: 0,
    monsters: [
      { id: 0, name: 'Forest Bandit' },
      { id: 3, name: 'Forest Bandit leader' },
    ], // Reference to Monsters
    name: 'Forest Bandits',
    description: 'Bandits roaming the forest.',
    outcome: 'Defeated the bandits and secured the forest path.',
    location: { id: 0, name: 'Old Treehouse' }, // Reference to Location by ID
  },
  {
    id: 1,
    monsters: [{ id: 1, name: 'Cave Troll' }],
    name: 'Cave Troll',
    description: 'A large troll that lurks in dark caves.',
    outcome: 'The troll was vanquished, but not without cost.',
    location: { id: 1, name: 'Whispering Cave' },
  },
  {
    id: 2,
    monsters: [{ id: 2, name: 'Death Speaker' }],
    name: 'Death Speaker',
    description: 'A mysterious figure that controls the dead.',
    outcome: 'The Death Speaker vanished, but left behind an ominous warning.',
    location: { id: 2, name: 'Scorched Oasis' },
  },
];

// Sample data for Locations
export const locations: Location[] = [
  {
    id: 0,
    name: 'Old Treehouse',
    type: 'Shelter',
    description: 'An old treehouse built by forgotten travelers.',
    notableFeatures: ['Hidden Entrance', 'Worn-out Furniture'],
    // encounters: [{ id: 0, name: 'Forest Bandits' }], // Reference to Encounter by ID
  },
  {
    id: 1,
    name: 'Whispering Cave',
    type: 'Cave',
    description: 'A deep cave that echoes with distant voices.',
    notableFeatures: ['Strange Echoes', 'Glowing Moss'],
    // encounters: [{ id: 1, name: 'Cave Troll' }],
  },
  {
    id: 2,
    name: 'Scorched Oasis',
    type: 'Oasis',
    description: 'A dried-up oasis surrounded by ash-covered palm trees.',
    notableFeatures: ['Dry Well', 'Ashy Palms'],
    // encounters: [{ id: 2, name: 'Death Speaker' }],
  },
];

// Sample data for Rumors
export const rumors: Rumor[] = [
  {
    id: 0,
    name: 'Strange Lights',
    from: [{ id: 0, name: 'Old Hermit' }], // Assuming 'Old Hermit' refers to a Character
    content:
      'People have reported seeing strange lights in the forest at night.',
  },
  {
    id: 1,
    name: 'Flickering Shadows',
    from: [{ id: 0, name: 'Desert Merchant' }], // Assuming 'Desert Merchant' refers to a Character
    content:
      'There are tales of shadows flickering in the distance, even on clear days.',
  },
];

// Sample data for Regions
export const regions: Region[] = [
  {
    id: 0,
    img: './img/mystic.png',
    name: 'Mystic Woods',
    description:
      'A mysterious forest filled with ancient trees and magical creatures.',
    notableFeatures: ['Ancient Oak', 'Enchanted River', 'Glowing Mushrooms'],
    locations: [locations[0], locations[1]], // Map to relevant Location data
    factions: [factions[0], factions[1]], // Map to Faction
    quests: [quests[0], quests[1]], // Map to Quest
    rumors: [rumors[0], rumors[1]], // Map to Rumor
  },
];
