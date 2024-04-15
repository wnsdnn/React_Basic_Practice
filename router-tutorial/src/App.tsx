import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";

function App() {
  return (
    <div>
        <Routes>
          {/* React Router v6부터는 component 프로퍼티 대신 element 프로퍼티 사용 */}
          <Route path="/" element={<Layout />}>
            {/* index - 상위 라우트에 경로참조 */}
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profiles/:username" element={<Profile />} />
          </Route>
          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />
          </Route>
          {/*<Route path="/articles/:id" element={<Article />} />*/}
        </Routes>
    </div>
  );
}

export default App;
