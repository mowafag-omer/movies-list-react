const getPagesNumber = (totalMovies, moviesPerPage) => {
  const pagesNum = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pagesNum.push(i);
  }

  return pagesNum
}

export default getPagesNumber