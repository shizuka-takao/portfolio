import React from "react";
import CollectionPage from "./CollectionPage";
import { siteContent } from "../data/siteContent";

/**
 * Renders the blog page
 */
export default function BlogPage() {
  return <CollectionPage page={siteContent.blogPage} />;
}
