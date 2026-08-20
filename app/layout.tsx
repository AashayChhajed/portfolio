import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aashaychhajed.vercel.app";
const title = "Aashay Chhajed";
const description = "Portfolio of Aashay Chhajed, a Full-Stack Developer creating web applications with React, Next.js, TypeScript, Node.js, Spring Boot, and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ["Aashay Chhajed", "Aashay", "Full Stack Developer", "Software Engineer", "React Developer", "Next.js Portfolio", "India Remote Engineer"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", title, description, url: "/", siteName: "Aashay Chhajed" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aashay Chhajed",
              jobTitle: "Full-Stack Developer",
              url: siteUrl,
              sameAs: ["https://www.linkedin.com/in/aashay-chhajed", "https://github.com/AashayChhajed"],
            }),
          }}
        />
      </body>
    </html>
  );
}
