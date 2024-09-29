import { eventData } from '~/types/game-data-types';
import { getRandomElement } from './utils';
import { EVENT_PROBABILITY } from '~/constants/defaults';

export function shouldTriggerEvent(): boolean {
  return Math.random() < EVENT_PROBABILITY;
}

export function getRandomEvent(events: Array<eventData>, isWeighted: boolean = false): eventData {
  // We can receive events as an array with little performance cost because they're passed by reference
  if (!events) {
    throw new Error('EMPTY_EVENTS: No events passed.');
  }

  if (isWeighted) {
    // Calculate the sum of all probabilities
    const totalWeight = events.reduce((acc, event) => acc + event.probability, 0);

    // Generate a random number between 0 and totalWeight
    // This will be used to select a random event
    let random = Math.random() * totalWeight;

    // Now use the weight of each event to determine which event to select
    for (const event of events) {
      random -= event.probability;
      if (random < 0) {
        return event;
      }
    }
  }

  // In case something goes wrong, return a random one without accounting for weights
  // This technically should never happen, but this failsafe has no runtime cost
  return getRandomElement(events);
}
