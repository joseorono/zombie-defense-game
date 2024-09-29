import toast from 'react-hot-toast';

import { playerResources, priceData } from '~/types/game-data-types';
import { SoundNames, soundService } from '~/services/sound-service';

export function canAffordPurchase(cost: priceData, res: playerResources): boolean {
  if (cost === null) {
    console.error('trying to buy building with 0 cost. Shouldnt be possible');
    return false;
  }

  return res.food >= cost.food && res.scrap >= cost.scrap && res.water >= cost.water && res.wood >= cost.wood;
}

export function playBuildingSound(buildingName: Nullable<string> = null): void {
  const minVolume = Math.min(soundService.globalVolume, 0.5);
  switch (buildingName) {
    case 'fields':
      soundService.playSound(SoundNames.buyFields, minVolume);
      break;
    case 'slave':
      soundService.playSound(SoundNames.buySlave, minVolume);
      break;
    case 'miner':
    case 'quarry':
      soundService.playSound(SoundNames.buyMiner, minVolume);
      break;
    case 'agricola':
      soundService.playSound(SoundNames.farm, minVolume + 0.1);
      break;
    case 'bakery':
    case 'baker':
      soundService.playSound(SoundNames.buyBaker, minVolume + 0.1);
      break;
    case 'mercator':
      soundService.playSound(SoundNames.buyMercator, minVolume);
      break;
    case 'smithy':
    case 'blacksmith':
      soundService.playSound(SoundNames.buySmith, minVolume);
      break;
    case 'legionary':
    case 'castra':
      soundService.playSound(SoundNames.buyLegionary, minVolume);
      break;
    case 'priest':
    case 'temple':
      soundService.playSound(SoundNames.buyPriest, minVolume + 0.2);
      break;
    case 'forum':
      soundService.playSound(SoundNames.buyForum, minVolume);
      break;
    default:
      break;
  }
}

/*
export function handleBuy(
  purchaseName: string,
  resources: playerResources,
): void {
  console.log('handle buy');

  if (cost === null) {
    console.error('trying to buy building with 0 cost. Shouldnt be possible');
    return;
  }

  toast.success(`Bought ${amountToPurchase} ${purchaseName}(s)`);

  //adding amount in case we implement buying in increments (ex 10 at a time)
  // increase building by amount
  setPurchaseCount({
    ...workerOrbuildingCount,
    [purchaseName]: workerOrbuildingCount[purchaseName as keyof (buildingCount | workerCount)] + amountToPurchase,
  });

  // setPurchaseCount((purchaseDraft) => {
  //   purchaseDraft[purchaseName as keyof (buildingCount | workerCount)] += amountToPurchase;
  // });

  // decrease resources by cost * amount
  setResources({
    gold: resources.gold - cost.costGold * amountToPurchase,
    stone: resources.stone - cost.costStone * amountToPurchase,
    grain: resources.grain - cost.costGrain * amountToPurchase,
  });
  playBuildingSound();
}

*/
