import Image from "next/image";
import ReactMarkdown from "react-markdown";

import Date from "../components/date";
import Technologies from "../components/technologies";
import Title from "../components/title";
import certifications from "../content/certifications.json";
import education from "../content/education.json";
import links from "../content/links.json";
import sideProjects from "../content/side-projects.json";
import workExperience from "../content/work-experience.json";

export default function Home() {
  return (
    <div className='w-full max-w-screen-sm space-y-10'>
      <header className="flex items-center gap-6">
        <Image
          priority
          src="/avatar.jpg"
          alt="avatar"
          width={100}
          height={100}
          className="aspect-square rounded-full border border-border object-cover transition-transform hover:scale-105"
        />
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">Martin Bartolo</h1>
          <p className="text-base text-muted-foreground">Full-stack Developer</p>
        </div>
      </header>

      <section>
        <p className="text-base text-muted-foreground leading-relaxed">
          Building reliable, elegant user experiences from start to finish.
          Excited about creating, I find joy in bringing ideas to life.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-lg font-medium">Work Experience</h2>
        <div className="space-y-8">
          {workExperience.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:items-baseline gap-1 sm:flex-row sm:gap-4"
            >
              <Date>{item.date}</Date>
              <div className="flex-1 flex flex-col gap-3">
                <Title link={item.link}>
                  {item.position} @ {item.company}
                </Title>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Technologies list={item.technologies} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-lg font-medium">Side Projects</h2>
        <div className="space-y-8">
          {sideProjects.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 sm:flex-row sm:gap-4"
            >
              <Date>{item.date}</Date>
              <div className="flex-1 flex flex-col gap-3">
                <Title link={item.link}>{item.title}</Title>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <Technologies list={item.technologies} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-lg font-medium">Education</h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 sm:flex-row sm:gap-4"
            >
              <Date>{item.date}</Date>
              <div className="flex-1 flex flex-col gap-3">
                <Title>
                  {item.degree} @ {item.school}
                </Title>
                <p className="text-sm text-muted-foreground">GPA: {item.gpa}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.extras.map((extra, extra_index) => (
                    <li key={extra_index}>
                      <ReactMarkdown>{extra}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-lg font-medium">Certifications</h2>
        <div className="space-y-6">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 sm:flex-row sm:gap-4"
            >
              <Date>{item.date}</Date>
              <div className="flex-1 flex flex-col gap-2">
                <Title link={item.link}>{item.title}</Title>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-lg font-medium">Links</h2>
        <div className="space-y-4">
          {links.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 sm:flex-row sm:gap-4"
            >
              <Date>{item.title}</Date>
              <Title link={item.link}>{item.username}</Title>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <Title link="https://drive.google.com/file/d/14Im6U1mtnyZlRVNK2383s_YnlP2-en_K/view?usp=sharing">
          Résumé
        </Title>
        <Title link="https://github.com/martinbartolo/resume-website">
          Source Code
        </Title>
      </section>
    </div>
  );
}
