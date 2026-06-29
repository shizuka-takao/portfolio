import React from "react";

/**
 * Returns the copyright line for the footer
 */
function getRightsLine(footer) {
  const year = new Date().getFullYear();
  return `© ${year} ${footer.rightsOwner}. All rights reserved`;
}

/**
 * Builds one footer link
 */
function FooterLink({ link }) {
  return (
    <a className="footer-link" href={link.href} target="_blank" rel="noreferrer">
      {link.label}
    </a>
  );
}

/**
 * Renders the closing footer
 */
export default function PageFooter({ footer }) {
  return (
    <footer className="page-footer">
      <p className="footer-note">{footer.note}</p>
      <p className="footer-rights">{getRightsLine(footer)}</p>
      <div className="footer-links">
        {footer.links.map((link) => <FooterLink key={link.label} link={link} />)}
      </div>
    </footer>
  );
}
