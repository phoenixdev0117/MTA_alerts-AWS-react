import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App; 