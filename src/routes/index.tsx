import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './../pages/Home'
import { NewRoom } from './../pages/NewRoom'

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home }/>
      <Route path="/rooms/new" component={ NewRoom }/>
    </BrowserRouter>
  )
}
