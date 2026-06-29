import React from "react";
import { siteContent } from "../data/siteContent";
import Navbar from "./Navbar";
import PageFooter from "./PageFooter";
import ProjectGrid from "./ProjectGrid";
import SectionShell from "./SectionShell";
import "../stylings/Home.css";

/**
 * Renders the intro shown above the project archive
 */
function ArchiveIntro() {
  return (
    <SectionShell id="top" className="archive-section">
      <div className="archive-copy">
        <p className="hero-kicker">Project Archive</p>
        <h1 className="archive-title">All Projects</h1>
        <p className="archive-summary">
          A broader collection of software, machine learning, and exploratory builds beyond
          the smaller set featured on the homepage.
        </p>
      </div>
    </SectionShell>
  );
}

/**
 * Renders the full project archive page
 */
export default function AllProjectsPage() {
  return (
    <main className="site-shell">
      <Navbar />
      <ArchiveIntro />
      <ProjectGrid
        id="all-projects"
        eyebrow="Archive"
        title="All Projects"
        summary="A fuller project archive spanning machine learning, full stack systems, experiments, and product ideas."
        projects={siteContent.allProjects}
      />
      <PageFooter footer={siteContent.footer} />
    </main>
  );
}
