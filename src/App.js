import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/main.css";

import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

import Header from "./components/Header/Header";

import DefaultLayout from "./layout/DefaultLayout";

import * as ROUTES from "./constants/routePath";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route path={ROUTES.NOTFOUNDPAGE} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
