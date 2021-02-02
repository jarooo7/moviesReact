import React from 'react';
import { Container, Text } from './Card.styles';
import Image from '../../atoms/Image'
import Button from '../../atoms/Button'

const Card = (props) => {
  const {name, genre, lang, img, url }= props;
  return (
    <Container>
      <Image src={img}/>
      <Text>
        <h2>{name}</h2>
        <p>{genre.map(x=>x)}</p>
        <p>{lang}</p>
        <Button url={url}>Przejdź do strony filmu</Button>
      </Text>
    </Container>
  );
};


export default Card;
