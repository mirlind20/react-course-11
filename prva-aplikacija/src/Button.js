import React from 'react'

const name = 'Koco'

class Button extends React.Component {
  alertMe = () => {
    alert('Welcome Koco')
  }

  render() {
    return (
      <button
        id='welcome'
        className='test'
        onClick={this.alertMe}
      >
        Welcome {`${name} Nica`}
      </button>
    )
  }
}
export default Button