import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import MovieCard from './MovieCard'

const Movies = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  return (
    <div className='movies'>
      {state.loading ? (
        <h4>Loading...</h4>
      ) : (!state.loading && state.currentMovies.length) ? (
        state.currentMovies.map((movie) => ( 
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <h4>No movies found !</h4>
      )}
    </div>
  )
}

export default Movies
