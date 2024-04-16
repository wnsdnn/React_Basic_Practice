import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import _createRouter from "./router/router";

function App() {
  const routes = _createRouter();

  return (
    <div>
        <Routes>
          {routes.map(route => (
              <Route key={route.path} path={route.path} element={route.element}>
                {route.children?.map(childRoute => (
                    <Route key={childRoute.path} path={childRoute.path} element={childRoute.element} />
                ))}
              </Route>
          ))}
        {/*  /!* React Router v6부터는 component 프로퍼티 대신 element 프로퍼티 사용 *!/*/}
        {/*  <Route path="/" element={<Layout />}>*/}
        {/*    /!* index - 상위 라우트에 경로참조 *!/*/}
        {/*    <Route index element={<Home />} />*/}
        {/*    <Route path="/about" element={<About />} />*/}
        {/*    <Route path="/profiles/:username" element={<Profile />} />*/}
        {/*  </Route>*/}
        {/*  <Route path="/articles" element={<Articles />}>*/}
        {/*    <Route path=":id" element={<Article />} />*/}
        {/*  </Route>*/}
        {/*  /!*<Route path="/articles/:id" element={<Article />} />*!/*/}
        {/*  /!* (*) = wildcard 문자, 아무 텍스트나 매칭한다는 뜻  *!/*/}
        {/*  <Route path="/login" element={<Login />} />*/}
        {/*  <Route path="/mypage" element={<MyPage />} />*/}
        {/*  <Route path="*" element={<NotFound />} />*/}
        </Routes>
    </div>
  );
}

export default App;
