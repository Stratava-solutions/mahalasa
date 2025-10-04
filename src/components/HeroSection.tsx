import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      {/* Main Header Image */}
      <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden">
        <Image
          src="/header-image.jpg"
          alt="Shree Mahalasa Narayani Temple Header"
          fill
          priority
          className="object-contain object-center"
        />

        {/* Dark Overlay (remove if not needed) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
              श्री महालसा नारायणी मंदिर
            </h1>
            <h2 className="text-md sm:text-lg md:text-2xl lg:text-3xl font-semibold mb-2">
              Shree Mahalasa Narayani Temple
            </h2>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl opacity-90">
              Divine Grace • Sacred Traditions • Spiritual Bliss
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
