import React from "react";
import { Route, Routes } from "react-router-dom";
import Password from "./Views/Password/Password";
import Oraculo from "./Views/Oraculo/Oraculo";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import './Fonts.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/Password" element={<Password />} />
          <Route 
            path="/Oraculo" 
            element={
              <ProtectedRoute>
                <Oraculo />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
