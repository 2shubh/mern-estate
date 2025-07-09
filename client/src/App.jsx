import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import {Sign_in} from './pages/Sign_In'
import { Sign_up } from './pages/Sign_up'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import { Header } from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<Sign_in/>} />
      <Route path='/signup' element={<Sign_up/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App