// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Outcomes from "./pages/Outcomes";
import Incomes from "./pages/Incomes";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const isAuthenticated = true; // Aquí deberías poner la lógica real de autenticación

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<div>Login Page</div>} />
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/incomes" element={<Incomes />} />
          <Route path="/outcomes" element={<Outcomes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
