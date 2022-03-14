import React from 'react'
import "./moviescard.css";
import ReactStars from 'react-stars';
import {Link} from 'react-router-dom';
const MovieCards = ({movie}) => {
  return (
    <div>
      <>
     <div className='title'>
     {movie.title}</div> <br></br>
      <img src={movie.image} width="250" /><br></br>
      {movie.description}<br></br><br></br>
      <ReactStars value={movie.rating} starCount={10}/>
       
      </><Link to={`/${movie.id}`}> 
      <button className='moviedetails'> Movie details</button>  </Link>
      <br></br>
    </div>
  )
}
export default MovieCards