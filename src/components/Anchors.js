import React from 'react';

import './Anchors.scss';

export default function Anchors() {

  return (
    <div className="Anchors">
      <div className="text-container">
        <p className="discover">Discover more about these sources of strength:</p>
        <ul>
          <li className="trainer-list"><span className="name">Bee Bosnak: </span><a href="#beesection">yoga and meditation</a><span className="pipe">|</span><a href="#beevideos">skincare goals</a></li>
          <li className="trainer-list"><span className="name">Josh Dixon: </span><a href="#joshsection">community engagement</a><span className="pipe">|</span><a href="#joshvideos">skincare goals</a></li>
          <li className="trainer-list"><span className="name">Danielle Gray: </span><a href="#daniellesection">solo travel</a><span className="pipe">|</span><a href="#daniellevideos">skincare goals</a></li>
        </ul>
      </div>
    </div>
  )
}
