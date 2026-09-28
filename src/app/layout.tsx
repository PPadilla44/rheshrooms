import type { Metadata } from "next";
import localFont from "next/font/local";
import TopBar from "@/components/TopBar";
import { profile } from "@/content/resume";
import "./globals.css";

// Self-hosted variable fonts (Fredoka for headings, Nunito for body)
const fredoka = localFont({
  src: "../fonts/fredoka.woff2",
  variable: "--font-fredoka",
  weight: "300 700",
  display: "swap",
});

const nunito = localFont({
  src: "../fonts/nunito.woff2",
  variable: "--font-nunito",
  weight: "200 1000",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rheshrooms.com"),
  title: {
    default: `Rheshroom Village | ${profile.name}`,
    template: `%s | Rheshroom Village`,
  },
  description: `${profile.name}, ${profile.title} in the SF Bay Area. Explore her portfolio as a cozy mushroom village.`,
  openGraph: {
    title: `Rheshroom Village | ${profile.name}`,
    description: `${profile.title}. ${profile.nextUp}.`,
    url: "https://rheshrooms.com",
    siteName: "Rheshroom Village",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 btn-glossy"
        >
          Skip to content
        </a>
        <TopBar />
        <main id="main" className="flex-1 w-full max-w-5xl mx-auto px-4 pb-10">
          {children}
        </main>
        <footer className="no-print text-center text-sm text-ink-soft pb-6 px-4">
          Rheshroom Village · built with love for {profile.name}
        </footer>
      </body>
    </html>
  );
}
