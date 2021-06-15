import { LOAD_MOVIES, LOAD_CURRENT_MOVIES, CHANGE_PAGE, CHANGEPERPAGE, DELETE_MOVIE, FILTER_MOVIES } from "./types"
import getCurrentMovies from '../utils/getCurrentMovies'
import filterByCategory from "../utils/filterByCategory"

let initialState = {
  movies: [],
  loading: true,
  filteredmovies: [],
  filterCategories: [],
  currentMovies: [],
  currentPage: 1,
  moviesPerPage: 4
}

let updatedList

export let reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        filteredmovies: action.payload,
        loading: false
      }
    case FILTER_MOVIES:
      updatedList = filterByCategory(action.payload, state.movies)
      return {
        ...state,
        filteredmovies: updatedList,
        filterCategories: action.payload
      }
      case DELETE_MOVIE:
        updatedList = [...state.movies]
        updatedList = updatedList.filter(movie => movie.id !== action.payload)
        const updatedFilter = filterByCategory([...state.filterCategories], updatedList)
        return {
          ...state,
          movies: updatedList,
          filteredmovies: updatedFilter
        }
    case LOAD_CURRENT_MOVIES:
      const {filteredmovies, currentPage, moviesPerPage} = state
      updatedList = getCurrentMovies([...filteredmovies], currentPage, moviesPerPage)
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
