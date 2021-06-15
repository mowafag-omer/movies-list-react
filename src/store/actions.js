import { LOAD_MOVIES, LOAD_CURRENT_MOVIES, CHANGE_PAGE, CHANGEPERPAGE } from "./types"
import { movies$ } from "../data/movies.js"

export const loadMoveies = () => async (dispatch) => {
  const movies = await movies$
  dispatch({
    type: LOAD_MOVIES,
    payload: [...movies]
  })

  dispatch({type: LOAD_CURRENT_MOVIES})
}

export const changePage = (pageNum) => (dispatch) => {
  dispatch({
    type: CHANGE_PAGE,
    payload: pageNum
  })

  dispatch({type: LOAD_CURRENT_MOVIES})
}

export const changePerPage = (perPage) => (dispatch) => {
  dispatch({
    type: CHANGEPERPAGE,
    payload: perPage
  })

  dispatch({type: LOAD_CURRENT_MOVIES})
}

