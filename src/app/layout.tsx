import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navigation from "@/components/layout/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tanisha — Full-stack developer & AI/ML engineer",
  description: "Personal portfolio of Tanisha, showcasing projects in full-stack development, AI/ML, and agentic systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fredoka.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col selection:bg-violet-accent/30 selection:text-violet-light">
        <SmoothScroll>
          <CustomCursor />
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          {/* We will add Footer here later */}
        </SmoothScroll>
      </body>
    </html>
  );
}
