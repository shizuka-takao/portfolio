import React from "react";
import CollectionPage from "./CollectionPage";
import { siteContent } from "../data/siteContent";

/**
 * Renders the arts page
 */
export default function ArtsPage() {
  return <CollectionPage page={siteContent.artsPage} />;
}
