import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './features/AboutPage/AboutPage'
import HomePage from './features/HomePage/HomePage'
import LoginPage from './features/LoginPage/LoginPage'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default AppRoutes
