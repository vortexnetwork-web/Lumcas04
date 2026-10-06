/**
 * Lumcas Realtor and Properties Limited - Master Configuration
 * All editable site content, media links, and properties are maintained here.
 */

export interface PropertyItem {
  id: string;
  name: string;
  tagline: string;
  location: string;
  price: string;
  titleType: string;
  status: "Available" | "Selling Fast" | "Limited Units";
  gradient: string;
  image?: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "Home" | "Building2" | "TrendingUp" | "MapPin" | "Briefcase" | "Sprout";
  tag: string;
  span: "col-span-1" | "col-span-1 md:col-span-2" | "col-span-1 md:col-span-3";
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
}

export const CONFIG = {
  // Replace with your direct MP4 video link or keep as placeholder
  VIDEO_URL: "PASTE_VIDEO_LINK",
  // Backup demo video for preview if VIDEO_URL is untouched
  DEMO_VIDEO_FALLBACK: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",

  // Replace with direct hosted logo URL if needed, or leave to use native vector emblem
  LOGO_URL: "PASTE_LOGO_LINK",

  // Company Brand Details
  company: {
    name: "Lumcas Realtor and Properties Limited",
    shortName: "Lumcas",
    tagline: "Your Next Home Starts Here",
    subtext: "Verified properties and estates, with direct WhatsApp support",
    phoneDisplay: "0911 833 1382",
    phoneRaw: "+2349118331382",
    whatsappNumber: "2349118331382",
    email: "Lumcasrealtorandpropertyltd@gmail.com",
    address: "Lekki-Epe Expressway, Lagos State, Nigeria",
    googleMapsUrl: "https://maps.app.goo.gl/H3saRQCmej2LMMZz8",
    socials: {
      facebook: "https://web.facebook.com/lumcasrealtorandpropertylimited/",
      instagram: "https://www.instagram.com/lumcas_properties/",
      tiktok: "https://www.tiktok.com/@lumcasrealtorandproperty"
    }
  },

  // Hero Quick Statistics
  heroStats: [
    { target: 7, label: "Featured Estates", suffix: "+" },
    { target: 100, label: "Verified Titles", suffix: "%" },
    { target: 24, label: "Fast WhatsApp Support", suffix: "/7" }
  ],

  // About Section Statistics
  aboutStats: [
    { target: 7, label: "Prime Gated Estates", suffix: "+" },
    { target: 100, label: "Title Due Diligence", suffix: "%" },
    { target: 1000, label: "Plots Allocated & Titled", suffix: "+" }
  ],

  // 7 Featured Estates
  properties: [
    {
      id: "galaxy-estate",
      name: "Galaxy Estate",
      tagline: "Ultra-modern architectural excellence in a high-growth corridor",
      location: "Ibeju-Lekki / Epe Corridor, Lagos",
      price: "From ₦6,500,000 / Plot",
      titleType: "Governor's Consent in View / Registered Survey",
      status: "Available",
      gradient: "from-[#8B1FD1] via-[#5B1A9E] to-[#2B0952]",
      image: "",
      features: ["100% Dry Land", "Instant Plot Allocation", "Perimeter Security"]
    },
    {
      id: "lumcas-city-estate",
      name: "Lumcas City Estate",
      tagline: "Flagship master-planned smart community with world-class infrastructure",
      location: "Prime Epe Expressway, Lagos",
      price: "From ₦8,000,000 / Plot",
      titleType: "Certificate of Occupancy (C of O)",
      status: "Available",
      gradient: "from-[#7215AE] via-[#481280] to-[#1E0538]",
      image: "",
      features: ["Paved Access Roads", "24/7 Smart Surveillance", "Recreational Hub"]
    },
    {
      id: "victoria-garden-city",
      name: "Victoria Garden City",
      tagline: "Serene, prestigious living designed for generational family wealth",
      location: "Lekki Peninsula Coastal Axis",
      price: "From ₦12,500,000 / Plot",
      titleType: "Governor's Consent",
      status: "Available",
      gradient: "from-[#9D26EB] via-[#6A16B5] to-[#340760]",
      image: "",
      features: ["Waterfront Vicinity", "Central Drainage System", "Clean Potable Water"]
    },
    {
      id: "pinnacle-city-estate",
      name: "Pinnacle City Estate",
      tagline: "High-yield commercial and luxury residential investment paradise",
      location: "Fast-developing Industrial Free Trade Zone Hub",
      price: "From ₦7,200,000 / Plot",
      titleType: "Freehold & Deed of Assignment",
      status: "Available",
      gradient: "from-[#8B1FD1] via-[#6318AB] to-[#2D0954]",
      image: "",
      features: ["Rapid Capital Appreciation", "Solar Street Lights", "Commercial Zone"]
    },
    {
      id: "elora-garden-city",
      name: "Elora Garden City",
      tagline: "Lush botanical ambiance tailored for sustainable eco-luxury living",
      location: "Nature Green Belt, Epe Environs",
      price: "From ₦5,800,000 / Plot",
      titleType: "Registered Survey & Excision",
      status: "Available",
      gradient: "from-[#A832F5] via-[#751CBD] to-[#380A68]",
      image: "",
      features: ["Eco Park & Gardens", "Peaceful Suburban Layout", "Flexible 12-Month Plan"]
    },
    {
      id: "peace-palace-estate",
      name: "Peace Palace Estate",
      tagline: "Royal sanctuary of calm, privacy, and guarded security",
      location: "Established Residential Axis, Lagos Suburbs",
      price: "From ₦9,000,000 / Plot",
      titleType: "Gazette / Registered Title",
      status: "Available",
      gradient: "from-[#7F16C5] via-[#520F8F] to-[#240342]",
      image: "",
      features: ["Fully Gated Access", "Underground Electrification", "High Return on Investment"]
    },
    {
      id: "coastal-city-estate",
      name: "Coastal City Estate",
      tagline: "Scenic beachfront breeze with immense tourism and rental appreciation",
      location: "Atlantic Coastal Highway Zone",
      price: "From ₦11,000,000 / Plot",
      titleType: "Government Allocated C of O",
      status: "Available",
      gradient: "from-[#8B1FD1] via-[#5B1A9E] to-[#1F0736]",
      image: "",
      features: ["Coastal Boulevard View", "Tourist Resort Proximity", "Pristine White Sands"]
    }
  ] as PropertyItem[],

  // Bento Services
  services: [
    {
      id: "property-sales",
      title: "Property Sales",
      description: "Direct acquisition of verified luxury homes, residential duplexes, and commercial properties with zero broker disputes.",
      iconName: "Home",
      tag: "Direct Ownership",
      span: "col-span-1 md:col-span-2"
    },
    {
      id: "estate-development",
      title: "Estate Development",
      description: "From virgin land clearing to master-planned infrastructures, modern access roads, drainage systems, and estate security.",
      iconName: "Building2",
      tag: "Infrastructure",
      span: "col-span-1"
    },
    {
      id: "property-investment",
      title: "Property Investment",
      description: "High-yield real estate investment advisory yielding up to 35-45% annual capital appreciation in fast-growing Nigerian corridors.",
      iconName: "TrendingUp",
      tag: "Wealth Building",
      span: "col-span-1"
    },
    {
      id: "land-sales",
      title: "Land Sales",
      description: "Genuine dry parcels of land with clear title documentation (C of O, Gazette, Governor's Consent, Excision) free from encumbrances.",
      iconName: "MapPin",
      tag: "Verified Titles",
      span: "col-span-1 md:col-span-2"
    },
    {
      id: "real-estate-consultancy",
      title: "Real Estate Consultancy",
      description: "Professional portfolio guidance, legal title searches, valuation reports, and diaspora investor facilitation.",
      iconName: "Briefcase",
      tag: "Legal Advisory",
      span: "col-span-1"
    },
    {
      id: "farm-farmland-investment",
      title: "Farm / Farmland Investment",
      description: "Expansive fertile agricultural land parcels for commercial farming, agro-processing, and long-term landbanking reserves.",
      iconName: "Sprout",
      tag: "Agro Assets",
      span: "col-span-1 md:col-span-2"
    }
  ] as ServiceItem[],

  // Why Choose Us (01 - 06)
  whyChooseUs: [
    {
      number: "01",
      title: "Verified & Documented Properties",
      description: "Every plot undergoes meticulous legal searches, survey charting, and verification to eliminate encumbrance or ownership dispute."
    },
    {
      number: "02",
      title: "Transparent Pricing",
      description: "No hidden charges, unforeseen development levies, or third-party surcharges. What you see is what you pay."
    },
    {
      number: "03",
      title: "Prime Growth Locations",
      description: "Our estates are strictly situated along booming economic corridors near major federal infrastructure projects and expressways."
    },
    {
      number: "04",
      title: "Professional Guidance",
      description: "Experienced property consultants walk you through documentation, title searches, physical inspections, and deed signing."
    },
    {
      number: "05",
      title: "Flexible Payment Options",
      description: "Convenient payment plans spanning 3 to 12 months with low initial deposits, making high-end property ownership accessible."
    },
    {
      number: "06",
      title: "Responsive WhatsApp Support",
      description: "Direct instant communication with licensed realtors for rapid inspection scheduling, videos, documents, and updates."
    }
  ] as WhyChooseItem[]
};

export const getWhatsAppLink = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.company.whatsappNumber}?text=${encoded}`;
};
