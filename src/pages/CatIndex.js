import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const CatIndex = ({ cats }) => {
  return (
    <main className="cat-index-cards">
      {cats?.map((cat, index) => {
        return (
          <Card
            className="card"
            key={index}
            style={{
              width: '18rem'
            }}
          >
            <img
              alt={cat.name}
              src={cat.img}
            />
            <CardBody>
              <CardTitle tag="h5">
                {cat.name}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {cat.age}
              </CardSubtitle>
              <CardText>
                {cat.enjoys}
              </CardText>
              <Button>
                <NavLink to={`/catshow/${cat.id}`}>More About Me</NavLink>
              </Button>
            </CardBody>
          </Card>
        );
      })}
    </main>
  );
};

export default CatIndex;
