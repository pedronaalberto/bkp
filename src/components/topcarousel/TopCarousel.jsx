import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './TopCarousel.css'

export default class TopCarousel extends React.Component {
  render() {
    return <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 slider-image"
        src="/Img/roller-coaster-2069862.png"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 slider-image"
        src="/Img/roller-coaster-2069862.png"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 slider-image"
        src="/Img/roller-coaster-2069862.png"
        alt="First slide"
      />
    </Carousel.Item>
  </Carousel>;
  }
}