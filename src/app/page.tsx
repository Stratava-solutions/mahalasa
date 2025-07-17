
import HeroCarousel from '@/components/HeroCarousel';

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <section className="p-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Shri Mahalasa Narayani Temple</h2>
        <p>This is a clone of the archived version of mahalasa.org.</p>
      </section>
    </div>
  );
}
