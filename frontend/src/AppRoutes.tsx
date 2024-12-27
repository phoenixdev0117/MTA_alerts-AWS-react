import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './features/AboutPage/AboutPage'
import HomePage from './features/HomePage/HomePage'
import LoginPage from './features/LoginPage/LoginPage'

import NotFoundPage from './features/NotFoundPage/NotFoundPage'


const AppRoutes: React.FC = () => {
  return (
    <Routes>

      {/* Public Routes*/}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Catch-All for 404 */}
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  )
}

export default AppRoutes
