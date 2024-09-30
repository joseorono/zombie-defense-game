// Fill the default value for the atom with a fake Top 10 list of scores, and add a function to add a new score to the list.
// The list should be sorted by the score value, descending, the total.

import { playerResources, ScoreEntry } from '~/types/game-data-types';

// ToDo: Atom with storage for the scoreboard
//export const DEFAULT_SCOREBOARD: ScoreEntry[] = [];

/*
 * Add a new score to the scoreboard
 * @param newScore - The new score to add
 * @param oldScoreboard - The current scoreboard
 * @returns The new scoreboard with the new score added, or false if the score is not in the top 10
 * */
export function addScoreToScoreboard(newScore: ScoreEntry, oldScoreboard: ScoreEntry[]): ScoreEntry[] | false {
  // The list should be sorted by the score value, descending. Using sort with a - accomplishes this.
  const newScoreboard = [...oldScoreboard, newScore].sort((a, b) => b.totalScore - a.totalScore);

  // If the new score is not in the top 10, return false
  if (newScoreboard.indexOf(newScore) > 9) {
    return false;
  }

  // The scoreboard should have a maximum length of 10 entries
  return newScoreboard.slice(0, 10);
}

/*
 * Calculate the total score for a player
 */
// ToDo: Implement this properly
export function calculateTotalScore(resources: playerResources, daysSurvived: number, units: any): ScoreEntry {
  return {
    playerName: 'Player',
    civilianAdultCount: resources.civilianCount,
    civilianChildCount: 0,
    daysSurvived,
    unitsRemaining: units,
    pointsFromdays: daysSurvived * 100,
    pointsFromCivilians: resources.civilianCount * 10,
    pointsFromWeaponUpgrades: 0,
    pointsFromResources: resources.food + resources.water + resources.wood + resources.scrap,
    totalScore: 0,
  };
}
