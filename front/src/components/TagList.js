import React from "react";

/**
 * Builds one small tag
 */
function Tag({ label }) {
  return <li className="tag-chip">{label}</li>;
}

/**
 * Renders a list of tags
 */
export default function TagList({ tags }) {
  return (
    <ul className="tag-list">
      {tags.map((tag) => <Tag key={tag} label={tag} />)}
    </ul>
  );
}
