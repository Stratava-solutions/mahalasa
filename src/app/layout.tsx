import "@/styles/globals.css"

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
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
