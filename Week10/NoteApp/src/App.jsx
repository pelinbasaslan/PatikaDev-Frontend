import { useState } from 'react'
import './App.css'
import Note from './Note'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Note />
    </>
  )
}

export default App