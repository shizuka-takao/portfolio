import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import EntryGrid from "./EntryGrid";
import PageFooter from "./PageFooter";
import { siteContent } from "../data/siteContent";
import "../stylings/Home.css";

const DEFAULT_THEME = "dark";

/**
 * Returns the experience sections shown on the homepage
 */
function getHomeSections() {
  return [
    { id: "education", title: "Education", items: siteContent.education },
    { id: "research", title: "Research", items: siteContent.research },
    { id: "work", title: "Work", items: siteContent.workExperience },
  ];
}

/**
 * Renders one shared experience section
 */
function ExperienceSection({ section }) {
  return <EntryGrid id={section.id} title={section.title} items={section.items} />;
}

/**
 * Returns the opposite theme mode
 */
function getNextTheme(theme) {
  if (theme === "dark") return "light";
  return "dark";
}

/**
 * Renders the full portfolio page
 */
export default function Home() {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const sections = getHomeSections();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  /**
   * Switches between dark and light theme modes
   */
  function handleToggleTheme() {
    setTheme((currentTheme) => getNextTheme(currentTheme));
  }

  return (
    <main className="site-shell site-shell-visible">
      <div className="site-shell-content">
        <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
        <HeroSection hero={siteContent.hero} />
        {sections.map((section) => (
          <ExperienceSection key={section.id} section={section} />
        ))}
        <PageFooter footer={siteContent.footer} />
      </div>
    </main>
  );
}
