import React from 'react';
import { Container, Text, CardContainer } from './Card.styles';
import Image from '../../atoms/Image'
import Button from '../../atoms/Button'

const Card = (props) => {
  const {name, genre, lang, img, url }= props;
  return (
    <CardContainer>
      <Container>
        <Image src={img? img.medium: "https://cdn.pixabay.com/photo/2017/01/25/17/35/camera-2008489_960_720.png"}/>
        <Text>
          <h2>{name}</h2>
          <p>{genre?genre.map(x=><span key={x}>{x} </span>) : null}</p>
          <p>Język : {lang}</p>
          <Button url={url}>Przejdź do strony filmu</Button>
        </Text>
      </Container>
    </CardContainer>
  );
};


export default Card;
