import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ClientBackground from "@/components/ui/ClientBackground";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // --- Basic Metadata ---
  title: "Star Wars Hub – Your Definitive Star Wars Wiki & Information Center",
  description:
    "Explore the vast Star Wars universe with our comprehensive wiki. Find detailed information on movies, characters, planets, starships, species, lore, and more from the Skywalker Saga to The Mandalorian.",
  keywords: [
    "Star Wars",
    "Star Wars movies",
    "Star Wars characters",
    "Star Wars planets",
    "Star Wars ships",
    "Star Wars species",
    "Star Wars lore",
    "Star Wars wiki",
    "Star Wars encyclopedia",
    "Star Wars timeline",
    "Jedi",
    "Sith",
    "Luke Skywalker",
    "Darth Vader",
    "The Mandalorian",
    "Grogu",
    "Star Wars episodes",
    "Star Wars canon",
    "Star Wars legends",
    "Star Wars database",
    "Star Wars fandom",
    "Star Wars guide",
  ],

  openGraph: {
    title:
      "Star Wars Hub – Your Definitive Star Wars Wiki & Information Center",
    description:
      "Explore the vast Star Wars universe with our comprehensive wiki. Find detailed information on movies, characters, planets, starships, species, lore, and more from the Skywalker Saga to The Mandalorian.",
    url: "https://yourstarwarshub.com", 
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png",
        width: 1200,
        height: 630, 
        alt: "Star Wars Hub - Comprehensive Star Wars Wiki",
      },
    ],
    type: "website",
    siteName: "Star Wars Hub",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Star Wars Hub – Your Definitive Star Wars Wiki & Information Center",
    description:
      "Explore the vast Star Wars universe with our comprehensive wiki. Find detailed information on movies, characters, planets, starships, species, lore, and more from the Skywalker Saga to The Mandalorian.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png",
    ],
  },

  alternates: {
    // canonical: "",
  },

  verification: {
    // google: "", 
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased bg-[url('/images/background-2.jpg')] bg-cover bg-center bg-fixed bg-no-repeat min-h-screen`}
      >
        <ClientBackground />
        {/* <div className="fixed inset-0 bg-black opacity-70 -z-10"></div> */}
        <Suspense>
          <Header />
          <div className="content-center min-h-screen">{children}</div>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
