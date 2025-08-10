
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative w-full">
      {/* Main Header Image */}
      <div className="relative w-full h-48 md:h-64 overflow-hidden">
        <Image
          src="/header-image.jpg"
          alt="Shree Mahalasa Narayani Temple Header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              श्री महालसा नारायणी मंदिर
            </h1>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-4">
              Shree Mahalasa Narayani Temple
            </h2>
            <p className="text-sm md:text-lg lg:text-xl opacity-90">
              Divine Grace • Sacred Traditions • Spiritual Bliss
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
