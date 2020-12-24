import React from 'react'
import './App.css'
// import Button from './Button.js'
// import Calc from './Calc'
// import Counter from './Counter'
import Toolbar from './components/Toolbar.js'
import Users from './components/Users.js'

const items = [
  'Home',
  'Books',
  'Authors',
  'Favourites'
]

class App extends React.Component {

  render = () => {
    return (
      <div>
        {/* <h1>Welcome to my first react webpage!</h1>
        <Button greeting='ZDRAVO SEMOS' />
        <Counter />
        <Calc /> */}
        <Toolbar menuItems={items} />
        <br />
        <Users />
      </div>
    )
  }
}

export default App