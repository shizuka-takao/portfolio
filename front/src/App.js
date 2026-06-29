import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import AllProjectsPage from "./components/AllProjectsPage";
import ArtsPage from "./components/ArtsPage";
import BlogPage from "./components/BlogPage";
import Home from "./components/Home";
import PersonalPage from "./components/PersonalPage";

/**
 * Renders the pages available in the portfolio
 */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/arts" element={<ArtsPage />} />
      <Route path="/personal" element={<PersonalPage />} />
      <Route path="/projects" element={<AllProjectsPage />} />
    </Routes>
  );
}

/**
 * Renders the root app for the portfolio
 */
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <title>Shizuka Takao - Personal Website</title>
          <meta
            name="description"
            content="Explore Shizuka Takao's portfolio featuring research, work experience, teaching, selected projects, and personal background."
          />
        </Helmet>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
