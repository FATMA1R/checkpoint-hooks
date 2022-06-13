import React from 'react'
import './FilterCard.css'
import ReactStars from "react-rating-stars-component";


const FilterCard = ({setTitleMovie,setRateMovie}) => {

const ratingChanged = (newRating) => {setRateMovie(newRating); };
const handleChangeT=(event)=>{  event.preventDefault();setTitleMovie(event.target.value);}
    return(
        <div className='headerM'>
            <p className="logoApp"></p>
                <form className="searchM">
                   <div className="rating" style={{marginRight:"20px"}}>
                       <ReactStars count={5} onChange={ratingChanged} size={25}  activeColor="#ffd700"/>
                   </div>
                    <input className="search-field" type="search" placeholder="search" onChange={handleChangeT} />
                        
                </form>
        </div>     
    )
}
export default FilterCard