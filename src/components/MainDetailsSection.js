import React from 'react';
import Card from './Card';

const MainDetailsSection = () => {
  return (
    <div className="col-lg-4">
      <div className="row">
        <Card title="Card 1" description="Description for card 1" />
        <Card title="Card 2" description="Description for card 2" />
        <Card title="Card 3" description="Description for card 3" />
      </div>
    </div>
  );
};

export default MainDetailsSection;
