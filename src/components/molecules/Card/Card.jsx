import React from 'react';
import { Container, Text, CardContainer } from './Card.styles';
import Image from '../../atoms/Image'
import Button from '../../atoms/Button'

const Card = (props) => {
  const {name, genre, lang, img, url, fav, update, id }= props;
  const handelAddFav=()=>{
    const data = {
      name, genre, lang, img, url, fav
    }
    let current =  JSON.parse(localStorage.getItem('fav'));
    if(current ===null){
      current = [props];
    }
    else{
      current = [...current,props];
    }
    localStorage.setItem('fav',JSON.stringify(current));
    update();
  }
  const handelRmFav=()=>{
    let current =  JSON.parse(localStorage.getItem('fav'));
    if(current !==null){
      current = current.filter(x=>x.id!==id)
      localStorage.setItem('fav',JSON.stringify(current));
      update();
    }
  }
  return (
    <CardContainer>
      <Container>
        <Image src={img? img.medium: "https://cdn.pixabay.com/photo/2017/01/25/17/35/camera-2008489_960_720.png"}/>
        <Button style={fav?{color: 'red'}:{}} onClick={fav?handelRmFav:handelAddFav} >❤</Button>
        <Text>
          <h2>{name}</h2>
          <p>{genre?genre.map(x=><span key={x}>{x} </span>) : null}</p>
          <p>Język : {lang}</p>
          <Button onClick={fav?handelRmFav:handelAddFav} >Przejdź do strony filmu</Button>
        </Text>
      </Container>
    </CardContainer>
  );
};


export default Card;
