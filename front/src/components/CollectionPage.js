import React from "react";
import { siteContent } from "../data/siteContent";
import Navbar from "./Navbar";
import PageFooter from "./PageFooter";
import SectionShell from "./SectionShell";
import "../stylings/Home.css";

/**
 * Renders one archive item in a simple readable row
 */
function CollectionItem({ item }) {
  return (
    <article className="collection-item">
      <h3>{item.title}</h3>
      <p className="card-summary">{item.summary}</p>
    </article>
  );
}

/**
 * Renders one public or private archive block
 */
function CollectionBlock({ title, items }) {
  return (
    <div className="collection-block">
      <p className="hero-panel-label">{title}</p>
      <div className="collection-list">
        {items.map((item) => <CollectionItem key={item.title} item={item} />)}
      </div>
    </div>
  );
}

/**
 * Renders the intro area for a collection page
 */
function CollectionIntro({ page }) {
  return (
    <SectionShell id="top" className="archive-section">
      <div className="archive-copy">
        <p className="hero-kicker">{page.eyebrow}</p>
        <h1 className="archive-title">{page.title}</h1>
        <p className="archive-summary">{page.summary}</p>
      </div>
    </SectionShell>
  );
}

/**
 * Renders a reusable public and private collection page
 */
export default function CollectionPage({ page }) {
  return (
    <main className="site-shell">
      <Navbar />
      <CollectionIntro page={page} />
      <SectionShell id={`${page.title.toLowerCase()}-entries`}>
        <div className="section-layout">
          <div className="section-heading">
            <p className="section-eyebrow">Collections</p>
            <div className="section-heading-copy">
              <h2>{page.title}</h2>
              <p className="section-summary">
                Separate public and private sections make it easy to add material over time.
              </p>
            </div>
          </div>
          <div className="collection-stack">
            <CollectionBlock title="Public" items={page.publicPosts} />
            <CollectionBlock title="Private" items={page.privatePosts} />
          </div>
        </div>
      </SectionShell>
      <PageFooter footer={siteContent.footer} />
    </main>
  );
}
