import React from "react";
import SectionShell from "./SectionShell";
import SectionHeading from "./SectionHeading";
import EntryCard from "./EntryCard";

/**
 * Renders a grid of experience style cards
 */
export default function EntryGrid({ id, title, items }) {
  return (
    <SectionShell id={id}>
      <div className="section-layout">
        <SectionHeading eyebrow={title} title={title} />
        <div className="entry-list">
          {items.map((item, index) => (
            <EntryCard key={item.title} index={index} item={item} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
