export default function CreditsDialog() {
  // const setIsModalOpen = useSetAtom(isModalOpenAtom);

  // const handleClose = () => {
  //   soundService.playSound(SoundNames.closeModal);
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <div className="text-large flex flex-col justify-center gap-2 overflow-y-auto">
        <h1 className="text-3xl">CREDITS</h1>

        <>
          <h1 className="text-3xl" id="licences-and-credits">
            Licences and Credits
          </h1>
          <h2 className="text-2xl" id="special-thanks">
            Special Thanks
          </h2>
          <p>Huge thanks to our friend Aquiles for testing the game and giving us pointers to improve it!</p>
          <h2 className="text-2xl" id="visual-assets-licences-and-credits">
            Visual Assets - Licences and Credits
          </h2>
          <ul>
            <li>
              Navbar background (navbarbg.png) and dirt_tile.png edited from 16*16 Block Textures by
              ARoachIFoundOnMyPillow. Creative Commons 0.{' '}
              <a href="https://opengameart.org/content/1616-block-textures">Source</a>.
            </li>
          </ul>
          <h3 className="text-xl" id="buildings-and-town-display-background-">
            Buildings and town display background:
          </h3>
          <ul>
            <li>
              <a href="https://kenney.nl/assets/cartography-pack">Cartography Pack by KenneyNL</a> CC0
            </li>
          </ul>
          <h3 className="text-xl" id="workers-">
            Workers:
          </h3>
          <ul>
            <li>
              <a href="https://game-icons.net/1x1/lorc/crested-helmet.html">Legionary by Lorc</a> CC BY 3.0
            </li>
            <li>
              <a href="https://game-icons.net/1x1/lorc/slavery-whip.html">Slave by Lorc</a> CC BY 3.0
            </li>
            <li>
              <a href="https://game-icons.net/1x1/lorc/cash.html">Merchant by Lorc</a> CC BY 3.0 -
              <a href="https://game-icons.net/1x1/delapouite/blacksmith.html">Blacksmith by Delapouite</a> CC BY 3.0
            </li>
            <li>
              <a href="https://game-icons.net/1x1/delapouite/sun-priest.html">Priest by Delapouite</a> CC BY 3.0
            </li>
            <li>
              (Citizen by Delapouite)[
              <a href="https://game-icons.net/1x1/delapouite/person.html">
                https://game-icons.net/1x1/delapouite/person.html
              </a>
              ] CC BY 3.0
            </li>
            <li>
              <a href="https://game-icons.net/1x1/delapouite/miner.html">Baker</a> CC BY 3.0, Delapouite
            </li>
          </ul>
          <h3 className="text-xl" id="misc">
            Fonts
          </h3>
          <ul>
            <li>
              <b>Minimal3x5 Font:</b>
              From{' '}
              <a
                href="https://opengameart.org/content/minimalist-pixel-fonts"
                target="_blank"
                rel="noopener noreferrer"
              >
                opengameart
              </a>{' '}
              by kheftel (CC0)
            </li>
            <li>ShadowsIntoLight-Regular, Oswald, Caveat from Google Fonts, all under the Open Font License.</li>
            <li>
              Special Elite from Online-Fonts, under the Apache 2.0 license.{' '}
              <a
                href="https://online-fonts.com/fonts/special-elite-rus-lomzz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Can be found here.
              </a>
            </li>
          </ul>
          <h3 className="text-xl" id="misc">
            Misc
          </h3>
          <ul>
            <li>
              <a href="https://opengameart.org/content/rpg-crafting-material-icons">materials by BizmasterStudios</a> CC
              BY 4.0
            </li>
            <li>
              <a href="https://opengameart.org/content/gold-cointoken">coin, BizmasterStudios</a> CC BY 4.0
            </li>
            <li>
              <a href="https://opengameart.org/content/imaginary-crops">Crops by Scaydi</a>: CC BY 4.0
            </li>
            <li>
              Abstract background with a vintage paper design{' '}
              <a href="https://www.freepik.com/free-vector/abstract-background-with-vintage-paper-design_18073291.htm">
                Image by kjpargeter
              </a>
            </li>
          </ul>
          <h2 className="text-2xl" id="audio-assets-licences-and-credits-">
            Audio Assets - Licences and Credits:
          </h2>
          <h3 className="text-xl" id="sound-effects-">
            Sound Effects:
          </h3>

          <p>
            Close modal sound, Creative Commons 0, modusmogulus&nbsp;
            <a href="https://freesound.org/people/modusmogulus/sounds/735897/">
              https://freesound.org/people/modusmogulus/sounds/735897/
            </a>
          </p>
          <p>
            Really clean Clicking Sound Creative Commons 0, modusmogulus&nbsp;
            <a href="https://freesound.org/people/BiORNADE/sounds/735804/">
              https://freesound.org/people/BiORNADE/sounds/735804/
            </a>
          </p>

          <p>
            coin pouch for mercator Pouch of Gold Coins, Rummaging Through.wav, Creative Commons 0, The_Frisbee_of_Peace
            &nbsp;
            <a href="https://freesound.org/people/The_Frisbee_of_Peace/sounds/575576/">
              https://freesound.org/people/The_Frisbee_of_Peace/sounds/575576/
            </a>
          </p>

          <h3 className="text-xl" id="music-">
            MUSIC:
          </h3>
          <p>TBD</p>

          {/* 
            =================================
                    Licenses 
            =================================
        */}
          <h3 className="text-xl" id="links-to-licences-">
            LINKS TO LICENCES:
          </h3>
          <p>
            CC BY 4.0 Deed&nbsp;
            <a href="https://creativecommons.org/licenses/by/4.0/deed.en">
              https://creativecommons.org/licenses/by/4.0/deed.en
            </a>
          </p>
          <p>
            CC0 1.0 Deed&nbsp;
            <a href="https://creativecommons.org/publicdomain/zero/1.0/">
              https://creativecommons.org/publicdomain/zero/1.0/
            </a>
          </p>
        </>
      </div>
    </>
  );
}
