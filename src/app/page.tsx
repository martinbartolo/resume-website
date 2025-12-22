"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

import SocialIcons from "../components/social-icons";
import Tabs from "../components/tabs";
import { ThemeToggle } from "../components/theme-toggle";
import { Button } from "../components/ui/button";
import links from "../content/links.json";
import sideProjects from "../content/side-projects.json";
import workExperience from "../content/work-experience.json";

function ExperienceSection() {
  return (
    <div className="space-y-10">
      {workExperience.map((item, index) => (
        <article key={index} className="space-y-2">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-foreground text-lg font-medium">
              {item.position} at {item.company}
            </h3>
            <p className="text-muted-foreground/70 text-xs whitespace-nowrap">
              {item.date}
            </p>
          </div>
          <div className="text-muted-foreground space-y-2 text-sm">
            {item.description.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="space-y-10">
      {sideProjects.map((item, index) => (
        <article key={index} className="space-y-2">
          <div className="flex items-baseline justify-between">
            <h3 className="text-foreground text-lg font-medium">
              {item.title}
            </h3>
            {item.link && (
              <Button variant="link" size="sm" asChild className="gap-1">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xs">Visit</span>
                  <ExternalLink className="size-3!" />
                </Link>
              </Button>
            )}
          </div>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  const tabs = [
    { id: "experience", label: "Experience", content: <ExperienceSection /> },
    { id: "projects", label: "Projects", content: <ProjectsSection /> },
  ];

  return (
    <article className="w-full space-y-8">
      <header className="space-y-4" role="banner">
        <div className="flex items-center justify-between">
          <h1 className="text-foreground text-3xl font-semibold tracking-tight">
            Hey, I&apos;m Martin
          </h1>
          <ThemeToggle />
        </div>
        <p className="text-muted-foreground text-base leading-relaxed">
          Software Engineer from Malta. Building web experiences from start to
          finish.
        </p>
      </header>

      <SocialIcons links={links} />

      <Tabs tabs={tabs} />

      <footer className="text-muted-foreground pt-8 text-xs">
        Made by Martin
      </footer>
    </article>
  );
}
