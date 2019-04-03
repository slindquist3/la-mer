
## Hello, Blockchain!

Thanks for taking the time for this code review.

This project is a collaboration between Equinox's digital magazine Furthermore and the skincare brand La Mer. The project features 3 athletes and their strategies for self-care.

View the project in production here: https://furthermore.equinox.com/la-mer

## Requirements

As the lead developer for this project, I needed to meet the following requirements:
1. Anchor links that could take users to specific sections of the page for each talent
2. Carousels that house videos for each talent, with the ability to navigate to a specific video from an external url, ex. https://furthermore.equinox.com/la-mer?2#joshvideos should take the user to Josh's video carousel section and feature the third video (the query parameters provide index values to an array of the talent's videos, starting with the first video at position 0)
3. Complete responsiveness so that the project displays well across mobile devices and desktops

## Major Components

* At the top level is the App component, which houses the Navbar, the Intro section, Anchor links, Ads, and each TalentModule.
* The TalentModule contains each athlete's Bio and portrait, a featured Video, as well as a Carousel.
* Each Carousel contains a series of slides that include questions followed by each athlete's answers in a video.

## What I would refactor in the future

* Since building this project I've learned about the library 'styled-components.' I like the idea of using styled-components to minimize CSS bleeding, and as I see more developers moving to this pattern, I'd like to get comfortable seeing logic, templating, and styling all in one file.

* I also know that I can further abstract data to sit only at the top App level. Because this project doesn't require any API calls, several components like the Subcopy sections contain data that could also be passed down as props like data is in the TalentModule.


## Available Scripts
After running `npm install` in the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
