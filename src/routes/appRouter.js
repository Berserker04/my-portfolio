import { Container } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layouts/Layout";
import { CertificateContainer } from "../pages/certificates/CertificateContainer";
import { HomeContainer } from "../pages/home/HomeContainer";
import { ProfileContainer } from "../pages/profile/ProfileContainer";
import { SkillContainer } from "../pages/skill/SkillContainer";

export default function AppRouter() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" exact element={<Layout />}>
            <Route index exact element={<HomeContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/skills" element={<SkillContainer />} />
            <Route path="/certificates" element={<CertificateContainer />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}
