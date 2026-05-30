"use client";
import { usePageContent } from "@/hooks/usePageContent";
import { ContentPageSkeleton } from "@/components/PageSkeleton";

export default function Charitra() {
  const { img, text, title, loaded } = usePageContent("charitra");
  if (!loaded) return <ContentPageSkeleton />;

  return (
    <div className="text-primary">
      <div>
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-4">{title("page-title", "The Charitra of Goddess Shri Mahalasa")}</h1>
        </div>

        <div className="p-6 rounded-lg shadow-sm mb-6">

          {/* Intro with image */}
          <div className="flex items-start mb-6 gap-6">
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img("cover-image", "/devi_maha.jpg")} alt="Shri Mahalasa Narayani" className="w-32 rounded shadow" />
              <p className="text-xs text-center mt-1">{text("cover-caption", "Shri Mahalasa Narayani's Charitra")}</p>
            </div>
            <div className="flex-1 leading-relaxed whitespace-pre-line">
              {text("intro", "The Charitra of Goddess Shri Mahalasa Narayani is considered as the Bhagwad Gita for Kulavis and other followers of Shri Mahalasa Narayani.\n\nA Parayan or proper reading of the book not only gives one peace of mind, but it is also said to have brought out many devotees from their state of distress. Many have said that this book changed their lives for the better.\n\nThe Charitra is available in Kannada, Marathi and English editions.")}
            </div>
          </div>

          {/* Second section with image */}
          <div className="flex items-start mb-6 gap-6">
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img("book-image", "/chaitra.jpg")} alt="Charitra Book" className="w-32 rounded shadow" />
              <p className="text-xs text-center mt-1">{text("book-caption", "The Charitra of Mahalasa Narayani in English")}</p>
            </div>
            <div className="flex-1 leading-relaxed whitespace-pre-line">
              {text("how-to-get", "To get the Charitra, one can contact Shri Mahalasa Narayani temple at Harikhandige, Mardol and Kumta.\n\nOn WhatsApp: 8970414801\nOr email: sureshjpai@gmail.com")}
            </div>
          </div>

          {/* Guidelines */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">{title("guidelines-title", "Guidelines for reading of the Charitra")}</h2>
            <div className="leading-relaxed whitespace-pre-line">
              {text("guidelines", "• Read this book with purity of thought.\n• Anyone can read the Charitra.\n• A word from a Guru would have far-reaching effects.\n• There is no hard and fast rule that the Parayan should begin on any particular day. However, it is best if it is read daily.\n• The Charitra can also be read on Tuesdays, Fridays, Asthami, Ekadashi, Dwadashi and on all days of Navaratri.\n• This book should be read with a commitment, pure mind, and utter devotion.\n• One should have satvik thoughts and satvik food.")}
            </div>
          </div>

          {/* Special Note */}
          <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 mb-6 flex gap-4 items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("note-image", "/small_gold_god.png")} alt="Shri Mahalasa" className="w-20 rounded flex-shrink-0" />
            <p className="italic leading-relaxed">
              {text("special-note", "The benefits of reading the Charitra will be manifold and immediate if read with faith, utter devotion, happiness and concentration.")}
            </p>
          </div>

          {/* Pricing */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">{title("pricing-title", "Cover Price")}</h3>
            <div className="leading-relaxed whitespace-pre-line">
              {text("pricing", "• Kannada: Rs 140\n• Marathi: Rs 215\n• English: Rs 150")}
            </div>
          </div>

          {/* Order details */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">{title("order-title", "Order a Charitra")}</h3>
            <div className="leading-relaxed whitespace-pre-line">
              {text("order-info", "On WhatsApp: 8970414801\nEmail: sureshjpai@gmail.com\n\nBank Account Details:\nShri Mahalasa Narayani Devi Kshetra\nCanara Bank, A/c. Perdoor: 0130200083045  IFSC: CNRB0010130\n\nShri Mahalasa Narayani Devi Kshetra\nUnion Bank, A/c. Manipal: 520101232336071  IFSC: UBIN0901288\n\nKindly intimate us after remittance.")}
            </div>
          </div>

          {/* New Charitra image */}
          <div className="flex justify-center mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("new-charitra-image", "/god2.jpg")} alt="New Charitra" className="max-w-[400px] w-full rounded shadow" />
          </div>

          {/* About Author */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">{title("author-title", "About the Author")}</h2>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img("author-image", "/suresh.jpg")} alt="Guruji" className="w-32 rounded shadow" />
                <p className="text-xs text-center mt-1">{text("author-caption", "Guruji Shri Suresh J Pai")}</p>
              </div>
              <div className="flex-1 leading-relaxed whitespace-pre-line">
                {text("author-bio", "His Holiness Guruji Shri Suresh J Pai, the Dharmadarshi of Shri Mahalasa Narayani Devi Kshetra, Harikhandige, is the author of The Charitra of Shri Mahalasa Narayani.\n\nProf. Pai was a commerce lecturer at a Panaji college and was deeply involved in spiritual activities from a very young age. Guruji's aim is the enlightenment of our society through spiritual awakening.\n\nMother Mahalasa is said to have personally inspired Guruji to pen this path-illuminating magnum opus.")}
              </div>
            </div>
          </div>

          <div className="text-center my-8">
            <div className="flex justify-center mb-4"><div className="w-16 h-1 bg-blue-400" /></div>
            <div className="text-xl font-bold mb-4" style={{ color: "#B8860B" }}>|| <em>SHRI MAHALASA ARPANAMASTU</em> ||</div>
            <div className="flex justify-center"><div className="w-16 h-1 bg-blue-400" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
