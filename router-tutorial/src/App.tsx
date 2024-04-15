import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
        <Routes>
          {/* React Router v6부터는 component 프로퍼티 대신 element 프로퍼티 사용 */}
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Routes>
    </div>
  );
}

export default App;
