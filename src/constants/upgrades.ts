import { civLevelData } from '~/types/game-data-types';

// We could pass the level number as the index to related functions, and store index in an atom.
export const CIV_LEVELS: Array<civLevelData> = [
  {
    name: 'Makeshift Camp',
    description: 'A hastily assembled group of tents and basic barricades. Barely enough to keep the zombies at bay.',
    baseMultiplier: 1,
    foodCost: 0,
    waterCost: 0,
    scrapCost: 0,
    woodCost: 0,
  },
  {
    name: 'Settlement',
    description: 'You have taken the first steps towards building a defendable, self-sustaining encampment.',
    baseMultiplier: 1.1,
    foodCost: 50,
    waterCost: 100,
    scrapCost: 0,
    woodCost: 100,
  },
  {
    name: "Survivor's Haven",
    description: 'The outpost has grown into a small community. Basic amenities and better defenses are now in place.',
    baseMultiplier: 1.2,
    foodCost: 200,
    waterCost: 150,
    scrapCost: 0,
    woodCost: 150,
  },
  {
    name: 'Resilient Stronghold',
    description:
      'A well-organized settlement with reinforced walls and watchtowers. Capable of withstanding significant zombie assaults.',
    baseMultiplier: 1.3,
    foodCost: 400,
    waterCost: 200,
    scrapCost: 0,
    woodCost: 150,
  },
  {
    name: 'Thriving Colony',
    description:
      'A self-sufficient community with advanced defenses, agriculture, and rudimentary manufacturing capabilities.',
    baseMultiplier: 1.4,
    foodCost: 500,
    waterCost: 300,
    scrapCost: 0,
    woodCost: 250,
  },
  {
    name: 'Beacon of Hope',
    description: 'A bustling town-sized settlement, serving as a hub for survivors, with formidable defenses.',
    baseMultiplier: 1.5,
    foodCost: 600,
    waterCost: 350,
    scrapCost: 0,
    woodCost: 350,
  },
  {
    name: "Survivor's Citadel",
    description: 'An impregnable fortress-city. The pinnacle of post-apocalyptic engineering and community building.',
    baseMultiplier: 1.6,
    foodCost: 900,
    waterCost: 400,
    scrapCost: 0,
    woodCost: 450,
  },
];

export const CIV_LEVELS_COUNT: number = CIV_LEVELS.length as number;
