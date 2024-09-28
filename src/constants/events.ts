import { eventData } from '~/types/game-data-types';

export const GLOBAL_EVENTS: Array<eventData> = [] as const;

export const INITIAL_EVENT: eventData = {
  title: 'Just getting started',
  description: 'Absolutely nothing happens. What a surprise!',
  answers: ['Okay'],
  outcomes: [
    {
      civiliansDelta: 0,
      remainingdaysDelta: 0,
      water: 0,
      food: 0,
      wood: 0,
      scrap: 0,
    },
  ],
} as const;

export const NOTHING_EVENT: eventData = {
  title: 'Nothing Happens',
  description: 'Absolutely nothing happens. What a surprise!',
  answers: ['Okay'],
  outcomes: [
    {
      civiliansDelta: 0,
      remainingdaysDelta: 0,
      water: 0,
      food: 0,
      wood: 0,
      scrap: 0,
    },
  ],
} as const;

export const EVENT_PROBABILITY: number = 0.01;
