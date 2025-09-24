import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [cat, setCat] = useState({})
  
  
  const getCat = async () => {
    const response = await axios.get('https://cataas.com/cat')
    setCat(response.data)
  }

  useEffect(() => {
    getCat();
  }, [])

  return (
    <>
      <button onClick={getCat}>Outro gato</button>
      {cat.url && <img src={cat.url} alt="Cat" />}
    </>
  )
}

export default App
