import React from 'react'
import './FilterCard.css'
import ReactStars from "react-rating-stars-component";


const FilterCard = ({setTitleMovie,setRateMovie}) => {

const ratingChanged = (newRating) => {setRateMovie(newRating); }

const handleChangeT=(event)=>{  event.preventDefault();setTitleMovie(event.target.value);}
    return(
        <div className='headerM'>
             <div style= {{marginRight:"20px", marginLeft:"5px"}}  >
                       <ReactStars count={5} onChange={ratingChanged} size={30}  activeColor="#ffd700"/>
                   </div>
                <form className="searchM">
                   
                    <input className="search-field" type="search" placeholder="search" onChange={handleChangeT} />
                    
                </form>
               
        </div>     
    )
}
export default FilterCard