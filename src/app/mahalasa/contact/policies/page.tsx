"use client";
import { usePageContent } from "@/hooks/usePageContent";
import { PoliciesSkeleton } from "@/components/PageSkeleton";

export default function Policies() {
  const { sections, title, loaded } = usePageContent("policies");
  if (!loaded) return <PoliciesSkeleton />;

  const fallback = [
    { key: "disclaimer", title: "Disclaimer", body: "The details provided in this site are purely informative, and we assume no responsibility for any controversy that may arise from the interpretation of the story, history, stotras and stuthis, and other facts given here.\n\nWe claim no originality for information drawn from the Puranas and other ancient texts. It does not claim that the site is an exhaustive compilation of information about Shri Mahalasa Narayani.\n\nHonest efforts have been made to provide comprehensive information for the benefit of devotees.\n\nWe will not be liable for any damages arising in contract, tort or otherwise from the use of or inability to use the site, or any of its contents.\n\nCertain links on the site lead to resources located on servers maintained by third parties over whom we have no control. We accept no responsibility or liability for any of the material contained on those servers." },
    { key: "privacy", title: "Privacy Policy", body: "We do not collect personal information unless voluntarily provided. Contact form submissions are used only to respond to your inquiry. We do not sell or share your data with third parties.\n\nBy using this website, you consent to our privacy practices as described here." },
    { key: "copyright", title: "Copyright", body: "All content on this website, including text, images, and graphics, is the property of Shri Mahalasa Narayani Temple unless otherwise stated. Reproduction of content for commercial purposes is strictly prohibited. For personal/educational use, attribution is required." },
  ];

  const displaySections = sections.length > 0
    ? sections.map((s) => ({ key: s._id, title: s.title, body: s.body }))
    : fallback;

  return (
    <div className="text-primary py-4">
      <h1 className="text-4xl font-extrabold text-green-700 text-center mb-8">
        {title("page-title", "Disclaimer & Privacy Policies")}
      </h1>
      <div className="space-y-10">
        {displaySections.map((section) => (
          <section key={section.key}>
            <h2 className="text-2xl font-bold text-green-600 mb-4">{section.title}</h2>
            <div className="space-y-4 text-base leading-relaxed whitespace-pre-line">{section.body}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
