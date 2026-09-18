/**
 * HIMKIV Health & MedGuide - Synchronized Clinical Reference Dataset
 * Automatically exported from Himkiv Admin Management System
 * Updated by: Himanshu Sharma (Founder & Administrator)
 * Sync Date: 2026-09-18T09:20:23.546Z
 */

const HKARE_DATA = {
  "meta": {
    "fileName": "HKare_Common_Disease_Medicine_Reference(1).csv",
    "sourceType": "Himkiv Database & Clinical Formulary",
    "totalMedicines": 265,
    "uniqueConditions": 140,
    "lastSync": "2026-09-18T09:20:23.527Z",
    "updatedBy": "Himanshu Sharma (Admin)",
    "standard": "WHO ICD-11 MMS (2026 Release)"
  },
  "categories": [
    {
      "id": "all",
      "name": "All Conditions",
      "icon": "layers",
      "description": "Comprehensive multi-system clinical condition and medicine reference database",
      "i18nKey": "cat_all",
      "rawCategory": "All"
    },
    {
      "id": "infectious",
      "name": "Infectious & Vector-Borne",
      "icon": "bug",
      "description": "Bacterial, viral, and parasitic infections including tropical diseases",
      "i18nKey": "cat_infectious",
      "rawCategory": "Infectious"
    },
    {
      "id": "respiratory",
      "name": "Respiratory",
      "icon": "wind",
      "description": "Upper and lower airway disorders, asthma, and chronic pulmonary diseases",
      "i18nKey": "cat_respiratory",
      "rawCategory": "Respiratory"
    },
    {
      "id": "cardiovascular",
      "name": "Cardiovascular",
      "icon": "heart-pulse",
      "description": "Hypertension, heart failure, arrhythmia, and vascular conditions",
      "i18nKey": "cat_cardiovascular",
      "rawCategory": "Cardiovascular"
    },
    {
      "id": "endocrine",
      "name": "Endocrine & Metabolic",
      "icon": "activity",
      "description": "Diabetes, thyroid disorders, and metabolic imbalances",
      "i18nKey": "cat_endocrine",
      "rawCategory": "Endocrine"
    },
    {
      "id": "gastrointestinal",
      "name": "Gastrointestinal",
      "icon": "utensils",
      "description": "Acid-peptic diseases, enteritis, and functional bowel disorders",
      "i18nKey": "cat_gastrointestinal",
      "rawCategory": "Gastrointestinal"
    },
    {
      "id": "liver",
      "name": "Liver & Hepatic",
      "icon": "shield-plus",
      "description": "Chronic hepatitis, cirrhosis, and hepatic dysfunction",
      "i18nKey": "cat_liver",
      "rawCategory": "Liver"
    },
    {
      "id": "kidney-urinary",
      "name": "Kidney & Urinary",
      "icon": "droplets",
      "description": "Urinary tract infections, renal stones, and chronic kidney disease",
      "i18nKey": "cat_kidney",
      "rawCategory": "Kidney/urinary"
    },
    {
      "id": "neurological",
      "name": "Neurological",
      "icon": "brain",
      "description": "Headache disorders, seizure management, and neurodegenerative states",
      "i18nKey": "cat_neurological",
      "rawCategory": "Neurological"
    },
    {
      "id": "mental-health",
      "name": "Mental Health",
      "icon": "smile",
      "description": "Depression, anxiety disorders, and behavioral health",
      "i18nKey": "cat_mental",
      "rawCategory": "Mental health"
    },
    {
      "id": "skin",
      "name": "Dermatology & Skin",
      "icon": "sparkles",
      "description": "Cutaneous infections, acne, eczema, and chronic dermatoses",
      "i18nKey": "cat_skin",
      "rawCategory": "Skin"
    },
    {
      "id": "musculoskeletal",
      "name": "Musculoskeletal",
      "icon": "bone",
      "description": "Arthritis, muscular strain, osteoporosis, and joint inflammation",
      "i18nKey": "cat_musculoskeletal",
      "rawCategory": "Musculoskeletal"
    },
    {
      "id": "eye",
      "name": "Ophthalmic & Eye",
      "icon": "eye",
      "description": "Glaucoma, conjunctival inflammation, and ocular surface health",
      "i18nKey": "cat_eye",
      "rawCategory": "Eye"
    },
    {
      "id": "ear",
      "name": "ENT & Ear",
      "icon": "ear",
      "description": "Outer and middle ear infections and auditory inflammation",
      "i18nKey": "cat_ear",
      "rawCategory": "Ear"
    },
    {
      "id": "reproductive",
      "name": "Reproductive Health",
      "icon": "users",
      "description": "Gynecological, pelvic, and urological reproductive care",
      "i18nKey": "cat_reproductive",
      "rawCategory": "Reproductive"
    },
    {
      "id": "hematology",
      "name": "Hematology & Blood",
      "icon": "test-tube",
      "description": "Nutritional anemias, hemoglobinopathies, and coagulation disorders",
      "i18nKey": "cat_hematology",
      "rawCategory": "Hematology"
    },
    {
      "id": "cancer",
      "name": "Oncology & Cancer",
      "icon": "crosshair",
      "description": "Solid tumors, hematologic malignancies, and oncology reference guidance",
      "i18nKey": "cat_cancer",
      "rawCategory": "Cancer"
    },
    {
      "id": "allergy-immune",
      "name": "Allergy & Immune",
      "icon": "shield",
      "description": "Systemic hypersensitivity, anaphylaxis, and autoimmune diseases",
      "i18nKey": "cat_immune",
      "rawCategory": "Allergy/immune"
    },
    {
      "id": "emergency-supportive",
      "name": "Emergency & Supportive",
      "icon": "alert-triangle",
      "description": "Acute fever, pain management, and electrolyte rehydration",
      "i18nKey": "cat_emergency",
      "rawCategory": "Emergency/supportive"
    }
  ],
  "conditions": [
    {
      "id": "fever-pain",
      "name": "Fever & Generalized Body Pain",
      "category": "Pain",
      "categorySlug": "pain",
      "symptoms": [
        "Elevated core body temperature (>100.4 F / 38 C)",
        "Generalized body aches and myalgia",
        "Shivering, rigors, and chills",
        "Frontal or throbbing headache",
        "Physical fatigue and malaise"
      ],
      "icd11Code": "MG26",
      "description": "Acute febrile illness accompanied by generalized muscle aches, headache, malaise, and systemic inflammatory discomfort.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "diarrhea",
      "name": "Diarrhea (Loose Motions)",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Frequent watery stools / loose motions (> 3/day)",
        "Abdominal cramps and griping colic",
        "Fecal urgency and tenesmus",
        "Dehydration, dry mouth, and thirst",
        "Nausea, bloating, and fatigue"
      ],
      "icd11Code": "ME05.1",
      "description": "Acute or recurrent watery loose motions, enteropathogen irritation, cramping abdominal colic, and dehydration.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "cough",
      "name": "Cough (Acute, Dry & Productive Chesty Cough)",
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "symptoms": [
        "Frequent coughing paroxysms (dry hacking or wet productive)",
        "Throat tickling, scratching, and irritation",
        "Chest tightness during coughing bouts",
        "Clear, white, or mucopurulent sputum",
        "Post-nasal drip"
      ],
      "icd11Code": "MD11",
      "description": "Protective respiratory reflex manifested as acute or chronic coughing bouts due to tracheobronchial irritation, viral infection, or hypersecretion.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "stomach-pain",
      "name": "Stomach Pain, Gastritis & Abdominal Cramps",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Gnawing or burning epigastric stomach pain",
        "Spasmodic colicky abdominal cramps",
        "Postprandial fullness, early satiety, and bloating",
        "Acid sour regurgitation and nausea",
        "Abdominal rumbling and discomfort"
      ],
      "icd11Code": "MD81.1",
      "description": "Acute or recurrent upper abdominal epigastric distress, visceral smooth muscle spasms, acid-related burning, and gastrointestinal colic.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "sore-throat",
      "name": "Sore Throat, Pharyngitis & Tonsillitis",
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "symptoms": [
        "Sharp, scratchy, or burning pain in throat",
        "Odynophagia (pain exacerbated when swallowing saliva or food)",
        "Erythematous swollen tonsils with follicular exudates",
        "Tender swollen anterior cervical lymph nodes",
        "Low-grade fever and raspy voice"
      ],
      "icd11Code": "CA02",
      "description": "Acute inflammation of the mucosal pharynx, palatine tonsils, and uvula resulting in odynophagia, erythema, and throat irritation.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "gerd",
      "name": "GERD",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Substernal pyrosis (heartburn)",
        "Acid regurgitation into throat",
        "Water brash",
        "Worse in recumbent position",
        "Dysphagia"
      ],
      "icd11Code": "DA22",
      "description": "Standard evidence-based management includes: Reduces gastric acid.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "peptic-ulcer-disease",
      "name": "Peptic ulcer disease",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Epigastric burning gnawing ache",
        "Duodenal ulcer: relieved by food, worse 2-3h postprandial",
        "Nighttime awakening with pain"
      ],
      "icd11Code": "DA60",
      "description": "Standard evidence-based management includes: Acid suppression and ulcer healing.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "nausea-vomiting",
      "name": "Nausea/vomiting",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Persistent retching",
        "Inability to keep liquids down",
        "Abdominal cramping",
        "Dehydration signs"
      ],
      "icd11Code": "MD90.0",
      "description": "Standard evidence-based management includes: Controls nausea/vomiting in selected situations.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "constipation",
      "name": "Constipation",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Infrequent hard lumpy stools (< 3/week)",
        "Straining at defecation",
        "Sensation of incomplete evacuation",
        "Abdominal distention"
      ],
      "icd11Code": "ME05.0",
      "description": "Standard evidence-based management includes: Relieves constipation.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "hypertension",
      "name": "Hypertension",
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "symptoms": [
        "Often asymptomatic",
        "Occipital morning headache",
        "Occasional visual blurring",
        "Tinnitus",
        "Palpitations"
      ],
      "icd11Code": "BA00",
      "description": "Standard evidence-based management includes: Blood-pressure control; Blood-pressure control; Blood-pressure control.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "asthma",
      "name": "Asthma",
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "symptoms": [
        "Expiratory wheezing",
        "Shortness of breath",
        "Chest tightness",
        "Nocturnal dry cough",
        "Dyspnea on exertion"
      ],
      "icd11Code": "CA23",
      "description": "Standard evidence-based management includes: Relief of bronchospasm; Long-term airway inflammation control.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "influenza",
      "name": "Influenza",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "High fever (>38Â°C)",
        "Myalgia / Body aches",
        "Dry cough",
        "Sore throat",
        "Severe fatigue"
      ],
      "icd11Code": "1E30",
      "description": "Standard evidence-based management includes: Antiviral treatment in selected influenza cases.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "covid-19",
      "name": "COVID-19",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Fever or chills",
        "Cough",
        "Shortness of breath",
        "Loss of taste/smell",
        "Fatigue"
      ],
      "icd11Code": "RA01",
      "description": "Standard evidence-based management includes: Antiviral treatment for selected high-risk cases.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "tuberculosis",
      "name": "Tuberculosis",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Persistent cough > 2 weeks",
        "Hemoptysis (coughing blood)",
        "Night sweats",
        "Unexplained weight loss",
        "Low-grade fever"
      ],
      "icd11Code": "1B10",
      "description": "Standard evidence-based management includes: Combination treatment.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "malaria",
      "name": "Malaria",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Chills and rigors",
        "High cyclical fever",
        "Profuse sweating",
        "Headache",
        "Nausea"
      ],
      "icd11Code": "1F40",
      "description": "Standard evidence-based management includes: Treatment of susceptible malaria.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "dengue",
      "name": "Dengue",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Sudden high fever",
        "Severe retro-orbital eye pain",
        "Severe joint/muscle aches",
        "Skin petechiae/rash",
        "Nausea"
      ],
      "icd11Code": "1D20",
      "description": "Standard evidence-based management includes: Fever/pain relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "typhoid-fever",
      "name": "Typhoid fever",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Step-ladder rising fever",
        "Abdominal tenderness",
        "Rose spots on trunk",
        "Constipation or diarrhea",
        "Headache"
      ],
      "icd11Code": "1A07",
      "description": "Standard evidence-based management includes: Treatment of susceptible bacterial infection.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "cholera",
      "name": "Cholera",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Profuse painless watery diarrhea",
        "Rice-water stools",
        "Severe vomiting",
        "Rapid dehydration",
        "Muscle cramps"
      ],
      "icd11Code": "1A00",
      "description": "Standard evidence-based management includes: Antibiotic in selected cases.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "measles",
      "name": "Measles",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "High fever",
        "Koplik spots in mouth",
        "Maculopapular rash",
        "Coryza / runny nose",
        "Conjunctivitis"
      ],
      "icd11Code": "1F03",
      "description": "Standard evidence-based management includes: Supportive management in children under clinical guidance.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "mumps",
      "name": "Mumps",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Painful parotid gland swelling",
        "Fever",
        "Chewing pain",
        "Headache",
        "Malaise"
      ],
      "icd11Code": "1D80",
      "description": "Standard evidence-based management includes: Fever/pain relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "rubella",
      "name": "Rubella",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Mild fever",
        "Maculopapular rash",
        "Swollen lymph nodes",
        "Joint aches",
        "Eye redness"
      ],
      "icd11Code": "1F02",
      "description": "Standard evidence-based management includes: Symptom relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "chickenpox",
      "name": "Chickenpox",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Itchy fluid-filled blisters",
        "Fever",
        "Tiredness",
        "Loss of appetite",
        "Headache"
      ],
      "icd11Code": "1E90",
      "description": "Standard evidence-based management includes: Treatment in selected higher-risk cases.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "shingles",
      "name": "Shingles",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Unilateral dermatomal pain",
        "Burning sensation",
        "Clustered vesicular rash",
        "Hyperesthesia",
        "Tingling"
      ],
      "icd11Code": "1E91",
      "description": "Standard evidence-based management includes: Antiviral treatment.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "hepatitis-b",
      "name": "Hepatitis B",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Jaundice (yellow eyes/skin)",
        "Dark tea-colored urine",
        "Right upper quadrant pain",
        "Fatigue",
        "Clay-colored stools"
      ],
      "icd11Code": "1E51",
      "description": "Standard evidence-based management includes: Long-term antiviral therapy in selected chronic cases.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "hepatitis-c",
      "name": "Hepatitis C",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Chronic fatigue",
        "Joint aches",
        "Jaundice in acute flares",
        "Abdominal discomfort",
        "Loss of appetite"
      ],
      "icd11Code": "1E52",
      "description": "Standard evidence-based management includes: Curative antiviral regimen.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "hiv-infection",
      "name": "HIV infection",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Persistent lymphadenopathy",
        "Recurrent opportunistic infections",
        "Chronic diarrhea",
        "Weight loss",
        "Fever"
      ],
      "icd11Code": "1C60",
      "description": "Standard evidence-based management includes: Combination antiretroviral therapy.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "rabies",
      "name": "Rabies",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Hydrophobia",
        "Aerophobia",
        "Agitation / Altered mental status",
        "Paresthesia at bite site",
        "Fever"
      ],
      "icd11Code": "1D00",
      "description": "Standard evidence-based management includes: Post-exposure prevention.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "tetanus",
      "name": "Tetanus",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Trismus (lockjaw)",
        "Painful muscle spasms",
        "Neck stiffness",
        "Difficulty swallowing",
        "Autonomic instability"
      ],
      "icd11Code": "1C10",
      "description": "Standard evidence-based management includes: Prevention after selected wounds.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "bacterial-meningitis",
      "name": "Bacterial meningitis",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "High fever",
        "Severe nuchal rigidity (stiff neck)",
        "Altered sensorium",
        "Photophobia",
        "Severe headache"
      ],
      "icd11Code": "1D01",
      "description": "Standard evidence-based management includes: Empiric treatment in many settings.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "pneumococcal-pneumonia",
      "name": "Pneumococcal pneumonia",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Productive cough with rust-colored sputum",
        "Pleuritic chest pain",
        "High fever with chills",
        "Dyspnea",
        "Tachypnea"
      ],
      "icd11Code": "CA40.0",
      "description": "Standard evidence-based management includes: Treatment of susceptible bacterial infection.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "scabies",
      "name": "Scabies",
      "category": "Infectious",
      "categorySlug": "infectious",
      "symptoms": [
        "Intense nocturnal itching",
        "Interdigital burrows",
        "Papular rash on wrists/waistline",
        "Excoriations"
      ],
      "icd11Code": "1F73",
      "description": "Standard evidence-based management includes: Eradicates mites.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "copd",
      "name": "COPD",
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "symptoms": [
        "Chronic productive morning cough",
        "Progressive dyspnea on exertion",
        "Chest tightness",
        "Frequent respiratory infections"
      ],
      "icd11Code": "CA22",
      "description": "Standard evidence-based management includes: Maintenance bronchodilation.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "allergic-rhinitis",
      "name": "Allergic rhinitis",
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "symptoms": [
        "Paroxysmal sneezing",
        "Clear watery rhinorrhea",
        "Nasal pruritus / itching",
        "Nasal congestion",
        "Allergic shiners"
      ],
      "icd11Code": "CA08",
      "description": "Standard evidence-based management includes: Allergy symptom relief; Nasal inflammation control.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "acute-bronchitis",
      "name": "Acute bronchitis",
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "symptoms": [
        "Persistent cough (1-3 weeks)",
        "Clear or purulent sputum",
        "Mild substernal chest ache",
        "Low-grade fever"
      ],
      "icd11Code": "CA42",
      "description": "Standard evidence-based management includes: Fever/pain relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "pulmonary-fibrosis",
      "name": "Pulmonary fibrosis",
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "symptoms": [
        "Dry non-productive cough",
        "Progressive shortness of breath",
        "Velcro bibasilar inspiratory crackles",
        "Digital clubbing"
      ],
      "icd11Code": "CB03",
      "description": "Standard evidence-based management includes: Slows progression in selected fibrotic lung diseases.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "sleep-apnea",
      "name": "Sleep apnea",
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "symptoms": [
        "Loud chronic snoring",
        "Witnessed breathing pauses during sleep",
        "Excessive daytime somnolence",
        "Morning dry mouth"
      ],
      "icd11Code": "7A40",
      "description": "Standard evidence-based management includes: Keeps airway open during sleep.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "heart-failure",
      "name": "Heart failure",
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "symptoms": [
        "Dyspnea on minimal exertion",
        "Orthopnea (breathlessness lying flat)",
        "Bilateral dependent ankle edema",
        "Paroxysmal nocturnal dyspnea"
      ],
      "icd11Code": "BD10",
      "description": "Standard evidence-based management includes: Reduces symptoms/events in selected patients; Selected stable heart-failure patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "atrial-fibrillation",
      "name": "Atrial fibrillation",
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "symptoms": [
        "Irregularly irregular heartbeat",
        "Palpitations",
        "Dizziness",
        "Exertional dyspnea",
        "Fatigue"
      ],
      "icd11Code": "BC81.3",
      "description": "Standard evidence-based management includes: Prevention of stroke/systemic embolism in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "coronary-artery-disease",
      "name": "Coronary artery disease",
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "symptoms": [
        "Exertional retrosternal chest pressure",
        "Radiation to left arm/jaw",
        "Shortness of breath",
        "Relief upon rest"
      ],
      "icd11Code": "BA80",
      "description": "Standard evidence-based management includes: Prevention of cardiovascular events in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "high-ldl-cholesterol",
      "name": "High LDL cholesterol",
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "symptoms": [
        "Usually asymptomatic",
        "Corneal arcus in early onset",
        "Xanthelasma / tendon xanthomas in severe familial cases"
      ],
      "icd11Code": "5C80.0",
      "description": "Standard evidence-based management includes: Lowers LDL cholesterol.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "angina",
      "name": "Angina",
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "symptoms": [
        "Transient squeezing chest tightness",
        "Precipitated by exertion or cold",
        "Relieved within minutes by rest or nitroglycerin"
      ],
      "icd11Code": "BA82",
      "description": "Standard evidence-based management includes: Rapid relief of angina.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "deep-vein-thrombosis",
      "name": "Deep-vein thrombosis",
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "symptoms": [
        "Unilateral calf or leg swelling",
        "Erythema and warmth",
        "Deep throbbing calf ache",
        "Positive Homan's sign"
      ],
      "icd11Code": "BD71",
      "description": "Standard evidence-based management includes: Treatment/prevention of recurrent venous thrombosis.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "pulmonary-embolism",
      "name": "Pulmonary embolism",
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "symptoms": [
        "Sudden acute pleuritic chest pain",
        "Severe unexplained dyspnea",
        "Tachypnea",
        "Tachycardia",
        "Hemoptysis"
      ],
      "icd11Code": "BD11",
      "description": "Standard evidence-based management includes: Anticoagulation in eligible patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "type-1-diabetes",
      "name": "Type 1 diabetes",
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "symptoms": [
        "Polydipsia (excessive thirst)",
        "Polyuria (frequent urination)",
        "Rapid unexplained weight loss",
        "Polyphagia",
        "Diabetic ketoacidosis signs"
      ],
      "icd11Code": "5A10",
      "description": "Standard evidence-based management includes: Replaces insulin.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "type-2-diabetes",
      "name": "Type 2 diabetes",
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "symptoms": [
        "Chronic polydipsia",
        "Nocturia and polyuria",
        "Blurred vision",
        "Poor wound healing",
        "Recurrent candidiasis"
      ],
      "icd11Code": "5A11",
      "description": "Standard evidence-based management includes: Blood-glucose lowering; Glucose lowering and cardiovascular/kidney benefits in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "hypothyroidism",
      "name": "Hypothyroidism",
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "symptoms": [
        "Cold intolerance",
        "Unexplained weight gain",
        "Chronic fatigue",
        "Constipation",
        "Dry skin and brittle hair"
      ],
      "icd11Code": "5A00",
      "description": "Standard evidence-based management includes: Thyroid hormone replacement.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "hyperthyroidism",
      "name": "Hyperthyroidism",
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "symptoms": [
        "Heat intolerance",
        "Palpitations and tachycardia",
        "Weight loss despite increased appetite",
        "Fine hand tremors"
      ],
      "icd11Code": "5A02",
      "description": "Standard evidence-based management includes: Reduces thyroid hormone production.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "graves-disease",
      "name": "Graves disease",
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "symptoms": [
        "Bilateral exophthalmos (proptosis)",
        "Diffuse goiter with bruit",
        "Pretibial myxedema",
        "Tachycardia",
        "Anxiety"
      ],
      "icd11Code": "5A02.1",
      "description": "Standard evidence-based management includes: Controls thyroid hormone production.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "adrenal-insufficiency",
      "name": "Adrenal insufficiency",
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "symptoms": [
        "Severe postural hypotension",
        "Chronic profound fatigue",
        "Cutaneous hyperpigmentation",
        "Salt cravings"
      ],
      "icd11Code": "5A71",
      "description": "Standard evidence-based management includes: Hormone replacement.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "gout",
      "name": "Gout",
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "symptoms": [
        "Acute excruciating pain in 1st MTP joint (podagra)",
        "Erythema and warmth",
        "Severe localized swelling",
        "Hypersensitivity to touch"
      ],
      "icd11Code": "FA25",
      "description": "Standard evidence-based management includes: Lowers uric acid to prevent flares.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "osteoporosis",
      "name": "Osteoporosis",
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "symptoms": [
        "Silent progressive bone loss",
        "Low-trauma fragility fractures",
        "Loss of height over time",
        "Dorsal kyphosis (dowager hump)"
      ],
      "icd11Code": "FB83.1",
      "description": "Standard evidence-based management includes: Reduces fracture risk; Reduces fracture risk.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "hypercholesterolemia",
      "name": "Hypercholesterolemia",
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "symptoms": [
        "Asymptomatic vascular progression",
        "Occasional xanthomas",
        "Elevated lipid panel markers"
      ],
      "icd11Code": "5C80.0",
      "description": "Standard evidence-based management includes: Lowers LDL cholesterol.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "h-pylori-infection",
      "name": "H. pylori infection",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Chronic postprandial dyspepsia",
        "Epigastric fullness / bloating",
        "Nausea",
        "Frequent belching",
        "Acid taste"
      ],
      "icd11Code": "1A40",
      "description": "Standard evidence-based management includes: Example eradication components.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "irritable-bowel-syndrome",
      "name": "Irritable bowel syndrome",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Recurrent crampy abdominal pain related to defecation",
        "Alternating constipation and diarrhea",
        "Bloating and tenesmus"
      ],
      "icd11Code": "DD91.0",
      "description": "Standard evidence-based management includes: May relieve intestinal spasm.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "inflammatory-bowel-disease",
      "name": "Inflammatory bowel disease",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Chronic diarrhea with mucus/blood",
        "Cramping abdominal pain",
        "Urgency",
        "Unexplained weight loss",
        "Fever"
      ],
      "icd11Code": "DD70",
      "description": "Standard evidence-based management includes: Controls inflammation in selected ulcerative-colitis cases.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "crohn-disease",
      "name": "Crohn disease",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Right lower quadrant abdominal pain",
        "Chronic watery non-bloody or bloody diarrhea",
        "Perianal fissures/fistulas",
        "Weight loss"
      ],
      "icd11Code": "DD70",
      "description": "Standard evidence-based management includes: Controls inflammatory disease in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "ulcerative-colitis",
      "name": "Ulcerative colitis",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Bloody mucoid diarrhea",
        "Nocturnal bowel movements",
        "Tenesmus (painful urgency)",
        "Lower abdominal cramping"
      ],
      "icd11Code": "DD71",
      "description": "Standard evidence-based management includes: Induces/maintains remission in selected cases.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "hemorrhoids",
      "name": "Hemorrhoids",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Painless bright red rectal bleeding on stool",
        "Perianal pruritus",
        "Prolapsed painful anal lump",
        "Discomfort sitting"
      ],
      "icd11Code": "DB60",
      "description": "Standard evidence-based management includes: Short-term symptom relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "pancreatitis",
      "name": "Pancreatitis",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Severe epigastric pain radiating directly to back",
        "Worse after eating",
        "Nausea and persistent vomiting",
        "Tachycardia"
      ],
      "icd11Code": "DC31",
      "description": "Standard evidence-based management includes: Hospital supportive management.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "chronic-hepatitis-c",
      "name": "Chronic hepatitis C",
      "category": "Liver",
      "categorySlug": "liver",
      "symptoms": [
        "Insidious fatigue",
        "Mild RUQ ache",
        "Elevated AST/ALT",
        "Spider angiomas in advanced stages"
      ],
      "icd11Code": "1E53",
      "description": "Standard evidence-based management includes: Curative antiviral regimen.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "cirrhosis",
      "name": "Cirrhosis",
      "category": "Liver",
      "categorySlug": "liver",
      "symptoms": [
        "Ascites (abdominal swelling)",
        "Caput medusae",
        "Palmar erythema",
        "Easy bruising / coagulopathy",
        "Peripheral edema"
      ],
      "icd11Code": "DB93",
      "description": "Standard evidence-based management includes: Controls fluid retention in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "hepatic-encephalopathy",
      "name": "Hepatic encephalopathy",
      "category": "Liver",
      "categorySlug": "liver",
      "symptoms": [
        "Asterixis (flapping hand tremor)",
        "Reversal of sleep-wake cycle",
        "Confusion",
        "Disorientation",
        "Slurred speech"
      ],
      "icd11Code": "DB93.Z",
      "description": "Standard evidence-based management includes: Reduces ammonia absorption.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "urinary-tract-infection",
      "name": "Urinary tract infection",
      "category": "Kidney/urinary",
      "categorySlug": "kidney-urinary",
      "symptoms": [
        "Dysuria (burning on urination)",
        "Urinary frequency and urgency",
        "Suprapubic tenderness",
        "Cloudy foul-smelling urine"
      ],
      "icd11Code": "GC08",
      "description": "Standard evidence-based management includes: Treatment of selected lower UTIs.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "kidney-infection",
      "name": "Kidney infection",
      "category": "Kidney/urinary",
      "categorySlug": "kidney-urinary",
      "symptoms": [
        "High fever with rigors",
        "Costovertebral angle flank pain",
        "Nausea and vomiting",
        "Dysuria and hematuria"
      ],
      "icd11Code": "GB54",
      "description": "Standard evidence-based management includes: Hospital/initial treatment in selected cases.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "kidney-stones",
      "name": "Kidney stones",
      "category": "Kidney/urinary",
      "categorySlug": "kidney-urinary",
      "symptoms": [
        "Severe spasmodic flank pain radiating to groin (renal colic)",
        "Microscopic or gross hematuria",
        "Nausea and restlessness"
      ],
      "icd11Code": "GB70",
      "description": "Standard evidence-based management includes: May aid passage of selected ureteric stones.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "chronic-kidney-disease",
      "name": "Chronic kidney disease",
      "category": "Kidney/urinary",
      "categorySlug": "kidney-urinary",
      "symptoms": [
        "Early: asymptomatic",
        "Later: periorbital morning edema",
        "Nocturia",
        "Pruritus",
        "Fatigue",
        "Foamy urine"
      ],
      "icd11Code": "GB61",
      "description": "Standard evidence-based management includes: Kidney/BP protection in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "overactive-bladder",
      "name": "Overactive bladder",
      "category": "Kidney/urinary",
      "categorySlug": "kidney-urinary",
      "symptoms": [
        "Urinary urgency with or without incontinence",
        "Frequency (> 8 times in 24h)",
        "Nocturia waking >= 2 times"
      ],
      "icd11Code": "GC00.0",
      "description": "Standard evidence-based management includes: Reduces bladder overactivity.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "migraine",
      "name": "Migraine",
      "category": "Neurological",
      "categorySlug": "neurological",
      "symptoms": [
        "Unilateral throbbing pulsating headache",
        "Photophobia and phonophobia",
        "Visual or sensory aura",
        "Nausea and vomiting"
      ],
      "icd11Code": "8A80",
      "description": "Standard evidence-based management includes: Acute migraine treatment; Migraine prevention in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "epilepsy",
      "name": "Epilepsy",
      "category": "Neurological",
      "categorySlug": "neurological",
      "symptoms": [
        "Generalized tonic-clonic motor convulsions",
        "Transient focal absence lapses",
        "Post-ictal confusion",
        "Tongue biting"
      ],
      "icd11Code": "8A60",
      "description": "Standard evidence-based management includes: Seizure control; Seizure control in selected cases.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "parkinson-disease",
      "name": "Parkinson disease",
      "category": "Neurological",
      "categorySlug": "neurological",
      "symptoms": [
        "Resting pill-rolling tremor",
        "Cogwheel rigidity",
        "Bradykinesia (slowness of movement)",
        "Postural instability / shuffling gait"
      ],
      "icd11Code": "8A00",
      "description": "Standard evidence-based management includes: Improves motor symptoms.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "alzheimer-disease",
      "name": "Alzheimer disease",
      "category": "Neurological",
      "categorySlug": "neurological",
      "symptoms": [
        "Short-term episodic memory loss",
        "Impaired executive function",
        "Disorientation to time and place",
        "Aphasia / word-finding difficulty"
      ],
      "icd11Code": "8A20",
      "description": "Standard evidence-based management includes: Symptomatic treatment in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "multiple-sclerosis",
      "name": "Multiple sclerosis",
      "category": "Neurological",
      "categorySlug": "neurological",
      "symptoms": [
        "Optic neuritis with vision loss",
        "Lhermitte sign (electric shock down spine)",
        "Unilateral limb weakness",
        "Ataxia and paresthesia"
      ],
      "icd11Code": "8A40",
      "description": "Standard evidence-based management includes: Reduces relapses in selected MS.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "neuropathic-pain",
      "name": "Neuropathic pain",
      "category": "Neurological",
      "categorySlug": "neurological",
      "symptoms": [
        "Lancinating or burning sensation",
        "Allodynia (pain from light touch)",
        "Hyperalgesia",
        "Numbness and tingling"
      ],
      "icd11Code": "8E43",
      "description": "Standard evidence-based management includes: Neuropathic pain treatment.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "trigeminal-neuralgia",
      "name": "Trigeminal neuralgia",
      "category": "Neurological",
      "categorySlug": "neurological",
      "symptoms": [
        "Unilateral paroxysmal electric-shock facial pain",
        "Triggered by chewing, touching face, or cold breeze",
        "Brief stabbing episodes"
      ],
      "icd11Code": "8B82.0",
      "description": "Standard evidence-based management includes: First-line treatment in many cases.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "depressive-disorder",
      "name": "Depressive disorder",
      "category": "Mental health",
      "categorySlug": "mental-health",
      "symptoms": [
        "Persistent depressed mood (> 2 weeks)",
        "Anhedonia (loss of interest)",
        "Insomnia or hypersomnia",
        "Fatigue and feelings of worthlessness"
      ],
      "icd11Code": "6A70",
      "description": "Standard evidence-based management includes: Treatment of depressive/anxiety disorders.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "anxiety-disorder",
      "name": "Anxiety disorder",
      "category": "Mental health",
      "categorySlug": "mental-health",
      "symptoms": [
        "Excessive persistent uncontrollable worry",
        "Restlessness / feeling keyed up",
        "Muscle tension",
        "Fatigue",
        "Irritability"
      ],
      "icd11Code": "6B00",
      "description": "Standard evidence-based management includes: Treatment of selected anxiety disorders.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "obsessive-compulsive-disorder",
      "name": "Obsessive-compulsive disorder",
      "category": "Mental health",
      "categorySlug": "mental-health",
      "symptoms": [
        "Intrusive distressing recurrent thoughts (obsessions)",
        "Repetitive ritualistic behaviors (compulsions) to relieve anxiety"
      ],
      "icd11Code": "6B20",
      "description": "Standard evidence-based management includes: Treatment of OCD in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "panic-disorder",
      "name": "Panic disorder",
      "category": "Mental health",
      "categorySlug": "mental-health",
      "symptoms": [
        "Recurrent abrupt surges of intense fear (panic attacks)",
        "Palpitations and pounding heart",
        "Chest tightness",
        "Sense of impending doom"
      ],
      "icd11Code": "6B01",
      "description": "Standard evidence-based management includes: Long-term treatment in selected cases.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "adhd",
      "name": "ADHD",
      "category": "Mental health",
      "categorySlug": "mental-health",
      "symptoms": [
        "Persistent inattention",
        "Hyperactivity and impulsivity",
        "Disorganization and task incompletion",
        "Restlessness"
      ],
      "icd11Code": "6A05",
      "description": "Standard evidence-based management includes: ADHD treatment in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "acne",
      "name": "Acne",
      "category": "Skin",
      "categorySlug": "skin",
      "symptoms": [
        "Open and closed comedones (blackheads/whiteheads)",
        "Inflammatory erythematous papules and pustules",
        "Nodules and cysts on face/chest"
      ],
      "icd11Code": "ED80",
      "description": "Standard evidence-based management includes: Treats comedonal/inflammatory acne; Reduces acne bacteria/inflammation.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "eczema",
      "name": "Eczema",
      "category": "Skin",
      "categorySlug": "skin",
      "symptoms": [
        "Intense pruritus (itching)",
        "Erythematous scaly patches",
        "Lichenification from chronic scratching",
        "Xerosis (dry skin)"
      ],
      "icd11Code": "EA80",
      "description": "Standard evidence-based management includes: Reduces inflammation.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "psoriasis",
      "name": "Psoriasis",
      "category": "Skin",
      "categorySlug": "skin",
      "symptoms": [
        "Well-demarcated erythematous plaques",
        "Silvery-white micaceous scales",
        "Auspitz sign (pinpoint bleeding upon scraping)",
        "Extensor predilection"
      ],
      "icd11Code": "EA90",
      "description": "Standard evidence-based management includes: Reduces inflammation in selected lesions.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "fungal-skin-infection",
      "name": "Fungal skin infection",
      "category": "Skin",
      "categorySlug": "skin",
      "symptoms": [
        "Annular ring-like erythematous plaques (ringworm)",
        "Central clearing with active scaly border",
        "Intense itching",
        "Maceration between toes"
      ],
      "icd11Code": "1F28",
      "description": "Standard evidence-based management includes: Treats susceptible superficial fungal infections.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "bacterial-skin-infection",
      "name": "Bacterial skin infection",
      "category": "Skin",
      "categorySlug": "skin",
      "symptoms": [
        "Erythema, warmth, and localized edema (cellulitis)",
        "Honey-colored crusting (impetigo)",
        "Pustules and folliculitis"
      ],
      "icd11Code": "1B70",
      "description": "Standard evidence-based management includes: Topical treatment of selected bacterial infections.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "urticaria",
      "name": "Urticaria",
      "category": "Skin",
      "categorySlug": "skin",
      "symptoms": [
        "Evanescent itchy wheals (hives)",
        "Surrounding flare erythema",
        "Blanches with pressure",
        "Lesions resolve within 24h"
      ],
      "icd11Code": "EA91",
      "description": "Standard evidence-based management includes: Relieves itching/hives.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "vitiligo",
      "name": "Vitiligo",
      "category": "Skin",
      "categorySlug": "skin",
      "symptoms": [
        "Completely depigmented chalky-white macules/patches",
        "Well-demarcated margins",
        "Common on periorificial areas and dorsal hands"
      ],
      "icd11Code": "ED63",
      "description": "Standard evidence-based management includes: May help repigmentation in selected areas.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "osteoarthritis",
      "name": "Osteoarthritis",
      "category": "Musculoskeletal",
      "categorySlug": "musculoskeletal",
      "symptoms": [
        "Deep aching joint pain worse with use",
        "Morning stiffness lasting < 30 minutes",
        "Crepitus on active movement",
        "Bony enlargement (Heberden nodes)"
      ],
      "icd11Code": "FA00",
      "description": "Standard evidence-based management includes: Pain relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "rheumatoid-arthritis",
      "name": "Rheumatoid arthritis",
      "category": "Musculoskeletal",
      "categorySlug": "musculoskeletal",
      "symptoms": [
        "Symmetric polyarthritis in MCP and PIP joints",
        "Prolonged morning stiffness (> 1 hour)",
        "Warm swollen boggy joints",
        "Rheumatoid nodules"
      ],
      "icd11Code": "FA20",
      "description": "Standard evidence-based management includes: Disease-modifying treatment; Disease modification.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "ankylosing-spondylitis",
      "name": "Ankylosing spondylitis",
      "category": "Musculoskeletal",
      "categorySlug": "musculoskeletal",
      "symptoms": [
        "Chronic inflammatory back pain",
        "Stiffness worse with rest, relieved by exercise",
        "Sacroiliac joint tenderness",
        "Chest expansion limitation"
      ],
      "icd11Code": "FA92",
      "description": "Standard evidence-based management includes: Pain/inflammation control.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "gout-flare",
      "name": "Gout flare",
      "category": "Musculoskeletal",
      "categorySlug": "musculoskeletal",
      "symptoms": [
        "Acute severe monoarticular inflammation",
        "Erythema, swelling, and exquisite tenderness",
        "Rapid onset over hours, often nighttime"
      ],
      "icd11Code": "FA25.0",
      "description": "Standard evidence-based management includes: Acute inflammation/pain relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "fibromyalgia",
      "name": "Fibromyalgia",
      "category": "Musculoskeletal",
      "categorySlug": "musculoskeletal",
      "symptoms": [
        "Widespread chronic musculoskeletal pain across multiple quadrants",
        "Multiple bilateral tender trigger points",
        "Chronic unrefreshing sleep",
        "Cognitive fog"
      ],
      "icd11Code": "MG30.01",
      "description": "Standard evidence-based management includes: May reduce pain in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "glaucoma",
      "name": "Glaucoma",
      "category": "Eye",
      "categorySlug": "eye",
      "symptoms": [
        "Gradual peripheral visual field loss (tunnel vision)",
        "Elevated intraocular pressure",
        "Acute angle closure: severe ocular pain, headache, halos around lights"
      ],
      "icd11Code": "9C61",
      "description": "Standard evidence-based management includes: Lowers intraocular pressure.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "conjunctivitis",
      "name": "Conjunctivitis",
      "category": "Eye",
      "categorySlug": "eye",
      "symptoms": [
        "Conjunctival injection (pink/red eye)",
        "Foreign-body sensation",
        "Watery or purulent ocular discharge",
        "Crusting of eyelashes upon waking"
      ],
      "icd11Code": "9A60",
      "description": "Standard evidence-based management includes: Symptom relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "allergic-conjunctivitis",
      "name": "Allergic conjunctivitis",
      "category": "Eye",
      "categorySlug": "eye",
      "symptoms": [
        "Intense bilateral ocular pruritus (itching)",
        "Watery discharge",
        "Conjunctival chemosis (edema)",
        "Periorbital dark circles"
      ],
      "icd11Code": "9A61.1",
      "description": "Standard evidence-based management includes: Allergy symptom relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "dry-eye-disease",
      "name": "Dry eye disease",
      "category": "Eye",
      "categorySlug": "eye",
      "symptoms": [
        "Gritty sandy burning ocular sensation",
        "Paradoxical reflex tearing",
        "Visual fatigue",
        "Fluctuating vision exacerbated by screen use"
      ],
      "icd11Code": "9A94",
      "description": "Standard evidence-based management includes: Lubrication.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "otitis-externa",
      "name": "Otitis externa",
      "category": "Ear",
      "categorySlug": "ear",
      "symptoms": [
        "Severe otalgia exacerbated by traction on auricle/tragus",
        "Pruritus and fullness in ear canal",
        "Erythema and purulent otorrhea"
      ],
      "icd11Code": "AA00",
      "description": "Standard evidence-based management includes: Treats selected bacterial outer-ear infections.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "otitis-media",
      "name": "Otitis media",
      "category": "Ear",
      "categorySlug": "ear",
      "symptoms": [
        "Acute deep throbbing otalgia",
        "Conductive hearing loss",
        "Erythematous bulging tympanic membrane",
        "Fever in pediatric patients"
      ],
      "icd11Code": "AA20",
      "description": "Standard evidence-based management includes: Pain relief; antibiotic in selected cases.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "endometriosis",
      "name": "Endometriosis",
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "symptoms": [
        "Severe progressive dysmenorrhea",
        "Chronic non-cyclic pelvic pain",
        "Deep dyspareunia (pain with intercourse)",
        "Dyschezia during menses"
      ],
      "icd11Code": "GA10",
      "description": "Standard evidence-based management includes: Reduces symptoms in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "pcos",
      "name": "PCOS",
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "symptoms": [
        "Oligomenorrhea or amenorrhea",
        "Hirsutism and adult cystic acne",
        "Central weight gain and insulin resistance",
        "Polycystic ovarian morphology"
      ],
      "icd11Code": "5A80.1",
      "description": "Standard evidence-based management includes: Metabolic management in selected PCOS patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "benign-prostatic-hyperplasia",
      "name": "Benign prostatic hyperplasia",
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "symptoms": [
        "Hesitancy and weak urinary stream",
        "Nocturia and frequency",
        "Post-void dribbling",
        "Sensation of incomplete bladder emptying"
      ],
      "icd11Code": "GA90",
      "description": "Standard evidence-based management includes: Improves urinary symptoms.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "erectile-dysfunction",
      "name": "Erectile dysfunction",
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "symptoms": [
        "Persistent inability to achieve or maintain penile erection satisfactory for sexual intercourse",
        "Reduced libido"
      ],
      "icd11Code": "HA01.1",
      "description": "Standard evidence-based management includes: Improves erectile function in eligible patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "pelvic-inflammatory-disease",
      "name": "Pelvic inflammatory disease",
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "symptoms": [
        "Bilateral lower abdominal/pelvic pain",
        "Abnormal purulent vaginal discharge",
        "Cervical motion tenderness (chandelier sign)",
        "Fever"
      ],
      "icd11Code": "GA00",
      "description": "Standard evidence-based management includes: Treatment of selected PID.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "iron-deficiency-anemia",
      "name": "Iron-deficiency anemia",
      "category": "Hematology",
      "categorySlug": "hematology",
      "symptoms": [
        "Fatigue, pallor, and exertional dyspnea",
        "Koilonychia (spoon nails)",
        "Angular cheilitis",
        "Atrophic glossitis",
        "Pica (craving ice/clay)"
      ],
      "icd11Code": "3A00",
      "description": "Standard evidence-based management includes: Replaces iron.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "vitamin-b12-deficiency",
      "name": "Vitamin B12 deficiency",
      "category": "Hematology",
      "categorySlug": "hematology",
      "symptoms": [
        "Megaloblastic anemia with fatigue",
        "Symmetric peripheral neuropathy (tingling/numbness)",
        "Subacute combined spinal degeneration",
        "Glossitis"
      ],
      "icd11Code": "3A01.0",
      "description": "Standard evidence-based management includes: B12 replacement.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "folate-deficiency",
      "name": "Folate deficiency",
      "category": "Hematology",
      "categorySlug": "hematology",
      "symptoms": [
        "Fatigue, weakness, and pallor",
        "Sore tongue (glossitis)",
        "Absence of neurological symptoms (unlike B12)"
      ],
      "icd11Code": "3A01.1",
      "description": "Standard evidence-based management includes: Folate replacement.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "hemophilia-a",
      "name": "Hemophilia A",
      "category": "Hematology",
      "categorySlug": "hematology",
      "symptoms": [
        "Spontaneous recurrent hemarthrosis (joint bleeding)",
        "Deep intramuscular hematomas",
        "Prolonged bleeding after mild trauma",
        "Target joint arthropathy"
      ],
      "icd11Code": "3B10.0",
      "description": "Standard evidence-based management includes: Replaces missing clotting factor.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "sickle-cell-disease",
      "name": "Sickle-cell disease",
      "category": "Hematology",
      "categorySlug": "hematology",
      "symptoms": [
        "Severe acute vaso-occlusive pain crises in bones/chest",
        "Chronic hemolytic anemia and jaundice",
        "Dactylitis in infants",
        "Splenic sequestration"
      ],
      "icd11Code": "3A51",
      "description": "Standard evidence-based management includes: Reduces complications in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "thalassemia",
      "name": "Thalassemia",
      "category": "Hematology",
      "categorySlug": "hematology",
      "symptoms": [
        "Severe microcytic anemia from early childhood",
        "Hepatosplenomegaly",
        "Bone marrow expansion with frontal bossing",
        "Transfusional iron overload"
      ],
      "icd11Code": "3A50",
      "description": "Standard evidence-based management includes: Reduces transfusional iron overload.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "breast-cancer",
      "name": "Breast cancer",
      "category": "Cancer",
      "categorySlug": "cancer",
      "symptoms": [
        "Painless solitary breast mass or thickening",
        "Nipple retraction or bloody discharge",
        "Skin dimpling (peau d'orange)",
        "Axillary lymphadenopathy"
      ],
      "icd11Code": "2C60",
      "description": "Standard evidence-based management includes: Hormone-receptor-positive disease in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "prostate-cancer",
      "name": "Prostate cancer",
      "category": "Cancer",
      "categorySlug": "cancer",
      "symptoms": [
        "Often asymptomatic in early stages",
        "Obstructive urinary symptoms (hesitancy/weak stream)",
        "Bone pain in metastatic disease"
      ],
      "icd11Code": "2C82",
      "description": "Standard evidence-based management includes: Hormone-sensitive disease in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "leukemia",
      "name": "Leukemia",
      "category": "Cancer",
      "categorySlug": "cancer",
      "symptoms": [
        "Fatigue, pallor, and recurrent infections",
        "Easy bruising, petechiae, and epistaxis",
        "Bone and joint pain",
        "Splenomegaly"
      ],
      "icd11Code": "2A60",
      "description": "Standard evidence-based management includes: BCR-ABL-positive leukemia.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "multiple-myeloma",
      "name": "Multiple myeloma",
      "category": "Cancer",
      "categorySlug": "cancer",
      "symptoms": [
        "Bone pain (especially lumbar spine/ribs)",
        "Pathologic fractures",
        "Hypercalcemia (lethargy, constipation)",
        "Renal impairment",
        "Normocytic anemia"
      ],
      "icd11Code": "2A83",
      "description": "Standard evidence-based management includes: Cancer treatment in combination regimens.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "lung-cancer",
      "name": "Lung cancer",
      "category": "Cancer",
      "categorySlug": "cancer",
      "symptoms": [
        "Persistent worsening cough",
        "Hemoptysis",
        "Substernal chest pain",
        "Hoarseness",
        "Unexplained weight loss",
        "Dyspnea"
      ],
      "icd11Code": "2C25",
      "description": "Standard evidence-based management includes: EGFR-mutated NSCLC in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "cervical-cancer",
      "name": "Cervical cancer",
      "category": "Cancer",
      "categorySlug": "cancer",
      "symptoms": [
        "Abnormal postcoital or intermenstrual vaginal bleeding",
        "Foul-smelling watery vaginal discharge",
        "Pelvic pain in advanced stages"
      ],
      "icd11Code": "2C77",
      "description": "Standard evidence-based management includes: Used in selected cancer regimens.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "colorectal-cancer",
      "name": "Colorectal cancer",
      "category": "Cancer",
      "categorySlug": "cancer",
      "symptoms": [
        "Persistent change in bowel habits",
        "Visible rectal bleeding or melena",
        "Iron deficiency anemia in right-sided tumors",
        "Tenesmus"
      ],
      "icd11Code": "2C40",
      "description": "Standard evidence-based management includes: Used in combination regimens.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "lymphoma",
      "name": "Lymphoma",
      "category": "Cancer",
      "categorySlug": "cancer",
      "symptoms": [
        "Painless firm rubbery lymphadenopathy (cervical/axillary)",
        "B-symptoms: drenching night sweats, fever >38Â°C, unexplained weight loss"
      ],
      "icd11Code": "2A80",
      "description": "Standard evidence-based management includes: B-cell malignancies in selected regimens.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "severe-allergic-reaction",
      "name": "Severe allergic reaction",
      "category": "Allergy/immune",
      "categorySlug": "allergy-immune",
      "symptoms": [
        "Sudden respiratory distress / stridor / bronchospasm",
        "Angioedema of lips/tongue/pharynx",
        "Hypotension / circulatory collapse",
        "Diffuse urticaria"
      ],
      "icd11Code": "4A84",
      "description": "Standard evidence-based management includes: Emergency treatment of anaphylaxis.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "allergic-dermatitis",
      "name": "Allergic dermatitis",
      "category": "Allergy/immune",
      "categorySlug": "allergy-immune",
      "symptoms": [
        "Pruritic vesicular rash localized to allergen contact area",
        "Erythema, edema, and weeping vesicles",
        "Lichenified plaques in chronic contact"
      ],
      "icd11Code": "EA80",
      "description": "Standard evidence-based management includes: Itch relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "systemic-lupus-erythematosus",
      "name": "Systemic lupus erythematosus",
      "category": "Allergy/immune",
      "categorySlug": "allergy-immune",
      "symptoms": [
        "Malar butterfly rash sparing nasolabial folds",
        "Photosensitivity",
        "Non-erosive symmetric polyarthritis",
        "Renal proteinuria",
        "Oral ulcers"
      ],
      "icd11Code": "4A40",
      "description": "Standard evidence-based management includes: Disease control in selected patients.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "inflammatory-arthritis",
      "name": "Inflammatory arthritis",
      "category": "Allergy/immune",
      "categorySlug": "allergy-immune",
      "symptoms": [
        "Joint inflammation with warmth and swelling",
        "Morning stiffness > 45 minutes",
        "Elevated CRP/ESR",
        "Joint effusion"
      ],
      "icd11Code": "FA20",
      "description": "Standard evidence-based management includes: Pain/inflammation relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "fever",
      "name": "Fever",
      "category": "Emergency/supportive",
      "categorySlug": "emergency-supportive",
      "symptoms": [
        "Elevated core body temperature (> 37.8Â°C / 100Â°F)",
        "Chills and rigors",
        "Diaphoresis (sweating)",
        "Malaise and myalgia"
      ],
      "icd11Code": "MG26",
      "description": "Standard evidence-based management includes: Fever/pain relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "mild-pain",
      "name": "Mild pain",
      "category": "Emergency/supportive",
      "categorySlug": "emergency-supportive",
      "symptoms": [
        "Localized discomfort of mild to moderate intensity (NRS 1-4)",
        "Tension headache",
        "Minor muscular soreness"
      ],
      "icd11Code": "MG30",
      "description": "Standard evidence-based management includes: Pain relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "moderate-inflammatory-pain",
      "name": "Moderate inflammatory pain",
      "category": "Emergency/supportive",
      "categorySlug": "emergency-supportive",
      "symptoms": [
        "Throbbing aching localized pain with inflammation",
        "Soft-tissue strain or sprain",
        "Musculoskeletal inflammation"
      ],
      "icd11Code": "MG30",
      "description": "Standard evidence-based management includes: Pain/inflammation relief.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "dehydration",
      "name": "Dehydration",
      "category": "Emergency/supportive",
      "categorySlug": "emergency-supportive",
      "symptoms": [
        "Dry oral mucous membranes",
        "Reduced skin turgor",
        "Oliguria with concentrated dark urine",
        "Postural dizziness / tachycardia",
        "Lethargy"
      ],
      "icd11Code": "5C73",
      "description": "Standard evidence-based management includes: Replaces fluids/electrolytes.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "stroke",
      "name": "Stroke & Transient Ischemic Attack (TIA)",
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "symptoms": [
        "Facial drooping",
        "Unilateral arm/leg weakness",
        "Speech difficulty / slurred speech",
        "Sudden severe headache",
        "Loss of balance"
      ],
      "icd11Code": "8B11",
      "description": "Acute cerebrovascular event resulting in localized cerebral ischemia or infarction with sudden focal neurological deficit.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "heart-attack",
      "name": "Acute Myocardial Infarction (Heart Attack)",
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "symptoms": [
        "Crushing substernal chest pressure",
        "Pain radiating to left arm/jaw",
        "Diaphoresis (cold sweats)",
        "Dyspnea (shortness of breath)",
        "Severe nausea"
      ],
      "icd11Code": "BA41",
      "description": "Acute coronary arterial occlusion leading to myocardial tissue ischemia and necrosis, presenting with crushing substernal chest discomfort.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "gas-bloating",
      "name": "Abdominal Gas, Flatulence & Bloating",
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "symptoms": [
        "Abdominal bloating and distension",
        "Excessive flatulence",
        "Belching / burping",
        "Abdominal cramps",
        "Early satiety"
      ],
      "icd11Code": "MD90",
      "description": "Excess intestinal gas buildup causing abdominal distension, postprandial fullness, cramping discomfort, and excessive flatulence or eructation.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "schizophrenia",
      "name": "Schizophrenia & Psychotic Disorders",
      "category": "Mental health",
      "categorySlug": "mental-health",
      "symptoms": [
        "Auditory hallucinations",
        "Delusions (persecutory or referential)",
        "Disorganized thinking / speech",
        "Catatonia",
        "Emotional blunting"
      ],
      "icd11Code": "6A20",
      "description": "Severe mental disorder characterized by persistent disturbances in thinking, perception, reality testing, affect, and behavior.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "bipolar-disorder",
      "name": "Bipolar Affective Disorder",
      "category": "Mental health",
      "categorySlug": "mental-health",
      "symptoms": [
        "Elevated, expansive or irritable mood",
        "Decreased need for sleep",
        "Flight of ideas / racing thoughts",
        "Impulsive risky behavior",
        "Major depressive crashes"
      ],
      "icd11Code": "6A60",
      "description": "Episodic mood disorder marked by alternating episodes of mania/hypomania (elation, impulsivity, decreased sleep) and major depressive episodes.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "cataract",
      "name": "Cataract & Post-Surgical Ocular Inflammation",
      "category": "Eye",
      "categorySlug": "eye",
      "symptoms": [
        "Gradual progressive blurry vision",
        "Halos around lights / glare",
        "Faded color perception",
        "Poor night vision",
        "Frequent prescription changes"
      ],
      "icd11Code": "9B10",
      "description": "Progressive opacification of the crystalline eye lens causing painless blurring of vision, glare, loss of contrast, and post-operative ocular inflammation.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "macular-degeneration",
      "name": "Age-Related Macular Degeneration (AMD)",
      "category": "Eye",
      "categorySlug": "eye",
      "symptoms": [
        "Metamorphopsia (straight lines appearing wavy)",
        "Dark or empty blurry area in center of vision",
        "Difficulty recognizing faces",
        "Decreased color brightness"
      ],
      "icd11Code": "9B75",
      "description": "Progressive degenerative disease of the central retinal macula leading to distortion of central vision, central scotoma, and reading difficulty.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "hearing-loss",
      "name": "Sudden Sensorineural Hearing Loss",
      "category": "Ear",
      "categorySlug": "ear",
      "symptoms": [
        "Sudden drop in hearing in one or both ears",
        "Aural fullness / blocked ear sensation",
        "Tinnitus (ringing in ear)",
        "Mild imbalance or dizziness"
      ],
      "icd11Code": "AB51",
      "description": "Rapid loss of hearing acuity of at least 30 decibels across three contiguous frequencies, occurring over a period of 72 hours or less.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "meniere-disease",
      "name": "Meniere's Disease & Endolymphatic Hydrops",
      "category": "Ear",
      "categorySlug": "ear",
      "symptoms": [
        "Episodic spinning vertigo attacks (lasting 20 mins to 12 hrs)",
        "Fluctuating hearing loss",
        "Roaring tinnitus",
        "Aural fullness / ear pressure",
        "Severe nausea and vomiting"
      ],
      "icd11Code": "AB30",
      "description": "Chronic inner ear disorder characterized by episodic rotational vertigo, fluctuating low-frequency sensorineural hearing loss, and aural fullness.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "nephritis",
      "name": "Acute Glomerulonephritis & Interstitial Nephritis",
      "category": "Kidney/urinary",
      "categorySlug": "kidney-urinary",
      "symptoms": [
        "Tea-colored or cola-colored smoky urine (hematuria)",
        "Facial and periorbital morning edema",
        "Reduced urine output (oliguria)",
        "Hypertension",
        "Flank or back ache"
      ],
      "icd11Code": "GB40",
      "description": "Inflammation of the renal glomeruli and tubules resulting in hematuria (tea-colored urine), proteinuria, periorbital edema, and acute oliguria.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "gallbladder-diseases",
      "name": "Gallbladder Disease & Biliary Cholecystitis",
      "category": "Liver",
      "categorySlug": "liver",
      "symptoms": [
        "Severe RUQ abdominal stabbing colic",
        "Pain radiating to right shoulder / scapula",
        "Nausea after fatty meals",
        "Low-grade fever",
        "Postprandial dyspepsia"
      ],
      "icd11Code": "DC11",
      "description": "Cholelithiasis and acute or chronic inflammation of the gallbladder, presenting with severe right upper quadrant colic radiating to the right scapula.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "obesity",
      "name": "Obesity & Metabolic Adiposity Management",
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "symptoms": [
        "Excess body weight and high BMI",
        "Exertional breathlessness",
        "Obstructive sleep apnea / snoring",
        "Joint aches and back pain",
        "Insulin resistance"
      ],
      "icd11Code": "5B81",
      "description": "Chronic progressive metabolic disease characterized by abnormal or excessive adiposity accumulation (BMI >= 30 kg/m2) impairing health.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "pregnancy-disorders",
      "name": "Pregnancy-Induced Hypertension & Preeclampsia",
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "symptoms": [
        "Elevated blood pressure in pregnancy",
        "Severe persistent throbbing headache",
        "Visual disturbances (scintillating scotomas)",
        "Epigastric or RUQ pain",
        "Sudden edema of hands and face"
      ],
      "icd11Code": "JA20",
      "description": "Multisystem pregnancy complication characterized by new-onset gestational hypertension (BP >= 140/90 mmHg) after 20 weeks with proteinuria or organ dysfunction.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "nutritional-diseases",
      "name": "Nutritional Deficiencies (Scurvy, Rickets, Malnutrition)",
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "symptoms": [
        "Spongy bleeding gums and petechiae (scurvy)",
        "Bowing of long bones / rickets",
        "Severe muscle wasting and fatigue",
        "Dry scaly skin and brittle nails",
        "Impaired wound healing"
      ],
      "icd11Code": "5B50",
      "description": "Severe micronutrient and macronutrient depletion states causing bone demineralization, connective tissue fragility, gum bleeding, and stunted growth.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "environmental-diseases",
      "name": "Environmental & Altitude Illness (Heat Exhaustion & AMS)",
      "category": "Emergency/supportive",
      "categorySlug": "emergency-supportive",
      "symptoms": [
        "Severe throbbing headache at high altitude",
        "Nausea, dizziness, and insomnia",
        "Heavy diaphoresis / heat cramps",
        "Dehydration and lightheadedness",
        "Exertional weakness"
      ],
      "icd11Code": "NF00",
      "description": "Physical disorders caused by environmental thermal extremes or hypobaric hypoxia at high elevations (>2500m), presenting with ataxia and dehydration.",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    },
    {
      "id": "rare-diseases",
      "name": "Rare Diseases (Wilson's Disease & Myasthenia Gravis)",
      "category": "Emergency/supportive",
      "categorySlug": "emergency-supportive",
      "symptoms": [
        "Fluctuating muscle weakness and ptosis (drooping eyelid)",
        "Diplopia (double vision)",
        "Tremors, dysarthria, and dystonia",
        "Hepatic dysfunction and jaundice",
        "Kayser-Fleischer corneal rings"
      ],
      "icd11Code": "5C53",
      "description": "Low-prevalence complex disorders including abnormal copper storage (Wilson's) and autoimmune neuromuscular junction blockade (Myasthenia Gravis).",
      "redFlags": [
        "High persistent fever > 103°F",
        "Severe dehydration",
        "Difficulty breathing"
      ],
      "homeCare": "Hydration, rest, and monitoring of vitals.",
      "recommendedMedicines": []
    }
  ],
  "medicines": [
    {
      "id": "hkare_influenza_oseltamivir_1",
      "activeIngredient": "Oseltamivir",
      "medicineClass": "Antiviral",
      "condition": "Influenza",
      "conditionId": "influenza",
      "conditionIds": [
        "influenza",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Antiviral treatment in selected influenza cases",
      "dosageGuideline": "Adult: 75 mg twice daily for 5 days within 48 hrs of symptom onset. Prophylaxis: 75 mg once daily.",
      "brandNames": "Tamiflu, Antiflu, Fluvir",
      "safetyNote": "Doctor-guided; timing and risk factors matter",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Tamiflu",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Tamiflu",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Tamiflu/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_covid-19_nirmatrelvir-ritonavir_2",
      "activeIngredient": "Nirmatrelvir + ritonavir",
      "medicineClass": "Antiviral",
      "condition": "COVID-19",
      "conditionId": "covid-19",
      "conditionIds": [
        "covid-19",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Antiviral treatment for selected high-risk cases",
      "dosageGuideline": "Adult: 300 mg nirmatrelvir (two 150 mg tablets) with 100 mg ritonavir (one 100 mg tablet) taken together twice daily for 5 days.",
      "brandNames": "Paxlovid",
      "safetyNote": "Prescription; major drug interactions",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Paxlovid",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Paxlovid",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Paxlovid/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_tuberculosis_rifampicin-isoniazid-pyrazinamide-ethambutol_3",
      "activeIngredient": "Rifampicin + isoniazid + pyrazinamide + ethambutol",
      "medicineClass": "Antitubercular",
      "condition": "Tuberculosis",
      "conditionId": "tuberculosis",
      "conditionIds": [
        "tuberculosis",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Combination treatment",
      "dosageGuideline": "Adult: Fixed-dose 4-drug combination (RHEZ) daily for 2 months intensive phase, followed by RH for 4 months continuation phase.",
      "brandNames": "Rifagut, R-Cinex, Macox Plus",
      "safetyNote": "Specialist/public-health regimen; never self-treat",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Rifagut",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Rifagut",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Rifagut/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_malaria_artemether-lumefantrine_4",
      "activeIngredient": "Artemether + lumefantrine",
      "medicineClass": "Antimalarial",
      "condition": "Malaria",
      "conditionId": "malaria",
      "conditionIds": [
        "malaria",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Treatment of susceptible malaria",
      "dosageGuideline": "Adult: 6-dose regimen of artemether 20 mg / lumefantrine 120 mg (4 tablets per dose) at 0, 8, 24, 36, 48, and 60 hours with fatty meals.",
      "brandNames": "Coartem, Falcigo, Ridsunate",
      "safetyNote": "Regimen depends on species, resistance and severity",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Coartem",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Coartem",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Coartem/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_dengue_paracetamol_5",
      "activeIngredient": "Paracetamol (acetaminophen)",
      "medicineClass": "Supportive care",
      "condition": "Dengue",
      "conditionId": "dengue",
      "conditionIds": [
        "dengue",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Fever/pain relief",
      "dosageGuideline": "Adult: 500 mg - 650 mg every 4-6 hrs (Max: 4000 mg/day). Pediatric: 10-15 mg/kg/dose every 4-6 hrs.",
      "brandNames": "Dolo 650, Calpol, Crocin, Pacimol",
      "safetyNote": "Avoid aspirin/NSAIDs when dengue is suspected unless clinician advises",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Dolo%20650",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Dolo%20650",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Dolo%20650/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_typhoid-fever_ceftriaxone-azithromycin_6",
      "activeIngredient": "Ceftriaxone / azithromycin",
      "medicineClass": "Antibiotic",
      "condition": "Typhoid fever",
      "conditionId": "typhoid-fever",
      "conditionIds": [
        "typhoid-fever",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Treatment of susceptible bacterial infection",
      "dosageGuideline": "Adult: 500 mg once daily for 3 days (or 500 mg day 1, then 250 mg daily days 2-5). Pediatric: 10 mg/kg/day.",
      "brandNames": "Azee, Azithral, Zady, Zithromax",
      "safetyNote": "Choice depends on resistance and testing",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Azee",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Azee",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Azee/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_cholera_doxycycline-azithromycin_7",
      "activeIngredient": "Doxycycline / azithromycin",
      "medicineClass": "Antibiotic + rehydration",
      "condition": "Cholera",
      "conditionId": "cholera",
      "conditionIds": [
        "cholera",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Antibiotic in selected cases",
      "dosageGuideline": "Adult: 500 mg once daily for 3 days (or 500 mg day 1, then 250 mg daily days 2-5). Pediatric: 10 mg/kg/day.",
      "brandNames": "Azee, Azithral, Zady, Zithromax",
      "safetyNote": "Rehydration is central; antibiotic choice varies",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Azee",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Azee",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Azee/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_measles_vitamin-a_8",
      "activeIngredient": "Vitamin A",
      "medicineClass": "Supportive / vitamin",
      "condition": "Measles",
      "conditionId": "measles",
      "conditionIds": [
        "measles",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Supportive management in children under clinical guidance",
      "dosageGuideline": "Adult: 50,000 to 100,000 IU orally daily for severe deficiency; Measles: 200,000 IU daily for 2 days.",
      "brandNames": "Aquasol A, A-Vita, Vit-A",
      "safetyNote": "Medical supervision required",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Aquasol%20A",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Aquasol%20A",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Aquasol%20A/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_mumps_paracetamol_9",
      "activeIngredient": "Paracetamol (acetaminophen)",
      "medicineClass": "Supportive care",
      "condition": "Mumps",
      "conditionId": "mumps",
      "conditionIds": [
        "mumps",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Fever/pain relief",
      "dosageGuideline": "Adult: 500 mg - 650 mg every 4-6 hrs (Max: 4000 mg/day). Pediatric: 10-15 mg/kg/dose every 4-6 hrs.",
      "brandNames": "Dolo 650, Calpol, Crocin, Pacimol",
      "safetyNote": "Supportive care; diagnosis and complications need assessment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Dolo%20650",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Dolo%20650",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Dolo%20650/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_rubella_paracetamol_10",
      "activeIngredient": "Paracetamol (acetaminophen)",
      "medicineClass": "Supportive care",
      "condition": "Rubella",
      "conditionId": "rubella",
      "conditionIds": [
        "rubella",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Symptom relief",
      "dosageGuideline": "Adult: 500 mg - 650 mg every 4-6 hrs (Max: 4000 mg/day). Pediatric: 10-15 mg/kg/dose every 4-6 hrs.",
      "brandNames": "Dolo 650, Calpol, Crocin, Pacimol",
      "safetyNote": "Pregnancy exposure needs medical assessment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Dolo%20650",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Dolo%20650",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Dolo%20650/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_chickenpox_acyclovir_11",
      "activeIngredient": "Acyclovir",
      "medicineClass": "Antiviral",
      "condition": "Chickenpox",
      "conditionId": "chickenpox",
      "conditionIds": [
        "chickenpox",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Treatment in selected higher-risk cases",
      "dosageGuideline": "Adult: 200 mg 5 times daily (every 4 hrs while awake) for 5-10 days.",
      "brandNames": "Zovirax, Herperax, Acivir",
      "safetyNote": "Early clinician assessment important",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Zovirax",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Zovirax",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Zovirax/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_shingles_acyclovir-valaciclovir_12",
      "activeIngredient": "Acyclovir / valaciclovir",
      "medicineClass": "Antiviral",
      "condition": "Shingles",
      "conditionId": "shingles",
      "conditionIds": [
        "shingles",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Antiviral treatment",
      "dosageGuideline": "Adult: 200 mg 5 times daily (every 4 hrs while awake) for 5-10 days.",
      "brandNames": "Zovirax, Herperax, Acivir",
      "safetyNote": "Early treatment is most useful; clinician guidance",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Zovirax",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Zovirax",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Zovirax/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hepatitis-b_tenofovir-disoproxil-fumarate_13",
      "activeIngredient": "Tenofovir disoproxil fumarate",
      "medicineClass": "Antiviral",
      "condition": "Hepatitis B",
      "conditionId": "hepatitis-b",
      "conditionIds": [
        "hepatitis-b",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Long-term antiviral therapy in selected chronic cases",
      "dosageGuideline": "Adult: 300 mg once daily with or without food.",
      "brandNames": "Viread, Ricovir, Teno-B, Tenvir",
      "safetyNote": "Specialist monitoring required",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Viread",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Viread",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Viread/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hepatitis-c_sofosbuvir-velpatasvir_14",
      "activeIngredient": "Sofosbuvir + velpatasvir",
      "medicineClass": "Direct-acting antiviral",
      "condition": "Hepatitis C",
      "conditionId": "hepatitis-c",
      "conditionIds": [
        "hepatitis-c",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Curative antiviral regimen",
      "dosageGuideline": "Adult: 400 mg sofosbuvir / 100 mg velpatasvir once daily with or without food for 12 weeks.",
      "brandNames": "Epclusa, Velpanat, Sofosvel, MyHep",
      "safetyNote": "Regimen depends on genotype/history and interactions",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Epclusa",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Epclusa",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Epclusa/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hiv-infection_tenofovir-lamivudine-dolutegravir_15",
      "activeIngredient": "Tenofovir + lamivudine + dolutegravir",
      "medicineClass": "Antiretroviral therapy",
      "condition": "HIV infection",
      "conditionId": "hiv-infection",
      "conditionIds": [
        "hiv-infection",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Combination antiretroviral therapy",
      "dosageGuideline": "Adult: 300 mg once daily with or without food.",
      "brandNames": "Viread, Ricovir, Teno-B, Tenvir",
      "safetyNote": "Specialist-guided combination therapy",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Viread",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Viread",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Viread/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_rabies_rabies-vaccine-rabies-immunoglobulin_16",
      "activeIngredient": "Rabies vaccine + rabies immunoglobulin",
      "medicineClass": "Post-exposure prophylaxis",
      "condition": "Rabies",
      "conditionId": "rabies",
      "conditionIds": [
        "rabies",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Post-exposure prevention",
      "dosageGuideline": "Adult/Pediatric: Post-exposure: 1.0 mL IM (deltoid) on days 0, 3, 7, and 14-28 plus RIG on day 0.",
      "brandNames": "Rabipur, Verorab, Kamrab, Berirab",
      "safetyNote": "Urgent medical care; not self-treatment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Rabipur",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Rabipur",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Rabipur/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_tetanus_tetanus-toxoid-vaccine-tetanus-immunoglobulin_17",
      "activeIngredient": "Tetanus toxoid vaccine + tetanus immunoglobulin",
      "medicineClass": "Vaccine / immunoglobulin",
      "condition": "Tetanus",
      "conditionId": "tetanus",
      "conditionIds": [
        "tetanus",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Prevention after selected wounds",
      "dosageGuideline": "Adult: Tetanus toxoid 0.5 mL IM booster plus 250-500 IU tetanus immunoglobulin for contaminated wounds.",
      "brandNames": "Tetavax, HyperTET, TetGlob",
      "safetyNote": "Wound and vaccination history determine treatment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Tetavax",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Tetavax",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Tetavax/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_bacterial-meningitis_ceftriaxone_18",
      "activeIngredient": "Ceftriaxone",
      "medicineClass": "Antibiotic",
      "condition": "Bacterial meningitis",
      "conditionId": "bacterial-meningitis",
      "conditionIds": [
        "bacterial-meningitis",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Empiric treatment in many settings",
      "dosageGuideline": "Adult: 1 g to 2 g IV/IM once daily (Meningitis: 2 g every 12 hrs). Pediatric: 50-100 mg/kg/day.",
      "brandNames": "Rocephin, Monocef, C-Tri, Oframax",
      "safetyNote": "Medical emergency; hospital treatment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Rocephin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Rocephin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Rocephin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_pneumococcal-pneumonia_amoxicillin_19",
      "activeIngredient": "Amoxicillin",
      "medicineClass": "Antibiotic",
      "condition": "Pneumococcal pneumonia",
      "conditionId": "pneumococcal-pneumonia",
      "conditionIds": [
        "pneumococcal-pneumonia",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Treatment of susceptible bacterial infection",
      "dosageGuideline": "Adult: 500 mg every 8 hrs or 875 mg every 12 hrs. Pediatric: 25-45 mg/kg/day divided every 8-12 hrs.",
      "brandNames": "Mox, Novamox, Amoxil, Augmentin",
      "safetyNote": "Diagnosis and severity determine treatment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Mox",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Mox",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Mox/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_scabies_permethrin_20",
      "activeIngredient": "Permethrin",
      "medicineClass": "Antiparasitic",
      "condition": "Scabies",
      "conditionId": "scabies",
      "conditionIds": [
        "scabies",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Eradicates mites",
      "dosageGuideline": "Adult/Pediatric: Thoroughly massage 5% cream into all skin areas from neck to soles; leave on for 8-14 hours before washing off.",
      "brandNames": "Permite, Scaboma, Perlice",
      "safetyNote": "Household treatment and age considerations matter",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Permite",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Permite",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Permite/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_asthma_salbutamol_21",
      "activeIngredient": "Salbutamol",
      "medicineClass": "Short-acting bronchodilator",
      "condition": "Asthma",
      "conditionId": "asthma",
      "conditionIds": [
        "asthma",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Relief of bronchospasm",
      "dosageGuideline": "Adult: 2-4 mg oral tablet 3-4 times daily; or 1-2 inhalations (100-200 mcg) every 4-6 hrs as needed.",
      "brandNames": "Asthalin, Ventorlin, ProAir",
      "safetyNote": "Controller therapy may also be required",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Asthalin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Asthalin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Asthalin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_asthma_budesonide_22",
      "activeIngredient": "Budesonide",
      "medicineClass": "Inhaled corticosteroid",
      "condition": "Asthma",
      "conditionId": "asthma",
      "conditionIds": [
        "asthma",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Long-term airway inflammation control",
      "dosageGuideline": "Adult: 200-400 mcg inhalation twice daily (Maintenance). Rinse mouth after inhalation.",
      "brandNames": "Budecort, Pulmicort, Foracort",
      "safetyNote": "Use depends on asthma severity",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Budecort",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Budecort",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Budecort/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_copd_tiotropium_23",
      "activeIngredient": "Tiotropium",
      "medicineClass": "Long-acting bronchodilator",
      "condition": "COPD",
      "conditionId": "copd",
      "conditionIds": [
        "copd",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Maintenance bronchodilation",
      "dosageGuideline": "Adult: Inhale 1 capsule (18 mcg) via HandiHaler once daily; or Respimat 2 puffs (5 mcg) once daily.",
      "brandNames": "Spiriva, Tiova, Tioair",
      "safetyNote": "Clinician-selected therapy",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Spiriva",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Spiriva",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Spiriva/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_allergic-rhinitis_cetirizine_24",
      "activeIngredient": "Cetirizine",
      "medicineClass": "Antihistamine",
      "condition": "Allergic rhinitis",
      "conditionId": "allergic-rhinitis",
      "conditionIds": [
        "allergic-rhinitis",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Allergy symptom relief",
      "dosageGuideline": "Adult: 10 mg once daily in the evening. Pediatric (6-12 yrs): 5 mg twice daily or 10 mg once daily.",
      "brandNames": "Cetzine, Alerid, Zyrtec, Okacet",
      "safetyNote": "May cause drowsiness in some people",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Cetzine",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Cetzine",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Cetzine/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_allergic-rhinitis_fluticasone_25",
      "activeIngredient": "Fluticasone",
      "medicineClass": "Intranasal corticosteroid",
      "condition": "Allergic rhinitis",
      "conditionId": "allergic-rhinitis",
      "conditionIds": [
        "allergic-rhinitis",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Nasal inflammation control",
      "dosageGuideline": "Adult: 1-2 sprays (50 mcg/spray) in each nostril once daily; Inhaled: 100-250 mcg twice daily.",
      "brandNames": "Flonase, Flovent, Flomist, Ezicas",
      "safetyNote": "Correct technique matters",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Flonase",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Flonase",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Flonase/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_acute-bronchitis_paracetamol_26",
      "activeIngredient": "Paracetamol (acetaminophen)",
      "medicineClass": "Supportive care",
      "condition": "Acute bronchitis",
      "conditionId": "acute-bronchitis",
      "conditionIds": [
        "acute-bronchitis",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Fever/pain relief",
      "dosageGuideline": "Adult: 500 mg - 650 mg every 4-6 hrs (Max: 4000 mg/day). Pediatric: 10-15 mg/kg/dose every 4-6 hrs.",
      "brandNames": "Dolo 650, Calpol, Crocin, Pacimol",
      "safetyNote": "Most acute cases are viral; antibiotics often aren't needed",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Dolo%20650",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Dolo%20650",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Dolo%20650/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_pulmonary-fibrosis_nintedanib_27",
      "activeIngredient": "Nintedanib",
      "medicineClass": "Antifibrotic",
      "condition": "Pulmonary fibrosis",
      "conditionId": "pulmonary-fibrosis",
      "conditionIds": [
        "pulmonary-fibrosis",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Slows progression in selected fibrotic lung diseases",
      "dosageGuideline": "Adult: 150 mg orally twice daily approximately 12 hours apart with food.",
      "brandNames": "Ofev, Nintena, Cyfib",
      "safetyNote": "Specialist monitoring required",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Ofev",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Ofev",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Ofev/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_sleep-apnea_cpap_28",
      "activeIngredient": "CPAP",
      "medicineClass": "Positive airway pressure",
      "condition": "Sleep apnea",
      "conditionId": "sleep-apnea",
      "conditionIds": [
        "sleep-apnea",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Keeps airway open during sleep",
      "dosageGuideline": "Adult: Continuous nocturnal nasal/full-face airway pressure titrated to 6-14 cmH2O.",
      "brandNames": "ResMed AirSense, Philips DreamStation",
      "safetyNote": "Device treatment rather than a medicine",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=ResMed%20AirSense",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/ResMed%20AirSense",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/ResMed%20AirSense/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hypertension_enalapril_29",
      "activeIngredient": "Enalapril",
      "medicineClass": "ACE inhibitor",
      "condition": "Hypertension",
      "conditionId": "hypertension",
      "conditionIds": [
        "hypertension",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Blood-pressure control",
      "dosageGuideline": "Adult: 2.5 mg to 5 mg once daily; titrate up to 10-20 mg twice daily (Max: 40 mg/day).",
      "brandNames": "Envas, Vasotec, Nuril",
      "safetyNote": "Clinician selection; pregnancy contraindication",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Envas",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Envas",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Envas/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hypertension_amlodipine_30",
      "activeIngredient": "Amlodipine",
      "medicineClass": "Calcium-channel blocker",
      "condition": "Hypertension",
      "conditionId": "hypertension",
      "conditionIds": [
        "hypertension",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Blood-pressure control",
      "dosageGuideline": "Adult: 5 mg once daily; may increase to maximum 10 mg once daily.",
      "brandNames": "Amlong, Norvasc, Stamlo, Amlopin",
      "safetyNote": "Dose/choice depends on patient factors",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Amlong",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Amlong",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Amlong/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hypertension_indapamide_31",
      "activeIngredient": "Indapamide",
      "medicineClass": "Thiazide-like diuretic",
      "condition": "Hypertension",
      "conditionId": "hypertension",
      "conditionIds": [
        "hypertension",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Blood-pressure control",
      "dosageGuideline": "Adult: 1.25 mg to 2.5 mg once daily in the morning with food.",
      "brandNames": "Natrilix, Lorvas",
      "safetyNote": "Electrolyte monitoring may be needed",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Natrilix",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Natrilix",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Natrilix/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_heart-failure_enalapril_32",
      "activeIngredient": "Enalapril",
      "medicineClass": "ACE inhibitor",
      "condition": "Heart failure",
      "conditionId": "heart-failure",
      "conditionIds": [
        "heart-failure",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Reduces symptoms/events in selected patients",
      "dosageGuideline": "Adult: 2.5 mg to 5 mg once daily; titrate up to 10-20 mg twice daily (Max: 40 mg/day).",
      "brandNames": "Envas, Vasotec, Nuril",
      "safetyNote": "Specialist-guided regimen",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Envas",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Envas",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Envas/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_heart-failure_bisoprolol_33",
      "activeIngredient": "Bisoprolol",
      "medicineClass": "Beta blocker",
      "condition": "Heart failure",
      "conditionId": "heart-failure",
      "conditionIds": [
        "heart-failure",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Selected stable heart-failure patients",
      "dosageGuideline": "Adult: 1.25 mg once daily initial; titrate every 2-4 weeks up to 10 mg once daily.",
      "brandNames": "Concor, Bisotab, Zabeta",
      "safetyNote": "Not for unsupervised initiation",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Concor",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Concor",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Concor/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_atrial-fibrillation_apixaban_34",
      "activeIngredient": "Apixaban",
      "medicineClass": "Anticoagulant",
      "condition": "Atrial fibrillation",
      "conditionId": "atrial-fibrillation",
      "conditionIds": [
        "atrial-fibrillation",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Prevention of stroke/systemic embolism in selected patients",
      "dosageGuideline": "Adult: 5 mg twice daily (or 2.5 mg twice daily if age >=80, weight <=60 kg, or creatinine >=1.5).",
      "brandNames": "Eliquis, Apigat",
      "safetyNote": "Bleeding risk and eligibility assessment required",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Eliquis",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Eliquis",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Eliquis/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_coronary-artery-disease_aspirin_35",
      "activeIngredient": "Aspirin",
      "medicineClass": "Antiplatelet",
      "condition": "Coronary artery disease",
      "conditionId": "coronary-artery-disease",
      "conditionIds": [
        "coronary-artery-disease",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Prevention of cardiovascular events in selected patients",
      "dosageGuideline": "Adult: 75 mg to 150 mg once daily after lunch/dinner for cardioprotection (Antiplatelet).",
      "brandNames": "Ecosprin, Disprin, Bayer Aspirin, Delisprin",
      "safetyNote": "Not appropriate for everyone",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Ecosprin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Ecosprin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Ecosprin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_high-ldl-cholesterol_atorvastatin_36",
      "activeIngredient": "Atorvastatin",
      "medicineClass": "Statin",
      "condition": "High LDL cholesterol",
      "conditionId": "high-ldl-cholesterol",
      "conditionIds": [
        "high-ldl-cholesterol",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Lowers LDL cholesterol",
      "dosageGuideline": "Adult: 10 mg to 20 mg once daily in the evening; titrate up to 80 mg daily for high-risk ASCVD.",
      "brandNames": "Atorva, Lipitor, Storvas, Aztor",
      "safetyNote": "Clinician-guided risk assessment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Atorva",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Atorva",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Atorva/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_angina_glyceryl-trinitrate_37",
      "activeIngredient": "Glyceryl trinitrate",
      "medicineClass": "Nitrate",
      "condition": "Angina",
      "conditionId": "angina",
      "conditionIds": [
        "angina",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Rapid relief of angina",
      "dosageGuideline": "Adult: 0.5 mg sublingual tablet under tongue at onset of angina; repeat every 5 mins up to 3 doses.",
      "brandNames": "Nitrocontin, Angispan, Sorbitrate",
      "safetyNote": "Emergency symptoms require urgent evaluation",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Nitrocontin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Nitrocontin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Nitrocontin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_deep-vein-thrombosis_apixaban_38",
      "activeIngredient": "Apixaban",
      "medicineClass": "Anticoagulant",
      "condition": "Deep-vein thrombosis",
      "conditionId": "deep-vein-thrombosis",
      "conditionIds": [
        "deep-vein-thrombosis",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Treatment/prevention of recurrent venous thrombosis",
      "dosageGuideline": "Adult: 5 mg twice daily (or 2.5 mg twice daily if age >=80, weight <=60 kg, or creatinine >=1.5).",
      "brandNames": "Eliquis, Apigat",
      "safetyNote": "Prescription and bleeding assessment required",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Eliquis",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Eliquis",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Eliquis/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_pulmonary-embolism_apixaban_39",
      "activeIngredient": "Apixaban",
      "medicineClass": "Anticoagulant",
      "condition": "Pulmonary embolism",
      "conditionId": "pulmonary-embolism",
      "conditionIds": [
        "pulmonary-embolism",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Anticoagulation in eligible patients",
      "dosageGuideline": "Adult: 5 mg twice daily (or 2.5 mg twice daily if age >=80, weight <=60 kg, or creatinine >=1.5).",
      "brandNames": "Eliquis, Apigat",
      "safetyNote": "Medical emergency; treatment must be clinician-guided",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Eliquis",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Eliquis",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Eliquis/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_type-1-diabetes_human-insulin-insulin-analogues_40",
      "activeIngredient": "Human insulin / insulin analogues",
      "medicineClass": "Insulin",
      "condition": "Type 1 diabetes",
      "conditionId": "type-1-diabetes",
      "conditionIds": [
        "type-1-diabetes",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Replaces insulin",
      "dosageGuideline": "Adult: Individualized basal-bolus regimen typically starting 0.4 to 0.5 units/kg/day total daily dose.",
      "brandNames": "Lantus, Mixtard, Humalog, Novorapid",
      "safetyNote": "Individualized medical management",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Lantus",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Lantus",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Lantus/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_type-2-diabetes_metformin_41",
      "activeIngredient": "Metformin",
      "medicineClass": "Biguanide",
      "condition": "Type 2 diabetes",
      "conditionId": "type-2-diabetes",
      "conditionIds": [
        "type-2-diabetes",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Blood-glucose lowering",
      "dosageGuideline": "Adult: 500 mg twice daily or 850 mg once daily with meals; titrate to 1000 mg twice daily (Max: 2550 mg/day).",
      "brandNames": "Glycomet, Glucophage, Obimet, Riomet",
      "safetyNote": "Kidney function and other factors matter",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Glycomet",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Glycomet",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Glycomet/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_type-2-diabetes_empagliflozin_42",
      "activeIngredient": "Empagliflozin",
      "medicineClass": "SGLT2 inhibitor",
      "condition": "Type 2 diabetes",
      "conditionId": "type-2-diabetes",
      "conditionIds": [
        "type-2-diabetes",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Glucose lowering and cardiovascular/kidney benefits in selected patients",
      "dosageGuideline": "Adult: 10 mg once daily in the morning with or without food; may increase to 25 mg once daily.",
      "brandNames": "Jardiance, Gibtulio",
      "safetyNote": "Prescription; contraindications/interactions matter",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Jardiance",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Jardiance",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Jardiance/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hypothyroidism_levothyroxine_43",
      "activeIngredient": "Levothyroxine",
      "medicineClass": "Thyroid hormone",
      "condition": "Hypothyroidism",
      "conditionId": "hypothyroidism",
      "conditionIds": [
        "hypothyroidism",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Thyroid hormone replacement",
      "dosageGuideline": "Adult: 25 mcg to 100 mcg once daily in the morning on an empty stomach at least 30-60 mins before breakfast.",
      "brandNames": "Thyronorm, Eltroxin, Synthroid",
      "safetyNote": "Dose individualized using thyroid tests",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Thyronorm",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Thyronorm",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Thyronorm/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hyperthyroidism_methimazole_44",
      "activeIngredient": "Methimazole",
      "medicineClass": "Antithyroid",
      "condition": "Hyperthyroidism",
      "conditionId": "hyperthyroidism",
      "conditionIds": [
        "hyperthyroidism",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Reduces thyroid hormone production",
      "dosageGuideline": "Adult: 15 mg to 30 mg daily in 1-3 divided doses; maintenance 5-15 mg once daily.",
      "brandNames": "Tapazole, Thyrozol, Strumazol",
      "safetyNote": "Blood-test monitoring; clinician-guided",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Tapazole",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Tapazole",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Tapazole/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_graves-disease_methimazole_45",
      "activeIngredient": "Methimazole",
      "medicineClass": "Antithyroid",
      "condition": "Graves disease",
      "conditionId": "graves-disease",
      "conditionIds": [
        "graves-disease",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Controls thyroid hormone production",
      "dosageGuideline": "Adult: 15 mg to 30 mg daily in 1-3 divided doses; maintenance 5-15 mg once daily.",
      "brandNames": "Tapazole, Thyrozol, Strumazol",
      "safetyNote": "Specialist guidance required",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Tapazole",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Tapazole",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Tapazole/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_adrenal-insufficiency_hydrocortisone_46",
      "activeIngredient": "Hydrocortisone",
      "medicineClass": "Glucocorticoid",
      "condition": "Adrenal insufficiency",
      "conditionId": "adrenal-insufficiency",
      "conditionIds": [
        "adrenal-insufficiency",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Hormone replacement",
      "dosageGuideline": "Adult: Oral: 15-25 mg daily divided 2/3 morning and 1/3 afternoon; IV: 100 mg stat for crisis.",
      "brandNames": "Cortef, Solu-Cortef, Locoid, Cort-Dome",
      "safetyNote": "Medical condition requiring an individualized plan",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Cortef",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Cortef",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Cortef/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_gout_allopurinol_47",
      "activeIngredient": "Allopurinol",
      "medicineClass": "Xanthine-oxidase inhibitor",
      "condition": "Gout",
      "conditionId": "gout",
      "conditionIds": [
        "gout",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Lowers uric acid to prevent flares",
      "dosageGuideline": "Adult: 100 mg once daily after meals; titrate weekly by 100 mg up to 300-800 mg/day.",
      "brandNames": "Zyloprim, Aloric, Zyloric, Purinol",
      "safetyNote": "Not a medicine for immediate pain relief; initiation needs guidance",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Zyloprim",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Zyloprim",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Zyloprim/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_osteoporosis_alendronic-acid_48",
      "activeIngredient": "Alendronic acid",
      "medicineClass": "Bisphosphonate",
      "condition": "Osteoporosis",
      "conditionId": "osteoporosis",
      "conditionIds": [
        "osteoporosis",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Reduces fracture risk",
      "dosageGuideline": "Adult: 70 mg once weekly taken with a full glass of plain water at least 30 mins before first food/drink.",
      "brandNames": "Fosamax, Osteofos, Alendros",
      "safetyNote": "Administration and contraindications matter",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Fosamax",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Fosamax",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Fosamax/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hypercholesterolemia_rosuvastatin_49",
      "activeIngredient": "Rosuvastatin",
      "medicineClass": "Statin",
      "condition": "Hypercholesterolemia",
      "conditionId": "hypercholesterolemia",
      "conditionIds": [
        "hypercholesterolemia",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Lowers LDL cholesterol",
      "dosageGuideline": "Adult: 5 mg to 10 mg once daily; titrate up to maximum 20-40 mg once daily.",
      "brandNames": "Rosuvas, Crestor, Rozavel, Roseday",
      "safetyNote": "Clinician-guided",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Rosuvas",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Rosuvas",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Rosuvas/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_gerd_omeprazole_50",
      "activeIngredient": "Omeprazole",
      "medicineClass": "Proton-pump inhibitor",
      "condition": "GERD",
      "conditionId": "gerd",
      "conditionIds": [
        "gerd",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Reduces gastric acid",
      "dosageGuideline": "Adult: 20 mg to 40 mg once daily 30-60 mins before breakfast.",
      "brandNames": "Omez, Prilosec, Ocid, Lokit",
      "safetyNote": "Persistent symptoms need evaluation",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Omez",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Omez",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Omez/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_peptic-ulcer-disease_omeprazole_51",
      "activeIngredient": "Omeprazole",
      "medicineClass": "Proton-pump inhibitor",
      "condition": "Peptic ulcer disease",
      "conditionId": "peptic-ulcer-disease",
      "conditionIds": [
        "peptic-ulcer-disease",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Acid suppression and ulcer healing",
      "dosageGuideline": "Adult: 20 mg to 40 mg once daily 30-60 mins before breakfast.",
      "brandNames": "Omez, Prilosec, Ocid, Lokit",
      "safetyNote": "H. pylori requires specific eradication therapy",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Omez",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Omez",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Omez/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_h-pylori-infection_amoxicillin-clarithromycin-omeprazole_52",
      "activeIngredient": "Amoxicillin + clarithromycin + omeprazole",
      "medicineClass": "Combination therapy",
      "condition": "H. pylori infection",
      "conditionId": "h-pylori-infection",
      "conditionIds": [
        "h-pylori-infection",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Example eradication components",
      "dosageGuideline": "Adult: 500 mg every 8 hrs or 875 mg every 12 hrs. Pediatric: 25-45 mg/kg/day divided every 8-12 hrs.",
      "brandNames": "Mox, Novamox, Amoxil, Augmentin",
      "safetyNote": "Regimen varies with resistance and local guidance",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Mox",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Mox",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Mox/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_nausea-vomiting_ondansetron_53",
      "activeIngredient": "Ondansetron",
      "medicineClass": "Antiemetic",
      "condition": "Nausea/vomiting",
      "conditionId": "nausea-vomiting",
      "conditionIds": [
        "nausea-vomiting",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Controls nausea/vomiting in selected situations",
      "dosageGuideline": "Adult: 4 mg to 8 mg orally every 8-12 hrs as needed (Max: 16 mg/day). Pediatric: 0.15 mg/kg/dose.",
      "brandNames": "Emeset, Zofran, Vomikind, Periset",
      "safetyNote": "Cause must be assessed",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Emeset",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Emeset",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Emeset/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_irritable-bowel-syndrome_mebeverine_54",
      "activeIngredient": "Mebeverine",
      "medicineClass": "Antispasmodic",
      "condition": "Irritable bowel syndrome",
      "conditionId": "irritable-bowel-syndrome",
      "conditionIds": [
        "irritable-bowel-syndrome",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "May relieve intestinal spasm",
      "dosageGuideline": "Adult: 135 mg tablet 3 times daily 20 mins before meals; or 200 mg SR twice daily.",
      "brandNames": "Colofac, Mebaspa, Morease",
      "safetyNote": "Treatment depends on symptom pattern",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Colofac",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Colofac",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Colofac/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_inflammatory-bowel-disease_mesalazine_55",
      "activeIngredient": "Mesalazine",
      "medicineClass": "Aminosalicylate",
      "condition": "Inflammatory bowel disease",
      "conditionId": "inflammatory-bowel-disease",
      "conditionIds": [
        "inflammatory-bowel-disease",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Controls inflammation in selected ulcerative-colitis cases",
      "dosageGuideline": "Adult: 2.4 g to 4.8 g daily in divided doses for active disease; 1.2-2.4 g daily for maintenance.",
      "brandNames": "Asacol, Pentasa, Mesacol, Lialda",
      "safetyNote": "Specialist-guided",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Asacol",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Asacol",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Asacol/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_crohn-disease_infliximab_56",
      "activeIngredient": "Infliximab",
      "medicineClass": "Biologic",
      "condition": "Crohn disease",
      "conditionId": "crohn-disease",
      "conditionIds": [
        "crohn-disease",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Controls inflammatory disease in selected patients",
      "dosageGuideline": "Adult: 5 mg/kg IV infusion at 0, 2, and 6 weeks, then maintenance 5 mg/kg every 8 weeks.",
      "brandNames": "Remicade, Inflectra, Remsima",
      "safetyNote": "Specialist treatment; infection screening/monitoring",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Remicade",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Remicade",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Remicade/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_ulcerative-colitis_mesalazine_57",
      "activeIngredient": "Mesalazine",
      "medicineClass": "Aminosalicylate",
      "condition": "Ulcerative colitis",
      "conditionId": "ulcerative-colitis",
      "conditionIds": [
        "ulcerative-colitis",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Induces/maintains remission in selected cases",
      "dosageGuideline": "Adult: 2.4 g to 4.8 g daily in divided doses for active disease; 1.2-2.4 g daily for maintenance.",
      "brandNames": "Asacol, Pentasa, Mesacol, Lialda",
      "safetyNote": "Specialist-guided",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Asacol",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Asacol",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Asacol/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_constipation_polyethylene-glycol_58",
      "activeIngredient": "Polyethylene glycol",
      "medicineClass": "Osmotic laxative",
      "condition": "Constipation",
      "conditionId": "constipation",
      "conditionIds": [
        "constipation",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Relieves constipation",
      "dosageGuideline": "Adult: 17 g (approx 1 capful) powder dissolved in 120-240 mL water/beverage once daily.",
      "brandNames": "MiraLAX, Peglec, Movicol, GlycoLax",
      "safetyNote": "Persistent/recurrent constipation needs assessment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=MiraLAX",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/MiraLAX",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/MiraLAX/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_diarrhea_loperamide_59",
      "activeIngredient": "Loperamide (Imodium 2mg)",
      "medicineClass": "Antidiarrheal",
      "condition": "Diarrhea (Loose Motions)",
      "conditionId": "diarrhea",
      "conditionIds": [
        "diarrhea",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Symptom relief in selected non-bloody diarrhea",
      "dosageGuideline": "Adult: 4 mg initially, then 2 mg after each loose stool (Max: 16 mg/day).",
      "brandNames": "Imodium, Lopamide, Eldoper, Roko, Lopram",
      "safetyNote": "Avoid in some infections/children without clinician advice",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Imodium",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Imodium",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Imodium/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hemorrhoids_hydrocortisone_60",
      "activeIngredient": "Hydrocortisone",
      "medicineClass": "Topical treatment",
      "condition": "Hemorrhoids",
      "conditionId": "hemorrhoids",
      "conditionIds": [
        "hemorrhoids",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Short-term symptom relief",
      "dosageGuideline": "Adult: Oral: 15-25 mg daily divided 2/3 morning and 1/3 afternoon; IV: 100 mg stat for crisis.",
      "brandNames": "Cortef, Solu-Cortef, Locoid, Cort-Dome",
      "safetyNote": "Persistent bleeding requires assessment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Cortef",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Cortef",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Cortef/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_pancreatitis_analgesics-iv-fluids_61",
      "activeIngredient": "Analgesics / IV fluids",
      "medicineClass": "Supportive care",
      "condition": "Pancreatitis",
      "conditionId": "pancreatitis",
      "conditionIds": [
        "pancreatitis",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Hospital supportive management",
      "dosageGuideline": "Adult: Aggressive IV hydration (200-500 mL/hr crystalloid) plus parenteral analgesia in acute care.",
      "brandNames": "Ringer Lactate, 0.9% Normal Saline, Tramadol",
      "safetyNote": "Not suitable for self-treatment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Ringer%20Lactate",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Ringer%20Lactate",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Ringer%20Lactate/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_chronic-hepatitis-c_glecaprevir-pibrentasvir_62",
      "activeIngredient": "Glecaprevir + pibrentasvir",
      "medicineClass": "Direct-acting antiviral",
      "condition": "Chronic hepatitis C",
      "conditionId": "chronic-hepatitis-c",
      "conditionIds": [
        "chronic-hepatitis-c",
        "liver"
      ],
      "category": "Liver",
      "categorySlug": "liver",
      "generalMedicalRole": "Curative antiviral regimen",
      "dosageGuideline": "Adult: 3 tablets (300 mg glecaprevir / 120 mg pibrentasvir total) once daily with food for 8-12 weeks.",
      "brandNames": "Mavyret, Maviret",
      "safetyNote": "Specialist-guided",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Mavyret",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Mavyret",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Mavyret/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_cirrhosis_spironolactone_63",
      "activeIngredient": "Spironolactone",
      "medicineClass": "Diuretic",
      "condition": "Cirrhosis",
      "conditionId": "cirrhosis",
      "conditionIds": [
        "cirrhosis",
        "liver"
      ],
      "category": "Liver",
      "categorySlug": "liver",
      "generalMedicalRole": "Controls fluid retention in selected patients",
      "dosageGuideline": "Adult: 25 mg to 50 mg once daily with meals (Max: 100 mg/day).",
      "brandNames": "Aldactone, Spiroctan",
      "safetyNote": "Electrolyte/kidney monitoring",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Aldactone",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Aldactone",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Aldactone/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hepatic-encephalopathy_lactulose_64",
      "activeIngredient": "Lactulose",
      "medicineClass": "Non-absorbable disaccharide",
      "condition": "Hepatic encephalopathy",
      "conditionId": "hepatic-encephalopathy",
      "conditionIds": [
        "hepatic-encephalopathy",
        "liver"
      ],
      "category": "Liver",
      "categorySlug": "liver",
      "generalMedicalRole": "Reduces ammonia absorption",
      "dosageGuideline": "Adult: Hepatic encephalopathy: 30-45 mL orally 3-4 times daily titrated to 2-3 soft stools/day.",
      "brandNames": "Duphalac, Kristalose, Enulose, Looz",
      "safetyNote": "Dose and cause require medical management",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Duphalac",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Duphalac",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Duphalac/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_urinary-tract-infection_nitrofurantoin_65",
      "activeIngredient": "Nitrofurantoin",
      "medicineClass": "Antibiotic",
      "condition": "Urinary tract infection",
      "conditionId": "urinary-tract-infection",
      "conditionIds": [
        "urinary-tract-infection",
        "kidney-urinary"
      ],
      "category": "Kidney/urinary",
      "categorySlug": "kidney-urinary",
      "generalMedicalRole": "Treatment of selected lower UTIs",
      "dosageGuideline": "Adult: 100 mg orally twice daily with meals for 5 days for uncomplicated cystitis.",
      "brandNames": "Macrodantin, Macrobid, Furadantin, Niftran",
      "safetyNote": "Choice depends on site, kidney function and susceptibility",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Macrodantin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Macrodantin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Macrodantin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_kidney-infection_ceftriaxone_66",
      "activeIngredient": "Ceftriaxone",
      "medicineClass": "Antibiotic",
      "condition": "Kidney infection",
      "conditionId": "kidney-infection",
      "conditionIds": [
        "kidney-infection",
        "kidney-urinary"
      ],
      "category": "Kidney/urinary",
      "categorySlug": "kidney-urinary",
      "generalMedicalRole": "Hospital/initial treatment in selected cases",
      "dosageGuideline": "Adult: 1 g to 2 g IV/IM once daily (Meningitis: 2 g every 12 hrs). Pediatric: 50-100 mg/kg/day.",
      "brandNames": "Rocephin, Monocef, C-Tri, Oframax",
      "safetyNote": "Needs medical assessment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Rocephin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Rocephin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Rocephin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_kidney-stones_tamsulosin_67",
      "activeIngredient": "Tamsulosin",
      "medicineClass": "Alpha blocker",
      "condition": "Kidney stones",
      "conditionId": "kidney-stones",
      "conditionIds": [
        "kidney-stones",
        "kidney-urinary"
      ],
      "category": "Kidney/urinary",
      "categorySlug": "kidney-urinary",
      "generalMedicalRole": "May aid passage of selected ureteric stones",
      "dosageGuideline": "Adult: 0.4 mg capsule once daily approximately 30 mins following the same meal each day.",
      "brandNames": "Flomax, Urimax, Contiflo, Dynapres",
      "safetyNote": "Not suitable for every stone/patient",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Flomax",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Flomax",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Flomax/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_chronic-kidney-disease_enalapril_68",
      "activeIngredient": "Enalapril",
      "medicineClass": "ACE inhibitor",
      "condition": "Chronic kidney disease",
      "conditionId": "chronic-kidney-disease",
      "conditionIds": [
        "chronic-kidney-disease",
        "kidney-urinary"
      ],
      "category": "Kidney/urinary",
      "categorySlug": "kidney-urinary",
      "generalMedicalRole": "Kidney/BP protection in selected patients",
      "dosageGuideline": "Adult: 2.5 mg to 5 mg once daily; titrate up to 10-20 mg twice daily (Max: 40 mg/day).",
      "brandNames": "Envas, Vasotec, Nuril",
      "safetyNote": "Kidney function and potassium monitoring",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Envas",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Envas",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Envas/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_overactive-bladder_oxybutynin_69",
      "activeIngredient": "Oxybutynin",
      "medicineClass": "Antimuscarinic",
      "condition": "Overactive bladder",
      "conditionId": "overactive-bladder",
      "conditionIds": [
        "overactive-bladder",
        "kidney-urinary"
      ],
      "category": "Kidney/urinary",
      "categorySlug": "kidney-urinary",
      "generalMedicalRole": "Reduces bladder overactivity",
      "dosageGuideline": "Adult: 5 mg orally 2-3 times daily (Max: 20 mg/day); or ER 5-10 mg once daily.",
      "brandNames": "Ditropan, Oxytrol, Cystran",
      "safetyNote": "Side effects and alternatives need assessment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Ditropan",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Ditropan",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Ditropan/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_migraine_sumatriptan_70",
      "activeIngredient": "Sumatriptan",
      "medicineClass": "Triptan",
      "condition": "Migraine",
      "conditionId": "migraine",
      "conditionIds": [
        "migraine",
        "neurological"
      ],
      "category": "Neurological",
      "categorySlug": "neurological",
      "generalMedicalRole": "Acute migraine treatment",
      "dosageGuideline": "Adult: 50 mg to 100 mg at onset of migraine headache; may repeat after 2 hrs if needed (Max: 200 mg/24 hrs).",
      "brandNames": "Suminat, Imitrex, Migstan",
      "safetyNote": "Not appropriate for some cardiovascular conditions",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Suminat",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Suminat",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Suminat/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_migraine_propranolol_71",
      "activeIngredient": "Propranolol",
      "medicineClass": "Preventive therapy",
      "condition": "Migraine",
      "conditionId": "migraine",
      "conditionIds": [
        "migraine",
        "neurological"
      ],
      "category": "Neurological",
      "categorySlug": "neurological",
      "generalMedicalRole": "Migraine prevention in selected patients",
      "dosageGuideline": "Adult: Migraine prophylaxis: 40 mg twice daily; titrate to 80-160 mg daily divided.",
      "brandNames": "Inderal, Ciplar, Betacap",
      "safetyNote": "Prescription; asthma and other factors matter",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Inderal",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Inderal",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Inderal/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_epilepsy_levetiracetam_72",
      "activeIngredient": "Levetiracetam",
      "medicineClass": "Antiseizure medicine",
      "condition": "Epilepsy",
      "conditionId": "epilepsy",
      "conditionIds": [
        "epilepsy",
        "neurological"
      ],
      "category": "Neurological",
      "categorySlug": "neurological",
      "generalMedicalRole": "Seizure control",
      "dosageGuideline": "Adult: 500 mg twice daily; titrate by 1000 mg/day every 2 weeks to maximum 3000 mg/day (1500 mg twice daily).",
      "brandNames": "Keppra, Levera, Torleva",
      "safetyNote": "Specialist-guided",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Keppra",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Keppra",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Keppra/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_epilepsy_valproic-acid_73",
      "activeIngredient": "Valproic acid",
      "medicineClass": "Antiseizure medicine",
      "condition": "Epilepsy",
      "conditionId": "epilepsy",
      "conditionIds": [
        "epilepsy",
        "neurological"
      ],
      "category": "Neurological",
      "categorySlug": "neurological",
      "generalMedicalRole": "Seizure control in selected cases",
      "dosageGuideline": "Adult: 10-15 mg/kg/day in 2-3 divided doses; titrate weekly by 5-10 mg/kg/day (Max: 60 mg/kg/day).",
      "brandNames": "Depakote, Epilim, Valparin, Encorate",
      "safetyNote": "Major pregnancy-related safety concerns; specialist-only decision",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Depakote",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Depakote",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Depakote/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_parkinson-disease_levodopa-carbidopa_74",
      "activeIngredient": "Levodopa + carbidopa",
      "medicineClass": "Dopaminergic therapy",
      "condition": "Parkinson disease",
      "conditionId": "parkinson-disease",
      "conditionIds": [
        "parkinson-disease",
        "neurological"
      ],
      "category": "Neurological",
      "categorySlug": "neurological",
      "generalMedicalRole": "Improves motor symptoms",
      "dosageGuideline": "Adult: Initial 100/25 mg 3 times daily with meals; titrate gradually up to 200/50 mg 3-4 times daily as needed.",
      "brandNames": "Syndopa, Sinemet, Tidomet",
      "safetyNote": "Specialist-guided",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Syndopa",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Syndopa",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Syndopa/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_alzheimer-disease_donepezil_75",
      "activeIngredient": "Donepezil",
      "medicineClass": "Cholinesterase inhibitor",
      "condition": "Alzheimer disease",
      "conditionId": "alzheimer-disease",
      "conditionIds": [
        "alzheimer-disease",
        "neurological"
      ],
      "category": "Neurological",
      "categorySlug": "neurological",
      "generalMedicalRole": "Symptomatic treatment in selected patients",
      "dosageGuideline": "Adult: 5 mg once daily at bedtime for 4-6 weeks; titrate to 10 mg daily.",
      "brandNames": "Aricept, Donep, Alzil",
      "safetyNote": "Does not cure disease",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Aricept",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Aricept",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Aricept/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_multiple-sclerosis_interferon-beta-1a_76",
      "activeIngredient": "Interferon beta-1a",
      "medicineClass": "Disease-modifying therapy",
      "condition": "Multiple sclerosis",
      "conditionId": "multiple-sclerosis",
      "conditionIds": [
        "multiple-sclerosis",
        "neurological"
      ],
      "category": "Neurological",
      "categorySlug": "neurological",
      "generalMedicalRole": "Reduces relapses in selected MS",
      "dosageGuideline": "Adult: Avonex: 30 mcg IM once weekly; Rebif: 22-44 mcg SC 3 times weekly.",
      "brandNames": "Avonex, Rebif, Betaferon",
      "safetyNote": "Specialist treatment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Avonex",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Avonex",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Avonex/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_neuropathic-pain_gabapentin_77",
      "activeIngredient": "Gabapentin",
      "medicineClass": "Antiseizure medicine",
      "condition": "Neuropathic pain",
      "conditionId": "neuropathic-pain",
      "conditionIds": [
        "neuropathic-pain",
        "neurological"
      ],
      "category": "Neurological",
      "categorySlug": "neurological",
      "generalMedicalRole": "Neuropathic pain treatment",
      "dosageGuideline": "Adult: 300 mg day 1, 300 mg twice daily day 2, 300 mg 3 times daily day 3; titrate to 900-1800 mg/day.",
      "brandNames": "Neurontin, Gabapin, Pentanerv, Gaba",
      "safetyNote": "Prescription; sedation and misuse risks",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Neurontin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Neurontin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Neurontin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_trigeminal-neuralgia_carbamazepine_78",
      "activeIngredient": "Carbamazepine",
      "medicineClass": "Antiseizure medicine",
      "condition": "Trigeminal neuralgia",
      "conditionId": "trigeminal-neuralgia",
      "conditionIds": [
        "trigeminal-neuralgia",
        "neurological"
      ],
      "category": "Neurological",
      "categorySlug": "neurological",
      "generalMedicalRole": "First-line treatment in many cases",
      "dosageGuideline": "Adult: Initial 100-200 mg 1-2 times daily; titrate to maintenance 400-1200 mg daily in divided doses.",
      "brandNames": "Tegretol, Mazetol, Carbatrol",
      "safetyNote": "Drug interactions and blood monitoring matter",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Tegretol",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Tegretol",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Tegretol/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_depressive-disorder_sertraline_79",
      "activeIngredient": "Sertraline",
      "medicineClass": "SSRI antidepressant",
      "condition": "Depressive disorder",
      "conditionId": "depressive-disorder",
      "conditionIds": [
        "depressive-disorder",
        "mental-health"
      ],
      "category": "Mental health",
      "categorySlug": "mental-health",
      "generalMedicalRole": "Treatment of depressive/anxiety disorders",
      "dosageGuideline": "Adult: 50 mg once daily in the morning or evening; titrate in 50 mg increments up to 200 mg once daily.",
      "brandNames": "Daxid, Zoloft, Serlift, Serta",
      "safetyNote": "Prescription; individualized monitoring",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Daxid",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Daxid",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Daxid/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_anxiety-disorder_escitalopram_80",
      "activeIngredient": "Escitalopram",
      "medicineClass": "SSRI antidepressant",
      "condition": "Anxiety disorder",
      "conditionId": "anxiety-disorder",
      "conditionIds": [
        "anxiety-disorder",
        "mental-health"
      ],
      "category": "Mental health",
      "categorySlug": "mental-health",
      "generalMedicalRole": "Treatment of selected anxiety disorders",
      "dosageGuideline": "Adult: 10 mg once daily in the morning or evening; titrate to maximum 20 mg daily.",
      "brandNames": "Nexito, Lexapro, Stalopam, Cilentra",
      "safetyNote": "Prescription; individualized monitoring",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Nexito",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Nexito",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Nexito/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_obsessive-compulsive-disorder_fluoxetine_81",
      "activeIngredient": "Fluoxetine",
      "medicineClass": "SSRI antidepressant",
      "condition": "Obsessive-compulsive disorder",
      "conditionId": "obsessive-compulsive-disorder",
      "conditionIds": [
        "obsessive-compulsive-disorder",
        "mental-health"
      ],
      "category": "Mental health",
      "categorySlug": "mental-health",
      "generalMedicalRole": "Treatment of OCD in selected patients",
      "dosageGuideline": "Adult: 20 mg once daily in the morning; titrate up to 60-80 mg daily for OCD.",
      "brandNames": "Prozac, Flunil, Prodep",
      "safetyNote": "Prescription and monitoring",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Prozac",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Prozac",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Prozac/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_panic-disorder_sertraline_82",
      "activeIngredient": "Sertraline",
      "medicineClass": "SSRI antidepressant",
      "condition": "Panic disorder",
      "conditionId": "panic-disorder",
      "conditionIds": [
        "panic-disorder",
        "mental-health"
      ],
      "category": "Mental health",
      "categorySlug": "mental-health",
      "generalMedicalRole": "Long-term treatment in selected cases",
      "dosageGuideline": "Adult: 50 mg once daily in the morning or evening; titrate in 50 mg increments up to 200 mg once daily.",
      "brandNames": "Daxid, Zoloft, Serlift, Serta",
      "safetyNote": "Prescription and monitoring",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Daxid",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Daxid",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Daxid/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_adhd_methylphenidate_83",
      "activeIngredient": "Methylphenidate",
      "medicineClass": "Stimulant",
      "condition": "ADHD",
      "conditionId": "adhd",
      "conditionIds": [
        "adhd",
        "mental-health"
      ],
      "category": "Mental health",
      "categorySlug": "mental-health",
      "generalMedicalRole": "ADHD treatment in selected patients",
      "dosageGuideline": "Adult: 10-20 mg daily in divided doses before breakfast and lunch; titrate up to 60 mg/day.",
      "brandNames": "Ritalin, Concerta, Inspiral, Addwize",
      "safetyNote": "Controlled/prescription medicine; specialist assessment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Ritalin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Ritalin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Ritalin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_acne_adapalene_84",
      "activeIngredient": "Adapalene",
      "medicineClass": "Topical retinoid",
      "condition": "Acne",
      "conditionId": "acne",
      "conditionIds": [
        "acne",
        "skin"
      ],
      "category": "Skin",
      "categorySlug": "skin",
      "generalMedicalRole": "Treats comedonal/inflammatory acne",
      "dosageGuideline": "Adult: Apply a thin film to affected skin areas once daily at bedtime after gentle washing.",
      "brandNames": "Differin, Adaferin, Deriva, Klenzit",
      "safetyNote": "Skin irritation; pregnancy considerations",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Differin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Differin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Differin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_acne_benzoyl-peroxide_85",
      "activeIngredient": "Benzoyl peroxide",
      "medicineClass": "Topical antimicrobial",
      "condition": "Acne",
      "conditionId": "acne",
      "conditionIds": [
        "acne",
        "skin"
      ],
      "category": "Skin",
      "categorySlug": "skin",
      "generalMedicalRole": "Reduces acne bacteria/inflammation",
      "dosageGuideline": "Adult: Apply a thin layer of 2.5% to 5% gel once to twice daily to clean, dry acne-prone areas.",
      "brandNames": "Benzac AC, PanOxyl, Brevoxyl, Galderma 5%",
      "safetyNote": "May irritate skin",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Benzac%20AC",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Benzac%20AC",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Benzac%20AC/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_eczema_hydrocortisone_86",
      "activeIngredient": "Hydrocortisone",
      "medicineClass": "Topical corticosteroid",
      "condition": "Eczema",
      "conditionId": "eczema",
      "conditionIds": [
        "eczema",
        "skin"
      ],
      "category": "Skin",
      "categorySlug": "skin",
      "generalMedicalRole": "Reduces inflammation",
      "dosageGuideline": "Adult: Oral: 15-25 mg daily divided 2/3 morning and 1/3 afternoon; IV: 100 mg stat for crisis.",
      "brandNames": "Cortef, Solu-Cortef, Locoid, Cort-Dome",
      "safetyNote": "Strength/site/duration should be clinician-guided when significant",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Cortef",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Cortef",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Cortef/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_psoriasis_betamethasone_87",
      "activeIngredient": "Betamethasone",
      "medicineClass": "Topical corticosteroid",
      "condition": "Psoriasis",
      "conditionId": "psoriasis",
      "conditionIds": [
        "psoriasis",
        "skin"
      ],
      "category": "Skin",
      "categorySlug": "skin",
      "generalMedicalRole": "Reduces inflammation in selected lesions",
      "dosageGuideline": "Adult: Apply a small amount of 0.05% or 0.1% cream/ointment once to twice daily (Max: 2-3 weeks).",
      "brandNames": "Betnovate, Celestone, Diprosone",
      "safetyNote": "Potency and duration matter",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Betnovate",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Betnovate",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Betnovate/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_fungal-skin-infection_clotrimazole_88",
      "activeIngredient": "Clotrimazole",
      "medicineClass": "Antifungal",
      "condition": "Fungal skin infection",
      "conditionId": "fungal-skin-infection",
      "conditionIds": [
        "fungal-skin-infection",
        "skin"
      ],
      "category": "Skin",
      "categorySlug": "skin",
      "generalMedicalRole": "Treats susceptible superficial fungal infections",
      "dosageGuideline": "Adult: Apply 1% topical cream to affected skin twice daily for 2-4 weeks.",
      "brandNames": "Candid, Canesten, Clocip",
      "safetyNote": "Diagnosis matters because rashes can look similar",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Candid",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Candid",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Candid/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_bacterial-skin-infection_mupirocin_89",
      "activeIngredient": "Mupirocin",
      "medicineClass": "Antibiotic",
      "condition": "Bacterial skin infection",
      "conditionId": "bacterial-skin-infection",
      "conditionIds": [
        "bacterial-skin-infection",
        "skin"
      ],
      "category": "Skin",
      "categorySlug": "skin",
      "generalMedicalRole": "Topical treatment of selected bacterial infections",
      "dosageGuideline": "Adult: Apply small amount of 2% ointment to affected area 3 times daily for 5-10 days.",
      "brandNames": "Bactroban, T-Bact, Mupiroc, Supirocin",
      "safetyNote": "Antibiotic stewardship; not for every rash",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Bactroban",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Bactroban",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Bactroban/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_urticaria_cetirizine_90",
      "activeIngredient": "Cetirizine",
      "medicineClass": "Antihistamine",
      "condition": "Urticaria",
      "conditionId": "urticaria",
      "conditionIds": [
        "urticaria",
        "skin"
      ],
      "category": "Skin",
      "categorySlug": "skin",
      "generalMedicalRole": "Relieves itching/hives",
      "dosageGuideline": "Adult: 10 mg once daily in the evening. Pediatric (6-12 yrs): 5 mg twice daily or 10 mg once daily.",
      "brandNames": "Cetzine, Alerid, Zyrtec, Okacet",
      "safetyNote": "Emergency care if breathing/swelling symptoms occur",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Cetzine",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Cetzine",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Cetzine/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_vitiligo_tacrolimus_91",
      "activeIngredient": "Tacrolimus",
      "medicineClass": "Topical calcineurin inhibitor",
      "condition": "Vitiligo",
      "conditionId": "vitiligo",
      "conditionIds": [
        "vitiligo",
        "skin"
      ],
      "category": "Skin",
      "categorySlug": "skin",
      "generalMedicalRole": "May help repigmentation in selected areas",
      "dosageGuideline": "Adult: Apply thin layer of 0.1% ointment to affected vitiligo/eczema skin twice daily.",
      "brandNames": "Protopic, Tacroz, Tacrolin",
      "safetyNote": "Specialist/dermatology guidance",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Protopic",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Protopic",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Protopic/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_osteoarthritis_paracetamol_92",
      "activeIngredient": "Paracetamol (acetaminophen)",
      "medicineClass": "Analgesic",
      "condition": "Osteoarthritis",
      "conditionId": "osteoarthritis",
      "conditionIds": [
        "osteoarthritis",
        "musculoskeletal"
      ],
      "category": "Musculoskeletal",
      "categorySlug": "musculoskeletal",
      "generalMedicalRole": "Pain relief",
      "dosageGuideline": "Adult: 500 mg - 650 mg every 4-6 hrs (Max: 4000 mg/day). Pediatric: 10-15 mg/kg/dose every 4-6 hrs.",
      "brandNames": "Dolo 650, Calpol, Crocin, Pacimol",
      "safetyNote": "Effectiveness varies; dose limits matter",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Dolo%20650",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Dolo%20650",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Dolo%20650/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_rheumatoid-arthritis_methotrexate_93",
      "activeIngredient": "Methotrexate",
      "medicineClass": "DMARD",
      "condition": "Rheumatoid arthritis",
      "conditionId": "rheumatoid-arthritis",
      "conditionIds": [
        "rheumatoid-arthritis",
        "musculoskeletal"
      ],
      "category": "Musculoskeletal",
      "categorySlug": "musculoskeletal",
      "generalMedicalRole": "Disease-modifying treatment",
      "dosageGuideline": "Adult: RA/Psoriasis: 7.5 mg to 20 mg once weekly (single day, not daily) with daily folic acid.",
      "brandNames": "Trexall, Folitrax, Rheumatrex, Imutrex",
      "safetyNote": "Specialist monitoring; not for self-treatment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Trexall",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Trexall",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Trexall/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_osteoporosis_alendronic-acid_94",
      "activeIngredient": "Alendronic acid",
      "medicineClass": "Bisphosphonate",
      "condition": "Osteoporosis",
      "conditionId": "osteoporosis",
      "conditionIds": [
        "osteoporosis",
        "musculoskeletal"
      ],
      "category": "Musculoskeletal",
      "categorySlug": "musculoskeletal",
      "generalMedicalRole": "Reduces fracture risk",
      "dosageGuideline": "Adult: 70 mg once weekly taken with a full glass of plain water at least 30 mins before first food/drink.",
      "brandNames": "Fosamax, Osteofos, Alendros",
      "safetyNote": "Medical assessment and administration requirements",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Fosamax",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Fosamax",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Fosamax/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_ankylosing-spondylitis_naproxen_95",
      "activeIngredient": "Naproxen",
      "medicineClass": "NSAID",
      "condition": "Ankylosing spondylitis",
      "conditionId": "ankylosing-spondylitis",
      "conditionIds": [
        "ankylosing-spondylitis",
        "musculoskeletal"
      ],
      "category": "Musculoskeletal",
      "categorySlug": "musculoskeletal",
      "generalMedicalRole": "Pain/inflammation control",
      "dosageGuideline": "Adult: 500 mg initially, then 250 mg every 6-8 hrs with meals as needed (Max: 1250 mg/day).",
      "brandNames": "Naprosyn, Xenobid, Aleve",
      "safetyNote": "GI/kidney/cardiovascular risks",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Naprosyn",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Naprosyn",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Naprosyn/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_gout-flare_naproxen_96",
      "activeIngredient": "Naproxen",
      "medicineClass": "NSAID",
      "condition": "Gout flare",
      "conditionId": "gout-flare",
      "conditionIds": [
        "gout-flare",
        "musculoskeletal"
      ],
      "category": "Musculoskeletal",
      "categorySlug": "musculoskeletal",
      "generalMedicalRole": "Acute inflammation/pain relief",
      "dosageGuideline": "Adult: 500 mg initially, then 250 mg every 6-8 hrs with meals as needed (Max: 1250 mg/day).",
      "brandNames": "Naprosyn, Xenobid, Aleve",
      "safetyNote": "Not appropriate for some kidney/GI/cardiovascular conditions",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Naprosyn",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Naprosyn",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Naprosyn/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_fibromyalgia_duloxetine_97",
      "activeIngredient": "Duloxetine",
      "medicineClass": "SNRI",
      "condition": "Fibromyalgia",
      "conditionId": "fibromyalgia",
      "conditionIds": [
        "fibromyalgia",
        "musculoskeletal"
      ],
      "category": "Musculoskeletal",
      "categorySlug": "musculoskeletal",
      "generalMedicalRole": "May reduce pain in selected patients",
      "dosageGuideline": "Adult: 30 mg to 60 mg once daily with or without food (Max: 60 mg/day for fibromyalgia).",
      "brandNames": "Cymbalta, Duzela, Delok",
      "safetyNote": "Prescription and monitoring",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Cymbalta",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Cymbalta",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Cymbalta/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_glaucoma_latanoprost_98",
      "activeIngredient": "Latanoprost",
      "medicineClass": "Prostaglandin analogue",
      "condition": "Glaucoma",
      "conditionId": "glaucoma",
      "conditionIds": [
        "glaucoma",
        "eye"
      ],
      "category": "Eye",
      "categorySlug": "eye",
      "generalMedicalRole": "Lowers intraocular pressure",
      "dosageGuideline": "Adult: Instill one drop into affected eye(s) once daily in the evening.",
      "brandNames": "Xalatan, Latoprost, 9PM Drops, Lacoma",
      "safetyNote": "Ophthalmology-guided",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Xalatan",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Xalatan",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Xalatan/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_conjunctivitis_artificial-tears_99",
      "activeIngredient": "Artificial tears",
      "medicineClass": "Lubricant",
      "condition": "Conjunctivitis",
      "conditionId": "conjunctivitis",
      "conditionIds": [
        "conjunctivitis",
        "eye"
      ],
      "category": "Eye",
      "categorySlug": "eye",
      "generalMedicalRole": "Symptom relief",
      "dosageGuideline": "Adult: Instill 1 to 2 drops in affected eye(s) 3-4 times daily or as needed for ocular dryness.",
      "brandNames": "Refresh Tears, Systane Ultra, Tears Naturale",
      "safetyNote": "Bacterial/viral/allergic causes differ",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Refresh%20Tears",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Refresh%20Tears",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Refresh%20Tears/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_allergic-conjunctivitis_olopatadine_100",
      "activeIngredient": "Olopatadine",
      "medicineClass": "Antihistamine/mast-cell stabilizer",
      "condition": "Allergic conjunctivitis",
      "conditionId": "allergic-conjunctivitis",
      "conditionIds": [
        "allergic-conjunctivitis",
        "eye"
      ],
      "category": "Eye",
      "categorySlug": "eye",
      "generalMedicalRole": "Allergy symptom relief",
      "dosageGuideline": "Adult: Instill 1 drop of 0.1% twice daily or 0.2% once daily into affected eye(s).",
      "brandNames": "Patanol, Pataday, Opat, Winolap",
      "safetyNote": "Eye examination if severe/persistent",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Patanol",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Patanol",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Patanol/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_dry-eye-disease_carboxymethylcellulose_101",
      "activeIngredient": "Carboxymethylcellulose",
      "medicineClass": "Lubricant",
      "condition": "Dry eye disease",
      "conditionId": "dry-eye-disease",
      "conditionIds": [
        "dry-eye-disease",
        "eye"
      ],
      "category": "Eye",
      "categorySlug": "eye",
      "generalMedicalRole": "Lubrication",
      "dosageGuideline": "Adult: Instill 1 to 2 drops into affected eye(s) 3 to 4 times daily as needed.",
      "brandNames": "Refresh Liquigel, Cellufresh, Carmellose",
      "safetyNote": "Persistent/severe symptoms need eye assessment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Refresh%20Liquigel",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Refresh%20Liquigel",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Refresh%20Liquigel/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_otitis-externa_ciprofloxacin-dexamethasone_102",
      "activeIngredient": "Ciprofloxacin + dexamethasone",
      "medicineClass": "Antibiotic/steroid ear drops",
      "condition": "Otitis externa",
      "conditionId": "otitis-externa",
      "conditionIds": [
        "otitis-externa",
        "ear"
      ],
      "category": "Ear",
      "categorySlug": "ear",
      "generalMedicalRole": "Treats selected bacterial outer-ear infections",
      "dosageGuideline": "Adult: 500 mg to 750 mg every 12 hrs with plenty of fluids (Max: 1500 mg/day).",
      "brandNames": "Ciplox, Cifran, Cipro, Zoxan",
      "safetyNote": "Ear examination needed before treatment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Ciplox",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Ciplox",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Ciplox/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_otitis-media_paracetamol-amoxicillin_103",
      "activeIngredient": "Paracetamol / amoxicillin",
      "medicineClass": "Analgesic / selected antibiotic",
      "condition": "Otitis media",
      "conditionId": "otitis-media",
      "conditionIds": [
        "otitis-media",
        "ear"
      ],
      "category": "Ear",
      "categorySlug": "ear",
      "generalMedicalRole": "Pain relief; antibiotic in selected cases",
      "dosageGuideline": "Adult: 500 mg - 650 mg every 4-6 hrs (Max: 4000 mg/day). Pediatric: 10-15 mg/kg/dose every 4-6 hrs.",
      "brandNames": "Dolo 650, Calpol, Crocin, Pacimol",
      "safetyNote": "Many cases can resolve without antibiotics",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Dolo%20650",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Dolo%20650",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Dolo%20650/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_endometriosis_levonorgestrel_104",
      "activeIngredient": "Levonorgestrel",
      "medicineClass": "Hormonal therapy",
      "condition": "Endometriosis",
      "conditionId": "endometriosis",
      "conditionIds": [
        "endometriosis",
        "reproductive"
      ],
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "generalMedicalRole": "Reduces symptoms in selected patients",
      "dosageGuideline": "Adult: Emergency contraception: 1.5 mg single oral dose within 72 hrs; IUD: 52 mg releasing device.",
      "brandNames": "Mirena, Plan B, Postinor, Unwanted 72",
      "safetyNote": "Gynecologic assessment required",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Mirena",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Mirena",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Mirena/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_pcos_metformin_105",
      "activeIngredient": "Metformin",
      "medicineClass": "Insulin-sensitizing medicine",
      "condition": "PCOS",
      "conditionId": "pcos",
      "conditionIds": [
        "pcos",
        "reproductive"
      ],
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "generalMedicalRole": "Metabolic management in selected PCOS patients",
      "dosageGuideline": "Adult: 500 mg twice daily or 850 mg once daily with meals; titrate to 1000 mg twice daily (Max: 2550 mg/day).",
      "brandNames": "Glycomet, Glucophage, Obimet, Riomet",
      "safetyNote": "Treatment goals vary",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Glycomet",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Glycomet",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Glycomet/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_benign-prostatic-hyperplasia_tamsulosin_106",
      "activeIngredient": "Tamsulosin",
      "medicineClass": "Alpha-1 blocker",
      "condition": "Benign prostatic hyperplasia",
      "conditionId": "benign-prostatic-hyperplasia",
      "conditionIds": [
        "benign-prostatic-hyperplasia",
        "reproductive"
      ],
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "generalMedicalRole": "Improves urinary symptoms",
      "dosageGuideline": "Adult: 0.4 mg capsule once daily approximately 30 mins following the same meal each day.",
      "brandNames": "Flomax, Urimax, Contiflo, Dynapres",
      "safetyNote": "Medical assessment needed",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Flomax",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Flomax",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Flomax/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_erectile-dysfunction_sildenafil_107",
      "activeIngredient": "Sildenafil",
      "medicineClass": "PDE-5 inhibitor",
      "condition": "Erectile dysfunction",
      "conditionId": "erectile-dysfunction",
      "conditionIds": [
        "erectile-dysfunction",
        "reproductive"
      ],
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "generalMedicalRole": "Improves erectile function in eligible patients",
      "dosageGuideline": "Adult: ED: 50 mg orally approx 1 hour before sexual activity (Max: 100 mg once daily; PAH: 20 mg 3 times daily).",
      "brandNames": "Viagra, Revatio, Silagra, Manforce",
      "safetyNote": "Prescription; dangerous with nitrates",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Viagra",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Viagra",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Viagra/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_pelvic-inflammatory-disease_ceftriaxone-doxycycline-metronidazole_108",
      "activeIngredient": "Ceftriaxone + doxycycline + metronidazole",
      "medicineClass": "Antibiotic combination",
      "condition": "Pelvic inflammatory disease",
      "conditionId": "pelvic-inflammatory-disease",
      "conditionIds": [
        "pelvic-inflammatory-disease",
        "reproductive"
      ],
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "generalMedicalRole": "Treatment of selected PID",
      "dosageGuideline": "Adult: 100 mg twice daily on day 1, then 100 mg once or twice daily with full glass of water.",
      "brandNames": "Doxicip, Doxy-1, Microdox, Vibramycin",
      "safetyNote": "Medical assessment and partner management required",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Doxicip",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Doxicip",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Doxicip/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_iron-deficiency-anemia_ferrous-sulfate_109",
      "activeIngredient": "Ferrous sulfate",
      "medicineClass": "Iron replacement",
      "condition": "Iron-deficiency anemia",
      "conditionId": "iron-deficiency-anemia",
      "conditionIds": [
        "iron-deficiency-anemia",
        "hematology"
      ],
      "category": "Hematology",
      "categorySlug": "hematology",
      "generalMedicalRole": "Replaces iron",
      "dosageGuideline": "Adult: 200 mg (providing 65 mg elemental iron) orally 1-3 times daily on an empty stomach.",
      "brandNames": "FeroSul, Autrin, Feosol, Fer-In-Sol",
      "safetyNote": "Cause of anemia should be investigated",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=FeroSul",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/FeroSul",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/FeroSul/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_vitamin-b12-deficiency_cyanocobalamin_110",
      "activeIngredient": "Cyanocobalamin",
      "medicineClass": "Vitamin replacement",
      "condition": "Vitamin B12 deficiency",
      "conditionId": "vitamin-b12-deficiency",
      "conditionIds": [
        "vitamin-b12-deficiency",
        "hematology"
      ],
      "category": "Hematology",
      "categorySlug": "hematology",
      "generalMedicalRole": "B12 replacement",
      "dosageGuideline": "Adult: 1000 mcg IM/deep SC daily for 1 week, then weekly for 4 weeks, then monthly maintenance.",
      "brandNames": "Neurobion, Macraberin, Cobolin, Dodex",
      "safetyNote": "Route/cause determine treatment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Neurobion",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Neurobion",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Neurobion/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_folate-deficiency_folic-acid_111",
      "activeIngredient": "Folic acid",
      "medicineClass": "Vitamin replacement",
      "condition": "Folate deficiency",
      "conditionId": "folate-deficiency",
      "conditionIds": [
        "folate-deficiency",
        "hematology"
      ],
      "category": "Hematology",
      "categorySlug": "hematology",
      "generalMedicalRole": "Folate replacement",
      "dosageGuideline": "Adult: 1 mg to 5 mg orally once daily for folate deficiency megaloblastic anemia.",
      "brandNames": "Folvite, Folichem, Fol-5",
      "safetyNote": "B12 deficiency should be considered before treatment alone",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Folvite",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Folvite",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Folvite/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hemophilia-a_factor-viii_112",
      "activeIngredient": "Factor VIII",
      "medicineClass": "Clotting factor",
      "condition": "Hemophilia A",
      "conditionId": "hemophilia-a",
      "conditionIds": [
        "hemophilia-a",
        "hematology"
      ],
      "category": "Hematology",
      "categorySlug": "hematology",
      "generalMedicalRole": "Replaces missing clotting factor",
      "dosageGuideline": "Adult/Pediatric: 20-50 IU/kg IV bolus; dose titrated based on severity of bleeding episode.",
      "brandNames": "Advate, Kogenate, Hemofil M, Recombinate",
      "safetyNote": "Specialist treatment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Advate",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Advate",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Advate/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_sickle-cell-disease_hydroxyurea_113",
      "activeIngredient": "Hydroxyurea",
      "medicineClass": "Disease-modifying therapy",
      "condition": "Sickle-cell disease",
      "conditionId": "sickle-cell-disease",
      "conditionIds": [
        "sickle-cell-disease",
        "hematology"
      ],
      "category": "Hematology",
      "categorySlug": "hematology",
      "generalMedicalRole": "Reduces complications in selected patients",
      "dosageGuideline": "Adult: 15 mg/kg once daily as single oral dose; titrate by 5 mg/kg/day every 12 weeks to max 35 mg/kg/day.",
      "brandNames": "Hydrea, Droxia, Cytodrox",
      "safetyNote": "Specialist monitoring",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Hydrea",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Hydrea",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Hydrea/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_thalassemia_deferasirox_114",
      "activeIngredient": "Deferasirox",
      "medicineClass": "Iron chelation",
      "condition": "Thalassemia",
      "conditionId": "thalassemia",
      "conditionIds": [
        "thalassemia",
        "hematology"
      ],
      "category": "Hematology",
      "categorySlug": "hematology",
      "generalMedicalRole": "Reduces transfusional iron overload",
      "dosageGuideline": "Adult: Initial 14 mg/kg once daily orally (film-coated tablet) or 20 mg/kg dispersible tablet.",
      "brandNames": "Exjade, Jadenu, Asunra, Desirox",
      "safetyNote": "Specialist monitoring",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Exjade",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Exjade",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Exjade/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_breast-cancer_tamoxifen_115",
      "activeIngredient": "Tamoxifen",
      "medicineClass": "Endocrine therapy",
      "condition": "Breast cancer",
      "conditionId": "breast-cancer",
      "conditionIds": [
        "breast-cancer",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "Hormone-receptor-positive disease in selected patients",
      "dosageGuideline": "Adult: 20 mg orally once daily (or 10 mg twice daily) for 5 to 10 years.",
      "brandNames": "Nolvadex, Soltamox, Tamodex, Cytotam",
      "safetyNote": "Oncology-directed",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Nolvadex",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Nolvadex",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Nolvadex/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_prostate-cancer_leuprolide_116",
      "activeIngredient": "Leuprolide",
      "medicineClass": "Androgen-deprivation therapy",
      "condition": "Prostate cancer",
      "conditionId": "prostate-cancer",
      "conditionIds": [
        "prostate-cancer",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "Hormone-sensitive disease in selected patients",
      "dosageGuideline": "Adult: 7.5 mg IM once monthly or 22.5 mg depot IM every 3 months for prostate cancer.",
      "brandNames": "Lupron Depot, Eligard, Lupride",
      "safetyNote": "Oncology-directed",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Lupron%20Depot",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Lupron%20Depot",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Lupron%20Depot/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_leukemia_imatinib_117",
      "activeIngredient": "Imatinib",
      "medicineClass": "Targeted therapy",
      "condition": "Leukemia",
      "conditionId": "leukemia",
      "conditionIds": [
        "leukemia",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "BCR-ABL-positive leukemia",
      "dosageGuideline": "Adult: 400 mg to 600 mg once daily with a meal and large glass of water.",
      "brandNames": "Gleevec, Glivec, Imanib, Celonib",
      "safetyNote": "Oncology-directed",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Gleevec",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Gleevec",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Gleevec/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_multiple-myeloma_bortezomib_118",
      "activeIngredient": "Bortezomib",
      "medicineClass": "Proteasome inhibitor",
      "condition": "Multiple myeloma",
      "conditionId": "multiple-myeloma",
      "conditionIds": [
        "multiple-myeloma",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "Cancer treatment in combination regimens",
      "dosageGuideline": "Adult: 1.3 mg/m2 SC or IV bolus on days 1, 4, 8, and 11 of a 21-day treatment cycle.",
      "brandNames": "Velcade, Bortecad, Bortenat",
      "safetyNote": "Oncology-directed",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Velcade",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Velcade",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Velcade/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_lung-cancer_osimertinib_119",
      "activeIngredient": "Osimertinib",
      "medicineClass": "Targeted therapy",
      "condition": "Lung cancer",
      "conditionId": "lung-cancer",
      "conditionIds": [
        "lung-cancer",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "EGFR-mutated NSCLC in selected patients",
      "dosageGuideline": "Adult: 80 mg orally once daily with or without food until disease progression.",
      "brandNames": "Tagrisso, Osicent, Osimert",
      "safetyNote": "Requires molecular testing and oncology care",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Tagrisso",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Tagrisso",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Tagrisso/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_cervical-cancer_cisplatin_120",
      "activeIngredient": "Cisplatin",
      "medicineClass": "Chemotherapy",
      "condition": "Cervical cancer",
      "conditionId": "cervical-cancer",
      "conditionIds": [
        "cervical-cancer",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "Used in selected cancer regimens",
      "dosageGuideline": "Adult: 50-100 mg/m2 IV once every 3-4 weeks with rigorous pre- and post-hydration.",
      "brandNames": "Platinol, Cisplat, Kemoplat",
      "safetyNote": "Oncology/hospital treatment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Platinol",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Platinol",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Platinol/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_colorectal-cancer_5-fluorouracil_121",
      "activeIngredient": "5-Fluorouracil",
      "medicineClass": "Chemotherapy",
      "condition": "Colorectal cancer",
      "conditionId": "colorectal-cancer",
      "conditionIds": [
        "colorectal-cancer",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "Used in combination regimens",
      "dosageGuideline": "Adult: 12 mg/kg/day IV or topical 5% cream twice daily for superficial lesions.",
      "brandNames": "Adrucil, Efudex, Fluoroplex, Carac",
      "safetyNote": "Oncology-directed",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Adrucil",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Adrucil",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Adrucil/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_lymphoma_rituximab_122",
      "activeIngredient": "Rituximab",
      "medicineClass": "Chemotherapy",
      "condition": "Lymphoma",
      "conditionId": "lymphoma",
      "conditionIds": [
        "lymphoma",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "B-cell malignancies in selected regimens",
      "dosageGuideline": "Adult: 375 mg/m2 IV infusion once weekly for 4 to 8 consecutive weeks.",
      "brandNames": "Rituxan, MabThera, Ristova, Reditux",
      "safetyNote": "Infusion/oncology supervision",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Rituxan",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Rituxan",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Rituxan/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_severe-allergic-reaction_epinephrine_123",
      "activeIngredient": "Epinephrine (adrenaline)",
      "medicineClass": "Emergency medicine",
      "condition": "Severe allergic reaction",
      "conditionId": "severe-allergic-reaction",
      "conditionIds": [
        "severe-allergic-reaction",
        "allergy-immune"
      ],
      "category": "Allergy/immune",
      "categorySlug": "allergy-immune",
      "generalMedicalRole": "Emergency treatment of anaphylaxis",
      "dosageGuideline": "Adult: 0.3 mg IM (anterolateral mid-thigh). Pediatric (15-30 kg): 0.15 mg IM stat; repeat in 5-15 mins if needed.",
      "brandNames": "EpiPen, Adrenaclick, FastJekt, Adrenaline Tartrate",
      "safetyNote": "Emergency medical care is essential",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=EpiPen",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/EpiPen",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/EpiPen/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_allergic-dermatitis_cetirizine_124",
      "activeIngredient": "Cetirizine",
      "medicineClass": "Antihistamine",
      "condition": "Allergic dermatitis",
      "conditionId": "allergic-dermatitis",
      "conditionIds": [
        "allergic-dermatitis",
        "allergy-immune"
      ],
      "category": "Allergy/immune",
      "categorySlug": "allergy-immune",
      "generalMedicalRole": "Itch relief",
      "dosageGuideline": "Adult: 10 mg once daily in the evening. Pediatric (6-12 yrs): 5 mg twice daily or 10 mg once daily.",
      "brandNames": "Cetzine, Alerid, Zyrtec, Okacet",
      "safetyNote": "Identify/remove trigger when possible",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Cetzine",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Cetzine",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Cetzine/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_rheumatoid-arthritis_methotrexate_125",
      "activeIngredient": "Methotrexate",
      "medicineClass": "DMARD",
      "condition": "Rheumatoid arthritis",
      "conditionId": "rheumatoid-arthritis",
      "conditionIds": [
        "rheumatoid-arthritis",
        "allergy-immune"
      ],
      "category": "Allergy/immune",
      "categorySlug": "allergy-immune",
      "generalMedicalRole": "Disease modification",
      "dosageGuideline": "Adult: RA/Psoriasis: 7.5 mg to 20 mg once weekly (single day, not daily) with daily folic acid.",
      "brandNames": "Trexall, Folitrax, Rheumatrex, Imutrex",
      "safetyNote": "Specialist monitoring",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Trexall",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Trexall",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Trexall/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_systemic-lupus-erythematosus_hydroxychloroquine_126",
      "activeIngredient": "Hydroxychloroquine",
      "medicineClass": "Antimalarial",
      "condition": "Systemic lupus erythematosus",
      "conditionId": "systemic-lupus-erythematosus",
      "conditionIds": [
        "systemic-lupus-erythematosus",
        "allergy-immune"
      ],
      "category": "Allergy/immune",
      "categorySlug": "allergy-immune",
      "generalMedicalRole": "Disease control in selected patients",
      "dosageGuideline": "Adult: 200 mg to 400 mg once daily with meals or milk (Max: 5 mg/kg actual body weight daily).",
      "brandNames": "Plaquenil, HCQS, Quensyl, Hydroquin",
      "safetyNote": "Ophthalmic monitoring required",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Plaquenil",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Plaquenil",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Plaquenil/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_inflammatory-arthritis_ibuprofen_127",
      "activeIngredient": "Ibuprofen",
      "medicineClass": "NSAID",
      "condition": "Inflammatory arthritis",
      "conditionId": "inflammatory-arthritis",
      "conditionIds": [
        "inflammatory-arthritis",
        "allergy-immune"
      ],
      "category": "Allergy/immune",
      "categorySlug": "allergy-immune",
      "generalMedicalRole": "Pain/inflammation relief",
      "dosageGuideline": "Adult: 200 mg - 400 mg every 6-8 hrs with meals (Max: 1200 mg/day OTC; 2400 mg Rx). Pediatric: 5-10 mg/kg/dose.",
      "brandNames": "Brufen, Combiflam, Ibugesic",
      "safetyNote": "GI/kidney/cardiovascular risks",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Brufen",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Brufen",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Brufen/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_fever_paracetamol_128",
      "activeIngredient": "Paracetamol (acetaminophen)",
      "medicineClass": "Analgesic/antipyretic",
      "condition": "Fever",
      "conditionId": "fever",
      "conditionIds": [
        "fever",
        "emergency-supportive"
      ],
      "category": "Emergency/supportive",
      "categorySlug": "emergency-supportive",
      "generalMedicalRole": "Fever/pain relief",
      "dosageGuideline": "Adult: 500 mg - 650 mg every 4-6 hrs (Max: 4000 mg/day). Pediatric: 10-15 mg/kg/dose every 4-6 hrs.",
      "brandNames": "Dolo 650, Calpol, Crocin, Pacimol",
      "safetyNote": "Cause of fever matters",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Dolo%20650",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Dolo%20650",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Dolo%20650/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_mild-pain_paracetamol_129",
      "activeIngredient": "Paracetamol (acetaminophen)",
      "medicineClass": "Analgesic",
      "condition": "Mild pain",
      "conditionId": "mild-pain",
      "conditionIds": [
        "mild-pain",
        "emergency-supportive"
      ],
      "category": "Emergency/supportive",
      "categorySlug": "emergency-supportive",
      "generalMedicalRole": "Pain relief",
      "dosageGuideline": "Adult: 500 mg - 650 mg every 4-6 hrs (Max: 4000 mg/day). Pediatric: 10-15 mg/kg/dose every 4-6 hrs.",
      "brandNames": "Dolo 650, Calpol, Crocin, Pacimol",
      "safetyNote": "Persistent/severe pain needs assessment",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Dolo%20650",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Dolo%20650",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Dolo%20650/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_moderate-inflammatory-pain_ibuprofen_130",
      "activeIngredient": "Ibuprofen",
      "medicineClass": "NSAID",
      "condition": "Moderate inflammatory pain",
      "conditionId": "moderate-inflammatory-pain",
      "conditionIds": [
        "moderate-inflammatory-pain",
        "emergency-supportive"
      ],
      "category": "Emergency/supportive",
      "categorySlug": "emergency-supportive",
      "generalMedicalRole": "Pain/inflammation relief",
      "dosageGuideline": "Adult: 200 mg - 400 mg every 6-8 hrs with meals (Max: 1200 mg/day OTC; 2400 mg Rx). Pediatric: 5-10 mg/kg/dose.",
      "brandNames": "Brufen, Combiflam, Ibugesic",
      "safetyNote": "Not suitable for everyone",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Brufen",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Brufen",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Brufen/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_dehydration_glucose-sodium-chloride-potassium-chloride-citrate_131",
      "activeIngredient": "Glucose + sodium chloride + potassium chloride + citrate",
      "medicineClass": "Oral rehydration",
      "condition": "Dehydration",
      "conditionId": "dehydration",
      "conditionIds": [
        "dehydration",
        "emergency-supportive"
      ],
      "category": "Emergency/supportive",
      "categorySlug": "emergency-supportive",
      "generalMedicalRole": "Replaces fluids/electrolytes",
      "dosageGuideline": "Adult: 200-400 mL oral rehydration solution after each watery stool or 1-2 liters/day.",
      "brandNames": "Electral, Enerzal, ORS",
      "safetyNote": "Formulation and severity matter",
      "source": "HKare_Common_Disease_Medicine_Reference(1).csv",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Electral",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Electral",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Electral/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_coronary-artery-disease_aspirin-antiplatelet_132",
      "activeIngredient": "Aspirin (Acetylsalicylic acid)",
      "medicineClass": "Antiplatelet / Cyclooxygenase-1 (COX-1) Inhibitor",
      "condition": "Coronary artery disease",
      "conditionId": "coronary-artery-disease",
      "conditionIds": [
        "coronary-artery-disease",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Irreversibly inhibits platelet COX-1 enzyme, preventing thromboxane A2 production to stop arterial platelet aggregation and prevent myocardial infarction and ischemic stroke.",
      "dosageGuideline": "Adult: 75 mg to 150 mg once daily after lunch/dinner for cardioprotection (Antiplatelet).",
      "brandNames": "Ecosprin, Disprin, Bayer Aspirin, Delisprin",
      "safetyNote": "Gastrointestinal ulceration/bleeding risk; take with or after food. Strictly avoid in children and teenagers with viral illness (risk of Reye's syndrome). Contraindicated in active bleeding.",
      "source": "WHO Model List of Essential Medicines (EML) & ACC/AHA Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Ecosprin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Ecosprin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Ecosprin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_coronary-artery-disease_clopidogrel_133",
      "activeIngredient": "Clopidogrel (Clopidogrel bisulfate)",
      "medicineClass": "Antiplatelet / P2Y12 ADP Receptor Antagonist",
      "condition": "Coronary artery disease",
      "conditionId": "coronary-artery-disease",
      "conditionIds": [
        "coronary-artery-disease",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Selectively and irreversibly inhibits ADP binding to platelet P2Y12 receptors, preventing activation of the GPIIb/IIIa complex, arterial thrombosis, and stent closure.",
      "dosageGuideline": "Adult: 75 mg once daily with or without food.",
      "brandNames": "Plavix, Deplatt, Clopivas, Clavix",
      "safetyNote": "Bleeding risk; withhold 5 days prior to elective surgery under cardiology guidance. CYP2C19 poor metabolizers have reduced active metabolite; avoid co-administration with omeprazole/esomeprazole.",
      "source": "WHO Model List of Essential Medicines (EML) & ESC Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Plavix",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Plavix",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Plavix/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_coronary-artery-disease_prasugrel_134",
      "activeIngredient": "Prasugrel (Prasugrel hydrochloride)",
      "medicineClass": "Potent P2Y12 Antiplatelet / Thienopyridine",
      "condition": "Coronary artery disease",
      "conditionId": "coronary-artery-disease",
      "conditionIds": [
        "coronary-artery-disease",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Provides rapid, potent, and predictable irreversible platelet P2Y12 receptor inhibition to prevent stent thrombosis and recurrent myocardial infarction in acute coronary syndrome undergoing PCI.",
      "dosageGuideline": "Adult: 60 mg loading dose, followed by 10 mg once daily (5 mg if weight <60 kg or age >=75).",
      "brandNames": "Effient, Prasita, Prax",
      "safetyNote": "Significant bleeding risk. Contraindicated in patients with prior stroke or transient ischemic attack (TIA). Use with caution in patients >=75 years or body weight <60 kg.",
      "source": "ACC/AHA & ESC Coronary Revascularization Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Effient",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Effient",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Effient/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_coronary-artery-disease_ticagrelor_135",
      "activeIngredient": "Ticagrelor",
      "medicineClass": "Direct-Acting Reversible P2Y12 Receptor Antagonist",
      "condition": "Coronary artery disease",
      "conditionId": "coronary-artery-disease",
      "conditionIds": [
        "coronary-artery-disease",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Directly and reversibly binds the P2Y12 ADP receptor on platelets without requiring hepatic metabolic activation, providing rapid cardioprotection against ischemic vascular events.",
      "dosageGuideline": "Adult: 180 mg loading dose, followed by 90 mg twice daily with low-dose aspirin.",
      "brandNames": "Brilinta, Axcer, Tigiss",
      "safetyNote": "Bleeding risk; dyspnea (shortness of breath) is a recognized reversible side effect. Bradyarrhythmias and hyperuricemia reported. Concurrent maintenance aspirin dose must not exceed 100 mg daily.",
      "source": "WHO Model List of Essential Medicines & ESC Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Brilinta",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Brilinta",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Brilinta/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_high-ldl-cholesterol_atorvastatin-calcium_136",
      "activeIngredient": "Atorvastatin (Atorvastatin calcium)",
      "medicineClass": "HMG-CoA Reductase Inhibitor (High-Intensity Statin)",
      "condition": "High LDL cholesterol",
      "conditionId": "high-ldl-cholesterol",
      "conditionIds": [
        "high-ldl-cholesterol",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Competitively inhibits HMG-CoA reductase, increasing hepatic LDL receptor expression, lowering circulating LDL cholesterol by 40-50%, and stabilizing vascular plaques against rupture.",
      "dosageGuideline": "Adult: 10 mg to 20 mg once daily in the evening; titrate up to 80 mg daily for high-risk ASCVD.",
      "brandNames": "Atorva, Lipitor, Storvas, Aztor",
      "safetyNote": "Monitor for unexplained muscle pain, tenderness, or weakness (risk of myopathy/rhabdomyolysis). Check baseline liver function. Strictly contraindicated in pregnancy and active liver disease.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Atorva",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Atorva",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Atorva/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_high-ldl-cholesterol_rosuvastatin_137",
      "activeIngredient": "Rosuvastatin (Rosuvastatin calcium)",
      "medicineClass": "HMG-CoA Reductase Inhibitor (Hydrophilic High-Potency Statin)",
      "condition": "High LDL cholesterol",
      "conditionId": "high-ldl-cholesterol",
      "conditionIds": [
        "high-ldl-cholesterol",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Potently inhibits cholesterol synthesis, lowering LDL-C by up to 55-60%, raising HDL-C, and reducing vascular inflammatory biomarkers (hs-CRP) for atherosclerotic plaque regression.",
      "dosageGuideline": "Adult: 5 mg to 10 mg once daily; titrate up to maximum 20-40 mg once daily.",
      "brandNames": "Rosuvas, Crestor, Rozavel, Roseday",
      "safetyNote": "Start with lower dose (5 mg) in Asian patients or severe renal impairment (eGFR <30 mL/min). Report unexpected muscle ache or weakness immediately. Contraindicated in pregnancy.",
      "source": "WHO Model List of Essential Medicines (EML) & AHA/ACC",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Rosuvas",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Rosuvas",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Rosuvas/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_angina_metoprolol_138",
      "activeIngredient": "Metoprolol (Metoprolol succinate / tartrate)",
      "medicineClass": "Cardioselective Beta-1 Adrenergic Blocker",
      "condition": "Angina",
      "conditionId": "angina",
      "conditionIds": [
        "angina",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Selectively blocks cardiac beta-1 adrenergic receptors, reducing resting and exercise heart rate, myocardial contractility, cardiac workload, and myocardial oxygen consumption.",
      "dosageGuideline": "Adult: 25 mg to 50 mg twice daily (tartrate) or 50 mg to 100 mg once daily (succinate ER).",
      "brandNames": "Betaloc, Metolar, Toprol-XL, Seloken",
      "safetyNote": "Do not stop abruptly (risk of severe rebound tachycardia, angina, or acute MI). Contraindicated in severe sinus bradycardia, second/third-degree AV block, and cardiogenic shock.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Betaloc",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Betaloc",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Betaloc/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hypertension_amlodipine-besylate_139",
      "activeIngredient": "Amlodipine (Amlodipine besylate)",
      "medicineClass": "Dihydropyridine Calcium Channel Blocker (CCB)",
      "condition": "Hypertension",
      "conditionId": "hypertension",
      "conditionIds": [
        "hypertension",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Inhibits transmembrane calcium influx into vascular smooth muscle cells, causing systemic peripheral and coronary arteriolar vasodilation and sustained blood pressure reduction.",
      "dosageGuideline": "Adult: 5 mg once daily; may increase to maximum 10 mg once daily.",
      "brandNames": "Amlong, Norvasc, Stamlo, Amlopin",
      "safetyNote": "Dose-dependent bilateral peripheral ankle edema may develop. May cause flushing, headache, and dizziness on initiation; monitor standing blood pressure.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Amlong",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Amlong",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Amlong/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hypertension_ramipril_140",
      "activeIngredient": "Ramipril",
      "medicineClass": "Angiotensin-Converting Enzyme (ACE) Inhibitor",
      "condition": "Hypertension",
      "conditionId": "hypertension",
      "conditionIds": [
        "hypertension",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Inhibits ACE, blocking the conversion of angiotensin I to angiotensin II, lowering systemic vascular resistance, decreasing aldosterone secretion, and reducing left ventricular remodeling.",
      "dosageGuideline": "Adult: 2.5 mg to 5 mg once daily; titrate to maximum 10 mg daily.",
      "brandNames": "Cardace, Altace, Ramipres, Hopace",
      "safetyNote": "Persistent dry cough reported in up to 15% of patients due to bradykinin buildup. Risk of hyperkalemia and renal dysfunction; check serum K+ and creatinine. Strictly contraindicated in pregnancy.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Cardace",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Cardace",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Cardace/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hypertension_losartan_141",
      "activeIngredient": "Losartan (Losartan potassium)",
      "medicineClass": "Angiotensin II Receptor Blocker (ARB)",
      "condition": "Hypertension",
      "conditionId": "hypertension",
      "conditionIds": [
        "hypertension",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Selectively blocks AT1 receptors, preventing angiotensin II-mediated vasoconstriction and aldosterone release without inhibiting bradykinin degradation (cough-free alternative to ACEi).",
      "dosageGuideline": "Adult: 50 mg once daily (or 25 mg twice daily); titrate to maximum 100 mg daily.",
      "brandNames": "Losacar, Cozaar, Repace, Tozaar",
      "safetyNote": "Monitor serum potassium and renal function (BUN/creatinine). Teratogenic; black box warning against use during second and third trimesters of pregnancy.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Losacar",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Losacar",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Losacar/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_heart-failure_spironolactone_142",
      "activeIngredient": "Spironolactone",
      "medicineClass": "Aldosterone Antagonist / Potassium-Sparing Diuretic (MRA)",
      "condition": "Heart failure",
      "conditionId": "heart-failure",
      "conditionIds": [
        "heart-failure",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Competitively antagonizes aldosterone receptors in the distal renal tubules and myocardium, increasing sodium and water excretion, retaining potassium, and preventing cardiac remodeling/fibrosis.",
      "dosageGuideline": "Adult: 25 mg to 50 mg once daily with meals (Max: 100 mg/day).",
      "brandNames": "Aldactone, Spiroctan",
      "safetyNote": "High risk of life-threatening hyperkalemia; close monitoring of potassium and renal function required. May cause gynecomastia, breast tenderness, and menstrual irregularities due to anti-androgenic effects.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Aldactone",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Aldactone",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Aldactone/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_heart-failure_furosemide_143",
      "activeIngredient": "Furosemide",
      "medicineClass": "Loop Diuretic (High-Ceiling Diuretic)",
      "condition": "Heart failure",
      "conditionId": "heart-failure",
      "conditionIds": [
        "heart-failure",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Inhibits Na+/K+/2Cl- co-transport in the thick ascending limb of Henle's loop, producing rapid, powerful diuresis and natriuresis to relieve pulmonary congestion and severe peripheral fluid retention.",
      "dosageGuideline": "Adult: 20 mg to 40 mg once daily in the morning (Max: 80 mg/day oral for routine edema).",
      "brandNames": "Lasix, Frusenex",
      "safetyNote": "Electrolyte depletion risk (hypokalemia, hyponatremia, hypomagnesemia); potassium supplementation or monitoring frequently required. Monitor for dehydration, hypotension, and ototoxicity at high doses.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Lasix",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Lasix",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Lasix/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_atrial-fibrillation_digoxin_144",
      "activeIngredient": "Digoxin",
      "medicineClass": "Cardiac Glycoside / Inotropic & AV Nodal Blocking Agent",
      "condition": "Atrial fibrillation",
      "conditionId": "atrial-fibrillation",
      "conditionIds": [
        "atrial-fibrillation",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Increases vagal tone at the AV node to slow ventricular response in atrial fibrillation; also inhibits myocardial Na+/K+ ATPase to enhance cardiac contractile force in symptomatic heart failure.",
      "dosageGuideline": "Adult: 0.125 mg to 0.25 mg once daily with periodic serum level monitoring.",
      "brandNames": "Lanoxin, Digomer",
      "safetyNote": "Narrow therapeutic window (0.5 to 0.9 ng/mL). Toxicity exacerbated by hypokalemia and renal insufficiency. Warning signs include nausea, anorexia, yellow-green visual halos, confusion, and ventricular arrhythmias.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Lanoxin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Lanoxin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Lanoxin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_angina_glyceryl-trinitrate-sublingual_145",
      "activeIngredient": "Glyceryl trinitrate (Nitroglycerin)",
      "medicineClass": "Organic Nitrate Vasodilator / Antianginal",
      "condition": "Angina",
      "conditionId": "angina",
      "conditionIds": [
        "angina",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Undergoes enzymatic conversion to nitric oxide (NO) in vascular smooth muscle, causing potent systemic venodilation, lowering venous return (preload) and myocardial wall stress to rapidly alleviate acute anginal attacks.",
      "dosageGuideline": "Adult: 0.5 mg sublingual tablet under tongue at onset of angina; repeat every 5 mins up to 3 doses.",
      "brandNames": "Nitrocontin, Angispan, Sorbitrate",
      "safetyNote": "Absolute contraindication: concurrent use of phosphodiesterase-5 (PDE-5) inhibitors (sildenafil, tadalafil) within 24-48h due to catastrophic fatal hypotension. Common adverse effects: throbbing headache, dizziness, flushing.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Nitrocontin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Nitrocontin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Nitrocontin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_type-2-diabetes_metformin_146",
      "activeIngredient": "Metformin (Metformin hydrochloride)",
      "medicineClass": "Biguanide Antidiabetic",
      "condition": "Type 2 diabetes",
      "conditionId": "type-2-diabetes",
      "conditionIds": [
        "type-2-diabetes",
        "endocrine"
      ],
      "category": "Endocrine & Metabolic",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Suppresses hepatic glucose production (gluconeogenesis), improves peripheral insulin sensitivity, and increases cellular glucose uptake without inducing hypoglycemia or weight gain.",
      "dosageGuideline": "Adult: 500 mg twice daily or 850 mg once daily with meals; titrate to 1000 mg twice daily (Max: 2550 mg/day).",
      "brandNames": "Glycomet, Glucophage, Obimet, Riomet",
      "safetyNote": "Gastrointestinal side effects (nausea, diarrhea); take with or immediately after meals. Rare risk of lactic acidosis; hold prior to iodinated radiocontrast procedures and in severe renal failure (eGFR <30 mL/min).",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Glycomet",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Glycomet",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Glycomet/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_type-2-diabetes_dapagliflozin_147",
      "activeIngredient": "Dapagliflozin (Dapagliflozin propanediol)",
      "medicineClass": "Sodium-Glucose Co-Transporter 2 (SGLT2) Inhibitor",
      "condition": "Type 2 diabetes",
      "conditionId": "type-2-diabetes",
      "conditionIds": [
        "type-2-diabetes",
        "endocrine"
      ],
      "category": "Endocrine & Metabolic",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Inhibits SGLT2 in the renal proximal tubules, reducing glucose and sodium reabsorption to promote urinary caloric excretion, reducing HbA1c, body weight, blood pressure, and heart failure hospitalizations.",
      "dosageGuideline": "Adult: 10 mg once daily in the morning with or without food.",
      "brandNames": "Forxiga, Dapaone, Oxra",
      "safetyNote": "Increased incidence of genital mycotic infections and urinary tract infections. Rare risk of Euglycemic Diabetic Ketoacidosis (euDKA) and volume depletion/orthostatic hypotension. Maintain adequate hydration.",
      "source": "WHO Model List of Essential Medicines & ADA/KDIGO Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Forxiga",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Forxiga",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Forxiga/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_gerd_rabeprazole_148",
      "activeIngredient": "Rabeprazole (Rabeprazole sodium)",
      "medicineClass": "Proton Pump Inhibitor (PPI)",
      "condition": "GERD",
      "conditionId": "gerd",
      "conditionIds": [
        "gerd",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Selectively and irreversibly binds to the gastric parietal cell H+/K+ ATPase pump, providing rapid and prolonged suppression of basal and stimulated gastric acid secretion to heal esophagitis.",
      "dosageGuideline": "Adult: 20 mg once daily in the morning before food.",
      "brandNames": "Rablet, Cyra, Happi, Aciphex",
      "safetyNote": "Take 30 to 60 minutes before breakfast. Prolonged suppression of stomach acid may reduce absorption of Vitamin B12, iron, and magnesium, and modestly increase risk of C. difficile-associated diarrhea.",
      "source": "WHO Model List of Essential Medicines & ACG Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Rablet",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Rablet",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Rablet/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_gerd_ondansetron_149",
      "activeIngredient": "Ondansetron (Ondansetron hydrochloride)",
      "medicineClass": "5-HT3 Serotonin Receptor Antagonist / Antiemetic",
      "condition": "GERD",
      "conditionId": "gerd",
      "conditionIds": [
        "gerd",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Selectively antagonizes serotonin 5-HT3 receptors on vagal afferents and in the central solitary tract nucleus, halting the nausea and vomiting reflex during gastrointestinal distress and chemotherapy.",
      "dosageGuideline": "Adult: 4 mg to 8 mg orally every 8-12 hrs as needed (Max: 16 mg/day). Pediatric: 0.15 mg/kg/dose.",
      "brandNames": "Emeset, Zofran, Vomikind, Periset",
      "safetyNote": "Dose-dependent prolongation of the QT interval; caution in patients with cardiac conduction abnormalities or hypokalemia. Common side effects: headache, mild constipation, and dizziness.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Emeset",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Emeset",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Emeset/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_allergic-rhinitis_levocetirizine_150",
      "activeIngredient": "Levocetirizine (Levocetirizine dihydrochloride)",
      "medicineClass": "Second-Generation Non-Sedating Antihistamine",
      "condition": "Allergic rhinitis",
      "conditionId": "allergic-rhinitis",
      "conditionIds": [
        "allergic-rhinitis",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "The active R-enantiomer of cetirizine; selectively blocks peripheral H1 histamine receptors, reducing allergic rhinitis symptoms including sneezing, rhinorrhea, nasal congestion, and allergic pruritus.",
      "dosageGuideline": "Adult: 10 mg once daily in the evening. Pediatric (6-12 yrs): 5 mg twice daily or 10 mg once daily.",
      "brandNames": "Cetzine, Alerid, Zyrtec, Okacet",
      "safetyNote": "Low sedative liability compared to first-generation antihistamines; however, avoid combining with alcohol or central nervous system depressants. Dose reduction advised in moderate renal impairment.",
      "source": "WHO Model List of Essential Medicines & ARIA Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Cetzine",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Cetzine",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Cetzine/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_asthma_montelukast_151",
      "activeIngredient": "Montelukast (Montelukast sodium)",
      "medicineClass": "Leukotriene Receptor Antagonist (LTRA)",
      "condition": "Asthma",
      "conditionId": "asthma",
      "conditionIds": [
        "asthma",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Binds with high affinity to cysteinyl leukotriene CysLT1 receptors, blocking leukotriene-mediated bronchoconstriction, airway mucosal edema, inflammatory cell recruitment, and airway hyperresponsiveness.",
      "dosageGuideline": "Adult: 10 mg once daily at bedtime. Pediatric (6-14 yrs): 5 mg chewable tablet daily.",
      "brandNames": "Montair, Singulair, Romilast, Telekast",
      "safetyNote": "Intended for maintenance prevention; does not reverse acute asthma bronchospasm. FDA boxed warning: monitor for behavioral changes, agitation, sleep disturbances, or mood alterations.",
      "source": "WHO Model List of Essential Medicines & GINA Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Montair",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Montair",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Montair/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_osteoarthritis_aceclofenac_152",
      "activeIngredient": "Aceclofenac",
      "medicineClass": "NSAID / Phenylacetic Acid Derivative",
      "condition": "Osteoarthritis",
      "conditionId": "osteoarthritis",
      "conditionIds": [
        "osteoarthritis",
        "musculoskeletal"
      ],
      "category": "Musculoskeletal",
      "categorySlug": "musculoskeletal",
      "generalMedicalRole": "Inhibits cyclooxygenase enzymes (COX-1 and COX-2) to block prostaglandin synthesis, reducing joint swelling, morning stiffness, and pain while preserving articular cartilage matrix.",
      "dosageGuideline": "Adult: 100 mg twice daily with meals (morning and evening).",
      "brandNames": "Zerodol, Hifenac, Aceclo",
      "safetyNote": "Take with meals. Caution in cardiovascular, hepatic, or renal impairment. Contraindicated in active peptic ulceration, gastrointestinal bleeding, severe congestive heart failure, and late pregnancy.",
      "source": "OARSI Clinical Practice Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Zerodol",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Zerodol",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Zerodol/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_pneumococcal-pneumonia_cefpodoxime_153",
      "activeIngredient": "Cefpodoxime (Cefpodoxime proxetil)",
      "medicineClass": "Third-Generation Oral Cephalosporin Antibiotic",
      "condition": "Pneumococcal pneumonia",
      "conditionId": "pneumococcal-pneumonia",
      "conditionIds": [
        "pneumococcal-pneumonia",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Binds to essential penicillin-binding proteins (PBPs), inhibiting bacterial cell wall peptidoglycan synthesis, providing bactericidal action against respiratory streptococci and Gram-negative pathogens.",
      "dosageGuideline": "Adult: 200 mg every 12 hrs with food for 5-14 days. Pediatric: 10 mg/kg/day divided every 12 hrs.",
      "brandNames": "Monocef-O, Doxcef, Cepodem, Gudcef",
      "safetyNote": "Administer with food for optimal proxetil bioavailability. Contraindicated in severe immediate beta-lactam anaphylaxis. Complete full prescribed course to prevent bacterial resistance development.",
      "source": "WHO Model List of Essential Medicines & IDSA Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Monocef-O",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Monocef-O",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Monocef-O/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_pneumococcal-pneumonia_doxycycline_154",
      "activeIngredient": "Doxycycline (Doxycycline hyclate / monohydrate)",
      "medicineClass": "Tetracycline Broad-Spectrum Antibiotic",
      "condition": "Pneumococcal pneumonia",
      "conditionId": "pneumococcal-pneumonia",
      "conditionIds": [
        "pneumococcal-pneumonia",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Inhibits bacterial protein synthesis by reversibly binding the 30S ribosomal subunit, blocking aminoacyl-tRNA attachment to the mRNA-ribosome complex across atypical respiratory and zoonotic pathogens.",
      "dosageGuideline": "Adult: 100 mg twice daily on day 1, then 100 mg once or twice daily with full glass of water.",
      "brandNames": "Doxicip, Doxy-1, Microdox, Vibramycin",
      "safetyNote": "Swallow with a full glass of water while sitting upright and do not lie down for 30 minutes (risk of pill-induced severe esophageal ulceration). Causes photosensitivity. Avoid during pregnancy and children <8 years.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Doxicip",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Doxicip",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Doxicip/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_stroke_alteplase_155",
      "activeIngredient": "Alteplase (recombinant tissue plasminogen activator / rt-PA)",
      "medicineClass": "Thrombolytic / Fibrinolytic Enzyme",
      "condition": "Stroke & Transient Ischemic Attack (TIA)",
      "conditionId": "stroke",
      "conditionIds": [
        "stroke",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Cleaves plasminogen into plasmin to dissolve acute occlusive fibrin thrombi in cerebral arterial circulation within the critical 4.5-hour therapeutic window.",
      "dosageGuideline": "Adult: 0.9 mg/kg IV (Max: 90 mg) given as 10% bolus over 1 min, remaining 90% infused over 60 mins.",
      "brandNames": "Actilyse, Cathflo Activase",
      "safetyNote": "Strict ICU protocol; intracranial hemorrhage risk. Absolute contraindication if BP >185/110, recent hemorrhage, or past 3 months intracranial trauma.",
      "source": "AHA/ASA Acute Ischemic Stroke Guidelines & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Actilyse",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Actilyse",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Actilyse/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_stroke_aspirin-dipyridamole_156",
      "activeIngredient": "Aspirin + Extended-Release Dipyridamole",
      "medicineClass": "Dual Antiplatelet / Phosphodiesterase Inhibitor",
      "condition": "Stroke & Transient Ischemic Attack (TIA)",
      "conditionId": "stroke",
      "conditionIds": [
        "stroke",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Combines COX-1 inhibition with adenosine reuptake and cGMP phosphodiesterase blockade for secondary prevention of recurrent ischemic stroke.",
      "dosageGuideline": "Adult: 25 mg aspirin / 200 mg ER dipyridamole capsule twice daily (morning and evening) with or without food.",
      "brandNames": "Aggrenox, Asasantin Retard",
      "safetyNote": "Severe headache is common during initial 2 weeks of therapy. Bleeding precaution; monitor co-administration with NSAIDs.",
      "source": "AHA/ASA Stroke Prevention Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Aggrenox",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Aggrenox",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Aggrenox/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_heart-attack_tenecteplase_157",
      "activeIngredient": "Tenecteplase (TNK-tPA)",
      "medicineClass": "Third-Generation Fibrin-Specific Thrombolytic",
      "condition": "Acute Myocardial Infarction (Heart Attack)",
      "conditionId": "heart-attack",
      "conditionIds": [
        "heart-attack",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Recombinant fibrin-specific tPA that binds fibrin clots and converts plasminogen to plasmin, restoring coronary reperfusion in acute STEMI.",
      "dosageGuideline": "Adult: Weight-tiered single IV bolus over 5 seconds: <60 kg: 30 mg; 60-69 kg: 35 mg; 70-79 kg: 40 mg; 80-89 kg: 45 mg; >=90 kg: 50 mg.",
      "brandNames": "Metalyse, Elaxim",
      "safetyNote": "High risk of major systemic and intracranial hemorrhage. Requires continuous ECG and blood pressure monitoring in coronary care unit.",
      "source": "ACC/AHA STEMI Guidelines & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Metalyse",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Metalyse",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Metalyse/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_heart-attack_streptokinase_158",
      "activeIngredient": "Streptokinase",
      "medicineClass": "Bacterial Plasminogen Activator / Thrombolytic",
      "condition": "Acute Myocardial Infarction (Heart Attack)",
      "conditionId": "heart-attack",
      "conditionIds": [
        "heart-attack",
        "cardiovascular"
      ],
      "category": "Cardiovascular",
      "categorySlug": "cardiovascular",
      "generalMedicalRole": "Forms an equimolar complex with plasminogen to catalyze non-fibrin-specific plasminogen activation and lyse coronary occlusive clots.",
      "dosageGuideline": "Adult: 1,500,000 IU IV infusion diluted in 100 mL 0.9% saline infused over 60 minutes.",
      "brandNames": "STK, Streptase, Thromboflux",
      "safetyNote": "Antigenic: risk of severe allergic reactions and anaphylaxis. Do not repeat within 12 months due to circulating neutralising antibodies.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=STK",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/STK",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/STK/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_gas-bloating_simethicone_159",
      "activeIngredient": "Simethicone",
      "medicineClass": "Antiflatulent / Gastrointestinal Surfactant",
      "condition": "Abdominal Gas, Flatulence & Bloating",
      "conditionId": "gas-bloating",
      "conditionIds": [
        "gas-bloating",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Reduces surface tension of gas bubbles in gastrointestinal tract, causing coalescence into larger bubbles that are easily eliminated by belching or flatus.",
      "dosageGuideline": "Adult: 80 mg to 125 mg orally 4 times daily after meals and at bedtime (Max: 500 mg/day). Pediatric: 20-40 mg with infant feeds.",
      "brandNames": "Gas-X, Degas, Colicaid, Pudin Hara Pearls, Phazyme",
      "safetyNote": "Not absorbed systemically; excellent safety profile. If symptoms persist beyond 14 days, evaluate for underlying functional or structural GI pathology.",
      "source": "USP-NF & British National Formulary (BNF)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Gas-X",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Gas-X",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Gas-X/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_gas-bloating_alpha-galactosidase_160",
      "activeIngredient": "Alpha-galactosidase",
      "medicineClass": "Digestive Enzyme Supplement",
      "condition": "Abdominal Gas, Flatulence & Bloating",
      "conditionId": "gas-bloating",
      "conditionIds": [
        "gas-bloating",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Hydrolyzes non-digestible oligosaccharides (raffinose, stachyose) into simple sugars before reaching colonic bacteria, preventing gas fermentation.",
      "dosageGuideline": "Adult: 300 to 450 GalU (1-2 chewable tablets) taken with first bite of gas-producing meals containing beans, vegetables, or whole grains.",
      "brandNames": "Beano, Gas-O-Fast Enzyme, Enzymax",
      "safetyNote": "Caution in patients with galactosemia. Diabetic patients should note that carbohydrates may be broken down into glucose.",
      "source": "Clinical Gastroenterology Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Beano",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Beano",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Beano/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_schizophrenia_olanzapine_161",
      "activeIngredient": "Olanzapine",
      "medicineClass": "Second-Generation Atypical Antipsychotic",
      "condition": "Schizophrenia & Psychotic Disorders",
      "conditionId": "schizophrenia",
      "conditionIds": [
        "schizophrenia",
        "mental-health"
      ],
      "category": "Mental health",
      "categorySlug": "mental-health",
      "generalMedicalRole": "Antagonizes dopamine D2 and serotonin 5-HT2A receptors, reducing positive psychotic symptoms (delusions, hallucinations) and improving negative symptoms.",
      "dosageGuideline": "Adult: 5 mg to 10 mg once daily at bedtime; titrated in 5 mg increments up to 20 mg/day as needed.",
      "brandNames": "Zyprexa, Oleanz, Oliza, Olanex",
      "safetyNote": "Significant metabolic syndrome liability: rapid weight gain, dyslipidemia, and new-onset diabetes. Monitor fasting glucose and lipid panel periodically.",
      "source": "WHO Model List of Essential Medicines (EML) & APA Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Zyprexa",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Zyprexa",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Zyprexa/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_schizophrenia_risperidone_162",
      "activeIngredient": "Risperidone",
      "medicineClass": "Atypical Antipsychotic / Benzisoxazole Derivative",
      "condition": "Schizophrenia & Psychotic Disorders",
      "conditionId": "schizophrenia",
      "conditionIds": [
        "schizophrenia",
        "mental-health"
      ],
      "category": "Mental health",
      "categorySlug": "mental-health",
      "generalMedicalRole": "Potent D2 and 5-HT2A receptor antagonist providing antipsychotic efficacy with low anticholinergic liability.",
      "dosageGuideline": "Adult: 1 mg to 2 mg daily initially, titrated to maintenance 4 mg to 6 mg daily in 1 or 2 divided doses (Max: 8 mg/day).",
      "brandNames": "Risperdal, Sizodon, Respidon, Risdone",
      "safetyNote": "Hyperprolactinemia (galactorrhea, amenorrhea, sexual dysfunction) is common. Risk of extrapyramidal symptoms (EPS) at doses >6 mg/day.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Risperdal",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Risperdal",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Risperdal/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_schizophrenia_aripiprazole_163",
      "activeIngredient": "Aripiprazole",
      "medicineClass": "Third-Generation Dopamine System Stabilizer (Partial D2 Agonist)",
      "condition": "Schizophrenia & Psychotic Disorders",
      "conditionId": "schizophrenia",
      "conditionIds": [
        "schizophrenia",
        "mental-health"
      ],
      "category": "Mental health",
      "categorySlug": "mental-health",
      "generalMedicalRole": "Acts as partial agonist at dopamine D2 and 5-HT1A receptors and antagonist at 5-HT2A receptors, delivering antipsychotic action with low metabolic impact.",
      "dosageGuideline": "Adult: 10 mg to 15 mg once daily without regard to meals; may titrate to maximum 30 mg/day after minimum 2 weeks.",
      "brandNames": "Abilify, Arip MT, Asprito, Arzu",
      "safetyNote": "Akathisia (motor restlessness) is common during initiation. Weight-neutral compared to other antipsychotics. Monitor for impulse control disorders.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Abilify",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Abilify",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Abilify/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_bipolar-disorder_lithium-carbonate_164",
      "activeIngredient": "Lithium carbonate",
      "medicineClass": "Monovalent Cation Mood Stabilizer",
      "condition": "Bipolar Affective Disorder",
      "conditionId": "bipolar-disorder",
      "conditionIds": [
        "bipolar-disorder",
        "mental-health"
      ],
      "category": "Mental health",
      "categorySlug": "mental-health",
      "generalMedicalRole": "Modulates inositol monophosphatase and glycogen synthase kinase-3 (GSK-3), stabilizing neuroplasticity, treating acute mania, and preventing suicidal behavior.",
      "dosageGuideline": "Adult: 300 mg to 600 mg 2 to 3 times daily with meals, titrated precisely to target therapeutic serum level 0.6 to 1.0 mEq/L.",
      "brandNames": "Lithosun, Eskalith, Priadel, Licab",
      "safetyNote": "Very narrow therapeutic window. Toxicity signs: coarse tremors, vomiting, ataxia, confusion. Requires regular monitoring of renal panel, TSH, and serum lithium levels.",
      "source": "WHO Model List of Essential Medicines (EML) & CANMAT Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Lithosun",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Lithosun",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Lithosun/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_bipolar-disorder_sodium-valproate_165",
      "activeIngredient": "Sodium valproate / Divalproex sodium",
      "medicineClass": "Broad-Spectrum Mood Stabilizer & Anticonvulsant",
      "condition": "Bipolar Affective Disorder",
      "conditionId": "bipolar-disorder",
      "conditionIds": [
        "bipolar-disorder",
        "mental-health"
      ],
      "category": "Mental health",
      "categorySlug": "mental-health",
      "generalMedicalRole": "Potentiates GABAergic neurotransmission and blocks voltage-gated sodium channels to control acute manic agitation and rapid cycling bipolar states.",
      "dosageGuideline": "Adult: 500 mg to 1500 mg daily in divided doses (or single daily extended-release tablet) with food (Max: 60 mg/kg/day).",
      "brandNames": "Depakote, Epival, Valparin, Encorate Chrono",
      "safetyNote": "Severe teratogenicity: neural tube defects (spina bifida) and cognitive deficits; strictly contraindicated in women of childbearing potential unless Pregnancy Prevention Plan followed.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Depakote",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Depakote",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Depakote/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_cataract_nepafenac_166",
      "activeIngredient": "Nepafenac ophthalmic",
      "medicineClass": "Ophthalmic NSAID Prodrug",
      "condition": "Cataract & Post-Surgical Ocular Inflammation",
      "conditionId": "cataract",
      "conditionIds": [
        "cataract",
        "eye"
      ],
      "category": "Eye",
      "categorySlug": "eye",
      "generalMedicalRole": "Hydrolyzed by intraocular hydrolases to amfenac, inhibiting ocular prostaglandin synthesis to prevent post-cataract surgery pain, photophobia, and macular edema.",
      "dosageGuideline": "Adult: 1 drop of 0.1% suspension into affected eye 3 times daily starting 1 day prior to surgery and continuing for 14 days post-op (or 0.3% once daily).",
      "brandNames": "Nevanac, Nepanac, Amplinac, Nepatop",
      "safetyNote": "Shake well before use. Prolonged use (>14 days) increases risk of corneal epithelial breakdown, corneal thinning, and keratitis.",
      "source": "American Academy of Ophthalmology (AAO) Cataract Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Nevanac",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Nevanac",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Nevanac/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_macular-degeneration_ranibizumab_167",
      "activeIngredient": "Ranibizumab",
      "medicineClass": "Anti-VEGF-A Monoclonal Antibody Fragment",
      "condition": "Age-Related Macular Degeneration (AMD)",
      "conditionId": "macular-degeneration",
      "conditionIds": [
        "macular-degeneration",
        "eye"
      ],
      "category": "Eye",
      "categorySlug": "eye",
      "generalMedicalRole": "Binds vascular endothelial growth factor A (VEGF-A), inhibiting choroidal neovascularization, vascular leakage, and subretinal exudation in wet AMD.",
      "dosageGuideline": "Adult: 0.5 mg (0.05 mL) administered as monthly intravitreal injection into affected eye under sterile ophthalmic conditions.",
      "brandNames": "Lucentis, Razumab, Accentrix",
      "safetyNote": "Ophthalmic specialist procedure only. Post-injection monitoring for endophthalmitis, intraocular pressure spikes, and retinal detachment required.",
      "source": "AAO Retina Guidelines & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Lucentis",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Lucentis",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Lucentis/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hearing-loss_prednisolone-oral_168",
      "activeIngredient": "Prednisolone (oral)",
      "medicineClass": "Systemic Glucocorticoid Anti-Inflammatory",
      "condition": "Sudden Sensorineural Hearing Loss",
      "conditionId": "hearing-loss",
      "conditionIds": [
        "hearing-loss",
        "ear"
      ],
      "category": "Ear",
      "categorySlug": "ear",
      "generalMedicalRole": "Suppresses inner ear microvascular inflammation, cochlear immune reaction, and ischemic edema to restore cochlear hair cell signaling in sudden deafness.",
      "dosageGuideline": "Adult: 1 mg/kg/day (typically 60 mg/day) as single morning dose with breakfast for 7-14 days, followed by structured taper over 7-10 days.",
      "brandNames": "Wysolone, Omnacortil, Deltacortril, Prelone",
      "safetyNote": "Take with meals. Short-term side effects include insomnia, dyspepsia, blood pressure elevation, and hyperglycemia. Avoid abrupt discontinuation.",
      "source": "AAO-HNS Clinical Practice Guideline: Sudden Hearing Loss",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Wysolone",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Wysolone",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Wysolone/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_meniere-disease_betahistine_169",
      "activeIngredient": "Betahistine dihydrochloride",
      "medicineClass": "Histamine Analogue / Microvascular Vasodilator",
      "condition": "Meniere's Disease & Endolymphatic Hydrops",
      "conditionId": "meniere-disease",
      "conditionIds": [
        "meniere-disease",
        "ear"
      ],
      "category": "Ear",
      "categorySlug": "ear",
      "generalMedicalRole": "Acts as weak H1 agonist and potent H3 antagonist, increasing local microcirculation in the stria vascularis to reduce endolymphatic pressure and vertigo attacks.",
      "dosageGuideline": "Adult: 16 mg to 24 mg orally 2 to 3 times daily with meals (Maintenance: 24 to 48 mg daily in divided doses).",
      "brandNames": "Vertin, Serc, Betavert, Vertipress",
      "safetyNote": "Contraindicated in pheochromocytoma. Use caution in patients with history of bronchial asthma or active peptic ulcer disease.",
      "source": "British National Formulary (BNF 86) & ESC Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Vertin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Vertin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Vertin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_nephritis_methylprednisolone_170",
      "activeIngredient": "Methylprednisolone",
      "medicineClass": "High-Potency Glucocorticoid Immunosuppressive",
      "condition": "Acute Glomerulonephritis & Interstitial Nephritis",
      "conditionId": "nephritis",
      "conditionIds": [
        "nephritis",
        "kidney-urinary"
      ],
      "category": "Kidney/urinary",
      "categorySlug": "kidney-urinary",
      "generalMedicalRole": "Inhibits pro-inflammatory cytokine expression and neutrophil/macrophage migration, halting rapidly progressive glomerular crescents and tubulointerstitial damage.",
      "dosageGuideline": "Adult: IV Pulse therapy: 500 mg to 1000 mg IV over 1 hour daily for 3 consecutive days; Oral maintenance: 16 mg to 48 mg daily with food.",
      "brandNames": "Solu-Medrol, Medrol, Depo-Medrol",
      "safetyNote": "High-dose steroid: monitor for acute hypertension, opportunistic infections, hyperglycemia, and hypokalemia. Co-prescribe gastroprotection (PPI).",
      "source": "KDIGO Glomerulonephritis Clinical Practice Guidelines & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Solu-Medrol",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Solu-Medrol",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Solu-Medrol/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_nephritis_tamsulosin_171",
      "activeIngredient": "Tamsulosin hydrochloride",
      "medicineClass": "Alpha-1A Adrenergic Receptor Antagonist",
      "condition": "Kidney stones",
      "conditionId": "kidney-stones",
      "conditionIds": [
        "kidney-stones",
        "kidney-urinary"
      ],
      "category": "Kidney/urinary",
      "categorySlug": "kidney-urinary",
      "generalMedicalRole": "Selectively relaxes distal ureteral smooth muscle, facilitating spontaneous expulsion of distal ureteral calculi and relieving ureteral colic spasm.",
      "dosageGuideline": "Adult: 0.4 mg capsule once daily taken approximately 30 minutes after the same meal each day.",
      "brandNames": "Urimax, Flomax, Tamlet, Urimax-0.4",
      "safetyNote": "May cause orthostatic hypotension, dizziness, and retrograde ejaculation. Preoperative notification needed if undergoing cataract surgery (Floppy Iris Syndrome).",
      "source": "AUA / EAU Urolithiasis Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Urimax",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Urimax",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Urimax/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_gallbladder_ursodeoxycholic-acid_172",
      "activeIngredient": "Ursodeoxycholic acid (UDCA)",
      "medicineClass": "Hydrophilic Bile Acid / Hepatoprotective Agent",
      "condition": "Gallbladder Disease & Biliary Cholecystitis",
      "conditionId": "gallbladder-diseases",
      "conditionIds": [
        "gallbladder-diseases",
        "liver"
      ],
      "category": "Liver",
      "categorySlug": "liver",
      "generalMedicalRole": "Replaces toxic hydrophobic endogenous bile acids, stimulates biliary secretion, and dissolves radiolucent cholesterol gallstones by dispersing cholesterol into liquid crystals.",
      "dosageGuideline": "Adult: 8 mg to 10 mg/kg/day orally in 2 to 3 divided doses with meals and milk (typically 300 mg twice daily).",
      "brandNames": "Udiliv, Urso, Actigall, Ursokem, Ursocol",
      "safetyNote": "Effective only for radiolucent (non-calcified) cholesterol gallstones with functioning gallbladder. Safe long-term profile; occasional mild diarrhea.",
      "source": "EASL Clinical Practice Guidelines on Gallstones & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Udiliv",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Udiliv",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Udiliv/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_gallbladder_drotaverine_173",
      "activeIngredient": "Drotaverine hydrochloride",
      "medicineClass": "Selective Phosphodiesterase-4 (PDE-4) Inhibitor Antispasmodic",
      "condition": "Gallbladder Disease & Biliary Cholecystitis",
      "conditionId": "gallbladder-diseases",
      "conditionIds": [
        "gallbladder-diseases",
        "liver"
      ],
      "category": "Liver",
      "categorySlug": "liver",
      "generalMedicalRole": "Selectively inhibits PDE-4 in visceral smooth muscle, increasing cAMP to produce prompt biliary, renal, and gastrointestinal spasmolytic relief without atropine-like side effects.",
      "dosageGuideline": "Adult: 40 mg to 80 mg orally 2 to 3 times daily after meals. Pediatric (>6 yrs): 40 mg 2 times daily.",
      "brandNames": "Drotin, No-Spa, Baralgan-D",
      "safetyNote": "Contraindicated in severe hepatic, renal, or cardiac insufficiency. Free of anticholinergic side effects (dry mouth, blurred vision, urinary retention).",
      "source": "European Pharmacopoeia & Indian Pharmacopoeia Monograph",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Drotin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Drotin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Drotin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_obesity_semaglutide_174",
      "activeIngredient": "Semaglutide",
      "medicineClass": "GLP-1 Receptor Agonist (Incretin Mimetic)",
      "condition": "Obesity & Metabolic Adiposity Management",
      "conditionId": "obesity",
      "conditionIds": [
        "obesity",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Acts on hypothalamic appetite centers to enhance satiety, decrease cravings, and slow gastric emptying, producing significant sustained weight loss (15-20%).",
      "dosageGuideline": "Adult: Initiated at 0.25 mg SC weekly for 4 weeks; escalate monthly (0.5 mg, 1.0 mg, 1.7 mg) to maintenance 2.4 mg subcutaneously once weekly.",
      "brandNames": "Wegovy, Ozempic, Rybelsus (Oral)",
      "safetyNote": "Common GI side effects: nausea, vomiting, constipation; manage with dose titration. Boxed warning: contraindicated in medullary thyroid carcinoma or MEN-2 history.",
      "source": "FDA Approved Monograph & Endocrine Society Clinical Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Wegovy",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Wegovy",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Wegovy/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_obesity_orlistat_175",
      "activeIngredient": "Orlistat",
      "medicineClass": "Gastric & Pancreatic Lipase Inhibitor",
      "condition": "Obesity & Metabolic Adiposity Management",
      "conditionId": "obesity",
      "conditionIds": [
        "obesity",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Covalently bonds to active serine sites of gastric and pancreatic lipases, preventing dietary triglyceride hydrolysis and reducing fat absorption by 30%.",
      "dosageGuideline": "Adult: 120 mg capsule taken with water immediately before, during, or up to 1 hour after each main fat-containing meal (Max: 360 mg/day).",
      "brandNames": "Xenical, Obelit, Vyfat, Lipocut",
      "safetyNote": "GI adverse effects: steatorrhea, oily spotting, fecal urgency. Take daily multivitamin containing fat-soluble vitamins (A, D, E, K) at bedtime (>=2 hrs after orlistat).",
      "source": "WHO EML & Endocrine Society Obesity Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Xenical",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Xenical",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Xenical/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_pregnancy_labetalol_176",
      "activeIngredient": "Labetalol hydrochloride",
      "medicineClass": "Combined Alpha-1 and Non-Selective Beta Blocker",
      "condition": "Pregnancy-Induced Hypertension & Preeclampsia",
      "conditionId": "pregnancy-disorders",
      "conditionIds": [
        "pregnancy-disorders",
        "reproductive"
      ],
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "generalMedicalRole": "Lowers blood pressure by reducing systemic vascular resistance (alpha-1 blockade) without reflex tachycardia or compromising placental perfusion.",
      "dosageGuideline": "Adult (Pregnancy): 100 mg twice daily with food; titrated weekly in 100 mg increments up to 200 mg to 400 mg twice daily (Max: 2400 mg/day).",
      "brandNames": "Trandate, Gravidol, Lobet, Labil",
      "safetyNote": "First-line preferred antihypertensive in pregnancy. Avoid in maternal severe asthma, decompensated heart failure, or severe bradycardia.",
      "source": "ACOG Practice Bulletin on Gestational Hypertension & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Trandate",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Trandate",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Trandate/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_pregnancy_methyldopa_177",
      "activeIngredient": "Methyldopa",
      "medicineClass": "Centrally Acting Alpha-2 Adrenergic Agonist",
      "condition": "Pregnancy-Induced Hypertension & Preeclampsia",
      "conditionId": "pregnancy-disorders",
      "conditionIds": [
        "pregnancy-disorders",
        "reproductive"
      ],
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "generalMedicalRole": "Converted centrally to alpha-methylnorepinephrine, which stimulates inhibitory central alpha-2 receptors, decreasing sympathetic outflow to heart and vessels.",
      "dosageGuideline": "Adult (Pregnancy): 250 mg orally 2 to 3 times daily with food; titrated every 2 days up to 500 mg to 1000 mg 2 to 3 times daily (Max: 3000 mg/day).",
      "brandNames": "Aldomet, Alphadopa, Dopagyt",
      "safetyNote": "Extensively documented long-term fetal safety profile. Maternal sedation and dry mouth are common early in therapy. Monitor Coombs test and liver enzymes.",
      "source": "WHO Model List of Essential Medicines (EML) & ACOG",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Aldomet",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Aldomet",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Aldomet/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_pregnancy_doxylamine-pyridoxine_178",
      "activeIngredient": "Doxylamine succinate + Pyridoxine hydrochloride",
      "medicineClass": "H1 Antihistamine + Vitamin B6 Antiemetic Combination",
      "condition": "Pregnancy-Induced Hypertension & Preeclampsia",
      "conditionId": "pregnancy-disorders",
      "conditionIds": [
        "pregnancy-disorders",
        "reproductive"
      ],
      "category": "Reproductive",
      "categorySlug": "reproductive",
      "generalMedicalRole": "Synergistic central antiemetic action specifically targeting nausea and vomiting of pregnancy (morning sickness / hyperemesis gravidarum).",
      "dosageGuideline": "Adult (Pregnancy): 2 delayed-release tablets (10 mg doxylamine / 10 mg pyridoxine each) orally at bedtime on an empty stomach.",
      "brandNames": "Diclegis, Doxinate, Vomikind-P, Bonjesta",
      "safetyNote": "FDA Pregnancy Category A (highest proven pregnancy safety). May cause mild daytime drowsiness; avoid driving or operating heavy machinery.",
      "source": "ACOG Practice Bulletin: Nausea and Vomiting of Pregnancy",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Diclegis",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Diclegis",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Diclegis/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_nutritional_ascorbic-acid_179",
      "activeIngredient": "Ascorbic acid (Vitamin C)",
      "medicineClass": "Water-Soluble Micronutrient & Antioxidant",
      "condition": "Nutritional Deficiencies (Scurvy, Rickets, Malnutrition)",
      "conditionId": "nutritional-diseases",
      "conditionIds": [
        "nutritional-diseases",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Essential cofactor for prolyl and lysyl hydroxylases required for collagen biosynthesis, capillary endothelial strength, iron absorption, and wound repair.",
      "dosageGuideline": "Adult: Deficiency/Scurvy: 250 mg to 500 mg orally 2 times daily for 2 to 4 weeks; Maintenance/Supplementation: 100 mg to 250 mg daily.",
      "brandNames": "Limcee, Celin, Chewcee, Sukcee",
      "safetyNote": "High doses (>2000 mg/day) may cause osmotic diarrhea and increase calcium oxalate kidney stone formation in hyperoxaluric patients.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Limcee",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Limcee",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Limcee/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_nutritional_cholecalciferol_180",
      "activeIngredient": "Cholecalciferol (Vitamin D3)",
      "medicineClass": "Sterol Vitamin / Bone Mineralization Regulator",
      "condition": "Nutritional Deficiencies (Scurvy, Rickets, Malnutrition)",
      "conditionId": "nutritional-diseases",
      "conditionIds": [
        "nutritional-diseases",
        "endocrine"
      ],
      "category": "Endocrine",
      "categorySlug": "endocrine",
      "generalMedicalRole": "Hydroxylated to active calcitriol, enhancing intestinal calcium and phosphate absorption to treat rickets, osteomalacia, and severe hypocalcemia.",
      "dosageGuideline": "Adult: Deficiency: 60,000 IU orally once weekly with fat-containing meal for 8 weeks, followed by maintenance 60,000 IU once monthly.",
      "brandNames": "Calcirol, D3-Must 60K, Uprise-D3, Depura 60K",
      "safetyNote": "Avoid hypervitaminosis D: monitor serum calcium and 25(OH)D levels. Signs of toxicity include polyuria, polydipsia, nausea, and metastatic calcification.",
      "source": "Endocrine Society Clinical Practice Guidelines & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Calcirol",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Calcirol",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Calcirol/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_environmental_acetazolamide_181",
      "activeIngredient": "Acetazolamide",
      "medicineClass": "Carbonic Anhydrase Inhibitor / Acclimatization Agent",
      "condition": "Environmental & Altitude Illness (Heat Exhaustion & AMS)",
      "conditionId": "environmental-diseases",
      "conditionIds": [
        "environmental-diseases",
        "emergency-supportive"
      ],
      "category": "Emergency/supportive",
      "categorySlug": "emergency-supportive",
      "generalMedicalRole": "Inhibits renal carbonic anhydrase, causing bicarbonate diuresis and mild metabolic acidosis, which stimulates medullary hyperventilation and speeds altitude acclimatization.",
      "dosageGuideline": "Adult: 125 mg to 250 mg orally twice daily starting 24 hours prior to ascent above 2500m and continuing for 48 hours at maximum elevation.",
      "brandNames": "Diamox, Iopsparse, Avva",
      "safetyNote": "Sulfa derivative: contraindicated in severe sulfonamide allergy. Harmless paresthesias (tingling in fingers/toes) and alteration of taste for carbonated drinks are common.",
      "source": "Wilderness Medical Society Guidelines & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Diamox",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Diamox",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Diamox/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_rare_penicillamine_182",
      "activeIngredient": "Penicillamine",
      "medicineClass": "Heavy Metal Chelating Agent & DMARD",
      "condition": "Rare Diseases (Wilson's Disease & Myasthenia Gravis)",
      "conditionId": "rare-diseases",
      "conditionIds": [
        "rare-diseases",
        "emergency-supportive"
      ],
      "category": "Emergency/supportive",
      "categorySlug": "emergency-supportive",
      "generalMedicalRole": "Forms stable soluble cupripenicillamine chelates with toxic accumulated copper, accelerating urinary copper excretion in Wilson's hepatolenticular degeneration.",
      "dosageGuideline": "Adult: 750 mg to 1500 mg orally daily in 2 to 4 divided doses taken on an empty stomach at least 1 hour before or 2 hours after meals.",
      "brandNames": "Cuprimine, Artamin, Distamine",
      "safetyNote": "Requires pyridoxine (Vitamin B6 25-50 mg/day) supplementation. Monitor complete blood count and urinalysis weekly (risk of bone marrow suppression and nephrotic syndrome).",
      "source": "WHO Model List of Essential Medicines & EASL Wilson's Disease Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Cuprimine",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Cuprimine",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Cuprimine/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_rare_pyridostigmine_183",
      "activeIngredient": "Pyridostigmine bromide",
      "medicineClass": "Reversible Acetylcholinesterase Inhibitor",
      "condition": "Rare Diseases (Wilson's Disease & Myasthenia Gravis)",
      "conditionId": "rare-diseases",
      "conditionIds": [
        "rare-diseases",
        "emergency-supportive"
      ],
      "category": "Emergency/supportive",
      "categorySlug": "emergency-supportive",
      "generalMedicalRole": "Reversibly inhibits acetylcholinesterase at the neuromuscular junction, prolonging acetylcholine action to improve skeletal muscle strength in myasthenia gravis.",
      "dosageGuideline": "Adult: 60 mg orally every 4 to 6 hours while awake, adjusted based on response (typical maintenance: 300 to 600 mg daily in divided doses).",
      "brandNames": "Mestinon, Gravitor, Pyristig",
      "safetyNote": "Overdose causes cholinergic crisis (excessive salivation, abdominal cramps, diarrhea, bradycardia, muscle fasciculations). Distinguish from myasthenic weakness.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Mestinon",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Mestinon",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Mestinon/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_oncology_tamoxifen_184",
      "activeIngredient": "Tamoxifen citrate",
      "medicineClass": "Selective Estrogen Receptor Modulator (SERM)",
      "condition": "Breast cancer",
      "conditionId": "breast-cancer",
      "conditionIds": [
        "breast-cancer",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "Competitively binds to estrogen receptors on breast carcinoma cells, inhibiting transcription and proliferation in hormone receptor-positive (ER+) breast tumors.",
      "dosageGuideline": "Adult: 20 mg tablet orally once daily with or without food for a duration of 5 to 10 years as adjuvant endocrine therapy.",
      "brandNames": "Nolvadex, Tamodex, Mamofen, Cytotam",
      "safetyNote": "Increased risk of thromboembolism (DVT, PE) and endometrial hyperplasia/cancer. Promptly evaluate abnormal vaginal bleeding.",
      "source": "NCCN Breast Cancer Guidelines & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Nolvadex",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Nolvadex",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Nolvadex/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_oncology_trastuzumab_185",
      "activeIngredient": "Trastuzumab",
      "medicineClass": "HER2 Receptor Targeted Humanized Monoclonal Antibody",
      "condition": "Breast cancer",
      "conditionId": "breast-cancer",
      "conditionIds": [
        "breast-cancer",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "Selectively targets the extracellular domain of HER2/neu tyrosine kinase receptor, arresting cell cycle progression and mediating antibody-dependent cellular cytotoxicity.",
      "dosageGuideline": "Adult: IV Infusion 8 mg/kg loading over 90 mins, then 6 mg/kg maintenance every 3 weeks over 30 mins (or subcutaneous fixed dose 600 mg every 3 weeks).",
      "brandNames": "Herceptin, Vivitra, CanMab, Hertraz",
      "safetyNote": "Cardiotoxicity risk: may cause left ventricular dysfunction and congestive heart failure. Assess baseline and periodic echocardiogram (LVEF).",
      "source": "WHO Model List of Essential Medicines (EML) & ASCO",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Herceptin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Herceptin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Herceptin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_oncology_osimertinib_186",
      "activeIngredient": "Osimertinib mesylate",
      "medicineClass": "Third-Generation Mutant-Selective EGFR Tyrosine Kinase Inhibitor",
      "condition": "Lung cancer",
      "conditionId": "lung-cancer",
      "conditionIds": [
        "lung-cancer",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "Irreversibly binds EGFR with sensitizing (exon 19 del, L858R) and resistance (T790M) mutations, effectively crossing blood-brain barrier for non-small cell lung cancer.",
      "dosageGuideline": "Adult: 80 mg tablet orally once daily with or without food until disease progression or unacceptable toxicity.",
      "brandNames": "Tagrisso, Osicent, Osimert",
      "safetyNote": "Monitor for interstitial lung disease (pneumonitis), QT prolongation, and cardiomyopathy. Discontinue immediately if acute pneumonitis suspected.",
      "source": "NCCN Non-Small Cell Lung Cancer Guidelines & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Tagrisso",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Tagrisso",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Tagrisso/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_oncology_enzalutamide_187",
      "activeIngredient": "Enzalutamide",
      "medicineClass": "Second-Generation Non-Steroidal Androgen Receptor Inhibitor",
      "condition": "Prostate cancer",
      "conditionId": "prostate-cancer",
      "conditionIds": [
        "prostate-cancer",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "Competitively inhibits androgen binding, nuclear translocation, and DNA-binding in androgen-dependent and castration-resistant metastatic prostate carcinoma.",
      "dosageGuideline": "Adult: 160 mg (four 40 mg capsules or two 80 mg tablets) orally once daily with or without food.",
      "brandNames": "Xtandi, Enzamide, Bdenza, Glenza",
      "safetyNote": "Lowers seizure threshold: caution in history of seizures or stroke. Fatigue, hypertension, and hot flashes are common.",
      "source": "NCCN Prostate Cancer Guidelines & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Xtandi",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Xtandi",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Xtandi/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_oncology_capecitabine_188",
      "activeIngredient": "Capecitabine",
      "medicineClass": "Oral Fluoropyrimidine Carbamate (5-FU Prodrug)",
      "condition": "Colorectal cancer",
      "conditionId": "colorectal-cancer",
      "conditionIds": [
        "colorectal-cancer",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "Selectively converted to 5-fluorouracil within tumor cells by thymidine phosphorylase, disrupting thymidylate synthase and inhibiting tumor DNA/RNA synthesis.",
      "dosageGuideline": "Adult: 1250 mg/m2 orally twice daily (morning and evening within 30 mins of food) for 14 days followed by 7-day rest period in 21-day cycles.",
      "brandNames": "Xeloda, Capegard, Distocide, Capanex",
      "safetyNote": "Hand-Foot Syndrome (palmar-plantar erythrodysesthesia) and diarrhea are dose-limiting. Co-administration with warfarin dramatically increases INR / bleeding.",
      "source": "WHO Model List of Essential Medicines & ASCO Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Xeloda",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Xeloda",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Xeloda/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_oncology_imatinib_189",
      "activeIngredient": "Imatinib mesylate",
      "medicineClass": "Bcr-Abl Tyrosine Kinase Inhibitor",
      "condition": "Leukemia",
      "conditionId": "leukemia",
      "conditionIds": [
        "leukemia",
        "cancer"
      ],
      "category": "Cancer",
      "categorySlug": "cancer",
      "generalMedicalRole": "Selectively inhibits the constitutively active Bcr-Abl tyrosine kinase fusion protein produced by Philadelphia chromosome (Ph+) in Chronic Myeloid Leukemia (CML).",
      "dosageGuideline": "Adult: 400 mg once daily orally with a large meal and large glass of water; may increase to 600 mg to 800 mg daily for accelerated phase or blast crisis.",
      "brandNames": "Gleevec, Veenat, Glivec, Imanib",
      "safetyNote": "Fluid retention (periorbital and peripheral edema), muscle cramps, and myelosuppression (neutropenia, thrombocytopenia) require regular CBC monitoring.",
      "source": "WHO Model List of Essential Medicines (EML) & NCCN",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Gleevec",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Gleevec",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Gleevec/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_anthelmintic_albendazole_190",
      "activeIngredient": "Albendazole",
      "medicineClass": "Benzimidazole Broad-Spectrum Anthelmintic",
      "condition": "Parasitic infections",
      "conditionId": "scabies",
      "conditionIds": [
        "scabies",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Binds to beta-tubulin, inhibiting microtubule polymerization and glucose uptake in helminths, depleting energy stores across nematodes, cestodes, and trematodes.",
      "dosageGuideline": "Adult: Intestinal worms: 400 mg chewable tablet single dose with fatty meal; Hydatid/Neurocysticercosis: 400 mg twice daily with meals for 28 days.",
      "brandNames": "Zentel, Bandy, Noworm, Alminth",
      "safetyNote": "Contraindicated in pregnancy (teratogenic in animal studies). Monitor liver transaminases and CBC during prolonged high-dose therapy.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Zentel",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Zentel",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Zentel/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_anthelmintic_ivermectin_191",
      "activeIngredient": "Ivermectin",
      "medicineClass": "Macrocyclic Lactone Antiparasitic",
      "condition": "Scabies",
      "conditionId": "scabies",
      "conditionIds": [
        "scabies",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Binds glutamate-gated chloride ion channels in invertebrate nerve and muscle cells, increasing chloride permeability and leading to parasite paralysis and death.",
      "dosageGuideline": "Adult: 200 mcg/kg single oral dose taken with water on an empty stomach; repeated after 7 to 14 days for crusted scabies.",
      "brandNames": "Stromectol, Ivecop, Vermact, Scabover",
      "safetyNote": "Do not give to children <15 kg or pregnant women. Mazzotti-like reaction may occur in heavy onchocerciasis microfilarial load.",
      "source": "WHO Model List of Essential Medicines (EML)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Stromectol",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Stromectol",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Stromectol/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_antifungal_voriconazole_192",
      "activeIngredient": "Voriconazole",
      "medicineClass": "Second-Generation Triazole Broad-Spectrum Antifungal",
      "condition": "Fungal skin infection",
      "conditionId": "fungal-skin-infection",
      "conditionIds": [
        "fungal-skin-infection",
        "skin"
      ],
      "category": "Skin",
      "categorySlug": "skin",
      "generalMedicalRole": "Inhibits fungal cytochrome P450-dependent 14-alpha-sterol demethylase, stopping ergosterol synthesis in invasive Aspergillus, Candida, and refractory mycoses.",
      "dosageGuideline": "Adult: Loading dose: 400 mg (or 6 mg/kg IV) every 12 hours for first 24 hours; Maintenance: 200 mg orally twice daily at least 1 hour before or after meals.",
      "brandNames": "Vfend, Voritrol, Vorier, Vosita",
      "safetyNote": "Transient visual disturbances (photopsia, altered color perception) occur in 30% of patients. Potent CYP inhibitor; extensive drug interactions.",
      "source": "IDSA Guidelines & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Vfend",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Vfend",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Vfend/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_tb_bedaquiline_193",
      "activeIngredient": "Bedaquiline fumarate",
      "medicineClass": "Diarylquinoline Antimycobacterial",
      "condition": "Tuberculosis",
      "conditionId": "tuberculosis",
      "conditionIds": [
        "tuberculosis",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Specifically inhibits the proton pump of mycobacterial ATP synthase, cutting energy generation in multidrug-resistant (MDR) and extensively drug-resistant (XDR) M. tuberculosis.",
      "dosageGuideline": "Adult: 400 mg orally once daily for 2 weeks with food, followed by 200 mg 3 times weekly (minimum 48 hrs between doses) for 22 weeks in combination regimen.",
      "brandNames": "Sirturo",
      "safetyNote": "QTc interval prolongation: baseline and monthly ECG monitoring required. Must only be used in specialized DOTS MDR-TB programs; never as monotherapy.",
      "source": "WHO Consolidated Guidelines on Drug-Resistant Tuberculosis & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Sirturo",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Sirturo",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Sirturo/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hiv_biktarvy_194",
      "activeIngredient": "Bictegravir + Emtricitabine + Tenofovir alafenamide",
      "medicineClass": "Single-Tablet Complete Antiretroviral Regimen (INSTI + Dual NRTI)",
      "condition": "HIV infection",
      "conditionId": "hiv-infection",
      "conditionIds": [
        "hiv-infection",
        "infectious"
      ],
      "category": "Infectious",
      "categorySlug": "infectious",
      "generalMedicalRole": "Inhibits HIV-1 integrase (bictegravir) and viral reverse transcriptase (emtricitabine and tenofovir), halting viral replication and suppressing viral load to undetectable levels.",
      "dosageGuideline": "Adult: One fixed-dose combination tablet (50 mg bictegravir / 200 mg emtricitabine / 25 mg TAF) orally once daily with or without food.",
      "brandNames": "Biktarvy, Tafero-EM (component)",
      "safetyNote": "High barrier to resistance. Test for Hepatitis B coinfection prior to initiation (severe exacerbations of hepatitis may occur if discontinued).",
      "source": "DHHS HIV Treatment Guidelines & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Biktarvy",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Biktarvy",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Biktarvy/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_autoimmune_hydroxychloroquine_195",
      "activeIngredient": "Hydroxychloroquine sulfate",
      "medicineClass": "Antimalarial / Disease-Modifying Antirheumatic Drug (DMARD)",
      "condition": "Systemic lupus erythematosus",
      "conditionId": "systemic-lupus-erythematosus",
      "conditionIds": [
        "systemic-lupus-erythematosus",
        "allergy-immune"
      ],
      "category": "Allergy/immune",
      "categorySlug": "allergy-immune",
      "generalMedicalRole": "Raises endosomal and lysosomal pH in antigen-presenting cells, reducing toll-like receptor activation, cytokine production, and preventing lupus flares and thrombosis.",
      "dosageGuideline": "Adult: 200 mg to 400 mg orally once daily with food or milk (Maximum safe ceiling: 5.0 mg/kg actual body weight/day to prevent retinal toxicity).",
      "brandNames": "Plaquenil, HCQS 200/400, Hydroquin",
      "safetyNote": "Baseline and annual ophthalmologic screening (fundus autofluorescence and visual field test) required after 5 years of therapy to monitor retinal maculopathy.",
      "source": "ACR Guidelines for Lupus & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Plaquenil",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Plaquenil",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Plaquenil/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_autoimmune_methotrexate_196",
      "activeIngredient": "Methotrexate",
      "medicineClass": "Antimetabolite / Folate Antagonist Anchor DMARD",
      "condition": "Rheumatoid arthritis",
      "conditionId": "rheumatoid-arthritis",
      "conditionIds": [
        "rheumatoid-arthritis",
        "musculoskeletal"
      ],
      "category": "Musculoskeletal",
      "categorySlug": "musculoskeletal",
      "generalMedicalRole": "Inhibits dihydrofolate reductase and aminoimidazole carboxamide ribonucleotide transformylase, leading to extracellular adenosine release and potent anti-inflammatory immunosuppression.",
      "dosageGuideline": "Adult: 7.5 mg to 25 mg taken ONCE WEEKLY (never daily) on the same day each week, supplemented with folic acid 5 mg weekly on an alternate day.",
      "brandNames": "Trexall, Folitrax, Imutrex, Rheumatrex",
      "safetyNote": "Fatal toxicity if taken daily instead of weekly! Check baseline CBC, liver function, and chest X-ray. Strictly teratogenic; contraindicated in pregnancy.",
      "source": "ACR / EULAR Rheumatoid Arthritis Guidelines & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Trexall",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Trexall",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Trexall/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_dermatology_tacrolimus-topical_197",
      "activeIngredient": "Tacrolimus (topical ointment 0.03% / 0.1%)",
      "medicineClass": "Topical Calcineurin Inhibitor (Steroid-Free Immunomodulator)",
      "condition": "Vitiligo",
      "conditionId": "vitiligo",
      "conditionIds": [
        "vitiligo",
        "skin"
      ],
      "category": "Skin",
      "categorySlug": "skin",
      "generalMedicalRole": "Inhibits T-lymphocyte calcineurin activation and IL-2 synthesis, reducing cytotoxic destruction of melanocytes and promoting repigmentation in vitiligo and facial eczema.",
      "dosageGuideline": "Adult: Apply a thin layer of 0.1% ointment to affected depigmented areas twice daily; gently rub in completely.",
      "brandNames": "Protopic, Tacroz, Takfa, Tacvido",
      "safetyNote": "Does not cause skin thinning or atrophy (unlike topical corticosteroids). Mild transient burning sensation and erythema common during first few days.",
      "source": "British Association of Dermatologists (BAD) Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Protopic",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Protopic",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Protopic/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_acne_tretinoin_198",
      "activeIngredient": "Tretinoin (all-trans retinoic acid 0.025% / 0.05%)",
      "medicineClass": "Topical Retinoid / Retinoic Acid Receptor (RAR) Agonist",
      "condition": "Acne",
      "conditionId": "acne",
      "conditionIds": [
        "acne",
        "skin"
      ],
      "category": "Skin",
      "categorySlug": "skin",
      "generalMedicalRole": "Binds to RAR nuclear receptors, accelerating epidermal cell turnover, expelling microcomedones, preventing follicular hyperkeratinization, and reducing acne lesions.",
      "dosageGuideline": "Adult: Apply a pea-sized amount to clean, completely dry face once daily at bedtime; start every other night to improve tolerance.",
      "brandNames": "Retin-A, A-Ret Gel, Tretiheal, Revize",
      "safetyNote": "Increases photosensitivity; mandatory daytime sunscreen use. Initial retinoid purging (flaking, dryness, worsening of acne) expected in weeks 2-4. Avoid in pregnancy.",
      "source": "AAD Acne Guidelines & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Retin-A",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Retin-A",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Retin-A/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_hematology_ferrous-ascorbate_199",
      "activeIngredient": "Ferrous ascorbate + Folic acid",
      "medicineClass": "Hematinic Iron Preparation with Reducing Agent",
      "condition": "Iron-deficiency anemia",
      "conditionId": "iron-deficiency-anemia",
      "conditionIds": [
        "iron-deficiency-anemia",
        "hematology"
      ],
      "category": "Hematology",
      "categorySlug": "hematology",
      "generalMedicalRole": "Ascorbate maintains iron in soluble bivalent ferrous (Fe2+) state for optimal duodenal mucosal absorption, promoting rapid hemoglobin synthesis.",
      "dosageGuideline": "Adult: One tablet (providing 100 mg elemental iron and 1.5 mg folic acid) orally once to twice daily between meals with water or citrus juice.",
      "brandNames": "Orofer-XT, Livogen, Fefol, Autrin",
      "safetyNote": "Constipation, dark tarry stools, and mild nausea are normal. Do not take within 2 hours of dairy, antacids, or tea/coffee.",
      "source": "WHO Guidelines on Iron Supplementation",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Orofer-XT",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Orofer-XT",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Orofer-XT/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_eye_latanoprost_200",
      "activeIngredient": "Latanoprost ophthalmic 0.005%",
      "medicineClass": "Prostaglandin F2-alpha Analogue",
      "condition": "Glaucoma",
      "conditionId": "glaucoma",
      "conditionIds": [
        "glaucoma",
        "eye"
      ],
      "category": "Eye",
      "categorySlug": "eye",
      "generalMedicalRole": "Selectively stimulates prostanoid FP receptors, enhancing uveoscleral outflow of aqueous humor to significantly lower intraocular pressure (IOP by 25-35%).",
      "dosageGuideline": "Adult: Instill one drop into the affected eye(s) once daily in the evening. More frequent dosing decreases IOP-lowering efficacy.",
      "brandNames": "Xalatan, Latoprost, 9PM Drops, Lacoma",
      "safetyNote": "May cause permanent gradual darkening of iris pigmentation (hazel/brown) and reversible lengthening, thickening, and darkening of eyelashes.",
      "source": "AAO Preferred Practice Pattern for Glaucoma & WHO EML",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Xalatan",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Xalatan",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Xalatan/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_gerd_pantoprazole_201",
      "activeIngredient": "Pantoprazole Sodium (Pantoprazole 40mg)",
      "medicineClass": "Proton Pump Inhibitor (PPI)",
      "condition": "Gastroesophageal reflux disease (GERD)",
      "conditionId": "gerd",
      "conditionIds": [
        "gerd",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Irreversibly inhibits gastric H+/K+-ATPase proton pumps on parietal cell apical membranes, profoundly suppressing basal and stimulated acid production for rapid heartburn relief and mucosal healing.",
      "dosageGuideline": "Adult: 40 mg once daily taken 30-60 minutes before breakfast with water (Max: 80 mg/day for severe erosive esophagitis or Zollinger-Ellison syndrome).",
      "brandNames": "Pan 40, Pantocid, Pantodac, Protonix, Pantosec",
      "safetyNote": "Swallow tablet whole; do not crush or chew. Long-term use (>1 year) requires monitoring for hypomagnesemia, vitamin B12 deficiency, and bone fracture risk.",
      "source": "WHO Model List of Essential Medicines (EML) & British National Formulary (BNF)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Pan%2040",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Pan%2040",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Pan%2040/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_stomach-pain_pantoprazole-domperidone_202",
      "activeIngredient": "Pantoprazole + Domperidone SR",
      "medicineClass": "Proton Pump Inhibitor + Prokinetic Antiemetic",
      "condition": "Stomach Pain, Gastritis & Abdominal Cramps",
      "conditionId": "stomach-pain",
      "conditionIds": [
        "stomach-pain",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Combines 24-hour gastric acid suppression with peripheral dopamine D2 receptor blockade to enhance lower esophageal sphincter tone, accelerate gastric emptying, and abolish postprandial nausea, acid reflux, and bloating.",
      "dosageGuideline": "Adult: 1 capsule (Pantoprazole 40 mg + Domperidone 30 mg SR) once daily in the morning 30-60 minutes before breakfast.",
      "brandNames": "Pan-D, Pantocid-D, Dompan-SR, Pantodac-DSR, Pantakind-D",
      "safetyNote": "Contraindicated in patients with known QT prolongation or severe cardiac arrhythmias. Take on an empty stomach.",
      "source": "Clinical Gastroenterology Formularies",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Pan-D",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Pan-D",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Pan-D/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_stomach-pain_ranitidine_203",
      "activeIngredient": "Ranitidine Hydrochloride (Rantac 150mg / 300mg)",
      "medicineClass": "Histamine H2-Receptor Antagonist (H2RA)",
      "condition": "Stomach Pain, Gastritis & Abdominal Cramps",
      "conditionId": "stomach-pain",
      "conditionIds": [
        "stomach-pain",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Competitively blocks histamine H2 receptors on gastric parietal cells, significantly reducing basal, nocturnal, and food-stimulated gastric acid and pepsin secretion for rapid stomach pain and heartburn relief.",
      "dosageGuideline": "Adult: 150 mg twice daily (morning and bedtime) or 300 mg once daily at bedtime with a glass of water.",
      "brandNames": "Rantac 150, Rantac 300, Zinetac, Zantac, Aciloc 150",
      "safetyNote": "Dose reduction required in moderate-to-severe renal impairment. May mask symptoms of gastric malignancy.",
      "source": "WHO Model List of Essential Medicines & British National Formulary (BNF)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Rantac%20150",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Rantac%20150",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Rantac%20150/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_sore-throat_amoxicillin-clavulanate_204",
      "activeIngredient": "Amoxicillin + Potassium Clavulanate (Augmentin / Augmentine 625mg)",
      "medicineClass": "Broad-Spectrum Aminopenicillin + Beta-Lactamase Inhibitor",
      "condition": "Sore Throat, Pharyngitis & Tonsillitis",
      "conditionId": "sore-throat",
      "conditionIds": [
        "sore-throat",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Amoxicillin inhibits bacterial peptidoglycan cell wall synthesis, while clavulanate irreversibly inactivates beta-lactamase enzymes, restoring high bactericidal activity against penicillinase-producing pathogens in severe tonsillopharyngitis and respiratory infections.",
      "dosageGuideline": "Adult: 625 mg (500/125) orally 2 to 3 times daily (every 8 to 12 hours) with the start of a meal to optimize absorption and reduce GI adverse effects. Pediatric: 30-45 mg/kg/day amoxicillin equivalent divided every 8-12 hrs.",
      "brandNames": "Augmentin 625, Augmentine, Clavam 625, Moxikind-CV, Amoxyclav, Sensiclav",
      "safetyNote": "Contraindicated in severe immediate penicillin allergy and history of amoxicillin/clavulanate-associated cholestatic jaundice. Complete full prescribed course.",
      "source": "WHO Model List of Essential Medicines (EML) & IDSA Treatment Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Augmentin%20625",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Augmentin%20625",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Augmentin%20625/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_diarrhea_ors_205",
      "activeIngredient": "Oral Rehydration Salts (Electral ORS)",
      "medicineClass": "Oral Electrolyte & Glucose Replacement Formula",
      "condition": "Diarrhea (Loose Motions)",
      "conditionId": "diarrhea",
      "conditionIds": [
        "diarrhea",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Harnesses sodium-glucose intestinal cotransport mechanisms across brush-border epithelial cells to facilitate rapid water and electrolyte reabsorption, preventing hypovolemic dehydration in acute loose motions and diarrheal illness.",
      "dosageGuideline": "Adult: 200 to 400 mL after each watery stool (1-2 liters/day as needed). Pediatric: 10 mL/kg body weight after each loose stool (50-100 mL for infants under 2 years).",
      "brandNames": "Electral, ORS-L, Walyte, Enerzal ORS, Reliance ORS",
      "safetyNote": "Dissolve one sachet in exactly the recommended volume of clean potable water. Do not boil prepared solution. Discard unused portion after 24 hours.",
      "source": "WHO / UNICEF Guidelines on the Management of Diarrhoea",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Electral",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Electral",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Electral/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_diarrhea_zinc-sulfate_206",
      "activeIngredient": "Zinc Sulfate (Zinconia 20mg)",
      "medicineClass": "Essential Trace Micronutrient / Intestinal Epithelial Protectant",
      "condition": "Diarrhea (Loose Motions)",
      "conditionId": "diarrhea",
      "conditionIds": [
        "diarrhea",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Stimulates mucosal regeneration, repairs intestinal brush-border villous atrophy, enhances enterocyte immune clearance, and reduces diarrheal stool frequency, volume, and duration.",
      "dosageGuideline": "Pediatric (<6 months): 10 mg elemental zinc once daily for 10-14 days. Children (>=6 months) & Adults: 20 mg elemental zinc once daily for 10-14 days to reduce stool frequency and prevent recurrence.",
      "brandNames": "Zinconia, Zincat, Zinctec, Z-Zinc, Nutrizinc",
      "safetyNote": "Give with food to prevent mild gastric upset. Must be continued for the complete 10-14 day course even after acute diarrhea resolves.",
      "source": "WHO / UNICEF Essential Treatment Guidelines for Diarrhoea",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Zinconia",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Zinconia",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Zinconia/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_diarrhea_racecadotril_207",
      "activeIngredient": "Racecadotril (Redotil 100mg)",
      "medicineClass": "Intestinal Enkephalinase Inhibitor / Pure Antisecretory Antidiarrheal",
      "condition": "Diarrhea (Loose Motions)",
      "conditionId": "diarrhea",
      "conditionIds": [
        "diarrhea",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Selectively inhibits intestinal brush border enkephalinase, preventing degradation of endogenous enkephalins and decreasing hypersecretion of water and electrolytes into the gut lumen without causing secondary rebound constipation or delaying intestinal transit.",
      "dosageGuideline": "Adult: 100 mg orally 3 times daily before meals until normal bowel movements resume (Max: 7 days). Pediatric: 1.5 mg/kg 3 times daily as sachet dissolved in water or food.",
      "brandNames": "Redotil, Zedott, Enuff, Cadotril, Racotil",
      "safetyNote": "Does not replace fluid and electrolyte rehydration therapy with ORS. If bloody stool (dysentery) or high fever is present, evaluate for invasive bacterial enteritis.",
      "source": "European Society for Paediatric Gastroenterology & Hepatology (ESPGHAN) Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Redotil",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Redotil",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Redotil/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_diarrhea_ofloxacin-ornidazole_208",
      "activeIngredient": "Ofloxacin + Ornidazole (O2)",
      "medicineClass": "Fluoroquinolone + Nitroimidazole Dual Antimicrobial",
      "condition": "Diarrhea (Loose Motions)",
      "conditionId": "diarrhea",
      "conditionIds": [
        "diarrhea",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Provides synergistic bactericidal coverage by inhibiting bacterial topoisomerase II (DNA gyrase) via ofloxacin and generating toxic free radicals that disrupt anaerobic and protozoal DNA via ornidazole, eradicating mixed bacterial gastroenteritis and amoebic dysentery.",
      "dosageGuideline": "Adult: 1 tablet (Ofloxacin 200 mg + Ornidazole 500 mg) orally twice daily after meals for 3 to 5 days with plenty of water.",
      "brandNames": "O2, Zenflox-OZ, Zanocin-OZ, Ornof, Oflomac-OZ",
      "safetyNote": "Avoid alcohol consumption during therapy and for 48 hours afterward (disulfiram-like reaction liability). Causes metallic taste and mild nausea.",
      "source": "Clinical Infectious Diseases & Gastroenterology Formularies",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=O2",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/O2",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/O2/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_stomach-pain_dicyclomine-paracetamol_209",
      "activeIngredient": "Dicyclomine Hydrochloride + Paracetamol",
      "medicineClass": "Antispasmodic / Muscarinic Antagonist + Analgesic",
      "condition": "Stomach Pain, Gastritis & Abdominal Cramps",
      "conditionId": "stomach-pain",
      "conditionIds": [
        "stomach-pain",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Relieves visceral smooth muscle spasm by blocking acetylcholine at gastrointestinal muscarinic receptors, combined with central analgesic prostaglandin inhibition for fast relief of sharp stomach colic and abdominal cramps.",
      "dosageGuideline": "Adult: 1 tablet (Dicyclomine 20 mg + Paracetamol 500 mg) orally 2 to 3 times daily after meals as needed (Max: 4 tablets/24 hrs).",
      "brandNames": "Meftal-Spas, Spasmonil, Cyclopam, Colimex, Spas-Trancop",
      "safetyNote": "May cause dry mouth, blurred vision, and drowsiness. Contraindicated in narrow-angle glaucoma, myasthenia gravis, and severe urinary obstruction.",
      "source": "British National Formulary (BNF) & Clinical Pharmacology References",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Meftal-Spas",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Meftal-Spas",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Meftal-Spas/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_stomach-pain_drotaverine_210",
      "activeIngredient": "Drotaverine Hydrochloride",
      "medicineClass": "Isoquinoline Phosphodiesterase-4 (PDE-4) Inhibitor Antispasmodic",
      "condition": "Stomach Pain, Gastritis & Abdominal Cramps",
      "conditionId": "stomach-pain",
      "conditionIds": [
        "stomach-pain",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Selectively inhibits phosphodiesterase-4 (PDE-4) enzyme, increasing intracellular cAMP levels and relaxing smooth muscle fibers across biliary, gastrointestinal, and ureteral tracts without anticholinergic side effects (no dry mouth or vision blurring).",
      "dosageGuideline": "Adult: 40 mg to 80 mg orally 2 to 3 times daily after food (Max: 240 mg/day). Pediatric (1-6 yrs): 20 mg 2-3 times daily; (>6 yrs): 40 mg 2-3 times daily.",
      "brandNames": "Drotin, Drotikind, No-Spa, Din, Dotra",
      "safetyNote": "Caution in patients with severe hepatic, renal, or cardiac insufficiency. Free of anticholinergic side effects.",
      "source": "International Pharmacopoeia & Gastroenterology Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Drotin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Drotin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Drotin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_cough_dextromethorphan-chlorpheniramine_211",
      "activeIngredient": "Dextromethorphan Hydrobromide + Chlorpheniramine Maleate",
      "medicineClass": "Centrally-Acting Antitussive + First-Generation Antihistamine",
      "condition": "Cough (Acute, Dry & Productive Chesty Cough)",
      "conditionId": "cough",
      "conditionIds": [
        "cough",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Suppresses medullary cough center threshold via dextromethorphan while chlorpheniramine blocks H1 histamine receptors to dry excessive secretions and relieve post-nasal drip, abolishing irritating non-productive dry cough.",
      "dosageGuideline": "Adult: 10 mL (providing 10-15 mg Dextromethorphan / 2-4 mg Chlorpheniramine) orally every 6 to 8 hours as needed (Max: 40 mL/24 hrs).",
      "brandNames": "Benadryl DR, Ascoril D, Chericof, Corex DX, Zeet DX",
      "safetyNote": "Causes mild sedation and drowsiness; avoid driving or operating machinery. Do not combine with MAO inhibitors or heavy alcohol.",
      "source": "USP-NF & British National Formulary (BNF)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Benadryl%20DR",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Benadryl%20DR",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Benadryl%20DR/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_cough_ambroxol-levosalbutamol-guaifenesin_212",
      "activeIngredient": "Ambroxol + Levosalbutamol + Guaifenesin",
      "medicineClass": "Mucolytic + Selective Beta-2 Bronchodilator + Expectorant",
      "condition": "Cough (Acute, Dry & Productive Chesty Cough)",
      "conditionId": "cough",
      "conditionIds": [
        "cough",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Ambroxol depolymerizes mucopolysaccharide fibers to liquefy thick tenacious sputum; levosalbutamol relaxes bronchial smooth muscle to open narrowed airways; and guaifenesin stimulates bronchial secretory glands to facilitate effortless mucus expectoration.",
      "dosageGuideline": "Adult: 5 mL to 10 mL (providing Ambroxol 30mg / Levosalbutamol 1mg / Guaifenesin 50mg per 5mL) orally 3 times daily with a full glass of warm water.",
      "brandNames": "Ascoril LS, Grilinctus-LS, Bro-Zedex, Macbery LS, Ambrodil-LX",
      "safetyNote": "May cause mild tremors, palpitations, or tachycardia due to beta-2 adrenergic stimulation. Drink plenty of warm fluids.",
      "source": "Clinical Respiratory Guidelines & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Ascoril%20LS",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Ascoril%20LS",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Ascoril%20LS/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_sore-throat_povidone-iodine_213",
      "activeIngredient": "Povidone-Iodine 2% w/v Germicide Gargle",
      "medicineClass": "Broad-Spectrum Antiseptic & Virucidal Oral Gargle",
      "condition": "Sore Throat, Pharyngitis & Tonsillitis",
      "conditionId": "sore-throat",
      "conditionIds": [
        "sore-throat",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Releases free elemental iodine to penetrate and oxidize microbial cellular proteins and enzymes, rapidly killing 99.9% of bacteria, viruses, and fungi within 30 seconds to reduce oropharyngeal viral load and heal inflamed throat tissue.",
      "dosageGuideline": "Adult & Children >=6 yrs: Dilute with an equal volume of warm water (1:1 ratio). Gargle and rinse around mouth and throat for 30 seconds, then spit out; repeat 3 to 4 times daily (Do NOT swallow).",
      "brandNames": "Betadine Gargle 2%, Wokadine Gargle, Cipladine Gargle, Povikind",
      "safetyNote": "Strictly for oropharyngeal gargling; do not swallow. Contraindicated in patients with known iodine hypersensitivity or active thyroid disorders.",
      "source": "British National Formulary (BNF) & International Otorhinolaryngology Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Betadine%20Gargle%202%25",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Betadine%20Gargle%202%25",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Betadine%20Gargle%202%25/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_sore-throat_flurbiprofen_214",
      "activeIngredient": "Flurbiprofen 8.75 mg Throat Lozenges",
      "medicineClass": "Non-Steroidal Anti-Inflammatory Drug (NSAID) / Local Pharyngeal Analgesic",
      "condition": "Sore Throat, Pharyngitis & Tonsillitis",
      "conditionId": "sore-throat",
      "conditionIds": [
        "sore-throat",
        "respiratory"
      ],
      "category": "Respiratory",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Inhibits cyclooxygenase (COX-1 and COX-2) enzymes locally in pharyngeal tissues, halting pain-producing prostaglandin synthesis to provide profound anti-inflammatory relief from swallowing pain (odynophagia) within 30 minutes.",
      "dosageGuideline": "Adult & Children >=12 yrs: Slowly suck one lozenge (8.75 mg) every 3 to 6 hours as needed, moving it around mouth (Max: 5 lozenges in 24 hours for up to 3 days).",
      "brandNames": "Strepsils Intensive, Strefen Lozenges, Flurzee, Flurofen",
      "safetyNote": "Do not chew or swallow whole. Caution in patients with active peptic ulceration, asthma, or concurrent systemic NSAID therapy.",
      "source": "British National Formulary (BNF) & MHRA Guidelines",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Strepsils%20Intensive",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Strepsils%20Intensive",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Strepsils%20Intensive/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_fever-pain_aceclofenac-paracetamol_215",
      "activeIngredient": "Aceclofenac + Paracetamol",
      "medicineClass": "Selective COX-2 Preferential NSAID + Central Analgesic/Antipyretic",
      "condition": "Fever & Generalized Body Pain",
      "conditionId": "fever-pain",
      "conditionIds": [
        "fever-pain",
        "pain"
      ],
      "category": "Pain",
      "categorySlug": "pain",
      "generalMedicalRole": "Dual-action synergistic formulation combining aceclofenac's peripheral inhibition of inflammatory cytokine-mediated prostaglandins (IL-1beta, TNF-alpha) with paracetamol's central hypothalamic thermoregulatory reset for rapid fever reduction and profound body pain relief.",
      "dosageGuideline": "Adult: 1 tablet (Aceclofenac 100 mg + Paracetamol 325 mg / 500 mg) orally twice daily after meals with a full glass of water.",
      "brandNames": "Zerodol-P, Hifenac-P, Aceclo Plus, Dolokind Plus",
      "safetyNote": "Always administer with or after food to minimize dyspepsia. Contraindicated in active gastrointestinal bleeding and severe renal or hepatic failure.",
      "source": "Clinical Pharmacology Formularies & National Essential Medicine Formularies",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Zerodol-P",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Zerodol-P",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Zerodol-P/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_fever-pain_ibuprofen-paracetamol_216",
      "activeIngredient": "Ibuprofen + Paracetamol",
      "medicineClass": "Dual Mechanism NSAID + Antipyretic Analgesic",
      "condition": "Fever & Generalized Body Pain",
      "conditionId": "fever-pain",
      "conditionIds": [
        "fever-pain",
        "pain"
      ],
      "category": "Pain",
      "categorySlug": "pain",
      "generalMedicalRole": "Combines peripheral anti-inflammatory cyclooxygenase inhibition with central antipyresis, demonstrating superior efficacy over monotherapy in controlling stubborn high fever, severe dental pain, and acute inflammatory muscular body ache.",
      "dosageGuideline": "Adult: 1 tablet (Ibuprofen 400 mg + Paracetamol 325 mg) orally 2 to 3 times daily after food (Max: 3 tablets/24 hrs). Pediatric: Weight-based suspension as prescribed.",
      "brandNames": "Combiflam, Ibugesic Plus, Flexon, Brufen Plus",
      "safetyNote": "Take with food or milk. Avoid in patients with active peptic ulcer disease, aspirin-sensitive asthma, or during third trimester of pregnancy.",
      "source": "WHO Model List of Essential Medicines & British National Formulary (BNF)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Combiflam",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Combiflam",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Combiflam/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_fever-pain_paracetamol_217",
      "activeIngredient": "Paracetamol (Acetaminophen 650mg / 500mg)",
      "medicineClass": "Centrally-Acting Antipyretic & Analgesic",
      "condition": "Fever & Generalized Body Pain",
      "conditionId": "fever-pain",
      "conditionIds": [
        "fever-pain",
        "pain"
      ],
      "category": "Pain",
      "categorySlug": "pain",
      "generalMedicalRole": "Selectively inhibits central prostaglandin synthesis in the brain hypothalamus to reset the thermal setpoint, rapidly lowering high fever and relieving headache, malaise, and generalized muscular body ache.",
      "dosageGuideline": "Adult: 500 mg to 650 mg orally every 4 to 6 hours as needed with water (Maximum safe ceiling: 3000 mg to 4000 mg in 24 hours). Pediatric: 10 to 15 mg/kg per single dose every 4 to 6 hours.",
      "brandNames": "Dolo 650, Calpol 650, Crocin 650, Pacimol, Sumo L",
      "safetyNote": "Maximum safe adult ceiling is 4000 mg/day from all sources combined. Severe hepatotoxicity risk with chronic alcohol consumption or acute overdose. Monitor concurrent combination cold/cough medications.",
      "source": "WHO Model List of Essential Medicines (EML) & British National Formulary (BNF)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Dolo%20650",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Dolo%20650",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Dolo%20650/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_diarrhea_metronidazole_218",
      "activeIngredient": "Metronidazole (Metrogyl 400mg)",
      "medicineClass": "Nitroimidazole Antiprotozoal & Anaerobic Antimicrobial",
      "condition": "Diarrhea (Loose Motions)",
      "conditionId": "diarrhea",
      "conditionIds": [
        "diarrhea",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Generates cytotoxic intermediate radicals in anaerobic protozoa and bacteria that disrupt DNA helical structure, rapidly eradicating Entamoeba histolytica, Giardia lamblia, and anaerobic bacteria causing infectious loose motions, intestinal cramps, and amoebic dysentery.",
      "dosageGuideline": "Adult: 400 mg orally 3 times daily with or after meals for 5 to 7 days (or 800 mg 3 times daily for acute amoebic dysentery). Pediatric: 30 to 50 mg/kg/day divided into 3 equal doses.",
      "brandNames": "Metrogyl 400, Metrogyl 200, Flagyl 400, Aristogyl, Metron, Aldezole",
      "safetyNote": "Strictly avoid all alcohol consumption during therapy and for 48 hours afterward (severe disulfiram-like reaction with flushing, vomiting, and tachycardia). Causes characteristic metallic taste and harmless reddish-brown urine.",
      "source": "WHO Model List of Essential Medicines (EML) & British National Formulary (BNF)",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Metrogyl%20400",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Metrogyl%20400",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Metrogyl%20400/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_diarrhea_lactic-acid-bacillus_219",
      "activeIngredient": "Lactic Acid Bacillus (Sporlac - Probiotic)",
      "medicineClass": "Probiotic / Gut Microflora Restorative Biotherapeutic",
      "condition": "Diarrhea (Loose Motions)",
      "conditionId": "diarrhea",
      "conditionIds": [
        "diarrhea",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Germinates in the intestine to produce lactic acid, acetic acid, and antimicrobial bacteriocins, acidifying luminal pH to suppress dysbiotic enteropathogens, restoring healthy symbiotic gut microflora, and significantly reducing the frequency and duration of acute loose motions.",
      "dosageGuideline": "Adult: 1 to 2 tablets/capsules (60 to 120 million spores) orally 2 to 3 times daily after meals with water or milk. Pediatric: 1 sachet dissolved in lukewarm liquid 1 to 2 times daily.",
      "brandNames": "Sporlac, Sporlac-DS, Darolac, Vizylac, Bifilac, Lactogut, Bacigyl",
      "safetyNote": "Well-tolerated biotherapeutic. If prescribed alongside systemic antibiotics, separate dosing by at least 2 hours to avoid antibiotic inactivation of probiotic spores.",
      "source": "Indian Pharmacopoeia (IP) & Clinical Gastroenterology Formularies",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Sporlac",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Sporlac",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Sporlac/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "hkare_diarrhea_norfloxacin-tinidazole_220",
      "activeIngredient": "Norfloxacin + Tinidazole (Norflox-TZ)",
      "medicineClass": "Broad-Spectrum Fluoroquinolone + Nitroimidazole Dual Antimicrobial",
      "condition": "Diarrhea (Loose Motions)",
      "conditionId": "diarrhea",
      "conditionIds": [
        "diarrhea",
        "gastrointestinal"
      ],
      "category": "Gastrointestinal",
      "categorySlug": "gastrointestinal",
      "generalMedicalRole": "Dual synergistic bactericidal and antiprotozoal action combining norfloxacin's inhibition of bacterial DNA gyrase with tinidazole's free-radical mediated DNA destruction, treating mixed bacterial and protozoal gastroenteritis and infectious loose motions.",
      "dosageGuideline": "Adult: 1 tablet (Norfloxacin 400 mg + Tinidazole 600 mg) orally twice daily after meals with a full glass of water for 3 to 5 days.",
      "brandNames": "Norflox-TZ, Nor-T, Tiniba-N, Normaxin-TZ, Nor-Metrogyl, Angilox-TZ",
      "safetyNote": "Absolute alcohol abstinence mandatory during treatment and for 72 hours afterward (disulfiram-like reactions). Avoid aluminium/magnesium antacids within 2 hours. Common side effects: metallic taste, headache, and mild nausea.",
      "source": "Clinical Gastroenterology Guidelines & National Formulary",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Norflox-TZ",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Norflox-TZ",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Norflox-TZ/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_cefixime",
      "activeIngredient": "Cefixime Trihydrate",
      "medicineClass": "Third-Generation Oral Cephalosporin",
      "condition": "Uncomplicated lower urinary tract infections",
      "conditionId": "respiratory",
      "conditionIds": [
        "respiratory",
        "respiratory"
      ],
      "category": "Cephalosporin Antibacterial",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Bactericidal: Inhibits bacterial cell wall synthesis by binding to PBPs, highly stable against hydrolysis by many beta-lactamases produced by Gram-negative bacilli.",
      "dosageGuideline": "200 mg to 400 mg tablet",
      "brandNames": "Zifi 200, Taxim-O 200, Cef-O",
      "safetyNote": "Category B: Considered safe during pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Zifi%20200",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Zifi%20200",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Zifi%20200/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_azithromycin",
      "activeIngredient": "Azithromycin",
      "medicineClass": "Azalide / Macrolide Antibacterial",
      "condition": "Atypical community-acquired pneumonia (Mycoplasma/Chlamydophila)",
      "conditionId": "respiratory",
      "conditionIds": [
        "respiratory",
        "respiratory"
      ],
      "category": "Macrolide Antibiotic",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Bacteriostatic: Binds reversibly to the 50S ribosomal subunit of susceptible microorganisms, inhibiting transpeptidation and protein synthesis.",
      "dosageGuideline": "500 mg tablet",
      "brandNames": "Azithral 500, Azee 500, Zithromax",
      "safetyNote": "Category B: Safe in pregnancy when benefit outweighs risk.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Azithral%20500",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Azithral%20500",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Azithral%20500/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_amlodipine",
      "activeIngredient": "Amlodipine Besylate",
      "medicineClass": "Third-Generation Dihydropyridine CCB",
      "condition": "Essential hypertension (first-line in elderly and Black patients)",
      "conditionId": "chronic",
      "conditionIds": [
        "chronic",
        "chronic"
      ],
      "category": "Antihypertensive & Antianginal",
      "categorySlug": "chronic",
      "generalMedicalRole": "Inhibits transmembrane calcium influx into vascular smooth muscle and cardiac myocytes, producing systemic vasodilation.",
      "dosageGuideline": "5 mg tablet",
      "brandNames": "Amlong 5, Norvasc",
      "safetyNote": "Category C: Use only if safer alternatives unavailable.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Amlong%205",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Amlong%205",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Amlong%205/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_levothyroxine",
      "activeIngredient": "Levothyroxine Sodium (T4)",
      "medicineClass": "Synthetic L-Thyroxine Hormone",
      "condition": "Primary, secondary, and tertiary hypothyroidism",
      "conditionId": "chronic",
      "conditionIds": [
        "chronic",
        "chronic"
      ],
      "category": "Thyroid Hormone Replacement",
      "categorySlug": "chronic",
      "generalMedicalRole": "Identical to endogenous thyroxine. Converted peripherally to active T3, binding to nuclear receptors and restoring basal metabolic rate.",
      "dosageGuideline": "Approx 1.6 mcg/kg/day (typically 50-100 mcg)",
      "brandNames": "Thyronorm, Eltroxin",
      "safetyNote": "Category A: CRITICAL AND ESSENTIAL in pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Thyronorm",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Thyronorm",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Thyronorm/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_aceclofenac",
      "activeIngredient": "Aceclofenac",
      "medicineClass": "Phenylacetic acid derivative / Preferential COX-2 inhibitor",
      "condition": "Osteoarthritis, rheumatoid arthritis, and ankylosing spondylitis",
      "conditionId": "ortho",
      "conditionIds": [
        "ortho",
        "ortho"
      ],
      "category": "Analgesic & Anti-inflammatory",
      "categorySlug": "ortho",
      "generalMedicalRole": "Preferentially inhibits COX-2 enzyme with reduced gastrointestinal toxicity profile compared to traditional non-selective NSAIDs.",
      "dosageGuideline": "100 mg tablet",
      "brandNames": "Hifenac, Zerodol, Aceclo Plus",
      "safetyNote": "Avoid during pregnancy, especially 3rd trimester.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Hifenac",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Hifenac",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Hifenac/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_guaifenesin",
      "activeIngredient": "Guaifenesin",
      "medicineClass": "Propanediol Derivative / Expectorant",
      "condition": "Symptomatic relief of wet, productive cough with thick bronchial mucus in bronchitis and upper respiratory infections",
      "conditionId": "respiratory",
      "conditionIds": [
        "respiratory",
        "respiratory"
      ],
      "category": "Respiratory Expectorant",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Increases the output of thin respiratory tract secretions by reducing sputum surface tension and adhesiveness, facilitating ciliary clearance and productive expectoration.",
      "dosageGuideline": "200 mg to 400 mg (immediate release) or 600 mg (extended release)",
      "brandNames": "Mucinex, Grilinctus-BM, Ascoril",
      "safetyNote": "Category C: Safe during pregnancy when indicated; hydration first.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Mucinex",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Mucinex",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Mucinex/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_clotrimazole",
      "activeIngredient": "Clotrimazole",
      "medicineClass": "Synthetic Imidazole Derivative",
      "condition": "Tinea corporis (ringworm), Tinea cruris, Tinea pedis",
      "conditionId": "derm",
      "conditionIds": [
        "derm",
        "derm"
      ],
      "category": "Broad-Spectrum Topical Antifungal",
      "categorySlug": "derm",
      "generalMedicalRole": "Inhibits fungal lanosterol 14-alpha-demethylase, blocking ergosterol synthesis and disrupting fungal cell membrane integrity.",
      "dosageGuideline": "Apply thin layer covering lesion and 2cm surrounding skin",
      "brandNames": "Candid Cream / Powder, Canesten, Candid Mouth Paint",
      "safetyNote": "Category B: Safe for topical/vaginal use during pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Candid%20Cream%20%2F%20Powder",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Candid%20Cream%20%2F%20Powder",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Candid%20Cream%20%2F%20Powder/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_fexofenadine",
      "activeIngredient": "Fexofenadine Hydrochloride",
      "medicineClass": "Active Carboxylic Acid Metabolite of Terfenadine / H1 Antagonist",
      "condition": "Seasonal allergic rhinitis (sneezing, rhinorrhea, itchy nose)",
      "conditionId": "respiratory",
      "conditionIds": [
        "respiratory",
        "respiratory"
      ],
      "category": "Non-Sedating Second-Generation Antihistamine",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Truly non-sedating: Does not cross the blood-brain barrier. Highly selective peripheral H1-receptor antagonist without anticholinergic or alpha-adrenergic blocking effects.",
      "dosageGuideline": "120 mg once daily (rhinitis) or 180 mg once daily (urticaria)",
      "brandNames": "Allegra 120 / 180, Fexova 120, Allegra Suspension",
      "safetyNote": "Category C: Use in pregnancy only if potential benefit justifies fetal risk.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Allegra%20120%20%2F%20180",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Allegra%20120%20%2F%20180",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Allegra%20120%20%2F%20180/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_omeprazole",
      "activeIngredient": "Omeprazole Magnesium",
      "medicineClass": "Substituted Benzimidazole / PPI",
      "condition": "Duodenal and benign gastric ulcers",
      "conditionId": "gastro",
      "conditionIds": [
        "gastro",
        "gastro"
      ],
      "category": "Gastric Acid Inhibitor",
      "categorySlug": "gastro",
      "generalMedicalRole": "Inactivates the gastric H+/K+-ATPase enzyme system via disulfide bond covalent binding with cysteine residues, suppressing basal and stimulated acid production.",
      "dosageGuideline": "20 mg to 40 mg capsule",
      "brandNames": "Omez 20, Prilosec, Omecip",
      "safetyNote": "Category C: Extensive epidemiological data show no teratogenicity; safe when indicated.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Omez%2020",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Omez%2020",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Omez%2020/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_carboxymethylcellulose",
      "activeIngredient": "Carboxymethylcellulose Sodium (CMC)",
      "medicineClass": "High-Molecular-Weight Polysaccharide Polymer",
      "condition": "Temporary relief of burning, irritation, and discomfort due to dryness of the eye, digital screen fatigue, wind or sun exposure",
      "conditionId": "derm",
      "conditionIds": [
        "derm",
        "derm"
      ],
      "category": "Ocular Lubricant / Artificial Tears",
      "categorySlug": "derm",
      "generalMedicalRole": "Viscous polymer that binds to corneal and conjunctival epithelial cells, prolonging tear film breakup time and protecting ocular surface from mechanical friction.",
      "dosageGuideline": "1 to 2 drops in the affected eye(s)",
      "brandNames": "Refresh Tears 0.5%, Eco Tears",
      "safetyNote": "Safe during pregnancy and lactation.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Refresh%20Tears%200.5%25",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Refresh%20Tears%200.5%25",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Refresh%20Tears%200.5%25/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_famotidine",
      "activeIngredient": "Famotidine",
      "medicineClass": "Thiazole Derivative / Histamine H2-Receptor Antagonist",
      "condition": "Short-term treatment of active duodenal and gastric ulcers",
      "conditionId": "gastro",
      "conditionIds": [
        "gastro",
        "gastro"
      ],
      "category": "H2 Blocker / Antacid",
      "categorySlug": "gastro",
      "generalMedicalRole": "Competitive reversible inhibitor of histamine at gastric parietal cell H2 receptors, suppressing both daytime and nocturnal basal gastric acid volume and concentration.",
      "dosageGuideline": "20 mg to 40 mg tablet",
      "brandNames": "Famocid 20 / 40, Pepcid AC, Facid",
      "safetyNote": "Category B: Considered safe during pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Famocid%2020%20%2F%2040",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Famocid%2020%20%2F%2040",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Famocid%2020%20%2F%2040/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_diclofenac",
      "activeIngredient": "Diclofenac Sodium / Potassium",
      "medicineClass": "Phenylacetic acid derivative / NSAID",
      "condition": "Acute musculoskeletal injuries and soft tissue sprains",
      "conditionId": "pain-fever",
      "conditionIds": [
        "pain-fever",
        "pain-fever"
      ],
      "category": "Analgesic & Anti-inflammatory",
      "categorySlug": "pain-fever",
      "generalMedicalRole": "Potent inhibition of prostaglandin synthesis by COX-1 and COX-2 with secondary inhibition of arachidonic acid lipoxygenase pathway.",
      "dosageGuideline": "50 mg tablet or 75 mg SR tablet",
      "brandNames": "Voveran SR, Volini Gel, Dynapar AQ",
      "safetyNote": "Contraindicated in 3rd trimester.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Voveran%20SR",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Voveran%20SR",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Voveran%20SR/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_ondansetron",
      "activeIngredient": "Ondansetron Hydrochloride",
      "medicineClass": "Selective Serotonin 5-HT3 Receptor Antagonist",
      "condition": "Prevention and treatment of acute nausea and vomiting in gastroenteritis",
      "conditionId": "gastro",
      "conditionIds": [
        "gastro",
        "gastro"
      ],
      "category": "Antiemetic",
      "categorySlug": "gastro",
      "generalMedicalRole": "Selectively blocks peripheral 5-HT3 receptors on vagal afferents in the gut and centrally in the chemoreceptor trigger zone (CTZ) of the area postrema.",
      "dosageGuideline": "4 mg to 8 mg tablet",
      "brandNames": "Emeset 4, Zofran, Vomikind",
      "safetyNote": "Category B: First-line hospital antiemetic in hyperemesis gravidarum.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Emeset%204",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Emeset%204",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Emeset%204/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_glimepiride",
      "activeIngredient": "Glimepiride",
      "medicineClass": "Second/Third-Generation Sulfonylurea",
      "condition": "Adjunct to diet and exercise in Type 2 Diabetes Mellitus when metformin alone is insufficient",
      "conditionId": "chronic",
      "conditionIds": [
        "chronic",
        "chronic"
      ],
      "category": "Oral Hypoglycemic Agent",
      "categorySlug": "chronic",
      "generalMedicalRole": "Binds to SUR1 receptors on pancreatic beta-cell membranes, closing K-ATP channels, stimulating endogenous insulin exocytosis.",
      "dosageGuideline": "1 mg to 2 mg tablet",
      "brandNames": "Amaryl 1 / 2, Glimestar 1 / 2",
      "safetyNote": "Category C: Avoid in pregnancy; insulin is standard of care.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Amaryl%201%20%2F%202",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Amaryl%201%20%2F%202",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Amaryl%201%20%2F%202/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_ibuprofen",
      "activeIngredient": "Ibuprofen",
      "medicineClass": "Propionic acid derivative / Non-Selective NSAID",
      "condition": "Inflammatory pain (musculoskeletal strain, arthritis, dental pain)",
      "conditionId": "pain-fever",
      "conditionIds": [
        "pain-fever",
        "pain-fever"
      ],
      "category": "NSAID & Anti-inflammatory",
      "categorySlug": "pain-fever",
      "generalMedicalRole": "Inhibits cyclooxygenase enzymes COX-1 and COX-2, blocking peripheral synthesis of pro-inflammatory prostaglandins and thromboxane.",
      "dosageGuideline": "400 mg tablet",
      "brandNames": "Brufen, Ibugesic Plus, Advil",
      "safetyNote": "Contraindicated in 3rd trimester. Avoid in 1st/2nd trimester unless physician-prescribed.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Brufen",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Brufen",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Brufen/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_metronidazole",
      "activeIngredient": "Metronidazole",
      "medicineClass": "Synthetic Nitroimidazole",
      "condition": "Amoebiasis (entamoeba histolytica) and Giardiasis",
      "conditionId": "gastro",
      "conditionIds": [
        "gastro",
        "gastro"
      ],
      "category": "Antiprotozoal & Anaerobic Antibacterial",
      "categorySlug": "gastro",
      "generalMedicalRole": "Prodrug reduced inside anaerobic microorganisms and protozoa to generate toxic nitro free radicals that disrupt helical DNA structure.",
      "dosageGuideline": "400 mg tablet",
      "brandNames": "Flagyl 400, Metrogyl 400, Metrogyl Suspension",
      "safetyNote": "Avoid in first trimester; use only if clearly necessary in 2nd/3rd.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Flagyl%20400",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Flagyl%20400",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Flagyl%20400/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_losartan",
      "activeIngredient": "Losartan Potassium",
      "medicineClass": "Prototypical Angiotensin II Receptor Antagonist",
      "condition": "Hypertension management",
      "conditionId": "chronic",
      "conditionIds": [
        "chronic",
        "chronic"
      ],
      "category": "Antihypertensive & Renal Protective",
      "categorySlug": "chronic",
      "generalMedicalRole": "Competitive AT1 receptor antagonist with unique mild uricosuric action (promotes uric acid excretion), ideal in hypertension with gout.",
      "dosageGuideline": "50 mg tablet",
      "brandNames": "Repace 50, Cozaar",
      "safetyNote": "Category D: STRICTLY CONTRAINDICATED in pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Repace%2050",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Repace%2050",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Repace%2050/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_pantoprazole",
      "activeIngredient": "Pantoprazole Sodium",
      "medicineClass": "Substituted Benzimidazole / Proton Pump Inhibitor",
      "condition": "GERD and reflux esophagitis",
      "conditionId": "gastro",
      "conditionIds": [
        "gastro",
        "gastro"
      ],
      "category": "Gastric Acid Inhibitor / PPI",
      "categorySlug": "gastro",
      "generalMedicalRole": "Irreversibly inhibits the H+/K+-ATPase enzyme pump ('proton pump') on the luminal secretory surface of gastric parietal cells, blocking the final step of acid secretion.",
      "dosageGuideline": "40 mg enteric-coated tablet",
      "brandNames": "Pan 40, Pantocid 40, Protonix",
      "safetyNote": "Category B: Safe during pregnancy when indicated.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Pan%2040",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Pan%2040",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Pan%2040/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_nitrofurantoin",
      "activeIngredient": "Nitrofurantoin (Macrocrystals)",
      "medicineClass": "Nitrofuran Synthetic Antibacterial",
      "condition": "Uncomplicated acute lower urinary tract infection (cystitis)",
      "conditionId": "uro",
      "conditionIds": [
        "uro",
        "uro"
      ],
      "category": "Urinary Tract Antibacterial",
      "categorySlug": "uro",
      "generalMedicalRole": "Concentrates rapidly in the urinary bladder. Bacterial enzymes reduce nitrofurantoin to active electrophilic intermediates that attack ribosomal proteins, DNA, and metabolic enzymes.",
      "dosageGuideline": "100 mg modified release capsule",
      "brandNames": "Martifur MR, Macrodantin, Uribid",
      "safetyNote": "Category B: Safe in 1st/2nd trimester; CONTRAINDICATED at term (38-42 wks).",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Martifur%20MR",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Martifur%20MR",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Martifur%20MR/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_amoxicillin",
      "activeIngredient": "Amoxicillin Trihydrate",
      "medicineClass": "Aminopenicillin / Beta-Lactam Antibacterial",
      "condition": "Streptococcal pharyngitis and tonsillitis",
      "conditionId": "respiratory",
      "conditionIds": [
        "respiratory",
        "respiratory"
      ],
      "category": "Antibacterial / Penicillin",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Bactericidal: Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs), causing osmotic cell lysis.",
      "dosageGuideline": "500 mg tablet or capsule",
      "brandNames": "Novamox, Mox, Amoxil",
      "safetyNote": "Category B: Generally safe in pregnancy under physician guidance.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Novamox",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Novamox",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Novamox/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_amoxicillin-clavulanate",
      "activeIngredient": "Amoxicillin + Clavulanic Acid",
      "medicineClass": "Beta-Lactam + Beta-Lactamase Inhibitor",
      "condition": "Bacterial sinusitis and recurrent otitis media",
      "conditionId": "respiratory",
      "conditionIds": [
        "respiratory",
        "respiratory"
      ],
      "category": "Broad-Spectrum Antibacterial",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Clavulanic acid irreversibly binds and inactivates bacterial beta-lactamase enzymes, preventing degradation of Amoxicillin and restoring broad-spectrum bactericidal activity.",
      "dosageGuideline": "625 mg tablet (500mg amox + 125mg clav)",
      "brandNames": "Augmentin 625 Duo, Moxikind-CV 625, Clavam 625, Augmentin DDS",
      "safetyNote": "Category B: Safe in pregnancy when clinically indicated.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Augmentin%20625%20Duo",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Augmentin%20625%20Duo",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Augmentin%20625%20Duo/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_sucralfate",
      "activeIngredient": "Sucralfate",
      "medicineClass": "Basic Aluminum Hydroxide Complex of Sulfated Sucrose",
      "condition": "Active duodenal ulcer and benign gastric ulcer healing",
      "conditionId": "gastro",
      "conditionIds": [
        "gastro",
        "gastro"
      ],
      "category": "Gastrointestinal Mucosal Protective Agent",
      "categorySlug": "gastro",
      "generalMedicalRole": "In acidic pH (pH < 4), forms a viscous, adhesive, polyanionic paste that selectively cross-links and binds to positively charged protein exudates at ulcer craters, creating a protective mechanical barrier against pepsin, acid, and bile.",
      "dosageGuideline": "1 gram (10 ml suspension or 1 tablet)",
      "brandNames": "Sucrafil, Carafate, Sucral",
      "safetyNote": "Category B: Minimal systemic absorption; safe in pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Sucrafil",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Sucrafil",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Sucrafil/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_ciprofloxacin",
      "activeIngredient": "Ciprofloxacin Hydrochloride",
      "medicineClass": "Second-Generation Fluoroquinolone",
      "condition": "Complicated urinary tract infections and pyelonephritis",
      "conditionId": "uro",
      "conditionIds": [
        "uro",
        "uro"
      ],
      "category": "Broad-Spectrum Fluoroquinolone",
      "categorySlug": "uro",
      "generalMedicalRole": "Bactericidal: Inhibits bacterial DNA gyrase (topoisomerase II) and topoisomerase IV, preventing bacterial DNA replication and transcription.",
      "dosageGuideline": "500 mg tablet",
      "brandNames": "Ciplox 500, Cifran 500, Ciplox Eye/Ear Drops",
      "safetyNote": "Category C: Avoid in pregnancy unless no alternative available.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Ciplox%20500",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Ciplox%20500",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Ciplox%20500/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_metformin",
      "activeIngredient": "Metformin Hydrochloride",
      "medicineClass": "Biguanide Class Antihyperglycemic Agent",
      "condition": "First-line pharmacological therapy for Type 2 Diabetes Mellitus",
      "conditionId": "chronic",
      "conditionIds": [
        "chronic",
        "chronic"
      ],
      "category": "Oral Antidiabetic",
      "categorySlug": "chronic",
      "generalMedicalRole": "Reduces hepatic gluconeogenesis, decreases intestinal glucose absorption, and increases peripheral insulin sensitivity via AMPK activation. Zero hypoglycemia risk as monotherapy.",
      "dosageGuideline": "500 mg to 1000 mg tablet",
      "brandNames": "Glycomet 500 / 1000, Glucophage",
      "safetyNote": "Category B: Safe in pregnancy and gestational diabetes under supervision.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Glycomet%20500%20%2F%201000",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Glycomet%20500%20%2F%201000",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Glycomet%20500%20%2F%201000/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_naproxen",
      "activeIngredient": "Naproxen",
      "medicineClass": "Propionic acid derivative / Non-Selective NSAID",
      "condition": "Migraine acute attack and tension headache",
      "conditionId": "pain-fever",
      "conditionIds": [
        "pain-fever",
        "pain-fever"
      ],
      "category": "Analgesic & Anti-inflammatory",
      "categorySlug": "pain-fever",
      "generalMedicalRole": "Reversibly inhibits COX-1 and COX-2 enzymes with a prolonged plasma elimination half-life of 12-15 hours, allowing twice-daily dosing.",
      "dosageGuideline": "250 mg to 500 mg tablet",
      "brandNames": "Naprosyn, Aleve, Naxdom",
      "safetyNote": "Avoid in pregnancy; contraindicated in 3rd trimester.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Naprosyn",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Naprosyn",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Naprosyn/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_diclofenac-chlorzoxazone",
      "activeIngredient": "Diclofenac + Chlorzoxazone",
      "medicineClass": "NSAID + Centrally Acting Muscle Relaxant",
      "condition": "Acute painful muscle spasm associated with acute musculoskeletal conditions",
      "conditionId": "ortho",
      "conditionIds": [
        "ortho",
        "ortho"
      ],
      "category": "Muscle Relaxant & Analgesic",
      "categorySlug": "ortho",
      "generalMedicalRole": "Dual mechanism: Diclofenac inhibits peripheral COX-mediated inflammation while Chlorzoxazone acts at spinal cord and subcortical levels to inhibit polysynaptic reflex arcs.",
      "dosageGuideline": "1 tablet containing 50mg Diclofenac + 250-500mg Chlorzoxazone",
      "brandNames": "Mobizox, Parafon Forte, Myospaz Forte",
      "safetyNote": "Contraindicated during pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Mobizox",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Mobizox",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Mobizox/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_montelukast-levocetirizine",
      "activeIngredient": "Montelukast + Levocetirizine",
      "medicineClass": "Leukotriene Receptor Antagonist (CysLT1) + H1 Antihistamine",
      "condition": "Moderate-to-severe allergic rhinitis with associated asthma symptoms",
      "conditionId": "respiratory",
      "conditionIds": [
        "respiratory",
        "respiratory"
      ],
      "category": "Antiallergic & Bronchial Stabilizer",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Dual inflammatory pathway blockade: Levocetirizine suppresses the immediate histamine response (sneezing, rhinorrhea), while Montelukast blocks cysteinyl leukotriene CysLT1 receptors, suppressing mucosal congestion and airway edema.",
      "dosageGuideline": "1 tablet (10mg Montelukast + 5mg Levocetirizine)",
      "brandNames": "Montair-LC, Montek-LC, Telekast-L, Montair-LC Kid",
      "safetyNote": "Use with caution in pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Montair-LC",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Montair-LC",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Montair-LC/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_cetirizine",
      "activeIngredient": "Cetirizine Dihydrochloride",
      "medicineClass": "Piperazine Derivative / Second-Generation H1-Antihistamine",
      "condition": "Allergic rhinitis (seasonal and perennial)",
      "conditionId": "respiratory",
      "conditionIds": [
        "respiratory",
        "respiratory"
      ],
      "category": "Antiallergic & Antihistamine",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Potent selective inverse agonist of peripheral H1 receptors, suppressing histamine-mediated capillary permeability, wheal and flare formation, and sensory nerve terminal pruritus with low CNS penetration.",
      "dosageGuideline": "10 mg tablet",
      "brandNames": "Cetzine 10, Zyrtec, Alerid",
      "safetyNote": "Category B: Reassuring safety profile in pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Cetzine%2010",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Cetzine%2010",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Cetzine%2010/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_hydrocortisone-topical",
      "activeIngredient": "Hydrocortisone (Topical 1%)",
      "medicineClass": "Mild Low-Potency Corticosteroid (Class VII)",
      "condition": "Temporary relief of itching, inflammation, and redness associated with mild atopic dermatitis, contact dermatitis, insect bites, and eczema",
      "conditionId": "derm",
      "conditionIds": [
        "derm",
        "derm"
      ],
      "category": "Topical Anti-inflammatory & Antipruritic",
      "categorySlug": "derm",
      "generalMedicalRole": "Binds to cytoplasmic glucocorticoid receptors, translocating to nucleus to upregulate lipocortin, inhibiting phospholipase A2, and reducing prostaglandin and leukotriene synthesis in the epidermis.",
      "dosageGuideline": "Apply fingertip unit (FTU) thinly to affected skin area",
      "brandNames": "Cortopin 1%, Hycort 1%, Cortizone 10",
      "safetyNote": "Category C: Mildest topical steroid; safe for short-term localized use in pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Cortopin%201%25",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Cortopin%201%25",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Cortopin%201%25/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_telmisartan",
      "activeIngredient": "Telmisartan",
      "medicineClass": "Non-Peptide Angiotensin II Receptor Blocker (ARB)",
      "condition": "Essential hypertension in adults",
      "conditionId": "chronic",
      "conditionIds": [
        "chronic",
        "chronic"
      ],
      "category": "Antihypertensive & Cardioprotective",
      "categorySlug": "chronic",
      "generalMedicalRole": "Displaces angiotensin II from AT1 receptor subtype, blocking aldosterone release, vasoconstriction, and sodium retention.",
      "dosageGuideline": "40 mg tablet",
      "brandNames": "Telma 40, Micardis",
      "safetyNote": "Category D: STRICTLY CONTRAINDICATED in pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Telma%2040",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Telma%2040",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Telma%2040/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_thiocolchicoside",
      "activeIngredient": "Thiocolchicoside",
      "medicineClass": "Semisynthetic Sulfur Derivative of Colchicoside",
      "condition": "Adjunctive treatment of acute painful muscle contractures in spinal pathology",
      "conditionId": "ortho",
      "conditionIds": [
        "ortho",
        "ortho"
      ],
      "category": "Myorelaxant & Anti-inflammatory",
      "categorySlug": "ortho",
      "generalMedicalRole": "Selective agonist of inhibitory GABA-A and glycine receptors, producing myorelaxant action at spinal and supraspinal levels.",
      "dosageGuideline": "4 mg to 8 mg capsule",
      "brandNames": "Myoril 4 / 8, Zerodol-TH",
      "safetyNote": "STRICTLY CONTRAINDICATED in pregnancy and lactation (EMA Black Box).",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Myoril%204%20%2F%208",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Myoril%204%20%2F%208",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Myoril%204%20%2F%208/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_ors-zinc",
      "activeIngredient": "Oral Rehydration Salts (WHO Reduced Osmolarity) + Zinc",
      "medicineClass": "Electrolyte Solution + Trace Element",
      "condition": "Dehydration secondary to acute diarrhea, gastroenteritis, and cholera",
      "conditionId": "gastro",
      "conditionIds": [
        "gastro",
        "gastro"
      ],
      "category": "Oral Electrolyte Replenisher & Micronutrient",
      "categorySlug": "gastro",
      "generalMedicalRole": "Glucose-facilitated sodium cotransport across intestinal brush border membrane: Sodium is actively absorbed even during cholera toxin-mediated secretion, pulling water osmotically. Zinc restores mucosal integrity.",
      "dosageGuideline": "200 ml to 400 ml after each loose stool",
      "brandNames": "Electral, WHO-ORS, Zincovit / Zinconia",
      "safetyNote": "Category A: Safe and essential during pregnancy and lactation.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Electral",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Electral",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Electral/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_paracetamol",
      "activeIngredient": "Paracetamol (Acetaminophen)",
      "medicineClass": "Aniline derivative / Central COX inhibitor",
      "condition": "Fever reduction in acute infections",
      "conditionId": "pain-fever",
      "conditionIds": [
        "pain-fever",
        "pain-fever"
      ],
      "category": "Antipyretic & Analgesic",
      "categorySlug": "pain-fever",
      "generalMedicalRole": "Inhibits central prostaglandin synthesis via COX enzyme pathway in the CNS. Acts on hypothalamic heat-regulating center to produce peripheral vasodilation.",
      "dosageGuideline": "500 mg to 650 mg tablet",
      "brandNames": "Dolo 650, Crocin Advance, Calpol, Pacimol",
      "safetyNote": "Category B: Considered safe at therapeutic doses during all trimesters.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Dolo%20650",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Dolo%20650",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Dolo%20650/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_atorvastatin",
      "activeIngredient": "Atorvastatin Calcium",
      "medicineClass": "Synthetic HMG-CoA Reductase Inhibitor",
      "condition": "Primary hypercholesterolemia and mixed dyslipidemia",
      "conditionId": "chronic",
      "conditionIds": [
        "chronic",
        "chronic"
      ],
      "category": "Lipid-Lowering Statin",
      "categorySlug": "chronic",
      "generalMedicalRole": "Competitively inhibits HMG-CoA reductase, the rate-limiting enzyme in cholesterol biosynthesis. Upregulates hepatic LDL receptors, clearing atherogenic particles.",
      "dosageGuideline": "10 mg to 20 mg tablet (moderate) or 40 mg to 80 mg (high intensity)",
      "brandNames": "Atorva 10 / 20 / 40, Lipitor",
      "safetyNote": "Category X: ABSOLUTE CONTRAINDICATION in pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Atorva%2010%20%2F%2020%20%2F%2040",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Atorva%2010%20%2F%2020%20%2F%2040",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Atorva%2010%20%2F%2020%20%2F%2040/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_fluconazole",
      "activeIngredient": "Fluconazole",
      "medicineClass": "Synthetic Bistriazole Antifungal",
      "condition": "Oropharyngeal and esophageal candidiasis",
      "conditionId": "derm",
      "conditionIds": [
        "derm",
        "derm"
      ],
      "category": "Systemic & Oral Antifungal",
      "categorySlug": "derm",
      "generalMedicalRole": "Inhibits fungal CYP51 (lanosterol 14-alpha-demethylase), blocking ergosterol production with >90% oral bioavailability and CSF penetration.",
      "dosageGuideline": "150 mg single dose (vaginal) or 100-200 mg daily (mucosal)",
      "brandNames": "Diflucan, Forcan 150",
      "safetyNote": "Category D: High-dose oral therapy CONTRAINDICATED in pregnancy (craniofacial malformations).",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Diflucan",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Diflucan",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Diflucan/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_loperamide",
      "activeIngredient": "Loperamide Hydrochloride",
      "medicineClass": "Synthetic Piperidine Derivative / Peripheral Opioid Agonist",
      "condition": "Symptomatic control of acute non-specific diarrhea in adults",
      "conditionId": "gastro",
      "conditionIds": [
        "gastro",
        "gastro"
      ],
      "category": "Antidiarrheal / Antimotility",
      "categorySlug": "gastro",
      "generalMedicalRole": "Acts on mu-opioid receptors in the myenteric plexus of the intestinal wall, inhibiting circular and longitudinal peristaltic contractions, prolonging gastrointestinal transit time, and increasing anal sphincter tone.",
      "dosageGuideline": "Initial 4 mg (2 capsules), followed by 2 mg after each loose unformed stool",
      "brandNames": "Imodium, Eldoper, Lopamide",
      "safetyNote": "Category C: Avoid in first trimester; use only if clinically indispensable.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Imodium",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Imodium",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Imodium/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_doxycycline",
      "activeIngredient": "Doxycycline Hyclate / Monohydrate",
      "medicineClass": "Second-Generation Tetracycline",
      "condition": "Atypical community pneumonia and acute bronchitis",
      "conditionId": "respiratory",
      "conditionIds": [
        "respiratory",
        "respiratory"
      ],
      "category": "Broad-Spectrum Tetracycline",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Bacteriostatic: Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit, preventing access of aminoacyl-tRNA to the ribosomal acceptor site.",
      "dosageGuideline": "100 mg capsule",
      "brandNames": "Doxicip, Doxt-SL, Vibramycin",
      "safetyNote": "Category D: STRICTLY CONTRAINDICATED in pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Doxicip",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Doxicip",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Doxicip/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_levofloxacin",
      "activeIngredient": "Levofloxacin Hemihydrate",
      "medicineClass": "Third-Generation 'Respiratory' Fluoroquinolone",
      "condition": "Community-acquired pneumonia and acute pyelonephritis",
      "conditionId": "respiratory",
      "conditionIds": [
        "respiratory",
        "respiratory"
      ],
      "category": "Fluoroquinolone Antibacterial",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Pure L-enantiomer of ofloxacin, inhibiting bacterial DNA gyrase and topoisomerase IV with enhanced Gram-positive and atypical coverage.",
      "dosageGuideline": "500 mg tablet",
      "brandNames": "Levaquin, Glevo 500, Loxof 500",
      "safetyNote": "Category C: Avoid during pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Levaquin",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Levaquin",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Levaquin/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_chlorzoxazone",
      "activeIngredient": "Chlorzoxazone",
      "medicineClass": "Benzoxazolone Derivative",
      "condition": "Acute painful muscle spasms, torticollis, sprains, and lumbar strain",
      "conditionId": "ortho",
      "conditionIds": [
        "ortho",
        "ortho"
      ],
      "category": "Skeletal Muscle Relaxant",
      "categorySlug": "ortho",
      "generalMedicalRole": "Acts primarily at spinal cord and subcortical areas to inhibit polysynaptic reflex arcs producing muscle spasm.",
      "dosageGuideline": "250 mg to 500 mg tablet",
      "brandNames": "Parafon Forte, Myospaz",
      "safetyNote": "Category C: Avoid during pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Parafon%20Forte",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Parafon%20Forte",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Parafon%20Forte/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_levocetirizine",
      "activeIngredient": "Levocetirizine Dihydrochloride",
      "medicineClass": "Pure R-Enantiomer of Cetirizine / H1 Antagonist",
      "condition": "Allergic rhinitis and pollinosis",
      "conditionId": "respiratory",
      "conditionIds": [
        "respiratory",
        "respiratory"
      ],
      "category": "Non-Sedating Antihistamine",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Enantiomerically pure active R-form of cetirizine with approximately double the affinity for human H1 receptors and lower somnolence incidence.",
      "dosageGuideline": "5 mg tablet",
      "brandNames": "Vozet 5, Xyzal, Levocet",
      "safetyNote": "Category B: Safe when needed during pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Vozet%205",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Vozet%205",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Vozet%205/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_budesonide-formoterol",
      "activeIngredient": "Budesonide + Formoterol Fumarate",
      "medicineClass": "Inhaled Corticosteroid (ICS) + Long-Acting Beta-2 Agonist (LABA)",
      "condition": "Maintenance and reliever treatment of bronchial asthma (GINA Track 1 preference)",
      "conditionId": "respiratory",
      "conditionIds": [
        "respiratory",
        "respiratory"
      ],
      "category": "Maintenance & Reliever Therapy (SMART)",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Dual anti-inflammatory and bronchodilator synergy: Budesonide suppresses bronchial eosinophilic and lymphocytic inflammation, while Formoterol provides rapid (within 1-3 mins) and long-lasting (>12h) bronchodilation.",
      "dosageGuideline": "1 to 2 inhalations (160mcg/4.5mcg or 200mcg/6mcg)",
      "brandNames": "Symbicort Turbuhaler, Foracort 200 / 400, Budamate 200",
      "safetyNote": "Category C: Safe and preferred controller in pregnant asthmatics (prevents fetal hypoxia).",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Symbicort%20Turbuhaler",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Symbicort%20Turbuhaler",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Symbicort%20Turbuhaler/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_olopatadine-ophthalmic",
      "activeIngredient": "Olopatadine Hydrochloride (Ophthalmic)",
      "medicineClass": "Dual Mast-Cell Stabilizer & H1-Antagonist",
      "condition": "Relief of ocular itching, redness, and chemosis in allergic conjunctivitis",
      "conditionId": "derm",
      "conditionIds": [
        "derm",
        "derm"
      ],
      "category": "Ocular Antiallergic",
      "categorySlug": "derm",
      "generalMedicalRole": "Selective H1 receptor antagonist and mast cell stabilizer that prevents histamine release and suppresses acidophilic inflammatory migration into the conjunctiva.",
      "dosageGuideline": "1 drop into affected eye(s)",
      "brandNames": "Patanol 0.1%, Pataday 0.2%",
      "safetyNote": "Category C: Safe for ophthalmic use when indicated.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Patanol%200.1%25",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Patanol%200.1%25",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Patanol%200.1%25/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_salbutamol",
      "activeIngredient": "Salbutamol (Albuterol)",
      "medicineClass": "Short-Acting Beta-2 Adrenergic Agonist (SABA)",
      "condition": "Immediate relief of acute bronchospasm in bronchial asthma",
      "conditionId": "respiratory",
      "conditionIds": [
        "respiratory",
        "respiratory"
      ],
      "category": "Rescue Bronchodilator",
      "categorySlug": "respiratory",
      "generalMedicalRole": "Rapidly stimulates beta-2 adrenergic receptors on bronchial smooth muscle, activating adenylate cyclase, increasing intracellular cAMP, and causing immediate bronchial relaxation (within 3-5 minutes).",
      "dosageGuideline": "100 mcg to 200 mcg (1 to 2 inhalations of 100 mcg MDI)",
      "brandNames": "Asthalin Inhaler, Ventolin HFA, Asthalin Respules",
      "safetyNote": "Category C: Drug of choice for acute asthma rescue in pregnancy.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Asthalin%20Inhaler",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Asthalin%20Inhaler",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Asthalin%20Inhaler/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_pantoprazole-domperidone",
      "activeIngredient": "Pantoprazole + Domperidone (SR)",
      "medicineClass": "PPI + Peripheral Dopamine D2 Receptor Antagonist",
      "condition": "GERD with prominent delayed gastric emptying and nausea",
      "conditionId": "gastro",
      "conditionIds": [
        "gastro",
        "gastro"
      ],
      "category": "Gastroprokinetic & PPI",
      "categorySlug": "gastro",
      "generalMedicalRole": "Dual therapy: Pantoprazole provides potent gastric acid suppression while Domperidone selectively antagonizes peripheral D2 dopamine receptors in the upper GI tract, accelerating gastric emptying.",
      "dosageGuideline": "1 capsule (40mg Pantoprazole + 30mg Domperidone SR)",
      "brandNames": "Pan-D, Pantocid-D SR, Dompan SR",
      "safetyNote": "Avoid in pregnancy unless physician-directed.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Pan-D",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Pan-D",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Pan-D/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    },
    {
      "id": "salt_sitagliptin",
      "activeIngredient": "Sitagliptin Phosphate",
      "medicineClass": "Selective DPP-4 Inhibitor",
      "condition": "Type 2 diabetes mellitus monotherapy or in combination with metformin/sulfonylureas",
      "conditionId": "chronic",
      "conditionIds": [
        "chronic",
        "chronic"
      ],
      "category": "Incretin Enhancer / Antidiabetic",
      "categorySlug": "chronic",
      "generalMedicalRole": "Inhibits DPP-4 enzyme, slowing incretin degradation (GLP-1 and GIP). Increases insulin release and decreases glucagon in a glucose-dependent manner.",
      "dosageGuideline": "100 mg tablet",
      "brandNames": "Januvia 50 / 100, Janumet",
      "safetyNote": "Category B: Avoid in pregnancy; insulin preferred.",
      "source": "WHO Model Formulary (EML 2023) & BNF 86",
      "sourceType": "Himkiv Database Record",
      "affiliateLinks": [
        {
          "id": "aff_1mg",
          "platform": "Tata 1mg",
          "badgeClass": "bg-red-50 text-red-600 border-red-200",
          "logo": "https://www.1mg.com/favicon.ico",
          "url": "https://www.1mg.com/search/all?name=Januvia%2050%20%2F%20100",
          "priceEstimate": "Best Price Available",
          "discount": "Up to 20% OFF",
          "verified": true
        },
        {
          "id": "aff_apollo",
          "platform": "Apollo Pharmacy",
          "badgeClass": "bg-emerald-50 text-emerald-700 border-emerald-200",
          "logo": "https://www.apollopharmacy.in/favicon.ico",
          "url": "https://www.apollopharmacy.in/search-medicines/Januvia%2050%20%2F%20100",
          "priceEstimate": "Verified Authentic",
          "discount": "Up to 15% OFF",
          "verified": true
        },
        {
          "id": "aff_netmeds",
          "platform": "Netmeds",
          "badgeClass": "bg-blue-50 text-blue-600 border-blue-200",
          "logo": "https://www.netmeds.com/favicon.ico",
          "url": "https://www.netmeds.com/catalogsearch/result/Januvia%2050%20%2F%20100/all",
          "priceEstimate": "Quick Delivery",
          "discount": "Available",
          "verified": true
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = HKARE_DATA;
}
