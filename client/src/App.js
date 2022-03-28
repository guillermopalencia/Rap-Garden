import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">{/* probably nav here */}</header>
      <main>
        <Routes></Routes>
      </main>
    </div>
  )
}

export default App
