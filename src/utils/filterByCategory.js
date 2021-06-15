const filterByCategory = (categories, movies) => {
  const filteredmovies = []

  movies.forEach(movie => {
    categories.forEach(cat => {
      if(movie.category === cat.category) filteredmovies.push(movie) 
    })
  })


  return !!filteredmovies.length ? filteredmovies : movies
}

export default filterByCategory