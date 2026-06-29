import React from "react";

/**
 * Wraps content in a reusable page section
 */
export default function SectionShell({ id, className, children }) {
  const sectionName = className ? `site-section ${className}` : "site-section";
  return (
    <section id={id} className={sectionName}>
      {children}
    </section>
  );
}
