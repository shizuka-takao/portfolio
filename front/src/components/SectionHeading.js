import React from "react";

/**
 * Returns a heading class for special wrapping cases
 */
function getHeadingClassName(title) {
  if (title === "Extra curricular") return "section-title section-title-wide";
  if (title === "Extracurricular") return "section-title section-title-wide";
  return "section-title";
}

/**
 * Returns a display title with an intentional line break when needed
 */
function getDisplayTitle(title) {
  if (title === "Extra curricular") return <>Extra<br />curricular</>;
  return title;
}

/**
 * Renders a shared heading for each section
 */
export default function SectionHeading({ eyebrow, title, summary }) {
  return (
    <header className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <div className="section-heading-copy">
        <h2 className={getHeadingClassName(title)}>{getDisplayTitle(title)}</h2>
        <p className="section-summary">{summary}</p>
      </div>
    </header>
  );
}
