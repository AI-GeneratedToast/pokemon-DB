import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const PokemonList = ({ list }) => {
  const createCards = () => {
    const cards = [];


    for (let i = 0; i < list.length; i++) {
      const pokemon = list[i];

  
      if (i % 4 === 0) {
        cards.push(
          <Row key={`row-${i / 4}`}>
            {createCard(pokemon)}
          </Row>
        );
      } else {
  
        const lastRow = cards[cards.length - 1];
        cards[cards.length - 1] = (
          <Row key={`row-${i / 4}`}>
            {lastRow.props.children}
            {createCard(pokemon)}
          </Row>
        );
      }
    }

    return cards;
  };

  const createCard = (pokemon) => (
    <Col key={pokemon.name}>
      <Card className='text-center shadow m-2' style={{ width: '16rem' }}>
        <Card.Img variant="top" src={pokemon.sprites.front_default} />
        <Card.Body>
          <Card.Title >{pokemon.name}</Card.Title>
          <Card.Text>{pokemon.Body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );

  return <Container >{createCards()}</Container>;
};
