import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
//import { Repeat, Delay } from 'timeline-composer';
import '~/index.css';
import TailwindDemo from './components/demo/tailwind-demo';

import MouseTracker from '~/components/effects/mouse-tracker';

import ResponsiveNotice from '~/components/responsive-notice';
import { ShadcnUiPlayground } from './components/demo/shadcnui-playground';
//import Modal from '~/components/Modal';

//import { ShadcnUiPlayground } from './components/demo/shadcnui-playground';

function App() {
  const toastClasses = 'font-bold text-xl mx-2 w-11/12 md:w-fit min-w-[200px]';

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
      <div>Test From App123</div>
      <ShadcnUiPlayground />
      <TailwindDemo />
      <MouseTracker />
      <ResponsiveNotice />
      {/* 
      <DebugArea />
      <Modal />


    
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
