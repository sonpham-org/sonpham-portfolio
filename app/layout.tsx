import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Son Pham - AI Engineer & Researcher",
  description: "Portfolio and blog of Son Pham - AI Engineer, Researcher, and Builder exploring artificial intelligence, machine learning, and creative technologies.",
  keywords: ["AI", "Machine Learning", "Software Engineering", "Blog", "Portfolio"],
  authors: [{ name: "Son Pham" }],
  openGraph: {
    title: "Son Pham - AI Engineer & Researcher",
    description: "Portfolio and blog exploring AI, ML, and creative tech",
    url: "https://sonpham.net",
    siteName: "Son Pham",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* AdSense Script */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
