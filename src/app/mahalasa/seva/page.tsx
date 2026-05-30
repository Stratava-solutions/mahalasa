"use client";
import { usePageContent } from "@/hooks/usePageContent";
import { ContentPageSkeleton } from "@/components/PageSkeleton";

export default function Seva() {
  const { img, text, title, loaded } = usePageContent("seva");
  if (!loaded) return <ContentPageSkeleton />;

  return (
    <div className="text-primary">
      <div>
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-4">
            {title("page-title", "Perform Seva to Shri Mahalasa Narayani at Harikhandige, Karnataka")}
          </h1>
        </div>

        <div className="p-6 rounded-lg shadow-sm mb-6">

          {/* Introduction */}
          <div className="leading-relaxed mb-8 whitespace-pre-line">
            {text("intro", `There are many devotees who wish to perform Seva to the Kuladevata but cannot do so because of the distances and paucity of time. With Her inspirations, we are now bringing to Her Kulavis and other devotees a golden opportunity to offer Sevas to Shri Mahalasa Narayani.\n\nThe Seva will be performed at Shri Mahalasa Narayani's Temple at Harikhandige. The Prasad will be sent to you by post. At Harikhandige, there is no fixed rate since Service to God is not a commercial venture. Please send a Money Order for any amount you wish.`)}
          </div>

          {/* Address */}
          <div className="mb-8 leading-relaxed whitespace-pre-line">
            {text("address", `Dharmadarshi,\nShri Mahalasa Narayani Devi Kshetra,\n41, Shiroor, Harikhandige 576 124.\nUdupi District, Karnataka State.\nINDIA`)}
          </div>

          {/* Bank Transfer */}
          <div className="mb-8 leading-relaxed whitespace-pre-line">
            {text("bank-details", `Alternatively, you can transfer the amount to the following accounts:\n\nShri Mahalasa Narayani Devi Kshetra,\nUnion Bank, Manipal Branch.\nA/c No: 520101232336071\nIFSC Code: UBIN0901288\n\nShri Mahalasa Narayani Devi Kshetra,\nCanara Bank, Perdoor Branch.\nA/c No: 0130200083045\nIFSC: CNRB0010130`)}
          </div>

          {/* UPI Image */}
          <div className="mb-6 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("upi-image", "/upi.jpg")} alt="UPI QR Code" className="rounded max-w-[400px] w-full" />
          </div>

          {/* Instructions */}
          <div className="mb-8 leading-relaxed whitespace-pre-line">
            {text("instructions", `Please inform us by e-mail after this has been done. Please mention your full name, date of birth, sex, Gotra, Janma Rashi & Nakshatra, Seva requested, date of seva, amount you wish to remit, comments, if any, and your full postal address. The Seva will be performed on the date you specify.\n\nSend e-mail to: sureshjpai@gmail.com\nor alternatively, call on WhatsApp number 8970414801 for seva at Harikhandige.\n\nKindly note in case you wish to order seva at Mahalasa Saunsthan, Mardol-Goa contact: 9511214430`)}
          </div>

          <div className="flex justify-center mb-8"><div className="w-16 h-1 bg-blue-400" /></div>

          <div className="mb-8 text-center leading-relaxed whitespace-pre-line">
            <p className="mb-4 text-lg italic">
              {text("booking-note", "Please book a Seva at least 10 days in advance so as to enable us to make the necessary arrangements. On receipt of your request and M.O. or successful bank transfer, the Seva will be performed on the date specified by you and the Prasad will be sent by post to the address you have given.")}
            </p>
            <p className="text-xl font-bold mb-6"><em>Dev Bare Karon!</em></p>
          </div>

          <div className="flex justify-center mb-4"><div className="w-16 h-1 bg-blue-400" /></div>
          <div className="text-center mb-4">
            <div className="text-xl font-bold" style={{ color: "#B8860B" }}>|| <em>SHRI MAHALASA ARPANAMASTU</em> ||</div>
          </div>
          <div className="flex justify-center"><div className="w-16 h-1 bg-blue-400" /></div>
        </div>
      </div>
    </div>
  );
}
