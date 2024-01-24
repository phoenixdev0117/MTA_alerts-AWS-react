import React from "react";
import { Route, Routes } from "react-router-dom"; // Import 'Routes' instead of 'Switch'
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <div className="App">
      <Routes> {/* Use 'Routes' here */}
        <Route path="/login" element={<LoginForm />} /> {/* Use 'element' prop */}
        {/* Other routes */}
      </Routes>
    </div>
  );
}

export default App; 