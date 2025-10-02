// app/layout.tsx or pages/_app.tsx
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

import { Playfair_Display } from "next/font/google";
import type { Metadata } from "next";

// Load Google Font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // regular + bold
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mahalasa",
  description:
    "Discover the network of Mahalasa temples across India and around the world, each preserving the divine traditions and serving devoted communities..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className="font-sans bg-whe text-gray-900">
        <div className="content-wrapper">
          <div className="header-image"></div>

          <Navbar />
          <main className="main-content">
            <LeftSidebar />
            {children}
            <RightSidebar />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
