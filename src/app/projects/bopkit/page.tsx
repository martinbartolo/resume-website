import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
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
    <article className="w-full space-y-10">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
      >
        <ArrowLeft className="size-3.5" />
        <span>Back</span>
      </Link>

      {/* Header */}
      <header className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-foreground text-2xl font-semibold tracking-tight sm:text-4xl">
            Bopkit
          </h1>
          <p className="text-muted-foreground text-base leading-7 sm:text-lg">
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
      <section id="introduction" className="space-y-5">
        <p className="text-muted-foreground text-base leading-7">
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

        <p className="text-muted-foreground text-base leading-7">
          I built Bopkit solo as a side project. This case study is a complete
          walkthrough of the product and the engineering behind it, going
          through the entire platform feature-by-feature, showing what the user
          sees and explaining the technical decisions, challenges, and
          architecture underneath.
        </p>
      </section>

      {/* Demo Video */}
      <section className="space-y-3">
        <div className="bg-muted/50 border-border !my-6 flex aspect-video items-center justify-center rounded-lg border lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
          <p className="text-muted-foreground text-sm">
            Demo video coming soon
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <nav className="space-y-3">
        <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
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
        <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
          Architecture & Tech Stack
        </h2>

        <p className="text-muted-foreground text-base leading-7">
          Bopkit is a Next.js application deployed on Vercel, backed by a
          PostgreSQL database on Supabase. The frontend and backend live in a
          single codebase with end-to-end type safety from the database layer
          through to the UI. External services handle payments, file storage,
          background jobs, email delivery, and audio/video processing.
        </p>

        {/* Architecture Diagram */}
        <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
          <ArchitectureDiagram />
        </div>

        {/* Tech Stack */}
        <div className="space-y-5">
          <h3 className="text-foreground text-lg font-medium">Tech Stack</h3>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <p className="text-foreground text-base font-medium">
                Core Framework
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-base">
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
              <p className="text-foreground text-base font-medium">
                Backend & Data
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-base">
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
              <p className="text-foreground text-base font-medium">
                Authentication
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-base">
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
              <p className="text-foreground text-base font-medium">Payments</p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-base">
                <li>
                  <ExtLink href="https://developer.paypal.com/docs/commerce-platform/">
                    PayPal Commerce Platform
                  </ExtLink>{" "}
                  (PPCP) as a platform partner integration
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-base font-medium">Storage</p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-base">
                <li>
                  <ExtLink href="https://supabase.com">Supabase</ExtLink>{" "}
                  Storage for audio files, images, and assets
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-base font-medium">
                Background Jobs
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-base">
                <li>
                  <ExtLink href="https://www.inngest.com">Inngest</ExtLink> for
                  durable workflows with step-by-step execution, retry logic,
                  concurrency controls, and scheduled cron jobs
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-base font-medium">
                Audio & Video Processing
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-base">
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
              <p className="text-foreground text-base font-medium">Email</p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-base">
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
              <p className="text-foreground text-base font-medium">UI</p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-base">
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
              <p className="text-foreground text-base font-medium">
                State & Forms
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-base">
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
              <p className="text-foreground text-base font-medium">
                Audio Playback
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-base">
                <li>
                  <ExtLink href="https://howlerjs.com">Howler.js</ExtLink> for
                  client-side audio playback with continuous playback across
                  navigation
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-foreground text-base font-medium">Other</p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-base">
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
              <p className="text-foreground text-base font-medium">
                Hosting & Monitoring
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-base">
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
          <h3 className="text-foreground text-lg font-medium">
            Why PayPal over Stripe?
          </h3>
          <p className="text-muted-foreground text-base leading-7">
            The most common question about the stack is why I chose PayPal
            Commerce Platform over Stripe Connect. The short answer is the
            target audience. Most music producers, especially independent ones,
            already have a PayPal account. Stripe requires sellers to go through
            a full onboarding process with identity verification, bank account
            linking, and approval wait times. With PayPal, producers connect
            their existing account via an OAuth popup and are ready to receive
            payments in seconds.
          </p>
          <p className="text-muted-foreground text-base leading-7">
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

      {/* Landing Page & Marketing */}
      <section id="landing-page" className="space-y-6">
        <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
          Landing Page & Marketing
        </h2>

        <p className="text-muted-foreground text-base leading-7">
          The first thing any visitor sees is the marketing site at bopkit.com.
          It needs to communicate what Bopkit does, show the product in action,
          and convince producers to sign up. Every section of the homepage maps
          directly to a core product feature that gets covered in detail later
          in this case study. The page makes heavy use of scroll-triggered
          animations via Motion to reveal sections as the visitor scrolls.
        </p>

        {/* Homepage Walkthrough */}
        <div className="space-y-5">
          <h3 className="text-foreground text-lg font-medium">
            Homepage Walkthrough
          </h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-foreground text-base font-medium">
                Hero Section
              </p>
              <p className="text-muted-foreground text-base leading-7">
                The hero leads with the headline{" "}
                <span className="text-foreground italic">
                  &ldquo;Your Beat Store, Your Way. Built Complete.&rdquo;
                </span>{" "}
                followed by a single-sentence value proposition and a{" "}
                <span className="text-foreground">
                  &ldquo;Get Started Free&rdquo;
                </span>{" "}
                call-to-action. A beta badge and &ldquo;No credit card
                required&rdquo; reassurance text lower the barrier to entry. The
                messaging is deliberately concise: producers scanning the page
                should understand what Bopkit does within seconds.
              </p>
              <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
                <Image
                  src="/bopkit/landing_hero.png"
                  alt="Bopkit landing page hero section"
                  width={1903}
                  height={854}
                  quality={90}
                  sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
                  className="border-border w-full rounded-lg border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-foreground text-base font-medium">
                Shops Showcase
              </p>
              <p className="text-muted-foreground text-base leading-7">
                Titled &ldquo;Made with Bopkit,&rdquo; this section showcases
                real producer storefronts, each with their own theme and
                branding. It serves two purposes: it shows visitors what a
                finished store could actually look like and it acts as social
                proof by showing that real producers are already using the
                platform.
              </p>
              <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
                <Image
                  src="/bopkit/landing_showcase.png"
                  alt="Bopkit shops showcase showing real producer storefronts"
                  width={1901}
                  height={773}
                  quality={90}
                  sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
                  className="border-border w-full rounded-lg border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-foreground text-base font-medium">
                Feature Showcases
              </p>
              <p className="text-muted-foreground text-base leading-7">
                The homepage includes four dedicated showcase sections:
                customization, YouTube auto-publishing, collaboration tools, and
                analytics. Each section is interactive, with a &ldquo;Tap any
                feature to explore&rdquo; prompt and clickable feature cards
                that play a corresponding demo video when selected. For example,
                the customization section lets visitors step through custom
                backgrounds, color themes, music player styling, and profile
                personalization, each with its own video.
              </p>
              <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
                <Image
                  src="/bopkit/landing_features.png"
                  alt="Bopkit feature showcase section with customization options"
                  width={1903}
                  height={885}
                  quality={90}
                  sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
                  className="border-border w-full rounded-lg border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-foreground text-base font-medium">
                Pricing & FAQ
              </p>
              <p className="text-muted-foreground text-base leading-7">
                Since the platform was in early access, pricing was kept as
                simple as possible: a flat 10% per sale with everything included
                and no subscription tiers. The goal with the section was to
                communicate that in a single glance. The FAQ section directly
                below addresses the 10 most common questions that came up during
                beta testing, placed here intentionally so visitors don&apos;t
                leave the page to find answers.
              </p>
              <div className="!my-6 flex justify-center">
                <Image
                  src="/bopkit/landing_pricing.png"
                  alt="Bopkit pricing section showing 10% fee structure"
                  width={698}
                  height={715}
                  quality={90}
                  sizes="(min-width: 640px) 384px, 100vw"
                  className="border-border w-full max-w-xs rounded-lg border sm:max-w-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-foreground text-base font-medium">
                Mission & Footer
              </p>
              <p className="text-muted-foreground text-base leading-7">
                A mission section explains why Bopkit exists and how it
                positions itself against existing platforms in the beat selling
                space. The page closes with a final call-to-action and a footer
                linking to social accounts (TikTok, YouTube, Instagram, X as
                @getbopkit), legal pages, and support resources.
              </p>
              <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
                <Image
                  src="/bopkit/landing_footer.png"
                  alt="Bopkit footer with call-to-action and navigation links"
                  width={1903}
                  height={880}
                  quality={90}
                  sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
                  className="border-border w-full rounded-lg border"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Marketing Pages */}
        <div className="space-y-5">
          <h3 className="text-foreground text-lg font-medium">
            Additional Marketing Pages
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            Beyond the homepage, the marketing site includes several standalone
            pages that support the product and build trust with potential users.
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-foreground text-base font-medium">
                Pricing Page
              </p>
              <p className="text-muted-foreground text-base leading-7">
                A dedicated pricing page that breaks down the 10% model with a
                concrete example: a $50 beat sale, minus the $5 Bopkit fee,
                equals $45 received (before PayPal transaction fees). It lists
                everything included in the free beta tier and has its own
                12-question FAQ covering fees, collaborator splits, refunds,
                disputes, and currency handling.
              </p>
              <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
                <Image
                  src="/bopkit/landing_pricingpage.png"
                  alt="Bopkit dedicated pricing page with fee breakdown and FAQ"
                  width={1920}
                  height={3993}
                  quality={90}
                  sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
                  className="border-border w-full rounded-lg border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-foreground text-base font-medium">
                Licensing Page
              </p>
              <p className="text-muted-foreground text-base leading-7">
                Licensing is critical in the beat selling industry. Buyers need
                to understand exactly what they can and cannot do with a
                purchased beat. This page explains the different license types
                (MP3 vs WAV), usage rights, and includes an FAQ section
                addressing common licensing questions.
              </p>
              <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
                <Image
                  src="/bopkit/landing_licensing.png"
                  alt="Bopkit licensing page explaining license types and usage rights"
                  width={1920}
                  height={4123}
                  quality={90}
                  sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
                  className="border-border w-full rounded-lg border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-foreground text-base font-medium">
                Roadmap Page
              </p>
              <p className="text-muted-foreground text-base leading-7">
                A public roadmap organized into three sections: Currently
                Building, Planned Features, and Completed Features. Users can
                vote on planned items and submit their own feature suggestions.
              </p>
              <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
                <Image
                  src="/bopkit/landing_roadmap.png"
                  alt="Bopkit public roadmap with feature voting and suggestions"
                  width={1920}
                  height={3684}
                  quality={90}
                  sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
                  className="border-border w-full rounded-lg border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-foreground text-base font-medium">
                Support Page
              </p>
              <p className="text-muted-foreground text-base leading-7">
                A support hub linking to the FAQ, the public status page
                (Upptime at status.bopkit.com), and the roadmap. It includes a
                direct email contact (support@bopkit.com) with guidelines on
                what to include in a support request: screenshots, steps to
                reproduce, order or transaction IDs, and account details.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-foreground text-base font-medium">
                Legal Pages
              </p>
              <p className="text-muted-foreground text-base leading-7">
                Terms of Service, Privacy Policy, and Cookie Policy pages, all
                required for a platform that handles payments and user data.
              </p>
            </div>
          </div>
        </div>

        {/* SEO & Programmatic Pages */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            SEO & Programmatic Pages
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            To drive organic traffic, the marketing site includes programmatic
            SEO pages generated from structured data. Competitor comparison
            pages at{" "}
            <span className="text-foreground font-medium">/compare/[slug]</span>{" "}
            cover both &ldquo;Bopkit vs X&rdquo; and &ldquo;X vs Y&rdquo;
            formats. Alternative pages at{" "}
            <span className="text-foreground font-medium">
              /alternatives/[competitor]
            </span>{" "}
            target &ldquo;alternative to X&rdquo; search queries.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            Every page includes dynamic metadata (title, description, Open
            Graph, Twitter cards) generated via Next.js{" "}
            <span className="text-foreground">generateMetadata()</span>. A
            default OG image is generated at the Edge using Next.js{" "}
            <span className="text-foreground">ImageResponse</span>, with dynamic
            per-shop OG images for producer storefronts. Five JSON-LD schema
            types are used across the site: BreadcrumbList, FAQPage, Product
            (for individual beats with pricing and availability), Organization,
            and WebSite (with a SearchAction template).
          </p>

          <p className="text-muted-foreground text-base leading-7">
            The sitemap is a paginated index with sub-sitemaps for static
            routes, user shops, and beats (10,000 URLs per file). Beat sitemaps
            include Google image sitemap data with titles and captions.
            Canonical URLs are set on every page using a utility that handles
            both main-site and subdomain URLs, with alphabetical slug
            normalization on comparison pages to prevent duplicates. The
            robots.txt is environment-aware: production allows crawling of
            public pages while blocking auth, dashboard, API, and webhook
            routes; preview and dev deployments block everything.
          </p>
        </div>
      </section>

      <hr className="border-border" />

      {/* Authentication & Security */}
      <section id="authentication" className="space-y-6">
        <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
          Authentication & Security
        </h2>

        <p className="text-muted-foreground text-base leading-7">
          Authentication is handled by{" "}
          <span className="text-foreground font-medium">Better Auth</span> with
          a Prisma adapter connecting to the same PostgreSQL database. The
          system supports email/password registration with email verification,
          Google OAuth, and a username-based sign-in option. Sessions persist
          across subdomains so a producer signed in at{" "}
          <span className="text-foreground font-medium">bopkit.com</span> stays
          signed in on their own shop at{" "}
          <span className="text-foreground font-medium">
            username.bopkit.com
          </span>
          .
        </p>

        {/* Sign-Up */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">Sign-Up Flow</h3>

          <p className="text-muted-foreground text-base leading-7">
            Registration is a two-step split form. The first screen collects the
            email address, and the second collects the password (8-128
            characters, validated with Zod). After submitting, the user lands on
            a check-your-email page. A verification email is sent automatically
            via Resend with a link that expires after one hour. Clicking the
            link verifies the account and signs the user in automatically. The
            check-email page includes a resend button with a 60-second cooldown
            to prevent abuse. Expired verification tokens are auto-cleaned every
            hour using a cron job.
          </p>

          <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
            <Image
              src="/bopkit/auth_signup.png"
              alt="Bopkit sign-up flow: email input, password input, and check-your-email verification page"
              width={1600}
              height={1600}
              quality={90}
              sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
              className="border-border w-full rounded-lg border"
            />
          </div>
        </div>

        {/* Sign-In */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">Sign-In</h3>

          <p className="text-muted-foreground text-base leading-7">
            Sign-in uses the same split form pattern. The first screen accepts
            either an email address or a username in a single input field. The
            system detects which one was entered by checking for an{" "}
            <span className="text-foreground font-medium">@</span> symbol and
            routes to the appropriate sign-in method. The second screen collects
            the password and includes a forgot-password link.
          </p>
        </div>

        {/* Google OAuth */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">Google OAuth</h3>

          <p className="text-muted-foreground text-base leading-7">
            Both the sign-in and sign-up pages include a Continue with Google
            button. Google is configured as a trusted provider with account
            linking enabled, meaning if a user registers with email and later
            signs in with Google using the same or a different email, the
            accounts are linked rather than creating a duplicate. Profile data
            (name, email, avatar) is mapped from the Google profile, and the
            email is marked as verified automatically since Google has already
            verified it.
          </p>
        </div>

        {/* Password Reset */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Password Reset
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            The forgot-password flow sends a reset link that expires after one
            hour. When the user sets a new password, two things happen on the
            server side: all existing sessions for that user are deleted from
            the database, and a password-changed confirmation email is sent.
            Revoking all sessions ensures that if the password was reset because
            of a compromise, no previously authenticated session can persist.
            The user must sign in again with the new password.
          </p>

          <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
            <Image
              src="/bopkit/auth_forgot_password.png"
              alt="Bopkit forgot password page with email input and reset instructions"
              width={1600}
              height={1600}
              quality={90}
              sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
              className="border-border w-full rounded-lg border"
            />
          </div>
        </div>

        {/* Session Management */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Session Management
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            Better Auth uses opaque session tokens stored in the database, not
            JWTs. When a request comes in, the server looks up the token to
            authenticate the user. There are no refresh tokens. Instead,
            sessions use a sliding-window approach: sessions last 30 days, and
            if the user is active and the session hasn&apos;t been updated in
            the last 7 days, Better Auth extends the expiry to another 30 days
            from that point. Active users stay signed in indefinitely.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            To avoid hitting the database on every request, session data is also
            cached in a signed cookie with a 5-minute TTL. Within that window,
            requests are authenticated from the cookie alone. After 5 minutes,
            the session is re-verified against the database and the cache is
            refreshed. For sensitive operations like PayPal onboarding and
            profile updates, the cache is bypassed to force a fresh database
            read.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            Since Bopkit is a multi-tenant platform with subdomains, cookies
            need to work across both{" "}
            <span className="text-foreground font-medium">bopkit.com</span> and{" "}
            <span className="text-foreground font-medium">
              username.bopkit.com
            </span>
            . The cookie domain is dynamically computed to{" "}
            <span className="text-foreground font-medium">.bopkit.com</span> in
            production, which allows a single session to authenticate requests
            on any subdomain.
          </p>
        </div>

        {/* Guest Cart Merging */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Guest Cart Merging
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            An auth hook runs whenever a new session is created, regardless of
            auth method (email sign-in, Google OAuth, or email verification
            auto-sign-in). It checks for a guest cookie. If a guest user had
            items in their cart before signing in, the cart is merged into their
            authenticated account and the guest cookie is cleared. This prevents
            losing cart items during sign-in.
          </p>
        </div>

        {/* Route Protection */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Route Protection
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            Protected routes are enforced at three layers. Server-side layouts
            check the session and redirect unauthenticated users to the sign-in
            page with a callback URL. API routes use a tRPC middleware that
            rejects requests with no valid session. Dashboard pages additionally
            verify that the signed-in user owns the shop they are trying to
            access.
          </p>
        </div>

        {/* Account Deletion */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Account Deletion
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            Users can delete their account from settings. Before deletion, a
            hook deletes all of the user&apos;s storage files (beats, artwork,
            audio tags) from Supabase. If file cleanup fails, the account is
            still deleted to avoid blocking the user. Orphaned files are cleaned
            up separately with a cron job.
          </p>
        </div>
      </section>

      <hr className="border-border" />

      {/* Onboarding & PayPal Setup */}
      <section id="onboarding" className="space-y-6">
        <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
          Onboarding & PayPal Setup
        </h2>

        <p className="text-muted-foreground text-base leading-7">
          After signing up and verifying their email, new users are redirected
          to the onboarding flow where they claim their shop URL and configure
          initial settings. Once inside the dashboard, a getting started
          checklist guides them through the remaining setup steps, including
          connecting their PayPal account to receive payments.
        </p>

        {/* Username & Shop URL */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Username & Shop URL
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            The first screen asks the user to choose a username. As they type,
            the input shows a live preview of their shop URL (
            <span className="text-foreground font-medium">
              username.bopkit.com
            </span>
            ) and validates availability in real time with a 300ms debounce.
            Usernames are validated against a Zod schema (3-30 characters,
            letters, numbers, and dashes only) and normalized to lowercase
            before the availability check, making them case-insensitive.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            Below the username field, the currency for the shop is auto-detected
            based on the user&apos;s location and can be overridden with a
            dropdown. This determines the currency that prices are listed in and
            payments are received in.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            When the user submits, the server runs a database transaction that
            double-checks username availability to prevent race conditions,
            creates the shop with default theme colors and the selected
            currency, and initializes default settings for pricing, audio tags,
            and YouTube metadata. After setup, dashboard at{" "}
            <span className="text-foreground font-medium">
              username.bopkit.com/dashboard
            </span>
            .
          </p>

          <div className="!my-6 flex justify-center">
            <Image
              src="/bopkit/onboarding_username.png"
              alt="Bopkit onboarding screen with username selection, live shop URL preview, and currency auto-detection"
              width={1076}
              height={713}
              quality={90}
              sizes="(min-width: 640px) 448px, 100vw"
              className="border-border w-full max-w-sm rounded-lg border sm:max-w-md"
            />
          </div>
        </div>

        {/* Getting Started Checklist */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Getting Started Checklist
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            Once in the dashboard, a getting started card appears with four
            tasks to complete:
          </p>

          <ol className="text-muted-foreground list-inside list-decimal space-y-1.5 text-base">
            <li>
              <span className="text-foreground font-medium">
                Upload your first beat
              </span>{" "}
              — checks whether the user has any published beats
            </li>
            <li>
              <span className="text-foreground font-medium">
                Connect PayPal
              </span>{" "}
              — checks whether the user has completed PayPal onboarding
            </li>
            <li>
              <span className="text-foreground font-medium">
                Add a profile picture
              </span>{" "}
              — checks whether the user has uploaded an avatar
            </li>
            <li>
              <span className="text-foreground font-medium">
                Customize your shop
              </span>{" "}
              — checks whether the theme colors have been changed from defaults
            </li>
          </ol>

          <p className="text-muted-foreground text-base leading-7">
            When all four are complete, the checklist records a completion
            timestamp and shows a congratulations message.
          </p>

          <div className="!my-6">
            <Image
              src="/bopkit/onboarding_checklist.png"
              alt="Bopkit getting started checklist on the producer dashboard"
              width={1567}
              height={557}
              quality={90}
              sizes="(min-width: 640px) 640px, 100vw"
              className="border-border w-full rounded-lg border"
            />
          </div>
        </div>

        {/* PayPal Merchant Onboarding */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            PayPal Merchant Onboarding
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            Before a producer can receive payments, they need to connect their
            PayPal account. This is not a simple API key integration. Bopkit is
            registered as a{" "}
            <span className="text-foreground font-medium">
              PayPal Commerce Platform partner
            </span>
            , which means producers are onboarded as merchants under
            Bopkit&apos;s partner umbrella. This is the same integration model
            used by marketplaces and platforms that need to facilitate payments
            between multiple parties.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            When the user clicks{" "}
            <span className="text-foreground font-medium">Connect PayPal</span>,
            the server calls PayPal&apos;s{" "}
            <span className="text-foreground font-medium">
              Partner Referrals API
            </span>{" "}
            to generate a unique referral URL. The request specifies the
            features Bopkit needs:{" "}
            <span className="text-foreground font-medium">PAYMENT</span> for
            processing transactions,{" "}
            <span className="text-foreground font-medium">PARTNER_FEE</span> for
            deducting the platform fee, and{" "}
            <span className="text-foreground font-medium">
              ACCESS_MERCHANT_INFORMATION
            </span>{" "}
            for verifying account status. The user&apos;s ID is passed as a{" "}
            <span className="text-foreground font-medium">tracking_id</span> so
            that when PayPal sends the completion webhook later, the system
            knows which user it belongs to.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            The user is redirected to PayPal where they log in and grant
            permissions. After authorizing, PayPal redirects back to a callback
            page that validates the response parameters and shows a three-step
            progress indicator while it waits for confirmation.
          </p>

          <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
            <Image
              src="/bopkit/onboarding_paypal.png"
              alt="Bopkit PayPal connection flow: connect prompt, PayPal authorization, and callback progress page"
              width={1600}
              height={1200}
              quality={90}
              sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
              className="border-border w-full rounded-lg border"
            />
          </div>
        </div>

        {/* Asynchronous Completion */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Asynchronous Completion via Webhook
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            The reason the callback page needs a progress indicator is that
            PayPal does not confirm the onboarding synchronously. The redirect
            back to Bopkit happens immediately, but the actual confirmation
            arrives asynchronously as a{" "}
            <span className="text-foreground font-medium">
              MERCHANT.ONBOARDING.COMPLETED
            </span>{" "}
            webhook event. There is a race between the user landing on the
            callback page and the webhook arriving.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            To handle this, the callback page polls the user&apos;s profile
            every 2 seconds, checking whether onboarding has completed.
            Meanwhile, when the webhook arrives, the handler runs inside a
            database transaction: it idempotently marks the onboarding as
            complete (so re-delivered webhooks are harmless), stores the
            merchant&apos;s PayPal identifiers, and sends an in-app notification
            only on the first successful transition. Once the polling detects
            the change, the callback page bypasses the session cookie cache to
            get a fresh read and redirects to the PayPal settings page.
          </p>
        </div>

        {/* Ongoing Status Verification */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Ongoing Status Verification
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            Connecting a PayPal account is not a one-time event. The
            merchant&apos;s status can change at any time: they might not
            confirm their email, their account could be restricted, or they
            could revoke consent through PayPal&apos;s settings. The dashboard
            continuously verifies the merchant&apos;s integration status by
            calling PayPal&apos;s{" "}
            <span className="text-foreground font-medium">
              merchant-integrations
            </span>{" "}
            endpoint and checking three things: whether the primary email is
            confirmed, whether the account can receive payments, and whether the
            OAuth integration is still active.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            If any of these checks fail, a warning banner appears on the
            dashboard with a specific message and action button for each state:
            not connected, email not confirmed, payments not receivable, OAuth
            missing, or verification failed. If a merchant revokes consent
            through PayPal, a{" "}
            <span className="text-foreground font-medium">
              MERCHANT.PARTNER-CONSENT.REVOKED
            </span>{" "}
            webhook marks the account as disconnected (keeping their PayPal IDs
            for re-onboarding) and sends a notification. Users can also manually
            disconnect their PayPal account from settings at any time.
          </p>
        </div>
      </section>

      <hr className="border-border" />

      {/* Beat Creation */}
      <section id="beat-creation" className="space-y-6">
        <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
          Beat Creation
        </h2>

        <p className="text-muted-foreground text-base leading-7">
          Beat creation is the core workflow of the platform. It covers
          everything from uploading an audio file to having a published beat in
          the producer&apos;s shop (and optionally on YouTube). The creation
          flow is a single multi-section form where the producer works through
          audio upload, watermark configuration, metadata, pricing,
          collaborators, and YouTube information before publishing.
        </p>

        <p className="text-muted-foreground text-base leading-7">
          Everything on the creation page auto-saves as a draft. The form
          watches for changes with a 3-second debounce, and only sends the
          specific fields that changed to the server. It compares current values
          against the last saved state to avoid unnecessary writes, and skips
          saves entirely while a publish is in progress. Stale drafts are
          cleaned up automatically by two daily cron jobs: one removes drafts
          older than 7 days that were never published, and another cleans up
          drafts whose publish jobs have completed or failed. Both delete
          associated storage files before removing the database records.
        </p>

        {/* Upload */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">Upload</h3>

          <p className="text-muted-foreground text-base leading-7">
            The creation page opens with a drag-and-drop zone for the audio
            file. Only MP3 and WAV files are accepted, with a 50MB size limit.
            Dropping an unsupported file type shows an error immediately. During
            upload, a progress bar with a percentage indicator shows the upload
            status.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            The source file type matters. If the producer uploads a WAV file,
            both WAV and MP3 license types become available for purchase since
            the system converts WAV to MP3 during publishing. If they upload an
            MP3, only the MP3 license is offered since converting MP3 to WAV
            would not improve quality.
          </p>

          <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
            <Image
              src="/bopkit/beat_upload.png"
              alt="Beat creation page with drag-and-drop audio upload and progress indicator"
              width={2650}
              height={1000}
              quality={90}
              sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
              className="border-border w-full rounded-lg border"
            />
          </div>
        </div>

        {/* Audio Watermarking */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Audio Watermarking
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            Audio watermarks (called &ldquo;audio tags&rdquo; in the UI) are
            short audio clips that play over a beat&apos;s preview to protect it
            from being used without purchasing. When a buyer browses a shop,
            they hear the tagged version. Only the clean, untagged files are
            included in the download after purchase.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            Producers can choose from a set of public tags available to all
            users, or upload up to 5 custom tags of their own (MP3 or WAV, max
            5MB each). A default tag can be set in settings so new beats are
            pre-configured. Two timing options control how the tag plays: a{" "}
            <span className="text-foreground font-medium">start delay</span>{" "}
            (Immediately, 5s, 10s, 15s, or 30s) that determines when the tag
            first plays, and a{" "}
            <span className="text-foreground font-medium">repeat interval</span>{" "}
            (Never, 15s, 30s, 45s, or 60s) that controls how often it repeats.
          </p>

          <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
            <Image
              src="/bopkit/beat_audiotag_settings.png"
              alt="Audio tag settings page showing public and custom tags, timing configuration, and tag management"
              width={1177}
              height={794}
              quality={90}
              sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
              className="border-border w-full rounded-lg border"
            />
          </div>

          <p className="text-muted-foreground text-base leading-7">
            The actual watermarking happens server-side during publishing via
            FFmpeg. The process builds a filter graph that generates silence for
            the gaps between tag repeats, concatenates the tag audio with the
            silence to form a repeatable unit, loops it indefinitely, delays the
            first occurrence by the configured start time, reduces the tag
            volume to 40% so it doesn&apos;t overpower the beat, and mixes it
            with the original audio. The entire operation is streamed. The beat
            audio is streamed in from Supabase, the tag file is written to a
            temporary directory for FFmpeg, and the output streams directly to
            storage without saving an intermediate file to disk.
          </p>
        </div>

        {/* Metadata & Artwork */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Metadata & Artwork
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            After uploading the audio file, the BPM and key fields are
            auto-populated when possible. The extraction runs in parallel with
            the upload and uses a three-tiered detection approach: first it
            reads embedded metadata (ID3v2 tags for MP3 files, ACID chunks for
            WAV files), and if that yields nothing, it falls back to parsing the
            filename for common patterns like{" "}
            <span className="text-foreground font-medium">140bpm</span> or{" "}
            <span className="text-foreground font-medium">G minor</span>.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            Artwork can be added in several ways: drag-and-drop, file picker,
            pasting from clipboard (Ctrl+V / Cmd+V), or pasting a URL. Supported
            formats include JPEG, PNG, WebP, GIF (up to 5MB), and even video
            files like MP4, MOV, and WebM (up to 10MB, max 30 seconds), meaning
            beat artwork can be animated. After selecting an image, a cropping
            interface lets the producer adjust the framing.
          </p>

          <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
            <Image
              src="/bopkit/beat_metadata.png"
              alt="Beat metadata form with auto-detected BPM and key, artwork upload with cropping, and beat name input"
              width={2000}
              height={1000}
              quality={90}
              sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
              className="border-border w-full rounded-lg border"
            />
          </div>

          <p className="text-muted-foreground text-base leading-7">
            Image processing is handled by Sharp on the server during
            publishing. Static images are resized to a 128x128 WebP thumbnail at
            80% quality. Animated media (GIFs and videos) go through a different
            pipeline: FFmpeg converts them to WebM in three variants: a
            full-resolution hero version, a 128x128 thumbnail at a reduced 15fps
            framerate, and a static WebP poster extracted from the first frame
            for use in contexts that don&apos;t support video (like email
            clients).
          </p>
        </div>

        {/* Pricing & Validation */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Pricing & Validation
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            Producers set prices for each license type: MP3 and WAV (if the
            source file was a WAV). Prices are stored in cents to avoid
            floating-point issues. Default prices can be configured in settings
            so new beats are pre-filled.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            The interesting technical challenge here is minimum price
            validation. Every collaborator on a beat must receive at least the
            PayPal minimum payout after all fees are deducted. For USD, that
            minimum is $5.00. The fees that get deducted include the 10%
            platform fee, PayPal&apos;s percentage fee (up to 4.99% in the worst
            case), a fixed fee per currency (e.g., $0.49 for USD), and a
            potential cross-border conversion fee of up to 4%.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            The problem is that you cannot simply reverse the fee formula to
            find the minimum price. Each fee component in the chain rounds
            independently: collaborator shares round down, the platform fee
            rounds to nearest, and PayPal fees round up. A one-cent difference
            in the input can cause a different rounding outcome at each step,
            and those small differences compound through the chain in
            unpredictable ways. No closed-form formula can account for this
            because the rounding behavior depends on the exact cent value at
            each stage. The only way to know for certain whether a price is
            sufficient is to simulate the entire fee calculation and check the
            result. The system does exactly that: it starts with an analytical
            estimate, runs the full fee simulation at that price, and if the net
            payout falls short, increments by one cent and simulates again until
            every collaborator clears the minimum.
          </p>

          <div className="!my-6 flex justify-center">
            <Image
              src="/bopkit/beat_pricing.png"
              alt="Beat pricing form with MP3 and WAV license price inputs and validation"
              width={524}
              height={505}
              quality={90}
              sizes="(min-width: 640px) 384px, 100vw"
              className="border-border w-full max-w-xs rounded-lg border sm:max-w-sm"
            />
          </div>
        </div>

        {/* Collaborators */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">Collaborators</h3>

          <p className="text-muted-foreground text-base leading-7">
            Producers can add collaborators to a beat to credit other people
            involved and automatically split revenue. Clicking{" "}
            <span className="text-foreground font-medium">
              Add Collaborator
            </span>{" "}
            opens a search dialog that queries registered users as they type. If
            the collaborator is not on the platform, the producer can add them
            as an anonymous collaborator by name for credit purposes.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            Each registered collaborator gets a profit share percentage,
            adjustable with 0.01% precision. An equal split button distributes
            shares evenly across all registered collaborators, and adjusting one
            share automatically redistributes the others proportionally. The
            total must equal exactly 100% (with a 0.01% floating-point
            tolerance). Anonymous collaborators always have a 0% share since
            they have no PayPal account to receive payouts.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            At checkout, each registered collaborator becomes a separate payment
            recipient in the PayPal order. PayPal pays each party their share
            directly at the time of purchase. The owner receives the remainder
            after all collaborator shares are rounded down, which means any
            rounding cents favor the owner.
          </p>

          <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
            <Image
              src="/bopkit/beat_collaborators.png"
              alt="Collaborator management with user search, anonymous collaborator option, and profit share percentage sliders"
              width={2000}
              height={750}
              quality={90}
              sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
              className="border-border w-full rounded-lg border"
            />
          </div>
        </div>

        {/* YouTube Integration */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            YouTube Integration
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            Producers can opt to auto-publish beats to YouTube as part of the
            creation flow. A toggle enables the YouTube section, which requires
            connecting a YouTube account via Google OAuth (requesting upload and
            read-only scopes). Once connected, the account name and channel link
            are displayed with options to switch accounts or unlink.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            The YouTube form includes a title, a{" "}
            <span className="text-foreground font-medium">{"{beat-id}"}</span>{" "}
            placeholder that auto-generates a purchase link to the beat in the
            shop, tags, a visibility selector (private, unlisted, or public),
            and an optional scheduler. A{" "}
            <span className="text-foreground fon t-medium">
              Use tagged audio
            </span>{" "}
            toggle (shown only if the beat has a watermark configured) lets the
            producer choose whether the YouTube version uses the watermarked
            audio. Default values for title, description, and tags can be set in
            settings so they pre-fill for every new beat.
          </p>

          <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
            <Image
              src="/bopkit/beat_youtube.png"
              alt="YouTube settings in beat creation with account connection, title, description, tags, visibility, and scheduling options"
              width={1696}
              height={1476}
              quality={90}
              sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
              className="border-border w-full rounded-lg border"
            />
          </div>

          <p className="text-muted-foreground text-base leading-7">
            The video is generated server-side by FFmpeg, which combines the
            beat&apos;s audio with its artwork (either a static image or an
            animated WebM) into an MP4 video. The video is streamed directly to
            the YouTube Data API v3 without saving an intermediate file. For
            producers on the free plan, a Bopkit watermark is applied to the
            video. The description is composed using a utility that ensures the
            purchase link is always included regardless of what the producer
            entered.
          </p>
        </div>

        {/* Publishing */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">Publishing</h3>

          <p className="text-muted-foreground text-base leading-7">
            When the producer clicks{" "}
            <span className="text-foreground font-medium">Publish</span>, the
            beat enters a multi-step background workflow powered by Inngest. The
            UI shows a publishing jobs panel with real-time progress, polling
            every 2 seconds.
          </p>

          <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
            <Image
              src="/bopkit/beat_publishing.png"
              alt="Publishing progress panel showing step-by-step status indicators for planning, processing, saving, and YouTube upload"
              width={1600}
              height={700}
              quality={90}
              sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
              className="border-border w-full rounded-lg border"
            />
          </div>

          <p className="text-muted-foreground text-base leading-7">
            The workflow has four steps. The first is{" "}
            <span className="text-foreground font-medium">Planning</span>, which
            analyzes the draft and builds an execution plan: what files need to
            be copied, whether a WAV-to-MP3 conversion is needed, whether audio
            tagging is required, and what image processing to perform. The
            second step is{" "}
            <span className="text-foreground font-medium">
              Processing Files
            </span>
            , which runs three operations in parallel: FFmpeg handles audio
            conversion and watermarking, direct file copies move assets from the
            draft bucket to the permanent beats bucket, and Sharp (or FFmpeg for
            animated media) processes the artwork into its final variants. The
            third step is{" "}
            <span className="text-foreground font-medium">
              Saving to Database
            </span>
            , which runs inside an atomic transaction that creates the Beat
            record, links all collaborators, and updates the publish job status.
            Critically, this step double-checks the free plan beat quota inside
            the transaction to prevent a race condition where two concurrent
            publishes could exceed the limit. The fourth step,{" "}
            <span className="text-foreground font-medium">Trigger YouTube</span>
            , dispatches a separate workflow for the YouTube upload if the
            producer enabled it. Because it runs as its own workflow, a YouTube
            failure does not prevent the beat from appearing in the shop, and
            the producer can retry the upload independently.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            Each step in the workflow is independently retriable. If step two
            fails, step one does not re-run because its result is already
            persisted. If any step fails, the system cleans up any files that
            were created during the failed attempt, marks the job as failed with
            a user-friendly error message specific to which step failed, and if
            a beat record was partially created, it is deleted. A concurrency
            key based on the draft prevents duplicate workflows from
            double-clicks or retries, while still allowing multiple different
            beats to publish concurrently.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            On success, the publishing panel shows a{" "}
            <span className="text-foreground font-medium">View in Shop</span>{" "}
            button, and if YouTube was enabled, a{" "}
            <span className="text-foreground font-medium">Watch</span> button
            linking to the uploaded video. A dropdown provides additional
            actions like copying the beat link or navigating to the edit page.
            On failure, context-specific retry buttons appear:{" "}
            <span className="text-foreground font-medium">Edit and Retry</span>{" "}
            if only the YouTube step failed.
          </p>
        </div>
      </section>

      <hr className="border-border" />

      {/* Shop Customization */}
      <section id="shop-customization" className="space-y-6">
        <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
          Shop Customization
        </h2>

        <p className="text-muted-foreground text-base leading-7">
          Every producer&apos;s shop lives at their own subdomain:{" "}
          <span className="text-foreground font-medium">
            username.bopkit.com
          </span>
          . Underneath, a Next.js middleware intercepts incoming requests,
          extracts the subdomain, normalizes it to lowercase, and rewrites the
          URL to an internal route. In production, if someone navigates to the
          shop via the main domain (e.g.{" "}
          <span className="text-foreground font-medium">
            bopkit.com/user/username
          </span>
          ), they get redirected to the subdomain automatically.
        </p>

        <p className="text-muted-foreground text-base leading-7">
          The shop layout sets a handful of CSS custom properties on a root
          container based on the producer&apos;s saved colors and automatically
          derived text and contrast values. Every component in the shop, from
          beat cards to the cart to the music player, references these variables
          through Tailwind utility classes. A single set of components renders
          every shop, and the visual identity is entirely controlled by the CSS
          variables set at the layout level.
        </p>

        <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
          <Image
            src="/bopkit/shop_example.png"
            alt="Example of a producer's customized shop with beats, music player, and custom theme colors"
            width={1600}
            height={1600}
            quality={90}
            sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
            className="border-border w-full rounded-lg border"
          />
        </div>

        {/* Customization Dialog */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Customization Dialog
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            Producers can customize their shop&apos;s appearance through a
            draggable dialog that floats over the shop so they can see changes
            in real time. There are four color options:{" "}
            <span className="text-foreground font-medium">background</span>,{" "}
            <span className="text-foreground font-medium">foreground</span>{" "}
            (cards and surfaces),{" "}
            <span className="text-foreground font-medium">accent</span> (buttons
            and interactive elements), and{" "}
            <span className="text-foreground font-medium">music player</span>.
            An optional background image can also be uploaded.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            The producer only picks these four colors. The system automatically
            derives readable text colors for each surface using a luminance
            formula, so text is always legible regardless of how light or dark
            the chosen color is. Contrast colors for borders and hover states
            are also calculated automatically. This means a producer can&apos;t
            accidentally create a shop with unreadable text.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            Changes preview live. When a color is changed in the dialog, the
            shop behind it updates instantly without any API call. This works by
            optimistically updating the cached shop data, which flows through a
            provider that recalculates all derived colors and updates the CSS
            variables. If the producer cancels, the colors revert to the
            previous values.
          </p>

          <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
            <Image
              src="/bopkit/shop_customize.png"
              alt="Draggable shop customization dialog with color pickers floating over the shop"
              width={1600}
              height={1600}
              quality={90}
              sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
              className="border-border w-full rounded-lg border"
            />
          </div>
        </div>

        {/* Profile */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Profile & Social Links
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            Producers can edit their display name, bio (up to 150 characters),
            and avatar through a profile dialog accessible from the shop header.
            The avatar is cropped to a square and processed before upload. Nine
            social link fields are available: YouTube, Spotify, Apple Music,
            SoundCloud, Instagram, TikTok, X, Discord, and Twitch. Configured
            links appear as icons in the shop header.
          </p>

          <div className="!my-6 lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-28 xl:w-[calc(100%+14rem)]">
            <Image
              src="/bopkit/shop_profile.png"
              alt="Edit profile dialog with avatar upload, display name, bio, and social links"
              width={1600}
              height={1600}
              quality={90}
              sizes="(min-width: 1280px) 848px, (min-width: 1024px) 752px, 100vw"
              className="border-border w-full rounded-lg border"
            />
          </div>
        </div>
      </section>

      <hr className="border-border" />
    </article>
  );
}
