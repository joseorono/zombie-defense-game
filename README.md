# TBA

## Horror-themed Base Builder/Management Game

A base-building survival game set shortly after the zombie apocalypse. Players gather resources by day, fortify their base, and defend against zombie hordes at night. 

Gameplay alternates between resource management and wave-based combat similar to The Last Stand or Plants vs. Zombies. A scoreboard tracks the number of nights players survive.

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command         | Description                                    |
| --------------- | ---------------------------------------------- |
| `npm install`   | Install project dependencies                   |
| `npm run dev`   | Launch a development web server                |
| `npm run build` | Create a production build in the `dist` folder |

## Project Structure

We have provided a default project structure to get you started. This is as follows:

- `index.html` - A basic HTML page to contain the game.
- `src` - Contains the React client source code.
- `src/main.tsx` - The main **React** entry point. This bootstraps the React application.
- `src/types` - Global TypeScript declarations, provide types information.
- `src/App.tsx` - The main React component.
- `public/assets` - Contains the static assets used by the game.

## Deploying to Production

After you run the `npm run build` command, the code will be built into a single bundle and saved to the `dist` folder, along with any other assets the project imported, or stored in the public assets folder.

In order to deploy the game, you will need to upload _all_ of the contents of the `dist` folder to a public facing web server.

## Credits and Licences

All licences are available in the public\assets\assetLicences.md and audio_notes.md files

## Customizing the Project

All rights reserved.

