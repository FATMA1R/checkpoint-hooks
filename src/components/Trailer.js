import React from 'react';
import {useParams, useNavigate } from 'react-router-dom';
import ReactStars from 'react-stars';
import './Trailer.css';



function Trailer({ movies }) {
  


  const params = useParams();
  const history= useNavigate();
  
  const movie= movies.filter((el) => el.name === params.name)[0];
  return (
    <div style={{ alignItems:"center",color:"white" ,display:"flex",margin:"0 25px", justifyItems:"center",
    flexDirection:"column" , paddingTop:"40px", justifyContent:"center"}}>
      <div className='details' style={{backgroundColor:'black' , width:'1000px', alignItems:"center",
                                     paddingTop:"50PX", paddingBottom:"30px"}}>
       <img src={movie.posterurl}  style={{border:"10px inset white",textDecoration: "none", maxWidth:"800px", minWidth:"800px"}}></img>
        <h1 > {movie.name}</h1>
        <p style={{ alignItems:"center",color:"black" ,display:"flex",margin:"0 25px",
                flexDirection:"column" , justifyContent:"center" , textDecoration:"none",backgroundColor:"white"}}> {movie.description}</p>
        <div  style={{position:"center", marginLeft:"450px"}}><ReactStars
            count={5} size={24} 
            activeColor="#ffd700" 
            edit={false} 
            value={movie.rating}/> </div>
      </div>
<button className='btnn' onClick={()=>history(-1)}  style={{
                                         
}}> go back</button>

    </div>

  )
}

export default Trailer