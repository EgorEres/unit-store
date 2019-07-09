import axios from 'axios'
import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount () {}

  render () {
    const {
      url,
      timeCount,
      label,
      answers
    } = this.state
    return (
      <div className='game-wrapper'>
        
      </div>
    )
  }
}

export default App
