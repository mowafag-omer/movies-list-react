import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className='card'> 
      <h3> {movie.title}</h3>

      <h5>{movie.category}</h5>

      <button>
        Delete
      </button>
    </div>
  )
}

export default MovieCard
