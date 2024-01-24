import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App; 