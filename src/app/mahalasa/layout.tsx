import "../../styles/globals.css";
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




const tabs = [
  { name: "HOME", path: "/mahalasa" },
  { name: "CHRONICLES", path: "/mahalasa/chronicles" },
  { name: "FACTFILE", path: "/mahalasa/factfile" },
  { name: "CHARITRA", path: "/mahalasa/charitra" },
  { name: "SHRI GURU CHARITRA", path: "/mahalasa/shri-guru-charitra" },
  { name: "PANCHANGAM", path: "/mahalasa/panchangam" },
  { name: "INVITATION", path: "/mahalasa/invitation" },
  { name: "SEVA", path: "/mahalasa/seva" },
  {
    name: "TEMPLES",
    path: "/mahalasa/temples",
    dropdown: [
      {
        name: "Goa",
        path: "#",
        dropdown: [
          { name: "MARDOL", path: "https://web.archive.org/web/20241009065525/http://mardol.mahalasa.org/" },
          { name: "VERNA", path: "https://web.archive.org/web/20241009065525/http://verna.mahalasa.org/" },
        ],
      },
      {
        name: "Karnataka",
        path: "#",
        dropdown: [
          { name: "BASRUR", path: "https://web.archive.org/web/20241009065525/http://basrur.mahalasa.org/" },
          { name: "HARIKHANDIGE", path: "https://web.archive.org/web/20241009065525/http://harikhandige.mahalasa.org/" },
          { name: "KONCHADY", path: "https://web.archive.org/web/20241009065525/http://konchady.mahalasa.org/" },
          { name: "KUMTA", path: "https://web.archive.org/web/20241009065525/http://kumta.mahalasa.org/" },
          { name: "MADANGERI", path: "https://web.archive.org/web/20241009065525/http://madangeri.mahalasa.org/" },
          { name: "MOODBIDRI", path: "https://web.archive.org/web/20241009065525/http://moodbidri.mahalasa.org/" },
          { name: "MUDGERI", path: "https://web.archive.org/web/20241009065525/http://www.shrimahalasanarayani.org/" },
          { name: "SHIRVA", path: "https://web.archive.org/web/20241009065525/http://shirva.mahalasa.org/" },
        ],
      },
      {
        name: "Maharashtra",
        path: "#",
        dropdown: [
          { name: "NIVASE", path: "https://web.archive.org/web/20241009065525/https://www.mahalasa.org/temples/maharashtra/nevase/" },
          { name: "OTHER", path: "#" },
        ],
      },
    ],
  },
  {
    name: "CHANNELS",
    path: "/mahalasa/channels",
    dropdown: [
      { name: "Mahalasa At Temples", path: "/mahalasa/channels/mahalasa-devi" },
      { name: "Temples", path: "/mahalasa/channels/temples" },
      { name: "Video Gallery", path: "/mahalasa/channels/video-gallery" },
    ],
  },
  { name: "ABOUT", path: "/mahalasa/about" },
  {
    name: "CONNECT",
    path: "/mahalasa/contact",
    dropdown: [
      { name: "Contact Us", path: "/mahalasa/contact" },
      { name: "Temples Contacts", path: "/mahalasa/contact/temples-contact" },
      { name: "Policies", path: "/mahalasa/contact/policies" },
    ],
  },
];






export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className="font-sans bg-whe text-gray-900">
        <div className="content-wrapper">
          <div className="header-image"></div>

          <Navbar tabs={tabs} />
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
