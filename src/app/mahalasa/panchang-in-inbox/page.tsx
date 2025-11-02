import Image from "next/image";

export default function PanchangInInbox() {
  const infoItems = [
    "Samvatsara/Shake",
    "Ayana",
    "Rithu",
    "Maasa",
    "Wara",
    "Tithi",
    "Nakshatra",
    "Yoga",
    "Karana",
    "Equivalent of CE calendar for that day",
    "Festivals",
    "Events at temples of Shri Mahalasa Narayani",
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-6 max-w-4xl text-primary">
        {/* Title */}
        <div className="text-center text-primary mb-6">
          <h1 className="text-2xl font-bold mb-4 text-primary">
            Panchang in Inbox
          </h1>
        </div>
      </div>
      <div className="flex-1 text-primary leading-relaxed">
        <p className="mb-4 text-primary">
          Experience of a Seeker » Panchang in Inbox Hundreds of devotees of
          Shri Mahalasa Narayani are benefiting by receiving the Daily Panchang
          & Events information right inside their e-mail in-boxes.This benefit
          is also availed by many other God-loving Hindus too. Apart from
          information regarding the day’s tithi, wara, nakshatra and other
          relevant data, the mail also highlights the utsavs, festivals and
          events occurring on that day, especially related to almost all
          important temples of Shri Mahalasa Narayani (from where information is
          available). Besides, you don’t have to rush to seek any
          panchang/almanac/calendar at the last moment.
        </p>
      </div>
      <div className=" border-2 border-orange-300 bg-orange_bg rounded-lg p-4 mb-6">
        <div className="flex  items-start">
          <div className="mr-1 my-8">
            <Image
              src="/small_gold_god.png"
              alt="Goddess icon"
              width={200}
              height={200}
              className="rounded"
            />
          </div>
          <div>
            <p className="text-md  leading-relaxed">
              We send this mail a day in advance on the request of many of our
              subscribers so as to enable you to plan for the next day and not
              be caught by surprise. On our website, our Panchang section gives
              you a glance of the month’s festivals/events at various temples
              from where we receive information from.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#E8DDB5] p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h2 className="text-green-800 text-2xl font-semibold mb-6">
          The information is organised as follows:
        </h2>

        <ul className="space-y-3">
          {infoItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-3 h-3 bg-gray-600 rounded-full mt-1.5 flex-shrink-0"></span>
              <span className="text-green-800 text-lg font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className=" border-2 border-orange-300 bg-orange_bg rounded-lg p-4 mb-6">
        <div className="flex  items-start">
          <div className="mr-1 my-8">
            <Image
              src="/small_gold_god.png"
              alt="Goddess icon"
              width={200}
              height={200}
              className="rounded"
            />
          </div>
          <div>
            <p className="text-md  leading-relaxed">
              A thoughtful and valuable Quote For The Day from the revered book,
              The Charitra of Shri Mahalasa Narayani authored by His Holiness
              Guruji Shri Suresh J Pai, is also included in the mail.s.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 text-primary leading-relaxed">
        <p className="py-10">
          <strong>
            We also add a short, simple–yet powerful–prayer to Shri Mahalasa
            Narayani for the well-being and prosperity of you and your family.
          </strong>
        </p>
        <p className="mb-4 text-primary">
          Occasionally, you will receive news updates of events at various
          temples of Shri Mahalasa Narayani, invitations to temple festivals and
          functions, appeals, information about any updates to this website
          and/or its subdomains and so on.
        </p>
      </div>
      <div className="mr-1 my-8 flex justify-center">
        <Image
          src="/divider1.jpg"
          alt="divide"
          width={500}
          height={500}
          className="rounded"
        />
      </div>
      <div className="flex-1 text-primary leading-relaxed">
        <p className="py-4 text-center">
          <strong>Subscribe Now!</strong>
        </p>
        <p className="mb-4 text-primary">
          To add your name to this list, please{" "}
          <a
            href="mailto:your-email@example.com?subject=Subscribe to Mahalasa Narayani Updates"
            className="text-blue-600 underline"
          >
            click here
          </a>
          .. Please feel free to share the mail with all your near and dear
          ones.
        </p>
      </div>
      <div className="mr-1 my-8 flex justify-center">
        <Image
          src="/divider1.jpg"
          alt="divide"
          width={500}
          height={500}
          className="rounded"
        />
      </div>

      <div className="flex-1 text-primary leading-relaxed">
        <p className="py-4">
          Our strict policy here is that we keep your e-mail address completely
          confidential and, under any circumstance, will NOT be shared with any
          other organisation or entity. Your e-mail address will be used only to
          send you the above information.
        </p>
        <p className="mb-4 text-primary">
          This is a FREE service, and, as mentioned above, already hundreds of
          subscribers are being benefited from this since many years.
        </p>
        <p className="mb-4 text-primary">
          To see a sample of a Panchang & Events mailer, please{" "}
          <a
            href="mailto:your-email@example.com?subject=Subscribe to Mahalasa Narayani Updates"
            className="text-blue-600 underline"
          >
            click here
          </a>
          ..
        </p>
      </div>
      <div className="mr-1 my-8 flex justify-center">
        <Image
          src="/divider1.jpg"
          alt="divide"
          width={500}
          height={500}
          className="rounded"
        />
      </div>
      <div className="flex-1 text-primary leading-relaxed">
        <p className="py-4 text-center">
          <strong>Subscribe Now!</strong>
        </p>
        <p className="mb-4 text-primary">
          To add your name to this list, please{" "}
          <a
            href="mailto:your-email@example.com?subject=Subscribe to Mahalasa Narayani Updates"
            className="text-blue-600 underline"
          >
            click here
          </a>
          .. Please feel free to share the mail with all your near and dear
          ones.
        </p>
      </div>
      <div className="mr-1 my-8 flex justify-center">
        <Image
          src="/divider1.jpg"
          alt="divide"
          width={500}
          height={500}
          className="rounded"
        />
      </div>

      <div className="flex-1 text-primary leading-relaxed">
        <p className="py-4">
          <strong> Please note</strong>: Users with Indiatimes and Rediffmail
          mail service are advised to provide a different mail address. We have
          noted that mails sent to them often tend to bounce back without your
          receiving it. Similarly, users of Boxbe and other similar programmes
          must ensure that our mail addresses are not blocked or delayed by such
          programmes. We cannot and do not respond to e-mails from such
          automatic programmes.
        </p>
        <p className="py-4">
          <strong>Safe list</strong> : In case you receiving our mail in your
          junk mail/spam folder, mark our mails as Not Junk/Spam or add it to
          your Safe Sender’s list.
        </p>
      </div>
      <div className="mr-1 my-8 flex justify-center">
        <Image
          src="/divider1.jpg"
          alt="divide"
          width={500}
          height={500}
          className="rounded"
        />
      </div>
      <div className="flex-1 text-primary leading-relaxed">
        <p className="py-4 text-center">
          <strong>Subscribe Now!</strong>
        </p>
        <p className="mb-4 text-primary">
          To add your name to this list, please{" "}
          <a
            href="mailto:your-email@example.com?subject=Subscribe to Mahalasa Narayani Updates"
            className="text-blue-600 underline"
          >
            click here
          </a>
          .. Please feel free to share the mail with all your near and dear
          ones.
        </p>
      </div>
      <div className="mr-1 my-8 flex justify-center">
        <Image
          src="/divider1.jpg"
          alt="divide"
          width={500}
          height={500}
          className="rounded"
        />
      </div>
      <div className="flex justify-center">
        || SHRI MAHALASA ARPANAMASTU ||


      </div>
            <div className="mr-1 my-8 flex justify-center">
        <Image
          src="/divider1.jpg"
          alt="divide"
          width={500}
          height={500}
          className="rounded"
        />
      </div>
    </div>
  );
}
