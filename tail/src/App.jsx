import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="h-screen flex flex-col justify-between">
      <div class="flex justify-between items-center">
        <div class="w-52 h-52 flex justify-between flex-col items-center bg-purple-950">
          <div class="w-17 h-17 flex bg-purple-300"></div>
          <div class="w-17 h-17 flex bg-purple-300"></div>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        <div class="w-52 h-52 justify-center flex items-center bg-purple-950">
          <div class="w-17 h-17 bg-purple-300"></div>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        <div class="w-52 h-52 flex justify-between bg-purple-950">
          <div class="w-17 h-17 flex self-start justify-end bg-purple-300"></div>
          <div class="w-17 h-17 flex self-end bg-purple-300"></div>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        <div class="w-52 h-52 justify-center items-end flex bg-purple-950">
          <div class="w-17 h-17 bg-purple-300"></div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <div class="flex justify-between items-center">
        <div class="w-52 h-52 justify-center flex bg-purple-950">
          <div class="w-17 h-17 bg-purple-300"></div>
      </div>
        {/* ------------------------------------------------------------------------------ */}
        <div class="w-52 h-52 flex flex-col bg-purple-950">
          <div class="w-17 h-17 flex self-center bg-purple-300"></div>
          <div class="flex justify-between">
            <div class="w-17 h-17 flex self-end bg-purple-300"></div>
            <div class="w-17 h-17 flex self-start bg-purple-300"></div>
          </div>
          <div class="w-17 h-17 flex self-center justify-start bg-purple-300"></div>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        <div class="w-52 h-52 justify-center flex bg-purple-950">
          <div class="w-17 h-17  bg-purple-300"></div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <div class="flex justify-between items-center">
        <div class="w-52 h-52 flex justify-between bg-purple-950">
          <div class="w-17 h-17 flex self-end justify-end bg-purple-300"></div>
          <div class="w-17 h-17 flex self-start bg-purple-300"></div>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        <div class="w-52 h-52 justify-center flex items-center bg-purple-950">
          <div class="w-17 h-17 bg-purple-300"></div>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        <div class="w-52 h-52 flex justify-end bg-purple-950">
          <div class="w-17 h-17 bg-purple-300"></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
