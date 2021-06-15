import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { Multiselect } from 'multiselect-react-dropdown'
import { filterMovies } from '../store/actions'


const Filter = ({ categories }) => {
  const dispatch = useDispatch()
  const [options, setoptions] = useState(categories)

  const onSelect = (selectedList) => {
    dispatch(filterMovies(selectedList))
  }

  const onRemove = (selectedList, removedItem) => {
    console.log('selectedList onRemove:', selectedList);
    dispatch(filterMovies(selectedList))
  }

  return (
    <div className='filter'>
      <label> Categories
        <Multiselect 
          options={options}
          selectedValues={setoptions}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="category"
        />
        {/* <select>
          <option>Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select> */}
      </label>
    </div>
  )
}

export default Filter
