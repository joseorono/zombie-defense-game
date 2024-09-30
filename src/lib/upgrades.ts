import { CIV_LEVELS, CIV_LEVELS_COUNT } from '~/constants/upgrades';
import { civLevelData, playerResources } from '~/types/game-data-types';

export function canAffordNextLevel(currentLevel: number, res: playerResources): boolean {
  // Exit early
  if (currentLevel + 1 >= CIV_LEVELS_COUNT) {
    return false;
  }

  return (
    res.food >= CIV_LEVELS[currentLevel + 1].foodCost &&
    res.water >= CIV_LEVELS[currentLevel + 1].waterCost &&
    res.wood >= CIV_LEVELS[currentLevel + 1].woodCost &&
    res.scrap >= CIV_LEVELS[currentLevel + 1].scrapCost
  );
}

export function isThereNextLevel(currentLevel: number): boolean {
  return currentLevel + 1 < CIV_LEVELS_COUNT;
}

export function getNextLevelData(currentLevel: number): civLevelData {
  // Check that we're not at the end of the levels
  if (currentLevel + 1 > CIV_LEVELS_COUNT) {
    console.error('Trying to get next level data when we are at the end of the levels');
    throw new Error('Trying to get next level data when we are at the end of the levels');
  }

  return CIV_LEVELS[currentLevel + 1];
}
