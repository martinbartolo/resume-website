import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ArchitectureDiagram } from "../../../components/architecture-diagram";

export const metadata: Metadata = {
  title: "Bopkit Case Study | Martin Bartolo",
  description:
    "A deep dive into building Bopkit, a multi-tenant SaaS beat selling platform with multi-party payments, audio processing, and durable workflows.",
};

const tableOfContents = [
  { id: "introduction", label: "Introduction" },
  { id: "architecture", label: "Architecture & Tech Stack" },
  { id: "landing-page", label: "Landing Page & Marketing" },
  { id: "authentication", label: "Authentication & Security" },
  { id: "onboarding", label: "Onboarding & PayPal Setup" },
  { id: "beat-creation", label: "Beat Creation" },
  { id: "shop-customization", label: "Shop Customization" },
  { id: "producer-dashboard", label: "Producer Dashboard" },
  { id: "buyer-experience", label: "Buyer Experience" },
  { id: "communication", label: "Communication & Notifications" },
  { id: "error-handling", label: "Refunds, Disputes & Error Handling" },
  { id: "mobile", label: "Mobile Responsiveness" },
  { id: "infrastructure", label: "Infrastructure & Monitoring" },
  { id: "numbers", label: "By the Numbers" },
  { id: "reflections", label: "Reflections" },
];

function ExtLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground decoration-border hover:decoration-foreground underline underline-offset-2"
    >
      {children}
    </a>
  );
}

export default function BopkitCaseStudy() {
  return (
    <article className="w-full space-y-8">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
      >
        <ArrowLeft className="size-3.5" />
        <span>Back</span>
      </Link>

      {/* Header */}
      <header className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-foreground text-3xl font-semibold tracking-tight">
            Bopkit
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            How I solo-built a full-stack beat selling platform for music
            producers from the ground up.
          </p>
        </div>

        <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5">
            <User className="size-3.5" />
            <span>Martin Bartolo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            <time dateTime="2025-02-08">Feb 8, 2025</time>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            <span>15 min read</span>
          </div>
        </div>

        <hr className="border-border" />
      </header>

      {/* Introduction */}
      <section id="introduction" className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Bopkit is a platform for music producers to sell beats online. Every
          producer gets a branded storefront at{" "}
          <span className="text-foreground font-medium">
            username.bopkit.com
          </span>
          , along with a full dashboard to manage their business. They can
          upload and organize beats, configure license pricing, set up audio
          watermarks, add collaborators with profit sharing, auto-publish to
          YouTube, track sales and revenue through analytics, manage orders,
          customize their shop&apos;s theme and branding, and more. Payments are
          handled through a PayPal Commerce Platform partner integration, where
          collaborators are paid their share directly at checkout. On the buyer
          side, customers can browse shops, preview watermarked audio, check
          out, and instantly download their purchased files.
        </p>

        <p className="text-muted-foreground text-sm leading-relaxed">
          I built Bopkit solo as a side project. This case study is a complete
          walkthrough of the product and the engineering behind it, going
          through the entire platform feature-by-feature, showing what the user
          sees and explaining the technical decisions, challenges, and
          architecture underneath.
        </p>
      </section>

      {/* Demo Video */}
      <section className="space-y-3">
        <div className="bg-muted/50 border-border flex aspect-video items-center justify-center rounded-lg border">
          <p className="text-muted-foreground text-sm">
            Demo video coming soon
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <nav className="space-y-3">
        <h2 className="text-foreground text-lg font-semibold tracking-tight">
          Table of Contents
        </h2>
        <ol className="list-inside list-decimal space-y-1.5">
          {tableOfContents.map(item => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <hr className="border-border" />

      {/* Architecture & Tech Stack */}
      <section id="architecture" className="space-y-6">
        <h2 className="text-foreground text-xl font-semibold tracking-tight">
          Architecture & Tech Stack
        </h2>

        <p className="text-muted-foreground text-sm leading-relaxed">
          Bopkit is a Next.js application deployed on Vercel, backed by a
          PostgreSQL database on Supabase. The frontend and backend live in a
          single codebase with end-to-end type safety from the database layer
          through to the UI. External services handle payments, file storage,
          background jobs, email delivery, and audio/video processing.
        </p>

        {/* Architecture Diagram */}
        <ArchitectureDiagram />

        {/* Tech Stack */}
        <div className="space-y-5">
          <h3 className="text-foreground text-base font-medium">Tech Stack</h3>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <p className="text-foreground text-sm font-medium">
                Core Framework
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                <li>
                  <ExtLink href="https://nextjs.org">Next.js 16</ExtLink> with
                  App Router
                </li>
                <li>
                  <ExtLink href="https://react.dev">React 19</ExtLink> with the
                  React Compiler enabled
                </li>
                <li>
                  <ExtLink href="https://www.typescriptlang.org">
                    TypeScript
                  </ExtLink>{" "}
                  throughout
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-sm font-medium">
                Backend & Data
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                <li>
                  <ExtLink href="https://trpc.io">tRPC</ExtLink> for end-to-end
                  typesafe API routes
                </li>
                <li>
                  <ExtLink href="https://www.prisma.io">Prisma ORM</ExtLink>{" "}
                  (v7) for database access
                </li>
                <li>
                  <ExtLink href="https://www.postgresql.org">
                    PostgreSQL
                  </ExtLink>{" "}
                  with{" "}
                  <ExtLink href="https://www.pgbouncer.org">PgBouncer</ExtLink>{" "}
                  connection pooling, optimized for serverless
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-sm font-medium">
                Authentication
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                <li>
                  <ExtLink href="https://www.better-auth.com">
                    Better Auth
                  </ExtLink>{" "}
                  with Prisma adapter
                </li>
                <li>Google OAuth for social login</li>
                <li>Email/password with verification flow</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-sm font-medium">Payments</p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                <li>
                  <ExtLink href="https://developer.paypal.com/docs/commerce-platform/">
                    PayPal Commerce Platform
                  </ExtLink>{" "}
                  (PPCP) as a platform partner integration
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-sm font-medium">Storage</p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                <li>
                  <ExtLink href="https://supabase.com">Supabase</ExtLink>{" "}
                  Storage for audio files, images, and assets
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-sm font-medium">
                Background Jobs
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                <li>
                  <ExtLink href="https://www.inngest.com">Inngest</ExtLink> for
                  durable workflows with step-by-step execution, retry logic,
                  concurrency controls, and scheduled cron jobs
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-sm font-medium">
                Audio & Video Processing
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                <li>
                  <ExtLink href="https://ffmpeg.org">FFmpeg</ExtLink> for audio
                  watermarking, WAV-to-MP3 conversion, and YouTube video
                  generation
                </li>
                <li>
                  <ExtLink href="https://sharp.pixelplumbing.com">
                    Sharp
                  </ExtLink>{" "}
                  for image processing, thumbnail generation, and WebP
                  conversion
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-sm font-medium">Email</p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                <li>
                  <ExtLink href="https://resend.com">Resend</ExtLink> for
                  transactional email delivery
                </li>
                <li>
                  <ExtLink href="https://react.email">React Email</ExtLink> for
                  templating
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-sm font-medium">UI</p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                <li>
                  <ExtLink href="https://tailwindcss.com">
                    Tailwind CSS v4
                  </ExtLink>
                </li>
                <li>
                  <ExtLink href="https://ui.shadcn.com">shadcn/ui</ExtLink>{" "}
                  component library
                </li>
                <li>
                  <ExtLink href="https://motion.dev">Motion</ExtLink> for
                  animations
                </li>
                <li>
                  <ExtLink href="https://recharts.org">Recharts</ExtLink> for
                  analytics charts
                </li>
                <li>
                  <ExtLink href="https://tabler.io/icons">Tabler Icons</ExtLink>
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-sm font-medium">
                State & Forms
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                <li>
                  <ExtLink href="https://zustand.docs.pmnd.rs">Zustand</ExtLink>{" "}
                  for global state management (music player)
                </li>
                <li>
                  <ExtLink href="https://react-hook-form.com">
                    React Hook Form
                  </ExtLink>{" "}
                  with <ExtLink href="https://zod.dev">Zod</ExtLink> for form
                  validation
                </li>
                <li>
                  <ExtLink href="https://nuqs.47ng.com">nuqs</ExtLink> for URL
                  search parameter state
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-sm font-medium">
                Audio Playback
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                <li>
                  <ExtLink href="https://howlerjs.com">Howler.js</ExtLink> for
                  client-side audio playback with continuous playback across
                  navigation
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-sm font-medium">Other</p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                <li>
                  <ExtLink href="https://stuk.github.io/jszip/">JSZip</ExtLink>{" "}
                  for multi-file download packaging
                </li>
                <li>
                  <ExtLink href="https://react-pdf.org">React PDF</ExtLink> for
                  license agreement generation
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-sm font-medium">
                Hosting & Monitoring
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                <li>
                  <ExtLink href="https://vercel.com">Vercel</ExtLink> for
                  hosting and deployment
                </li>
                <li>
                  <ExtLink href="https://vercel.com/analytics">
                    Vercel Analytics
                  </ExtLink>{" "}
                  for web analytics
                </li>
                <li>
                  <ExtLink href="https://upptime.js.org">Upptime</ExtLink> for
                  status page monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PayPal vs Stripe */}
        <div className="space-y-3">
          <h3 className="text-foreground text-base font-medium">
            Why PayPal over Stripe?
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The most common question about the stack is why I chose PayPal
            Commerce Platform over Stripe Connect. The short answer is the
            target audience. Most music producers, especially independent ones,
            already have a PayPal account. Stripe requires sellers to go through
            a full onboarding process with identity verification, bank account
            linking, and approval wait times. With PayPal, producers connect
            their existing account via an OAuth popup and are ready to receive
            payments in seconds.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            PayPal&apos;s Commerce Platform also supports multi-party payment
            splits natively, meaning each collaborator receives their share
            directly from PayPal at checkout time rather than the platform
            collecting the full amount and distributing it later. This removes
            the need for Bopkit to hold funds or handle manual disbursements.
            The tradeoff is that PayPal&apos;s APIs and documentation are
            significantly harder to work with than Stripe&apos;s, which made the
            integration one of the most complex parts of the project.
          </p>
        </div>
      </section>

      <hr className="border-border" />
    </article>
  );
}
