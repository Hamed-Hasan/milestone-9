
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Card2 = (props) => {
    const {name, img} = props.product
    return (
        <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Card Title: {name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="warning">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
};

export default Card2;