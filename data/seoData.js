/**
 * HIMKIV Health & MedGuide - Master SEO Dataset & Default Metadata Configurations
 * Centralized SEO & Image Alt Text repository for all 11 website pages.
 * Founder: Himanshu Sharma
 */

const SEO_DEFAULT_CONFIG = {
  siteName: "HIMKIV MedGuide",
  siteUrl: "https://himkiv.online",
  author: "Himanshu Sharma",
  publisher: "HIMKIV Healthcare Technologies",
  defaultOgImage: "https://himkiv.online/images/himkiv-logo.png",
  twitterHandle: "@HimkivHealth",
  googleVerification: "",
  bingVerification: "",
  gtmId: "GTM-MMT9WXBT",
  metaPixelId: "1366506932000387",
  pages: [
    {
      id: "index",
      fileName: "index.html",
      path: "/",
      name: "Home Page (MedGuide Portal)",
      badge: "Core Portal",
      title: "HIMKIV Health & MedGuide | Healthcare Portal: Medicines, Drug Salts & Weight-Based Dosage",
      description: "HIMKIV Health & MedGuide provides evidence-based medicine and drug salt suggestions tailored to your disease by taking a clinical survey. Calculate exact doses by age and body weight, or search any medicine to explore its active salts, indications, and dosage rules.",
      keywords: "medicines, drug salts, dosage calculator, pediatric dosage, healthcare portal, paracetamol dose, pharmacology guide, clinical survey, HIMKIV Health, Himanshu Sharma",
      canonical: "https://himkiv.online/",
      robots: "index, follow",
      ogTitle: "HIMKIV Health & MedGuide | Precision Salts & Dosage Intelligence",
      ogDescription: "Evidence-based medicine recommendations, active drug salt monographs, and precision weight-based dosage posology for patients and caregivers.",
      ogImage: "https://himkiv.online/images/himkiv-logo.png",
      ogImageAlt: "HIMKIV Health and MedGuide official healthcare portal logo and clinical dosage calculator badge",
      ogType: "website",
      twitterCard: "summary_large_image",
      priority: 1.0,
      changefreq: "daily",
      pageImages: [
        {
          id: "header_logo",
          label: "Header Navigation Brand Logo",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Health & MedGuide - Online Healthcare and Clinical Posology Portal Logo"
        },
        {
          id: "footer_logo",
          label: "Footer Corporate Emblem",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Health & MedGuide - Healthcare Intelligence Portal by Founder Himanshu Sharma"
        },
        {
          id: "favicon",
          label: "Browser Favicon & Breadcrumb Icon",
          src: "images/himkiv-favicon.png",
          alt: "HIMKIV Health medical emblem favicon badge"
        },
        {
          id: "og_share",
          label: "Social Share Card Graphic (WhatsApp / FB)",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Health and MedGuide medical dosage calculator and clinical survey portal preview"
        }
      ]
    },
    {
      id: "survey",
      fileName: "survey.html",
      path: "/survey.html",
      name: "Clinical Survey (Symptom Decision Engine)",
      badge: "Interactive Tool",
      title: "Clinical Health Survey | Evidence-Based Medicine & Drug Salt Recommender | HIMKIV",
      description: "Take our interactive clinical survey to match symptoms with first-line active drug salts, safe dosage posology, and generic medicine alternatives tailored to patient age and body weight.",
      keywords: "clinical survey, symptom checker, drug salt finder, fever medicine, cough syrup salts, antibiotic guidelines, loose motions medicine, HIMKIV survey",
      canonical: "https://himkiv.online/survey.html",
      robots: "index, follow",
      ogTitle: "Clinical Symptom & Drug Salt Decision Survey | HIMKIV Health",
      ogDescription: "Interactive clinical survey that identifies verified active salts and pediatric/adult doses for your specific health symptoms.",
      ogImage: "https://himkiv.online/images/himkiv-logo.png",
      ogImageAlt: "HIMKIV Clinical Health Survey & Symptom Decision Engine banner",
      ogType: "website",
      twitterCard: "summary_large_image",
      priority: 0.9,
      changefreq: "weekly",
      pageImages: [
        {
          id: "header_logo",
          label: "Header Navigation Brand Logo",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Clinical Symptom Survey Tool Logo"
        },
        {
          id: "footer_logo",
          label: "Footer Brand Emblem",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Health Symptom Recommender - Founded by Himanshu Sharma"
        },
        {
          id: "favicon",
          label: "Browser Favicon & Web Icon",
          src: "images/himkiv-favicon.png",
          alt: "HIMKIV Clinical Survey medical emblem"
        },
        {
          id: "og_share",
          label: "Social Share Card Graphic",
          src: "images/himkiv-logo.png",
          alt: "Interactive Clinical Symptom and Medicine Decision Survey by HIMKIV Health"
        }
      ]
    },
    {
      id: "medicines",
      fileName: "medicines.html",
      path: "/medicines.html",
      name: "Medicine & Drug Salt Directory",
      badge: "Pharmacology Catalog",
      title: "Medicine & Drug Salt Directory | 100+ Generic Salts & Brand Names | HIMKIV",
      description: "Search generic chemical drug salts and commercial medicine brand names to discover what diseases they treat, mechanisms of action, and weight-based dosage guidelines.",
      keywords: "medicine directory, drug salts, commercial brand names, generic medicines, paracetamol salts, amoxicillin, azithromycin, pharmacology index, HIMKIV medicines",
      canonical: "https://himkiv.online/medicines.html",
      robots: "index, follow",
      ogTitle: "Active Drug Salt & Brand Name Directory | HIMKIV Health",
      ogDescription: "Search 100+ pharmaceutical molecules, discover commercial brand cross-references, and avoid dangerous double-dosing of identical chemical salts.",
      ogImage: "https://himkiv.online/images/himkiv-logo.png",
      ogImageAlt: "HIMKIV Active Drug Salt and Commercial Brand Name Directory banner",
      ogType: "website",
      twitterCard: "summary_large_image",
      priority: 0.9,
      changefreq: "weekly",
      pageImages: [
        {
          id: "header_logo",
          label: "Header Navigation Brand Logo",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Medicine & Salt Directory official logo"
        },
        {
          id: "footer_logo",
          label: "Footer Brand Emblem",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Pharmacology and Drug Formulations by Himanshu Sharma"
        },
        {
          id: "favicon",
          label: "Browser Favicon & Web Icon",
          src: "images/himkiv-favicon.png",
          alt: "HIMKIV Medicine Directory pharmacy cross emblem"
        },
        {
          id: "og_share",
          label: "Social Share Card Graphic",
          src: "images/himkiv-logo.png",
          alt: "Universal Medicine and Chemical Drug Salt Directory Database by HIMKIV"
        }
      ]
    },
    {
      id: "dosage-calculator",
      fileName: "dosage-calculator.html",
      path: "/dosage-calculator.html",
      name: "Pediatric & Adult Dosage Calculator",
      badge: "Posology Engine",
      title: "Pediatric & Adult Dosage Calculator | Precise mg/kg Body Weight Posology | HIMKIV",
      description: "Calculate exact pediatric and adult doses based on age and body weight. Converts milligrams into liquid suspension milliliters (ml) and displays 24-hour maximum safety ceilings.",
      keywords: "dosage calculator, pediatric dose calculator, mg per kg posology, paracetamol syrup ml, child medicine dose, weight based dosage calculator, clinical posology",
      canonical: "https://himkiv.online/dosage-calculator.html",
      robots: "index, follow",
      ogTitle: "Weight-Based Pediatric Dosage Calculator | HIMKIV Health",
      ogDescription: "Calculate clinical pediatric posology in mg/kg and liquid suspension ml calibrated to exact body weight with safety ceiling warnings.",
      ogImage: "https://himkiv.online/images/himkiv-logo.png",
      ogImageAlt: "HIMKIV Pediatric and Adult Weight-Based Dosage Calculator banner",
      ogType: "website",
      twitterCard: "summary_large_image",
      priority: 0.9,
      changefreq: "weekly",
      pageImages: [
        {
          id: "header_logo",
          label: "Header Navigation Brand Logo",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Dosage Posology Calculator tool logo"
        },
        {
          id: "footer_logo",
          label: "Footer Brand Emblem",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Weight Based Dosage Engine by Himanshu Sharma"
        },
        {
          id: "favicon",
          label: "Browser Favicon & Web Icon",
          src: "images/himkiv-favicon.png",
          alt: "HIMKIV Medical Dosage Calculator favicon badge"
        },
        {
          id: "og_share",
          label: "Social Share Card Graphic",
          src: "images/himkiv-logo.png",
          alt: "Clinical Pediatric and Adult mg/kg Weight Dosage Calculator Graphic"
        }
      ]
    },
    {
      id: "safety",
      fileName: "safety.html",
      path: "/safety.html",
      name: "Safety Protocols & ER Red Flags",
      badge: "Clinical Triage",
      title: "Clinical Safety Protocols & Toxicity Prevention | Emergency Red Flags | HIMKIV",
      description: "Clinical pharmacology safety guidelines: Acetaminophen toxicity ceilings, antibiotic resistance stewardship, pediatric posology precision, and emergency red flag triage.",
      keywords: "paracetamol toxicity, antibiotic resistance, medicine safety, drug allergy warnings, pediatric posology, medical emergency triage, safe medicine limits",
      canonical: "https://himkiv.online/safety.html",
      robots: "index, follow",
      ogTitle: "Pharmacological Safety Standards & Toxicity Ceilings | HIMKIV",
      ogDescription: "Prevent accidental overdose, organ toxicity, and antibiotic resistance with evidence-based therapeutic limits and ER red flags.",
      ogImage: "https://himkiv.online/images/himkiv-logo.png",
      ogImageAlt: "HIMKIV Clinical Medication Safety Protocols and Emergency Red Flags banner",
      ogType: "website",
      twitterCard: "summary_large_image",
      priority: 0.8,
      changefreq: "monthly",
      pageImages: [
        {
          id: "header_logo",
          label: "Header Navigation Brand Logo",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Medication Safety Guidelines official logo"
        },
        {
          id: "footer_logo",
          label: "Footer Brand Emblem",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Pharmacology Safety Standards by Himanshu Sharma"
        },
        {
          id: "favicon",
          label: "Browser Favicon & Web Icon",
          src: "images/himkiv-favicon.png",
          alt: "HIMKIV Emergency and Safety clinical icon"
        },
        {
          id: "og_share",
          label: "Social Share Card Graphic",
          src: "images/himkiv-logo.png",
          alt: "Clinical Pharmacology Safety Protocols and Drug Toxicity Warning Graphic"
        }
      ]
    },
    {
      id: "about",
      fileName: "about.html",
      path: "/about.html",
      name: "About Himkiv (Mission & Founder)",
      badge: "Corporate Profile",
      title: "About HIMKIV & Founder Himanshu Sharma | Healthcare Mission",
      description: "Learn about Himkiv, a digital healthcare platform founded by Himanshu Sharma, designed to make healthcare information, medicine discovery, health surveys, and practical healthcare tools easier to explore.",
      keywords: "about himkiv, himanshu sharma, healthcare mission, digital health platform, pharmacology intelligence india, evidence based medicine",
      canonical: "https://himkiv.online/about.html",
      robots: "index, follow",
      ogTitle: "About HIMKIV & Founder Himanshu Sharma | Healthcare Mission",
      ogDescription: "Empowering patients and caregivers with evidence-based medicine guidance, structured health surveys, and weight-based dosage tools. Founded by Himanshu Sharma.",
      ogImage: "https://himkiv.online/images/himkiv-logo.png",
      ogImageAlt: "About HIMKIV Healthcare Technologies and Founder Himanshu Sharma banner",
      ogType: "website",
      twitterCard: "summary_large_image",
      priority: 0.8,
      changefreq: "monthly",
      pageImages: [
        {
          id: "header_logo",
          label: "Header Navigation Brand Logo",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Health & MedGuide official company logo"
        },
        {
          id: "footer_logo",
          label: "Footer Brand Emblem",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV - Healthcare platform founded by Himanshu Sharma"
        },
        {
          id: "favicon",
          label: "Browser Favicon & Web Icon",
          src: "images/himkiv-favicon.png",
          alt: "HIMKIV Health corporate medical emblem"
        },
        {
          id: "og_share",
          label: "Social Share Card Graphic",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Healthcare Mission and Founder Himanshu Sharma Profile Graphic"
        }
      ]
    },
    {
      id: "services",
      fileName: "services.html",
      path: "/services.html",
      name: "Our Healthcare Services",
      badge: "Service Suite",
      title: "Clinical Services & Healthcare Solutions | HIMKIV Health",
      description: "Explore Himkiv's digital healthcare tools: Disease-Based Medicine Guidance, Pediatric & Adult Dose Calculator, Clinical Health Survey, and Medicine Search. Practical, evidence-based healthcare intelligence.",
      keywords: "himkiv services, health services, medicine intelligence, dosage calculator service, symptom checker online, healthcare decision support",
      canonical: "https://himkiv.online/services.html",
      robots: "index, follow",
      ogTitle: "Clinical Services & Healthcare Solutions | HIMKIV Health",
      ogDescription: "Explore Himkiv's suite of practical, evidence-based digital healthcare tools for medicine lookup, symptom survey, and dosage posology.",
      ogImage: "https://himkiv.online/images/himkiv-logo.png",
      ogImageAlt: "HIMKIV Digital Healthcare Services & Clinical Tools Suite banner",
      ogType: "website",
      twitterCard: "summary_large_image",
      priority: 0.8,
      changefreq: "monthly",
      pageImages: [
        {
          id: "header_logo",
          label: "Header Navigation Brand Logo",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Clinical Services & Healthcare Solutions logo"
        },
        {
          id: "footer_logo",
          label: "Footer Brand Emblem",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Digital Health Solutions by Himanshu Sharma"
        },
        {
          id: "favicon",
          label: "Browser Favicon & Web Icon",
          src: "images/himkiv-favicon.png",
          alt: "HIMKIV Healthcare Services medical badge"
        },
        {
          id: "og_share",
          label: "Social Share Card Graphic",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Digital Healthcare Services and Clinical Posology Suite"
        }
      ]
    },
    {
      id: "hospitals",
      fileName: "hospitals.html",
      path: "/hospitals.html",
      name: "Nearby Healthcare Facilities & Hospitals",
      badge: "Facility Directory",
      title: "Find Top Verified Hospitals Near You | HIMKIV Health Network",
      description: "Search verified nearby hospitals, emergency hotlines, ICU bed availability, and specialty medical centers across India on HIMKIV Health.",
      keywords: "nearby hospitals, emergency hospital, 24/7 ICU beds, emergency ambulance hotline, hospital directory india, verified medical facilities",
      canonical: "https://himkiv.online/hospitals.html",
      robots: "index, follow",
      ogTitle: "Find Top Verified Hospitals Near You | HIMKIV Health Network",
      ogDescription: "Directory of verified hospitals with emergency contact lines, intensive care units, and specialty trauma capabilities.",
      ogImage: "https://himkiv.online/images/himkiv-logo.png",
      ogImageAlt: "HIMKIV Verified Hospitals and Emergency Medical Centers Directory banner",
      ogType: "website",
      twitterCard: "summary_large_image",
      priority: 0.7,
      changefreq: "weekly",
      pageImages: [
        {
          id: "header_logo",
          label: "Header Navigation Brand Logo",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Verified Hospitals Directory logo"
        },
        {
          id: "footer_logo",
          label: "Footer Brand Emblem",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Healthcare Facility Network by Himanshu Sharma"
        },
        {
          id: "favicon",
          label: "Browser Favicon & Web Icon",
          src: "images/himkiv-favicon.png",
          alt: "HIMKIV Hospitals emergency medical cross icon"
        },
        {
          id: "og_share",
          label: "Social Share Card Graphic",
          src: "images/himkiv-logo.png",
          alt: "Verified Hospitals and Emergency Healthcare Facilities Network in India by HIMKIV"
        }
      ]
    },
    {
      id: "appointments",
      fileName: "appointments.html",
      path: "/appointments.html",
      name: "Doctor Consultation & Appointments",
      badge: "Clinical Booking",
      title: "Book Doctor Consultation Online | HIMKIV Doctor Network",
      description: "Schedule appointments with verified specialist doctors across cardiology, neurology, pediatrics, and internal medicine. Instant confirmation and clinic hours.",
      keywords: "doctor appointments, book doctor consultation, medical specialist, pediatric doctor, cardiologist, physician opd schedule",
      canonical: "https://himkiv.online/appointments.html",
      robots: "index, follow",
      ogTitle: "Book Doctor Consultation Online | HIMKIV Doctor Network",
      ogDescription: "Consult board-certified doctors and verified clinical specialists with published OPD schedules and direct booking.",
      ogImage: "https://himkiv.online/images/himkiv-logo.png",
      ogImageAlt: "HIMKIV Doctor Appointments and Specialist OPD Consultation Booking banner",
      ogType: "website",
      twitterCard: "summary_large_image",
      priority: 0.7,
      changefreq: "weekly",
      pageImages: [
        {
          id: "header_logo",
          label: "Header Navigation Brand Logo",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Doctor Consultation & OPD Appointments logo"
        },
        {
          id: "footer_logo",
          label: "Footer Brand Emblem",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Doctor Network by Himanshu Sharma"
        },
        {
          id: "favicon",
          label: "Browser Favicon & Web Icon",
          src: "images/himkiv-favicon.png",
          alt: "HIMKIV Doctor Consultation stethoscope emblem"
        },
        {
          id: "og_share",
          label: "Social Share Card Graphic",
          src: "images/himkiv-logo.png",
          alt: "Online Doctor Appointments and Specialist Consultation Network by HIMKIV"
        }
      ]
    },
    {
      id: "contact",
      fileName: "contact.html",
      path: "/contact.html",
      name: "Contact Us & Consultation Form",
      badge: "Patient Support",
      title: "Contact Us & Medical Support | HIMKIV Health Portal",
      description: "Get in touch with the HIMKIV medical team. Inquire about partnership, hospital listings, medical questions, or support.",
      keywords: "contact himkiv, medical consultation inquiry, dosage help, health query form, patient support, whatsapp medical chat",
      canonical: "https://himkiv.online/contact.html",
      robots: "index, follow",
      ogTitle: "Contact Us & Medical Support | HIMKIV Health Portal",
      ogDescription: "Have a medical or dosage question? Submit your consultation request or chat directly on WhatsApp with our clinical team.",
      ogImage: "https://himkiv.online/images/himkiv-logo.png",
      ogImageAlt: "Contact HIMKIV Health Clinical Consultation & Support Desk banner",
      ogType: "website",
      twitterCard: "summary_large_image",
      priority: 0.8,
      changefreq: "monthly",
      pageImages: [
        {
          id: "header_logo",
          label: "Header Navigation Brand Logo",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Health Support & Contact logo"
        },
        {
          id: "footer_logo",
          label: "Footer Brand Emblem",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Patient Support by Himanshu Sharma"
        },
        {
          id: "favicon",
          label: "Browser Favicon & Web Icon",
          src: "images/himkiv-favicon.png",
          alt: "HIMKIV Contact Us medical inquiry icon"
        },
        {
          id: "og_share",
          label: "Social Share Card Graphic",
          src: "images/himkiv-logo.png",
          alt: "Contact HIMKIV Medical Advisory and Priority Patient Triage Support Graphic"
        }
      ]
    },
    {
      id: "thankyou",
      fileName: "thankyou.html",
      path: "/thankyou.html",
      name: "Inquiry Confirmation & Receipt",
      badge: "Conversion Page",
      title: "Thank You for Contacting Us | HIMKIV Health",
      description: "Thank you for reaching out to HIMKIV Health & MedGuide. Our clinical advisory team will review your enquiry and contact you promptly.",
      keywords: "consultation confirmation, thank you, inquiry receipt, himkiv consultation",
      canonical: "https://himkiv.online/thankyou.html",
      robots: "noindex, follow",
      ogTitle: "Thank You for Contacting Us | HIMKIV Health",
      ogDescription: "Your clinical consultation request has been safely logged in our priority triage queue.",
      ogImage: "https://himkiv.online/images/himkiv-logo.png",
      ogImageAlt: "HIMKIV Consultation Inquiry Receipt & Confirmation banner",
      ogType: "website",
      twitterCard: "summary_large_image",
      priority: 0.1,
      changefreq: "yearly",
      pageImages: [
        {
          id: "header_logo",
          label: "Header Navigation Brand Logo",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Health Confirmation Receipt logo"
        },
        {
          id: "footer_logo",
          label: "Footer Brand Emblem",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Health & MedGuide by Himanshu Sharma"
        },
        {
          id: "favicon",
          label: "Browser Favicon & Web Icon",
          src: "images/himkiv-favicon.png",
          alt: "HIMKIV Health confirmation check emblem"
        },
        {
          id: "og_share",
          label: "Social Share Card Graphic",
          src: "images/himkiv-logo.png",
          alt: "HIMKIV Clinical Consultation Inquiry Confirmation Receipt Graphic"
        }
      ]
    }
  ]
};

// Export for browser and node environments
if (typeof module !== "undefined" && module.exports) {
  module.exports = SEO_DEFAULT_CONFIG;
}
