import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Meeting from './Meeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Meeting />
    </>
  )
}

export default App
