import React, {useEffect, useState} from 'react';
import Card from '../../molecules/Card';
import axios from 'axios';
//import { Test } from './Home.styles';

const Home = (props) => {
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
      const date = new Date ();
      setFav(JSON.parse(localStorage.getItem('fav')));
      axios.get(`http://api.tvmaze.com/schedule/web?date=${date.toISOString().substr(0, 10)}`).
      then(res=> {
        console.log(res.data);
        setMowies(res.data);
      });
    }
    getNews();
  },[]);
  return(
    <div className="MainContainer">
      {movies.map((m=>(
         <Card
         key={m.id}
         id={m.id}
         img={m._embedded.show.image}
         url={m._embedded.show.url}
         name={m.name}
         genre={m._embedded.show.genres}
         lang={m._embedded.show.language}
         fav={isFav(m.id)}
         update={handelUpdateFav}
       />
      )))}
     
    </div>
  );
};



export default Home;
