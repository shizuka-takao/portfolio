import React from "react";
import { siteContent } from "../data/siteContent";
import Navbar from "./Navbar";
import PageFooter from "./PageFooter";
import SectionShell from "./SectionShell";
import "../stylings/Home.css";

/**
 * Renders one link card on the personal page
 */
function PersonalCard({ section }) {
  return (
    <article className="collection-item">
      <h3>{section.title}</h3>
      <p className="card-summary">{section.summary}</p>
      <a className="action-link" href={section.href}>{`Open ${section.title}`}</a>
    </article>
  );
}

/**
 * Renders the intro at the top of the personal page
 */
function PersonalIntro() {
  const page = siteContent.personalPage;
  return (
    <SectionShell id="top" className="archive-section">
      <div className="archive-copy">
        <p className="hero-kicker">{page.eyebrow}</p>
        <h1 className="archive-title">{page.title}</h1>
        <p className="archive-summary">{page.summary}</p>
      </div>
    </SectionShell>
  );
}

/**
 * Renders the section links for blog and arts
 */
function PersonalSections() {
  const page = siteContent.personalPage;
  return (
    <SectionShell id="personal-links">
      <div className="section-layout">
        <div className="section-heading">
          <p className="section-eyebrow">Explore</p>
          <div className="section-heading-copy">
            <h2>Sections</h2>
            <p className="section-summary">Open either area to see its separate public and private posts.</p>
          </div>
        </div>
        <div className="collection-stack">
          {page.sections.map((section) => <PersonalCard key={section.title} section={section} />)}
        </div>
      </div>
    </SectionShell>
  );
}

/**
 * Renders the personal landing page
 */
export default function PersonalPage() {
  return (
    <main className="site-shell">
      <Navbar />
      <PersonalIntro />
      <PersonalSections />
      <PageFooter footer={siteContent.footer} />
    </main>
  );
}
