import { getRandomEvent } from '~/lib/events-logic';

import { infectionsStatus, placeData, placeKeys, placeMission, PlaceState } from '~/types/city-places';
import { eventData, playerResources } from '~/types/game-data-types';

// Abstract class for places in the in-game city.
// All methods to be static, and most take an argument called a PlaceState and return the new state, so we can update the atom.
// This class is meant to be extended by each place in the city.
export abstract class AbstractPlace {
  static key: placeKeys;
  static info: placeData;
  static missions: placeMission[];
  static events: eventData[];

  static getDailyIncome(placeState: PlaceState): playerResources {
    return placeState.isUnlocked ? this.info.dailyIncome : { food: 0, wood: 0, scrap: 0, water: 0, civilianCount: 0 };
  }

  static unlock(placeState: PlaceState): PlaceState {
    return { ...placeState, isUnlocked: true };
  }

  static lock(placeState: PlaceState): PlaceState {
    return { ...placeState, isUnlocked: false };
  }

  static getInfectionRate(placeState: PlaceState): infectionsStatus {
    return placeState.infection;
  }

  static decreaseInfection(placeState: PlaceState, rateDelta: number): PlaceState {
    // Make sure the rate doesn't go below 0
    const newRate = Math.max(0, placeState.infection.rate - rateDelta);
    return { ...placeState, infection: { rate: newRate } };
  }

  static getRandomEvent(): eventData {
    return getRandomEvent(this.events);
  }
}
