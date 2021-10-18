import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImage from '../../../images/mhm-web-banner.png';
import gif1 from '../../../images/bannergif1.gif'
import gif2 from '../../../images/bannergif2.gif'


const Banner = () => {
    return (
 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bannerImage}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Mental Health Care</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={gif1}
      alt="Second slide"
      height="260px"
      width="300px"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={gif2}
      alt="Third slide"
      height="260px"
      width="300px"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;