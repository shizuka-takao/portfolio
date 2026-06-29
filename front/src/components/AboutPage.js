import React from "react";
import aboutPhoto from "../assets/self_img.jpg";
import { siteContent } from "../data/siteContent";
import ActionLinks from "./ActionLinks";
import Navbar from "./Navbar";
import PageFooter from "./PageFooter";
import SectionShell from "./SectionShell";
import "../stylings/Home.css";

/**
 * Renders one paragraph in the about page
 */
function AboutParagraph({ text }) {
  return <p className="about-paragraph">{text}</p>;
}

/**
 * Renders the content at the top of the about page
 */
function AboutIntro() {
  const about = siteContent.aboutPage;
  return (
    <SectionShell id="top" className="about-section-page">
      <div className="about-page-grid">
        <div className="about-photo-wrap">
          <img className="about-photo" src={aboutPhoto} alt={about.imageAlt} />
        </div>
        <div className="about-copy">
          <p className="hero-kicker">{about.eyebrow}</p>
          <h1 className="about-title">{about.title}</h1>
          <p className="about-summary">{about.summary}</p>
          <div className="about-paragraphs">
            {about.details.map((text) => <AboutParagraph key={text} text={text} />)}
          </div>
          <ActionLinks links={about.links} />
        </div>
      </div>
    </SectionShell>
  );
}

/**
 * Renders the separate about page
 */
export default function AboutPage() {
  return (
    <main className="site-shell">
      <Navbar />
      <AboutIntro />
      <PageFooter footer={siteContent.footer} />
    </main>
  );
}
