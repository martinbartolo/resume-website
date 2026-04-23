import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "../components/theme-provider";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

const siteUrl = "https://martinbartolo.com";
const defaultTitle = "Martin Bartolo | Senior Fullstack Engineer";
const defaultDescription =
  "Martin Bartolo is a fullstack engineer from Malta, shipping production web and mobile software from start to finish with TypeScript, React, Next.js, React Native, and Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Martin Bartolo",
  },
  description: defaultDescription,
  keywords: [
    "Martin Bartolo",
    "Senior Fullstack Engineer",
    "Senior Software Engineer",
    "Fullstack Engineer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "Malta",
    "Portfolio",
    "Resume",
  ],
  authors: [{ name: "Martin Bartolo", url: siteUrl }],
  creator: "Martin Bartolo",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName: "Martin Bartolo",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: "@martinbartolo",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Martin Bartolo",
  url: siteUrl,
  jobTitle: "Senior Fullstack Engineer",
  email: "mailto:martin9oh9@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MT",
  },
  knowsAbout: [
    "Software Engineering",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
  ],
  sameAs: [
    "https://github.com/martinbartolo",
    "https://www.linkedin.com/in/martinbartolo",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background min-h-screen font-sans antialiased">
        <ThemeProvider>
          <main className="min-h-screen overflow-x-clip">
            <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6">
              {children}
            </div>
          </main>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
