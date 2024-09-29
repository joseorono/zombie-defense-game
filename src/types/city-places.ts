import { playerResources } from './game-data-types';

export interface placeData {
  id: number;
  name: string;
  description: string;
  dailyIncome: playerResources;
  incomeVariance: Nullable<number>;
}

export type placeKeys = 'water' | 'forest' | 'military-base' | 'land' | 'gunshop' | 'grocery' | 'house';

export type buildingMap = {
  [key in placeKeys]: placeData;
};

export type placeMission = {
  id: number;
  name: string;
  description: string;
  duration: number;
  reward: playerResources;
  cost: playerResources;
  riskLevel: number;
};

/*
======================================
        Place State
======================================
*/
export interface infectionsStatus {
  rate: number;
}

export interface PlaceState {
  isUnlocked: boolean;
  infection: infectionsStatus;
  finishedMissionsIds: number[];
}
