import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "GNIX Semicon",
  description: "Building India's Intelligence Layer for the Physical World",
};

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


