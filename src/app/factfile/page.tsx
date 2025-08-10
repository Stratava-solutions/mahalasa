export default function Factfile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600">Factfile</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-red-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Temple Details</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Deity:</span>
                <span>Shree Mahalasa Narayani</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Form:</span>
                <span>Mohini Avatar of Lord Vishnu</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Primary Location:</span>
                <span>Mardol, Goa</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Original Location:</span>
                <span>Verna (Velham), Salcette</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Temple Architecture:</span>
                <span>Traditional Goan Hindu</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Established:</span>
                <span>17th Century (Current Structure)</span>
              </div>
            </div>
          </section>

          <section className="bg-red-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Spiritual Significance</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Worship Tradition:</span>
                <span>Saraswat Brahmin</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Primary Festival:</span>
                <span>Mahalasa Jayanti</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Sacred Days:</span>
                <span>Tuesdays & Fridays</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Ritual Language:</span>
                <span>Sanskrit & Konkani</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Pranayam:</span>
                <span>Om Shree Mahalasayai Namaha</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Yantra:</span>
                <span>Shree Yantra</span>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-8 bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-700">Historical Facts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Migration Timeline</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Ancient Times:</strong> Nepal origin</li>
                <li>• <strong>Medieval Period:</strong> Aurangabad, Maharashtra</li>
                <li>• <strong>Mughal Era:</strong> Secret location in Goa</li>
                <li>• <strong>1567:</strong> Destruction of Verna temple</li>
                <li>• <strong>17th Century:</strong> Establishment in Mardol</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Temple Network</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Mardol, Goa:</strong> Primary temple</li>
                <li>• <strong>Mangalore:</strong> Konchady temple (1987)</li>
                <li>• <strong>Basrur:</strong> 500+ years old</li>
                <li>• <strong>Multiple locations:</strong> Karnataka coast</li>
                <li>• <strong>International:</strong> Diaspora temples</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8 bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Cultural Impact</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">Religious Preservation</h3>
              <p>The Mahalasa temples played a crucial role in preserving Saraswat Brahmin traditions during Portuguese colonization and religious persecution in Goa.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Community Building</h3>
              <p>Temple networks facilitated migration and settlement of Goan Hindu communities along the western Indian coast, maintaining cultural continuity.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Spiritual Practice</h3>
              <p>Centers for Vedic learning, Sanskrit education, and traditional arts including music, dance, and temple architecture.</p>
            </div>
          </div>
        </section>

        <section className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Sacred Attributes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Sacred Colors</h3>
              <div className="space-y-1 text-gray-700">
                <p>Red (Power)</p>
                <p>Yellow (Prosperity)</p>
                <p>White (Purity)</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Sacred Flowers</h3>
              <div className="space-y-1 text-gray-700">
                <p>Lotus</p>
                <p>Jasmine</p>
                <p>Marigold</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Sacred Offerings</h3>
              <div className="space-y-1 text-gray-700">
                <p>Coconut</p>
                <p>Bananas</p>
                <p>Incense</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}