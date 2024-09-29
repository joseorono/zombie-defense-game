// Just random, wacky flavor text for this game set in the Roman Empire.
// I want it to read like a Monty Python skit or Satirical "Local News" Headlines about life in Ancient Rome.

import { playerResources } from '~/types/game-data-types';

// I want them to be funny and short (a sentence or so). They have to be stuff that could plausibly happen in the setting or in Roman mythology.
export const FLAVOR_TEXT_HEADLINES: string[] = [
  'City Under Lockdown as Mysterious Illness Spreads',
  'Government Declares State of Emergency, Quarantines Entire City',
  'Hospitals Overwhelmed by Surge of Unusual Cases',
  'Military Deployed to Enforce City-Wide Curfew',
  'Panic Buying Empties Supermarket Shelves',
  'Scientists Baffled by Rapid Spread of Unknown Pathogen',
  'CDC Warns of Highly Contagious New Virus',
  'Border Checkpoints Established to Contain Outbreak',
  'Local Authorities Urge Residents to Stay Indoors',
  'Emergency Broadcast System Activated Across the City',
  'Flights Grounded, Public Transportation Halted',
  'Makeshift Clinics Set Up to Handle Influx of Patients',
  'Conflicting Reports on Nature of Disease Cause Confusion',
  "City's Perimeter Sealed Off by National Guard",
  'Telecommunications Networks Strained as Panic Spreads',
  'Local Government Offices Closed, Essential Services Only',
  'Unconfirmed Reports of Violence at Quarantine Zones',
  'Health Officials Stress Importance of Personal Hygiene',
  'Schools and Public Spaces Shuttered Indefinitely',
  'Residents Advised to Stock Up on Essential Supplies',
];

export const FAKE_HEADLINES_COUNT = FLAVOR_TEXT_HEADLINES.length;

// Random names for "Newspaper" names
export const NEWSPAPER_NAMES: string[] = [
  'The National Observer',
  'Daily American',
  'The Metropolitan Times',
  'The Continental Post',
  'Liberty Herald',
  'The Federal Tribune',
  'United States Chronicle',
  'The Republic Gazette',
  'American Standard',
  'The Capital Courier',
  'Freedom Press',
  'The Heartland Echo',
  'Coastal Bulletin',
  'The Union Journal',
  'Patriot Dispatch',
  'The Frontier News',
  'Eagle Eye Daily',
  'The Statesman Review',
  'Atlantic Sentinel',
  "The Citizen's Voice",
];

interface IResourceInfo {
  name: string;
  description: string;
}

export const RESOURCE_INFO: Record<keyof playerResources, IResourceInfo> = {
  food: {
    name: 'Food',
    description: 'Food is the most important resource. Without it, your civilians will starve.',
  },
  water: {
    name: 'Water',
    description: 'The source of life. Can be found everywhere, distilled, or obtained from rivers.',
  },
  wood: {
    name: 'Wood',
    description: 'Used for building and crafting. Can be found in the forest, homes, or elsewhere.',
  },
  scrap: {
    name: 'Metal Scrap',
    description: 'A versatile resource for building and crafting. Can be found in the forest, homes, or elsewhere.',
  },
  civilianCount: {
    name: 'Civilians',
    description: '# of people under your watch. Workers, but also mouths to feed.',
  },
} as const;
