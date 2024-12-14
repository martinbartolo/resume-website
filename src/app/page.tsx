import Image from "next/image";

import Date from "../components/date";
import MarkdownText from "../components/markdown-text";
import Title from "../components/title";
import education from "../content/education.json";
import links from "../content/links.json";
import sideProjects from "../content/side-projects.json";
import workExperience from "../content/work-experience.json";
import Link from "next/link";

export default function Home() {
  return (
    <article className="w-full max-w-screen-sm space-y-10">
      <header className="flex items-center gap-6" role="banner">
        <Image
          priority
          src="/avatar.jpg"
          alt="Martin Bartolo - Avatar"
          width={100}
          height={100}
          className="aspect-square rounded-full border border-border object-cover transition-transform hover:scale-105"
        />
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Martin Bartolo
          </h1>
          <p className="text-base text-muted-foreground">
            Full-stack Developer
          </p>
        </div>
      </header>

      <section aria-label="Introduction">
        <p className="text-base leading-relaxed text-muted-foreground">
          Building reliable, elegant user experiences from start to finish.
          Excited about creating, I find joy in bringing ideas to life.
        </p>
      </section>

      <section aria-label="Projects">
        <h2 className="mb-6 text-lg font-medium">Projects</h2>
        <div className="space-y-8">
          {sideProjects.map((item, index) => (
            <article
              key={index}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <Date>{item.date}</Date>
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <Title link={item.link}>{item.title}</Title>
                  {item.sourceCode && (
                    <Link
                      href={item.sourceCode}
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Source Code]
                    </Link>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-label="Work Experience">
        <h2 className="mb-6 text-lg font-medium">Work Experience</h2>
        <div className="space-y-8">
          {workExperience.map((item, index) => (
            <article
              key={index}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <Date>{item.date}</Date>
              <div className="flex flex-1 flex-col gap-3">
                <Title link={item.link}>
                  {item.position} @ {item.company}
                </Title>
                <ul
                  className="space-y-2 text-sm text-muted-foreground"
                  role="list"
                >
                  {item.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-label="Education">
        <h2 className="mb-6 text-lg font-medium">Education</h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <article
              key={index}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <Date>{item.date}</Date>
              <div className="flex flex-1 flex-col gap-3">
                <Title>
                  {item.degree} @ {item.school}
                </Title>
                <p className="text-sm text-muted-foreground">GPA: {item.gpa}</p>
                <ul
                  className="space-y-2 text-sm text-muted-foreground"
                  role="list"
                >
                  {item.extras.map((extra, extra_index) => (
                    <li key={extra_index}>
                      <MarkdownText>{extra}</MarkdownText>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-label="Links">
        <h2 className="mb-6 text-lg font-medium">Links</h2>
        <nav className="space-y-4">
          {links.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4"
            >
              <Date>{item.title}</Date>
              <Title link={item.link}>{item.username}</Title>
            </div>
          ))}
        </nav>
      </section>

      <footer className="space-y-2">
        <Title link="https://drive.google.com/file/d/14Im6U1mtnyZlRVNK2383s_YnlP2-en_K/view?usp=sharing">
          Résumé
        </Title>
        <Title link="https://github.com/martinbartolo/resume-website">
          Source Code
        </Title>
      </footer>
    </article>
  );
}
