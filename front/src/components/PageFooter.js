import React from "react";

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
      <div className="footer-links">
        {footer.links.map((link) => <FooterLink key={link.label} link={link} />)}
      </div>
    </footer>
  );
}
