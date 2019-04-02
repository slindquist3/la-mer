import React from 'react';

import './Bio.scss';

export default function Bio(props) {

  return (
    <div className="Bio">
      <div className="bio-container">

        {
          props.headshot.includes("bee") ?

          <img id="bee-headshot" className="bio-image" src={props.headshot} /> :
          <img className="bio-image" src={props.headshot} />
        }
        
        <div>
          <h2 className="name">{props.name}</h2>
          <h2 className="heading">{props.heading}</h2>
        </div>
        <p className="subcopy">{props.subcopy}</p>
      </div>
    </div>
  )
}
