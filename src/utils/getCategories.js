const getCategories = (movies) =>{
  const Categories = movies.map(movies => movies.category)
  return [...new Set(Categories)]
}

export default getCategories