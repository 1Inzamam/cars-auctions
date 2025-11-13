import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Auctions from './components/Auctions/Auctions'
import './App.css'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
      <Banner></Banner>
      <Auctions></Auctions>
    </>
  )
}

export default App
