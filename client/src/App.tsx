// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import LoginPage from "./loginPage";
import HomePage from "./homePage";
import ConfirmUserPage from "./confirmUserPage";
import "./App.css";

const App = () => {
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem("accessToken");

    if (!accessToken) {
      // No access token
      return false;
    }

    try {
      // Parse and verify the access token
      const decodedToken = jwtDecode(accessToken);
      return decodedToken && !isTokenExpired(decodedToken);
    } catch (error) {
      // Error validating access token
      console.error("Error validating access token:", error);
      return false;
    }
  };

  const isTokenExpired = (decodedToken) => {
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated() ? (
              <Navigate replace to="/home" />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/confirm" element={<ConfirmUserPage />} />
        <Route
          path="/home"
          element={
            isAuthenticated() ? <HomePage /> : <Navigate replace to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
