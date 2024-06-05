import React from 'react';
import Carousel from './Carousel';
import MainDetailsSection from './MainDetailsSection';

const Main = () => {
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
      <section className="section dashboard">
        <div className="col">
          <Carousel />
          <MainDetailsSection />
        </div>
      </section>
    </main>
  );
};

export default Main;
