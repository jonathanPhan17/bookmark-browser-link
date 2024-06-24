import React from 'react'

import './Toggle.css';

export default function Toggle( { handleToggleChange, isChecked }) {

  return (
    <div className='toggle-container'>
      <input
        type="checkbox"
        id="check"
        className='toggle'
        onChange={handleToggleChange}
        checked={isChecked}
      />
      <label htmlFor="check">{isChecked ? "🌙" : "🔆"}</label>
    </div>
  )
}
