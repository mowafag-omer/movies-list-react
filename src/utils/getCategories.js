const getCategories = (movies) =>{
  const catArray = []
  const Categories = movies.map(movies => movies.category)
  const uniqueArray = [...new Set(Categories)]
  uniqueArray.forEach(category => catArray.push({category}))
  return catArray
}

export default getCategories