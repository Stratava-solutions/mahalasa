"use client";
import { usePageContent } from "@/hooks/usePageContent";
import { TempleContactsSkeleton } from "@/components/PageSkeleton";

export default function TempleContacts() {
  const { sections, text, title, loaded } = usePageContent("temple-contacts");
  if (!loaded) return <TempleContactsSkeleton />;

  const fallbackTemples = [
    { key: "harikhandige", title: "HARIKHANDIGE", body: "Shri Mahalasa Narayani Devi Kshetra,\n41, Shiroor, Harikhandige 576124.\nUdupi District, Karnataka\nTel: +91 820 2543400 | 97394 86200\nWebsite: http://harikhandige.mahalasa.org\nEmail: sjpai@mahalasa.org" },
    { key: "basrur", title: "BASRUR", body: "Shri Mahalasa Narayani Temple,\nMandikeri, Basrur 576211.\nKundapura Taluk, Udupi District, Karnataka.\nTel: +91 8254 237700\nEmail: malshibasrur@yahoo.com\nWebsite: http://basrur.mahalasa.org" },
    { key: "konchady", title: "KONCHADY", body: "Shri Mahalasa Narayani Temple,\nKonchady, Padavinangady,\nMangalore 575008\nTel: 824 2211400\nEmail: mahalasakonchady@gmail.com\nWebsite: http://konchady.mahalasa.org" },
    { key: "mardol", title: "MARDOL", body: "Shri Mahalasa Saunsthan,\nMardol, Ponda, Goa 403404.\nTel: +91 832 2312058\nEmail: mahalasagoa@gmail.com\nWebsite: http://mardol.mahalasa.org" },
    { key: "kumta", title: "KUMTA", body: "Shri Mahalasa Narayani Temple,\nKumta, Uttara Kannada, Karnataka.\nWebsite: http://kumta.mahalasa.org" },
  ];

  const displayTemples = sections.length > 0
    ? sections.map((s) => ({ key: s._id, title: s.title, body: s.body }))
    : fallbackTemples;

  return (
    <div className="text-primary">
      <h1 className="text-2xl font-bold text-center mb-8">
        {title("page-title", "Temple Contacts")}
      </h1>
      <p className="text-center mb-8 leading-relaxed">
        {text("intro", "For any queries related to Seva, Charitra, or general temple information, please contact the respective temples below.")}
      </p>
      <div className="space-y-6">
        {displayTemples.map((temple) => (
          <div key={temple.key} className="border border-green-200 rounded-lg p-5 bg-white shadow-sm">
            <h2 className="text-lg font-bold text-green-700 mb-3">{temple.title}</h2>
            <p className="leading-relaxed whitespace-pre-line text-sm">{temple.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
