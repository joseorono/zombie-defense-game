import { CIV_LEVELS, CIV_LEVELS_COUNT } from '~/constants/upgrades';
import { playerResources } from '~/types/game-data-types';

export function canAffordNextLevel(currentLevel: number, res: playerResources): boolean {
  // Exit early
  if (currentLevel + 1 >= CIV_LEVELS_COUNT) {
    return false;
  }

  if (
    res.gold >= CIV_LEVELS[currentLevel + 1]. &&
    res.grain >= CIV_LEVELS[currentLevel + 1].costGrain &&
    res.stone >= CIV_LEVELS[currentLevel + 1].costStone
  ) {
    return true;
  }

  return false;
}
