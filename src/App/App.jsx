import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/Main/Main";

import AboutPage from "../pages/About/About";
import TestPage from "../pages/Tests/Tests";
import ErrorPage from "../pages/404/404";
import StatsPage from "../pages/Stats/Stats";
import UsersPage from "../pages/Users/Users";
import HomeWorkPage from "../pages/HomeWork/HomeWork";
import "../App.css";

function MainApp() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeWorkPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="stats" element={<StatsPage />} />
          <Route path="user" element={<UsersPage />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default MainApp;
