import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from '../components/Layout/UserLayout'
import Home from '../pages/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route>{/*Admin layout*/}</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
