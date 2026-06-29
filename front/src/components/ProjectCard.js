import React from "react";
import ActionLinks from "./ActionLinks";
import TagList from "./TagList";

/**
 * Formats a readable project number
 */
function formatProjectNumber(index) {
  return String(index + 1).padStart(2, "0");
}

/**
 * Builds the small meta column for one project
 */
function ProjectMeta({ index, project }) {
  return (
    <div className="project-meta">
      <p className="project-index">{formatProjectNumber(index)}</p>
      <p className="card-kicker">{project.subtitle}</p>
      {project.period ? <p className="project-period">{project.period}</p> : null}
    </div>
  );
}

/**
 * Shows one project card
 */
export default function ProjectCard({ index, project }) {
  return (
    <article className="project-card">
      <ProjectMeta index={index} project={project} />
      <div className="project-copy">
        <div className="project-header">
          <h3>{project.title}</h3>
          {project.links ? <ActionLinks links={project.links} /> : null}
        </div>
        <p className="card-summary">{project.summary}</p>
        <TagList tags={project.tech} />
      </div>
    </article>
  );
}
