import React from 'react'
import {Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './discription.css';
const Discription = ({movies}) => {
    const {id} = useParams();
    const movie=movies.find(el=>el.id=== id);
    return (
    <div>
       <Link to='/'>go back</Link><br></br>
       {movie.discription}<br></br><br></br>
       <ReactPlayer url={movie.video} width="100"/>
        <br></br>  
    </div>
  )
}

export default Discription