import React from "react"
import { useDispatch } from "react-redux"
import { changePage, changePerPage } from "../store/actions"

const Pagination = ({pagesNum, currentPage,  perPage}) => {
  const dispatch = useDispatch()

  return (
    <div className="pagination">

      <label htmlFor=""> Movies per page :&nbsp;
        <select 
          value={perPage}
          onChange={(e) => dispatch(changePerPage(e.target.value))}
        >
          {[4, 8, 12].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </label>    
    
      <div className="pagination-bar">
        <button 
          disabled={currentPage === 1 ? true : false}
          onClick={() => dispatch(changePage(currentPage -1 ))}
        >
          {'<'}
        </button>

        <ul>
          {pagesNum.map((num) => (
            <li 
              key={num} 
              className={num === currentPage ? 'active' : ''}
              onClick={() => dispatch(changePage(num))}  
            >
              {num}
            </li>
          ))}
        </ul>
        
        <button 
          disabled={currentPage === pagesNum.length ? true : false}
          onClick={() => dispatch(changePage(currentPage + 1))}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Pagination
