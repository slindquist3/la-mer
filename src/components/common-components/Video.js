import React from 'react';

import './Video.scss';

export default function Video(props) {

  return (
    <div className="Video">

      <iframe src={"https://www.youtube.com/embed/" + props.video} width="640" height="360" align="middle" frameborder="0" allowfullscreen></iframe>

    </div>
  )
}
