import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SMT Travels & Tours (Private) Limited",
  description:
    "Only trustworthy overseas human resource provider in North Western Province.",
  generator: "Next.js",
  applicationName: "SMT",
  keywords: [
    "Travels",
    "Tours", 
  ],
  colorScheme: "dark",
  openGraph: {
    title: "SMT Travels & Tours (Private) Limited",
    description:
      "Only trustworthy overseas human resource provider in North Western Province.",
    url: "https://www.royalrecruitmentandconsultants.com/",
    siteName: "www.royalrecruitmentandconsultants.com",
    images: [
      {
        url: "https://web.facebook.com/photo/?fbid=122136259268029112&set=a.122135532422029112",
        width: 1200,
        height: 630,
        alt: "SMT Travels & Tours (Private) Limited",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMT Travels & Tours (Private) Limited",
    description:
      "Only trustworthy overseas human resource provider in North Western Province.",
    creator: "SMT",
    creatorId: "1243720976552144897",
    images: [
      "https://web.facebook.com/photo/?fbid=122136259268029112&set=a.122135532422029112",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Travels & Tours",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
