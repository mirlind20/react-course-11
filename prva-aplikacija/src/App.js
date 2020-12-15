import React from 'react'
import './App.css'
import Button from './Button.js'

class App extends React.Component {

  render = () => {
    return (
      <div>
        <h1>Welcome to my first react webpage!</h1>
        <Button />
      </div>
    )
  }
}

export default App