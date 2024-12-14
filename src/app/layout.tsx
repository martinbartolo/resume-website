import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">
              <div className="mx-auto flex max-w-5xl justify-center px-4 py-8 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
