"use client";

import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

import Date from "./components/date";
import ImageModal from "./components/image-modal";
import Technologies from "./components/technologies";
import Title from "./components/title";
import certifications from "./content/certifications.json";
import education from "./content/education.json";
import links from "./content/links.json";
import sideProjects from "./content/side-projects.json";
import workExperience from "./content/work-experience.json";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex max-w-screen-sm flex-col items-start justify-start px-4 py-28">
      <section className="flex items-center gap-6">
        <Image
          priority
          src="/avatar.jpg"
          alt="avatar"
          width={100}
          height={100}
          className="aspect-square rounded-full border border-black object-cover hover:cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />

        <ImageModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

        <div className="flex flex-col">
          <h1>Martin Bartolo</h1>
          <p>Full-stack Developer</p>
        </div>
      </section>

      <section>
        <h2 className="pb-2">About</h2>
        <p>
          I enjoy building reliable, elegant software solutions from start to
          finish. Excited about creating, I find joy in bringing ideas to life.
          US and Malta (EU) dual-citizenship. Willing to relocate/travel between
          the US and Europe. Seeking exciting and challenging software
          development opportunities.
        </p>
      </section>

      <section>
        <h2>Work Experience</h2>
        <div className="flex flex-col gap-8">
          {workExperience.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 sm:flex-row sm:gap-0"
            >
              <Date>{item.date}</Date>
              <div className="flex flex-col gap-2">
                <Title link={item.link}>
                  {item.position} - {item.company}
                </Title>
                <p>{item.description}</p>
                <Technologies list={item.technologies} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Side Projects</h2>
        <div className="flex flex-col gap-8">
          {sideProjects.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 sm:flex-row sm:gap-0"
            >
              <Date>{item.date}</Date>
              <div className="flex w-full flex-col gap-2">
                <Title link={item.link}>{item.title}</Title>
                <p>{item.description}</p>
                <Technologies list={item.technologies} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="flex flex-col gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 sm:flex-row sm:gap-0"
            >
              <Date>{item.date}</Date>
              <div className="flex w-full flex-col gap-2">
                <Title>{item.degree}</Title>
                <p className="italic">{item.school}</p>
                <p className="italic">GPA: {item.gpa}</p>
                <ul>
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
        <h2>Certifications</h2>
        <div className="flex flex-col gap-8">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 sm:flex-row sm:gap-0"
            >
              <Date>{item.date}</Date>
              <div className="flex w-full flex-col gap-2">
                <Title link={item.link}>{item.title}</Title>
                <p className="italic">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Links</h2>
        <div className="flex flex-col gap-4">
          {links.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 sm:flex-row sm:gap-0"
            >
              <Date>{item.title}</Date>
              <Title link={item.link}>{item.username}</Title>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
