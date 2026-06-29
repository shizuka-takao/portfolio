import React from "react";

/**
 * Renders a shared heading for each section
 */
export default function SectionHeading({ eyebrow, title, summary }) {
  return (
    <header className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <div className="section-heading-copy">
        <h2>{title}</h2>
        <p className="section-summary">{summary}</p>
      </div>
    </header>
  );
}
