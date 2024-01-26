import LoginForm from '../../components/LoginForm/LoginForm'
import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Home</h1>
      <LoginForm />
    </div>
  )
}

export default HomePage
