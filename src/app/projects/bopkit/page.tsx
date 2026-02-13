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
            routes to the appropriate sign-in method. Usernames are normalized
            to lowercase and checked to be 3 to 30 characters long, containing
            only letters, numbers, and dashes. The second screen collects the
            password and includes a forgot-password link.
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
            JWTs. When a request comes in, the server looks up the token in the{" "}
            <span className="text-foreground font-medium">Session</span> table
            to authenticate the user. There are no refresh tokens. Instead,
            sessions use a sliding-window approach: sessions last 30 days, and
            if the user is active and the session hasn&apos;t been updated in
            the last 7 days, Better Auth extends the expiry to another 30 days
            from that point. Active users stay signed in indefinitely.
          </p>

          <p className="text-muted-foreground text-base leading-7">
            To avoid hitting the database on every request, session data is also
            cached in a signed{" "}
            <span className="text-foreground font-medium">session_data</span>{" "}
            cookie with a 5-minute TTL. Within that window, requests are
            authenticated from the cookie alone. After 5 minutes, the session is
            re-verified against the database and the cache is refreshed. For
            sensitive operations like PayPal onboarding and profile updates, the
            cache is bypassed with{" "}
            <span className="text-foreground font-medium">
              disableCookieCache
            </span>{" "}
            to force a fresh database read.
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
            auto-sign-in). It checks for a{" "}
            <span className="text-foreground font-medium">guestId</span> cookie.
            If a guest user had items in their cart before signing in, the cart
            is merged into their authenticated account and the guest cookie is
            cleared. This prevents losing cart items during sign-in.
          </p>
        </div>

        {/* Route Protection */}
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Route Protection
          </h3>

          <p className="text-muted-foreground text-base leading-7">
            Protected routes are enforced at three layers. Server-side layouts
            call{" "}
            <span className="text-foreground font-medium">getSession()</span>{" "}
            and redirect unauthenticated users to the sign-in page with a
            callback URL. API routes use a tRPC{" "}
            <span className="text-foreground font-medium">
              protectedProcedure
            </span>{" "}
            middleware that throws an{" "}
            <span className="text-foreground font-medium">UNAUTHORIZED</span>{" "}
            error if no session exists. Dashboard pages additionally verify that
            the signed-in user owns the shop they are trying to access.
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
    </article>
  );
}
