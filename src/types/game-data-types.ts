/*
======================================
        Game Data Types
======================================
*/

export type playerResources = {
  food: number;
  water: number;
  wood: number;
  scrap: number;
  civilianCount: number;
};

export type priceData = {
  foodCost: number;
  waterCost: number;
  woodCost: number;
  scrapCost: number;
};

export interface IPlayerWeaponStats {
  damage: number;
  attackSpeed: number;
  ammoCapacity: number;
  reloadSpeed: number;
}

/*
======================================
        Game State
======================================
*/

export interface IProgressToggles {}

export interface IGameStateSnapshot {
  musicVolume: number;
  soundVolume: number;
  playMusic: boolean;
  playSound: boolean;
  progressToggles: IProgressToggles;
  resources: playerResources;
}

/*
======================================
        Scoreboard
======================================
*/

export type ScoreEntry = {
  playerName: string;

  // Counters
  civilianAdultCount: number;
  civilianChildCount: number;
  daysSurvived: number;
  unitsRemaining: number;

  // Computed Values
  pointsFromdays: number;
  pointsFromCivilians: number;
  pointsFromWeaponUpgrades: number;
  pointsFromResources: number;
  totalScore: number;
};

/*
======================================
        Event
======================================
*/

export type EventOutcome = {
  civiliansDelta: number;
  remainingdaysDelta: number; // For making the game last longer or less
} & playerResources;

export type eventData = {
  title: string;
  probability: number;
  description: string;
  answers: string[];
  outcomes: EventOutcome[];
};

/*
======================================
        Tower Defense Minigame
======================================
*/

type enemyType = 'basic' | 'fast' | 'strong' | 'dog' | 'boss';

/*
    Gunman: Shoots enemies in row.
    Shotgunner: Shoots enemies in a cone or just hits harder but is slower.
    Barricade: Stops enemies until it breaks.
    Barbed Barricade: Stops enemies and deals damage, more fragile than normal barricades.
    Mine: Explodes when enemies step on it, killing one enemy.
    Tripwire: Detonates and kills all enemies in row.
*/
export type unitTypes = 'gunman' | 'shotgunner' | 'barricade' | 'barbed-barricade' | 'mine' | 'tripwire';

// If done this way, we can have a base class for all units, using different stats for each unit.
// Maybe this would work better as a class?
//export interface IUnitStats {}
/*
class baseUnit {
  hp: number;
  damageOnContact: number;
  damageRanged: number;
  range: number;
  killsRow: boolean;
  attackSpeed: number;
  ammoCapacity: number;
  reloadSpeed: number;
  cost: playerResources;
}
*/

export type unitCount = {
  [key in unitTypes]: number;
};

export type enemyData = {
  hp: number;
  damage: number;
  moveSpeed: number;
  attackSpeed: number;
  reward: Nullable<playerResources>;
};

export type enemyCount = {
  [key in enemyType]: number;
};

export type IDefenseWaveProps = {
  waveNumber: number;
  enemies: enemyCount;
  durationInSeconds: number;
  units: unitCount;
};

export interface IDefenseGameResults {
  reward: playerResources;
  enemiesKilled: enemyCount;
  unitsLost: unitCount;
  civiliansLost: number;
  daysDelayed: number;
}

/* 
======================================
            Civilians 
======================================
*/

export type genders = 'male' | 'female';
export type ages = 'child' | 'adult';

export type civilianData = {
  id: number;
  name: string;
  gender: genders;
  age: ages;
};

/* 
======================================
        Upgrades   
======================================
*/

export type civLevelData = {
  name: string;
  description: string;
  baseMultiplier: number;
} & priceData;

export type civLevelKeys = 'wasteland' | 'tribalSociety' | 'chiefdom' | 'republic';

export type upgradeMap = Record<civLevelKeys, civLevelData>;

export type upgradeCount = {
  [key in civLevelKeys]: number;
};
