import React from 'react'
import { useDispatch } from "react-redux"
import { deleteMovie } from '../store/actions'
import { FaTrashAlt } from "react-icons/fa"
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai"

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch()

  return (
    <div className='card'> 
      <h3> {movie.title}</h3>

      <h5>{movie.category}</h5>

      <div className="likes">
        <div>
          <AiTwotoneLike size={25} />
          {movie.likes}  
        </div>

        <div>
         <AiTwotoneDislike size={25} />
          {movie.dislikes}  
        </div>

      </div>

      <button onClick={() => dispatch(deleteMovie(movie.id))}>
        <FaTrashAlt size={25} />
      </button>
    </div>
  )
}

export default MovieCard
