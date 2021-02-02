import React, {useEffect, useState} from 'react';
import Card from '../../molecules/Card';
import axios from 'axios';
//import { Test } from './Home.styles';

const Home = (props) => {
  const [movies, setMowies] = useState([]);
  useEffect(()=>{
    const getNews= async () =>{
      const date = new Date ();
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
         img={m._embedded.show.image}
         url="#"
         name={m.name}
         genre={m._embedded.show.genres}
         lang={m._embedded.show.language}
       />
      )))}
     
    </div>
  );
};



export default Home;
