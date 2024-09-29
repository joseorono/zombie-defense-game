// Aca ponemos los valores por defecto de las variables que vamos a usar en la aplicacion
/*

Incluyen los valores iniciales de los recursos (0), los valores iniciales de los recursos por segundo (0), 
y los valores iniciales de los costos de los recursos (0)

Valores por default para las opciones como el volumen y si reproducir o no la musica.

*/

import { randIntInRange } from '~/lib/math';
import { placeKeys } from '~/types/city-places';
import { IGameStateSnapshot, playerResources } from '~/types/game-data-types';

export const ENABLE_ARTIFICIAL_DELAYS = false;

// Used for probability calculations. Must be float between 0 and 1.
export const EVENT_PROBABILITY: number = 0.65 as const;

export const GAME_TICK_SECONDS: number = 1 as const; // We could change this for performance/stress testing later
export const GAME_TICK_MS: number = GAME_TICK_SECONDS * 1000; // We could change this for performance/stress testing later
// For show and variation. Just a random number of citizens to start with and vary
export const INITIAL_CIVILIAN_COUNT: number = randIntInRange(3, 5);

const INITIAL_VALUES: IGameStateSnapshot = {
  // Audio Options
  playMusic: true,
  playSound: true,
  soundVolume: 1,
  musicVolume: 1,

  // Resources
  resources: {
    food: 0,
    wood: 0,
    scrap: 0,
    water: 0,
    civilianCount: INITIAL_CIVILIAN_COUNT,
  },

  // Progress Toggles
  progressToggles: {},
} as const;

/*
======================================
            Town Grid
======================================
*/

/*

Visualization of the town grid. Each letter represents a different place type:

WWWWW
FBBBF
FBBBF
WWWWW
*/
export const DEFAULT_TOWNDISPLAY_ROWS = 4;
export const DEFAULT_TOWNDISPLAY_COLUMNS = 5;

export const DEFAULT_TOWN_GRID: Array<Nullable<placeKeys>[]> = [
  ['water', 'water', 'water', 'water', 'water'],
  ['forest', null, null, null, 'forest'],
  ['forest', null, null, null, 'forest'],
  ['water', 'water', 'water', 'water', 'water'],
];

export default INITIAL_VALUES;
