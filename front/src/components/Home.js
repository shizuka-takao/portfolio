import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectGrid from "./ProjectGrid";
import EntryGrid from "./EntryGrid";
import PageFooter from "./PageFooter";
import { siteContent } from "../data/siteContent";
import "../stylings/Home.css";

const DEFAULT_THEME = "dark";
const INTRO_LETTER_DELAY_MS = 85;
const INTRO_HOLD_DELAY_MS = 3000;
const INTRO_MOVE_DURATION_MS = 2400;

/**
 * Returns the intro text that should be visible at one moment
 */
function getVisibleIntroText(title, visibleCount) {
  return title.slice(0, visibleCount);
}

/**
 * Returns the total time before the intro should start moving
 */
function getIntroMoveDelay(title) {
  return (title.length * INTRO_LETTER_DELAY_MS) + INTRO_HOLD_DELAY_MS;
}

/**
 * Returns the total time before the intro should end
 */
function getIntroCompleteDelay(title) {
  return getIntroMoveDelay(title) + INTRO_MOVE_DURATION_MS;
}

/**
 * Returns the experience sections shown above projects
 */
function getHomeSections() {
  return {
    primary: [
      { id: "education", title: "Education", items: siteContent.education },
      { id: "research", title: "Research", items: siteContent.research },
      { id: "work", title: "Work", items: siteContent.workExperience },
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
 * Returns the wrapper class for the homepage
 */
function getHomeClassName(isIntroActive, isPageVisible) {
  const classNames = ["site-shell"];
  if (isIntroActive) classNames.push("site-shell-intro");
  if (isPageVisible) classNames.push("site-shell-visible");
  return classNames.join(" ");
}

/**
 * Returns the opposite theme mode
 */
function getNextTheme(theme) {
  if (theme === "dark") return "light";
  return "dark";
}

/**
 * Renders the intro headline shown before the page appears
 */
function IntroHeadline({ title, visibleCount, isMoving }) {
  const visibleText = getVisibleIntroText(title, visibleCount);
  const headlineClassName = isMoving ? "intro-headline intro-headline-moving" : "intro-headline";
  return (
    <h1 className={headlineClassName} aria-label={title}>
      {visibleText.split("").map((character, index) => (
        <span
          key={`${character}-${index}`}
          className="intro-visible-char"
          style={{ "--intro-move-index": index }}
        >
          {character === " " ? "\u00A0" : character}
        </span>
      ))}
    </h1>
  );
}

/**
 * Renders the full screen homepage intro
 */
function getIntroStageClassName(isMoving) {
  if (isMoving) return "home-intro-stage home-intro-stage-moving";
  return "home-intro-stage";
}

/**
 * Renders the full screen homepage intro
 */
function HomeIntro({ title, isVisible, isMoving, visibleCount }) {
  if (!isVisible) return null;
  const stageClassName = getIntroStageClassName(isMoving);
  return (
    <div className="home-intro">
      <div className={stageClassName}>
        <IntroHeadline title={title} visibleCount={visibleCount} isMoving={isMoving} />
      </div>
    </div>
  );
}

/**
 * Renders the full portfolio page
 */
export default function Home() {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [isPageVisible, setIsPageVisible] = useState(false);
  const [isIntroMoving, setIsIntroMoving] = useState(false);
  const [visibleIntroCount, setVisibleIntroCount] = useState(0);
  const sections = getHomeSections();
  const homeClassName = getHomeClassName(isIntroActive, isPageVisible);
  const introTitle = siteContent.hero.name;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const moveTimer = window.setTimeout(() => setIsIntroMoving(true), getIntroMoveDelay(introTitle));
    const revealTimer = window.setTimeout(() => setIsPageVisible(true), getIntroMoveDelay(introTitle) + 700);
    const completeTimer = window.setTimeout(() => setIsIntroActive(false), getIntroCompleteDelay(introTitle));
    return () => {
      window.clearTimeout(moveTimer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(completeTimer);
    };
  }, [introTitle]);

  useEffect(() => {
    if (visibleIntroCount >= introTitle.length) return undefined;
    const letterTimer = window.setTimeout(() => {
      setVisibleIntroCount((count) => count + 1);
    }, INTRO_LETTER_DELAY_MS);
    return () => window.clearTimeout(letterTimer);
  }, [introTitle, visibleIntroCount]);

  /**
   * Switches between dark and light theme modes
   */
  function handleToggleTheme() {
    setTheme((currentTheme) => getNextTheme(currentTheme));
  }

  return (
    <main className={homeClassName}>
      <HomeIntro
        title={siteContent.hero.name}
        isVisible={isIntroActive}
        isMoving={isIntroMoving}
        visibleCount={visibleIntroCount}
      />
      <div className="site-shell-content">
        <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
        <HeroSection hero={siteContent.hero} hideHeadline={isIntroActive} />
        {sections.primary.map((section) => (
          <ExperienceSection key={section.id} section={section} />
        ))}
        <ProjectGrid
          projects={siteContent.selectedProjects}
          footerLink={siteContent.allProjectsLink}
        />
        <ExperienceSection section={sections.extracurricular} />
        <PageFooter footer={siteContent.footer} />
      </div>
    </main>
  );
}
