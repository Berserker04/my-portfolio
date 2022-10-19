import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layouts/Layout";
import { HomeContainer } from "../pages/home/HomeContainer";
import { ProfileContainer } from "../pages/profile/ProfileContainer";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Layout />}>
            <Route index exact element={<HomeContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
