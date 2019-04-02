import React from 'react';
import './Ad.scss';

export default function Ad(props) {

  return (
    <div className="Ad">
      <a href="http://www.cremedelamer.com?utm_medium=cobrandedlp&utm_source=equinox&utm_campaign=digital__concentrate_equinox&utm_content=equinox_cobrandedlp_adunit_fullwidth_fy19_&utm_term=digital_marketing" target="_blank">
      <div className="left-and-right">
        <div className="left">
          <div className="left-container">
              <img src="http://furthermore-cdn.equinox.com/source-of-strength/static/media/concentrate-black.png" class="logo"/>
            <div className="quote-and-text">
                <img src="http://furthermore-cdn.equinox.com/source-of-strength/static/media/La_Mer_Quote.png" class="quote"/>
                <div className="small-text">{props.source}</div>
            </div>
            <div className="large-text">{props.quote}</div>
          </div>
        </div>
        <div className="product-and-image">
        <div className="right">
          <img src="http://furthermore-cdn.equinox.com/source-of-strength/static/media/La_Mer_Product.png" class="product"/>
          <div className="buy-me">Get The Concentrate ></div>
        </div>
        </div>
      </div>
    </a>
    </div>
  )
}
