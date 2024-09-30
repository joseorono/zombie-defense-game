import GenericLoader from '~/components/loader/generic-loader';
import DialogDemo from '~/components/demo/dialog-demo';
import DialogDemo2 from '~/components/demo/dialog-demo-2';
import SoundsDemo from '~/components/demo/sounds-demo';
import LoopingProgressBar from '~/components/game/misc/loopingProgressBar';
import ToasterDemo from '~/components/demo/toaster-demo';
//import { useSetAtom } from 'jotai';
//import { eraserAtom } from '~/store/atoms';

export default function DebugArea() {
  console.log('check if this re-renders when the modal opens/closes');
  //const eraseAll = useSetAtom(eraserAtom);
  const eraseAll = (idunno: any) => idunno ?? null;

  return (
    <>
      <div className="p-8">
        <h1 className="text-4xl">Debug Area</h1>
      </div>

      {/* <SoundsDemo></SoundsDemo> */}

      <div id="test-area">
        {/*
        <TailwindDemo />
        */}
        <div className="w-32">
          <LoopingProgressBar durationInMs={1000} />
        </div>
        <ToasterDemo />
      </div>
      <div className="p-4">
        <DialogDemo />
        <DialogDemo2 />
        <SoundsDemo />
      </div>
      <div className="p-4">
        <button
          type="button"
          onClick={() => {
            eraseAll(null);
            window.alert('bro you just erased all of your progress good job!!!');
          }}
          className="btn btn-warning"
        >
          [debug] ERASE EVERYTHING. <strong>NOW!!!</strong>
        </button>
      </div>
      <GenericLoader />
    </>
  );
}
