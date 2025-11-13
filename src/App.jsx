import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
      <Banner></Banner>
    </>
  )
}

export default App
