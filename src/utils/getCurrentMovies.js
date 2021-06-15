const getCurrentMovies = (movies, currentPage, moviesPerPage) => {
  const indexOfLastmovie = currentPage * moviesPerPage
  const indexOfFirstmovie = indexOfLastmovie - moviesPerPage
  return movies.slice(indexOfFirstmovie, indexOfLastmovie)
}

export default getCurrentMovies