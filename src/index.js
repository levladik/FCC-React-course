import React from 'react';
import ReactDOM from 'react-dom/client'

export default function Greetings() {
  return (
    <h1>
      Hello!
    </h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greetings />)