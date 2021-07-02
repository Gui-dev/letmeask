import React from 'react'

import './services/firebase'
import { Routes } from './routes'
import { GlobalStyle } from './assets/style/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default App
