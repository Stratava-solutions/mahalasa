import { readFileSync } from "fs";
import { resolve } from "path";
import mongoose from "mongoose";

// Load .env.local manually
const envPath = resolve(process.cwd(), ".env.local");
const envContent = readFileSync(envPath, "utf-8");
const MONGODB_URI = envContent
  .split("\n")
  .find((l) => l.startsWith("MONGODB_URI="))
  ?.split("=")
  .slice(1)
  .join("=")
  .trim();

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI not found in .env.local");
  process.exit(1);
}

function fixMongoUri(uri) {
  const schemeEnd = uri.indexOf("://") + 3;
  const afterScheme = uri.slice(schemeEnd);
  const lastAt = afterScheme.lastIndexOf("@");
  if (lastAt === -1) return uri;
  const userinfo = afterScheme.slice(0, lastAt);
  const rest = afterScheme.slice(lastAt + 1);
  const colonIdx = userinfo.indexOf(":");
  if (colonIdx === -1) return uri;
  const user = userinfo.slice(0, colonIdx);
  const password = userinfo.slice(colonIdx + 1).replace(/@/g, "%40");
  return `${uri.slice(0, schemeEnd)}${user}:${password}@${rest}`;
}

const FIXED_URI = fixMongoUri(MONGODB_URI);

// ── Schemas ────────────────────────────────────────────────────────────────
const templeSchema = new mongoose.Schema({
  name: String, location: String, established: String, significance: String,
  features: [String], category: String, imageUrl: String, isActive: Boolean, order: Number,
}, { timestamps: true });

const newsSchema = new mongoose.Schema({
  title: String, content: String, imageUrl: String, publishedAt: String,
  isActive: Boolean, order: Number,
}, { timestamps: true });

const slideSchema = new mongoose.Schema({
  date: String, badge: String, badgeColor: String, title: String,
  description: String, time: String, imageUrl: String, isActive: Boolean, order: Number,
}, { timestamps: true });

const eventSchema = new mongoose.Schema({
  title: String, description: String, date: String, time: String,
  location: String, imageUrl: String, category: String, isActive: Boolean,
}, { timestamps: true });

const gallerySchema = new mongoose.Schema({
  title: String, imageUrl: String, alt: String, category: String,
  isActive: Boolean, order: Number,
}, { timestamps: true });

const pageContentSchema = new mongoose.Schema({
  page: String, key: String,
  title: { type: String, default: "" }, subtitle: { type: String, default: "" },
  body: { type: String, default: "" }, imageUrl: { type: String, default: "" },
  imageAlt: { type: String, default: "" }, order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const Temple     = mongoose.models.Temple     || mongoose.model("Temple",     templeSchema);
const News       = mongoose.models.News       || mongoose.model("News",       newsSchema);
const Slide      = mongoose.models.Slide      || mongoose.model("Slide",      slideSchema);
const Event      = mongoose.models.Event      || mongoose.model("Event",      eventSchema);
const GalleryImage = mongoose.models.GalleryImage || mongoose.model("GalleryImage", gallerySchema);
const PageContent  = mongoose.models.PageContent  || mongoose.model("PageContent",  pageContentSchema);

// ── Seed data ──────────────────────────────────────────────────────────────
const TEMPLES = [
  { name: "Shree Mahalasa Narayani Temple, Mardol", location: "Mardol, Ponda, Goa", established: "17th Century", significance: "Original and primary temple after migration from Verna. The most popular temple, over 450 years old.", features: ["Main sanctum with original idol", "Traditional Goan architecture", "Daily elaborate rituals", "Major festival celebrations"], category: "india", imageUrl: "", isActive: true, order: 1 },
  { name: "Shree Mahalasa Narayani Temple, Konchady", location: "Konchady, Mangalore, Karnataka", established: "1987", significance: "Established by devotees who migrated from Goa to Mangalore.", features: ["Modern temple complex", "Community hall", "Vedic study center", "Cultural programs"], category: "india", imageUrl: "", isActive: true, order: 2 },
  { name: "Shree Mahalasa Narayani Temple, Basrur", location: "Basrur, Dakshina Kannada, Karnataka", established: "16th Century", significance: "One of the oldest temples, over 400 years old. Important coastal Karnataka heritage site.", features: ["Ancient architecture", "Historical artifacts", "Traditional rituals", "Coastal heritage"], category: "india", imageUrl: "", isActive: true, order: 3 },
  { name: "Shree Mahalasa Narayani Temple, Kumta", location: "Kumta, Uttara Kannada, Karnataka", established: "Ancient", significance: "Ancient temple serving the Kumta Konkani community.", features: ["Traditional rituals", "Community events", "Annual festivals"], category: "india", imageUrl: "", isActive: true, order: 4 },
  { name: "Shree Mahalasa Narayani Devi Kshetra, Harikhandige", location: "Harikhandige, Udupi, Karnataka", established: "Ancient", significance: "A prominent temple in Udupi district known for weekly Satsang and Datta Pooja.", features: ["Daily Puja", "Satsang every Sunday", "Datta Pooja every Thursday", "Anna Santarpana", "Prasadam"], category: "india", imageUrl: "", isActive: true, order: 5 },
  { name: "Shree Mahalasa Temple, Mumbai", location: "Dadar, Mumbai, Maharashtra", established: "1950s", significance: "Serves the large Konkani community in Mumbai.", features: ["Urban temple complex", "Community services", "Cultural center", "Educational programs"], category: "india", imageUrl: "", isActive: true, order: 6 },
  { name: "Shree Mahalasa Temple, Karkal", location: "Karkal, Udupi District, Karnataka", established: "18th Century", significance: "Important pilgrimage center in coastal Karnataka.", features: ["Unique architectural style", "Annual chariot festival", "Devotee accommodation", "Spiritual discourses"], category: "india", imageUrl: "", isActive: true, order: 7 },
  { name: "Shree Mahalasa Temple, Pune", location: "Pune, Maharashtra", established: "1960s", significance: "Serves migrant Konkani families in Pune.", features: ["Modern facilities", "Language classes", "Cultural preservation", "Youth programs"], category: "india", imageUrl: "", isActive: true, order: 8 },
  { name: "Shree Mahalasa Temple, Madangeri", location: "Madangeri, Karnataka", established: "Ancient", significance: "Traditional temple serving the local Konkani community.", features: ["Daily Puja", "Traditional rituals", "Festival celebrations"], category: "india", imageUrl: "", isActive: true, order: 9 },
  { name: "Shree Mahalasa Temple, Moodbidri", location: "Moodbidri, Dakshina Kannada, Karnataka", established: "Ancient", significance: "Jain and Hindu heritage town temple.", features: ["Heritage site", "Traditional architecture", "Cultural events"], category: "india", imageUrl: "", isActive: true, order: 10 },
  { name: "Shree Mahalasa Temple, Shirva", location: "Shirva, Udupi District, Karnataka", established: "Ancient", significance: "Traditional Mahalasa temple in Udupi region.", features: ["Daily Puja", "Annual festivals"], category: "india", imageUrl: "", isActive: true, order: 11 },
  { name: "Shree Mahalasa Temple, Mudgeri", location: "Mudgeri, Karnataka", established: "Ancient", significance: "Serving the local Konkani devotees.", features: ["Traditional rituals", "Community events"], category: "india", imageUrl: "", isActive: true, order: 12 },
  { name: "Mahalasa Temple, USA", location: "California, USA", established: "", significance: "Serving the Konkani diaspora community in the United States.", features: ["Community events", "Cultural programs", "Festivals"], category: "international", imageUrl: "", isActive: true, order: 13 },
  { name: "Mahalasa Temple, UK", location: "London, UK", established: "", significance: "Serving the European Konkani devotees.", features: ["Community services", "Cultural preservation"], category: "international", imageUrl: "", isActive: true, order: 14 },
  { name: "Mahalasa Temple, Canada", location: "Toronto, Canada", established: "", significance: "Serving the North American Konkani community.", features: ["Community events", "Youth programs"], category: "international", imageUrl: "", isActive: true, order: 15 },
  { name: "Mahalasa Temple, Australia", location: "Melbourne, Australia", established: "", significance: "Serving the Australian Hindu community.", features: ["Community events", "Cultural programs"], category: "international", imageUrl: "", isActive: true, order: 16 },
];

const NEWS = [
  { title: "SHRI GURU CHARITHRA", content: "The Holy Granth Shri Guru Charithra authored by Guruji Shri Suresh J. Pai is now available in English, Kannada and Marathi. To get your copy please call on # No 8970414801.", imageUrl: "", publishedAt: "", isActive: true, order: 1 },
  { title: "Ghar Wapsi: A Miracle", content: "A remarkable spiritual journey and return to roots. Read the inspiring story of transformation and divine grace.", imageUrl: "", publishedAt: "", isActive: true, order: 2 },
  { title: "Panchang in Inbox", content: "Get the daily Panchang delivered to your e-mail inbox. Subscribe and stay connected with temple events.", imageUrl: "", publishedAt: "", isActive: true, order: 3 },
];

const SLIDES = [
  { date: "Every Thursday", badge: "DATTA POOJA", badgeColor: "bg-green-500", title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige", description: "Special Pooja to Lord Shri Gurudatta by devotees.", time: "at 7:00 am", imageUrl: "/suresh.jpg", isActive: true, order: 1 },
  { date: "Every Sunday", badge: "SATSANG", badgeColor: "bg-green-500", title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige", description: "Satsang with His Holiness Guruji Shri Suresh J Pai", time: "at 11:30 am", imageUrl: "/suresh.jpg", isActive: true, order: 2 },
  { date: "Every Sunday afternoon", badge: "ANNA SANTARPANA", badgeColor: "bg-orange-500", title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige", description: "Anna Santarpana (free meal) served to all devotees.", time: "afternoon", imageUrl: "", isActive: true, order: 3 },
  { date: "Every Sankashti", badge: "GANESHA POOJA", badgeColor: "bg-red-500", title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige", description: "Shri Ganesha Pooja at night followed by Arghyam by devotees.", time: "night", imageUrl: "", isActive: true, order: 4 },
];

const EVENTS = [
  { title: "Tulasi Poojan", description: "Devotees perform Tulasi Poojan at the temple.", date: "November 5, 2025", time: "All day", location: "Harikhandige Temple", imageUrl: "", category: "festival", isActive: true },
  { title: "Champa Shashti", description: "Special celebration for Champa Shashti.", date: "November 26, 2025", time: "All day", location: "Harikhandige Temple", imageUrl: "", category: "festival", isActive: true },
  { title: "Shri Guru Dattatreya Jayanthi", description: "Celebrating Shri Guru Dattatreya Jayanthi with special puja and bhajans.", date: "December 4, 2025", time: "All day", location: "All Temples", imageUrl: "", category: "festival", isActive: true },
  { title: "Weekly Satsang", description: "Satsang by His Holiness Guruji Shri Suresh J Pai every Sunday.", date: "Every Sunday", time: "11:30 am", location: "Harikhandige Temple", imageUrl: "/suresh.jpg", category: "satsang", isActive: true },
  { title: "Shri Gurudatta Paduka Pooja", description: "Special Pooja to Lord Shri Gurudatta at Datta Peetha.", date: "Every Thursday", time: "7:00 am", location: "Harikhandige Temple", imageUrl: "", category: "pooja", isActive: true },
];

const GALLERY = [
  { title: "Sacred Deity", imageUrl: "/god.jpg", alt: "Sacred Deity View", category: "deity", isActive: true, order: 1 },
  { title: "Divine Darshan", imageUrl: "/god2.jpg", alt: "Divine Darshan", category: "deity", isActive: true, order: 2 },
  { title: "Temple Banner", imageUrl: "/header-image.jpg", alt: "Temple Architecture", category: "temple", isActive: true, order: 3 },
];

const PAGE_CONTENT = [
  // ── shri-guru-charitra ──────────────────────────────────────────────────
  { page: "shri-guru-charitra", key: "header-image",        title: "", body: "", imageUrl: "/guru_chaitra.jpg",    order: 0,  isActive: true },
  { page: "shri-guru-charitra", key: "page-title",          title: "SHRI GURU CHARITRA", body: "", imageUrl: "",   order: 1,  isActive: true },
  { page: "shri-guru-charitra", key: "book-cover",          title: "", body: "", imageUrl: "/guru_chaitra_2.jpg",  order: 2,  isActive: true },
  { page: "shri-guru-charitra", key: "book-cover-caption",  title: "", body: "SHRI MAHAALASAA NAARAAYANI DEVI KSHETRA, HARIKHANDIGE", imageUrl: "", order: 3, isActive: true },
  { page: "shri-guru-charitra", key: "description",         title: "", imageUrl: "", order: 4, isActive: true,
    body: 'The "Shri Guru Charitra" edited and authored by revered Shri Suresh J Pai Guruji has been published in English, Kannada and Marathi, which is available to the Devotees who have spread across the Globe. This book elaborately speaks about the divine incarnation of Shri Datta Guru, His divine glories and avatars (i.e Shri Shripad Shri Vallabha and Shri Narasimha Saraswati Swamiji). In this treasure, an attempt is made to highlight all the aspects governing the relationship between Guru and Shishya, Guru\'s significance in the spiritual life, the duties and obligations of disciples towards Guru and other matters related to spiritual discipline.' },
  { page: "shri-guru-charitra", key: "description-2",       title: "", imageUrl: "", order: 5, isActive: true,
    body: "It is a must for aspirants as it equips them with spiritual knowledge and leads them on the righteous path. The book is available to be couriered to any part of the world. To get your copy, WhatsApp us at 8970414801 or mail us at sureshjpai@gmail.com" },
  { page: "shri-guru-charitra", key: "scene-image",         title: "", body: "", imageUrl: "/guru_chaitra_3.jpg",  order: 6,  isActive: true },
  { page: "shri-guru-charitra", key: "scene-caption",       title: "", body: "Spiritual Teaching Scene",          imageUrl: "", order: 7, isActive: true },
  { page: "shri-guru-charitra", key: "nature-image",        title: "", body: "", imageUrl: "/guru_chaitra_4.jpg",  order: 8,  isActive: true },
  { page: "shri-guru-charitra", key: "nature-caption",      title: "", body: "Lord Dattatreya in Nature",         imageUrl: "", order: 9, isActive: true },
  { page: "shri-guru-charitra", key: "details-title",       title: "Book Details", body: "", imageUrl: "",        order: 10, isActive: true },
  { page: "shri-guru-charitra", key: "details",             title: "", imageUrl: "", order: 11, isActive: true,
    body: "• Author: His Holiness Guruji Shri Suresh J Pai\n• Languages Available: English, Kannada, and Marathi\n• Subject: Divine incarnation of Shri Datta Guru and His avatars\n• Features: Detailed footnotes for better understanding\n• Availability: Worldwide courier service available" },
  { page: "shri-guru-charitra", key: "order-title",         title: "How to Order", body: "", imageUrl: "",        order: 12, isActive: true },
  { page: "shri-guru-charitra", key: "order-info",          title: "", imageUrl: "", order: 13, isActive: true,
    body: "WhatsApp: 8970414801\nEmail: sureshjpai@gmail.com\n\nAvailable for courier delivery worldwide" },

  // ── charitra ─────────────────────────────────────────────────────────────
  { page: "charitra", key: "page-title",       title: "The Charitra of Goddess Shri Mahalasa", body: "", imageUrl: "", order: 0, isActive: true },
  { page: "charitra", key: "cover-image",      title: "", body: "", imageUrl: "/devi_maha.jpg",      order: 1, isActive: true },
  { page: "charitra", key: "cover-caption",    title: "", body: "Shri Mahalasa Narayani's Charitra", imageUrl: "", order: 2, isActive: true },
  { page: "charitra", key: "intro",            title: "", imageUrl: "", order: 3, isActive: true,
    body: "The Charitra of Goddess Shri Mahalasa Narayani is considered as the Bhagwad Gita for Kulavis and other followers of Shri Mahalasa Narayani.\n\nA Parayan or proper reading of the book not only gives one peace of mind, but it is also said to have brought out many devotees from their state of distress. Many have said that this book changed their lives for the better.\n\nThe Charitra is available in Kannada, Marathi and English editions." },
  { page: "charitra", key: "book-image",       title: "", body: "", imageUrl: "/chaitra.jpg",          order: 4, isActive: true },
  { page: "charitra", key: "book-caption",     title: "", body: "The Charitra of Mahalasa Narayani in English", imageUrl: "", order: 5, isActive: true },
  { page: "charitra", key: "how-to-get",       title: "", imageUrl: "", order: 6, isActive: true,
    body: "To get the Charitra, one can contact Shri Mahalasa Narayani temple at Harikhandige, Mardol and Kumta.\n\nOn WhatsApp: 8970414801\nOr email: sureshjpai@gmail.com" },
  { page: "charitra", key: "guidelines-title", title: "Guidelines for reading of the Charitra", body: "", imageUrl: "", order: 7, isActive: true },
  { page: "charitra", key: "guidelines",       title: "", imageUrl: "", order: 8, isActive: true,
    body: "• Read this book with purity of thought.\n• Anyone can read the Charitra.\n• A word from a Guru would have far-reaching effects.\n• There is no hard and fast rule that the Parayan should begin on any particular day. However, it is best if it is read daily.\n• The Charitra can also be read on Tuesdays, Fridays, Asthami, Ekadashi, Dwadashi and on all days of Navaratri.\n• This book should be read with a commitment, pure mind, and utter devotion.\n• One should have satvik thoughts and satvik food." },
  { page: "charitra", key: "note-image",       title: "", body: "", imageUrl: "/small_gold_god.png",    order: 9, isActive: true },
  { page: "charitra", key: "special-note",     title: "", imageUrl: "", order: 10, isActive: true,
    body: "The benefits of reading the Charitra will be manifold and immediate if read with faith, utter devotion, happiness and concentration." },
  { page: "charitra", key: "pricing-title",    title: "Cover Price", body: "", imageUrl: "",             order: 11, isActive: true },
  { page: "charitra", key: "pricing",          title: "", body: "• Kannada: Rs 140\n• Marathi: Rs 215\n• English: Rs 150", imageUrl: "", order: 12, isActive: true },
  { page: "charitra", key: "order-title",      title: "Order a Charitra", body: "", imageUrl: "",         order: 13, isActive: true },
  { page: "charitra", key: "order-info",       title: "", imageUrl: "", order: 14, isActive: true,
    body: "On WhatsApp: 8970414801\nEmail: sureshjpai@gmail.com\n\nBank Account Details:\nShri Mahalasa Narayani Devi Kshetra\nCanara Bank, A/c. Perdoor: 0130200083045  IFSC: CNRB0010130\n\nShri Mahalasa Narayani Devi Kshetra\nUnion Bank, A/c. Manipal: 520101232336071  IFSC: UBIN0901288\n\nKindly intimate us after remittance." },
  { page: "charitra", key: "new-charitra-image", title: "", body: "", imageUrl: "/god2.jpg",              order: 15, isActive: true },
  { page: "charitra", key: "author-title",     title: "About the Author", body: "", imageUrl: "",         order: 16, isActive: true },
  { page: "charitra", key: "author-image",     title: "", body: "", imageUrl: "/suresh.jpg",              order: 17, isActive: true },
  { page: "charitra", key: "author-caption",   title: "", body: "Guruji Shri Suresh J Pai",              imageUrl: "", order: 18, isActive: true },
  { page: "charitra", key: "author-bio",       title: "", imageUrl: "", order: 19, isActive: true,
    body: "His Holiness Guruji Shri Suresh J Pai, the Dharmadarshi of Shri Mahalasa Narayani Devi Kshetra, Harikhandige, is the author of The Charitra of Shri Mahalasa Narayani.\n\nProf. Pai was a commerce lecturer at a Panaji college and was deeply involved in spiritual activities from a very young age. Guruji's aim is the enlightenment of our society through spiritual awakening.\n\nMother Mahalasa is said to have personally inspired Guruji to pen this path-illuminating magnum opus." },

  // ── chronicles ───────────────────────────────────────────────────────────
  { page: "chronicles", key: "page-title",     title: "The Samudra Manthan", body: "", imageUrl: "", order: 0, isActive: true },
  { page: "chronicles", key: "intro",          title: "", imageUrl: "", order: 1, isActive: true,
    body: "Shri Mahalasa Narayani's story is considered to be directly related to the story of Samudra Manthan or the Churning of the Sea, according to the Bhagwat Purana.\n\nThe Gods and the Asuras (Demons) churned the sea to get back the treasures which got immersed in the sea due to Sage Durvasa's curse. During this churning process emerged the fourteen ratnas (treasures), including Amrut (nectar of life) which could make anyone who drinks it immortal.\n\nThere was a fight between the Gods and demons. In order to help the Gods, Lord Vishnu had to take the avatar (incarnation) of Mohini or the Enchantress.\n\nShe was so beautiful that the eyes of all demons got riveted on her face. In the meanwhile, she distributed Amrut to the Gods and nothing was left for the demons.\n\nShri Mahalasa is another name for Lord Vishnu's Mohini Roopa (incarnation)!" },
  { page: "chronicles", key: "mohini-image",   title: "", body: "", imageUrl: "/roopa_mohini.jpg",   order: 2, isActive: true },
  { page: "chronicles", key: "mohini-caption", title: "", body: "Mohini Roopa — Lord Vishnu's Enchantress Avatar", imageUrl: "", order: 3, isActive: true },
  { page: "chronicles", key: "section-2",      title: "", imageUrl: "", order: 4, isActive: true,
    body: "Shri Mahalasa Narayani is the daughter of Shri Mahalasa (Mohini) and Shiva.\n\nShri Mahalasa Narayani's original temple was at Verna, Goa. This Devi came to Goa from the sea. She is also known as Mhalsa, Mhalasadevi, and Mahalasa Narayani.\n\nDue to the Portuguese Inquisition in Goa, the idol was moved from Verna and re-established at Mardol, Ponda in Goa in the 16th century." },
  { page: "chronicles", key: "temple-image",   title: "", body: "", imageUrl: "/header-image.jpg",   order: 5, isActive: true },
  { page: "chronicles", key: "temple-caption", title: "", body: "Shri Mahalasa Narayani Temple",     imageUrl: "", order: 6, isActive: true },
  { page: "chronicles", key: "section-3",      title: "", imageUrl: "", order: 7, isActive: true,
    body: "The idol at Mardol is considered to be the original and most powerful. The Goddess is depicted as having four arms, holding a chakra (disc), a conch, a lotus, and a mace.\n\nHer temples are spread across Goa, Karnataka, Maharashtra, and internationally, serving the Konkani diaspora worldwide." },

  // ── seva ─────────────────────────────────────────────────────────────────
  { page: "seva", key: "page-title",    title: "Perform Seva to Shri Mahalasa Narayani at Harikhandige, Karnataka", body: "", imageUrl: "", order: 0, isActive: true },
  { page: "seva", key: "intro",         title: "", imageUrl: "", order: 1, isActive: true,
    body: "There are many devotees who wish to perform Seva to the Kuladevata but cannot do so because of the distances and paucity of time. With Her inspirations, we are now bringing to Her Kulavis and other devotees a golden opportunity to offer Sevas to Shri Mahalasa Narayani.\n\nThe Seva will be performed at Shri Mahalasa Narayani's Temple at Harikhandige. The Prasad will be sent to you by post. At Harikhandige, there is no fixed rate since Service to God is not a commercial venture. Please send a Money Order for any amount you wish." },
  { page: "seva", key: "address",       title: "", imageUrl: "", order: 2, isActive: true,
    body: "Dharmadarshi,\nShri Mahalasa Narayani Devi Kshetra,\n41, Shiroor, Harikhandige 576 124.\nUdupi District, Karnataka State.\nINDIA" },
  { page: "seva", key: "bank-details",  title: "", imageUrl: "", order: 3, isActive: true,
    body: "Alternatively, you can transfer the amount to the following accounts:\n\nShri Mahalasa Narayani Devi Kshetra,\nUnion Bank, Manipal Branch.\nA/c No: 520101232336071\nIFSC Code: UBIN0901288\n\nShri Mahalasa Narayani Devi Kshetra,\nCanara Bank, Perdoor Branch.\nA/c No: 0130200083045\nIFSC: CNRB0010130" },
  { page: "seva", key: "upi-image",     title: "", body: "", imageUrl: "/upi.jpg", order: 4, isActive: true },
  { page: "seva", key: "instructions",  title: "", imageUrl: "", order: 5, isActive: true,
    body: "Please inform us by e-mail after this has been done. Please mention your full name, date of birth, sex, Gotra, Janma Rashi & Nakshatra, Seva requested, date of seva, amount you wish to remit, comments, if any, and your full postal address. The Seva will be performed on the date you specify.\n\nSend e-mail to: sureshjpai@gmail.com\nor alternatively, call on WhatsApp number 8970414801 for seva at Harikhandige.\n\nKindly note in case you wish to order seva at Mahalasa Saunsthan, Mardol-Goa contact: 9511214430" },
  { page: "seva", key: "booking-note",  title: "", imageUrl: "", order: 6, isActive: true,
    body: "Please book a Seva at least 10 days in advance so as to enable us to make the necessary arrangements. On receipt of your request and M.O. or successful bank transfer, the Seva will be performed on the date specified by you and the Prasad will be sent by post to the address you have given." },

  // ── invitation ───────────────────────────────────────────────────────────
  { page: "invitation", key: "page-title",        title: "Invitation",              body: "", imageUrl: "", order: 0, isActive: true },
  { page: "invitation", key: "header-text",       title: "", imageUrl: "", order: 1, isActive: true,
    body: "Shree Mahalasa Narayani Temple cordially invites all devotees to participate in our sacred celebrations, daily worship, and spiritual programs." },
  { page: "invitation", key: "sanskrit-verse",    title: "", body: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः", imageUrl: "", order: 2, isActive: true },
  { page: "invitation", key: "verse-translation", title: "", body: "May all beings be happy, may all beings be free from illness", imageUrl: "", order: 3, isActive: true },
  { page: "invitation", key: "schedule-title",    title: "Regular Prayer Schedule", body: "", imageUrl: "", order: 4, isActive: true },
  { page: "invitation", key: "schedule-subtitle", title: "Daily & Weekly Programs", body: "", imageUrl: "", order: 5, isActive: true },
  { page: "invitation", key: "schedule",          title: "", imageUrl: "", order: 6, isActive: true,
    body: "Daily — Mangala Aarti — 5:00 AM\nDaily — Madhyana Aarti — 12:00 PM\nDaily — Sandhya Aarti — 7:00 PM\nTuesday — Devi Puja — 6:00 PM\nFriday — Lakshmi Puja — 6:30 PM\nSaturday — Bhajan Sandhya — 7:30 PM" },
  { page: "invitation", key: "contact-title",     title: "Contact for Invitations", body: "", imageUrl: "", order: 7, isActive: true },
  { page: "invitation", key: "contact-info",      title: "", imageUrl: "", order: 8, isActive: true,
    body: "Temple Office: +91-98765 43210\nEmail: info@mahalasatemple.org\nAddress: Shree Mahalasa Narayani Temple, Mardol, Goa" },

  // ── temple-contacts ──────────────────────────────────────────────────────
  { page: "temple-contacts", key: "page-title", title: "Temple Contacts", body: "", imageUrl: "", order: 0, isActive: true },
  { page: "temple-contacts", key: "intro",      title: "", imageUrl: "", order: 1, isActive: true,
    body: "For any queries related to Seva, Charitra, or general temple information, please contact the respective temples below." },
  { page: "temple-contacts", key: "harikhandige", title: "HARIKHANDIGE", imageUrl: "", order: 2, isActive: true,
    body: "Shri Mahalasa Narayani Devi Kshetra,\n41, Shiroor, Harikhandige 576124.\nUdupi District, Karnataka\nTel: +91 820 2543400 | 97394 86200\nWebsite: http://harikhandige.mahalasa.org\nEmail: sjpai@mahalasa.org" },
  { page: "temple-contacts", key: "basrur",      title: "BASRUR",        imageUrl: "", order: 3, isActive: true,
    body: "Shri Mahalasa Narayani Temple,\nMandikeri, Basrur 576211.\nKundapura Taluk, Udupi District, Karnataka.\nTel: +91 8254 237700\nEmail: malshibasrur@yahoo.com\nWebsite: http://basrur.mahalasa.org" },
  { page: "temple-contacts", key: "konchady",    title: "KONCHADY",      imageUrl: "", order: 4, isActive: true,
    body: "Shri Mahalasa Narayani Temple,\nKonchady, Padavinangady,\nMangalore 575008\nTel: 824 2211400\nEmail: mahalasakonchady@gmail.com\nWebsite: http://konchady.mahalasa.org" },
  { page: "temple-contacts", key: "mardol",      title: "MARDOL",        imageUrl: "", order: 5, isActive: true,
    body: "Shri Mahalasa Saunsthan,\nMardol, Ponda, Goa 403404.\nTel: +91 832 2312058\nEmail: mahalasagoa@gmail.com\nWebsite: http://mardol.mahalasa.org" },
  { page: "temple-contacts", key: "kumta",       title: "KUMTA",         imageUrl: "", order: 6, isActive: true,
    body: "Shri Mahalasa Narayani Temple,\nKumta, Uttara Kannada, Karnataka.\nWebsite: http://kumta.mahalasa.org" },

  // ── policies ─────────────────────────────────────────────────────────────
  { page: "policies", key: "page-title",  title: "Disclaimer & Privacy Policies", body: "", imageUrl: "", order: 0, isActive: true },
  { page: "policies", key: "disclaimer",  title: "Disclaimer", imageUrl: "", order: 1, isActive: true,
    body: "The details provided in this site are purely informative, and we assume no responsibility for any controversy that may arise from the interpretation of the story, history, stotras and stuthis, and other facts given here.\n\nWe claim no originality for information drawn from the Puranas and other ancient texts. It does not claim that the site is an exhaustive compilation of information about Shri Mahalasa Narayani.\n\nHonest efforts have been made to provide comprehensive information for the benefit of devotees.\n\nWe will not be liable for any damages arising in contract, tort or otherwise from the use of or inability to use the site, or any of its contents.\n\nCertain links on the site lead to resources located on servers maintained by third parties over whom we have no control. We accept no responsibility or liability for any of the material contained on those servers." },
  { page: "policies", key: "privacy",    title: "Privacy Policy", imageUrl: "", order: 2, isActive: true,
    body: "We do not collect personal information unless voluntarily provided. Contact form submissions are used only to respond to your inquiry. We do not sell or share your data with third parties.\n\nBy using this website, you consent to our privacy practices as described here." },
  { page: "policies", key: "copyright",  title: "Copyright", imageUrl: "", order: 3, isActive: true,
    body: "All content on this website, including text, images, and graphics, is the property of Shri Mahalasa Narayani Temple unless otherwise stated. Reproduction of content for commercial purposes is strictly prohibited. For personal/educational use, attribution is required." },
];

// ── Run ────────────────────────────────────────────────────────────────────
async function seed() {
  console.log("Connecting to MongoDB…");
  await mongoose.connect(FIXED_URI, { dbName: "mahalasa_admin" });
  console.log("Connected.\n");

  const results = {};

  async function seedCollection(name, Model, data) {
    const count = await Model.countDocuments();
    if (count === 0) {
      await Model.insertMany(data);
      console.log(`✅ ${name}: inserted ${data.length} records`);
      results[name] = data.length;
    } else {
      console.log(`⏭  ${name}: skipped (${count} records already exist)`);
      results[name] = 0;
    }
  }

  async function seedPageContent(name, Model, data) {
    const pages = [...new Set(data.map((d) => d.page))];
    let inserted = 0;
    for (const page of pages) {
      const count = await Model.countDocuments({ page });
      if (count === 0) {
        const pageData = data.filter((d) => d.page === page);
        await Model.insertMany(pageData);
        console.log(`  ✅ ${name}[${page}]: inserted ${pageData.length} records`);
        inserted += pageData.length;
      } else {
        console.log(`  ⏭  ${name}[${page}]: skipped (${count} records already exist)`);
      }
    }
    results[name] = inserted;
  }

  await seedCollection("Temples",     Temple,       TEMPLES);
  await seedCollection("News",        News,         NEWS);
  await seedCollection("Slides",      Slide,        SLIDES);
  await seedCollection("Events",      Event,        EVENTS);
  await seedCollection("Gallery",     GalleryImage, GALLERY);
  await seedPageContent("PageContent", PageContent, PAGE_CONTENT);

  console.log("\nSeed complete:", results);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
