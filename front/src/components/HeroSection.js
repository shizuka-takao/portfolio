import React from "react";
import SectionShell from "./SectionShell";
import ActionLinks from "./ActionLinks";

/**
 * Builds one short hero note
 */
function HeroNote({ note }) {
  return <li>{note}</li>;
}

/**
 * Renders the landing section of the portfolio
 */
export default function HeroSection({ hero }) {
  return (
    <SectionShell id="top" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">{hero.eyebrow}</p>
          <h1>{hero.name}</h1>
          <p className="hero-title">{hero.title}</p>
        </div>
        <div className="hero-panel">
          <p className="hero-panel-label">{hero.panelLabel}</p>
          <p className="hero-summary">{hero.summary}</p>
          <p className="hero-detail">{hero.detail}</p>
          <ul className="hero-notes">
            {hero.notes.map((note) => <HeroNote key={note} note={note} />)}
          </ul>
          <ActionLinks links={hero.links} />
        </div>
      </div>
    </SectionShell>
  );
}
