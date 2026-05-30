const Pulse = ({ className }: { className: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

function TextBlock({ lines = 4, wide = false }: { lines?: number; wide?: boolean }) {
  const widths = ["w-full", "w-5/6", "w-4/5", "w-full", "w-3/4", "w-5/6"];
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Pulse key={i} className={`h-4 ${wide ? widths[i % widths.length] : "w-full"}`} />
      ))}
    </div>
  );
}

export function ContentPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl animate-pulse">
      {/* Title */}
      <div className="text-center mb-6 flex flex-col items-center gap-3">
        <Pulse className="h-7 w-64" />
      </div>

      <div className="p-6 rounded-lg shadow-sm mb-6 bg-white/60 space-y-8">
        {/* Hero image */}
        <Pulse className="h-64 w-full max-w-lg mx-auto rounded-lg" />

        {/* Text block */}
        <TextBlock lines={5} wide />

        {/* Side-by-side: image + text */}
        <div className="flex gap-6">
          <Pulse className="w-32 h-32 shrink-0 rounded" />
          <TextBlock lines={4} wide />
        </div>

        {/* Section heading */}
        <Pulse className="h-6 w-48" />
        <TextBlock lines={5} wide />

        {/* Another image */}
        <Pulse className="h-52 w-full max-w-md mx-auto rounded-lg" />

        {/* Text block */}
        <TextBlock lines={3} wide />
      </div>
    </div>
  );
}

export function GallerySkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <Pulse className="h-8 w-64 mx-auto mb-6" />
      <Pulse className="w-full h-[450px] rounded-xl" />
    </div>
  );
}

export function GridGallerySkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Pulse className="h-8 w-48 mx-auto mb-8" />
      <div className="flex justify-center gap-3 mb-8">
        {Array.from({ length: 4 }).map((_, i) => <Pulse key={i} className="h-9 w-24 rounded-lg" />)}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, i) => <Pulse key={i} className="aspect-square rounded-lg" />)}
      </div>
    </div>
  );
}

export function TempleContactsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
      <Pulse className="h-8 w-56 mx-auto" />
      <Pulse className="h-5 w-3/4 mx-auto" />
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="border border-gray-100 rounded-lg p-5 bg-white space-y-3">
          <Pulse className="h-6 w-40" />
          <TextBlock lines={4} />
        </div>
      ))}
    </div>
  );
}

export function ListPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl space-y-4">
      <Pulse className="h-8 w-48 mx-auto mb-8" />
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex gap-4 bg-white rounded-xl border p-4">
          <Pulse className="w-28 h-28 shrink-0 rounded-lg" />
          <div className="flex-1 space-y-3">
            <Pulse className="h-5 w-3/5" />
            <Pulse className="h-3 w-2/5" />
            <TextBlock lines={2} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function InvitationSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl space-y-8">
      <Pulse className="h-9 w-48 mx-auto" />
      <div className="bg-gray-100 rounded-lg p-8 space-y-4">
        <Pulse className="h-7 w-56 mx-auto" />
        <TextBlock lines={3} wide />
        <div className="bg-white rounded-lg p-4 space-y-2">
          <Pulse className="h-5 w-3/4 mx-auto" />
          <Pulse className="h-4 w-1/2 mx-auto" />
        </div>
      </div>
      <div className="space-y-4">
        <Pulse className="h-7 w-48 mb-4" />
        <div className="bg-gray-100 rounded-lg p-6 space-y-3">
          <Pulse className="h-6 w-40" />
          {Array.from({ length: 6 }).map((_, i) => <Pulse key={i} className="h-4 w-full" />)}
        </div>
      </div>
    </div>
  );
}

export function PoliciesSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <Pulse className="h-9 w-72 mx-auto" />
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <Pulse className="h-7 w-48" />
          <TextBlock lines={6} wide />
        </div>
      ))}
    </div>
  );
}
