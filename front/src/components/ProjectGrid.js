import React from "react";
import SectionShell from "./SectionShell";
import SectionHeading from "./SectionHeading";
import ActionLinks from "./ActionLinks";
import ProjectCard from "./ProjectCard";

/**
 * Renders the link below the project list
 */
function ProjectFooterLink({ footerLink }) {
  if (!footerLink) return null;
  return (
    <div className="project-section-footer">
      <ActionLinks links={[footerLink]} />
    </div>
  );
}

/**
 * Renders the projects section
 */
export default function ProjectGrid({
  id = "projects",
  eyebrow = "Selected Work",
  title = "Selected Projects",
  summary = "A smaller set of software and machine learning projects that complement the research and work above.",
  projects,
  footerLink,
}) {
  return (
    <SectionShell id={id}>
      <div className="section-layout">
        <SectionHeading eyebrow={eyebrow} title={title} summary={summary} />
        <div>
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} index={index} project={project} />
            ))}
          </div>
          <ProjectFooterLink footerLink={footerLink} />
        </div>
      </div>
    </SectionShell>
  );
}
