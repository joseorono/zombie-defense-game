import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Label } from '~/components/ui/label';
import { Slider } from '~/components/ui/slider';
import { Maximize2, Minimize2 } from 'lucide-react';

export function ConfigScreen() {
  const [isMusicMuted, setIsMusicMuted] = useState(false);
  const [isSoundEffectsMuted, setIsSoundEffectsMuted] = useState(false);
  const [musicVolume, setMusicVolume] = useState(50);
  const [soundEffectsVolume, setSoundEffectsVolume] = useState(50);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleSave = () => {
    // Implement save functionality here
    console.log('Settings saved:', {
      isMusicMuted,
      isSoundEffectsMuted,
      musicVolume,
      soundEffectsVolume,
    });
  };

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
    <div className="mx-auto w-full max-w-md">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl">Audio Settings</h1>
        <Button variant="outline" size="icon" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Button>
      </div>
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="mute-music" checked={isMusicMuted} onCheckedChange={setIsMusicMuted} />
            <Label htmlFor="mute-music">Mute Music</Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="music-volume">Music Volume</Label>
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
            <Checkbox id="mute-sound-effects" checked={isSoundEffectsMuted} onCheckedChange={setIsSoundEffectsMuted} />
            <Label htmlFor="mute-sound-effects">Mute Sound Effects</Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="sound-effects-volume">Sound Effects Volume</Label>
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
      <div className="flex justify-center">
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
}
