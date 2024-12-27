
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm/LoginForm'
import Home from './components/Home/Home'


import React from 'react'
import Header from './components/BaseComponents/Header'
import Footer from './components/BaseComponents/Footer'
import NavBar from './components/BaseComponents/NavBar'
import AppRoutes from './AppRoutes' // Import the routing component

const App: React.FC = () => {
  return (

    <div className="flex flex-col h-screen justify-between">
      <Header />
      <NavBar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>

  )
}

export default App
