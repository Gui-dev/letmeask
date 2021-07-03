import React from 'react'

import './services/firebase'
import { AuthContextProvider } from './contexts/AuthContext'
import { Routes } from './routes'
import { GlobalStyle } from './assets/style/global'

function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle />
      <Routes />
    </AuthContextProvider>
  )
}

export default App
