import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

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
          customize their shop&apos;s theme and branding, and more. On the buyer
          side, customers can browse shops, preview watermarked audio, check out
          via PayPal, and instantly download their purchased files.
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
    </article>
  );
}
