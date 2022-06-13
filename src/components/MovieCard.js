import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

function MovieCard({movie}) {
  return (
    <div>
        <Card style={{ width: '18rem', minHeight:"461px",maxHeight:"461px" ,marginBottom:"50px"}}>
      <Card.Img variant="top" src={movie.posterurl} style={{maxHeight:"160px", minHeight:"160px" }} />
      <Card.Body >
        <Card.Title >{movie.name}</Card.Title>
        <Card.Text id='overview'>
          {movie.description}
        </Card.Text>
        
      </Card.Body>
     <span style={{margin:"0 auto"}} > <ReactStars
    count={5} size={24} activeColor="#ffd700" edit={false} value ={movie.rating} /></span>
    </Card>
    
    </div>
  )
}

export default MovieCard