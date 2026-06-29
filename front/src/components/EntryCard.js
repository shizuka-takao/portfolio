import React from "react";
import ActionLinks from "./ActionLinks";
import TagList from "./TagList";

/**
 * Formats a readable entry number
 */
function formatEntryNumber(index) {
  return String(index + 1).padStart(2, "0");
}

/**
 * Builds the small meta column for one entry
 */
function EntryMeta({ index, item }) {
  return (
    <div className="entry-meta">
      <p className="entry-index">{formatEntryNumber(index)}</p>
      <p className="card-kicker">{item.subtitle}</p>
      {item.period ? <p className="entry-period">{item.period}</p> : null}
    </div>
  );
}

/**
 * Renders the short highlight list for one entry
 */
function EntryHighlights({ highlights }) {
  if (!highlights) return null;
  return (
    <ul className="entry-highlights">
      {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
    </ul>
  );
}

/**
 * Returns the context lines shown under an entry title
 */
function getContextLines(item) {
  if (item.contextLines) return item.contextLines;
  return [item.institution, item.advisor].filter(Boolean);
}

/**
 * Renders the extra context lines for one entry
 */
function EntryContext({ item }) {
  const lines = getContextLines(item);
  if (lines.length === 0) return null;
  return (
    <div className="entry-context">
      {lines.map((line) => <p key={line}>{line}</p>)}
    </div>
  );
}

/**
 * Renders one experience style card
 */
export default function EntryCard({ index, item }) {
  return (
    <article className="entry-card">
      <EntryMeta index={index} item={item} />
      <div className="entry-copy">
        <h3>{item.title}</h3>
        <EntryContext item={item} />
        <p className="card-summary">{item.summary}</p>
        <EntryHighlights highlights={item.highlights} />
        {item.links ? <ActionLinks links={item.links} /> : null}
        {item.tags ? <TagList tags={item.tags} /> : null}
      </div>
    </article>
  );
}
