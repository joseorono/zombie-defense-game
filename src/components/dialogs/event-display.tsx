import { GLOBAL_EVENTS, EVENT_PROBABILITY } from '~/constants/events';
import { useEffect } from 'react';
import { getRandomEvent } from '~/lib/events-logic';
import NewspaperHeadline from '~/components/game/misc/newspaper-headline';
import { useSetAtom, useAtom } from 'jotai';
import toast from 'react-hot-toast';
//import { Coin, Stone, Wheat } from '~/icons/res-icons';

interface IPropsEventDisplay {
  className?: string;
}

const EventDisplay = ({ className = '' }: IPropsEventDisplay) => {
  // If no event is passed, get a random
  const event = getRandomEvent(GLOBAL_EVENTS, true);
  return (
    <div className="flex flex-auto flex-col justify-center bg-scroll p-4 text-gray-700">
      <div className="break-words">
        <p className="my-2">{event.description}</p>

        {event.outcomes && (
          <>
            <div className="mx-auto mt-6 w-full max-w-[400px]">test 1</div>
          </>
        )}
      </div>
    </div>
  );
};

export default EventDisplay;
