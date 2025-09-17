import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { TwoParams } from './pages/Products'
import { Adms } from './pages/Adms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        {/* <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="product/:category/:prod" element={<TwoParams/>}></Route>
          <Route path="users/:id" element={<Adms/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
