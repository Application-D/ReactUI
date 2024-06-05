import React from 'react';
import slide1 from '../img/slides-1.jpg'; 
import slide2 from '../img/slides-2.jpg'; 
import slide3 from '../img/slides-3.jpg';

const Carousel = () => {
  return (
    <div className="col-lg-8">
      <div className="card">
        <div className="card-body">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slide1} className="d-block w-100" alt="slide1" />
              </div>
              <div className="carousel-item">
                <img src={slide2} className="d-block w-100" alt="slide2" />
              </div>
              <div className="carousel-item">
                <img src={slide3} className="d-block w-100" alt="slide3" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
