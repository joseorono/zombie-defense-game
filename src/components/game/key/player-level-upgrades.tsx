import { soundAsset } from '@pixi/sound';
import { useAtom, useAtomValue } from 'jotai';
import { CIV_LEVELS, CIV_LEVELS_COUNT } from '~/constants/upgrades';
import { canAffordNextLevel } from '~/lib/upgrades';
import { SoundNames, soundService } from '~/services/sound-service';
import { civilizationLevelAtom, resourcesAtom } from '~/store/atoms';

export default function PlayerLevelUpgrades() {
  const [playerLevel, setPlayerLevel] = useAtom(civilizationLevelAtom);
  const [resources, setResources] = useAtom(resourcesAtom);

  const canUpgrade = canAffordNextLevel(playerLevel, resources);

  const handleUpgrade = () => {
    console.log('handle buy');

    if (!canUpgrade) {
      return;
    }
    if (playerLevel < 9) {
      soundService.playSound(SoundNames.upgrade, soundService.globalVolume * 0.7);
    } else {
      soundService.playSound(SoundNames.levelUp, soundService.globalVolume * 0.7);
    }
    setPlayerLevel(playerLevel + 1);
    setResources({ ...resources, gold: resources.gold - 100 });
  };

  return (
    <div className="bg-blue-noise flex items-center justify-center gap-2 px-6 py-4">
      <div className="flex-auto">
        <h1 className="text-3xl text-white">Your Level: {playerLevel}</h1>
        <p className=""> Current Multiplier: {CIV_LEVELS[playerLevel].baseMultiplier.toFixed(1)}</p>
      </div>

      <button
        className="store__buyButton !h-12 !max-w-[320px] uppercase"
        type="button"
        disabled={!canUpgrade}
        onClick={() => handleUpgrade()}
      >
        Level Up
      </button>
    </div>
  );
}
