import React from "react";
import SectionShell from "./SectionShell";
import SectionHeading from "./SectionHeading";

/**
 * Builds one award row
 */
function AwardItem({ item }) {
  return <li className="award-item">{item}</li>;
}

/**
 * Renders the honors and awards section
 */
export default function AwardList({ items }) {
  return (
    <SectionShell id="honors">
      <div className="section-layout">
        <SectionHeading
          eyebrow="Recognition"
          title="Honors and Awards"
          summary="Academic recognition and support that helped shape my path."
        />
        <ul className="award-list">
          {items.map((item) => <AwardItem key={item} item={item} />)}
        </ul>
      </div>
    </SectionShell>
  );
}
