import { atomWithStorage } from 'jotai/utils';
import { withImmer } from 'jotai-immer';
import { atom } from 'jotai';

import { eventData, IPlayerWeaponStats, playerResources, ScoreEntry, unitCount } from '~/types/game-data-types';
import { IModal } from '~/types/dialog-props';
import { NOTHING_EVENT } from '~/constants/events';
import { getRandomTownName } from '~/lib/utils';
import { PlaceState, placeKeys } from '~/types/city-places';

// Audio atoms
export const isMutedAtom = atomWithStorage<boolean>('isMuted', false);
export const musicVolumeAtom = atomWithStorage<number>('volume', 1);
export const effectsVolumeAtom = atomWithStorage<number>('volume', 1);

//player atoms
export const playerNameAtom = atomWithStorage<string>('playerName', '');
export const townNameAtom = atomWithStorage<string>('townName', getRandomTownName());
export const civilizationLevelAtom = atomWithStorage<number>('civLevel', 0);
export const showTutorialsAtom = atomWithStorage<boolean>('showTutorials', true);
export const playerWeaponAtom = atomWithStorage<IPlayerWeaponStats>('playerWeapon', {
  damage: 1,
  attackSpeed: 1,
  ammoCapacity: 1,
  reloadSpeed: 1,
});

// Atoms for the modal
export const isModalOpenAtom = atom<boolean>(false);
export const modalContentAtom = atom<IModal>({ title: '', subtitle: '', content: null, onClose: () => {} });
export const setContentAtom = atom(null, (_, set, newContent: IModal) => {
  //when you set new content, show modal immediately
  set(modalContentAtom, newContent);
  set(isModalOpenAtom, true);
});

export const unitsAtom = withImmer(
  atomWithStorage<unitCount>('units', {
    gunman: 1,
    shotgunner: 0,
    barricade: 2,
    'barbed-barricade': 0,
    mine: 0,
    tripwire: 0,
  }),
);

export const resourcesAtom = withImmer(
  atomWithStorage<playerResources>('resources', {
    food: 0,
    water: 0,
    wood: 0,
    scrap: 0,
    civilianCount: 0,
  }),
);

export const userScoreAtom = atomWithStorage<ScoreEntry>('userScore', {
  playerName: 'Player',
  civilianAdultCount: 33,
  civilianChildCount: 23,
  daysSurvived: 30,
  unitsRemaining: 65,
  pointsFromdays: 100,
  pointsFromCivilians: 554,
  pointsFromWeaponUpgrades: 22,
  pointsFromResources: 471,
  totalScore: 2800,
});
export const scoreboardAtom = atomWithStorage<ScoreEntry[]>('score', []);

export const currentEventAtom = withImmer(atomWithStorage<eventData>('event', NOTHING_EVENT));

/*
======================================
        Town Building
======================================
*/

export const placesLocationAtom = atomWithStorage<placeKeys[][]>('townLocations', []);
export const placesStateAtom = atomWithStorage<PlaceState[][]>('townState', []);

// ToDo: Create eraserAtom to restart the game
