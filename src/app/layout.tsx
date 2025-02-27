import type { Metadata } from "next";
import { Geist, Lexend_Deca } from "next/font/google";
import { ColorProvider } from "./components/ColorProvider";

import "../styles/globals.css";

const lexend = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Martin Bartolo",
  description:
    "Personal portfolio and resume website of Martin Bartolo, a software developer specializing in web development, modern technologies, and music production.",
  keywords: [
    "Martin Bartolo",
    "Software Developer",
    "Web Development",
    "Full Stack Developer",
    "Music Producer",
    "Portfolio",
    "Resume",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Martin Bartolo", url: "https://martinbartolo.com" }],
  creator: "Martin Bartolo",
  publisher: "Martin Bartolo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://martinbartolo.com",
    title: "Martin Bartolo",
    description:
      "Personal portfolio website of Martin Bartolo, a software developer specializing in web development, modern technologies, and music production.",
    siteName: "Martin Bartolo",
    images: [
      {
        url: "https://martinbartolo.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Martin Bartolo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Bartolo",
    description:
      "Personal portfolio website of Martin Bartolo, a software developer specializing in modern web technologies and music production.",
    creator: "@prodyesok",
    images: ["https://martinbartolo.com/og-image.png"],
  },
  alternates: {
    canonical: "https://martinbartolo.com",
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Martin Bartolo",
              url: "https://martinbartolo.com",
              sameAs: [
                "https://github.com/martinbartolo",
                "https://www.linkedin.com/in/martinbartolo",
                "https://soundcloud.com/prodyesok",
                "https://www.youtube.com/@yesok",
              ],
              jobTitle: "Software Developer",
              description:
                "Software Developer & Music Producer specializing in web development and modern technologies.",
              knowsAbout: [
                "Web Development",
                "Software Engineering",
                "Music Production",
                "React",
                "Next.js",
                "TypeScript",
              ],
              email: "martin9oh9@gmail.com",
            }),
          }}
        />
      </head>
      <body className="min-h-dvh bg-background font-geist antialiased">
        <div className="relative flex min-h-dvh flex-col">
          <main className="flex-1">
            <div className="mx-auto flex max-w-5xl justify-center px-4 py-4 sm:py-6 lg:py-8">
              <ColorProvider>{children}</ColorProvider>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
