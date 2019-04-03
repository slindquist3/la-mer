
## Hello, Blockchain!

This project is a collaboration between Equinox's digital magazine Furthermore and the skincare brand La Mer. The project features 3 athletes and their strategies for self-care.

## Requirements

As the lead developer for this project, I needed to meet the following requirements:
1. Anchor links that could take users to specific sections of the page for each talent.
2. Carousels that house videos for each talent, with the ability to navigate to a specific video from an external url, ex. https://furthermore.equinox.com/la-mer?2#joshvideos should take the user to Josh's video carousel section and feature the third video (the query parameters provide index values to an array of the talent's videos, starting with the first video at position 0)
3. Complete responsiveness so that the project displays well across mobile devices and desktops

## What I would refactor in the future

Since building this project I've learned about the library 'styled-components.' I like the idea of using styled-components to minimize CSS bleeding, and as I see more developers moving to this pattern, I'd like to get comfortable seeing logic, templating, and styling all in one file.



## Available Scripts
In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

You need to **put or import any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

The build is minified and the filenames include the hashes.<br>

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>

Only files inside `public` can be used from `public/index.html`.<br>






## What I would improve in another refactor
