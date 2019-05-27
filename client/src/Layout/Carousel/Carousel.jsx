import React from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";

const Carousel = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1 Carousel-Wrapper"
      interval={4000}
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <Link to="">
              <img
                className="d-block w-100 Carousel-Image"
                src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg"
                alt="First slide"
              />
            </Link>
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive Carousel-Text">"The true meaning of life is to plant trees, under whose shade you do not expect to sit."</h3>
            <p>― Nelson Henderson</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 Carousel-Image"
              src="https://images.unsplash.com/photo-1467740100611-36858db27485"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive Carousel-Text">"Trees are poems that the earth writes upon the sky."</h3>
            <p>― Kahlil Gebran</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100 Carousel-Image"
              src="https://images.unsplash.com/photo-1528027815058-c3737d59e8a0"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive Carousel-Text">A tree is known by its fruit; a man by his deeds.</h3>
            <p>― Saint Basil</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Carousel;