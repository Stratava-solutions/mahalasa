import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Sacred Text */}
        <div className="text-center mb-8">
          <div className="text-yellow-400 text-lg mb-2">
            ॐ श्री महालसायै नमः ॐ श्री महालसायै नमः ॐ श्री महालसायै नमः ॐ श्री महालसायै नमः
          </div>
          <div className="text-xl font-bold text-yellow-300 mb-2">
            || SHRI MAHALASA ARPANAMASTU ||
          </div>
          <div className="text-yellow-400 text-lg">
            ॐ श्री महालसायै नमः ॐ श्री महालसायै नमः ॐ श्री महालसायै नमः ॐ श्री महालसायै नमः
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mb-8">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm">
            <Link 
              href="/mahalasa" 
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              HOME
            </Link>
            <span className="text-green-400">|</span>
            <Link 
              href="/mahalasa/chronicles" 
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              CHRONICLES
            </Link>
            <span className="text-green-400">|</span>
            <Link 
              href="/mahalasa/factfile" 
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              FACTFILE
            </Link>
            <span className="text-green-400">|</span>
            <Link 
              href="/mahalasa/charitra" 
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              CHARITRA
            </Link>
            <span className="text-green-400">|</span>
            <Link 
              href="/mahalasa/panchangam" 
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              PANCHANG
            </Link>
            <span className="text-green-400">|</span>
            <Link 
              href="/mahalasa/invitation" 
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              INVITATION
            </Link>
            <span className="text-green-400">|</span>
            <Link 
              href="/mahalasa/seva" 
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              SEVA
            </Link>
            <span className="text-green-400">|</span>
            <Link 
              href="/mahalasa/temples" 
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              TEMPLES
            </Link>
            <span className="text-green-400">|</span>
            <Link 
              href="/mahalasa/channels" 
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              CHANNELS
            </Link>
            <span className="text-green-400">|</span>
            <Link 
              href="/mahalasa/about" 
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              ABOUT
            </Link>
            <span className="text-green-400">|</span>
            <Link 
              href="/mahalasa/contact" 
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              CONNECT
            </Link>
            <span className="text-green-400">|</span>
            <Link 
              href="/mahalasa/shri-guru-charitra" 
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              Shri Guru Charitra
            </Link>
          </div>
        </nav>

        {/* Copyright and Credits */}
        <div className="text-center space-y-2 text-sm text-green-200">
          <p>
            © 1998-2025 | Editor & Webmaster: Shrikant N Shenoy
          </p>
          <p>
            || Welcome to Shri Mahalasa Narayani's Temple on the Internet || | Powered by{' '}
            <Link 
              href="https://mantra.com" 
              target="_blank"
              className="hover:text-yellow-300 transition-colors"
            >
              Mantra
            </Link>
            {' '}&{' '}
            <Link 
              href="https://wordpress.org" 
              target="_blank"
              className="hover:text-yellow-300 transition-colors"
            >
              WordPress
            </Link>
            .
          </p>
        </div>

        {/* Social Media */}
        <div className="flex justify-center mt-6">
          <Link 
            href="https://www.facebook.com/MyMahalasa/" 
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition-colors text-2xl"
          >
            📘
          </Link>
        </div>
      </div>

      {/* Decorative Border */}
      <div className="bg-yellow-600 h-1"></div>
    </footer>
  );
}