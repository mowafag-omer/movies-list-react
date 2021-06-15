import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Filter from "./components/Filter"
import Movies from "./components/Movies"
import Pagination from "./components/Pagination"
import { loadMoveies } from "./store/actions"
import './style/app.css'
import getPagesNumber from "./utils/getPagesNumber"
import getCategories from './utils/getCategories'

const App = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const pagesNum = getPagesNumber(state.movies.length, state.moviesPerPage)
  const categories = getCategories(state.movies)

  useEffect(() => {
    dispatch(loadMoveies())
  }, [])

  return (
    <div className="app">
      <div className="title">
        <h2>Movies</h2>
      </div>

      <Filter categories={categories} />

      <Pagination 
        pagesNum={pagesNum} 
        currentPage={state.currentPage} 
        perPage={state.moviesPerPage}
      />

      <Movies />
    </div>
  )
}

export default App
