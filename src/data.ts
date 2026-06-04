import { Program, Coach, Transformation, Review, GalleryItem, FAQItem } from "./types";

// Curated dark, gritty premium boxing photography from Unsplash to ensure gorgeous aesthetics
export const PROGRAMS: Program[] = [
  {
    id: "prog-kids",
    title: "Kids Boxing",
    description: "Build self-confidence, physical fitness, respect, and deep self-discipline. Designed for children ages 6 to 11 to learn the absolute basics of boxing technique in a completely safe, fun, and non-contact structured environment.",
    focus: ["Confidence", "Fitness", "Respect", "Discipline"],
    benefits: ["Improves co-ordination & focus", "Builds life confidence", "Instills healthy active habits", "Teaches respect and team camaraderie"],
    schedule: "Mon & Wed at 4:30 PM",
    imgUrl: "kids_boxing" // We'll map this or use generated kids_boxing asset
  },
  {
    id: "prog-teen",
    title: "Teen Boxing Academy",
    description: "Focus on character-building, total body strength, stamina, and real skill development. Helping teenagers ages 12 to 17 build self-belief, navigate stress, find athletic focus, and master the pure science of boxing.",
    focus: ["Self-confidence", "Strength", "Fitness", "Skill development"],
    benefits: ["Stress relief & mental clarity", "Advanced core strength & condition", "Learn technical ring geometry", "Fosters team leadership skills"],
    schedule: "Tue & Thu at 5:00 PM",
    imgUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "prog-adult",
    title: "Adult Boxing Conditioning",
    description: "Designed for individuals looking to shed weight, tone muscle, relieve modern work stress, and master high-speed heavy-bag combinations. High energy, authentic conditioning drills mixed with intense focus-mitt work.",
    focus: ["Weight loss", "Fitness", "Stress relief", "Technique"],
    benefits: ["Burns up to 800+ calories/class", "Intense full-body cardiovascular workout", "Releases built-up muscular stress", "Real non-contact boxing combinations"],
    schedule: "Daily: Morning & Evening Slots",
    imgUrl: "adult_boxing" // Map to generated adult_boxing asset
  },
  {
    id: "prog-beginner",
    title: "Beginner Technical Program",
    description: "Perfect for absolute first-time members. We start from ground zero. You will master the defensive stance, hand wrapping, footwork pivots, and the standard 'One-Two' punches (Jab and Cross). Zero-experience required.",
    focus: ["Stance & Guard", "Pivoting Footwork", "Basic Striking", "Safe Sparring Intro"],
    benefits: ["Welcoming, zero-ego environment", "Dedicated slow-paced instruction", "Build a rock-solid technical baseline", "Instantly elevates ring confidence"],
    schedule: "Every Day at 6:00 PM",
    imgUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "prog-competitive",
    title: "Elite Competitive Boxing",
    description: "For serious, registered athletes targeting regional titles and undercard matches. High stakes card sparring, aggressive tactical match preparation, and direct coaching sanctioned under England Boxing guidelines.",
    focus: ["Tactical Sparring", "Cardio Endurance", "England Boxing Rules", "Fight Readiness"],
    benefits: ["Uncompromising active competition pathway", "Video sparring analysis", "Coached by championship-winners", "Strength & speed testing trackers"],
    schedule: "Mon, Wed, Fri at 7:30 PM",
    imgUrl: "hero_boxing" // Map to generated hero_boxing asset
  },
  {
    id: "prog-pt",
    title: "1-to-1 Elite Personal Coaching",
    description: "Accelerate your evolution with our premier, bespoke personal trainer support. Perfect for busy executives or athletes looking to target specific mechanical gaps, refine pad-work, or undergo rapid physical transformations.",
    focus: ["Bespoke pad-work", "Metabolic conditioning", "Video breakdown", "Nutritional blueprinting"],
    benefits: ["Custom-tailored periodization programming", "100% focused attention of senior trainers", "Accelerates technical progress by 4x", "Flexible booking scheduling"],
    schedule: "Flexible booking: Hourly options",
    imgUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
  }
];

export const COACHES: Coach[] = [
  {
    id: "coach-main",
    name: "Coach Tony 'The Iron' Gallagher",
    role: "Head Coach & Founder",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    bio: "With over 25 years of professional boxing and coaching experience, Tony founded Limehouse Boxing Academy with a mission to bring hard-nosed, authentic, championship-tier boxing methods to Limehouse and East London.",
    experience: "25+ Years coaching, Former ABA Welterweight Challenger",
    specialties: ["Technical pad-work", "Fight psychology", "Elite fighter development"],
    achievements: ["Coached 12+ national junior ABA Champions", "Ex-professional competitor (18-2 record)", "Master England Boxing certified coach"]
  },
  {
    id: "coach-pro",
    name: "Coach Malik 'Swift' Diop",
    role: "Senior Athletic & Sparring Instructor",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    bio: "Malik is a fitness power-house. He combines modern exercise science with traditional, gritty boxing routines to push your heart rate and refine your lateral footwork speed.",
    experience: "10+ Years experience, Active England Competition coach",
    specialties: ["Cardiovascular conditioning", "Footwork speed & defensive slippage", "Pad-work"],
    achievements: ["London Amateur Golden Gloves Winner (2018)", "National Level Personal Training Certified", "Coached hundreds of beginner transformations"]
  },
  {
    id: "coach-youth",
    name: "Coach Sarah Connor",
    role: "Lead Youth Instructor",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    bio: "Sarah is a passionate advocate of youth sports. She combines high enthusiasm with rigid discipline, ensuring every junior or teen student learns respect, boxing discipline and confidence.",
    experience: "7 Years experience",
    specialties: ["Youth development & kinetics", "First-time technical boxing", "Confidence development"],
    achievements: ["Active ABA Lightweight Competitor", "BSc in Sports Coaching Science", "England Boxing Level 2 Coach"]
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "t-1",
    name: "James Harrington",
    beforeImg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop", // represented as athletic journey
    afterImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
    statLabel: "Weight Loss / Fat Loss Goal",
    statValue: "Shed 22kg in 6 Months",
    achievement: "Dramatically Reduced Blood Pressure & Gained Elite Core Strength",
    quote: "Limehouse completely changed my approach to fitness. Instead of the monotonous treadmill, I learned a highly engaging real-world skill and shed 22kg in the process! The coaching team never lets you slack."
  },
  {
    id: "t-2",
    name: "Clara Vance",
    beforeImg: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
    statLabel: "Mental Focus & Conditioning",
    statValue: "2x Muscular Endurance & Zero Daily Anxiety",
    achievement: "Successfully Competed in Her First Charity boxing match",
    quote: "I came for the stress relief and fell in love with the technical side. Learning to slip punches and throw balanced combinations gave me a massive burst of confidence in my daily professional life."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "David Beck",
    rating: 5,
    text: "The best boxing gym in London! Absolutely elite environment. Tony and Malik really know how to coach. You are not just hitting a punching bag; they correct your boxing footwork, teach defensive slips, and build incredible heart. It's welcoming to beginners but incredibly tough.",
    source: "google",
    authorImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop",
    date: "2 weeks ago"
  },
  {
    id: "rev-2",
    author: "Fatima Al-Jamil",
    rating: 5,
    text: "Taking my kids to the Kids Boxing classes has been the best decision. Not only have they learned real boxing skills, but their confidence and discipline at home has improved. Coach Sarah is phenomenal. Highly recommend this academy to anyone in East London!",
    source: "google",
    authorImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    date: "1 month ago"
  },
  {
    id: "rev-3",
    author: "Marcus Stone",
    rating: 5,
    text: "Outstanding technical training. Malik pushes your conditioning to an athletic extreme, and Tony refines your punching geometry, balance and stance. True London boxing heritage right here in Limehouse.",
    source: "academy",
    authorImg: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
    date: "3 days ago"
  },
  {
    id: "rev-4",
    author: "Emma Watson",
    rating: 5,
    text: "I was super nervous to join as an absolute beginner. But there are zero egos in the beginners technical hour. Everyone helps each other, and you sweat like crazy. I booked a free trial class and signed up the very same night!",
    source: "google",
    authorImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    date: "3 weeks ago"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    category: "training",
    imgUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop",
    title: "Shadow Boxing Drills"
  },
  {
    id: "gal-2",
    category: "classes",
    imgUrl: "adult_boxing", // mapped to generated
    title: "Adult Conditioning Session"
  },
  {
    id: "gal-3",
    category: "coaches",
    imgUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    title: "Coach Gallagher Holding Pads"
  },
  {
    id: "gal-4",
    category: "events",
    imgUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop",
    title: "Academy Charity Fight Night"
  },
  {
    id: "gal-5",
    category: "competitions",
    imgUrl: "hero_boxing", // mapped to generated
    title: "Intense Sparring Action"
  },
  {
    id: "gal-6",
    category: "community",
    imgUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    title: "Team Gym Photo After Drilling"
  },
  {
    id: "gal-7",
    category: "training",
    imgUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    title: "Focus Mitt Training Speed"
  },
  {
    id: "gal-8",
    category: "classes",
    imgUrl: "kids_boxing", // mapped to generated
    title: "Kids Boxing Drills"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do I need prior boxing experience to join?",
    answer: "Absolutely not! Over 60% of our active members started here with zero training or experience. We have a dedicated Beginners Technical Program that focuses purely on foundational stance, guard, footwork, and core combinations in a gentle, ego-free, highly educational setting."
  },
  {
    id: "faq-2",
    question: "What should I bring and wear to my first session?",
    answer: "Please wear standard comfortable athletic gym clothing (t-shirt, shorts/leggings) and normal training sneakers. Most importantly, bring a water bottle. We provide hand-wraps and boxing gloves for your first free trial session, so you don't need to buy your own gear immediately!"
  },
  {
    id: "faq-3",
    question: "What age groups are trained at Limehouse Boxing Academy?",
    answer: "We offer comprehensive training classes across three main age categories: Kids Boxing (Ages 6 to 11), Teen Boxing (Ages 12 to 17), and Adult Boxing Conditioning / Technical (Ages 18+). Every program is structured specifically for the correct developmental and physical needs of that age group."
  },
  {
    id: "faq-4",
    question: "Is there contact or sparring in all classes?",
    answer: "No. Safety is our absolute highest priority. Our standard conditioning and beginner classes are entirely non-contact, relying on heavy-bags, focus-mitt training pads, shadow-boxing, and cardio. Controlled Sparring is strictly optional and reserved exclusively for our Advanced and Competitive classes, conducted under the rigid supervision of certified England Boxing coaches."
  },
  {
    id: "faq-5",
    question: "Do you offer trial classes, and how do I book?",
    answer: "Yes, we offer one completely free trial session for local London residents looking to check out the academy! You can book yours in less than 30 seconds by clicking the 'Book Your Free Trial' buttons located throughout this website, filling in your details, and selecting your experience level."
  },
  {
    id: "faq-6",
    question: "How often should I train to see real progress?",
    answer: "For beginners, we recommend starting with 2 to 3 sessions per week. This allows your muscles and joints to adapt safely while establishing a muscular memory of the technical punching mechanics and footwork."
  },
  {
    id: "faq-7",
    question: "How do your memberships work? Is there a long contract?",
    answer: "We believe in the quality of our coaching, and we don't lock you into predatory long-term contracts. We offer simple monthly direct-debit memberships as well as flexible class-bundle packages. If your situation changes, cancellations or pauses are simple with formal notification before the billing date."
  }
];

export const SEO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  "name": "Limehouse Boxing Academy",
  "alternateName": "Limehouse Boxing Club",
  "image": "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "30 Hay Currie St",
    "addressLocality": "London",
    "postalCode": "E14 6GN",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.516,
    "longitude": -0.019
  },
  "url": "https://limehouseboxingacademy.co.uk",
  "telephone": "+447944857681",
  "priceRange": "££",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "06:30",
      "closes": "21:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/limehouseboxingacademy"
  ]
};
