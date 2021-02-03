import React from 'react';
import Card from '../../molecules/Card';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {SearchHeader } from './Search.styles';

const Search = (props) => {
  const {name} = useParams();
  const [movies, setMowies] = useState([]);
  const [fav, setFav] = useState([]);

  const isFav=(id)=>{
    if(fav!==null){
      return fav.some(x=>x.id===id);
    }
    else{
      return false;
    }
  }

  const handelUpdateFav = ()=>{
    setFav(JSON.parse(localStorage.getItem('fav')));
  }

  useEffect(()=>{
    const getNews= async () =>{
      setMowies([]);
      handelUpdateFav();
      axios.get(`http://api.tvmaze.com/search/shows?q=${name}`).
      then(res=> {
        console.log(res.data);
        setMowies(res.data);
      });
    }
    getNews();
  },[name]);
  return(
    <>
    {movies.length!==0 ? (
    <>
      <SearchHeader>Wynik wyszukiania: {name && name.toUpperCase()}</SearchHeader>
      <div className="MainContainer">
      {movies.map((m=>(
         <Card
         key={m.show.id}
         id={m.show.id}
         img={m.show.image}
         url={m.show.url}
         name={m.show.name}
         genre={m.show.genres}
         lang={m.show.language}
         fav={isFav(m.show.id)}
         update={handelUpdateFav}
       />
      )))}
      </div>
     </>):<SearchHeader>Brak wyników wyszukiwania: {name && name.toUpperCase()} </SearchHeader>
     }
    </>
  );
}


export default Search;
