import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DriftX | India's Premier Event Motorsport Experience",
  description: "DriftX brings professional go-karting and motorsport experiences to college fests and brand events across India. Turning campuses into racing arenas.",
  keywords: ["DriftX", "Motorsport", "Go-karting", "College Fests", "Racing", "Event Management", "Campus Events", "India", "Student Activities"],
  creator: "DriftX Team",
  publisher: "DriftX Experience Ltd",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "DriftX | India's Premier Event Motorsport Experience",
    description: "DriftX brings professional go-karting and motorsport experiences to college fests and brand events across India. Turning campuses into racing arenas.",
    url: "https://driftx.racing",
    siteName: "DriftX",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "DriftX Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DriftX | India's Premier Event Motorsport Experience",
    description: "Turning college fests into racing arenas. The undisputed choice for professional event motorsport.",
    images: ["/logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
