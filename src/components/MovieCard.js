import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";
import './MovieCard.css';
function MovieCard({movie}) {
  return (
    <div>    <Link to= {`/trailer/${movie.name}`} style={{textDecoration:"none", color:"white"}}>
        <Card className='movie'>
        <Card.Img className='poster' variant="top" src={movie.posterurl}  />
      <Card.Body className='movie-details' >
        <Card.Title className='box'>{movie.name}
                    <span className='rating'> <ReactStars
                     count={5} size={24} activeColor="#ffd700" edit={false}
                      value ={movie.rating} />
                    </span>
        </Card.Title>
        <Card.Text className='overview'>
          {movie.description}
        </Card.Text>
        
      </Card.Body>
      
   
    </Card>
    </Link>
    </div>
  )
}

export default MovieCard