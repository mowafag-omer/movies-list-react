import {
  LOAD_MOVIES,
  LOAD_CURRENT_MOVIES,
  CHANGE_PAGE,
  CHANGEPERPAGE,
  DELETE_MOVIE,
  FILTER_MOVIES
} from "./types"
import { movies$ } from "../data/movies.js"

export const loadMoveies = () => async (dispatch) => {
  const movies = await movies$
  dispatch({
    type: LOAD_MOVIES,
    payload: [...movies],
  })

  dispatch({ type: LOAD_CURRENT_MOVIES })
}

export const deleteMovie = (id) => (dispatch) => {
  dispatch({
    type: DELETE_MOVIE,
    payload: id
  })

  dispatch(changePage(1))
}

export const filterMovies = (categories) => (dispatch) => {
  dispatch({
    type: FILTER_MOVIES,
    payload: categories
  })

  dispatch(changePage(1))
}

export const changePage = (pageNum) => (dispatch) => {
  dispatch({
    type: CHANGE_PAGE,
    payload: pageNum
  })

  dispatch({ type: LOAD_CURRENT_MOVIES })
}

export const changePerPage = (perPage) => (dispatch) => {
  dispatch({
    type: CHANGEPERPAGE,
    payload: perPage
  })

  dispatch({ type: LOAD_CURRENT_MOVIES })
}
