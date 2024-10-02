/* this is carl's domain */
import { sound } from '@pixi/sound';
import { betweenZeroAndOne, getRandomlyVariedValue } from '~/lib/math';

export enum SoundNames {
  cancelSound = 'cancelSound',
  choppingWood = 'choppingWood',
  distantShots = 'distantShots',
  buySlave = 'buySlave',
  farm = 'farm',
  femaleScream = 'femaleScream',
  maleScream = 'maleScream',
  fleshHits = 'fleshHits',
  gunShot = 'gunShot',
  buyLegionary = 'buyLegionary',
  buyForum = 'buyForum',
  coinClick = 'coinClick',
  upgrade = 'upgrade',
  buyFields = 'buyFields',
  zombi1 = 'zombi1',
  zombi2 = 'zombi2',
  zombi3 = 'zombi3',
  zombi4 = 'zombi4',
  zombi5 = 'zombi5',
  gameOver = 'gameOver',
  closeModal = 'closeModal',
  click = 'click',
}

const soundFiles = {
  [SoundNames.cancelSound]: 'assets/audio/fx/cancel-sound.mp3',
  [SoundNames.choppingWood]: 'assets/audio/fx/chopping-wood.mp3',
  [SoundNames.distantShots]: 'assets/audio/fx/distant-shots.mp3',
  [SoundNames.buySlave]: 'assets/audio/fx/buySlave.mp3',
  [SoundNames.farm]: 'assets/audio/fx/farm.mp3',
  [SoundNames.femaleScream]: 'assets/audio/fx/female-scream.mp3',
  [SoundNames.maleScream]: 'assets/audio/fx/male-scream.mp3',
  [SoundNames.fleshHits]: 'assets/audio/fx/flesh-hits.mp3',
  [SoundNames.gunShot]: 'assets/audio/fx/gun-shot.mp3',
  [SoundNames.buyLegionary]: 'assets/audio/fx/indistinct-radio-chatter.mp3',
  [SoundNames.buyForum]: 'assets/audio/fx/random-event.mp3',
  [SoundNames.upgrade]: 'assets/audio/fx/shot-gun.mp3',
  [SoundNames.buyFields]: 'assets/audio/fx/sniper-shot.mp3',
  [SoundNames.zombi1]: 'assets/audio/fx/zombi-moan-1.mp3',
  [SoundNames.zombi2]: 'assets/audio/fx/zombi-moan-2.mp3',
  [SoundNames.zombi3]: 'assets/audio/fx/zombi-moan-3.mp3',
  [SoundNames.zombi4]: 'assets/audio/fx/zombi-moan-4.mp3',
  [SoundNames.zombi5]: 'assets/audio/fx/zombi-moan-5.mp3',
  [SoundNames.gameOver]: 'assets/audio/fx/gameOver.mp3',
  [SoundNames.closeModal]: 'assets/audio/fx/fx/close-modal.mp3',
  [SoundNames.click]: 'assets/audio/fx/click.mp3',
  [SoundNames.coinClick]: 'assets/audio/fx/fx/coin.mp3',
};

class SoundService {
  private static instance: SoundService;

  // We should probably expose the pixi sound object to the rest of the app as an attribute of this class
  // In JavaScript, objects and arrays are passed by reference, so this will not create a new object
  public static soundApi = sound;

  public audioLoaded: boolean;
  public isPreloading: boolean;
  public globalVolume: number; //between 0 and 1;

  constructor() {
    if (!SoundService.instance) {
      console.log('created new instance of sound service');
      this.globalVolume = 1;
      this.audioLoaded = false;
      this.isPreloading = false;
      SoundService.instance = this;
    }
    return SoundService.instance;
  }

  shouldPreload(): boolean {
    return !this.audioLoaded && !this.isPreloading;
  }

  isMuted(): boolean {
    return sound.context.muted;
  }

  async preloadAudios(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      console.log('audioLoaded => ', this.audioLoaded);
      if (!this.shouldPreload()) {
        console.log('sound service is already loaded');
        return;
      }
      try {
        this.isPreloading = true;
        let soundsList: Record<string, string> = {};
        for (const [key, val] of Object.entries(soundFiles)) {
          soundsList[key] = val;
        }
        sound.add(soundsList, {
          preload: true,
          loaded: (_) => {
            this.audioLoaded = true;
            this.isPreloading = false;
            console.log('sound service loaded successfully');
            resolve(true);
          },
        });
      } catch (error) {
        console.error('error loading sound service ==> ', error);
        reject(false);
      }
      //  finally {
      //   this.isPreloading = false;
      // }
    });
  }

  playSound(alias: SoundNames, volume: number = 1, variance: number = 0) {
    volume = betweenZeroAndOne(volume, 'volume');
    variance = betweenZeroAndOne(variance, 'variance');

    sound.play(alias, {
      volume: getRandomlyVariedValue(volume, variance),
    });
  }

  async asyncPlaySouund(alias: SoundNames, volume: number = 1, variance: number = 0) {
    volume = betweenZeroAndOne(volume, 'volume');
    variance = betweenZeroAndOne(variance, 'variance');

    sound.play(alias, {
      volume: getRandomlyVariedValue(volume, variance),
    });
  }

  startMusic(alias: SoundNames, volume: number = 1) {
    volume = betweenZeroAndOne(volume, 'volume');
    sound.play(alias, {
      volume: volume,
      loop: true,
    });
  }

  stopMusic(alias: SoundNames) {
    sound.stop(alias);
  }

  setGlobalVolume(volume: number) {
    volume = betweenZeroAndOne(volume, 'volume');
    //sets current sounds volume
    sound.volumeAll = volume;
    //sets following sounds maximum volume;
    sound.context.volume = volume;
  }

  muteAll() {
    sound.muteAll();
  }

  unmuteAll() {
    sound.unmuteAll();
  }
}

export const soundService = new SoundService();
