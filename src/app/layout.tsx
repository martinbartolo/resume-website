import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "../components/theme-provider";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

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
      "Personal portfolio and resume website of Martin Bartolo, a software developer specializing in web development and modern technologies.",
    siteName: "Martin Bartolo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Bartolo",
    description:
      "Personal portfolio and resume website of Martin Bartolo, a software developer specializing in web development and modern technologies.",
  },
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
          <main className="min-h-screen">
            <div className="mx-auto w-full max-w-(--breakpoint-sm) px-4 py-8 sm:px-6">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
