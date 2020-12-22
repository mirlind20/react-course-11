import React, { useState, useEffect } from 'react'
import '../styles/Toolbar.css'
import logo from '../images/example-logo.jpg'
// Main navigation component

// props is an object
const Toolbar = (props) => {
  // es6 destructuring
  const { menuItems } = props

  // STATE HOOK
  const [counter, setCounter] = useState(0)
  // const [user, setuser] = useState("Koco")

  const decrement = () => {
    const newState = counter - 1
    setCounter(newState)
  }
  const increment = () => {
    const newState = counter + 1
    setCounter(newState)
  }

  useEffect(() => {
    alert(menuItems)
  } , [menuItems])

  // no render method
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>

      <ul className='toolbar-list'>
        <li>
          <img
            alt='placeholder image'
            src={logo}
            style={{ maxWidth: '5rem' }}
          />
        </li>
        {menuItems.map(element => <li className='toolbar-item'>
          {element}
        </li>
        )}
      </ul>
    </div>
  )
}

export default Toolbar
