import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectGrid from "./ProjectGrid";
import EntryGrid from "./EntryGrid";
import PageFooter from "./PageFooter";
import { siteContent } from "../data/siteContent";
import "../stylings/Home.css";

/**
 * Returns the section id that matches the current route
 */
function getSectionIdFromPathname(pathname) {
  const sectionMap = {
    "/research": "research",
    "/work": "work",
    "/teaching": "teaching",
    "/selected-projects": "projects",
    "/activities": "activities",
  };
  return sectionMap[pathname];
}

/**
 * Scrolls to the matching section when the route changes
 */
function useSectionScroll() {
  const location = useLocation();
  useEffect(() => {
    const sectionId = getSectionIdFromPathname(location.pathname);
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    const topOffset = element ? element.offsetTop - 88 : 0;
    if (!element) return;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  }, [location.pathname]);
}

/**
 * Returns the experience sections shown above projects
 */
function getHomeSections() {
  return {
    primary: [
      { id: "research", title: "Research", items: siteContent.research },
      { id: "work", title: "Work Experience", items: siteContent.workExperience },
      { id: "teaching", title: "Teaching Experience", items: siteContent.teachingExperience },
    ],
    extracurricular: {
      id: "activities",
      title: "Extracurricular",
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
  useSectionScroll();
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
