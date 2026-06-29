import React from "react";

/**
 * Returns the anchor props for one link
 */
function getLinkProps(link) {
  if (link.isExternal === false) return {};
  return { target: "_blank", rel: "noreferrer" };
}

/**
 * Builds one action link
 */
function ActionLink({ link }) {
  const linkProps = getLinkProps(link);
  return (
    <a className="action-link" href={link.href} {...linkProps}>
      {link.label}
    </a>
  );
}

/**
 * Renders a row of call to action links
 */
export default function ActionLinks({ links }) {
  return (
    <div className="action-links">
      {links.map((link) => <ActionLink key={link.label} link={link} />)}
    </div>
  );
}
