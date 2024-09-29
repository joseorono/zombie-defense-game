import GameNavbar from './game-navbar';
import ResourceIndicator from './misc/resource-indicator';
import HeadlinesMarquee from './misc/headlines-marquee';

import PlayerNameView from './misc/player-name-view';
import { Suspense } from 'react';
import TownNameView from './misc/town-name-view';
import EventDisplay from '../dialogs/event-display';
import GenericLoader from '../loader/generic-loader';

export default function GameScreen() {
  return (
    <>
      <div id="app" vaul-drawer-wrapper="">
        <GameNavbar />
        <div id="game" className="h-game flex w-full">
          <div id="mainGameArea" className={'flex flex-col'}>
            <PlayerNameView />
            <ResourceIndicator />
            <HeadlinesMarquee />
          </div>
        </div>

        <section>
          <div className="SectionHeader">
            <TownNameView />
          </div>
          <div className="SectionHeader">LATEST NEWS</div>
          <EventDisplay />
          <div className="SectionHeader p-4 text-center text-white">MAP</div>
          <Suspense fallback={<GenericLoader />}>
            <TownNameView />
          </Suspense>
        </section>
      </div>
    </>
  );
}
