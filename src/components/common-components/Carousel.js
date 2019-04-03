import React, { Component } from "react";
import Slider from "react-slick";
import $ from 'jquery';


import './Carousel.scss';

export default class SimpleSlider extends Component {

  constructor(props) {
    super(props);
    this.state = { collection: props.collection,
                    anchorId: props.anchorId,
                    oldSlide: 0,
                    activeSlide: 0,
                    activeSlide: 0};

  }

  componentDidMount() {

    if (window.location.search ) {
      var query = window.location.search;
      var slide = parseInt(query.slice( 1 ));

      this.slider.slickGoTo(slide);
    }
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <img src="https://furthermore-cdn.equinox.com/source-of-strength/static/media/arrow_left.png"/>,
      nextArrow: <img src="https://furthermore-cdn.equinox.com/source-of-strength/static/media/arrow_right.png"/>,
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    };

    return (

        <div className="Carousel" >
          <Slider ref={slider => (this.slider = slider)} {...settings} >
            {this.state.collection.map(function(item, i){
              return (
                <div key={"a" + i}>

                  <iframe key={"b" + i} className="carousel-img" src={"https://www.youtube.com/embed/" + item.video} width="640" height="360" frameborder="0" allowfullscreen></iframe>

                  <div className="name-box">
                    <img className="quote" src="http://furthermore-cdn.equinox.com/source-of-strength/static/media/white-quote-mark.png"/>
                    <p className="name">{item.name} on selfcare</p>
                  </div>

                  <div key={"c" + i} className="carousel-ad-desktop"><p className="quote-text">{item.quote}</p></div>
                  <div key={"d" + i} className="carousel-ad-mobile"><p className="quote-text">{item.quote}</p></div>

                </div>);
            })}
          </Slider>
          <p className="slide-count">{this.state.activeSlide + 1}/{this.state.collection.length}</p>

        </div>

    );
  }
}
