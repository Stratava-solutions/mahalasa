import "@/styles/globals.css";
import { Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import { imageUrl } from "@/utls/imageURL";
import { Header } from "@/components/harikhangige/Header";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/harikhangige/Footer";
import { RightSidebar } from "@/components/harikhangige/RightSidebar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "harikhandige",
  description:
    "Our beloved Kuladevata's temple at the Shri Mahalasa Narayani Devi Kshetra at Harikhandige, a rural hamlet about 21 kms from Udupi, is unique in its own way",
};

const tabs = [
  { name: "HOME", path: "/" },
  { name: "History", path: "/history" },
  {
    name: "Gallery",
    path: "#",
    dropdown: [
      {
        name: "Videos",
        path: "/gallery/videos",
      },
      {
        name: "TEMPLE DEITIES",
        path: "/gallery/temple-deities",
      },
      //   {
      //     name: "DRONE GALLERY",
      //     path: "#",
      //   },
      //   {
      //     name: "GLIMPSES OF DATTA JAYANTI",
      //     path: "#",
      //   },
      //   {
      //     name: "NAVRATRI ALBUM",
      //     path: "#",
      //   },
      //   {
      //     name: "TEMPLE SNAPS",
      //     path: "#",
      //   },
      //   {
      //     name: "ANUSHTHAN",
      //     path: "#",
      //   },
      //   {
      //     name: "INAUGURAL FUNCTION of MIYN",
      //     path: "#",
      //   },
    ],
  },

  {
    name: "Publications",
    path: "#",
    dropdown: [
      { name: "MAHALASA CHARITRA", path: "/publications/mahalasa-chaitra" },
      { name: "SHRI GURU CHARITRA", path: "/publications/guru-chaitra" },
      { name: "STHOTHRA MANJARI", path: "/manjari" },
    ],
  },
  {
    name: "CONTACT",
    path: "#",
    dropdown: [
      { name: "SEVA", path: "/contact/seva" },
      { name: "LOCATION", path: "/contact/location" },
    ],
  },
  { name: "SATHOTHRA MANJARI", path: "/manjari" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body
        style={{
          backgroundImage: `url(${imageUrl("harkandige/harikandige_bg.png")})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
        className="font-sans bg-whe text-white"
      >
        <div className="main-content-wrapper">
          {/* <Header /> */}
          <img
            src={`${imageUrl("/harkandige/header.png")}`}
            alt="Shri Guru Charitra Telugu"
            className="w-full h-full object-contain rounded"
          />
          <Navbar tabs={tabs} />

          <div className="bg-bgHari">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col lg:flex-row gap-6">
                <main className="flex-1">{children}</main>

                <aside className="lg:w-80">
                  <RightSidebar />
                </aside>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
