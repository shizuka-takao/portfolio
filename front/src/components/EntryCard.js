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
 * Splits a highlight into a label and description
 */
function getHighlightParts(highlight) {
  const separatorIndex = highlight.indexOf(":");
  if (separatorIndex === -1) return null;
  return {
    label: highlight.slice(0, separatorIndex),
    description: highlight.slice(separatorIndex + 1).trim(),
  };
}

/**
 * Renders one labeled coursework highlight
 */
function LabeledHighlight({ highlight }) {
  const parts = getHighlightParts(highlight);
  if (!parts) return highlight;
  return (
    <>
      <span className="entry-highlight-label">[{parts.label}]</span>
      <span>{parts.description}</span>
    </>
  );
}

/**
 * Renders one highlight item
 */
function EntryHighlight({ highlight, highlightStyle }) {
  if (highlightStyle === "labeled") {
    return <li><LabeledHighlight highlight={highlight} /></li>;
  }
  return <li>{highlight}</li>;
}

/**
 * Renders the short highlight list for one entry
 */
function EntryHighlights({ highlights, highlightStyle }) {
  if (!highlights) return null;
  const className = highlightStyle === "labeled" ? "entry-highlights entry-highlights-labeled" : "entry-highlights";
  return (
    <ul className={className}>
      {highlights.map((highlight) => (
        <EntryHighlight key={highlight} highlight={highlight} highlightStyle={highlightStyle} />
      ))}
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
        <EntryHighlights highlights={item.highlights} highlightStyle={item.highlightStyle} />
        {item.links ? <ActionLinks links={item.links} /> : null}
        {item.tags ? <TagList tags={item.tags} /> : null}
      </div>
    </article>
  );
}
