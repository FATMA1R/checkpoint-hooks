import React from 'react';
import MovieCard from './MovieCard';
import AddMovie from './addmovie/AddMovie';
function MovieList({movies , setMovies, titleMovie, rateMovie}) {
  return (
   <div> 
    <AddMovie movies={movies} setMovies={setMovies}/>
    
        <div style={{marginTop:"0px", display:"flex", justifyContent:"space-around",  flexWrap:"wrap"}}>
          {movies.filter((el)=>el.name.toLowerCase().includes(titleMovie.toLowerCase()))          
          .map((el) => <MovieCard movie={el} />).reverse()}
        </div>    
    </div>
  )
}

export default MovieList