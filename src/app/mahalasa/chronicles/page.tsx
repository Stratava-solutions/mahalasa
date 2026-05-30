"use client";
import { usePageContent } from "@/hooks/usePageContent";
import { ContentPageSkeleton } from "@/components/PageSkeleton";

export default function Chronicles() {
  const { img, text, title, loaded } = usePageContent("chronicles");
  if (!loaded) return <ContentPageSkeleton />;

  return (
    <div className="text-primary">
      <div>
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-green-700 mb-4">
            {title("page-title", "The Samudra Manthan")}
          </h1>
        </div>

        <div className="p-6 rounded-lg shadow-sm mb-6 text-primary leading-relaxed text-justify">

          <div className="whitespace-pre-line mb-6">
            {text("intro", `Shri Mahalasa Narayani's story is considered to be directly related to the story of Samudra Manthan or the Churning of the Sea, according to the Bhagwat Purana.\n\nThe Gods and the Asuras (Demons) churned the sea to get back the treasures which got immersed in the sea due to Sage Durvasa's curse. During this churning process emerged the fourteen ratnas (treasures), including Amrut (nectar of life) which could make anyone who drinks it immortal.\n\nThere was a fight between the Gods and demons. In order to help the Gods, Lord Vishnu had to take the avatar (incarnation) of Mohini or the Enchantress.\n\nShe was so beautiful that the eyes of all demons got riveted on her face. In the meanwhile, she distributed Amrut to the Gods and nothing was left for the demons.\n\nShri Mahalasa is another name for Lord Vishnu's Mohini Roopa (incarnation)!`)}
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-shrink-0 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img("mohini-image", "/roopa_mohini.jpg")} alt="Mohini Roopa" className="rounded shadow w-48 mx-auto" />
              <p className="text-sm mt-2">{text("mohini-caption", "Mohini Roopa — Lord Vishnu's Enchantress Avatar")}</p>
            </div>
            <div className="flex-1 whitespace-pre-line">
              {text("section-2", `Shri Mahalasa Narayani is the daughter of Shri Mahalasa (Mohini) and Shiva.\n\nShri Mahalasa Narayani's original temple was at Verna, Goa. This Devi came to Goa from the sea. She is also known as Mhalsa, Mhalasadevi, and Mahalasa Narayani.\n\nDue to the Portuguese Inquisition in Goa, the idol was moved from Verna and re-established at Mardol, Ponda in Goa in the 16th century.`)}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-1 whitespace-pre-line">
              {text("section-3", `The idol at Mardol is considered to be the original and most powerful. The Goddess is depicted as having four arms, holding a chakra (disc), a conch, a lotus, and a mace.\n\nHer temples are spread across Goa, Karnataka, Maharashtra, and internationally, serving the Konkani diaspora worldwide.`)}
            </div>
            <div className="flex-shrink-0 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img("temple-image", "/header-image.jpg")} alt="Temple" className="rounded shadow w-48 mx-auto" />
              <p className="text-sm mt-2">{text("temple-caption", "Shri Mahalasa Narayani Temple")}</p>
            </div>
          </div>

          <div className="text-center my-8">
            <div className="flex justify-center mb-4"><div className="w-16 h-1 bg-blue-400" /></div>
            <div className="text-xl font-bold" style={{ color: "#B8860B" }}>|| <em>SHRI MAHALASA ARPANAMASTU</em> ||</div>
            <div className="flex justify-center mt-4"><div className="w-16 h-1 bg-blue-400" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
