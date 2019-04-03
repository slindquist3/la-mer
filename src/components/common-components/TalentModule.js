import React from 'react';
import $ from 'jquery';

import Bio from './Bio.js'
import Video from './Video.js'
import Carousel from './Carousel.js';

import BeeSubcopy from '../BeeSubcopy.js';
import JoshSubcopy from '../JoshSubcopy.js';
import DanielleSubcopy from '../DanielleSubcopy.js';

import './TalentModule.scss';

export default function TalentModule(props) {

var subcopySection = [ <BeeSubcopy />, <JoshSubcopy />, <DanielleSubcopy />];

  return (
    <div className="TalentModule" id={props.id}>

      <Bio headshot={props.headshot} name={props.name} heading={props.heading} subcopy={props.subcopy} />
      <Video video={props.video} still={props.still}/>

      {subcopySection[props.subcopyId]}

      <div className="SecondImageContainer"><img className="img" src={props.secondImage}/>
        <p className="main-text">My definition of selfcare</p>
      </div>

      <div id={props.anchorId}>
        <Carousel collection={props.collection} anchorId={props.anchorId} slideNum={props.slideNum}/>
      </div>

    </div>
  )
}
