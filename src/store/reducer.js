import { LOAD_MOVIES, LOAD_CURRENT_MOVIES, CHANGE_PAGE, CHANGEPERPAGE } from "./types"
import getCurrentMovies from '../utils/getCurrentMovies'

let initialState = {
  movies: [],
  currentMovies: [],
  currentPage: 1,
  moviesPerPage: 4
}

export let reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    case LOAD_CURRENT_MOVIES:
      const {movies, currentPage, moviesPerPage} = state
      const updatedList = getCurrentMovies(movies, currentPage, moviesPerPage)
      return {
        ...state,
        currentMovies: [...updatedList]
      }
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    case CHANGEPERPAGE:
      return {
        ...state,
        currentPage: 1,
        moviesPerPage: action.payload
      }
    default:
      return state
  }
}
