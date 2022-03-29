import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Artist from './components/Artist'
import Music from './pages/Music'

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">{/* probably nav here */}</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Music />} />
        </Routes>
      </main>
    </div>
  )
}

export default App