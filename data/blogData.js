/**
 * HIMKIV Health & MedGuide - Master Clinical Blog & Articles Dataset
 * Evidence-based healthcare articles, pediatric posology guides, pharmacology monographs, and emergency safety triage.
 * Founder & Author: Himanshu Sharma
 */

const PRESET_BLOG_IMAGES = [
  {
    name: "Doctor & Stethoscope",
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    alt: "Doctor with stethoscope reviewing clinical medical records"
  },
  {
    name: "Pediatric Child Care",
    url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80",
    alt: "Pediatric healthcare consultation for children and infants"
  },
  {
    name: "Medicines & Pharmacy Pills",
    url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80",
    alt: "Pharmaceutical capsule pills and generic drug salts"
  },
  {
    name: "Pharmacology Laboratory",
    url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80",
    alt: "Medical laboratory research on drug molecules and chemical salts"
  },
  {
    name: "Hospital & Emergency Triage",
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80",
    alt: "Hospital emergency ward and intensive clinical care unit"
  },
  {
    name: "Patient Consultation",
    url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=80",
    alt: "Doctor counseling a patient on prescription dosage and safety"
  }
];

const HKARE_BLOGS = [
  {
    id: "blog_pediatric_fever_dosage",
    slug: "pediatric-fever-safe-paracetamol-dosage-guide",
    title: "Understanding Pediatric Fever & Safe Paracetamol Dosage: A Parent's Clinical Guide",
    category: "Pediatric Posology",
    author: "Himanshu Sharma",
    authorRole: "Founder & Lead Healthcare Architect",
    authorAvatar: "images/himkiv-logo.png",
    date: "November 15, 2026",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80",
    coverImageAlt: "Pediatric fever management and accurate paracetamol suspension measurement for child safety",
    excerpt: "Fever in infants and young children can be alarming for parents. Learn how clinical posology calculates exact doses by weight (mg/kg), avoid accidental double-dosing, and recognize critical danger signs.",
    content: `
      <h2>The Physiology of Childhood Fever</h2>
      <p>Fever is not a disease in itself; it is the body's natural, protective immunological response to viral and bacterial pathogens. When an infection enters the body, pyrogens stimulate the hypothalamus to raise the core body temperature set-point. A rectal or oral temperature above 38°C (100.4°F) is clinically classified as a fever.</p>
      
      <h2>Weight-Based Dosage: Why Age Tables Are Insufficient</h2>
      <p>A common mistake in pediatric medication is relying solely on age brackets printed on commercial packaging. Two 3-year-old children can weigh 11 kg and 16 kg respectively. Administering a fixed dose calibrated for the lower weight will lead to underdosing, while dosing for the higher weight risks toxicity.</p>
      
      <div class="clinical-callout p-4 my-4 rounded-xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800">
        <h4 class="font-bold text-sky-900 dark:text-sky-300 mb-1 flex items-center gap-1.5">
          <i data-lucide="calculator" class="w-4 h-4"></i> Standard Paracetamol Posology Rule
        </h4>
        <p class="text-xs text-sky-800 dark:text-sky-200">The universally recommended pediatric dosage for Paracetamol (Acetaminophen) is <strong>10 to 15 mg per kg of body weight per single dose</strong>, administered every 4 to 6 hours as needed. Never exceed <strong>60 mg/kg per 24-hour period</strong> or more than 4 doses in one day.</p>
      </div>

      <h2>Oral Syringe vs. Kitchen Teaspoons</h2>
      <p>Household teaspoons vary drastically in capacity (ranging from 3.5 ml to 7 ml). For pediatric syrups (e.g., 120 mg/5 ml or 250 mg/5 ml), always use a calibrated oral dosing syringe or the marked measuring dropper provided by the manufacturer. Even a 1 ml discrepancy can alter the administered dose by 20% to 50%.</p>

      <h2>The Danger of Accidental Double-Dosing</h2>
      <p>Many multi-symptom cold and cough syrups already contain acetaminophen alongside decongestants and antihistamines. Giving a dose of plain paracetamol syrup along with a multi-symptom cold preparation exposes the child to double acetaminophen intake, leading to acute hepatocellular strain.</p>

      <h2>When to Seek Emergency Medical Attention (Red Flags)</h2>
      <ul>
        <li>Infants younger than 3 months with a temperature of 38°C (100.4°F) or higher.</li>
        <li>Fever accompanied by petechial rash (pinpoint reddish-purple spots that do not blanch when pressed).</li>
        <li>Lethargy, extreme drowsiness, or inability to wake the child.</li>
        <li>Stiff neck, persistent projectile vomiting, or refusal to drink fluids for over 8 hours.</li>
        <li>Signs of respiratory distress (flaring nostrils, rapid chest retractions).</li>
      </ul>
    `,
    tags: ["Pediatrics", "Paracetamol", "Fever", "Dosage", "Child Safety"],
    views: 1240,
    status: "published"
  },
  {
    id: "blog_salts_vs_brands",
    slug: "active-drug-salts-vs-commercial-brands-double-dosing-risk",
    title: "Active Drug Salts vs Commercial Brand Names: Why You Shouldn't Double Dose",
    category: "Clinical Pharmacology",
    author: "Himanshu Sharma",
    authorRole: "Founder & Lead Healthcare Architect",
    authorAvatar: "images/himkiv-logo.png",
    date: "November 12, 2026",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80",
    coverImageAlt: "Pharmaceutical generic salts comparison and commercial medicine brand packaging",
    excerpt: "Why taking Dolo-650 and Crocin together can lead to dangerous acetaminophen toxicity. Learn how active chemical salts work behind popular brand names and how to read medicine labels like a pharmacist.",
    content: `
      <h2>The Illusion of Choice: The Same Salt Under 100 Names</h2>
      <p>Walk into any retail pharmacy, and you will see dozens of beautifully packaged medicines for fever, headache, indigestion, and acid reflux. While the brand names and manufacturers differ, the active therapeutic ingredient — the <strong>active pharmaceutical ingredient (API) or drug salt</strong> — is often identical.</p>

      <p>For example, <strong>Dolo 650, Crocin Advance, Calpol 650, Pacimol 650, and P-650</strong> all contain the exact same chemical molecule: <em>Paracetamol (Acetaminophen)</em> at a 650 mg concentration. When patients are unaware of this distinction, serious medical errors occur.</p>

      <h2>The Case of Accidental Double-Dosing</h2>
      <p>A frequent scenario in clinical emergency rooms involves a patient taking a tablet of Brand A for a headache, and two hours later taking Brand B for body ache or fever because the first brand 'did not work fast enough'.</p>
      
      <div class="clinical-callout p-4 my-4 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800">
        <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-1 flex items-center gap-1.5">
          <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-600"></i> The Hepatotoxicity Ceiling
        </h4>
        <p class="text-xs text-amber-800 dark:text-amber-200">The absolute maximum daily ceiling for Paracetamol in healthy adults is <strong>4,000 mg (4 grams) within 24 hours</strong>. Taking two 650 mg tablets of different brands within 4 hours rapidly consumes liver glutathione reserves, generating toxic N-acetyl-p-benzoquinone imine (NAPQI) metabolites that cause acute liver injury.</p>
      </div>

      <h2>How to Read a Medicine Strip Like a Clinician</h2>
      <ol>
        <li><strong>Locate the Generic Molecule:</strong> Always look directly beneath the large brand title. By legal regulation in India, the salt name must be printed (e.g., <em>Pantoprazole Gastro-resistant Tablets IP 40mg</em>).</li>
        <li><strong>Check the Strength:</strong> Note the numeric milligram (mg) or milliliter (ml) indicator. 'Pantocid 40' and 'Pan 40' both indicate 40 mg Pantoprazole.</li>
        <li><strong>Verify Combination Salts:</strong> Many medicines combine two molecules (e.g., <em>Amoxicillin + Clavulanic Acid</em> or <em>Aceclofenac + Paracetamol</em>). Knowing both components prevents combining them with single-ingredient painkillers.</li>
      </ol>

      <h2>The HIMKIV MedGuide Mission</h2>
      <p>HIMKIV was architected by Himanshu Sharma precisely to solve this information asymmetry. By searching any commercial medicine brand on our platform, patients immediately see the underlying salt monograph, its exact medical role, equivalent generic alternatives, and safe ceiling posology.</p>
    `,
    tags: ["Pharmacology", "Drug Salts", "Patient Safety", "Brand Names", "Toxicity"],
    views: 980,
    status: "published"
  },
  {
    id: "blog_antibiotic_stewardship",
    slug: "antibiotic-stewardship-when-are-antibiotics-necessary",
    title: "Antibiotic Stewardship: When Are Antibiotics Truly Necessary?",
    category: "Medication Safety",
    author: "Himanshu Sharma",
    authorRole: "Founder & Lead Healthcare Architect",
    authorAvatar: "images/himkiv-logo.png",
    date: "November 08, 2026",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80",
    coverImageAlt: "Antimicrobial resistance research and responsible antibiotic posology stewardship",
    excerpt: "Viral infections vs bacterial infections: The rising danger of antimicrobial resistance (AMR) in India and crucial guidelines on why completing your full prescribed antibiotic course is non-negotiable.",
    content: `
      <h2>The Global Crisis of Antimicrobial Resistance (AMR)</h2>
      <p>Antimicrobial resistance is described by the World Health Organization as one of the top ten global public health threats facing humanity. In India and worldwide, widespread over-the-counter access and patient demand for 'quick fixes' have driven rapid resistance in common bacteria such as <em>E. coli, Klebsiella pneumoniae, and Staphylococcus aureus</em>.</p>

      <h2>Viruses Do Not Respond to Antibiotics</h2>
      <p>The single most important principle of pharmacology every patient must know: <strong>Antibiotics kill bacteria, not viruses.</strong></p>
      <p>Over 85% of acute upper respiratory infections — including the common cold, seasonal flu, viral bronchitis, and viral sore throats — are caused by viruses (such as rhinoviruses, coronaviruses, and influenza). Taking Azithromycin, Amoxicillin, or Cefixime for a viral cold provides zero therapeutic benefit and directly breeds antibiotic-resistant superbugs in your gut microbiome.</p>

      <div class="clinical-callout p-4 my-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800">
        <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-1 flex items-center gap-1.5">
          <i data-lucide="shield-alert" class="w-4 h-4 text-rose-600"></i> The Danger of Stopping Early
        </h4>
        <p class="text-xs text-rose-800 dark:text-rose-200">When your doctor prescribes a 5-day or 7-day antibiotic course, feeling better on Day 3 does <strong>NOT</strong> mean all bacteria are dead. The most vulnerable bacteria die first; stopping early leaves the strongest, partially mutated bacteria alive to multiply, resulting in a severe recurrence resistant to first-line antibiotics.</p>
      </div>

      <h2>5 Essential Patient Stewardship Rules</h2>
      <ul>
        <li><strong>Never self-prescribe:</strong> Never demand an antibiotic from a pharmacy without a written clinical culture or doctor's prescription.</li>
        <li><strong>Complete the full duration:</strong> Always take the exact prescribed number of days even if all symptoms completely resolve.</li>
        <li><strong>Never save leftovers:</strong> Discard remaining antibiotics; never take leftover capsules from a previous illness.</li>
        <li><strong>Never share antibiotics:</strong> What cured your neighbor's UTI or bronchitis may be completely ineffective or toxic for your infection.</li>
        <li><strong>Support gut flora:</strong> Consume probiotic curd or doctor-advised prebiotic supplements 2 hours apart from your antibiotic dose to maintain digestive balance.</li>
      </ul>
    `,
    tags: ["Antibiotics", "Resistance", "AMR", "Clinical Safety", "Infections"],
    views: 820,
    status: "published"
  },
  {
    id: "blog_clinical_red_flags",
    slug: "clinical-red-flags-6-mild-symptoms-requiring-immediate-er-care",
    title: "Clinical Red Flags: 6 Mild Symptoms That Warrant Immediate ER Care",
    category: "Emergency Triage",
    author: "Himanshu Sharma",
    authorRole: "Founder & Lead Healthcare Architect",
    authorAvatar: "images/himkiv-logo.png",
    date: "November 04, 2026",
    readTime: "4 min read",
    coverImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80",
    coverImageAlt: "Hospital emergency room and clinical red flag triage symptoms overview",
    excerpt: "Headache with stiff neck, atypical epigastric heartburn, unilateral calf pain — knowing when to bypass home remedies and rush to the nearest emergency department.",
    content: `
      <h2>The Importance of Triage Awareness</h2>
      <p>Not all serious medical emergencies begin with dramatic chest agony or sudden loss of consciousness. Often, life-threatening cardiovascular, neurological, or abdominal catastrophes present as deceptively mild discomfort that patients dismiss as indigestion or fatigue.</p>

      <h2>1. Heartburn That Doesn't Yield to Antacids</h2>
      <p>In women, elderly patients, and diabetics, myocardial infarction (heart attack) frequently presents not as crushing center-chest pain, but as burning epigastric discomfort, persistent nausea, or a heavy sensation in the lower jaw and left shoulder. If typical antacid gel or pantoprazole provides zero relief within 20 minutes, seek emergency ECG evaluation.</p>

      <h2>2. The 'Thunderclap' Headache or Headache With Stiff Neck</h2>
      <p>A sudden, explosive headache that peaks in severity within 60 seconds ('the worst headache of your life') can indicate a subarachnoid hemorrhage (aneurysm rupture). Similarly, a moderate headache accompanied by neck stiffness and sensitivity to light (photophobia) requires immediate triage for acute bacterial meningitis.</p>

      <h2>3. Unilateral Calf Swelling (Deep Vein Thrombosis)</h2>
      <p>Mild swelling, redness, or calf cramping in only one leg — particularly following long flights, prolonged bed rest, or recent surgery — can signal a Deep Vein Thrombosis (DVT). If the clot dislodges, it can travel to the lungs, resulting in a fatal Pulmonary Embolism within minutes.</p>

      <h2>4. Sudden Unilateral Facial Droop or Slurred Speech (FAST)</h2>
      <p>Use the FAST protocol: Face drooping, Arm weakness, Speech difficulty, Time to call emergency. The therapeutic window for ischemic stroke thrombolytic therapy (tPA) is strictly <strong>within 3 to 4.5 hours of initial symptom onset</strong>.</p>

      <h2>5. High Fever With a Non-Blanching Rash</h2>
      <p>Press the side of a clear drinking glass firmly against the rash. If the red or purple spots do not fade (do not blanch) under glass pressure, this is a hallmark clinical sign of meningococcal septicemia, requiring urgent intravenous antibiotic triage.</p>

      <h2>6. Sudden Shortness of Breath at Rest</h2>
      <p>Breathlessness while resting quietly in a chair — especially when accompanied by blue-tinged lips (cyanosis) or an oxygen saturation (SpO2) below 92% on a pulse oximeter — warrants immediate 112 emergency dispatch.</p>
    `,
    tags: ["Emergency", "Triage", "Hospital Care", "First Aid", "Clinical Red Flags"],
    views: 1150,
    status: "published"
  }
];

// Helper functions for blog manipulation
function getAllBlogs() {
  let custom = [];
  try {
    const saved = localStorage.getItem('himkiv_custom_blogs');
    if (saved) custom = JSON.parse(saved);
  } catch (e) {
    console.warn('Error reading himkiv_custom_blogs:', e);
  }
  // Merge custom with default, custom overrides or prepends
  const defaultList = Array.isArray(HKARE_BLOGS) ? HKARE_BLOGS : [];
  if (!Array.isArray(custom) || custom.length === 0) return defaultList;

  const merged = [...custom];
  defaultList.forEach(db => {
    if (!merged.some(m => m.id === db.id || m.slug === db.slug)) {
      merged.push(db);
    }
  });
  return merged;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { HKARE_BLOGS, PRESET_BLOG_IMAGES, getAllBlogs };
}
