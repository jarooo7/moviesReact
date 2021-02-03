import React, { useState, useEffect } from 'react';
import Card from '../../molecules/Card';
import styled from 'styled-components';


export const Header = styled.h2`
    width:100%;
    max-width: 1300px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
`;


const Fav = (props) => {
  const [fav, setFav] = useState([]);


  const handelUpdateFav = ()=>{
    setFav(JSON.parse(localStorage.getItem('fav')));
  }

  useEffect(()=>{
    const getNews= async () =>{
      const date = new Date ();
      setFav(JSON.parse(localStorage.getItem('fav')));
    }
    getNews();
  },[]);
  return(
    <>
    {fav.length===null?<div className="MainContainer">
      {fav.map((m=>(
         <Card
         key={m.id}
         id={m.id}
         img={m.img}
         url={m.url}
         name={m.name}
         genre={m.genres}
         lang={m.language}
         fav={true}
         update={handelUpdateFav}
       />
      )))}
     
    </div>:
    <Header>
      Nie masz ulubionych filmów
    </Header>}
    </>
  );
};

export default Fav;
