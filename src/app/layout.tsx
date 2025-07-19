import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-red text-gray-900">
        <div className="header-image"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
