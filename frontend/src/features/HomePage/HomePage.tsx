import LoginForm from '../../components/LoginForm/LoginForm'

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Home</h1>
      <LoginForm />
    </div>
  )
}

export default HomePage
