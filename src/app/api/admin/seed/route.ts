import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { requireAdmin, unauthorized } from "@/lib/apiHelpers";
import Temple from "@/models/Temple";
import News from "@/models/News";
import Slide from "@/models/Slide";
import Event from "@/models/Event";
import GalleryImage from "@/models/GalleryImage";

const TEMPLES = [
  { name: "Shree Mahalasa Narayani Temple, Mardol", location: "Mardol, Ponda, Goa", established: "17th Century", significance: "Original and primary temple after migration from Verna. The most popular temple, over 450 years old.", features: ["Main sanctum with original idol", "Traditional Goan architecture", "Daily elaborate rituals", "Major festival celebrations"], category: "india", imageUrl: "", isActive: true, order: 1 },
  { name: "Shree Mahalasa Narayani Temple, Konchady", location: "Konchady, Mangalore, Karnataka", established: "1987", significance: "Established by devotees who migrated from Goa to Mangalore.", features: ["Modern temple complex", "Community hall", "Vedic study center", "Cultural programs"], category: "india", imageUrl: "", isActive: true, order: 2 },
  { name: "Shree Mahalasa Narayani Temple, Basrur", location: "Basrur, Dakshina Kannada, Karnataka", established: "16th Century", significance: "One of the oldest temples, over 400 years old. Important coastal Karnataka heritage site.", features: ["Ancient architecture", "Historical artifacts", "Traditional rituals", "Coastal heritage"], category: "india", imageUrl: "", isActive: true, order: 3 },
  { name: "Shree Mahalasa Narayani Temple, Kumta", location: "Kumta, Uttara Kannada, Karnataka", established: "Ancient", significance: "Ancient temple serving the Kumta Konkani community.", features: ["Traditional rituals", "Community events", "Annual festivals"], category: "india", imageUrl: "", isActive: true, order: 4 },
  { name: "Shree Mahalasa Narayani Temple, Harikhandige", location: "Harikhandige, Udupi, Karnataka", established: "Ancient", significance: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige - a prominent temple in Udupi district.", features: ["Daily Puja", "Satsang every Sunday", "Datta Pooja every Thursday", "Prasadam"], category: "india", imageUrl: "", isActive: true, order: 5 },
  { name: "Shree Mahalasa Temple, Mumbai", location: "Dadar, Mumbai, Maharashtra", established: "1950s", significance: "Serves the large Konkani community in Mumbai.", features: ["Urban temple complex", "Community services", "Cultural center", "Educational programs"], category: "india", imageUrl: "", isActive: true, order: 6 },
  { name: "Shree Mahalasa Temple, Karkal", location: "Karkal, Udupi District, Karnataka", established: "18th Century", significance: "Important pilgrimage center in coastal Karnataka.", features: ["Unique architectural style", "Annual chariot festival", "Devotee accommodation", "Spiritual discourses"], category: "india", imageUrl: "", isActive: true, order: 7 },
  { name: "Shree Mahalasa Temple, Pune", location: "Pune, Maharashtra", established: "1960s", significance: "Serves migrant Konkani families in Pune.", features: ["Modern facilities", "Language classes", "Cultural preservation", "Youth programs"], category: "india", imageUrl: "", isActive: true, order: 8 },
  { name: "Shree Mahalasa Temple, Madangeri", location: "Madangeri, Karnataka", established: "Ancient", significance: "Traditional temple serving the local Konkani community.", features: ["Daily Puja", "Traditional rituals", "Festival celebrations"], category: "india", imageUrl: "", isActive: true, order: 9 },
  { name: "Shree Mahalasa Temple, Moodbidri", location: "Moodbidri, Dakshina Kannada, Karnataka", established: "Ancient", significance: "Jain and Hindu heritage town temple.", features: ["Heritage site", "Traditional architecture", "Cultural events"], category: "india", imageUrl: "", isActive: true, order: 10 },
  { name: "Mahalasa Temple, USA", location: "California, USA", established: "", significance: "Serving the Konkani diaspora community in the United States.", features: ["Community events", "Cultural programs", "Festivals"], category: "international", imageUrl: "", isActive: true, order: 11 },
  { name: "Mahalasa Temple, UK", location: "London, UK", established: "", significance: "Serving the European Konkani devotees.", features: ["Community services", "Cultural preservation"], category: "international", imageUrl: "", isActive: true, order: 12 },
  { name: "Mahalasa Temple, Canada", location: "Toronto, Canada", established: "", significance: "Serving the North American Konkani community.", features: ["Community events", "Youth programs"], category: "international", imageUrl: "", isActive: true, order: 13 },
  { name: "Mahalasa Temple, Australia", location: "Melbourne, Australia", established: "", significance: "Serving the Australian Hindu community.", features: ["Community events", "Cultural programs"], category: "international", imageUrl: "", isActive: true, order: 14 },
];

const NEWS = [
  { title: "SHRI GURU CHARITHRA", content: "The Holy Granth Shri Guru Charithra authored by Guruji Shri Suresh J. Pai is now available in English, Kannada and Marathi. To get your copy please call on # No 8970414801.", imageUrl: "", publishedAt: "", isActive: true, order: 1 },
  { title: "Ghar Wapsi: A Miracle", content: "A remarkable spiritual journey and return to roots. Read the inspiring story of transformation and divine grace.", imageUrl: "", publishedAt: "", isActive: true, order: 2 },
  { title: "Panchang in Inbox", content: "Get the daily Panchang delivered to your e-mail inbox. Click here to subscribe and stay connected with temple events.", imageUrl: "", publishedAt: "", isActive: true, order: 3 },
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
  { title: "Temple Header", imageUrl: "/header-image.jpg", alt: "Temple Architecture", category: "temple", isActive: true, order: 3 },
];

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
  await connectDB();

  const results: Record<string, number> = {};

  // Seed temples if empty
  const templeCount = await Temple.countDocuments();
  if (templeCount === 0) {
    await Temple.insertMany(TEMPLES);
    results.temples = TEMPLES.length;
  } else {
    results.temples = 0;
  }

  // Seed news if empty
  const newsCount = await News.countDocuments();
  if (newsCount === 0) {
    await News.insertMany(NEWS);
    results.news = NEWS.length;
  } else {
    results.news = 0;
  }

  // Seed slides if empty
  const slideCount = await Slide.countDocuments();
  if (slideCount === 0) {
    await Slide.insertMany(SLIDES);
    results.slides = SLIDES.length;
  } else {
    results.slides = 0;
  }

  // Seed events if empty
  const eventCount = await Event.countDocuments();
  if (eventCount === 0) {
    await Event.insertMany(EVENTS);
    results.events = EVENTS.length;
  } else {
    results.events = 0;
  }

  // Seed gallery if empty
  const galleryCount = await GalleryImage.countDocuments();
  if (galleryCount === 0) {
    await GalleryImage.insertMany(GALLERY);
    results.gallery = GALLERY.length;
  } else {
    results.gallery = 0;
  }

  return NextResponse.json({
    success: true,
    message: "Seed complete. Counts show newly inserted records (0 = collection already had data).",
    inserted: results,
  });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Database error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
