import type { Metadata } from "next";
import { Sora, Inter, Saira, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  weight: ["400", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Swastik Branding Agency - Creative Design & Printing Agency",
  description: "Architects of Visual Reality. High-impact graphic design, large-format printing, and structural signage.",
};

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${saira.variable} ${jetbrainsMono.variable} dark`}>
      <body className="antialiased bg-background text-foreground font-inter">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

