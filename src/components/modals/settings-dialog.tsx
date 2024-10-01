import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Label } from '~/components/ui/label';
import { Slider } from '~/components/ui/slider';
import { Maximize2, Minimize2, Volume } from 'lucide-react';
import { atom, useAtom } from 'jotai';
import { isMutedAtom, effectsVolumeAtom, musicVolumeAtom, isModalOpenAtom } from '~/store/atoms';

export default function ConfigScreen() {
  const [isMusicMuted, setIsMusicMuted] = useState(false);
  const [isSoundEffectsMuted, setIsSoundEffectsMuted] = useState(false);
  const [musicVolume, setMusicVolume] = useAtom(musicVolumeAtom);
  const [soundEffectsVolume, setSoundEffectsVolume] = useAtom(effectsVolumeAtom);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <>
      <div className="mx-auto w-full max-w-md p-4">
        <div className="mb-4 flex flex-row items-center justify-between">
          <Button variant="outline" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
            {isFullscreen ? <Minimize2 className="mr-2 h-4 w-4" /> : <Maximize2 className="mr-2 h-4 w-4" />} Toggle
            fullscreen
          </Button>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="mb-2 flex items-center space-x-2">
              <Checkbox id="mute-music" checked={isMusicMuted} onCheckedChange={setIsMusicMuted} />
              <Label htmlFor="mute-music">Mute Music</Label>
            </div>
            <div className="mb-2 space-y-2">
              <Label className="mb-4 block" htmlFor="music-volume">
                Music Volume {musicVolume <= 0 ? '(muted)' : musicVolume}
              </Label>
              <Slider
                id="music-volume"
                min={0}
                max={100}
                step={1}
                value={[musicVolume]}
                onValueChange={(value) => setMusicVolume(value[0])}
                disabled={isMusicMuted}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="mute-sound-effects" checked={isSoundEffectsMuted} onCheckedChange={setIsMusicMuted} />
              <Label htmlFor="mute-sound-effects">
                Mute Sound Effects {soundEffectsVolume <= 0 ? '(muted)' : soundEffectsVolume}
              </Label>
            </div>
            <div className="space-y-2">
              <Label className="mb-4 block" htmlFor="sound-effects-volume">
                Sound Effects Volume
              </Label>
              <Slider
                id="sound-effects-volume"
                min={0}
                max={100}
                step={1}
                value={[soundEffectsVolume]}
                onValueChange={(value) => setSoundEffectsVolume(value[0])}
                disabled={isSoundEffectsMuted}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
