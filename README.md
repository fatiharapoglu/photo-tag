# Photo-Tag

Photo-Tag game of PlayStation Universe. The logic is created
with React and used Firebase for a back-end database. Players select a level and
must find 3 hidden characters which are pre-defined. Your score is the time passed
and saved when you find all 3 characters.

Created with **React** and **Firebase**.

⮕ [Live preview](https://fatiharapoglu.github.io/photo-tag/)

## Features

-   4 unique PlayStation levels.
-   Leaderboards for all levels that updates in realtime.
-   Bad-words filter to filter player input, so that leaderbord can be clean.
-   Snackbar alerts with color based on error or success, giving information about certain situations.
-   Sound effects feedback if you fail or success for every try.
-   Loading spinner when leaderboard data is loading.
-   Custom 404 page.
-   Responsive design.

## Helper Dependencies

-   [Firebase](https://firebase.google.com/) Firestore for leaderboard database
-   [Bad-words](https://www.npmjs.com/package/bad-words/) for censoring bad words in leaderboard
-   [Sass](https://sass-lang.com/) for SCSS
-   [Eslint](https://eslint.org/) for linting
-   [Prettier](https://prettier.io/) for formatting

## Roadmap

-   Add mute button for sound effects.
-   When the leaderboards get longer, it will need pagination.

## Acknowledgements

-   [Pierre Roussel](https://www.artstation.com/pierreroussel) (level images provider)
-   [@shinephoenixstormcrow](https://freesound.org/people/shinephoenixstormcrow/) (success & fail sound effects)

## How It Looks

![ss](./src/assets/readme.png)
