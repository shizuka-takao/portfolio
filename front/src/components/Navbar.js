import React from "react";
import { navigationItems } from "../data/siteContent";
import "../stylings/Navbar.css";

/**
 * Renders the portfolio brand
 */
function NavBrand() {
  return (
    <a className="nav-brand" href="/#/">
      <span className="brand-mark">ST</span>
      <span className="brand-name">Shizuka Takao</span>
    </a>
  );
}

/**
 * Builds one navigation link
 */
function NavigationLink({ item }) {
  return <a href={item.href}>{item.label}</a>;
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
            <li key={item.href}>
              <NavigationLink item={item} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
