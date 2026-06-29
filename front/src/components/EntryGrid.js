import React from "react";
import SectionShell from "./SectionShell";
import SectionHeading from "./SectionHeading";
import EntryCard from "./EntryCard";

/**
 * Chooses a short description for a section
 */
function getSectionSummary(title) {
  const summaries = {
    Education: "Academic foundations, coursework, and the training that shaped how I approach technical work.",
    Research: "Research collaborations, technical themes, and work that informs how I build.",
    Work: "Professional experience across product, engineering, and applied technical work.",
    "Work Experience": "Professional experience across product, engineering, and applied technical work.",
    Teaching: "Teaching and support roles centered on making technical material more approachable.",
    "Teaching Experience": "Teaching and support roles centered on making technical material more approachable.",
    "Extra curricular": "Leadership, community, and student programs outside of core project work.",
    Extracurricular: "Leadership, community, and student programs outside of core project work.",
  };
  return summaries[title];
}

/**
 * Renders a grid of experience style cards
 */
export default function EntryGrid({ id, title, items }) {
  return (
    <SectionShell id={id}>
      <div className="section-layout">
        <SectionHeading eyebrow={title} title={title} summary={getSectionSummary(title)} />
        <div className="entry-list">
          {items.map((item, index) => (
            <EntryCard key={item.title} index={index} item={item} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
