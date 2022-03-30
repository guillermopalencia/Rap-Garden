import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Artists from './pages/Artists'
import AlbumsList from './pages/AlbumsList'
import Songs from './pages/Songs'
import ListenLater from './pages/ListenLater'

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">{/* probably nav here */}</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/albums/:id" element={<AlbumsList />} />
          <Route path="/albums/songs/:id" element={<Songs />} />
          <Route path="/songs/:id" element={<ListenLater />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
