import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectGrid from "./ProjectGrid";
import EntryGrid from "./EntryGrid";
import PageFooter from "./PageFooter";
import { siteContent } from "../data/siteContent";
import "../stylings/Home.css";

/**
 * Returns the experience sections shown above projects
 */
function getHomeSections() {
  return {
    primary: [
      { id: "education", title: "Education", items: siteContent.education },
      { id: "research", title: "Research", items: siteContent.research },
      { id: "work", title: "Work", items: siteContent.workExperience },
      { id: "teaching", title: "Teaching", items: siteContent.teachingExperience },
    ],
    extracurricular: {
      id: "activities",
      title: "Extra curricular",
      items: siteContent.extracurricular,
    },
  };
}

/**
 * Renders one shared experience section
 */
function ExperienceSection({ section }) {
  return <EntryGrid id={section.id} title={section.title} items={section.items} />;
}

/**
 * Renders the full portfolio page
 */
export default function Home() {
  const sections = getHomeSections();
  return (
    <main className="site-shell">
      <Navbar />
      <HeroSection hero={siteContent.hero} />
      {sections.primary.map((section) => (
        <ExperienceSection key={section.id} section={section} />
      ))}
      <ProjectGrid
        projects={siteContent.selectedProjects}
        footerLink={siteContent.allProjectsLink}
      />
      <ExperienceSection section={sections.extracurricular} />
      <PageFooter footer={siteContent.footer} />
    </main>
  );
}
