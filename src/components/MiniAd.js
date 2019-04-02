import React from 'react';
import './MiniAd.scss'

export default function MiniAd() {

  return (
    <div className="MiniAd">

      <div className="mini-ad-container">

      <div className="image-container">
        <a href="http://www.cremedelamer.com?utm_medium=cobrandedlp&utm_source=equinox&utm_campaign=digital__concentrate_equinox&utm_content=equinox_cobrandedlp_adunit_fullwidth_fy19_&utm_term=digital_marketing" target="_blank">
        <img src="http://furthermore-cdn.equinox.com/source-of-strength/static/media/Ad-c.png" />
      </a>
      </div>

      <div className="text-container">
        <img className="quote" src="http://furthermore-cdn.equinox.com/source-of-strength/static/media/white-quote-mark.png" />
        <span className="quote-name">Bee Bosnak on selfcare</span>


        <p className="quote-text">My skincare goals are hydration, protecting my skin from irritations, and to glow from the inside out.</p>
      </div>

      </div>
    </div>
  )
}
