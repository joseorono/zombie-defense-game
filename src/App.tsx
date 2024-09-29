import { Toaster } from 'react-hot-toast';
//import { Repeat, Delay } from 'timeline-composer';
import '~/index.css';

import { useEffect } from 'react';
import MouseTracker from '~/components/effects/mouse-tracker';
import DebugArea from '~/components/debug-area';

import ResponsiveNotice from '~/components/responsive-notice';
import BackgroundWorker from '~/components/game/background-worker';
import Modal from '~/components/Modal';
import GameScreen from '~/components/game/game-screen';
import GameLoader from '~/components/game/game-loader';
import { GAME_TICK_SECONDS } from './constants/defaults';
import TailwindDemo from './components/demo/tailwind-demo';

function App() {
  const toastClasses = 'pixel-rounded font-bold text-xl mx-2 w-11/12 md:w-fit min-w-[200px]';

  useEffect(() => {
    const handler = (e: Event) => e.preventDefault();
    document.addEventListener('gesturestart', handler);
    document.addEventListener('gesturechange', handler);
    document.addEventListener('gestureend', handler);
    return () => {
      document.removeEventListener('gesturestart', handler);
      document.removeEventListener('gesturechange', handler);
      document.removeEventListener('gestureend', handler);
    };
  }, []);

  return (
    <>
      <DebugArea />
      <TailwindDemo />
      <MouseTracker />
      <ResponsiveNotice />

      <Modal />

      {/* 
    
    <GameScreen />

      <GameLoader />
      
      */}

      <Toaster
        gutter={12}
        toastOptions={{
          position: 'bottom-center',

          // Aria
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },

          // Styling
          className: toastClasses,

          success: {
            style: {
              background: '#4BB543',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: '#d32f2f',
              color: '#fff',
            },
          },
          custom: {
            className: toastClasses,
            style: {
              background: '#333',
              color: '#fff',
              textShadow: '1px 1px 2px #000',
            },
          },
        }}
      />
    </>
  );
}

export default App;
