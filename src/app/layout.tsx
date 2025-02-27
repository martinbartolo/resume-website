import type { Metadata } from "next";
import { Geist, Lexend_Deca } from "next/font/google";

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
    "Personal portfolio and resume website of Martin Bartolo, a software developer specializing in web development and modern technologies.",
  keywords: [
    "Martin Bartolo",
    "Software Developer",
    "Web Development",
    "Portfolio",
    "Resume",
  ],
  authors: [{ name: "Martin Bartolo" }],
  creator: "Martin Bartolo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://martinbartolo.com",
    title: "Martin Bartolo",
    description:
      "Personal portfolio website of Martin Bartolo, a software developer specializing in web development and modern technologies.",
    siteName: "Martin Bartolo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Bartolo",
    description:
      "Personal portfolio website of Martin Bartolo, a software developer specializing in web development and modern technologies.",
    creator: "@prodyesok",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "https://martinbartolo.com",
  },
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
      <body className="min-h-dvh bg-background font-geist antialiased">
        <div className="relative flex min-h-dvh flex-col">
          <main className="flex-1">
            <div className="mx-auto flex max-w-5xl justify-center px-4 py-4 sm:py-6 lg:py-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
