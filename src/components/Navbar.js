import React from 'react';
import './Navbar.scss'

export default function Navbar() {

  return (
    <div className="Navbar">
      <a target="_blank" href="https://www.cremedelamer.com/">
        <img className="la-mer" src="https://furthermore-cdn.equinox.com/source-of-strength/static/media/concentrate-white.png"/>
      </a>

      <a target="_blank" href="https://furthermore.equinox.com/">
        <img className="fm desktop" src="https://furthermore-cdn.equinox.com/source-of-strength/static/media/fm-desktop-white.png"/>
        <img className="fm mobile" src="https://furthermore-cdn.equinox.com/source-of-strength/static/media/fm-logo-mobile-white.png"/>
      </a>

      <ul className="mobile-anchors">
        <li className="mobile-anchor">
          <a href="#beesection" className="anchor-text"><span className="break">yoga &</span> meditation</a>
        </li>
        <li className="pipe">|</li>

        <li className="mobile-anchor">
          <a href="#joshsection" className="anchor-text"><span className="break">community</span>engagement</a>
        </li>
        <li className="pipe">|</li>
        <li className="mobile-anchor" id="solo-travel">
          <a href="#daniellesection"  className="anchor-text">solo travel</a>
        </li>

      </ul>


    </div>
  )
}
