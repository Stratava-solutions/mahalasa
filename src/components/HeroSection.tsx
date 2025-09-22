import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      {/* Main Header Image */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[3/1] md:aspect-[5/2] lg:aspect-[16/5] overflow-hidden">
        <Image
          src="/header-image.jpg"
          alt="Shree Mahalasa Narayani Temple Header"
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          fill
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
              श्री महालसा नारायणी मंदिर
            </h1>
            <h2 className="text-md sm:text-lg md:text-2xl lg:text-3xl font-semibold mb-1 sm:mb-2 md:mb-4">
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
