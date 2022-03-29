import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Artist from './components/Artist'
import Music from './pages/Music'
import AlbumsList from './pages/AlbumsList'
import Songs from './pages/Songs'

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">{/* probably nav here */}</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Music />} />
          <Route path="/albums" element={<AlbumsList />} />
          <Route path="/albums/songs/:id" element={<Songs />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
