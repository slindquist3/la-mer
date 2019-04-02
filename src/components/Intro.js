import React from 'react';
import './Intro.scss'

export default function Intro() {

  return (
    <div className="Intro">

      <div className="text-container">
        <div className="logo-container">
          <a target="_blank" href="https://www.cremedelamer.com/">
            <img className="logo" src="https://furthermore-cdn.equinox.com/source-of-strength/static/media/concentrate-white.png"/>
          </a>
        </div>
        <p className="presents">presents</p>
          <h1 className="header">source of strength</h1>
          <p className="subcopy">Athletes strengthen their muscles with weight training, running, cycling, and other fit pursuits. But fortifying the skin is an important component of the holistic selfcare required to excel in all areas of life. That’s why Furthermore partnered with La Mer’s The Concentrate: This powerful serum promotes skin’s natural healing process by strengthening, soothing, and protecting wherever you need it most. Get inspired by the sources of strength of three high performers below.</p>
      </div>
    </div>
  )
}
