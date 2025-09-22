export default function TempleContacts() {
  const templeAddress = [
    {
      title: "HARIKHANDIGE:",
      add1: "Shri Mahalasa Narayani Devi Kshetra,",
      add2: "41, Shiroor, Harikhandige 576124.",
      add3: "Udupi District, Karnataka",
      add4: "Tel: +91 820 2543400 | 97394 86200",
      add5: "Official website: http://harikhandige.mahalasa.org",
      add6: "e-mail: sjpai@mahalasa.org",
    },
    {
      title: "BASRUR:",
      add1: "Shri Mahalasa Narayani Temple,",
      add2: "Mandikeri, Basrur 576211.",
      add3: "Kundapura Taluk, Udupi District, Karnataka.",
      add4: "Tel: +91 8254 237700",
      add5: "e-mail: malshibasrur@yahoo.com",
      add6: "Website: http://basrur.mahalasa.org",
    },
    {
      title: "KONCHADY:",
      add1: "Shri Mahalasa Narayani Temple,",
      add2: "Konchady, Padavinangady,",
      add3: "Mangalore 575008, Tel: 824 2211400",
      add4: "e-mail: mahalasakonchady@gmail.com",
      add5: "Website: http://konchady.mahalasa.org",
      add6: "Official website: http://www.mahalasanarayani.com",
    },
    {
      title: "KUMTA:",
      add1: "Shri Mahalasa Narayani Temple,",
      add2: "Car Street, Near Teen Katta,",
      add3: "Kumta 581343.",
      add4: "Uttara Kannada, Karnataka.",
      add5: "Tel: +91 8386 222119",
      add6: "Website: http://kumta.mahalasa.org",
    },
    {
      title: "MADANGERI:",
      add1: "Shri Mahalasa Siddhivinayaka Temple,",
      add2: "Gokarna Road, Madangeri 581344,",
      add3: "Uttara Kannada, Karnataka,",
      add4: "Tel: +91 08386, 279340 (O) 279840 (R)",
      add5: "e-mail: info@mahalasasiddivinayaka.com, info@mahalasasiddivinayaka.com",
      add6: "Website: http://madangeri.mahalasa.org",
    },
    {
      title: "MARDOL:",
      add1: "Shri Mahalasa Saunsthan,",
      add2: "Mardol, Goa 403404.",
      add3: "Mob: 9511214430",
      add4: "Website: http://mardol.mahalasa.org",
      add5: "Official website: http://shreemahalasanarayani.com/",
      add6: "e-mail: santeri@shreemahalasanarayani.com",
    },
    {
      title: "MOODBIDRI:",
      add1: "Shri Mahalasa Narayani Temple,",
      add2: "Near Old Police Station,",
      add3: "Mangalore-Solapur Highway, Moodbidri 574227",
      add4: "Dakshina Kannada District, Karnataka",
      add5: "Tel: +91 8258 237261",
      add6: "Website: http://moodbidri.mahalasa.org",
    },
    {
      title: "MUDGERI:",
      add1: "Shri Mahalasa Narayani Devasthan,",
      add2: "At Post: Mudgeri, 581377.",
      add3: "Karwar Taluka, Uttara Kannada District, Karnataka",
      add4: "Tel: +91 8382 28691",
      add5: "e-mail: info@shrimahalasanarayani.org",
      add6: "Website: http://www.shrimahalasanarayani.org/",
    },
    {
      title: "SHIRWA:",
      add1: "Shri Mahalasa Narayani Temple,",
      add2: "Shri Kashi Math,",
      add3: "Shirwa 576116, Udupi District, Karnataka",
      add4: "Tel: +91 820 2576976 Cell: +91 9480574661",
      add5: "e-mail: shirva.mahalasa@gmail.com",
      add6: "",
    },
    {
      title: "VERNA:",
      add1: "Shri Mahalasa Narayani Temple,",
      add2: "Verna, Goa.",
      add3: "",
      add4: "",
      add5: "",
      add6: "",
    },
    {
      title: "Shrikant N Shenoy:",
      add1: "Editor & Webmaster",
      add2: "Mahalasa Niwas, Shenoy Gardens,",
      add3: "1-10(G), 2nd Main, 6th Cross, Devi Nagar,",
      add4: "Parkala 576 107 (Udupi/Karnataka).",
      add5: "Tel: +91 94483 82461 / +91 820 2544232",
      add6: "e-mail: snshenoy@mahalasa.org",
    },
  ];

 return (
    <div className="py-10 px-4 md:px-8 lg:px-16 ">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl font-extrabold text-green-600 mb-4">
          Please do not call for accommodation
        </h1>
        <p className="text-gray-700 text-sm sm:text-base">
          You can contact the temple authorities at the given contact
          numbers/e-mail addresses. We cannot confirm that the email
          addresses/telephone numbers are current, nor can we guarantee you
          will receive a reply from them.
        </p>
      </div>

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-2">Contact Details of Temples</h2>
        <p className="text-gray-700 text-base">
          Devotees can also contact authorities of the various temples to Shri
          Mahalasa Narayani at the following addresses:
        </p>
      </div>

      {/* Temple Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templeAddress.map((temple, idx) => (
          <div
            key={idx}
            className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-green-600 mb-3">
              {temple.title}
            </h3>
            <p className="text-gray-700">{temple.add1}</p>
            <p className="text-gray-700">{temple.add2}</p>
            <p className="text-gray-700">{temple.add3}</p>
            {temple.add4 && <p className="text-gray-700">{temple.add4}</p>}
            {temple.add5 && (
              <p className="text-blue-600 underline break-words">{temple.add5}</p>
            )}
            {temple.add6 && (
              <p className="text-gray-700 break-words">{temple.add6}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
