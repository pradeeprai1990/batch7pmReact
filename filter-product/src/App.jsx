import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaYoutube } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FaYoutube className='text-red-600 text-[40px]' />
      <FaMapMarker />
    </>
  )
}

export default App
