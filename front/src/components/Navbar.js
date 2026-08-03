import React from "react";
import { navigationItems } from "../data/siteContent";
import "../stylings/Navbar.css";
import { scrollToSection } from "../utils/scrollTo";
import ScrambleText from "./ScrambleText";

/**
 * Returns true when the user is on the homepage
 */
function isHomePage() {
  return window.location.pathname === "/";
}

/**
 * Handles a section style navigation click
 */
function handleSectionClick(event, item) {
  if (!isHomePage() || !item.id) return;
  scrollToSection(event, item.id);
}

/**
 * Returns one stable key for a nav item
 */
function getItemKey(item) {
  return item.href || item.label;
}

/**
 * Renders the portfolio brand
 */
function NavBrand() {
  return (
    <a className="nav-brand" href="/#top" onClick={(event) => handleSectionClick(event, { id: "top" })}>
      <span className="brand-mark" aria-hidden="true">ST</span>
    </a>
  );
}

/**
 * Builds one navigation link
 */
function NavigationLink({ item }) {
  return (
    <a className="nav-link" href={item.href} onClick={(event) => handleSectionClick(event, item)}>
      <ScrambleText as="span" text={item.label} className="nav-link-text" playOnHover />
    </a>
  );
}

/**
 * Builds the theme icon toggle
 */
function ThemeToggle({ theme, onToggleTheme }) {
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={label}>
      <span className="theme-toggle-core" />
    </button>
  );
}

/**
 * Renders the top navigation bar
 */
export default function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="navbar" aria-label="Section navigation">
      <div className="nav-inner">
        <NavBrand />
        <ul className="nav-links">
          {navigationItems.map((item) => (
            <li key={getItemKey(item)}>
              <NavigationLink item={item} />
            </li>
          ))}
        </ul>
        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
      </div>
    </nav>
  );
}
