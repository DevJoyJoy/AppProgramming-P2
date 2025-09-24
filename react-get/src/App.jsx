import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [cat, setCat] = useState({})
  
  useEffect(() => {
    getCat();
  }, [])

  const getCat = async () => {
    const response = await axios.get('https://cataas.com/cat')
    setCat(response.data)
  }

  return (
    <>
      <img src={cat.url} alt="" />
    </>
  )
}

export default App
