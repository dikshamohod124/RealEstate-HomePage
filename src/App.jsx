import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Header from './Component/Header'
import ExploreCities from './Component/Explore Cities'
import LatestBlog from './Component/Latest Blog'
import Footer from './Component/Footer'

function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <Header/>
     <ExploreCities/>
     <LatestBlog/>
     <Footer/>
     
     
    </>
  )
}

export default App
