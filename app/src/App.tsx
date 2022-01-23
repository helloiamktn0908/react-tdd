import React, { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  function changeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  return (
    <div className='App'>
      <body>
        <input
          type='text'
          aria-label='test-input'
          value={text}
          onChange={changeText}
        />
        <button type='button' aria-label='test-button' disabled={text === ''} />
      </body>
    </div>
  )
}

export default App
