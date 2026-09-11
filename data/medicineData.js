/**
 * HIMKIV Health & MedGuide - Clinical Pharmacology Dataset
 * Contains disease profiles, active drug salts, dosage algorithms,
 * commercial brand mappings, and contraindication safety data.
 */

const CLINICAL_DATA = {
  // Common Conditions & Diseases
  diseases: [
    {
      id: "fever-bodyache",
      name: "Fever & Body Ache (Pyrexia)",
      category: "General / Infectious",
      severity: "Moderate",
      symptoms: ["Elevated body temperature (>99.5°F / 37.5°C)", "Chills & shivers", "Generalized myalgia (body ache)", "Headache", "Fatigue"],
      description: "Elevation of core body temperature usually in response to viral infection, seasonal flu, or inflammation.",
      firstLineSalts: ["paracetamol", "ibuprofen"],
      emergencyFlags: [
        "Temperature exceeding 103°F (39.4°C) not responding to antipyretics",
        "Stiff neck, photophobia, or sudden confusion",
        "Seizures or lethargy (especially in infants under 6 months)",
        "Persistent vomiting or signs of severe dehydration"
      ],
      lifestyleGuidance: "Ensure adequate oral hydration (electrolytes, warm soups). Tepid sponging on forehead. Rest in a well-ventilated room."
    },
    {
      id: "allergic-rhinitis",
      name: "Allergic Rhinitis & Seasonal Cold",
      category: "Respiratory & Allergy",
      severity: "Mild to Moderate",
      symptoms: ["Sneezing fits", "Clear watery nasal discharge", "Itchy eyes and nose", "Nasal congestion", "Throat tickle"],
      description: "IgE-mediated inflammatory condition of the nasal passages triggered by airborne allergens (pollen, dust mites, pet dander).",
      firstLineSalts: ["cetirizine", "fexofenadine", "montelukast-levocetirizine"],
      emergencyFlags: [
        "Swelling of lips, tongue, or uvula (Anaphylaxis risk)",
        "Stridor, wheezing, or tightness in chest",
        "Severe shortness of breath"
      ],
      lifestyleGuidance: "Avoid known triggers. Use saline nasal rinses twice daily. Wear a protective mask during high pollen counts."
    },
    {
      id: "bacterial-pharyngitis",
      name: "Bacterial Throat Infection / Pharyngitis",
      category: "Infectious Disease",
      severity: "Moderate",
      symptoms: ["Severe sore throat with pain on swallowing (odynophagia)", "Swollen tonsils with white pus exudate", "Tender anterior cervical lymph nodes", "Fever without typical cold cough"],
      description: "Streptococcal or mixed bacterial upper respiratory infection of the pharynx and tonsils.",
      firstLineSalts: ["amoxicillin-clavulanate", "azithromycin", "paracetamol"],
      emergencyFlags: [
        "Inability to swallow saliva or open mouth fully (Trismus / Quinsy abscess)",
        "Drooling or respiratory distress",
        "Unilateral severe neck swelling"
      ],
      lifestyleGuidance: "Warm saline gargles 3–4 times daily. Soft moist diet. Complete the full antibiotic cycle as prescribed to prevent antibiotic resistance."
    },
    {
      id: "productive-cough-bronchitis",
      name: "Acute Bronchitis & Productive Cough",
      category: "Respiratory",
      severity: "Moderate",
      symptoms: ["Persistent cough with yellow/green phlegm", "Chest congestion and rattling sound", "Low grade fever", "Sore chest muscles from coughing"],
      description: "Inflammation of the bronchial mucous membrane causing mucus hypersecretion and persistent coughing.",
      firstLineSalts: ["azithromycin", "montelukast-levocetirizine", "paracetamol"],
      emergencyFlags: [
        "Hemoptysis (coughing up fresh blood)",
        "Resting respiratory rate > 25 breaths/min",
        "Cyanosis (bluish tint around lips or fingernails)"
      ],
      lifestyleGuidance: "Steam inhalation 2 times daily. Honey and warm water (for patients > 1 year). Avoid cold dairy products and smoke exposure."
    },
    {
      id: "gerd-gastritis",
      name: "Acid Peptic Disease / GERD & Gastritis",
      category: "Gastrointestinal",
      severity: "Mild to Moderate",
      symptoms: ["Retrosternal burning (Heartburn)", "Sour burping & acid reflux", "Epigastric pain or gnawing ache", "Nausea after meals", "Bloating & upper abdominal fullness"],
      description: "Imbalance between aggressive gastric acid and protective mucosal barrier, causing mucosal irritation or retrograde reflux into esophagus.",
      firstLineSalts: ["pantoprazole-domperidone", "pantoprazole", "omeprazole"],
      emergencyFlags: [
        "Persistent chest pain radiating to left jaw or left arm (Rule out Myocardial Infarction / Heart Attack)",
        "Vomiting coffee-ground material or blood (Hematemesis)",
        "Black tarry stools (Melena)",
        "Progressive difficulty in swallowing food (Dysphagia)"
      ],
      lifestyleGuidance: "Eat smaller frequent meals. Avoid spicy, oily food and caffeine. Do not lie down for 2 hours after meals. Elevate head of bed 15 degrees."
    },
    {
      id: "acute-gastroenteritis",
      name: "Acute Diarrhea & Gastroenteritis",
      category: "Gastrointestinal",
      severity: "Moderate",
      symptoms: ["Frequent loose or watery stools (>3 times/day)", "Abdominal cramps", "Nausea and vomiting", "Dry mouth and thirst"],
      description: "Infectious inflammation of stomach and intestines leading to rapid electrolyte and fluid depletion.",
      firstLineSalts: ["ors-zinc", "ondansetron"],
      emergencyFlags: [
        "Inability to retain any liquids for over 8 hours",
        "Lethargy, sunken eyes, skin pinch takes >2 seconds to return (Severe Dehydration)",
        "High fever with gross blood in stool (Dysentery)",
        "No urine output for >6 hours"
      ],
      lifestyleGuidance: "Immediate ORS intake: 200ml after every loose stool. Rice water, coconut water, boiled banana. Avoid milk, sugary sodas, and greasy food."
    },
    {
      id: "migraine-headache",
      name: "Migraine & Tension Headache",
      category: "Neurology",
      severity: "Moderate to Severe",
      symptoms: ["Unilateral throbbing or pulsating headache", "Sensitivity to bright light (photophobia) and sound (phonophobia)", "Nausea or vomiting", "Visual aura before onset"],
      description: "Neurovascular disorder characterized by recurrent attacks of severe throbbing headache frequently associated with autonomic symptoms.",
      firstLineSalts: ["ibuprofen", "paracetamol", "ondansetron"],
      emergencyFlags: [
        "Sudden explosive headache ('Thunderclap' reaching peak in seconds - SAH risk)",
        "Headache accompanied by focal weakness, facial droop, or speech slurring",
        "New onset headache in individuals over 50 years of age"
      ],
      lifestyleGuidance: "Rest in a dark quiet room. Apply cold compress to forehead. Maintain regular sleep patterns and stay hydrated. Avoid screen glare."
    },
    {
      id: "type2-diabetes",
      name: "Type 2 Diabetes Mellitus Management",
      category: "Endocrinology & Metabolic",
      severity: "Chronic",
      symptoms: ["Excessive thirst (Polydipsia)", "Frequent urination particularly at night (Polyuria)", "Unexplained weight loss", "Blurred vision", "Slow healing sores"],
      description: "Metabolic disorder characterized by progressive insulin resistance and relative insulin deficiency resulting in hyperglycemia.",
      firstLineSalts: ["metformin", "glimepiride"],
      emergencyFlags: [
        "Fruity breath, deep rapid breathing, severe vomiting (Diabetic Ketoacidosis / DKA)",
        "Hypoglycemia episode (Blood sugar <70 mg/dL with tremors, sweating, confusion, cold clamminess) - Immediate sugar/glucose intake needed",
        "Sudden loss of consciousness"
      ],
      lifestyleGuidance: "Follow low-glycemic index, high-fiber diet. Daily 30-minute brisk walk. Self-monitor fasting and post-prandial blood glucose. Regular foot checks."
    },
    {
      id: "essential-hypertension",
      name: "Essential Hypertension (High Blood Pressure)",
      category: "Cardiovascular",
      severity: "Chronic",
      symptoms: ["Often asymptomatic ('Silent Killer')", "Occipital early morning headache", "Dizziness or lightheadedness", "Palpitations", "Nosebleeds (Epistaxis) in severe spikes"],
      description: "Persistent systemic arterial blood pressure elevated above standard therapeutic thresholds (Systolic >= 130 mmHg, Diastolic >= 80 mmHg).",
      firstLineSalts: ["telmisartan", "amlodipine"],
      emergencyFlags: [
        "Hypertensive crisis: Blood pressure >= 180/120 mmHg",
        "Severe crushing retrosternal chest pain or shortness of breath",
        "Acute neurological deficits, sudden numbness, or vision loss"
      ],
      lifestyleGuidance: "DASH diet: Restrict sodium intake to <2 grams/day. Daily aerobic exercise. Stress reduction techniques. Avoid tobacco and excessive alcohol."
    },
    {
      id: "urinary-tract-infection",
      name: "Uncomplicated Urinary Tract Infection (UTI)",
      category: "Nephrology / Infectious",
      severity: "Moderate",
      symptoms: ["Burning sensation or sharp pain during urination (Dysuria)", "Increased frequency and urgency to urinate", "Cloudy or foul-smelling urine", "Lower pelvic or suprapubic heaviness"],
      description: "Bacterial colonization and infection of the lower urinary tract, most commonly caused by Uropathogenic Escherichia coli (UPEC).",
      firstLineSalts: ["cefixime", "ciprofloxacin", "paracetamol"],
      emergencyFlags: [
        "High spiking fever with shaking chills and rigors",
        "Severe flank or costovertebral angle loin pain (Pyelonephritis / Kidney infection)",
        "Gross hematuria (visible blood clots in urine)"
      ],
      lifestyleGuidance: "Drink 2.5 to 3 liters of water daily. Urinate frequently without holding. Cranberry extract may prevent bacterial adhesion. Maintain hygiene."
    },
    {
      id: "muscle-spasm-pain",
      name: "Acute Muscle Spasm & Musculoskeletal Strain",
      category: "Orthopedics & Rheumatology",
      severity: "Mild to Moderate",
      symptoms: ["Sudden involuntary painful muscle contraction", "Local tenderness and swelling", "Restricted range of motion", "Stiffness after physical exertion or posture strain"],
      description: "Acute muscle fiber strain or involuntary contracture commonly occurring in lumbar back, neck, calf, or shoulder.",
      firstLineSalts: ["diclofenac-chlorzoxazone", "ibuprofen", "paracetamol"],
      emergencyFlags: [
        "Numbness in groin area or loss of bowel/bladder control (Cauda Equina Syndrome)",
        "Inability to bear any weight with severe visible deformity",
        "Pain accompanied by unexplained high fever"
      ],
      lifestyleGuidance: "R.I.C.E. protocol for first 48 hours (Rest, Ice, Compression, Elevation). Gentle passive stretching. Avoid heavy lifting."
    },
    {
      id: "asthma-bronchospasm",
      name: "Bronchial Asthma & Wheezing",
      category: "Respiratory",
      severity: "Moderate to Chronic",
      symptoms: ["Expiratory high-pitched wheezing", "Episodes of shortness of breath", "Dry hacking cough worse at night", "Chest tightness"],
      description: "Chronic inflammatory disorder of airways causing hyper-responsiveness, airflow limitation, and reversible bronchoconstriction.",
      firstLineSalts: ["salbutamol", "budesonide-formoterol", "montelukast-levocetirizine"],
      emergencyFlags: [
        "Inability to speak full sentences in one breath",
        "Intercostal retractions (chest and neck muscles pulling in heavily)",
        "Peak Expiratory Flow < 50% of personal best",
        "No relief after 4-6 puffs of rescue reliever inhaler"
      ],
      lifestyleGuidance: "Always carry rescue inhaler (Salbutamol). Use spacer device for optimal lung deposition. Avoid cold air, sudden temperature changes, and aerosols."
    }
  ],

  // Comprehensive Drug Salts & Chemical Formulations
  salts: {
    "paracetamol": {
      id: "paracetamol",
      saltName: "Paracetamol (Acetaminophen)",
      chemicalClass: "Aniline derivative / Central COX inhibitor",
      therapeuticCategory: "Antipyretic & Analgesic",
      categorySlug: "pain-fever",
      indications: [
        "Fever reduction (Pyrexia of any etiology)",
        "Mild to moderate pain relief (Headache, dental pain, body ache, post-vaccination fever)",
        "First-line analgesic in osteoarthritis and musculoskeletal strain"
      ],
      brands: [
        { name: "Dolo 650", strength: "650 mg tablet", company: "Micro Labs" },
        { name: "Crocin Advance", strength: "500 mg / 650 mg tablet", company: "GSK" },
        { name: "Calpol", strength: "120 mg/5ml & 250 mg/5ml suspension, 500mg tab", company: "GSK" },
        { name: "Pacimol", strength: "500 mg / 650 mg tablet", company: "Ipca" },
        { name: "Tylenol", strength: "325 mg / 500 mg / 650 mg tablet", company: "J&J" }
      ],
      pediatricDosing: {
        formulaPerKg: "15 mg/kg/dose",
        minMgPerKg: 10,
        maxMgPerKg: 15,
        frequency: "Every 4 to 6 hours as needed (Maximum 4 doses in 24 hours)",
        maxDailyCeilingPerKg: 60,
        liquidFormulations: [
          { name: "Paediatric Drops", strength: "100 mg / 1 ml", typicalAge: "0 - 1 year", perMlMg: 100 },
          { name: "Junior Suspension", strength: "120 mg / 5 ml", typicalAge: "1 - 5 years", perMlMg: 24 },
          { name: "Forte Suspension", strength: "250 mg / 5 ml", typicalAge: "5 - 12 years", perMlMg: 50 }
        ],
        clinicalNote: "Calculate strictly based on weight, not age alone. Never exceed 4 doses in 24 hours."
      },
      adultDosing: {
        standardSingleDose: "500 mg to 650 mg tablet",
        frequency: "Every 6 hours as required",
        maxDailyCeiling: "3000 mg to 4000 mg in 24 hours",
        elderlyRenalAdjustment: "Reduce maximum daily ceiling to 2000 mg/day in chronic alcohol users or hepatic impairment."
      },
      mechanism: "Inhibits central prostaglandin synthesis via COX enzyme pathway in the CNS. Acts on the hypothalamic heat-regulating center to produce peripheral vasodilation and heat dissipation.",
      contraindications: [
        "Severe acute hepatic failure or active cirrhosis",
        "Known hypersensitivity to acetaminophen",
        "Caution in chronic malnutrition or severe alcoholism"
      ],
      sideEffects: {
        common: ["Nausea", "Mild abdominal discomfort"],
        serious: ["Hepatotoxicity (liver necrosis with overdose >150mg/kg)", "Skin rash or Stevens-Johnson syndrome (rare)"]
      },
      administration: "Take with or without food. Drink a full glass of water. Maintain minimum 4 hours between consecutive doses.",
      allergyClass: "None (safe alternative in NSAID-sensitive patients)"
    },

    "ibuprofen": {
      id: "ibuprofen",
      saltName: "Ibuprofen",
      chemicalClass: "Propionic acid derivative / Non-Selective NSAID",
      therapeuticCategory: "Non-Steroidal Anti-Inflammatory Drug (NSAID) & Antipyretic",
      categorySlug: "pain-fever",
      indications: [
        "Moderate to severe inflammatory pain (Sprains, strains, dental extraction, arthritis)",
        "High refractory fever unresponsive to paracetamol",
        "Migraine attacks and dysmenorrhea (menstrual cramps)"
      ],
      brands: [
        { name: "Brufen", strength: "200 mg / 400 mg tablet, 100mg/5ml syrup", company: "Abbott" },
        { name: "Combiflam", strength: "Ibuprofen 400mg + Paracetamol 325mg tablet", company: "Sanofi" },
        { name: "Advil", strength: "200 mg liqui-gels", company: "Haleon" },
        { name: "Ibugesic Plus", strength: "Ibuprofen 100mg + Paracetamol 162.5mg / 5ml", company: "Cipla" }
      ],
      pediatricDosing: {
        formulaPerKg: "10 mg/kg/dose",
        minMgPerKg: 5,
        maxMgPerKg: 10,
        frequency: "Every 6 to 8 hours as needed (Maximum 3 to 4 doses in 24 hours)",
        maxDailyCeilingPerKg: 40,
        liquidFormulations: [
          { name: "Paediatric Suspension", strength: "100 mg / 5 ml", typicalAge: "6 months - 12 years", perMlMg: 20 }
        ],
        clinicalNote: "Contraindicated in infants under 3 months or weight < 5 kg. Never administer on empty stomach."
      },
      adultDosing: {
        standardSingleDose: "400 mg tablet",
        frequency: "Every 8 hours with or after meals",
        maxDailyCeiling: "1200 mg (OTC) up to 2400 mg (under specialist supervision)",
        elderlyRenalAdjustment: "Avoid in significant chronic kidney disease (CKD stage 3-5) and congestive heart failure."
      },
      mechanism: "Reversibly inhibits Cyclooxygenase-1 (COX-1) and Cyclooxygenase-2 (COX-2) enzymes, halting the peripheral synthesis of inflammatory prostaglandins and prostacyclins.",
      contraindications: [
        "Active peptic ulcer or gastrointestinal bleeding",
        "History of NSAID-induced asthma or bronchospasm (Aspirin Triad)",
        "Third trimester of pregnancy (causes premature closure of ductus arteriosus)",
        "Severe renal insufficiency"
      ],
      sideEffects: {
        common: ["Dyspepsia", "Gastric irritation", "Nausea", "Headache"],
        serious: ["Gastric ulceration / GI bleeding", "Acute kidney injury", "Fluid retention / Elevated BP"]
      },
      administration: "Strictly administer with meals or milk to protect gastric lining. Avoid simultaneous alcohol intake.",
      allergyClass: "NSAID allergy"
    },

    "amoxicillin-clavulanate": {
      id: "amoxicillin-clavulanate",
      saltName: "Amoxicillin + Potassium Clavulanate (Co-Amoxiclav)",
      chemicalClass: "Aminopenicillin + Beta-Lactamase Inhibitor",
      therapeuticCategory: "Broad-Spectrum Antibacterial",
      categorySlug: "antibiotics",
      indications: [
        "Bacterial acute pharyngitis and tonsillitis",
        "Acute bacterial otitis media and acute bacterial sinusitis",
        "Community-acquired lower respiratory tract infections",
        "Skin and soft tissue infections, animal bites"
      ],
      brands: [
        { name: "Augmentin 625 Duo", strength: "Amox 500mg + Clav 125mg tablet", company: "GSK" },
        { name: "Moxikind-CV 625", strength: "Amox 500mg + Clav 125mg tablet", company: "Mankind" },
        { name: "Clavam 625", strength: "Amox 500mg + Clav 125mg tablet", company: "Alkem" },
        { name: "Augmentin Duo Dry Syrup", strength: "Amox 200mg + Clav 28.5mg / 5ml or 400+57mg / 5ml", company: "GSK" }
      ],
      pediatricDosing: {
        formulaPerKg: "30 mg/kg/day to 45 mg/kg/day (amoxicillin component) in 2 divided doses",
        minMgPerKg: 15,
        maxMgPerKg: 22.5,
        frequency: "Every 12 hours (BID) for 5 to 7 days",
        maxDailyCeilingPerKg: 90,
        liquidFormulations: [
          { name: "Oral Dry Syrup Duo", strength: "Amox 200 mg + Clav 28.5 mg / 5 ml", typicalAge: "1 - 6 years", perMlMg: 40 },
          { name: "Forte Dry Syrup", strength: "Amox 400 mg + Clav 57 mg / 5 ml", typicalAge: "6 - 12 years", perMlMg: 80 }
        ],
        clinicalNote: "Reconstitute with boiled and cooled water up to ring mark. Store in refrigerator and discard after 7 days."
      },
      adultDosing: {
        standardSingleDose: "625 mg tablet (500mg Amox + 125mg Clav)",
        frequency: "Every 12 hours (Twice daily) or every 8 hours for severe infections",
        maxDailyCeiling: "2000 mg amoxicillin component per day",
        elderlyRenalAdjustment: "Adjust dosing interval in GFR < 30 ml/min. Do not use 875/125mg tablets."
      },
      mechanism: "Amoxicillin binds to penicillin-binding proteins (PBPs) inhibiting bacterial cell wall peptidoglycan synthesis. Clavulanic acid inactivates bacterial beta-lactamase enzymes, preventing amoxicillin degradation.",
      contraindications: [
        "Confirmed severe hypersensitivity/anaphylaxis to Penicillins or Cephalosporins",
        "History of amoxicillin-clavulanate associated cholestatic jaundice or liver impairment"
      ],
      sideEffects: {
        common: ["Diarrhea", "Nausea and vomiting", "Abdominal colic", "Oral or vaginal candidiasis (thrush)"],
        serious: ["Anaphylactic shock", "Clostridioides difficile-associated pseudomembranous colitis", "Cholestatic hepatitis"]
      },
      administration: "Take at the start of a meal to minimize gastrointestinal intolerance and maximize absorption. Complete full antibiotic course.",
      allergyClass: "Penicillin allergy"
    },

    "azithromycin": {
      id: "azithromycin",
      saltName: "Azithromycin",
      chemicalClass: "Macrolide (Azalide subclass)",
      therapeuticCategory: "Broad-Spectrum Antibacterial",
      categorySlug: "antibiotics",
      indications: [
        "Atypical pneumonia and acute exacerbation of chronic bronchitis",
        "Streptococcal pharyngitis/tonsillitis in penicillin-allergic patients",
        "Chlamydia trachomatis genital infections",
        "Uncomplicated skin and soft-tissue infections"
      ],
      brands: [
        { name: "Azee 500", strength: "500 mg tablet", company: "Cipla" },
        { name: "Azithral 500", strength: "500 mg tablet", company: "Alembic" },
        { name: "Zithromax", strength: "250 mg / 500 mg tab, 200mg/5ml suspension", company: "Pfizer" },
        { name: "Azee Dry Syrup", strength: "100 mg / 5 ml & 200 mg / 5 ml", company: "Cipla" }
      ],
      pediatricDosing: {
        formulaPerKg: "10 mg/kg once daily for 3 days",
        minMgPerKg: 10,
        maxMgPerKg: 10,
        frequency: "Once daily (OD) for 3 consecutive days",
        maxDailyCeilingPerKg: 500,
        liquidFormulations: [
          { name: "Pediatric Suspension", strength: "100 mg / 5 ml", typicalAge: "6 months - 3 years", perMlMg: 20 },
          { name: "Junior Suspension", strength: "200 mg / 5 ml", typicalAge: "3 - 12 years", perMlMg: 40 }
        ],
        clinicalNote: "Single daily dose. Excellent compliance due to once-daily regimen and long tissue half-life (68 hours)."
      },
      adultDosing: {
        standardSingleDose: "500 mg tablet once daily for 3 consecutive days (Total course: 1.5g)",
        frequency: "Once daily (OD)",
        maxDailyCeiling: "500 mg per day for standard respiratory tract infections",
        elderlyRenalAdjustment: "Caution in patients with cardiac arrhythmias or baseline prolonged QT interval."
      },
      mechanism: "Reversibly binds to the 50S ribosomal subunit of susceptible microorganisms, inhibiting transpeptidation and protein synthesis.",
      contraindications: [
        "Hypersensitivity to azithromycin, erythromycin, or any macrolide",
        "History of cholestatic jaundice associated with prior azithromycin use",
        "Congenital prolonged QT syndrome or concurrent use with QT-prolonging drugs"
      ],
      sideEffects: {
        common: ["Diarrhea/loose stools", "Abdominal discomfort", "Nausea", "Headache"],
        serious: ["QT prolongation & Torsades de pointes", "Hepatotoxicity", "Angioedema"]
      },
      administration: "Can be taken with or without meals, but food improves gastrointestinal tolerability. Avoid antacids containing aluminum or magnesium within 2 hours.",
      allergyClass: "Macrolide allergy"
    },

    "pantoprazole-domperidone": {
      id: "pantoprazole-domperidone",
      saltName: "Pantoprazole + Domperidone (SR)",
      chemicalClass: "Proton Pump Inhibitor (PPI) + Peripheral Dopamine D2 Antagonist",
      therapeuticCategory: "Gastroprokinetic & Acid Suppressant",
      categorySlug: "acidity-gerd",
      indications: [
        "Gastroesophageal Reflux Disease (GERD) with acid regurgitation and delayed gastric emptying",
        "Erosive esophagitis and non-ulcer functional dyspepsia",
        "Reflux associated nausea, belching, and early satiety"
      ],
      brands: [
        { name: "Pan-D", strength: "Pantoprazole 40mg + Domperidone 30mg SR capsule", company: "Alkem" },
        { name: "Pantocid-D SR", strength: "Pantoprazole 40mg + Domperidone 30mg SR capsule", company: "Sun Pharma" },
        { name: "Dompan SR", strength: "Pantoprazole 40mg + Domperidone 30mg capsule", company: "Medley" },
        { name: "Pantosec-D SR", strength: "Pantoprazole 40mg + Domperidone 30mg SR capsule", company: "Cipla" }
      ],
      pediatricDosing: {
        formulaPerKg: "Not routinely recommended for children under 12 years without pediatric specialist prescription.",
        minMgPerKg: 0,
        maxMgPerKg: 0,
        frequency: "Pediatric dosing requires pure single-agent syrup.",
        maxDailyCeilingPerKg: 0,
        liquidFormulations: [],
        clinicalNote: "Combination SR capsules must be swallowed whole; do not chew or crush for children."
      },
      adultDosing: {
        standardSingleDose: "One capsule (Pantoprazole 40mg + Domperidone 30mg SR)",
        frequency: "Once daily in the morning, exactly 30 to 60 minutes before breakfast",
        maxDailyCeiling: "One capsule daily for 2 to 4 weeks",
        elderlyRenalAdjustment: "Use caution in patients >65 years due to domperidone QT interval effects."
      },
      mechanism: "Pantoprazole irreversibly blocks H+/K+ ATPase enzyme system in gastric parietal cells. Domperidone blocks peripheral dopamine D2 receptors in upper GI tract, accelerating gastric emptying and preventing reflux.",
      contraindications: [
        "Prolactin-releasing pituitary tumor (prolactinoma)",
        "Gastrointestinal hemorrhage, mechanical obstruction, or bowel perforation",
        "Moderate to severe hepatic impairment",
        "Underlying cardiac conduction abnormalities / prolonged QTc"
      ],
      sideEffects: {
        common: ["Dry mouth", "Mild headache", "Diarrhea or constipation", "Abdominal cramps"],
        serious: ["Cardiac arrhythmias (QTc prolongation)", "Hyperprolactinemia"]
      },
      administration: "Swallow whole with water 30–60 minutes prior to first meal of the day. Do not crush or chew.",
      allergyClass: "None"
    },

    "pantoprazole": {
      id: "pantoprazole",
      saltName: "Pantoprazole Sodium",
      chemicalClass: "Substituted Benzimidazole / Proton Pump Inhibitor",
      therapeuticCategory: "Potent Gastric Acid Suppressor",
      categorySlug: "acidity-gerd",
      indications: [
        "Gastric and duodenal peptic ulcers",
        "Gastroesophageal reflux disease (GERD)",
        "Prophylaxis against NSAID-induced gastric ulceration",
        "Zollinger-Ellison syndrome"
      ],
      brands: [
        { name: "Pan 40", strength: "40 mg tablet", company: "Alkem" },
        { name: "Pantocid 40", strength: "40 mg tablet", company: "Sun Pharma" },
        { name: "Pantop 40", strength: "40 mg tablet", company: "Aristo" },
        { name: "Protonix", strength: "20 mg / 40 mg tablet", company: "Pfizer" }
      ],
      pediatricDosing: {
        formulaPerKg: "1 mg/kg/day (children >= 5 years and weight >= 15 kg)",
        minMgPerKg: 0.5,
        maxMgPerKg: 1.0,
        frequency: "Once daily in the morning before food",
        maxDailyCeilingPerKg: 40,
        liquidFormulations: [
          { name: "Oral Granules Sachet", strength: "40 mg sachet", typicalAge: "Children > 5 years", perMlMg: 8 }
        ],
        clinicalNote: "Tablets should not be chewed or crushed. Sachet granules mixed with applesauce."
      },
      adultDosing: {
        standardSingleDose: "40 mg tablet",
        frequency: "Once daily, 30 to 45 minutes before morning breakfast",
        maxDailyCeiling: "40 mg (standard GERD) up to 80 mg/day",
        elderlyRenalAdjustment: "No dose reduction required for elderly patients with normal hepatic function."
      },
      mechanism: "Inhibits gastric acid secretion by specifically blocking the H+/K+-ATPase proton pump of parietal cells, suppressing basal and stimulated acid production.",
      contraindications: [
        "Known hypersensitivity to pantoprazole or other substituted benzimidazoles",
        "Concomitant administration with rilpivirine"
      ],
      sideEffects: {
        common: ["Headache", "Diarrhea", "Flatulence", "Abdominal pain"],
        serious: ["Hypomagnesemia with long-term use", "Vitamin B12 deficiency", "Bone fracture risk with multi-year high-dose therapy"]
      },
      administration: "Swallow intact with water 30 minutes before breakfast. Do not crush or split.",
      allergyClass: "None"
    },

    "omeprazole": {
      id: "omeprazole",
      saltName: "Omeprazole",
      chemicalClass: "Proton Pump Inhibitor",
      therapeuticCategory: "Gastric Acid Inhibitor",
      categorySlug: "acidity-gerd",
      indications: [
        "Active duodenal and benign gastric ulcers",
        "GERD and erosive reflux esophagitis",
        "H. pylori eradication (triple therapy regimen)",
        "Acid indigestion and heartburn"
      ],
      brands: [
        { name: "Omez 20", strength: "20 mg capsule", company: "Dr. Reddy's" },
        { name: "Prilosec", strength: "20 mg tablet", company: "P&G" },
        { name: "Ocid 20", strength: "20 mg capsule", company: "Zydus" }
      ],
      pediatricDosing: {
        formulaPerKg: "0.7 to 1 mg/kg/day",
        minMgPerKg: 0.5,
        maxMgPerKg: 1.0,
        frequency: "Once daily in the morning",
        maxDailyCeilingPerKg: 20,
        liquidFormulations: [
          { name: "Oral Suspension / Pellets", strength: "10 mg / packet", typicalAge: "Children > 1 year", perMlMg: 2 }
        ],
        clinicalNote: "Pellets inside capsule may be opened and mixed into yogurt; do not crush the enteric pellets."
      },
      adultDosing: {
        standardSingleDose: "20 mg to 40 mg capsule",
        frequency: "Once daily before breakfast",
        maxDailyCeiling: "40 mg daily",
        elderlyRenalAdjustment: "No routine adjustment required in mild to moderate renal insufficiency."
      },
      mechanism: "Suppresses gastric acid secretion by specific inhibition of the intracellular H+/K+-ATPase enzyme system at the secretory surface of the gastric parietal cell.",
      contraindications: ["Concurrent administration with clopidogrel (attenuates antiplatelet activity)", "Severe hypersensitivity to omeprazole"],
      sideEffects: {
        common: ["Nausea", "Headache", "Constipation", "Flatulence"],
        serious: ["Subacute cutaneous lupus erythematosus", "Clostridioides difficile diarrhea"]
      },
      administration: "Take 30 to 60 minutes before morning meal with water.",
      allergyClass: "None"
    },

    "ors-zinc": {
      id: "ors-zinc",
      saltName: "Oral Rehydration Salts (WHO Formula) + Zinc Sulphate",
      chemicalClass: "Electrolyte replacement solution + Essential Trace Mineral",
      therapeuticCategory: "Fluid & Electrolyte Replenisher / Antidiarrheal",
      categorySlug: "acidity-gerd",
      indications: [
        "Acute gastroenteritis and dehydration from watery diarrhea",
        "Fluid replenishment in heat exhaustion, vomiting, and cholera",
        "Shortening duration and recurrence of childhood diarrhea episodes (Zinc)"
      ],
      brands: [
        { name: "Electral Powder", strength: "21.8g sachet (for 1 Liter clean water)", company: "FDC Ltd" },
        { name: "Enerzal ORS", strength: "Ready-to-drink tetrapack & powder", company: "FDC" },
        { name: "Zinconia", strength: "Zinc Sulphate 20 mg tablet / syrup", company: "Zuventus" },
        { name: "Pedialyte", strength: "Electrolyte solution", company: "Abbott" }
      ],
      pediatricDosing: {
        formulaPerKg: "75 ml/kg of prepared ORS over first 4 hours, then 10 ml/kg after every loose stool",
        minMgPerKg: 10,
        maxMgPerKg: 20,
        frequency: "Frequent small sips every 5 to 10 minutes",
        maxDailyCeilingPerKg: 150,
        liquidFormulations: [
          { name: "Zinc Oral Drops / Syrup", strength: "20 mg elemental zinc / 5 ml", typicalAge: "Infants & children", perMlMg: 4 }
        ],
        clinicalNote: "Zinc: 10mg/day for infants < 6 months, 20mg/day for children >= 6 months, continued for 14 continuous days."
      },
      adultDosing: {
        standardSingleDose: "200 ml to 400 ml of reconstituted solution after every loose motion or bout of vomiting",
        frequency: "Continuously as tolerated until diarrhea resolves",
        maxDailyCeiling: "2 to 3 Liters per 24 hours (to match fluid losses)",
        elderlyRenalAdjustment: "Monitor closely in severe congestive heart failure and oliguric chronic kidney disease."
      },
      mechanism: "Coupled sodium-glucose active co-transport across intact intestinal brush border membrane draws water passively into circulation through osmotic gradient, reversing dehydration.",
      contraindications: [
        "Paralytic ileus or bowel obstruction",
        "Severe intractable vomiting where oral intake is impossible (requires IV fluids)",
        "Severe stupor or coma"
      ],
      sideEffects: {
        common: ["Occasional nausea if drunk too rapidly"],
        serious: ["Hypernatremia (only if prepared with incorrect water volumes)"]
      },
      administration: "Dissolve entire contents of 1 packet in exactly 1 Liter (1000 ml) of clean drinking water. Do not boil prepared solution. Discard after 24 hours.",
      allergyClass: "None"
    },

    "ondansetron": {
      id: "ondansetron",
      saltName: "Ondansetron Hydrochloride",
      chemicalClass: "Selective Serotonin 5-HT3 Receptor Antagonist",
      therapeuticCategory: "Antiemetic",
      categorySlug: "acidity-gerd",
      indications: [
        "Prevention and treatment of acute nausea and vomiting in gastroenteritis",
        "Chemotherapy & radiation-induced nausea and vomiting (CINV)",
        "Post-operative nausea and vomiting (PONV)"
      ],
      brands: [
        { name: "Emeset", strength: "4 mg / 8 mg tablet, 2mg/5ml syrup", company: "Cipla" },
        { name: "Vomikind", strength: "4 mg MD (Mouth Dissolving) tab, 2mg/5ml syrup", company: "Mankind" },
        { name: "Zofran", strength: "4 mg / 8 mg ODT", company: "Novartis" }
      ],
      pediatricDosing: {
        formulaPerKg: "0.15 mg/kg/dose",
        minMgPerKg: 0.1,
        maxMgPerKg: 0.15,
        frequency: "Administer 1 dose; repeat in 8 hours if needed (max 3 doses/day)",
        maxDailyCeilingPerKg: 0.45,
        liquidFormulations: [
          { name: "Paediatric Syrup", strength: "2 mg / 5 ml", typicalAge: "Children > 6 months", perMlMg: 0.4 },
          { name: "Mouth Dissolving Tablet", strength: "2 mg & 4 mg MD", typicalAge: "Children > 4 years", perMlMg: 0 }
        ],
        clinicalNote: "Halts vomiting to enable successful oral ORS rehydration."
      },
      adultDosing: {
        standardSingleDose: "4 mg to 8 mg tablet (or mouth-dissolving tablet)",
        frequency: "Every 8 hours as needed",
        maxDailyCeiling: "16 mg to 24 mg per day",
        elderlyRenalAdjustment: "Max 8 mg daily in severe hepatic impairment."
      },
      mechanism: "Selectively antagonizes 5-HT3 serotonin receptors in the chemoreceptor trigger zone (CTZ) of area postrema and on vagal nerve terminals in the gastrointestinal tract.",
      contraindications: [
        "Concomitant use with apomorphine (causes profound hypotension)",
        "Congenital long QT syndrome"
      ],
      sideEffects: {
        common: ["Headache", "Constipation", "Fatigue", "Transient dizziness"],
        serious: ["QTc interval prolongation", "Serotonin syndrome"]
      },
      administration: "Place mouth-dissolving tablet on tongue and allow to dissolve; swallow with saliva 30 minutes before meals.",
      allergyClass: "None"
    },

    "cetirizine": {
      id: "cetirizine",
      saltName: "Cetirizine Hydrochloride",
      chemicalClass: "Piperazine derivative / Second-Generation H1-Antihistamine",
      therapeuticCategory: "Antiallergic & Antihistaminic",
      categorySlug: "allergy-cold",
      indications: [
        "Allergic rhinitis (Perennial and seasonal hay fever)",
        "Chronic idiopathic urticaria (hives and wheals)",
        "Allergic conjunctivitis and pruritus (itching)"
      ],
      brands: [
        { name: "Cetzine 10", strength: "10 mg tablet", company: "Dr. Reddy's" },
        { name: "Alerid", strength: "10 mg tablet, 5mg/5ml syrup", company: "Cipla" },
        { name: "Zyrtec", strength: "10 mg tablet, 1mg/ml solution", company: "J&J" },
        { name: "Okacet", strength: "10 mg tablet", company: "Cipla" }
      ],
      pediatricDosing: {
        formulaPerKg: "0.25 mg/kg/day (or age-tiered: 6mo-2yr: 2.5mg OD; 2-6yr: 2.5-5mg OD; >6yr: 5-10mg OD)",
        minMgPerKg: 0.2,
        maxMgPerKg: 0.25,
        frequency: "Once daily in the evening",
        maxDailyCeilingPerKg: 10,
        liquidFormulations: [
          { name: "Paediatric Drops", strength: "10 mg / 1 ml", typicalAge: "6 months - 2 years", perMlMg: 10 },
          { name: "Junior Syrup", strength: "5 mg / 5 ml", typicalAge: "2 - 6 years", perMlMg: 1 }
        ],
        clinicalNote: "Mild sedation may occur; preferred dosing at bedtime."
      },
      adultDosing: {
        standardSingleDose: "10 mg tablet",
        frequency: "Once daily at bedtime",
        maxDailyCeiling: "10 mg per day",
        elderlyRenalAdjustment: "Reduce dose to 5 mg once daily if creatinine clearance is 10-31 ml/min."
      },
      mechanism: "Competes with free histamine for binding at H1-receptor sites in GI tract, blood vessels, and bronchial muscle, preventing histamine-induced capillary dilation and edema.",
      contraindications: [
        "Severe end-stage renal disease (CrCl < 10 ml/min)",
        "Hypersensitivity to cetirizine or hydroxyzine"
      ],
      sideEffects: {
        common: ["Drowsiness / Somnolence", "Dry mouth", "Fatigue", "Pharyngitis"],
        serious: ["Urinary retention", "Paradoxical excitation in young children"]
      },
      administration: "Take with or without food, preferably in evening. Avoid alcohol.",
      allergyClass: "None"
    },

    "fexofenadine": {
      id: "fexofenadine",
      saltName: "Fexofenadine Hydrochloride",
      chemicalClass: "Piperidine derivative / Non-Sedating Second-Generation H1 Antihistamine",
      therapeuticCategory: "Non-Drowsy Antiallergic",
      categorySlug: "allergy-cold",
      indications: [
        "Daytime seasonal allergic rhinitis (sneezing, rhinorrhea, itchy nose)",
        "Chronic idiopathic urticaria (skin allergic reactions)",
        "Allergy relief for drivers, pilots, and students requiring zero daytime sedation"
      ],
      brands: [
        { name: "Allegra 120", strength: "120 mg tablet", company: "Sanofi" },
        { name: "Allegra 180", strength: "180 mg tablet", company: "Sanofi" },
        { name: "Fexova 120", strength: "120 mg tablet", company: "Ipca" },
        { name: "Allegra Suspension", strength: "30 mg / 5 ml", company: "Sanofi" }
      ],
      pediatricDosing: {
        formulaPerKg: "30 mg twice daily for children 2 to 11 years (weight-based ~1 to 2 mg/kg)",
        minMgPerKg: 1,
        maxMgPerKg: 2,
        frequency: "Twice daily (for children 2-11) or 120mg once daily for children >= 12 years",
        maxDailyCeilingPerKg: 180,
        liquidFormulations: [
          { name: "Paediatric Suspension", strength: "30 mg / 5 ml", typicalAge: "2 - 11 years", perMlMg: 6 }
        ],
        clinicalNote: "Zero CNS sedation; does not cross blood-brain barrier."
      },
      adultDosing: {
        standardSingleDose: "120 mg once daily (for allergic rhinitis) or 180 mg once daily (for urticaria)",
        frequency: "Once daily (OD)",
        maxDailyCeiling: "180 mg in 24 hours",
        elderlyRenalAdjustment: "Start at 60 mg once daily in moderate renal impairment."
      },
      mechanism: "Selectively antagonizes peripheral H1 receptors without penetrating central nervous system, avoiding drowsiness and cognitive impairment.",
      contraindications: ["Known hypersensitivity to fexofenadine"],
      sideEffects: {
        common: ["Headache", "Nausea", "Mild dizziness"],
        serious: ["Hypersensitivity reaction (dyspnea, flushing)"]
      },
      administration: "Take with water. Avoid fruit juices (grapefruit, orange, apple) within 2 hours as they decrease absorption.",
      allergyClass: "None"
    },

    "montelukast-levocetirizine": {
      id: "montelukast-levocetirizine",
      saltName: "Montelukast Sodium + Levocetirizine Dihydrochloride",
      chemicalClass: "Leukotriene Receptor Antagonist (LTRA) + Active R-enantiomer H1 Antihistamine",
      therapeuticCategory: "Dual Action Antiallergic & Bronchodilator Adjunct",
      categorySlug: "allergy-cold",
      indications: [
        "Persistent allergic rhinitis complicated by asthma or nocturnal bronchospasm",
        "Chronic allergic cough with chest congestion",
        "Exercise-induced bronchoconstriction prevention"
      ],
      brands: [
        { name: "Montair-LC", strength: "Montelukast 10mg + Levocetirizine 5mg tablet", company: "Cipla" },
        { name: "Telekast-L", strength: "Montelukast 10mg + Levocetirizine 5mg tablet", company: "Lupin" },
        { name: "Monticope", strength: "Montelukast 10mg + Levocetirizine 5mg tablet, Kid syrup (4mg+2.5mg/5ml)", company: "Mankind" },
        { name: "Singulair", strength: "Montelukast 10mg single entity tab", company: "Organon" }
      ],
      pediatricDosing: {
        formulaPerKg: "Age-tiered: Children 2-5 yrs: Montelukast 4mg + Levocetirizine 2.5mg; Children 6-11 yrs: Montelukast 5mg + Levocetirizine 2.5mg",
        minMgPerKg: 0,
        maxMgPerKg: 0,
        frequency: "Once daily at night",
        maxDailyCeilingPerKg: 10,
        liquidFormulations: [
          { name: "Kid Suspension", strength: "Montelukast 4 mg + Levocetirizine 2.5 mg / 5 ml", typicalAge: "2 - 5 years", perMlMg: 0.8 },
          { name: "Chewable Tablet", strength: "Montelukast 5 mg + Levocetirizine 2.5 mg", typicalAge: "6 - 11 years", perMlMg: 0 }
        ],
        clinicalNote: "Always administer at bedtime. Monitor for mood or behavioral changes in children."
      },
      adultDosing: {
        standardSingleDose: "1 tablet (Montelukast 10mg + Levocetirizine 5mg)",
        frequency: "Once daily at bedtime",
        maxDailyCeiling: "One combination tablet per 24 hours",
        elderlyRenalAdjustment: "Adjust according to creatinine clearance due to levocetirizine renal excretion."
      },
      mechanism: "Levocetirizine blocks histamine H1 responses; Montelukast blocks cysteinyl leukotriene receptors (CysLT1), reducing airway inflammation and bronchoconstriction.",
      contraindications: [
        "Severe renal failure (CrCl < 10 ml/min)",
        "Pre-existing severe neuropsychiatric disorders (depression, suicidal ideation)"
      ],
      sideEffects: {
        common: ["Somnolence / Sedation", "Dry mouth", "Mild headache", "Upper abdominal pain"],
        serious: ["Neuropsychiatric events (vivid dreams, insomnia, anxiety)"]
      },
      administration: "Swallow whole with water at bedtime. May be taken with or without food.",
      allergyClass: "None"
    },

    "metformin": {
      id: "metformin",
      saltName: "Metformin Hydrochloride",
      chemicalClass: "Biguanide",
      therapeuticCategory: "First-Line Oral Antidiabetic",
      categorySlug: "diabetes",
      indications: [
        "Type 2 Diabetes Mellitus (First-choice pharmacological therapy)",
        "Impaired glucose tolerance / Pre-diabetes in high-risk individuals",
        "Polycystic Ovary Syndrome (PCOS) insulin sensitizer"
      ],
      brands: [
        { name: "Glycomet 500 / 850 / 1000", strength: "500 mg, 850 mg, 1000 mg tablet (Plain & SR)", company: "USV" },
        { name: "Glucophage", strength: "500 mg, 850 mg, 1000 mg tablet", company: "Merck" },
        { name: "Obimet 500 SR", strength: "500 mg sustained release tablet", company: "Abbott" }
      ],
      pediatricDosing: {
        formulaPerKg: "Approved in children >= 10 years at initial dose 500 mg once or twice daily, titrated up to max 2000 mg/day",
        minMgPerKg: 0,
        maxMgPerKg: 0,
        frequency: "Twice daily with meals",
        maxDailyCeilingPerKg: 2000,
        liquidFormulations: [
          { name: "Oral Solution", strength: "500 mg / 5 ml", typicalAge: "Children >= 10 years", perMlMg: 100 }
        ],
        clinicalNote: "Only for confirmed pediatric Type 2 Diabetes; never in Type 1 Diabetes without insulin."
      },
      adultDosing: {
        standardSingleDose: "500 mg tablet initially, gradually titrated to 1000 mg twice daily with meals (or 1000 mg SR once daily with dinner)",
        frequency: "Twice daily with breakfast and dinner",
        maxDailyCeiling: "2000 mg to 2550 mg per day in divided doses",
        elderlyRenalAdjustment: "Contraindicated if eGFR < 30 ml/min. Max 1000 mg/day if eGFR is 30-44 ml/min."
      },
      mechanism: "Activates AMP-activated protein kinase (AMPK). Decreases hepatic gluconeogenesis, reduces intestinal glucose absorption, and enhances peripheral insulin sensitivity in muscle.",
      contraindications: [
        "Severe renal failure (eGFR < 30 ml/min)",
        "Acute metabolic acidosis, diabetic ketoacidosis (DKA)",
        "Severe congestive heart failure or septic shock",
        "Withhold 48 hours before and after IV iodinated radiocontrast"
      ],
      sideEffects: {
        common: ["Diarrhea", "Nausea", "Metallic taste", "Flatulence", "Abdominal bloating"],
        serious: ["Lactic acidosis (rare)", "Vitamin B12 deficiency with chronic use"]
      },
      administration: "Always take with meals to reduce gastrointestinal adverse effects. Start low and titrate slowly.",
      allergyClass: "None"
    },

    "glimepiride": {
      id: "glimepiride",
      saltName: "Glimepiride",
      chemicalClass: "Second/Third-Generation Sulfonylurea",
      therapeuticCategory: "Oral Hypoglycemic Agent / Insulin Secretagogue",
      categorySlug: "diabetes",
      indications: [
        "Type 2 Diabetes Mellitus as add-on therapy to metformin or monotherapy when metformin is not tolerated"
      ],
      brands: [
        { name: "Amaryl 1mg / 2mg", strength: "1 mg, 2 mg tablet", company: "Sanofi" },
        { name: "Glimestar 1 / 2", strength: "1 mg, 2 mg tablet", company: "Mankind" },
        { name: "Zoryl 1 / 2", strength: "1 mg, 2 mg tablet", company: "Intas" }
      ],
      pediatricDosing: {
        formulaPerKg: "Not recommended in pediatric patients due to severe hypoglycemia risk.",
        minMgPerKg: 0,
        maxMgPerKg: 0,
        frequency: "N/A",
        maxDailyCeilingPerKg: 0,
        liquidFormulations: [],
        clinicalNote: "Avoid in pediatric population."
      },
      adultDosing: {
        standardSingleDose: "1 mg to 2 mg once daily",
        frequency: "Once daily immediately before or with the first substantial meal of the day (breakfast)",
        maxDailyCeiling: "8 mg once daily",
        elderlyRenalAdjustment: "High risk of prolonged hypoglycemia in elderly; start at 1 mg daily and avoid in severe renal disease."
      },
      mechanism: "Stimulates insulin release from pancreatic beta cells by closing ATP-sensitive potassium channels, depolarizing cell membrane, and promoting calcium influx.",
      contraindications: [
        "Type 1 Diabetes Mellitus or Diabetic Ketoacidosis",
        "Known hypersensitivity to sulfonylureas or sulfonamides",
        "Severe renal or hepatic failure"
      ],
      sideEffects: {
        common: ["Hypoglycemia (tremors, sweating, palpitations)", "Mild weight gain", "Headache", "Nausea"],
        serious: ["Severe refractory hypoglycemia", "Cholestatic jaundice"]
      },
      administration: "Take immediately before breakfast or the first main meal. Never take if skipping a meal.",
      allergyClass: "Sulfa drug allergy"
    },

    "telmisartan": {
      id: "telmisartan",
      saltName: "Telmisartan",
      chemicalClass: "Angiotensin II Receptor Blocker (ARB)",
      therapeuticCategory: "Antihypertensive & Cardiovascular Protective",
      categorySlug: "cardiac-bp",
      indications: [
        "Essential hypertension (High blood pressure)",
        "Cardiovascular risk reduction in patients with atherothrombotic disease",
        "Renal protection in hypertensive diabetic nephropathy"
      ],
      brands: [
        { name: "Telma 40 / 80", strength: "40 mg, 80 mg tablet", company: "Glenmark" },
        { name: "Telmikind 40", strength: "40 mg tablet", company: "Mankind" },
        { name: "Micardis", strength: "40 mg, 80 mg tablet", company: "Boehringer Ingelheim" },
        { name: "Telsartan 40", strength: "40 mg tablet", company: "Dr. Reddy's" }
      ],
      pediatricDosing: {
        formulaPerKg: "Safety and efficacy not established in children under 18 years.",
        minMgPerKg: 0,
        maxMgPerKg: 0,
        frequency: "N/A",
        maxDailyCeilingPerKg: 0,
        liquidFormulations: [],
        clinicalNote: "Not approved for pediatric patients."
      },
      adultDosing: {
        standardSingleDose: "40 mg tablet once daily (titrated to 80 mg if needed for target BP)",
        frequency: "Once daily, morning or evening",
        maxDailyCeiling: "80 mg once daily",
        elderlyRenalAdjustment: "No starting dose adjustment needed, but monitor serum potassium and serum creatinine."
      },
      mechanism: "Selectively blocks Angiotensin II from binding to the AT1 receptor, causing arterial vasodilation and reduced aldosterone secretion. Also exhibits partial PPAR-gamma agonist activity.",
      contraindications: [
        "Pregnancy (Absolute contraindication - cause of fetal toxicity and renal dysgenesis)",
        "Bilateral renal artery stenosis",
        "Severe biliary obstructive disorders or severe hepatic insufficiency"
      ],
      sideEffects: {
        common: ["Dizziness", "Fatigue", "Back pain", "Sinusitis"],
        serious: ["Hyperkalemia", "Angioedema", "Hypotension"]
      },
      administration: "Take once daily at the same time every day, with or without food. Avoid potassium-rich salt substitutes.",
      allergyClass: "None"
    },

    "amlodipine": {
      id: "amlodipine",
      saltName: "Amlodipine Besylate",
      chemicalClass: "Dihydropyridine Calcium Channel Blocker (CCB)",
      therapeuticCategory: "Antihypertensive & Antianginal",
      categorySlug: "cardiac-bp",
      indications: [
        "Essential hypertension alone or in combination with ARBs/ACE inhibitors",
        "Chronic stable angina pectoris",
        "Vasospastic (Prinzmetal's) angina"
      ],
      brands: [
        { name: "Stamlo 5", strength: "5 mg tablet", company: "Dr. Reddy's" },
        { name: "Amlip 5", strength: "5 mg tablet", company: "Cipla" },
        { name: "Norvasc", strength: "2.5 mg, 5 mg, 10 mg tablet", company: "Pfizer" },
        { name: "Amlokind 5", strength: "5 mg tablet", company: "Mankind" }
      ],
      pediatricDosing: {
        formulaPerKg: "0.05 to 0.1 mg/kg once daily for pediatric hypertension (children 6 to 17 years)",
        minMgPerKg: 0.05,
        maxMgPerKg: 0.1,
        frequency: "Once daily",
        maxDailyCeilingPerKg: 5,
        liquidFormulations: [
          { name: "Extemporaneous Suspension", strength: "1 mg / 1 ml", typicalAge: "Children >= 6 years", perMlMg: 1 }
        ],
        clinicalNote: "Used under pediatric nephrologist guidance."
      },
      adultDosing: {
        standardSingleDose: "5 mg tablet once daily, titrated to 10 mg after 1-2 weeks if needed",
        frequency: "Once daily",
        maxDailyCeiling: "10 mg once daily",
        elderlyRenalAdjustment: "Initiate at lower dose (2.5 mg daily) in elderly patients or severe hepatic insufficiency."
      },
      mechanism: "Inhibits transmembrane influx of extracellular calcium ions through L-type calcium channels into vascular smooth muscle, causing peripheral arterial vasodilation.",
      contraindications: [
        "Severe hypotension (systolic BP < 90 mmHg)",
        "Cardiogenic shock or severe aortic stenosis",
        "Unstable heart failure after acute myocardial infarction"
      ],
      sideEffects: {
        common: ["Peripheral edema (ankle/pedal swelling)", "Flushing", "Dizziness", "Palpitations"],
        serious: ["Severe symptomatic hypotension", "Gingival hyperplasia"]
      },
      administration: "Take with or without food once daily. Monitor ankles for swelling.",
      allergyClass: "None"
    },

    "cefixime": {
      id: "cefixime",
      saltName: "Cefixime Trihydrate",
      chemicalClass: "Third-Generation Cephalosporin",
      therapeuticCategory: "Broad-Spectrum Antibacterial",
      categorySlug: "antibiotics",
      indications: [
        "Uncomplicated urinary tract infections (Cystitis)",
        "Typhoid fever (Enteric fever)",
        "Acute bacterial otitis media and acute bronchitis",
        "Uncomplicated cervical/urethral gonorrhea"
      ],
      brands: [
        { name: "Taxim-O 200", strength: "200 mg tablet", company: "Alkem" },
        { name: "Zifi 200", strength: "200 mg tablet, 50mg/5ml dry syrup", company: "FDC" },
        { name: "Cefolac 200", strength: "200 mg tablet", company: "Macleods" },
        { name: "Suprax", strength: "400 mg capsule, 100mg/5ml suspension", company: "Lupin" }
      ],
      pediatricDosing: {
        formulaPerKg: "8 mg/kg/day as a single daily dose or divided into 4 mg/kg every 12 hours",
        minMgPerKg: 8,
        maxMgPerKg: 10,
        frequency: "Every 12 hours or once daily for 5 to 7 days",
        maxDailyCeilingPerKg: 400,
        liquidFormulations: [
          { name: "Dry Syrup", strength: "50 mg / 5 ml", typicalAge: "6 months - 5 years", perMlMg: 10 },
          { name: "Forte Dry Syrup", strength: "100 mg / 5 ml", typicalAge: "5 - 12 years", perMlMg: 20 }
        ],
        clinicalNote: "Reconstitute with sterile water. Discard unused portion after 14 days."
      },
      adultDosing: {
        standardSingleDose: "200 mg tablet twice daily (every 12 hours) or 400 mg once daily",
        frequency: "Every 12 hours for 5 to 7 days",
        maxDailyCeiling: "400 mg per day",
        elderlyRenalAdjustment: "If CrCl 21-60 ml/min: 300 mg/day; if CrCl < 20 ml/min: 200 mg/day."
      },
      mechanism: "Inhibits bacterial cell-wall synthesis by binding to penicillin-binding proteins (PBPs), causing cell lysis. Resistant to hydrolysis by broad range of beta-lactamases.",
      contraindications: [
        "Known hypersensitivity to cephalosporins or severe immediate IgE-mediated penicillin allergy"
      ],
      sideEffects: {
        common: ["Diarrhea / Soft stools", "Nausea", "Flatulence", "Abdominal colic"],
        serious: ["Pseudomembranous colitis", "Anaphylaxis"]
      },
      administration: "May be taken with or without food. Taking with food helps mitigate gastrointestinal upset.",
      allergyClass: "Cephalosporin allergy"
    },

    "ciprofloxacin": {
      id: "ciprofloxacin",
      saltName: "Ciprofloxacin Hydrochloride",
      chemicalClass: "Fluoroquinolone",
      therapeuticCategory: "Broad-Spectrum Antibacterial",
      categorySlug: "antibiotics",
      indications: [
        "Complicated and uncomplicated urinary tract infections",
        "Infectious bacterial diarrhea (Shigellosis, Campylobacter, Salmonella)",
        "Bacterial prostatitis and bone/joint infections"
      ],
      brands: [
        { name: "Ciplox 500", strength: "500 mg tablet", company: "Cipla" },
        { name: "Cifran 500", strength: "500 mg tablet", company: "Sun Pharma" },
        { name: "Cipro 500", strength: "250 mg / 500 mg tablet", company: "Bayer" }
      ],
      pediatricDosing: {
        formulaPerKg: "Restricted in pediatric patients due to cartilage arthropathy risk; reserved for complicated UTI (10-20 mg/kg/dose BID)",
        minMgPerKg: 10,
        maxMgPerKg: 20,
        frequency: "Every 12 hours under hospital supervision",
        maxDailyCeilingPerKg: 1000,
        liquidFormulations: [
          { name: "Oral Suspension", strength: "250 mg / 5 ml", typicalAge: "Specialist use only", perMlMg: 50 }
        ],
        clinicalNote: "Avoid routinely in children under 18 unless no alternative exists."
      },
      adultDosing: {
        standardSingleDose: "500 mg tablet twice daily (every 12 hours) for 3 to 7 days",
        frequency: "Every 12 hours",
        maxDailyCeiling: "1000 mg to 1500 mg in 24 hours",
        elderlyRenalAdjustment: "Reduce dose by 50% if CrCl < 30 ml/min. Avoid in elderly with myasthenia gravis."
      },
      mechanism: "Inhibits bacterial DNA gyrase and topoisomerase IV, essential enzymes for bacterial DNA replication, transcription, and repair.",
      contraindications: [
        "History of tendon rupture related to fluoroquinolones",
        "Concomitant administration with tizanidine",
        "Myasthenia gravis",
        "Pregnancy and nursing mothers"
      ],
      sideEffects: {
        common: ["Nausea", "Diarrhea", "Headache", "Abdominal discomfort"],
        serious: ["Achilles tendinitis & tendon rupture", "QT prolongation", "Peripheral neuropathy"]
      },
      administration: "Drink plenty of water to prevent crystalluria. Avoid milk, antacids, or iron supplements within 2 hours.",
      allergyClass: "Fluoroquinolone allergy"
    },

    "diclofenac-chlorzoxazone": {
      id: "diclofenac-chlorzoxazone",
      saltName: "Diclofenac Potassium + Paracetamol + Chlorzoxazone",
      chemicalClass: "NSAID + Central Analgesic + Centrally Acting Skeletal Muscle Relaxant",
      therapeuticCategory: "Muscle Relaxant & Anti-Inflammatory Analgesic",
      categorySlug: "pain-fever",
      indications: [
        "Acute musculoskeletal spasms and painful torticollis (stiff neck)",
        "Severe acute low back strain and lumbago",
        "Post-traumatic muscle contractures and sprains"
      ],
      brands: [
        { name: "Myospaz", strength: "Chlorzoxazone 250mg + Paracetamol 325mg tablet", company: "Win-Medicare" },
        { name: "Myospaz Forte", strength: "Chlorzoxazone 500mg + Diclofenac 50mg + Paracetamol 325mg", company: "Win-Medicare" },
        { name: "Mobizox", strength: "Chlorzoxazone 500mg + Diclofenac 50mg + Paracetamol 325mg", company: "Sun Pharma" },
        { name: "Parafon Forte", strength: "Chlorzoxazone 500mg + Acetaminophen 300mg", company: "Janssen" }
      ],
      pediatricDosing: {
        formulaPerKg: "Not recommended in children under 12 years of age.",
        minMgPerKg: 0,
        maxMgPerKg: 0,
        frequency: "N/A",
        maxDailyCeilingPerKg: 0,
        liquidFormulations: [],
        clinicalNote: "Contraindicated in pediatric population."
      },
      adultDosing: {
        standardSingleDose: "1 tablet after meals",
        frequency: "Twice or thrice daily for short duration (maximum 3 to 5 days)",
        maxDailyCeiling: "3 tablets in 24 hours",
        elderlyRenalAdjustment: "Avoid in elderly patients prone to falls, dizziness, or hepatic impairment."
      },
      mechanism: "Diclofenac halts inflammatory prostaglandins. Chlorzoxazone acts at spinal cord and subcortical areas to inhibit multi-synaptic reflex arcs producing muscle spasm.",
      contraindications: [
        "Active peptic ulcer disease or GI bleeding",
        "Pre-existing hepatic disease or history of chlorzoxazone-induced hepatitis",
        "Severe renal or heart failure",
        "Pregnancy"
      ],
      sideEffects: {
        common: ["Drowsiness / Sedation", "Dizziness", "Gastric discomfort / Heartburn", "Orange/red urine discoloration (benign)"],
        serious: ["Hepatotoxicity", "GI ulceration or bleeding"]
      },
      administration: "Take strictly after meals with water. Do not drive or operate machinery due to sedation.",
      allergyClass: "NSAID allergy"
    },

    "salbutamol": {
      id: "salbutamol",
      saltName: "Salbutamol (Albuterol)",
      chemicalClass: "Short-Acting Beta-2 Adrenergic Agonist (SABA)",
      therapeuticCategory: "Bronchodilator / Fast-Acting Rescue Reliever",
      categorySlug: "allergy-cold",
      indications: [
        "Acute bronchospasm in bronchial asthma and COPD",
        "Prevention of exercise-induced asthma",
        "Emergency relief of wheezing and acute airway constriction"
      ],
      brands: [
        { name: "Asthalin Inhaler", strength: "100 mcg / actuation (MDI)", company: "Cipla" },
        { name: "Asthalin Respules", strength: "2.5 mg / 2.5 ml for nebulization", company: "Cipla" },
        { name: "Ventolin", strength: "100 mcg MDI & 2mg/5ml syrup", company: "GSK" }
      ],
      pediatricDosing: {
        formulaPerKg: "Inhalation: 1 to 2 puffs (100-200 mcg) via MDI with Spacer + Mask. Nebulization: 1.25mg to 2.5mg as needed",
        minMgPerKg: 0,
        maxMgPerKg: 0,
        frequency: "Every 4 to 6 hours as emergency reliever",
        maxDailyCeilingPerKg: 800,
        liquidFormulations: [
          { name: "Asthalin Respules", strength: "2.5 mg / 2.5 ml", typicalAge: "All ages via nebulizer", perMlMg: 1 },
          { name: "Syrup (Oral)", strength: "2 mg / 5 ml", typicalAge: "Oral syrup has more tachycardia", perMlMg: 0.4 }
        ],
        clinicalNote: "Always use a spacer device for children under 8 years. Never withhold in acute distress."
      },
      adultDosing: {
        standardSingleDose: "1 to 2 inhalations (100 to 200 mcg) via MDI",
        frequency: "Every 4 to 6 hours as needed for symptoms",
        maxDailyCeiling: "Up to 8 puffs (800 mcg) in 24 hours under acute exacerbation",
        elderlyRenalAdjustment: "Caution in ischemic heart disease or tachyarrhythmias; monitor heart rate."
      },
      mechanism: "Stimulates beta-2 adrenergic receptors in bronchial smooth muscle, activating adenylate cyclase, increasing intracellular cyclic AMP, and causing rapid bronchodilation within 5 minutes.",
      contraindications: ["Hypersensitivity to salbutamol", "Severe uncontrolled tachyarrhythmias"],
      sideEffects: {
        common: ["Fine muscle tremor (hands)", "Tachycardia / Palpitations", "Nervousness", "Headache"],
        serious: ["Hypokalemia (at high doses)", "Paradoxical bronchospasm"]
      },
      administration: "Inhale through mouth with slow deep breath; hold breath for 10 seconds. Rinse mouth with water.",
      allergyClass: "None"
    },

    "budesonide-formoterol": {
      id: "budesonide-formoterol",
      saltName: "Budesonide + Formoterol Fumarate",
      chemicalClass: "Inhaled Corticosteroid (ICS) + Long-Acting Beta-2 Agonist (LABA)",
      therapeuticCategory: "Maintenance & Reliever Inhaler (SMART/MART Therapy)",
      categorySlug: "allergy-cold",
      indications: [
        "Moderate to persistent bronchial asthma in adults and adolescents",
        "Maintenance therapy of chronic obstructive pulmonary disease (COPD)"
      ],
      brands: [
        { name: "Foracort 200 / 400", strength: "Budesonide 200mcg + Formoterol 6mcg Inhaler / Rotacaps", company: "Cipla" },
        { name: "Symbicort Turbuhaler", strength: "Budesonide 160mcg + Formoterol 4.5mcg", company: "AstraZeneca" },
        { name: "Budecort Respules", strength: "0.5 mg / 1 mg respules for nebulization", company: "Cipla" }
      ],
      pediatricDosing: {
        formulaPerKg: "Children 6-11 years: Foracort 100/6 or Symbicort 80/4.5: 1 inhalation twice daily",
        minMgPerKg: 0,
        maxMgPerKg: 0,
        frequency: "Twice daily morning and evening",
        maxDailyCeilingPerKg: 400,
        liquidFormulations: [
          { name: "Nebulizer Respules", strength: "0.5 mg / 2 ml", typicalAge: "Children >= 1 year", perMlMg: 0.25 }
        ],
        clinicalNote: "Approved for children 6 years and older with persistent asthma."
      },
      adultDosing: {
        standardSingleDose: "1 to 2 inhalations twice daily (e.g. 200/6 or 400/6)",
        frequency: "Twice daily morning and evening; can be used as PRN reliever",
        maxDailyCeiling: "Maximum 8 inhalations total in 24 hours (including reliever puffs)",
        elderlyRenalAdjustment: "No dose adjustment necessary."
      },
      mechanism: "Budesonide exerts potent glucocorticoid anti-inflammatory action in airways; Formoterol provides rapid (within 1-3 min) and sustained (12 hr) bronchodilation through beta-2 receptor agonism.",
      contraindications: [
        "Primary treatment of status asthmaticus without supplemental oxygen and systemic steroids",
        "Known hypersensitivity to budesonide or formoterol"
      ],
      sideEffects: {
        common: ["Oral candidiasis (fungal thrush)", "Dysphonia (hoarseness of voice)", "Mild throat irritation", "Tremor"],
        serious: ["Adrenal suppression (high prolonged doses)", "Pneumonia risk in advanced COPD"]
      },
      administration: "Always rinse mouth and gargle thoroughly with water and spit it out after every inhalation to prevent fungal oral thrush.",
      allergyClass: "None"
    }
  }
};

// Expose globally for browser usage
if (typeof window !== "undefined") {
  window.CLINICAL_DATA = CLINICAL_DATA;
}
