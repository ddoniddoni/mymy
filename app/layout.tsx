import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mymy - Share Your creations, Discover New Launches",
  description:
    "mymy is a platform for building and sharing your own projects with the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <header>mymy</header>
        {children}
        <footer>mymy Inc. All rights reserved.</footer>
      </body>
    </html>
  );
}
