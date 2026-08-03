import React from "react";
import SectionShell from "./SectionShell";
import ActionLinks from "./ActionLinks";

/**
 * Returns a stable key for one hero character
 */
function getHeroCharacterKey(character, index) {
  return `${character}-${index}`;
}

/**
 * Renders one animated hero character
 */
function HeroCharacter({ character, index }) {
  const style = { "--hero-char-index": index };
  const content = character === " " ? "\u00A0" : character;
  return (
    <span className="hero-char" style={style}>
      {content}
    </span>
  );
}

/**
 * Renders the full hero title in the artistic style
 */
function HeroHeadline({ title }) {
  return (
    <h1 className="hero-script-word" aria-label={title}>
      {title.split("").map((character, index) => (
        <HeroCharacter
          key={getHeroCharacterKey(character, index)}
          character={character}
          index={index}
        />
      ))}
    </h1>
  );
}

/**
 * Builds one short hero note
 */
function HeroNote({ note }) {
  return <li>{note}</li>;
}

/**
 * Renders hero notes only when notes are provided
 */
function HeroNotes({ notes }) {
  if (!notes) return null;
  return (
    <ul className="hero-notes">
      {notes.map((note) => <HeroNote key={note} note={note} />)}
    </ul>
  );
}

/**
 * Renders the landing section of the portfolio
 */
export default function HeroSection({ hero, hideHeadline = false }) {
  const headlineClassName = hideHeadline ? "hero-headline hero-headline-hidden" : "hero-headline";
  return (
    <SectionShell id="top" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">{hero.eyebrow}</p>
          {hero.name ? <div className={headlineClassName}><HeroHeadline title={hero.name} /></div> : null}
          {hero.title ? <p className="hero-title">{hero.title}</p> : null}
        </div>
        <div className="hero-panel">
          <p className="hero-panel-label">{hero.panelLabel}</p>
          <p className="hero-summary">{hero.summary}</p>
          <p className="hero-detail">{hero.detail}</p>
          <HeroNotes notes={hero.notes} />
          <ActionLinks links={hero.links} />
        </div>
      </div>
    </SectionShell>
  );
}
