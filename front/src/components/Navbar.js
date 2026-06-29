import React from "react";
import { navigationItems } from "../data/siteContent";
import "../stylings/Navbar.css";
import { scrollToSection } from "../utils/scrollTo";

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
      <span className="brand-mark">ST</span>
      <span className="brand-name">Shizuka Takao</span>
    </a>
  );
}

/**
 * Builds one navigation link
 */
function NavigationLink({ item }) {
  return (
    <a href={item.href} onClick={(event) => handleSectionClick(event, item)}>
      {item.label}
    </a>
  );
}

/**
 * Renders the top navigation bar
 */
export default function Navbar() {
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
      </div>
    </nav>
  );
}
