"use client";
import { usePageContent } from "@/hooks/usePageContent";
import { ContentPageSkeleton } from "@/components/PageSkeleton";

export default function ShriGuruCharitra() {
  const { img, text, title, loaded } = usePageContent("shri-guru-charitra");
  if (!loaded) return <ContentPageSkeleton />;

  return (
    <div className="text-primary">
      <div>

        {/* Title and Header Image */}
        <div className="text-center mb-6">
          <div className="mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img("header-image", "/guru_chaitra.jpg")}
              alt="Shri Guru Charitra"
              className="mx-auto rounded-lg shadow-lg max-w-[600px] w-full"
            />
          </div>
          <h1 className="text-2xl font-bold mb-4">
            {title("page-title", "SHRI GURU CHARITRA")}
          </h1>
        </div>

        <div className="p-6 rounded-lg shadow-sm mb-6">

          {/* Book Cover Image */}
          <div className="mb-8 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img("book-cover", "/guru_chaitra_2.jpg")}
              alt="Shri Guru Charitra Book Cover"
              className="mx-auto rounded-lg shadow-md max-w-[400px] w-full"
            />
            <p className="text-md mt-2 text-gray-600">
              {text("book-cover-caption", "SHRI MAHAALASAA NAARAAYANI DEVI KSHETRA, HARIKHANDIGE")}
            </p>
          </div>

          {/* Main Description */}
          <div className="leading-relaxed mb-8 whitespace-pre-line">
            <p className="mb-4">
              {text("description", `The "Shri Guru Charitra" edited and authored by revered Shri Suresh J Pai Guruji has been published in English, Kannada and Marathi, which is available to the Devotees who have spread across the Globe. This book elaborately speaks about the divine incarnation of Shri Datta Guru, His divine glories and avatars (i.e Shri Shripad Shri Vallabha and Shri Narasimha Saraswati Swamiji). In this treasure, an attempt is made to highlight all the aspects governing the relationship between Guru and Shishya, Guru's significance in the spiritual life, the duties and obligations of disciples towards Guru and other matters related to spiritual discipline.`)}
            </p>
            <p className="mb-6">
              {text("description-2", `It is a must for aspirants as it equips them with spiritual knowledge and leads them on the righteous path. The book is available to be couriered to any part of the world. To get your copy, WhatsApp us at 8970414801 or mail us at sureshjpai@gmail.com`)}
            </p>
          </div>

          {/* Scene Image */}
          <div className="mb-8 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img("scene-image", "/guru_chaitra_3.jpg")}
              alt="Guru Teaching Scene"
              className="mx-auto rounded-lg shadow-md max-w-[500px] w-full"
            />
            <p className="text-sm mt-2">
              <strong>ಶ್ರೀ ಗುರುಚರಿತ್ರ</strong> — {text("scene-caption", "Spiritual Teaching Scene")}
            </p>
          </div>

          {/* Nature Image */}
          <div className="mb-8 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img("nature-image", "/guru_chaitra_4.jpg")}
              alt="Lord Dattatreya in Nature"
              className="mx-auto rounded-lg shadow-md max-w-[500px] w-full"
            />
            <p className="text-sm mt-2">
              <strong>Divine Forest Scene</strong> — {text("nature-caption", "Lord Dattatreya in Nature")}
            </p>
          </div>

          {/* Book Details */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">{title("details-title", "Book Details")}</h2>
            <div className="leading-relaxed whitespace-pre-line">
              {text("details", "• Author: His Holiness Guruji Shri Suresh J Pai\n• Languages Available: English, Kannada, and Marathi\n• Subject: Divine incarnation of Shri Datta Guru and His avatars\n• Features: Detailed footnotes for better understanding\n• Availability: Worldwide courier service available")}
            </div>
          </div>

          {/* How to Order */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">{title("order-title", "How to Order")}</h3>
            <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 leading-relaxed whitespace-pre-line">
              {text("order-info", "WhatsApp: 8970414801\nEmail: sureshjpai@gmail.com\n\nAvailable for courier delivery worldwide")}
            </div>
          </div>

          <div className="text-center my-8">
            <div className="flex justify-center mb-4"><div className="w-16 h-1 bg-blue-400" /></div>
            <div className="text-xl font-bold mb-4">|| <em>SHRI GURU CHARITRA ARPANAMASTU</em> ||</div>
            <div className="flex justify-center"><div className="w-16 h-1 bg-blue-400" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
