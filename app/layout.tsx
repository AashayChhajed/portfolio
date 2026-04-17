import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aashay Chhajed",
  description: "Personal portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}