import React from 'react'
import Carousel from 'embla-carousel-react';
import './GameSwiper.css'

const OPTIONS = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default class GameSwiper extends React.Component {
    render() {
      return <Carousel />;
    }
  }