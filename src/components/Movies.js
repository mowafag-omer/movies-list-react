import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import MovieCard from './MovieCard'

const Movies = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.currentMovies)

  return (
    <div className='movies'>
      {!!movies.length ? (

        movies.map((movie) => ( 
          <MovieCard key={movie.id} movie={movie} />
        ))

      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  )
}

export default Movies
