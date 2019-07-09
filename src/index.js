import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'

const parentElement = document.createElement('div')
document.body.appendChild(parentElement)

ReactDOM.render(<App />, parentElement)
