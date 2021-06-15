import React from 'react'

const Filter = ({ categories }) => {
  return (
    <div className='filter'>
      <label> Categories :&nbsp;
        <select>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default Filter
