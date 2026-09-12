/**
 * HIMKIV Health & MedGuide - Normalized HKare Reference Dataset
 * Auto-generated from data/HKare_Common_Disease_Medicine_Reference(1).csv
 * Contains 131 rows, 120 unique conditions, and 18 categories mapped to WHO ICD-11 MMS.
 */

const HKARE_DATA = {
  meta: {
    "fileName":  "HKare_Common_Disease_Medicine_Reference(1).csv",
    "sourceType":  "HKare Reference Dataset",
    "totalRows": 154,
    "uniqueConditions":  120,
    "uniqueCategories":  18,
    "importDate":  "2026-09-12",
    "standard":  "WHO ICD-11 MMS (2026-01 Release)"
},
  categories: [
    {
        "id":  "all",
        "name":  "All Conditions",
        "icon":  "layers",
        "description":  "Comprehensive multi-system clinical condition and medicine reference database",
        "i18nKey":  "cat_all",
        "rawCategory":  "All"
    },
    {
        "id":  "infectious",
        "name":  "Infectious \u0026 Vector-Borne",
        "icon":  "bug",
        "description":  "Bacterial, viral, and parasitic infections including tropical diseases",
        "i18nKey":  "cat_infectious",
        "rawCategory":  "Infectious"
    },
    {
        "id":  "respiratory",
        "name":  "Respiratory",
        "icon":  "wind",
        "description":  "Upper and lower airway disorders, asthma, and chronic pulmonary diseases",
        "i18nKey":  "cat_respiratory",
        "rawCategory":  "Respiratory"
    },
    {
        "id":  "cardiovascular",
        "name":  "Cardiovascular",
        "icon":  "heart-pulse",
        "description":  "Hypertension, heart failure, arrhythmia, and vascular conditions",
        "i18nKey":  "cat_cardiovascular",
        "rawCategory":  "Cardiovascular"
    },
    {
        "id":  "endocrine",
        "name":  "Endocrine \u0026 Metabolic",
        "icon":  "activity",
        "description":  "Diabetes, thyroid disorders, and metabolic imbalances",
        "i18nKey":  "cat_endocrine",
        "rawCategory":  "Endocrine"
    },
    {
        "id":  "gastrointestinal",
        "name":  "Gastrointestinal",
        "icon":  "utensils",
        "description":  "Acid-peptic diseases, enteritis, and functional bowel disorders",
        "i18nKey":  "cat_gastrointestinal",
        "rawCategory":  "Gastrointestinal"
    },
    {
        "id":  "liver",
        "name":  "Liver \u0026 Hepatic",
        "icon":  "shield-plus",
        "description":  "Chronic hepatitis, cirrhosis, and hepatic dysfunction",
        "i18nKey":  "cat_liver",
        "rawCategory":  "Liver"
    },
    {
        "id":  "kidney-urinary",
        "name":  "Kidney \u0026 Urinary",
        "icon":  "droplets",
        "description":  "Urinary tract infections, renal stones, and chronic kidney disease",
        "i18nKey":  "cat_kidney",
        "rawCategory":  "Kidney/urinary"
    },
    {
        "id":  "neurological",
        "name":  "Neurological",
        "icon":  "brain",
        "description":  "Headache disorders, seizure management, and neurodegenerative states",
        "i18nKey":  "cat_neurological",
        "rawCategory":  "Neurological"
    },
    {
        "id":  "mental-health",
        "name":  "Mental Health",
        "icon":  "smile",
        "description":  "Depression, anxiety disorders, and behavioral health",
        "i18nKey":  "cat_mental",
        "rawCategory":  "Mental health"
    },
    {
        "id":  "skin",
        "name":  "Dermatology \u0026 Skin",
        "icon":  "sparkles",
        "description":  "Cutaneous infections, acne, eczema, and chronic dermatoses",
        "i18nKey":  "cat_skin",
        "rawCategory":  "Skin"
    },
    {
        "id":  "musculoskeletal",
        "name":  "Musculoskeletal",
        "icon":  "bone",
        "description":  "Arthritis, muscular strain, osteoporosis, and joint inflammation",
        "i18nKey":  "cat_musculoskeletal",
        "rawCategory":  "Musculoskeletal"
    },
    {
        "id":  "eye",
        "name":  "Ophthalmic \u0026 Eye",
        "icon":  "eye",
        "description":  "Glaucoma, conjunctival inflammation, and ocular surface health",
        "i18nKey":  "cat_eye",
        "rawCategory":  "Eye"
    },
    {
        "id":  "ear",
        "name":  "ENT \u0026 Ear",
        "icon":  "ear",
        "description":  "Outer and middle ear infections and auditory inflammation",
        "i18nKey":  "cat_ear",
        "rawCategory":  "Ear"
    },
    {
        "id":  "reproductive",
        "name":  "Reproductive Health",
        "icon":  "users",
        "description":  "Gynecological, pelvic, and urological reproductive care",
        "i18nKey":  "cat_reproductive",
        "rawCategory":  "Reproductive"
    },
    {
        "id":  "hematology",
        "name":  "Hematology \u0026 Blood",
        "icon":  "test-tube",
        "description":  "Nutritional anemias, hemoglobinopathies, and coagulation disorders",
        "i18nKey":  "cat_hematology",
        "rawCategory":  "Hematology"
    },
    {
        "id":  "cancer",
        "name":  "Oncology \u0026 Cancer",
        "icon":  "crosshair",
        "description":  "Solid tumors, hematologic malignancies, and oncology reference guidance",
        "i18nKey":  "cat_cancer",
        "rawCategory":  "Cancer"
    },
    {
        "id":  "allergy-immune",
        "name":  "Allergy \u0026 Immune",
        "icon":  "shield",
        "description":  "Systemic hypersensitivity, anaphylaxis, and autoimmune diseases",
        "i18nKey":  "cat_immune",
        "rawCategory":  "Allergy/immune"
    },
    {
        "id":  "emergency-supportive",
        "name":  "Emergency \u0026 Supportive",
        "icon":  "alert-triangle",
        "description":  "Acute fever, pain management, and electrolyte rehydration",
        "i18nKey":  "cat_emergency",
        "rawCategory":  "Emergency/supportive"
    }
],
  conditions: [
    {
        "id":  "influenza",
        "name":  "Influenza",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1E30",
        "icd11Title":  "Influenza",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1E30",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Antiviral treatment in selected influenza cases.",
        "symptoms":  [
                         "High fever (\u003e38Â°C)",
                         "Myalgia / Body aches",
                         "Dry cough",
                         "Sore throat",
                         "Severe fatigue"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_influenza_oseltamivir_1",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "covid-19",
        "name":  "COVID-19",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "RA01",
        "icd11Title":  "COVID-19",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#RA01",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Antiviral treatment for selected high-risk cases.",
        "symptoms":  [
                         "Fever or chills",
                         "Cough",
                         "Shortness of breath",
                         "Loss of taste/smell",
                         "Fatigue"
                     ],
        "emergencyFlags":  [
                               "Oxygen saturation \u003c 92%",
                               "Severe dyspnea / Retractions",
                               "Cyanosis of lips/face",
                               "Persistent chest pain"
                           ],
        "medicineIds":  "hkare_covid-19_nirmatrelvir-ritonavir_2",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "tuberculosis",
        "name":  "Tuberculosis",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1B10",
        "icd11Title":  "Tuberculosis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1B10",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Combination treatment.",
        "symptoms":  [
                         "Persistent cough \u003e 2 weeks",
                         "Hemoptysis (coughing blood)",
                         "Night sweats",
                         "Unexplained weight loss",
                         "Low-grade fever"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_tuberculosis_rifampicin-isoniazid-pyrazinamide-ethambutol_3",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "malaria",
        "name":  "Malaria",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1F40",
        "icd11Title":  "Malaria",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1F40",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Treatment of susceptible malaria.",
        "symptoms":  [
                         "Chills and rigors",
                         "High cyclical fever",
                         "Profuse sweating",
                         "Headache",
                         "Nausea"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_malaria_artemether-lumefantrine_4",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "dengue",
        "name":  "Dengue",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1D20",
        "icd11Title":  "Dengue",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1D20",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Fever/pain relief.",
        "symptoms":  [
                         "Sudden high fever",
                         "Severe retro-orbital eye pain",
                         "Severe joint/muscle aches",
                         "Skin petechiae/rash",
                         "Nausea"
                     ],
        "emergencyFlags":  [
                               "Severe persistent abdominal pain",
                               "Persistent vomiting",
                               "Mucosal bleeding (epistaxis/gums)",
                               "Extreme lethargy / Hypotension"
                           ],
        "medicineIds":  "hkare_dengue_paracetamol_5",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "typhoid-fever",
        "name":  "Typhoid fever",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1A07",
        "icd11Title":  "Typhoid fever",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1A07",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Treatment of susceptible bacterial infection.",
        "symptoms":  [
                         "Step-ladder rising fever",
                         "Abdominal tenderness",
                         "Rose spots on trunk",
                         "Constipation or diarrhea",
                         "Headache"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_typhoid-fever_ceftriaxone-azithromycin_6",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "cholera",
        "name":  "Cholera",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1A00",
        "icd11Title":  "Cholera",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1A00",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Antibiotic in selected cases.",
        "symptoms":  [
                         "Profuse painless watery diarrhea",
                         "Rice-water stools",
                         "Severe vomiting",
                         "Rapid dehydration",
                         "Muscle cramps"
                     ],
        "emergencyFlags":  [
                               "Severe circulatory shock",
                               "Inability to drink",
                               "Anuria",
                               "Sunken eyes with absent skin turgor"
                           ],
        "medicineIds":  "hkare_cholera_doxycycline-azithromycin_7",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "measles",
        "name":  "Measles",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1F03",
        "icd11Title":  "Measles",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1F03",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Supportive management in children under clinical guidance.",
        "symptoms":  [
                         "High fever",
                         "Koplik spots in mouth",
                         "Maculopapular rash",
                         "Coryza / runny nose",
                         "Conjunctivitis"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_measles_vitamin-a_8",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "mumps",
        "name":  "Mumps",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1D80",
        "icd11Title":  "Mumps",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1D80",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Fever/pain relief.",
        "symptoms":  [
                         "Painful parotid gland swelling",
                         "Fever",
                         "Chewing pain",
                         "Headache",
                         "Malaise"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_mumps_paracetamol_9",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "rubella",
        "name":  "Rubella",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1F02",
        "icd11Title":  "Rubella",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1F02",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Symptom relief.",
        "symptoms":  [
                         "Mild fever",
                         "Maculopapular rash",
                         "Swollen lymph nodes",
                         "Joint aches",
                         "Eye redness"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_rubella_paracetamol_10",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "chickenpox",
        "name":  "Chickenpox",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1E90",
        "icd11Title":  "Varicella (Chickenpox)",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1E90",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Treatment in selected higher-risk cases.",
        "symptoms":  [
                         "Itchy fluid-filled blisters",
                         "Fever",
                         "Tiredness",
                         "Loss of appetite",
                         "Headache"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_chickenpox_acyclovir_11",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "shingles",
        "name":  "Shingles",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1E91",
        "icd11Title":  "Herpes zoster (Shingles)",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1E91",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Antiviral treatment.",
        "symptoms":  [
                         "Unilateral dermatomal pain",
                         "Burning sensation",
                         "Clustered vesicular rash",
                         "Hyperesthesia",
                         "Tingling"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_shingles_acyclovir-valaciclovir_12",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hepatitis-b",
        "name":  "Hepatitis B",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1E51",
        "icd11Title":  "Chronic viral hepatitis B",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1E51",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Long-term antiviral therapy in selected chronic cases.",
        "symptoms":  [
                         "Jaundice (yellow eyes/skin)",
                         "Dark tea-colored urine",
                         "Right upper quadrant pain",
                         "Fatigue",
                         "Clay-colored stools"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_hepatitis-b_tenofovir-disoproxil-fumarate_13",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hepatitis-c",
        "name":  "Hepatitis C",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1E52",
        "icd11Title":  "Acute viral hepatitis C",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1E52",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Curative antiviral regimen.",
        "symptoms":  [
                         "Chronic fatigue",
                         "Joint aches",
                         "Jaundice in acute flares",
                         "Abdominal discomfort",
                         "Loss of appetite"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_hepatitis-c_sofosbuvir-velpatasvir_14",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hiv-infection",
        "name":  "HIV infection",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1C60",
        "icd11Title":  "Human immunodeficiency virus disease",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1C60",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Combination antiretroviral therapy.",
        "symptoms":  [
                         "Persistent lymphadenopathy",
                         "Recurrent opportunistic infections",
                         "Chronic diarrhea",
                         "Weight loss",
                         "Fever"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_hiv-infection_tenofovir-lamivudine-dolutegravir_15",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "rabies",
        "name":  "Rabies",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1D00",
        "icd11Title":  "Rabies",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1D00",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Post-exposure prevention.",
        "symptoms":  [
                         "Hydrophobia",
                         "Aerophobia",
                         "Agitation / Altered mental status",
                         "Paresthesia at bite site",
                         "Fever"
                     ],
        "emergencyFlags":  [
                               "Hydrophobia",
                               "Aerophobia",
                               "Rapidly progressive encephalitis",
                               "Agitation"
                           ],
        "medicineIds":  "hkare_rabies_rabies-vaccine-rabies-immunoglobulin_16",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "tetanus",
        "name":  "Tetanus",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1C10",
        "icd11Title":  "Tetanus",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1C10",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Prevention after selected wounds.",
        "symptoms":  [
                         "Trismus (lockjaw)",
                         "Painful muscle spasms",
                         "Neck stiffness",
                         "Difficulty swallowing",
                         "Autonomic instability"
                     ],
        "emergencyFlags":  [
                               "Laryngospasm",
                               "Autonomic instability (severe BP fluctuations)",
                               "Opisthotonos"
                           ],
        "medicineIds":  "hkare_tetanus_tetanus-toxoid-vaccine-tetanus-immunoglobulin_17",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "bacterial-meningitis",
        "name":  "Bacterial meningitis",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1D01",
        "icd11Title":  "Bacterial meningitis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1D01",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Empiric treatment in many settings.",
        "symptoms":  [
                         "High fever",
                         "Severe nuchal rigidity (stiff neck)",
                         "Altered sensorium",
                         "Photophobia",
                         "Severe headache"
                     ],
        "emergencyFlags":  [
                               "Nuchal rigidity",
                               "Non-blanching purpuric rash",
                               "Altered consciousness / Coma",
                               "Seizures"
                           ],
        "medicineIds":  "hkare_bacterial-meningitis_ceftriaxone_18",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "pneumococcal-pneumonia",
        "name":  "Pneumococcal pneumonia",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "CA40.0",
        "icd11Title":  "Pneumococcal pneumonia",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#CA40.0",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Treatment of susceptible bacterial infection.",
        "symptoms":  [
                         "Productive cough with rust-colored sputum",
                         "Pleuritic chest pain",
                         "High fever with chills",
                         "Dyspnea",
                         "Tachypnea"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_pneumococcal-pneumonia_amoxicillin_19",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "scabies",
        "name":  "Scabies",
        "category":  "Infectious",
        "categoryId":  "infectious",
        "categorySlug":  "infectious",
        "icd11Code":  "1F73",
        "icd11Title":  "Scabies",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1F73",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Eradicates mites.",
        "symptoms":  [
                         "Intense nocturnal itching",
                         "Interdigital burrows",
                         "Papular rash on wrists/waistline",
                         "Excoriations"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_scabies_permethrin_20",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "asthma",
        "name":  "Asthma",
        "category":  "Respiratory",
        "categoryId":  "respiratory",
        "categorySlug":  "respiratory",
        "icd11Code":  "CA23",
        "icd11Title":  "Asthma",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#CA23",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Relief of bronchospasm; Long-term airway inflammation control.",
        "symptoms":  [
                         "Expiratory wheezing",
                         "Shortness of breath",
                         "Chest tightness",
                         "Nocturnal dry cough",
                         "Dyspnea on exertion"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  [
                            "hkare_asthma_salbutamol_21",
                            "hkare_asthma_budesonide_22"
                        ],
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "copd",
        "name":  "COPD",
        "category":  "Respiratory",
        "categoryId":  "respiratory",
        "categorySlug":  "respiratory",
        "icd11Code":  "CA22",
        "icd11Title":  "Chronic obstructive pulmonary disease",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#CA22",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Maintenance bronchodilation.",
        "symptoms":  [
                         "Chronic productive morning cough",
                         "Progressive dyspnea on exertion",
                         "Chest tightness",
                         "Frequent respiratory infections"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_copd_tiotropium_23",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "allergic-rhinitis",
        "name":  "Allergic rhinitis",
        "category":  "Respiratory",
        "categoryId":  "respiratory",
        "categorySlug":  "respiratory",
        "icd11Code":  "CA08",
        "icd11Title":  "Allergic rhinitis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#CA08",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Allergy symptom relief; Nasal inflammation control.",
        "symptoms":  [
                         "Paroxysmal sneezing",
                         "Clear watery rhinorrhea",
                         "Nasal pruritus / itching",
                         "Nasal congestion",
                         "Allergic shiners"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  [
                            "hkare_allergic-rhinitis_cetirizine_24",
                            "hkare_allergic-rhinitis_fluticasone_25"
                        ],
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "acute-bronchitis",
        "name":  "Acute bronchitis",
        "category":  "Respiratory",
        "categoryId":  "respiratory",
        "categorySlug":  "respiratory",
        "icd11Code":  "CA42",
        "icd11Title":  "Acute bronchitis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#CA42",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Fever/pain relief.",
        "symptoms":  [
                         "Persistent cough (1-3 weeks)",
                         "Clear or purulent sputum",
                         "Mild substernal chest ache",
                         "Low-grade fever"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_acute-bronchitis_paracetamol_26",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "pulmonary-fibrosis",
        "name":  "Pulmonary fibrosis",
        "category":  "Respiratory",
        "categoryId":  "respiratory",
        "categorySlug":  "respiratory",
        "icd11Code":  "CB03",
        "icd11Title":  "Idiopathic pulmonary fibrosis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#CB03",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Slows progression in selected fibrotic lung diseases.",
        "symptoms":  [
                         "Dry non-productive cough",
                         "Progressive shortness of breath",
                         "Velcro bibasilar inspiratory crackles",
                         "Digital clubbing"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_pulmonary-fibrosis_nintedanib_27",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "sleep-apnea",
        "name":  "Sleep apnea",
        "category":  "Respiratory",
        "categoryId":  "respiratory",
        "categorySlug":  "respiratory",
        "icd11Code":  "7A40",
        "icd11Title":  "Obstructive sleep apnoea",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#7A40",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Keeps airway open during sleep.",
        "symptoms":  [
                         "Loud chronic snoring",
                         "Witnessed breathing pauses during sleep",
                         "Excessive daytime somnolence",
                         "Morning dry mouth"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_sleep-apnea_cpap_28",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hypertension",
        "name":  "Hypertension",
        "category":  "Cardiovascular",
        "categoryId":  "cardiovascular",
        "categorySlug":  "cardiovascular",
        "icd11Code":  "BA00",
        "icd11Title":  "Essential hypertension",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#BA00",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Blood-pressure control; Blood-pressure control; Blood-pressure control.",
        "symptoms":  [
                         "Often asymptomatic",
                         "Occipital morning headache",
                         "Occasional visual blurring",
                         "Tinnitus",
                         "Palpitations"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  [
                            "hkare_hypertension_enalapril_29",
                            "hkare_hypertension_amlodipine_30",
                            "hkare_hypertension_indapamide_31"
                        ],
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "heart-failure",
        "name":  "Heart failure",
        "category":  "Cardiovascular",
        "categoryId":  "cardiovascular",
        "categorySlug":  "cardiovascular",
        "icd11Code":  "BD10",
        "icd11Title":  "Congestive heart failure",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#BD10",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Reduces symptoms/events in selected patients; Selected stable heart-failure patients.",
        "symptoms":  [
                         "Dyspnea on minimal exertion",
                         "Orthopnea (breathlessness lying flat)",
                         "Bilateral dependent ankle edema",
                         "Paroxysmal nocturnal dyspnea"
                     ],
        "emergencyFlags":  [
                               "Acute pulmonary edema (pink frothy sputum)",
                               "Severe resting dyspnea",
                               "Cyanosis"
                           ],
        "medicineIds":  [
                            "hkare_heart-failure_enalapril_32",
                            "hkare_heart-failure_bisoprolol_33"
                        ],
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "atrial-fibrillation",
        "name":  "Atrial fibrillation",
        "category":  "Cardiovascular",
        "categoryId":  "cardiovascular",
        "categorySlug":  "cardiovascular",
        "icd11Code":  "BC81.3",
        "icd11Title":  "Atrial fibrillation",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#BC81.3",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Prevention of stroke/systemic embolism in selected patients.",
        "symptoms":  [
                         "Irregularly irregular heartbeat",
                         "Palpitations",
                         "Dizziness",
                         "Exertional dyspnea",
                         "Fatigue"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_atrial-fibrillation_apixaban_34",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "coronary-artery-disease",
        "name":  "Coronary artery disease",
        "category":  "Cardiovascular",
        "categoryId":  "cardiovascular",
        "categorySlug":  "cardiovascular",
        "icd11Code":  "BA80",
        "icd11Title":  "Ischaemic heart disease",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#BA80",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Prevention of cardiovascular events in selected patients.",
        "symptoms":  [
                         "Exertional retrosternal chest pressure",
                         "Radiation to left arm/jaw",
                         "Shortness of breath",
                         "Relief upon rest"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_coronary-artery-disease_aspirin_35",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "high-ldl-cholesterol",
        "name":  "High LDL cholesterol",
        "category":  "Cardiovascular",
        "categoryId":  "cardiovascular",
        "categorySlug":  "cardiovascular",
        "icd11Code":  "5C80.0",
        "icd11Title":  "Hypercholesterolaemia",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#5C80.0",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Lowers LDL cholesterol.",
        "symptoms":  [
                         "Usually asymptomatic",
                         "Corneal arcus in early onset",
                         "Xanthelasma / tendon xanthomas in severe familial cases"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_high-ldl-cholesterol_atorvastatin_36",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "angina",
        "name":  "Angina",
        "category":  "Cardiovascular",
        "categoryId":  "cardiovascular",
        "categorySlug":  "cardiovascular",
        "icd11Code":  "BA82",
        "icd11Title":  "Angina pectoris",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#BA82",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Rapid relief of angina.",
        "symptoms":  [
                         "Transient squeezing chest tightness",
                         "Precipitated by exertion or cold",
                         "Relieved within minutes by rest or nitroglycerin"
                     ],
        "emergencyFlags":  [
                               "Chest pain lasting \u003e 15 minutes unrelieved by rest",
                               "Radiating to jaw/neck/both arms",
                               "Diaphoresis and vomiting"
                           ],
        "medicineIds":  "hkare_angina_glyceryl-trinitrate_37",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "deep-vein-thrombosis",
        "name":  "Deep-vein thrombosis",
        "category":  "Cardiovascular",
        "categoryId":  "cardiovascular",
        "categorySlug":  "cardiovascular",
        "icd11Code":  "BD71",
        "icd11Title":  "Deep vein thrombosis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#BD71",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Treatment/prevention of recurrent venous thrombosis.",
        "symptoms":  [
                         "Unilateral calf or leg swelling",
                         "Erythema and warmth",
                         "Deep throbbing calf ache",
                         "Positive Homan\u0027s sign"
                     ],
        "emergencyFlags":  [
                               "Sudden severe leg edema with cyanosis",
                               "Acute shortness of breath (PE migration)"
                           ],
        "medicineIds":  "hkare_deep-vein-thrombosis_apixaban_38",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "pulmonary-embolism",
        "name":  "Pulmonary embolism",
        "category":  "Cardiovascular",
        "categoryId":  "cardiovascular",
        "categorySlug":  "cardiovascular",
        "icd11Code":  "BD11",
        "icd11Title":  "Pulmonary embolism",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#BD11",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Anticoagulation in eligible patients.",
        "symptoms":  [
                         "Sudden acute pleuritic chest pain",
                         "Severe unexplained dyspnea",
                         "Tachypnea",
                         "Tachycardia",
                         "Hemoptysis"
                     ],
        "emergencyFlags":  [
                               "Sudden severe pleuritic chest pain",
                               "Hemoptysis",
                               "Syncope / Hypotension",
                               "Severe hypoxia"
                           ],
        "medicineIds":  "hkare_pulmonary-embolism_apixaban_39",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "type-1-diabetes",
        "name":  "Type 1 diabetes",
        "category":  "Endocrine",
        "categoryId":  "endocrine",
        "categorySlug":  "endocrine",
        "icd11Code":  "5A10",
        "icd11Title":  "Type 1 diabetes mellitus",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#5A10",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Replaces insulin.",
        "symptoms":  [
                         "Polydipsia (excessive thirst)",
                         "Polyuria (frequent urination)",
                         "Rapid unexplained weight loss",
                         "Polyphagia",
                         "Diabetic ketoacidosis signs"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_type-1-diabetes_human-insulin-insulin-analogues_40",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "type-2-diabetes",
        "name":  "Type 2 diabetes",
        "category":  "Endocrine",
        "categoryId":  "endocrine",
        "categorySlug":  "endocrine",
        "icd11Code":  "5A11",
        "icd11Title":  "Type 2 diabetes mellitus",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#5A11",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Blood-glucose lowering; Glucose lowering and cardiovascular/kidney benefits in selected patients.",
        "symptoms":  [
                         "Chronic polydipsia",
                         "Nocturia and polyuria",
                         "Blurred vision",
                         "Poor wound healing",
                         "Recurrent candidiasis"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  [
                            "hkare_type-2-diabetes_metformin_41",
                            "hkare_type-2-diabetes_empagliflozin_42"
                        ],
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hypothyroidism",
        "name":  "Hypothyroidism",
        "category":  "Endocrine",
        "categoryId":  "endocrine",
        "categorySlug":  "endocrine",
        "icd11Code":  "5A00",
        "icd11Title":  "Hypothyroidism",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#5A00",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Thyroid hormone replacement.",
        "symptoms":  [
                         "Cold intolerance",
                         "Unexplained weight gain",
                         "Chronic fatigue",
                         "Constipation",
                         "Dry skin and brittle hair"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_hypothyroidism_levothyroxine_43",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hyperthyroidism",
        "name":  "Hyperthyroidism",
        "category":  "Endocrine",
        "categoryId":  "endocrine",
        "categorySlug":  "endocrine",
        "icd11Code":  "5A02",
        "icd11Title":  "Thyrotoxicosis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#5A02",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Reduces thyroid hormone production.",
        "symptoms":  [
                         "Heat intolerance",
                         "Palpitations and tachycardia",
                         "Weight loss despite increased appetite",
                         "Fine hand tremors"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_hyperthyroidism_methimazole_44",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "graves-disease",
        "name":  "Graves disease",
        "category":  "Endocrine",
        "categoryId":  "endocrine",
        "categorySlug":  "endocrine",
        "icd11Code":  "5A02.1",
        "icd11Title":  "Graves disease",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#5A02.1",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Controls thyroid hormone production.",
        "symptoms":  [
                         "Bilateral exophthalmos (proptosis)",
                         "Diffuse goiter with bruit",
                         "Pretibial myxedema",
                         "Tachycardia",
                         "Anxiety"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_graves-disease_methimazole_45",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "adrenal-insufficiency",
        "name":  "Adrenal insufficiency",
        "category":  "Endocrine",
        "categoryId":  "endocrine",
        "categorySlug":  "endocrine",
        "icd11Code":  "5A71",
        "icd11Title":  "Primary adrenocortical insufficiency",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#5A71",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Hormone replacement.",
        "symptoms":  [
                         "Severe postural hypotension",
                         "Chronic profound fatigue",
                         "Cutaneous hyperpigmentation",
                         "Salt cravings"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_adrenal-insufficiency_hydrocortisone_46",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "gout",
        "name":  "Gout",
        "category":  "Endocrine",
        "categoryId":  "endocrine",
        "categorySlug":  "endocrine",
        "icd11Code":  "FA25",
        "icd11Title":  "Gout",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#FA25",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Lowers uric acid to prevent flares.",
        "symptoms":  [
                         "Acute excruciating pain in 1st MTP joint (podagra)",
                         "Erythema and warmth",
                         "Severe localized swelling",
                         "Hypersensitivity to touch"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_gout_allopurinol_47",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "osteoporosis",
        "name":  "Osteoporosis",
        "category":  "Endocrine",
        "categoryId":  "endocrine",
        "categorySlug":  "endocrine",
        "icd11Code":  "FB83.1",
        "icd11Title":  "Osteoporosis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#FB83.1",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Reduces fracture risk; Reduces fracture risk.",
        "symptoms":  [
                         "Silent progressive bone loss",
                         "Low-trauma fragility fractures",
                         "Loss of height over time",
                         "Dorsal kyphosis (dowager hump)"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  [
                            "hkare_osteoporosis_alendronic-acid_48",
                            "hkare_osteoporosis_alendronic-acid_94"
                        ],
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hypercholesterolemia",
        "name":  "Hypercholesterolemia",
        "category":  "Endocrine",
        "categoryId":  "endocrine",
        "categorySlug":  "endocrine",
        "icd11Code":  "5C80.0",
        "icd11Title":  "Hypercholesterolaemia",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#5C80.0",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Lowers LDL cholesterol.",
        "symptoms":  [
                         "Asymptomatic vascular progression",
                         "Occasional xanthomas",
                         "Elevated lipid panel markers"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_hypercholesterolemia_rosuvastatin_49",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "gerd",
        "name":  "GERD",
        "category":  "Gastrointestinal",
        "categoryId":  "gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "icd11Code":  "DA22",
        "icd11Title":  "Gastro-oesophageal reflux disease",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#DA22",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Reduces gastric acid.",
        "symptoms":  [
                         "Substernal pyrosis (heartburn)",
                         "Acid regurgitation into throat",
                         "Water brash",
                         "Worse in recumbent position",
                         "Dysphagia"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_gerd_omeprazole_50",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "peptic-ulcer-disease",
        "name":  "Peptic ulcer disease",
        "category":  "Gastrointestinal",
        "categoryId":  "gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "icd11Code":  "DA60",
        "icd11Title":  "Gastric ulcer",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#DA60",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Acid suppression and ulcer healing.",
        "symptoms":  [
                         "Epigastric burning gnawing ache",
                         "Duodenal ulcer: relieved by food, worse 2-3h postprandial",
                         "Nighttime awakening with pain"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_peptic-ulcer-disease_omeprazole_51",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "h-pylori-infection",
        "name":  "H. pylori infection",
        "category":  "Gastrointestinal",
        "categoryId":  "gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "icd11Code":  "1A40",
        "icd11Title":  "Bacterial intestinal infections",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1A40",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Example eradication components.",
        "symptoms":  [
                         "Chronic postprandial dyspepsia",
                         "Epigastric fullness / bloating",
                         "Nausea",
                         "Frequent belching",
                         "Acid taste"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_h-pylori-infection_amoxicillin-clarithromycin-omeprazole_52",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "nausea-vomiting",
        "name":  "Nausea/vomiting",
        "category":  "Gastrointestinal",
        "categoryId":  "gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "icd11Code":  "MD90.0",
        "icd11Title":  "Nausea",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#MD90.0",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Controls nausea/vomiting in selected situations.",
        "symptoms":  [
                         "Persistent retching",
                         "Inability to keep liquids down",
                         "Abdominal cramping",
                         "Dehydration signs"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_nausea-vomiting_ondansetron_53",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "irritable-bowel-syndrome",
        "name":  "Irritable bowel syndrome",
        "category":  "Gastrointestinal",
        "categoryId":  "gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "icd11Code":  "DD91.0",
        "icd11Title":  "Irritable bowel syndrome",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#DD91.0",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: May relieve intestinal spasm.",
        "symptoms":  [
                         "Recurrent crampy abdominal pain related to defecation",
                         "Alternating constipation and diarrhea",
                         "Bloating and tenesmus"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_irritable-bowel-syndrome_mebeverine_54",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "inflammatory-bowel-disease",
        "name":  "Inflammatory bowel disease",
        "category":  "Gastrointestinal",
        "categoryId":  "gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "icd11Code":  "DD70",
        "icd11Title":  "Crohn disease",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#DD70",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Controls inflammation in selected ulcerative-colitis cases.",
        "symptoms":  [
                         "Chronic diarrhea with mucus/blood",
                         "Cramping abdominal pain",
                         "Urgency",
                         "Unexplained weight loss",
                         "Fever"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_inflammatory-bowel-disease_mesalazine_55",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "crohn-disease",
        "name":  "Crohn disease",
        "category":  "Gastrointestinal",
        "categoryId":  "gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "icd11Code":  "DD70",
        "icd11Title":  "Crohn disease",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#DD70",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Controls inflammatory disease in selected patients.",
        "symptoms":  [
                         "Right lower quadrant abdominal pain",
                         "Chronic watery non-bloody or bloody diarrhea",
                         "Perianal fissures/fistulas",
                         "Weight loss"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_crohn-disease_infliximab_56",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "ulcerative-colitis",
        "name":  "Ulcerative colitis",
        "category":  "Gastrointestinal",
        "categoryId":  "gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "icd11Code":  "DD71",
        "icd11Title":  "Ulcerative colitis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#DD71",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Induces/maintains remission in selected cases.",
        "symptoms":  [
                         "Bloody mucoid diarrhea",
                         "Nocturnal bowel movements",
                         "Tenesmus (painful urgency)",
                         "Lower abdominal cramping"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_ulcerative-colitis_mesalazine_57",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "constipation",
        "name":  "Constipation",
        "category":  "Gastrointestinal",
        "categoryId":  "gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "icd11Code":  "ME05.0",
        "icd11Title":  "Constipation",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#ME05.0",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Relieves constipation.",
        "symptoms":  [
                         "Infrequent hard lumpy stools (\u003c 3/week)",
                         "Straining at defecation",
                         "Sensation of incomplete evacuation",
                         "Abdominal distention"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_constipation_polyethylene-glycol_58",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "diarrhea",
        "name":  "Diarrhea",
        "category":  "Gastrointestinal",
        "categoryId":  "gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "icd11Code":  "ME05.1",
        "icd11Title":  "Diarrhoea",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#ME05.1",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Symptom relief in selected non-bloody diarrhea.",
        "symptoms":  [
                         "Frequent loose watery stools (\u003e 3/day)",
                         "Abdominal cramps",
                         "Urgency",
                         "Mild dehydration signs",
                         "Nausea"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_diarrhea_loperamide_59",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hemorrhoids",
        "name":  "Hemorrhoids",
        "category":  "Gastrointestinal",
        "categoryId":  "gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "icd11Code":  "DB60",
        "icd11Title":  "Haemorrhoids",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#DB60",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Short-term symptom relief.",
        "symptoms":  [
                         "Painless bright red rectal bleeding on stool",
                         "Perianal pruritus",
                         "Prolapsed painful anal lump",
                         "Discomfort sitting"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_hemorrhoids_hydrocortisone_60",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "pancreatitis",
        "name":  "Pancreatitis",
        "category":  "Gastrointestinal",
        "categoryId":  "gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "icd11Code":  "DC31",
        "icd11Title":  "Acute pancreatitis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#DC31",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Hospital supportive management.",
        "symptoms":  [
                         "Severe epigastric pain radiating directly to back",
                         "Worse after eating",
                         "Nausea and persistent vomiting",
                         "Tachycardia"
                     ],
        "emergencyFlags":  [
                               "Severe refractory abdominal pain",
                               "Hemodynamic collapse",
                               "Cullen or Grey-Turner signs"
                           ],
        "medicineIds":  "hkare_pancreatitis_analgesics-iv-fluids_61",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "chronic-hepatitis-c",
        "name":  "Chronic hepatitis C",
        "category":  "Liver",
        "categoryId":  "liver",
        "categorySlug":  "liver",
        "icd11Code":  "1E53",
        "icd11Title":  "Chronic viral hepatitis C",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1E53",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Curative antiviral regimen.",
        "symptoms":  [
                         "Insidious fatigue",
                         "Mild RUQ ache",
                         "Elevated AST/ALT",
                         "Spider angiomas in advanced stages"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_chronic-hepatitis-c_glecaprevir-pibrentasvir_62",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "cirrhosis",
        "name":  "Cirrhosis",
        "category":  "Liver",
        "categoryId":  "liver",
        "categorySlug":  "liver",
        "icd11Code":  "DB93",
        "icd11Title":  "Cirrhosis of liver",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#DB93",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Controls fluid retention in selected patients.",
        "symptoms":  [
                         "Ascites (abdominal swelling)",
                         "Caput medusae",
                         "Palmar erythema",
                         "Easy bruising / coagulopathy",
                         "Peripheral edema"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_cirrhosis_spironolactone_63",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hepatic-encephalopathy",
        "name":  "Hepatic encephalopathy",
        "category":  "Liver",
        "categoryId":  "liver",
        "categorySlug":  "liver",
        "icd11Code":  "DB93.Z",
        "icd11Title":  "Hepatic encephalopathy",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#DB93.Z",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Reduces ammonia absorption.",
        "symptoms":  [
                         "Asterixis (flapping hand tremor)",
                         "Reversal of sleep-wake cycle",
                         "Confusion",
                         "Disorientation",
                         "Slurred speech"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_hepatic-encephalopathy_lactulose_64",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "urinary-tract-infection",
        "name":  "Urinary tract infection",
        "category":  "Kidney/urinary",
        "categoryId":  "kidney-urinary",
        "categorySlug":  "kidney-urinary",
        "icd11Code":  "GC08",
        "icd11Title":  "Urinary tract infection, site not specified",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#GC08",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Treatment of selected lower UTIs.",
        "symptoms":  [
                         "Dysuria (burning on urination)",
                         "Urinary frequency and urgency",
                         "Suprapubic tenderness",
                         "Cloudy foul-smelling urine"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_urinary-tract-infection_nitrofurantoin_65",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "kidney-infection",
        "name":  "Kidney infection",
        "category":  "Kidney/urinary",
        "categoryId":  "kidney-urinary",
        "categorySlug":  "kidney-urinary",
        "icd11Code":  "GB54",
        "icd11Title":  "Acute pyelonephritis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#GB54",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Hospital/initial treatment in selected cases.",
        "symptoms":  [
                         "High fever with rigors",
                         "Costovertebral angle flank pain",
                         "Nausea and vomiting",
                         "Dysuria and hematuria"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_kidney-infection_ceftriaxone_66",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "kidney-stones",
        "name":  "Kidney stones",
        "category":  "Kidney/urinary",
        "categoryId":  "kidney-urinary",
        "categorySlug":  "kidney-urinary",
        "icd11Code":  "GB70",
        "icd11Title":  "Calculus of kidney",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#GB70",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: May aid passage of selected ureteric stones.",
        "symptoms":  [
                         "Severe spasmodic flank pain radiating to groin (renal colic)",
                         "Microscopic or gross hematuria",
                         "Nausea and restlessness"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_kidney-stones_tamsulosin_67",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "chronic-kidney-disease",
        "name":  "Chronic kidney disease",
        "category":  "Kidney/urinary",
        "categoryId":  "kidney-urinary",
        "categorySlug":  "kidney-urinary",
        "icd11Code":  "GB61",
        "icd11Title":  "Chronic kidney disease",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#GB61",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Kidney/BP protection in selected patients.",
        "symptoms":  [
                         "Early: asymptomatic",
                         "Later: periorbital morning edema",
                         "Nocturia",
                         "Pruritus",
                         "Fatigue",
                         "Foamy urine"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_chronic-kidney-disease_enalapril_68",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "overactive-bladder",
        "name":  "Overactive bladder",
        "category":  "Kidney/urinary",
        "categoryId":  "kidney-urinary",
        "categorySlug":  "kidney-urinary",
        "icd11Code":  "GC00.0",
        "icd11Title":  "Overactive bladder",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#GC00.0",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Reduces bladder overactivity.",
        "symptoms":  [
                         "Urinary urgency with or without incontinence",
                         "Frequency (\u003e 8 times in 24h)",
                         "Nocturia waking \u003e= 2 times"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_overactive-bladder_oxybutynin_69",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "migraine",
        "name":  "Migraine",
        "category":  "Neurological",
        "categoryId":  "neurological",
        "categorySlug":  "neurological",
        "icd11Code":  "8A80",
        "icd11Title":  "Migraine",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#8A80",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Acute migraine treatment; Migraine prevention in selected patients.",
        "symptoms":  [
                         "Unilateral throbbing pulsating headache",
                         "Photophobia and phonophobia",
                         "Visual or sensory aura",
                         "Nausea and vomiting"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  [
                            "hkare_migraine_sumatriptan_70",
                            "hkare_migraine_propranolol_71"
                        ],
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "epilepsy",
        "name":  "Epilepsy",
        "category":  "Neurological",
        "categoryId":  "neurological",
        "categorySlug":  "neurological",
        "icd11Code":  "8A60",
        "icd11Title":  "Epilepsy or seizures",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#8A60",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Seizure control; Seizure control in selected cases.",
        "symptoms":  [
                         "Generalized tonic-clonic motor convulsions",
                         "Transient focal absence lapses",
                         "Post-ictal confusion",
                         "Tongue biting"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  [
                            "hkare_epilepsy_levetiracetam_72",
                            "hkare_epilepsy_valproic-acid_73"
                        ],
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "parkinson-disease",
        "name":  "Parkinson disease",
        "category":  "Neurological",
        "categoryId":  "neurological",
        "categorySlug":  "neurological",
        "icd11Code":  "8A00",
        "icd11Title":  "Parkinson disease",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#8A00",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Improves motor symptoms.",
        "symptoms":  [
                         "Resting pill-rolling tremor",
                         "Cogwheel rigidity",
                         "Bradykinesia (slowness of movement)",
                         "Postural instability / shuffling gait"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_parkinson-disease_levodopa-carbidopa_74",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "alzheimer-disease",
        "name":  "Alzheimer disease",
        "category":  "Neurological",
        "categoryId":  "neurological",
        "categorySlug":  "neurological",
        "icd11Code":  "8A20",
        "icd11Title":  "Alzheimer disease",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#8A20",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Symptomatic treatment in selected patients.",
        "symptoms":  [
                         "Short-term episodic memory loss",
                         "Impaired executive function",
                         "Disorientation to time and place",
                         "Aphasia / word-finding difficulty"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_alzheimer-disease_donepezil_75",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "multiple-sclerosis",
        "name":  "Multiple sclerosis",
        "category":  "Neurological",
        "categoryId":  "neurological",
        "categorySlug":  "neurological",
        "icd11Code":  "8A40",
        "icd11Title":  "Multiple sclerosis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#8A40",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Reduces relapses in selected MS.",
        "symptoms":  [
                         "Optic neuritis with vision loss",
                         "Lhermitte sign (electric shock down spine)",
                         "Unilateral limb weakness",
                         "Ataxia and paresthesia"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_multiple-sclerosis_interferon-beta-1a_76",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "neuropathic-pain",
        "name":  "Neuropathic pain",
        "category":  "Neurological",
        "categoryId":  "neurological",
        "categorySlug":  "neurological",
        "icd11Code":  "8E43",
        "icd11Title":  "Chronic neuropathic pain",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#8E43",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Neuropathic pain treatment.",
        "symptoms":  [
                         "Lancinating or burning sensation",
                         "Allodynia (pain from light touch)",
                         "Hyperalgesia",
                         "Numbness and tingling"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_neuropathic-pain_gabapentin_77",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "trigeminal-neuralgia",
        "name":  "Trigeminal neuralgia",
        "category":  "Neurological",
        "categoryId":  "neurological",
        "categorySlug":  "neurological",
        "icd11Code":  "8B82.0",
        "icd11Title":  "Trigeminal neuralgia",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#8B82.0",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: First-line treatment in many cases.",
        "symptoms":  [
                         "Unilateral paroxysmal electric-shock facial pain",
                         "Triggered by chewing, touching face, or cold breeze",
                         "Brief stabbing episodes"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_trigeminal-neuralgia_carbamazepine_78",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "depressive-disorder",
        "name":  "Depressive disorder",
        "category":  "Mental health",
        "categoryId":  "mental-health",
        "categorySlug":  "mental-health",
        "icd11Code":  "6A70",
        "icd11Title":  "Single episode depressive disorder",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#6A70",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Treatment of depressive/anxiety disorders.",
        "symptoms":  [
                         "Persistent depressed mood (\u003e 2 weeks)",
                         "Anhedonia (loss of interest)",
                         "Insomnia or hypersomnia",
                         "Fatigue and feelings of worthlessness"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_depressive-disorder_sertraline_79",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "anxiety-disorder",
        "name":  "Anxiety disorder",
        "category":  "Mental health",
        "categoryId":  "mental-health",
        "categorySlug":  "mental-health",
        "icd11Code":  "6B00",
        "icd11Title":  "Generalized anxiety disorder",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#6B00",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Treatment of selected anxiety disorders.",
        "symptoms":  [
                         "Excessive persistent uncontrollable worry",
                         "Restlessness / feeling keyed up",
                         "Muscle tension",
                         "Fatigue",
                         "Irritability"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_anxiety-disorder_escitalopram_80",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "obsessive-compulsive-disorder",
        "name":  "Obsessive-compulsive disorder",
        "category":  "Mental health",
        "categoryId":  "mental-health",
        "categorySlug":  "mental-health",
        "icd11Code":  "6B20",
        "icd11Title":  "Obsessive-compulsive disorder",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#6B20",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Treatment of OCD in selected patients.",
        "symptoms":  [
                         "Intrusive distressing recurrent thoughts (obsessions)",
                         "Repetitive ritualistic behaviors (compulsions) to relieve anxiety"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_obsessive-compulsive-disorder_fluoxetine_81",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "panic-disorder",
        "name":  "Panic disorder",
        "category":  "Mental health",
        "categoryId":  "mental-health",
        "categorySlug":  "mental-health",
        "icd11Code":  "6B01",
        "icd11Title":  "Panic disorder",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#6B01",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Long-term treatment in selected cases.",
        "symptoms":  [
                         "Recurrent abrupt surges of intense fear (panic attacks)",
                         "Palpitations and pounding heart",
                         "Chest tightness",
                         "Sense of impending doom"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_panic-disorder_sertraline_82",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "adhd",
        "name":  "ADHD",
        "category":  "Mental health",
        "categoryId":  "mental-health",
        "categorySlug":  "mental-health",
        "icd11Code":  "6A05",
        "icd11Title":  "Attention deficit hyperactivity disorder",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#6A05",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: ADHD treatment in selected patients.",
        "symptoms":  [
                         "Persistent inattention",
                         "Hyperactivity and impulsivity",
                         "Disorganization and task incompletion",
                         "Restlessness"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_adhd_methylphenidate_83",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "acne",
        "name":  "Acne",
        "category":  "Skin",
        "categoryId":  "skin",
        "categorySlug":  "skin",
        "icd11Code":  "ED80",
        "icd11Title":  "Acne vulgaris",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#ED80",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Treats comedonal/inflammatory acne; Reduces acne bacteria/inflammation.",
        "symptoms":  [
                         "Open and closed comedones (blackheads/whiteheads)",
                         "Inflammatory erythematous papules and pustules",
                         "Nodules and cysts on face/chest"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  [
                            "hkare_acne_adapalene_84",
                            "hkare_acne_benzoyl-peroxide_85"
                        ],
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "eczema",
        "name":  "Eczema",
        "category":  "Skin",
        "categoryId":  "skin",
        "categorySlug":  "skin",
        "icd11Code":  "EA80",
        "icd11Title":  "Atopic eczema",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#EA80",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Reduces inflammation.",
        "symptoms":  [
                         "Intense pruritus (itching)",
                         "Erythematous scaly patches",
                         "Lichenification from chronic scratching",
                         "Xerosis (dry skin)"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_eczema_hydrocortisone_86",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "psoriasis",
        "name":  "Psoriasis",
        "category":  "Skin",
        "categoryId":  "skin",
        "categorySlug":  "skin",
        "icd11Code":  "EA90",
        "icd11Title":  "Psoriasis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#EA90",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Reduces inflammation in selected lesions.",
        "symptoms":  [
                         "Well-demarcated erythematous plaques",
                         "Silvery-white micaceous scales",
                         "Auspitz sign (pinpoint bleeding upon scraping)",
                         "Extensor predilection"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_psoriasis_betamethasone_87",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "fungal-skin-infection",
        "name":  "Fungal skin infection",
        "category":  "Skin",
        "categoryId":  "skin",
        "categorySlug":  "skin",
        "icd11Code":  "1F28",
        "icd11Title":  "Dermatophytosis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1F28",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Treats susceptible superficial fungal infections.",
        "symptoms":  [
                         "Annular ring-like erythematous plaques (ringworm)",
                         "Central clearing with active scaly border",
                         "Intense itching",
                         "Maceration between toes"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_fungal-skin-infection_clotrimazole_88",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "bacterial-skin-infection",
        "name":  "Bacterial skin infection",
        "category":  "Skin",
        "categoryId":  "skin",
        "categorySlug":  "skin",
        "icd11Code":  "1B70",
        "icd11Title":  "Bacterial skin infections",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#1B70",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Topical treatment of selected bacterial infections.",
        "symptoms":  [
                         "Erythema, warmth, and localized edema (cellulitis)",
                         "Honey-colored crusting (impetigo)",
                         "Pustules and folliculitis"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_bacterial-skin-infection_mupirocin_89",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "urticaria",
        "name":  "Urticaria",
        "category":  "Skin",
        "categoryId":  "skin",
        "categorySlug":  "skin",
        "icd11Code":  "EA91",
        "icd11Title":  "Urticaria",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#EA91",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Relieves itching/hives.",
        "symptoms":  [
                         "Evanescent itchy wheals (hives)",
                         "Surrounding flare erythema",
                         "Blanches with pressure",
                         "Lesions resolve within 24h"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_urticaria_cetirizine_90",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "vitiligo",
        "name":  "Vitiligo",
        "category":  "Skin",
        "categoryId":  "skin",
        "categorySlug":  "skin",
        "icd11Code":  "ED63",
        "icd11Title":  "Vitiligo",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#ED63",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: May help repigmentation in selected areas.",
        "symptoms":  [
                         "Completely depigmented chalky-white macules/patches",
                         "Well-demarcated margins",
                         "Common on periorificial areas and dorsal hands"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_vitiligo_tacrolimus_91",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "osteoarthritis",
        "name":  "Osteoarthritis",
        "category":  "Musculoskeletal",
        "categoryId":  "musculoskeletal",
        "categorySlug":  "musculoskeletal",
        "icd11Code":  "FA00",
        "icd11Title":  "Osteoarthritis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#FA00",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Pain relief.",
        "symptoms":  [
                         "Deep aching joint pain worse with use",
                         "Morning stiffness lasting \u003c 30 minutes",
                         "Crepitus on active movement",
                         "Bony enlargement (Heberden nodes)"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_osteoarthritis_paracetamol_92",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "rheumatoid-arthritis",
        "name":  "Rheumatoid arthritis",
        "category":  "Musculoskeletal",
        "categoryId":  "musculoskeletal",
        "categorySlug":  "musculoskeletal",
        "icd11Code":  "FA20",
        "icd11Title":  "Rheumatoid arthritis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#FA20",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Disease-modifying treatment; Disease modification.",
        "symptoms":  [
                         "Symmetric polyarthritis in MCP and PIP joints",
                         "Prolonged morning stiffness (\u003e 1 hour)",
                         "Warm swollen boggy joints",
                         "Rheumatoid nodules"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  [
                            "hkare_rheumatoid-arthritis_methotrexate_93",
                            "hkare_rheumatoid-arthritis_methotrexate_125"
                        ],
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "ankylosing-spondylitis",
        "name":  "Ankylosing spondylitis",
        "category":  "Musculoskeletal",
        "categoryId":  "musculoskeletal",
        "categorySlug":  "musculoskeletal",
        "icd11Code":  "FA92",
        "icd11Title":  "Ankylosing spondylitis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#FA92",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Pain/inflammation control.",
        "symptoms":  [
                         "Chronic inflammatory back pain",
                         "Stiffness worse with rest, relieved by exercise",
                         "Sacroiliac joint tenderness",
                         "Chest expansion limitation"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_ankylosing-spondylitis_naproxen_95",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "gout-flare",
        "name":  "Gout flare",
        "category":  "Musculoskeletal",
        "categoryId":  "musculoskeletal",
        "categorySlug":  "musculoskeletal",
        "icd11Code":  "FA25.0",
        "icd11Title":  "Acute gouty arthritis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#FA25.0",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Acute inflammation/pain relief.",
        "symptoms":  [
                         "Acute severe monoarticular inflammation",
                         "Erythema, swelling, and exquisite tenderness",
                         "Rapid onset over hours, often nighttime"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_gout-flare_naproxen_96",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "fibromyalgia",
        "name":  "Fibromyalgia",
        "category":  "Musculoskeletal",
        "categoryId":  "musculoskeletal",
        "categorySlug":  "musculoskeletal",
        "icd11Code":  "MG30.01",
        "icd11Title":  "Chronic widespread pain (Fibromyalgia)",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#MG30.01",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: May reduce pain in selected patients.",
        "symptoms":  [
                         "Widespread chronic musculoskeletal pain across multiple quadrants",
                         "Multiple bilateral tender trigger points",
                         "Chronic unrefreshing sleep",
                         "Cognitive fog"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_fibromyalgia_duloxetine_97",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "glaucoma",
        "name":  "Glaucoma",
        "category":  "Eye",
        "categoryId":  "eye",
        "categorySlug":  "eye",
        "icd11Code":  "9C61",
        "icd11Title":  "Glaucoma",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#9C61",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Lowers intraocular pressure.",
        "symptoms":  [
                         "Gradual peripheral visual field loss (tunnel vision)",
                         "Elevated intraocular pressure",
                         "Acute angle closure: severe ocular pain, headache, halos around lights"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_glaucoma_latanoprost_98",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "conjunctivitis",
        "name":  "Conjunctivitis",
        "category":  "Eye",
        "categoryId":  "eye",
        "categorySlug":  "eye",
        "icd11Code":  "9A60",
        "icd11Title":  "Conjunctivitis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#9A60",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Symptom relief.",
        "symptoms":  [
                         "Conjunctival injection (pink/red eye)",
                         "Foreign-body sensation",
                         "Watery or purulent ocular discharge",
                         "Crusting of eyelashes upon waking"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_conjunctivitis_artificial-tears_99",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "allergic-conjunctivitis",
        "name":  "Allergic conjunctivitis",
        "category":  "Eye",
        "categoryId":  "eye",
        "categorySlug":  "eye",
        "icd11Code":  "9A61.1",
        "icd11Title":  "Allergic conjunctivitis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#9A61.1",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Allergy symptom relief.",
        "symptoms":  [
                         "Intense bilateral ocular pruritus (itching)",
                         "Watery discharge",
                         "Conjunctival chemosis (edema)",
                         "Periorbital dark circles"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_allergic-conjunctivitis_olopatadine_100",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "dry-eye-disease",
        "name":  "Dry eye disease",
        "category":  "Eye",
        "categoryId":  "eye",
        "categorySlug":  "eye",
        "icd11Code":  "9A94",
        "icd11Title":  "Dry eye syndrome",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#9A94",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Lubrication.",
        "symptoms":  [
                         "Gritty sandy burning ocular sensation",
                         "Paradoxical reflex tearing",
                         "Visual fatigue",
                         "Fluctuating vision exacerbated by screen use"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_dry-eye-disease_carboxymethylcellulose_101",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "otitis-externa",
        "name":  "Otitis externa",
        "category":  "Ear",
        "categoryId":  "ear",
        "categorySlug":  "ear",
        "icd11Code":  "AA00",
        "icd11Title":  "Otitis externa",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#AA00",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Treats selected bacterial outer-ear infections.",
        "symptoms":  [
                         "Severe otalgia exacerbated by traction on auricle/tragus",
                         "Pruritus and fullness in ear canal",
                         "Erythema and purulent otorrhea"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_otitis-externa_ciprofloxacin-dexamethasone_102",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "otitis-media",
        "name":  "Otitis media",
        "category":  "Ear",
        "categoryId":  "ear",
        "categorySlug":  "ear",
        "icd11Code":  "AA20",
        "icd11Title":  "Otitis media",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#AA20",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Pain relief; antibiotic in selected cases.",
        "symptoms":  [
                         "Acute deep throbbing otalgia",
                         "Conductive hearing loss",
                         "Erythematous bulging tympanic membrane",
                         "Fever in pediatric patients"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_otitis-media_paracetamol-amoxicillin_103",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "endometriosis",
        "name":  "Endometriosis",
        "category":  "Reproductive",
        "categoryId":  "reproductive",
        "categorySlug":  "reproductive",
        "icd11Code":  "GA10",
        "icd11Title":  "Endometriosis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#GA10",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Reduces symptoms in selected patients.",
        "symptoms":  [
                         "Severe progressive dysmenorrhea",
                         "Chronic non-cyclic pelvic pain",
                         "Deep dyspareunia (pain with intercourse)",
                         "Dyschezia during menses"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_endometriosis_levonorgestrel_104",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "pcos",
        "name":  "PCOS",
        "category":  "Reproductive",
        "categoryId":  "reproductive",
        "categorySlug":  "reproductive",
        "icd11Code":  "5A80.1",
        "icd11Title":  "Polycystic ovary syndrome",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#5A80.1",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Metabolic management in selected PCOS patients.",
        "symptoms":  [
                         "Oligomenorrhea or amenorrhea",
                         "Hirsutism and adult cystic acne",
                         "Central weight gain and insulin resistance",
                         "Polycystic ovarian morphology"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_pcos_metformin_105",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "benign-prostatic-hyperplasia",
        "name":  "Benign prostatic hyperplasia",
        "category":  "Reproductive",
        "categoryId":  "reproductive",
        "categorySlug":  "reproductive",
        "icd11Code":  "GA90",
        "icd11Title":  "Benign prostatic hyperplasia",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#GA90",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Improves urinary symptoms.",
        "symptoms":  [
                         "Hesitancy and weak urinary stream",
                         "Nocturia and frequency",
                         "Post-void dribbling",
                         "Sensation of incomplete bladder emptying"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_benign-prostatic-hyperplasia_tamsulosin_106",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "erectile-dysfunction",
        "name":  "Erectile dysfunction",
        "category":  "Reproductive",
        "categoryId":  "reproductive",
        "categorySlug":  "reproductive",
        "icd11Code":  "HA01.1",
        "icd11Title":  "Male erectile dysfunction",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#HA01.1",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Improves erectile function in eligible patients.",
        "symptoms":  [
                         "Persistent inability to achieve or maintain penile erection satisfactory for sexual intercourse",
                         "Reduced libido"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_erectile-dysfunction_sildenafil_107",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "pelvic-inflammatory-disease",
        "name":  "Pelvic inflammatory disease",
        "category":  "Reproductive",
        "categoryId":  "reproductive",
        "categorySlug":  "reproductive",
        "icd11Code":  "GA00",
        "icd11Title":  "Female pelvic inflammatory disease",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#GA00",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Treatment of selected PID.",
        "symptoms":  [
                         "Bilateral lower abdominal/pelvic pain",
                         "Abnormal purulent vaginal discharge",
                         "Cervical motion tenderness (chandelier sign)",
                         "Fever"
                     ],
        "emergencyFlags":  [
                               "High fever with pelvic peritonitis",
                               "Tubo-ovarian abscess signs",
                               "Septic signs"
                           ],
        "medicineIds":  "hkare_pelvic-inflammatory-disease_ceftriaxone-doxycycline-metronidazole_108",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "iron-deficiency-anemia",
        "name":  "Iron-deficiency anemia",
        "category":  "Hematology",
        "categoryId":  "hematology",
        "categorySlug":  "hematology",
        "icd11Code":  "3A00",
        "icd11Title":  "Iron deficiency anaemia",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#3A00",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Replaces iron.",
        "symptoms":  [
                         "Fatigue, pallor, and exertional dyspnea",
                         "Koilonychia (spoon nails)",
                         "Angular cheilitis",
                         "Atrophic glossitis",
                         "Pica (craving ice/clay)"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_iron-deficiency-anemia_ferrous-sulfate_109",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "vitamin-b12-deficiency",
        "name":  "Vitamin B12 deficiency",
        "category":  "Hematology",
        "categoryId":  "hematology",
        "categorySlug":  "hematology",
        "icd11Code":  "3A01.0",
        "icd11Title":  "Vitamin B12 deficiency anaemia",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#3A01.0",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: B12 replacement.",
        "symptoms":  [
                         "Megaloblastic anemia with fatigue",
                         "Symmetric peripheral neuropathy (tingling/numbness)",
                         "Subacute combined spinal degeneration",
                         "Glossitis"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_vitamin-b12-deficiency_cyanocobalamin_110",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "folate-deficiency",
        "name":  "Folate deficiency",
        "category":  "Hematology",
        "categoryId":  "hematology",
        "categorySlug":  "hematology",
        "icd11Code":  "3A01.1",
        "icd11Title":  "Folate deficiency anaemia",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#3A01.1",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Folate replacement.",
        "symptoms":  [
                         "Fatigue, weakness, and pallor",
                         "Sore tongue (glossitis)",
                         "Absence of neurological symptoms (unlike B12)"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_folate-deficiency_folic-acid_111",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hemophilia-a",
        "name":  "Hemophilia A",
        "category":  "Hematology",
        "categoryId":  "hematology",
        "categorySlug":  "hematology",
        "icd11Code":  "3B10.0",
        "icd11Title":  "Congenital factor VIII deficiency",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#3B10.0",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Replaces missing clotting factor.",
        "symptoms":  [
                         "Spontaneous recurrent hemarthrosis (joint bleeding)",
                         "Deep intramuscular hematomas",
                         "Prolonged bleeding after mild trauma",
                         "Target joint arthropathy"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_hemophilia-a_factor-viii_112",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "sickle-cell-disease",
        "name":  "Sickle-cell disease",
        "category":  "Hematology",
        "categoryId":  "hematology",
        "categorySlug":  "hematology",
        "icd11Code":  "3A51",
        "icd11Title":  "Sickle cell disorders",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#3A51",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Reduces complications in selected patients.",
        "symptoms":  [
                         "Severe acute vaso-occlusive pain crises in bones/chest",
                         "Chronic hemolytic anemia and jaundice",
                         "Dactylitis in infants",
                         "Splenic sequestration"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_sickle-cell-disease_hydroxyurea_113",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "thalassemia",
        "name":  "Thalassemia",
        "category":  "Hematology",
        "categoryId":  "hematology",
        "categorySlug":  "hematology",
        "icd11Code":  "3A50",
        "icd11Title":  "Thalassaemia",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#3A50",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Reduces transfusional iron overload.",
        "symptoms":  [
                         "Severe microcytic anemia from early childhood",
                         "Hepatosplenomegaly",
                         "Bone marrow expansion with frontal bossing",
                         "Transfusional iron overload"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_thalassemia_deferasirox_114",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "breast-cancer",
        "name":  "Breast cancer",
        "category":  "Cancer",
        "categoryId":  "cancer",
        "categorySlug":  "cancer",
        "icd11Code":  "2C60",
        "icd11Title":  "Malignant neoplasms of breast",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#2C60",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Hormone-receptor-positive disease in selected patients.",
        "symptoms":  [
                         "Painless solitary breast mass or thickening",
                         "Nipple retraction or bloody discharge",
                         "Skin dimpling (peau d\u0027orange)",
                         "Axillary lymphadenopathy"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_breast-cancer_tamoxifen_115",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "prostate-cancer",
        "name":  "Prostate cancer",
        "category":  "Cancer",
        "categoryId":  "cancer",
        "categorySlug":  "cancer",
        "icd11Code":  "2C82",
        "icd11Title":  "Malignant neoplasms of prostate",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#2C82",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Hormone-sensitive disease in selected patients.",
        "symptoms":  [
                         "Often asymptomatic in early stages",
                         "Obstructive urinary symptoms (hesitancy/weak stream)",
                         "Bone pain in metastatic disease"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_prostate-cancer_leuprolide_116",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "leukemia",
        "name":  "Leukemia",
        "category":  "Cancer",
        "categoryId":  "cancer",
        "categorySlug":  "cancer",
        "icd11Code":  "2A60",
        "icd11Title":  "Leukaemia",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#2A60",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: BCR-ABL-positive leukemia.",
        "symptoms":  [
                         "Fatigue, pallor, and recurrent infections",
                         "Easy bruising, petechiae, and epistaxis",
                         "Bone and joint pain",
                         "Splenomegaly"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_leukemia_imatinib_117",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "multiple-myeloma",
        "name":  "Multiple myeloma",
        "category":  "Cancer",
        "categoryId":  "cancer",
        "categorySlug":  "cancer",
        "icd11Code":  "2A83",
        "icd11Title":  "Multiple myeloma",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#2A83",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Cancer treatment in combination regimens.",
        "symptoms":  [
                         "Bone pain (especially lumbar spine/ribs)",
                         "Pathologic fractures",
                         "Hypercalcemia (lethargy, constipation)",
                         "Renal impairment",
                         "Normocytic anemia"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_multiple-myeloma_bortezomib_118",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "lung-cancer",
        "name":  "Lung cancer",
        "category":  "Cancer",
        "categoryId":  "cancer",
        "categorySlug":  "cancer",
        "icd11Code":  "2C25",
        "icd11Title":  "Malignant neoplasms of bronchus or lung",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#2C25",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: EGFR-mutated NSCLC in selected patients.",
        "symptoms":  [
                         "Persistent worsening cough",
                         "Hemoptysis",
                         "Substernal chest pain",
                         "Hoarseness",
                         "Unexplained weight loss",
                         "Dyspnea"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_lung-cancer_osimertinib_119",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "cervical-cancer",
        "name":  "Cervical cancer",
        "category":  "Cancer",
        "categoryId":  "cancer",
        "categorySlug":  "cancer",
        "icd11Code":  "2C77",
        "icd11Title":  "Malignant neoplasms of cervix uteri",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#2C77",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Used in selected cancer regimens.",
        "symptoms":  [
                         "Abnormal postcoital or intermenstrual vaginal bleeding",
                         "Foul-smelling watery vaginal discharge",
                         "Pelvic pain in advanced stages"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_cervical-cancer_cisplatin_120",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "colorectal-cancer",
        "name":  "Colorectal cancer",
        "category":  "Cancer",
        "categoryId":  "cancer",
        "categorySlug":  "cancer",
        "icd11Code":  "2C40",
        "icd11Title":  "Malignant neoplasms of colon",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#2C40",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Used in combination regimens.",
        "symptoms":  [
                         "Persistent change in bowel habits",
                         "Visible rectal bleeding or melena",
                         "Iron deficiency anemia in right-sided tumors",
                         "Tenesmus"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_colorectal-cancer_5-fluorouracil_121",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "lymphoma",
        "name":  "Lymphoma",
        "category":  "Cancer",
        "categoryId":  "cancer",
        "categorySlug":  "cancer",
        "icd11Code":  "2A80",
        "icd11Title":  "Hodgkin lymphoma \u0026 non-Hodgkin",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#2A80",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: B-cell malignancies in selected regimens.",
        "symptoms":  [
                         "Painless firm rubbery lymphadenopathy (cervical/axillary)",
                         "B-symptoms: drenching night sweats, fever \u003e38Â°C, unexplained weight loss"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_lymphoma_rituximab_122",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "severe-allergic-reaction",
        "name":  "Severe allergic reaction",
        "category":  "Allergy/immune",
        "categoryId":  "allergy-immune",
        "categorySlug":  "allergy-immune",
        "icd11Code":  "4A84",
        "icd11Title":  "Anaphylaxis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#4A84",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Emergency treatment of anaphylaxis.",
        "symptoms":  [
                         "Sudden respiratory distress / stridor / bronchospasm",
                         "Angioedema of lips/tongue/pharynx",
                         "Hypotension / circulatory collapse",
                         "Diffuse urticaria"
                     ],
        "emergencyFlags":  [
                               "Stridor / Laryngeal edema",
                               "Hypotension / Shock",
                               "Respiratory failure",
                               "Cyanosis"
                           ],
        "medicineIds":  "hkare_severe-allergic-reaction_epinephrine_123",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "allergic-dermatitis",
        "name":  "Allergic dermatitis",
        "category":  "Allergy/immune",
        "categoryId":  "allergy-immune",
        "categorySlug":  "allergy-immune",
        "icd11Code":  "EA80",
        "icd11Title":  "Allergic contact dermatitis",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#EA80",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Itch relief.",
        "symptoms":  [
                         "Pruritic vesicular rash localized to allergen contact area",
                         "Erythema, edema, and weeping vesicles",
                         "Lichenified plaques in chronic contact"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_allergic-dermatitis_cetirizine_124",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "systemic-lupus-erythematosus",
        "name":  "Systemic lupus erythematosus",
        "category":  "Allergy/immune",
        "categoryId":  "allergy-immune",
        "categorySlug":  "allergy-immune",
        "icd11Code":  "4A40",
        "icd11Title":  "Systemic lupus erythematosus",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#4A40",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Disease control in selected patients.",
        "symptoms":  [
                         "Malar butterfly rash sparing nasolabial folds",
                         "Photosensitivity",
                         "Non-erosive symmetric polyarthritis",
                         "Renal proteinuria",
                         "Oral ulcers"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_systemic-lupus-erythematosus_hydroxychloroquine_126",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "inflammatory-arthritis",
        "name":  "Inflammatory arthritis",
        "category":  "Allergy/immune",
        "categoryId":  "allergy-immune",
        "categorySlug":  "allergy-immune",
        "icd11Code":  "FA20",
        "icd11Title":  "Inflammatory arthropathies",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#FA20",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Pain/inflammation relief.",
        "symptoms":  [
                         "Joint inflammation with warmth and swelling",
                         "Morning stiffness \u003e 45 minutes",
                         "Elevated CRP/ESR",
                         "Joint effusion"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_inflammatory-arthritis_ibuprofen_127",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "fever",
        "name":  "Fever",
        "category":  "Emergency/supportive",
        "categoryId":  "emergency-supportive",
        "categorySlug":  "emergency-supportive",
        "icd11Code":  "MG26",
        "icd11Title":  "Fever of other or unknown origin",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#MG26",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Fever/pain relief.",
        "symptoms":  [
                         "Elevated core body temperature (\u003e 37.8Â°C / 100Â°F)",
                         "Chills and rigors",
                         "Diaphoresis (sweating)",
                         "Malaise and myalgia"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_fever_paracetamol_128",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "mild-pain",
        "name":  "Mild pain",
        "category":  "Emergency/supportive",
        "categoryId":  "emergency-supportive",
        "categorySlug":  "emergency-supportive",
        "icd11Code":  "MG30",
        "icd11Title":  "Chronic or acute pain",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#MG30",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Pain relief.",
        "symptoms":  [
                         "Localized discomfort of mild to moderate intensity (NRS 1-4)",
                         "Tension headache",
                         "Minor muscular soreness"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_mild-pain_paracetamol_129",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "moderate-inflammatory-pain",
        "name":  "Moderate inflammatory pain",
        "category":  "Emergency/supportive",
        "categoryId":  "emergency-supportive",
        "categorySlug":  "emergency-supportive",
        "icd11Code":  "MG30",
        "icd11Title":  "Pain associated with inflammation",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#MG30",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Pain/inflammation relief.",
        "symptoms":  [
                         "Throbbing aching localized pain with inflammation",
                         "Soft-tissue strain or sprain",
                         "Musculoskeletal inflammation"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_moderate-inflammatory-pain_ibuprofen_130",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "dehydration",
        "name":  "Dehydration",
        "category":  "Emergency/supportive",
        "categoryId":  "emergency-supportive",
        "categorySlug":  "emergency-supportive",
        "icd11Code":  "5C73",
        "icd11Title":  "Dehydration",
        "icd11Uri":  "https://icd.who.int/browse/2024-01/mms/en#5C73",
        "icd11Release":  "2026-01",
        "description":  "Standard evidence-based management includes: Replaces fluids/electrolytes.",
        "symptoms":  [
                         "Dry oral mucous membranes",
                         "Reduced skin turgor",
                         "Oliguria with concentrated dark urine",
                         "Postural dizziness / tachycardia",
                         "Lethargy"
                     ],
        "emergencyFlags":  {

                           },
        "medicineIds":  "hkare_dehydration_glucose-sodium-chloride-potassium-chloride-citrate_131",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    }
],
  medicines: [
    {
        "id":  "hkare_influenza_oseltamivir_1",
        "activeIngredient":  "Oseltamivir",
        "medicineClass":  "Antiviral",
        "condition":  "Influenza",
        "conditionId":  "influenza",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Antiviral treatment in selected influenza cases",
        "safetyNote":  "Doctor-guided; timing and risk factors matter",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_covid-19_nirmatrelvir-ritonavir_2",
        "activeIngredient":  "Nirmatrelvir + ritonavir",
        "medicineClass":  "Antiviral",
        "condition":  "COVID-19",
        "conditionId":  "covid-19",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Antiviral treatment for selected high-risk cases",
        "safetyNote":  "Prescription; major drug interactions",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_tuberculosis_rifampicin-isoniazid-pyrazinamide-ethambutol_3",
        "activeIngredient":  "Rifampicin + isoniazid + pyrazinamide + ethambutol",
        "medicineClass":  "Antitubercular",
        "condition":  "Tuberculosis",
        "conditionId":  "tuberculosis",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Combination treatment",
        "safetyNote":  "Specialist/public-health regimen; never self-treat",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_malaria_artemether-lumefantrine_4",
        "activeIngredient":  "Artemether + lumefantrine",
        "medicineClass":  "Antimalarial",
        "condition":  "Malaria",
        "conditionId":  "malaria",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Treatment of susceptible malaria",
        "safetyNote":  "Regimen depends on species, resistance and severity",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_dengue_paracetamol_5",
        "activeIngredient":  "Paracetamol (acetaminophen)",
        "medicineClass":  "Supportive care",
        "condition":  "Dengue",
        "conditionId":  "dengue",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Fever/pain relief",
        "safetyNote":  "Avoid aspirin/NSAIDs when dengue is suspected unless clinician advises",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_typhoid-fever_ceftriaxone-azithromycin_6",
        "activeIngredient":  "Ceftriaxone / azithromycin",
        "medicineClass":  "Antibiotic",
        "condition":  "Typhoid fever",
        "conditionId":  "typhoid-fever",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Treatment of susceptible bacterial infection",
        "safetyNote":  "Choice depends on resistance and testing",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_cholera_doxycycline-azithromycin_7",
        "activeIngredient":  "Doxycycline / azithromycin",
        "medicineClass":  "Antibiotic + rehydration",
        "condition":  "Cholera",
        "conditionId":  "cholera",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Antibiotic in selected cases",
        "safetyNote":  "Rehydration is central; antibiotic choice varies",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_measles_vitamin-a_8",
        "activeIngredient":  "Vitamin A",
        "medicineClass":  "Supportive / vitamin",
        "condition":  "Measles",
        "conditionId":  "measles",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Supportive management in children under clinical guidance",
        "safetyNote":  "Medical supervision required",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_mumps_paracetamol_9",
        "activeIngredient":  "Paracetamol (acetaminophen)",
        "medicineClass":  "Supportive care",
        "condition":  "Mumps",
        "conditionId":  "mumps",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Fever/pain relief",
        "safetyNote":  "Supportive care; diagnosis and complications need assessment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_rubella_paracetamol_10",
        "activeIngredient":  "Paracetamol (acetaminophen)",
        "medicineClass":  "Supportive care",
        "condition":  "Rubella",
        "conditionId":  "rubella",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Symptom relief",
        "safetyNote":  "Pregnancy exposure needs medical assessment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_chickenpox_acyclovir_11",
        "activeIngredient":  "Acyclovir",
        "medicineClass":  "Antiviral",
        "condition":  "Chickenpox",
        "conditionId":  "chickenpox",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Treatment in selected higher-risk cases",
        "safetyNote":  "Early clinician assessment important",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_shingles_acyclovir-valaciclovir_12",
        "activeIngredient":  "Acyclovir / valaciclovir",
        "medicineClass":  "Antiviral",
        "condition":  "Shingles",
        "conditionId":  "shingles",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Antiviral treatment",
        "safetyNote":  "Early treatment is most useful; clinician guidance",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_hepatitis-b_tenofovir-disoproxil-fumarate_13",
        "activeIngredient":  "Tenofovir disoproxil fumarate",
        "medicineClass":  "Antiviral",
        "condition":  "Hepatitis B",
        "conditionId":  "hepatitis-b",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Long-term antiviral therapy in selected chronic cases",
        "safetyNote":  "Specialist monitoring required",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_hepatitis-c_sofosbuvir-velpatasvir_14",
        "activeIngredient":  "Sofosbuvir + velpatasvir",
        "medicineClass":  "Direct-acting antiviral",
        "condition":  "Hepatitis C",
        "conditionId":  "hepatitis-c",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Curative antiviral regimen",
        "safetyNote":  "Regimen depends on genotype/history and interactions",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_hiv-infection_tenofovir-lamivudine-dolutegravir_15",
        "activeIngredient":  "Tenofovir + lamivudine + dolutegravir",
        "medicineClass":  "Antiretroviral therapy",
        "condition":  "HIV infection",
        "conditionId":  "hiv-infection",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Combination antiretroviral therapy",
        "safetyNote":  "Specialist-guided combination therapy",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_rabies_rabies-vaccine-rabies-immunoglobulin_16",
        "activeIngredient":  "Rabies vaccine + rabies immunoglobulin",
        "medicineClass":  "Post-exposure prophylaxis",
        "condition":  "Rabies",
        "conditionId":  "rabies",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Post-exposure prevention",
        "safetyNote":  "Urgent medical care; not self-treatment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_tetanus_tetanus-toxoid-vaccine-tetanus-immunoglobulin_17",
        "activeIngredient":  "Tetanus toxoid vaccine + tetanus immunoglobulin",
        "medicineClass":  "Vaccine / immunoglobulin",
        "condition":  "Tetanus",
        "conditionId":  "tetanus",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Prevention after selected wounds",
        "safetyNote":  "Wound and vaccination history determine treatment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_bacterial-meningitis_ceftriaxone_18",
        "activeIngredient":  "Ceftriaxone",
        "medicineClass":  "Antibiotic",
        "condition":  "Bacterial meningitis",
        "conditionId":  "bacterial-meningitis",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Empiric treatment in many settings",
        "safetyNote":  "Medical emergency; hospital treatment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_pneumococcal-pneumonia_amoxicillin_19",
        "activeIngredient":  "Amoxicillin",
        "medicineClass":  "Antibiotic",
        "condition":  "Pneumococcal pneumonia",
        "conditionId":  "pneumococcal-pneumonia",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Treatment of susceptible bacterial infection",
        "safetyNote":  "Diagnosis and severity determine treatment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_scabies_permethrin_20",
        "activeIngredient":  "Permethrin",
        "medicineClass":  "Antiparasitic",
        "condition":  "Scabies",
        "conditionId":  "scabies",
        "category":  "Infectious",
        "categorySlug":  "infectious",
        "generalMedicalRole":  "Eradicates mites",
        "safetyNote":  "Household treatment and age considerations matter",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_asthma_salbutamol_21",
        "activeIngredient":  "Salbutamol",
        "medicineClass":  "Short-acting bronchodilator",
        "condition":  "Asthma",
        "conditionId":  "asthma",
        "category":  "Respiratory",
        "categorySlug":  "respiratory",
        "generalMedicalRole":  "Relief of bronchospasm",
        "safetyNote":  "Controller therapy may also be required",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_asthma_budesonide_22",
        "activeIngredient":  "Budesonide",
        "medicineClass":  "Inhaled corticosteroid",
        "condition":  "Asthma",
        "conditionId":  "asthma",
        "category":  "Respiratory",
        "categorySlug":  "respiratory",
        "generalMedicalRole":  "Long-term airway inflammation control",
        "safetyNote":  "Use depends on asthma severity",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_copd_tiotropium_23",
        "activeIngredient":  "Tiotropium",
        "medicineClass":  "Long-acting bronchodilator",
        "condition":  "COPD",
        "conditionId":  "copd",
        "category":  "Respiratory",
        "categorySlug":  "respiratory",
        "generalMedicalRole":  "Maintenance bronchodilation",
        "safetyNote":  "Clinician-selected therapy",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_allergic-rhinitis_cetirizine_24",
        "activeIngredient":  "Cetirizine",
        "medicineClass":  "Antihistamine",
        "condition":  "Allergic rhinitis",
        "conditionId":  "allergic-rhinitis",
        "category":  "Respiratory",
        "categorySlug":  "respiratory",
        "generalMedicalRole":  "Allergy symptom relief",
        "safetyNote":  "May cause drowsiness in some people",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_allergic-rhinitis_fluticasone_25",
        "activeIngredient":  "Fluticasone",
        "medicineClass":  "Intranasal corticosteroid",
        "condition":  "Allergic rhinitis",
        "conditionId":  "allergic-rhinitis",
        "category":  "Respiratory",
        "categorySlug":  "respiratory",
        "generalMedicalRole":  "Nasal inflammation control",
        "safetyNote":  "Correct technique matters",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_acute-bronchitis_paracetamol_26",
        "activeIngredient":  "Paracetamol (acetaminophen)",
        "medicineClass":  "Supportive care",
        "condition":  "Acute bronchitis",
        "conditionId":  "acute-bronchitis",
        "category":  "Respiratory",
        "categorySlug":  "respiratory",
        "generalMedicalRole":  "Fever/pain relief",
        "safetyNote":  "Most acute cases are viral; antibiotics often aren\u0027t needed",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_pulmonary-fibrosis_nintedanib_27",
        "activeIngredient":  "Nintedanib",
        "medicineClass":  "Antifibrotic",
        "condition":  "Pulmonary fibrosis",
        "conditionId":  "pulmonary-fibrosis",
        "category":  "Respiratory",
        "categorySlug":  "respiratory",
        "generalMedicalRole":  "Slows progression in selected fibrotic lung diseases",
        "safetyNote":  "Specialist monitoring required",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_sleep-apnea_cpap_28",
        "activeIngredient":  "CPAP",
        "medicineClass":  "Positive airway pressure",
        "condition":  "Sleep apnea",
        "conditionId":  "sleep-apnea",
        "category":  "Respiratory",
        "categorySlug":  "respiratory",
        "generalMedicalRole":  "Keeps airway open during sleep",
        "safetyNote":  "Device treatment rather than a medicine",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_hypertension_enalapril_29",
        "activeIngredient":  "Enalapril",
        "medicineClass":  "ACE inhibitor",
        "condition":  "Hypertension",
        "conditionId":  "hypertension",
        "category":  "Cardiovascular",
        "categorySlug":  "cardiovascular",
        "generalMedicalRole":  "Blood-pressure control",
        "safetyNote":  "Clinician selection; pregnancy contraindication",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_hypertension_amlodipine_30",
        "activeIngredient":  "Amlodipine",
        "medicineClass":  "Calcium-channel blocker",
        "condition":  "Hypertension",
        "conditionId":  "hypertension",
        "category":  "Cardiovascular",
        "categorySlug":  "cardiovascular",
        "generalMedicalRole":  "Blood-pressure control",
        "safetyNote":  "Dose/choice depends on patient factors",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_hypertension_indapamide_31",
        "activeIngredient":  "Indapamide",
        "medicineClass":  "Thiazide-like diuretic",
        "condition":  "Hypertension",
        "conditionId":  "hypertension",
        "category":  "Cardiovascular",
        "categorySlug":  "cardiovascular",
        "generalMedicalRole":  "Blood-pressure control",
        "safetyNote":  "Electrolyte monitoring may be needed",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_heart-failure_enalapril_32",
        "activeIngredient":  "Enalapril",
        "medicineClass":  "ACE inhibitor",
        "condition":  "Heart failure",
        "conditionId":  "heart-failure",
        "category":  "Cardiovascular",
        "categorySlug":  "cardiovascular",
        "generalMedicalRole":  "Reduces symptoms/events in selected patients",
        "safetyNote":  "Specialist-guided regimen",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_heart-failure_bisoprolol_33",
        "activeIngredient":  "Bisoprolol",
        "medicineClass":  "Beta blocker",
        "condition":  "Heart failure",
        "conditionId":  "heart-failure",
        "category":  "Cardiovascular",
        "categorySlug":  "cardiovascular",
        "generalMedicalRole":  "Selected stable heart-failure patients",
        "safetyNote":  "Not for unsupervised initiation",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_atrial-fibrillation_apixaban_34",
        "activeIngredient":  "Apixaban",
        "medicineClass":  "Anticoagulant",
        "condition":  "Atrial fibrillation",
        "conditionId":  "atrial-fibrillation",
        "category":  "Cardiovascular",
        "categorySlug":  "cardiovascular",
        "generalMedicalRole":  "Prevention of stroke/systemic embolism in selected patients",
        "safetyNote":  "Bleeding risk and eligibility assessment required",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_coronary-artery-disease_aspirin_35",
        "activeIngredient":  "Aspirin",
        "medicineClass":  "Antiplatelet",
        "condition":  "Coronary artery disease",
        "conditionId":  "coronary-artery-disease",
        "category":  "Cardiovascular",
        "categorySlug":  "cardiovascular",
        "generalMedicalRole":  "Prevention of cardiovascular events in selected patients",
        "safetyNote":  "Not appropriate for everyone",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_high-ldl-cholesterol_atorvastatin_36",
        "activeIngredient":  "Atorvastatin",
        "medicineClass":  "Statin",
        "condition":  "High LDL cholesterol",
        "conditionId":  "high-ldl-cholesterol",
        "category":  "Cardiovascular",
        "categorySlug":  "cardiovascular",
        "generalMedicalRole":  "Lowers LDL cholesterol",
        "safetyNote":  "Clinician-guided risk assessment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_angina_glyceryl-trinitrate_37",
        "activeIngredient":  "Glyceryl trinitrate",
        "medicineClass":  "Nitrate",
        "condition":  "Angina",
        "conditionId":  "angina",
        "category":  "Cardiovascular",
        "categorySlug":  "cardiovascular",
        "generalMedicalRole":  "Rapid relief of angina",
        "safetyNote":  "Emergency symptoms require urgent evaluation",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_deep-vein-thrombosis_apixaban_38",
        "activeIngredient":  "Apixaban",
        "medicineClass":  "Anticoagulant",
        "condition":  "Deep-vein thrombosis",
        "conditionId":  "deep-vein-thrombosis",
        "category":  "Cardiovascular",
        "categorySlug":  "cardiovascular",
        "generalMedicalRole":  "Treatment/prevention of recurrent venous thrombosis",
        "safetyNote":  "Prescription and bleeding assessment required",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_pulmonary-embolism_apixaban_39",
        "activeIngredient":  "Apixaban",
        "medicineClass":  "Anticoagulant",
        "condition":  "Pulmonary embolism",
        "conditionId":  "pulmonary-embolism",
        "category":  "Cardiovascular",
        "categorySlug":  "cardiovascular",
        "generalMedicalRole":  "Anticoagulation in eligible patients",
        "safetyNote":  "Medical emergency; treatment must be clinician-guided",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_type-1-diabetes_human-insulin-insulin-analogues_40",
        "activeIngredient":  "Human insulin / insulin analogues",
        "medicineClass":  "Insulin",
        "condition":  "Type 1 diabetes",
        "conditionId":  "type-1-diabetes",
        "category":  "Endocrine",
        "categorySlug":  "endocrine",
        "generalMedicalRole":  "Replaces insulin",
        "safetyNote":  "Individualized medical management",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_type-2-diabetes_metformin_41",
        "activeIngredient":  "Metformin",
        "medicineClass":  "Biguanide",
        "condition":  "Type 2 diabetes",
        "conditionId":  "type-2-diabetes",
        "category":  "Endocrine",
        "categorySlug":  "endocrine",
        "generalMedicalRole":  "Blood-glucose lowering",
        "safetyNote":  "Kidney function and other factors matter",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_type-2-diabetes_empagliflozin_42",
        "activeIngredient":  "Empagliflozin",
        "medicineClass":  "SGLT2 inhibitor",
        "condition":  "Type 2 diabetes",
        "conditionId":  "type-2-diabetes",
        "category":  "Endocrine",
        "categorySlug":  "endocrine",
        "generalMedicalRole":  "Glucose lowering and cardiovascular/kidney benefits in selected patients",
        "safetyNote":  "Prescription; contraindications/interactions matter",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_hypothyroidism_levothyroxine_43",
        "activeIngredient":  "Levothyroxine",
        "medicineClass":  "Thyroid hormone",
        "condition":  "Hypothyroidism",
        "conditionId":  "hypothyroidism",
        "category":  "Endocrine",
        "categorySlug":  "endocrine",
        "generalMedicalRole":  "Thyroid hormone replacement",
        "safetyNote":  "Dose individualized using thyroid tests",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_hyperthyroidism_methimazole_44",
        "activeIngredient":  "Methimazole",
        "medicineClass":  "Antithyroid",
        "condition":  "Hyperthyroidism",
        "conditionId":  "hyperthyroidism",
        "category":  "Endocrine",
        "categorySlug":  "endocrine",
        "generalMedicalRole":  "Reduces thyroid hormone production",
        "safetyNote":  "Blood-test monitoring; clinician-guided",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_graves-disease_methimazole_45",
        "activeIngredient":  "Methimazole",
        "medicineClass":  "Antithyroid",
        "condition":  "Graves disease",
        "conditionId":  "graves-disease",
        "category":  "Endocrine",
        "categorySlug":  "endocrine",
        "generalMedicalRole":  "Controls thyroid hormone production",
        "safetyNote":  "Specialist guidance required",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_adrenal-insufficiency_hydrocortisone_46",
        "activeIngredient":  "Hydrocortisone",
        "medicineClass":  "Glucocorticoid",
        "condition":  "Adrenal insufficiency",
        "conditionId":  "adrenal-insufficiency",
        "category":  "Endocrine",
        "categorySlug":  "endocrine",
        "generalMedicalRole":  "Hormone replacement",
        "safetyNote":  "Medical condition requiring an individualized plan",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_gout_allopurinol_47",
        "activeIngredient":  "Allopurinol",
        "medicineClass":  "Xanthine-oxidase inhibitor",
        "condition":  "Gout",
        "conditionId":  "gout",
        "category":  "Endocrine",
        "categorySlug":  "endocrine",
        "generalMedicalRole":  "Lowers uric acid to prevent flares",
        "safetyNote":  "Not a medicine for immediate pain relief; initiation needs guidance",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_osteoporosis_alendronic-acid_48",
        "activeIngredient":  "Alendronic acid",
        "medicineClass":  "Bisphosphonate",
        "condition":  "Osteoporosis",
        "conditionId":  "osteoporosis",
        "category":  "Endocrine",
        "categorySlug":  "endocrine",
        "generalMedicalRole":  "Reduces fracture risk",
        "safetyNote":  "Administration and contraindications matter",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_hypercholesterolemia_rosuvastatin_49",
        "activeIngredient":  "Rosuvastatin",
        "medicineClass":  "Statin",
        "condition":  "Hypercholesterolemia",
        "conditionId":  "hypercholesterolemia",
        "category":  "Endocrine",
        "categorySlug":  "endocrine",
        "generalMedicalRole":  "Lowers LDL cholesterol",
        "safetyNote":  "Clinician-guided",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_gerd_omeprazole_50",
        "activeIngredient":  "Omeprazole",
        "medicineClass":  "Proton-pump inhibitor",
        "condition":  "GERD",
        "conditionId":  "gerd",
        "category":  "Gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "generalMedicalRole":  "Reduces gastric acid",
        "safetyNote":  "Persistent symptoms need evaluation",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_peptic-ulcer-disease_omeprazole_51",
        "activeIngredient":  "Omeprazole",
        "medicineClass":  "Proton-pump inhibitor",
        "condition":  "Peptic ulcer disease",
        "conditionId":  "peptic-ulcer-disease",
        "category":  "Gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "generalMedicalRole":  "Acid suppression and ulcer healing",
        "safetyNote":  "H. pylori requires specific eradication therapy",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_h-pylori-infection_amoxicillin-clarithromycin-omeprazole_52",
        "activeIngredient":  "Amoxicillin + clarithromycin + omeprazole",
        "medicineClass":  "Combination therapy",
        "condition":  "H. pylori infection",
        "conditionId":  "h-pylori-infection",
        "category":  "Gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "generalMedicalRole":  "Example eradication components",
        "safetyNote":  "Regimen varies with resistance and local guidance",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_nausea-vomiting_ondansetron_53",
        "activeIngredient":  "Ondansetron",
        "medicineClass":  "Antiemetic",
        "condition":  "Nausea/vomiting",
        "conditionId":  "nausea-vomiting",
        "category":  "Gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "generalMedicalRole":  "Controls nausea/vomiting in selected situations",
        "safetyNote":  "Cause must be assessed",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_irritable-bowel-syndrome_mebeverine_54",
        "activeIngredient":  "Mebeverine",
        "medicineClass":  "Antispasmodic",
        "condition":  "Irritable bowel syndrome",
        "conditionId":  "irritable-bowel-syndrome",
        "category":  "Gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "generalMedicalRole":  "May relieve intestinal spasm",
        "safetyNote":  "Treatment depends on symptom pattern",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_inflammatory-bowel-disease_mesalazine_55",
        "activeIngredient":  "Mesalazine",
        "medicineClass":  "Aminosalicylate",
        "condition":  "Inflammatory bowel disease",
        "conditionId":  "inflammatory-bowel-disease",
        "category":  "Gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "generalMedicalRole":  "Controls inflammation in selected ulcerative-colitis cases",
        "safetyNote":  "Specialist-guided",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_crohn-disease_infliximab_56",
        "activeIngredient":  "Infliximab",
        "medicineClass":  "Biologic",
        "condition":  "Crohn disease",
        "conditionId":  "crohn-disease",
        "category":  "Gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "generalMedicalRole":  "Controls inflammatory disease in selected patients",
        "safetyNote":  "Specialist treatment; infection screening/monitoring",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_ulcerative-colitis_mesalazine_57",
        "activeIngredient":  "Mesalazine",
        "medicineClass":  "Aminosalicylate",
        "condition":  "Ulcerative colitis",
        "conditionId":  "ulcerative-colitis",
        "category":  "Gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "generalMedicalRole":  "Induces/maintains remission in selected cases",
        "safetyNote":  "Specialist-guided",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_constipation_polyethylene-glycol_58",
        "activeIngredient":  "Polyethylene glycol",
        "medicineClass":  "Osmotic laxative",
        "condition":  "Constipation",
        "conditionId":  "constipation",
        "category":  "Gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "generalMedicalRole":  "Relieves constipation",
        "safetyNote":  "Persistent/recurrent constipation needs assessment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_diarrhea_loperamide_59",
        "activeIngredient":  "Loperamide",
        "medicineClass":  "Antidiarrheal",
        "condition":  "Diarrhea",
        "conditionId":  "diarrhea",
        "category":  "Gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "generalMedicalRole":  "Symptom relief in selected non-bloody diarrhea",
        "safetyNote":  "Avoid in some infections/children without clinician advice",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_hemorrhoids_hydrocortisone_60",
        "activeIngredient":  "Hydrocortisone",
        "medicineClass":  "Topical treatment",
        "condition":  "Hemorrhoids",
        "conditionId":  "hemorrhoids",
        "category":  "Gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "generalMedicalRole":  "Short-term symptom relief",
        "safetyNote":  "Persistent bleeding requires assessment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_pancreatitis_analgesics-iv-fluids_61",
        "activeIngredient":  "Analgesics / IV fluids",
        "medicineClass":  "Supportive care",
        "condition":  "Pancreatitis",
        "conditionId":  "pancreatitis",
        "category":  "Gastrointestinal",
        "categorySlug":  "gastrointestinal",
        "generalMedicalRole":  "Hospital supportive management",
        "safetyNote":  "Not suitable for self-treatment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_chronic-hepatitis-c_glecaprevir-pibrentasvir_62",
        "activeIngredient":  "Glecaprevir + pibrentasvir",
        "medicineClass":  "Direct-acting antiviral",
        "condition":  "Chronic hepatitis C",
        "conditionId":  "chronic-hepatitis-c",
        "category":  "Liver",
        "categorySlug":  "liver",
        "generalMedicalRole":  "Curative antiviral regimen",
        "safetyNote":  "Specialist-guided",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_cirrhosis_spironolactone_63",
        "activeIngredient":  "Spironolactone",
        "medicineClass":  "Diuretic",
        "condition":  "Cirrhosis",
        "conditionId":  "cirrhosis",
        "category":  "Liver",
        "categorySlug":  "liver",
        "generalMedicalRole":  "Controls fluid retention in selected patients",
        "safetyNote":  "Electrolyte/kidney monitoring",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_hepatic-encephalopathy_lactulose_64",
        "activeIngredient":  "Lactulose",
        "medicineClass":  "Non-absorbable disaccharide",
        "condition":  "Hepatic encephalopathy",
        "conditionId":  "hepatic-encephalopathy",
        "category":  "Liver",
        "categorySlug":  "liver",
        "generalMedicalRole":  "Reduces ammonia absorption",
        "safetyNote":  "Dose and cause require medical management",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_urinary-tract-infection_nitrofurantoin_65",
        "activeIngredient":  "Nitrofurantoin",
        "medicineClass":  "Antibiotic",
        "condition":  "Urinary tract infection",
        "conditionId":  "urinary-tract-infection",
        "category":  "Kidney/urinary",
        "categorySlug":  "kidney-urinary",
        "generalMedicalRole":  "Treatment of selected lower UTIs",
        "safetyNote":  "Choice depends on site, kidney function and susceptibility",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_kidney-infection_ceftriaxone_66",
        "activeIngredient":  "Ceftriaxone",
        "medicineClass":  "Antibiotic",
        "condition":  "Kidney infection",
        "conditionId":  "kidney-infection",
        "category":  "Kidney/urinary",
        "categorySlug":  "kidney-urinary",
        "generalMedicalRole":  "Hospital/initial treatment in selected cases",
        "safetyNote":  "Needs medical assessment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_kidney-stones_tamsulosin_67",
        "activeIngredient":  "Tamsulosin",
        "medicineClass":  "Alpha blocker",
        "condition":  "Kidney stones",
        "conditionId":  "kidney-stones",
        "category":  "Kidney/urinary",
        "categorySlug":  "kidney-urinary",
        "generalMedicalRole":  "May aid passage of selected ureteric stones",
        "safetyNote":  "Not suitable for every stone/patient",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_chronic-kidney-disease_enalapril_68",
        "activeIngredient":  "Enalapril",
        "medicineClass":  "ACE inhibitor",
        "condition":  "Chronic kidney disease",
        "conditionId":  "chronic-kidney-disease",
        "category":  "Kidney/urinary",
        "categorySlug":  "kidney-urinary",
        "generalMedicalRole":  "Kidney/BP protection in selected patients",
        "safetyNote":  "Kidney function and potassium monitoring",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_overactive-bladder_oxybutynin_69",
        "activeIngredient":  "Oxybutynin",
        "medicineClass":  "Antimuscarinic",
        "condition":  "Overactive bladder",
        "conditionId":  "overactive-bladder",
        "category":  "Kidney/urinary",
        "categorySlug":  "kidney-urinary",
        "generalMedicalRole":  "Reduces bladder overactivity",
        "safetyNote":  "Side effects and alternatives need assessment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_migraine_sumatriptan_70",
        "activeIngredient":  "Sumatriptan",
        "medicineClass":  "Triptan",
        "condition":  "Migraine",
        "conditionId":  "migraine",
        "category":  "Neurological",
        "categorySlug":  "neurological",
        "generalMedicalRole":  "Acute migraine treatment",
        "safetyNote":  "Not appropriate for some cardiovascular conditions",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_migraine_propranolol_71",
        "activeIngredient":  "Propranolol",
        "medicineClass":  "Preventive therapy",
        "condition":  "Migraine",
        "conditionId":  "migraine",
        "category":  "Neurological",
        "categorySlug":  "neurological",
        "generalMedicalRole":  "Migraine prevention in selected patients",
        "safetyNote":  "Prescription; asthma and other factors matter",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_epilepsy_levetiracetam_72",
        "activeIngredient":  "Levetiracetam",
        "medicineClass":  "Antiseizure medicine",
        "condition":  "Epilepsy",
        "conditionId":  "epilepsy",
        "category":  "Neurological",
        "categorySlug":  "neurological",
        "generalMedicalRole":  "Seizure control",
        "safetyNote":  "Specialist-guided",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_epilepsy_valproic-acid_73",
        "activeIngredient":  "Valproic acid",
        "medicineClass":  "Antiseizure medicine",
        "condition":  "Epilepsy",
        "conditionId":  "epilepsy",
        "category":  "Neurological",
        "categorySlug":  "neurological",
        "generalMedicalRole":  "Seizure control in selected cases",
        "safetyNote":  "Major pregnancy-related safety concerns; specialist-only decision",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_parkinson-disease_levodopa-carbidopa_74",
        "activeIngredient":  "Levodopa + carbidopa",
        "medicineClass":  "Dopaminergic therapy",
        "condition":  "Parkinson disease",
        "conditionId":  "parkinson-disease",
        "category":  "Neurological",
        "categorySlug":  "neurological",
        "generalMedicalRole":  "Improves motor symptoms",
        "safetyNote":  "Specialist-guided",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_alzheimer-disease_donepezil_75",
        "activeIngredient":  "Donepezil",
        "medicineClass":  "Cholinesterase inhibitor",
        "condition":  "Alzheimer disease",
        "conditionId":  "alzheimer-disease",
        "category":  "Neurological",
        "categorySlug":  "neurological",
        "generalMedicalRole":  "Symptomatic treatment in selected patients",
        "safetyNote":  "Does not cure disease",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_multiple-sclerosis_interferon-beta-1a_76",
        "activeIngredient":  "Interferon beta-1a",
        "medicineClass":  "Disease-modifying therapy",
        "condition":  "Multiple sclerosis",
        "conditionId":  "multiple-sclerosis",
        "category":  "Neurological",
        "categorySlug":  "neurological",
        "generalMedicalRole":  "Reduces relapses in selected MS",
        "safetyNote":  "Specialist treatment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_neuropathic-pain_gabapentin_77",
        "activeIngredient":  "Gabapentin",
        "medicineClass":  "Antiseizure medicine",
        "condition":  "Neuropathic pain",
        "conditionId":  "neuropathic-pain",
        "category":  "Neurological",
        "categorySlug":  "neurological",
        "generalMedicalRole":  "Neuropathic pain treatment",
        "safetyNote":  "Prescription; sedation and misuse risks",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_trigeminal-neuralgia_carbamazepine_78",
        "activeIngredient":  "Carbamazepine",
        "medicineClass":  "Antiseizure medicine",
        "condition":  "Trigeminal neuralgia",
        "conditionId":  "trigeminal-neuralgia",
        "category":  "Neurological",
        "categorySlug":  "neurological",
        "generalMedicalRole":  "First-line treatment in many cases",
        "safetyNote":  "Drug interactions and blood monitoring matter",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_depressive-disorder_sertraline_79",
        "activeIngredient":  "Sertraline",
        "medicineClass":  "SSRI antidepressant",
        "condition":  "Depressive disorder",
        "conditionId":  "depressive-disorder",
        "category":  "Mental health",
        "categorySlug":  "mental-health",
        "generalMedicalRole":  "Treatment of depressive/anxiety disorders",
        "safetyNote":  "Prescription; individualized monitoring",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_anxiety-disorder_escitalopram_80",
        "activeIngredient":  "Escitalopram",
        "medicineClass":  "SSRI antidepressant",
        "condition":  "Anxiety disorder",
        "conditionId":  "anxiety-disorder",
        "category":  "Mental health",
        "categorySlug":  "mental-health",
        "generalMedicalRole":  "Treatment of selected anxiety disorders",
        "safetyNote":  "Prescription; individualized monitoring",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_obsessive-compulsive-disorder_fluoxetine_81",
        "activeIngredient":  "Fluoxetine",
        "medicineClass":  "SSRI antidepressant",
        "condition":  "Obsessive-compulsive disorder",
        "conditionId":  "obsessive-compulsive-disorder",
        "category":  "Mental health",
        "categorySlug":  "mental-health",
        "generalMedicalRole":  "Treatment of OCD in selected patients",
        "safetyNote":  "Prescription and monitoring",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_panic-disorder_sertraline_82",
        "activeIngredient":  "Sertraline",
        "medicineClass":  "SSRI antidepressant",
        "condition":  "Panic disorder",
        "conditionId":  "panic-disorder",
        "category":  "Mental health",
        "categorySlug":  "mental-health",
        "generalMedicalRole":  "Long-term treatment in selected cases",
        "safetyNote":  "Prescription and monitoring",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_adhd_methylphenidate_83",
        "activeIngredient":  "Methylphenidate",
        "medicineClass":  "Stimulant",
        "condition":  "ADHD",
        "conditionId":  "adhd",
        "category":  "Mental health",
        "categorySlug":  "mental-health",
        "generalMedicalRole":  "ADHD treatment in selected patients",
        "safetyNote":  "Controlled/prescription medicine; specialist assessment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_acne_adapalene_84",
        "activeIngredient":  "Adapalene",
        "medicineClass":  "Topical retinoid",
        "condition":  "Acne",
        "conditionId":  "acne",
        "category":  "Skin",
        "categorySlug":  "skin",
        "generalMedicalRole":  "Treats comedonal/inflammatory acne",
        "safetyNote":  "Skin irritation; pregnancy considerations",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_acne_benzoyl-peroxide_85",
        "activeIngredient":  "Benzoyl peroxide",
        "medicineClass":  "Topical antimicrobial",
        "condition":  "Acne",
        "conditionId":  "acne",
        "category":  "Skin",
        "categorySlug":  "skin",
        "generalMedicalRole":  "Reduces acne bacteria/inflammation",
        "safetyNote":  "May irritate skin",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_eczema_hydrocortisone_86",
        "activeIngredient":  "Hydrocortisone",
        "medicineClass":  "Topical corticosteroid",
        "condition":  "Eczema",
        "conditionId":  "eczema",
        "category":  "Skin",
        "categorySlug":  "skin",
        "generalMedicalRole":  "Reduces inflammation",
        "safetyNote":  "Strength/site/duration should be clinician-guided when significant",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_psoriasis_betamethasone_87",
        "activeIngredient":  "Betamethasone",
        "medicineClass":  "Topical corticosteroid",
        "condition":  "Psoriasis",
        "conditionId":  "psoriasis",
        "category":  "Skin",
        "categorySlug":  "skin",
        "generalMedicalRole":  "Reduces inflammation in selected lesions",
        "safetyNote":  "Potency and duration matter",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_fungal-skin-infection_clotrimazole_88",
        "activeIngredient":  "Clotrimazole",
        "medicineClass":  "Antifungal",
        "condition":  "Fungal skin infection",
        "conditionId":  "fungal-skin-infection",
        "category":  "Skin",
        "categorySlug":  "skin",
        "generalMedicalRole":  "Treats susceptible superficial fungal infections",
        "safetyNote":  "Diagnosis matters because rashes can look similar",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_bacterial-skin-infection_mupirocin_89",
        "activeIngredient":  "Mupirocin",
        "medicineClass":  "Antibiotic",
        "condition":  "Bacterial skin infection",
        "conditionId":  "bacterial-skin-infection",
        "category":  "Skin",
        "categorySlug":  "skin",
        "generalMedicalRole":  "Topical treatment of selected bacterial infections",
        "safetyNote":  "Antibiotic stewardship; not for every rash",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_urticaria_cetirizine_90",
        "activeIngredient":  "Cetirizine",
        "medicineClass":  "Antihistamine",
        "condition":  "Urticaria",
        "conditionId":  "urticaria",
        "category":  "Skin",
        "categorySlug":  "skin",
        "generalMedicalRole":  "Relieves itching/hives",
        "safetyNote":  "Emergency care if breathing/swelling symptoms occur",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_vitiligo_tacrolimus_91",
        "activeIngredient":  "Tacrolimus",
        "medicineClass":  "Topical calcineurin inhibitor",
        "condition":  "Vitiligo",
        "conditionId":  "vitiligo",
        "category":  "Skin",
        "categorySlug":  "skin",
        "generalMedicalRole":  "May help repigmentation in selected areas",
        "safetyNote":  "Specialist/dermatology guidance",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_osteoarthritis_paracetamol_92",
        "activeIngredient":  "Paracetamol (acetaminophen)",
        "medicineClass":  "Analgesic",
        "condition":  "Osteoarthritis",
        "conditionId":  "osteoarthritis",
        "category":  "Musculoskeletal",
        "categorySlug":  "musculoskeletal",
        "generalMedicalRole":  "Pain relief",
        "safetyNote":  "Effectiveness varies; dose limits matter",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_rheumatoid-arthritis_methotrexate_93",
        "activeIngredient":  "Methotrexate",
        "medicineClass":  "DMARD",
        "condition":  "Rheumatoid arthritis",
        "conditionId":  "rheumatoid-arthritis",
        "category":  "Musculoskeletal",
        "categorySlug":  "musculoskeletal",
        "generalMedicalRole":  "Disease-modifying treatment",
        "safetyNote":  "Specialist monitoring; not for self-treatment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_osteoporosis_alendronic-acid_94",
        "activeIngredient":  "Alendronic acid",
        "medicineClass":  "Bisphosphonate",
        "condition":  "Osteoporosis",
        "conditionId":  "osteoporosis",
        "category":  "Musculoskeletal",
        "categorySlug":  "musculoskeletal",
        "generalMedicalRole":  "Reduces fracture risk",
        "safetyNote":  "Medical assessment and administration requirements",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_ankylosing-spondylitis_naproxen_95",
        "activeIngredient":  "Naproxen",
        "medicineClass":  "NSAID",
        "condition":  "Ankylosing spondylitis",
        "conditionId":  "ankylosing-spondylitis",
        "category":  "Musculoskeletal",
        "categorySlug":  "musculoskeletal",
        "generalMedicalRole":  "Pain/inflammation control",
        "safetyNote":  "GI/kidney/cardiovascular risks",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_gout-flare_naproxen_96",
        "activeIngredient":  "Naproxen",
        "medicineClass":  "NSAID",
        "condition":  "Gout flare",
        "conditionId":  "gout-flare",
        "category":  "Musculoskeletal",
        "categorySlug":  "musculoskeletal",
        "generalMedicalRole":  "Acute inflammation/pain relief",
        "safetyNote":  "Not appropriate for some kidney/GI/cardiovascular conditions",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_fibromyalgia_duloxetine_97",
        "activeIngredient":  "Duloxetine",
        "medicineClass":  "SNRI",
        "condition":  "Fibromyalgia",
        "conditionId":  "fibromyalgia",
        "category":  "Musculoskeletal",
        "categorySlug":  "musculoskeletal",
        "generalMedicalRole":  "May reduce pain in selected patients",
        "safetyNote":  "Prescription and monitoring",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_glaucoma_latanoprost_98",
        "activeIngredient":  "Latanoprost",
        "medicineClass":  "Prostaglandin analogue",
        "condition":  "Glaucoma",
        "conditionId":  "glaucoma",
        "category":  "Eye",
        "categorySlug":  "eye",
        "generalMedicalRole":  "Lowers intraocular pressure",
        "safetyNote":  "Ophthalmology-guided",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_conjunctivitis_artificial-tears_99",
        "activeIngredient":  "Artificial tears",
        "medicineClass":  "Lubricant",
        "condition":  "Conjunctivitis",
        "conditionId":  "conjunctivitis",
        "category":  "Eye",
        "categorySlug":  "eye",
        "generalMedicalRole":  "Symptom relief",
        "safetyNote":  "Bacterial/viral/allergic causes differ",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_allergic-conjunctivitis_olopatadine_100",
        "activeIngredient":  "Olopatadine",
        "medicineClass":  "Antihistamine/mast-cell stabilizer",
        "condition":  "Allergic conjunctivitis",
        "conditionId":  "allergic-conjunctivitis",
        "category":  "Eye",
        "categorySlug":  "eye",
        "generalMedicalRole":  "Allergy symptom relief",
        "safetyNote":  "Eye examination if severe/persistent",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_dry-eye-disease_carboxymethylcellulose_101",
        "activeIngredient":  "Carboxymethylcellulose",
        "medicineClass":  "Lubricant",
        "condition":  "Dry eye disease",
        "conditionId":  "dry-eye-disease",
        "category":  "Eye",
        "categorySlug":  "eye",
        "generalMedicalRole":  "Lubrication",
        "safetyNote":  "Persistent/severe symptoms need eye assessment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_otitis-externa_ciprofloxacin-dexamethasone_102",
        "activeIngredient":  "Ciprofloxacin + dexamethasone",
        "medicineClass":  "Antibiotic/steroid ear drops",
        "condition":  "Otitis externa",
        "conditionId":  "otitis-externa",
        "category":  "Ear",
        "categorySlug":  "ear",
        "generalMedicalRole":  "Treats selected bacterial outer-ear infections",
        "safetyNote":  "Ear examination needed before treatment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_otitis-media_paracetamol-amoxicillin_103",
        "activeIngredient":  "Paracetamol / amoxicillin",
        "medicineClass":  "Analgesic / selected antibiotic",
        "condition":  "Otitis media",
        "conditionId":  "otitis-media",
        "category":  "Ear",
        "categorySlug":  "ear",
        "generalMedicalRole":  "Pain relief; antibiotic in selected cases",
        "safetyNote":  "Many cases can resolve without antibiotics",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_endometriosis_levonorgestrel_104",
        "activeIngredient":  "Levonorgestrel",
        "medicineClass":  "Hormonal therapy",
        "condition":  "Endometriosis",
        "conditionId":  "endometriosis",
        "category":  "Reproductive",
        "categorySlug":  "reproductive",
        "generalMedicalRole":  "Reduces symptoms in selected patients",
        "safetyNote":  "Gynecologic assessment required",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_pcos_metformin_105",
        "activeIngredient":  "Metformin",
        "medicineClass":  "Insulin-sensitizing medicine",
        "condition":  "PCOS",
        "conditionId":  "pcos",
        "category":  "Reproductive",
        "categorySlug":  "reproductive",
        "generalMedicalRole":  "Metabolic management in selected PCOS patients",
        "safetyNote":  "Treatment goals vary",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_benign-prostatic-hyperplasia_tamsulosin_106",
        "activeIngredient":  "Tamsulosin",
        "medicineClass":  "Alpha-1 blocker",
        "condition":  "Benign prostatic hyperplasia",
        "conditionId":  "benign-prostatic-hyperplasia",
        "category":  "Reproductive",
        "categorySlug":  "reproductive",
        "generalMedicalRole":  "Improves urinary symptoms",
        "safetyNote":  "Medical assessment needed",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_erectile-dysfunction_sildenafil_107",
        "activeIngredient":  "Sildenafil",
        "medicineClass":  "PDE-5 inhibitor",
        "condition":  "Erectile dysfunction",
        "conditionId":  "erectile-dysfunction",
        "category":  "Reproductive",
        "categorySlug":  "reproductive",
        "generalMedicalRole":  "Improves erectile function in eligible patients",
        "safetyNote":  "Prescription; dangerous with nitrates",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_pelvic-inflammatory-disease_ceftriaxone-doxycycline-metronidazole_108",
        "activeIngredient":  "Ceftriaxone + doxycycline + metronidazole",
        "medicineClass":  "Antibiotic combination",
        "condition":  "Pelvic inflammatory disease",
        "conditionId":  "pelvic-inflammatory-disease",
        "category":  "Reproductive",
        "categorySlug":  "reproductive",
        "generalMedicalRole":  "Treatment of selected PID",
        "safetyNote":  "Medical assessment and partner management required",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_iron-deficiency-anemia_ferrous-sulfate_109",
        "activeIngredient":  "Ferrous sulfate",
        "medicineClass":  "Iron replacement",
        "condition":  "Iron-deficiency anemia",
        "conditionId":  "iron-deficiency-anemia",
        "category":  "Hematology",
        "categorySlug":  "hematology",
        "generalMedicalRole":  "Replaces iron",
        "safetyNote":  "Cause of anemia should be investigated",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_vitamin-b12-deficiency_cyanocobalamin_110",
        "activeIngredient":  "Cyanocobalamin",
        "medicineClass":  "Vitamin replacement",
        "condition":  "Vitamin B12 deficiency",
        "conditionId":  "vitamin-b12-deficiency",
        "category":  "Hematology",
        "categorySlug":  "hematology",
        "generalMedicalRole":  "B12 replacement",
        "safetyNote":  "Route/cause determine treatment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_folate-deficiency_folic-acid_111",
        "activeIngredient":  "Folic acid",
        "medicineClass":  "Vitamin replacement",
        "condition":  "Folate deficiency",
        "conditionId":  "folate-deficiency",
        "category":  "Hematology",
        "categorySlug":  "hematology",
        "generalMedicalRole":  "Folate replacement",
        "safetyNote":  "B12 deficiency should be considered before treatment alone",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_hemophilia-a_factor-viii_112",
        "activeIngredient":  "Factor VIII",
        "medicineClass":  "Clotting factor",
        "condition":  "Hemophilia A",
        "conditionId":  "hemophilia-a",
        "category":  "Hematology",
        "categorySlug":  "hematology",
        "generalMedicalRole":  "Replaces missing clotting factor",
        "safetyNote":  "Specialist treatment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_sickle-cell-disease_hydroxyurea_113",
        "activeIngredient":  "Hydroxyurea",
        "medicineClass":  "Disease-modifying therapy",
        "condition":  "Sickle-cell disease",
        "conditionId":  "sickle-cell-disease",
        "category":  "Hematology",
        "categorySlug":  "hematology",
        "generalMedicalRole":  "Reduces complications in selected patients",
        "safetyNote":  "Specialist monitoring",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_thalassemia_deferasirox_114",
        "activeIngredient":  "Deferasirox",
        "medicineClass":  "Iron chelation",
        "condition":  "Thalassemia",
        "conditionId":  "thalassemia",
        "category":  "Hematology",
        "categorySlug":  "hematology",
        "generalMedicalRole":  "Reduces transfusional iron overload",
        "safetyNote":  "Specialist monitoring",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_breast-cancer_tamoxifen_115",
        "activeIngredient":  "Tamoxifen",
        "medicineClass":  "Endocrine therapy",
        "condition":  "Breast cancer",
        "conditionId":  "breast-cancer",
        "category":  "Cancer",
        "categorySlug":  "cancer",
        "generalMedicalRole":  "Hormone-receptor-positive disease in selected patients",
        "safetyNote":  "Oncology-directed",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_prostate-cancer_leuprolide_116",
        "activeIngredient":  "Leuprolide",
        "medicineClass":  "Androgen-deprivation therapy",
        "condition":  "Prostate cancer",
        "conditionId":  "prostate-cancer",
        "category":  "Cancer",
        "categorySlug":  "cancer",
        "generalMedicalRole":  "Hormone-sensitive disease in selected patients",
        "safetyNote":  "Oncology-directed",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_leukemia_imatinib_117",
        "activeIngredient":  "Imatinib",
        "medicineClass":  "Targeted therapy",
        "condition":  "Leukemia",
        "conditionId":  "leukemia",
        "category":  "Cancer",
        "categorySlug":  "cancer",
        "generalMedicalRole":  "BCR-ABL-positive leukemia",
        "safetyNote":  "Oncology-directed",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_multiple-myeloma_bortezomib_118",
        "activeIngredient":  "Bortezomib",
        "medicineClass":  "Proteasome inhibitor",
        "condition":  "Multiple myeloma",
        "conditionId":  "multiple-myeloma",
        "category":  "Cancer",
        "categorySlug":  "cancer",
        "generalMedicalRole":  "Cancer treatment in combination regimens",
        "safetyNote":  "Oncology-directed",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_lung-cancer_osimertinib_119",
        "activeIngredient":  "Osimertinib",
        "medicineClass":  "Targeted therapy",
        "condition":  "Lung cancer",
        "conditionId":  "lung-cancer",
        "category":  "Cancer",
        "categorySlug":  "cancer",
        "generalMedicalRole":  "EGFR-mutated NSCLC in selected patients",
        "safetyNote":  "Requires molecular testing and oncology care",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_cervical-cancer_cisplatin_120",
        "activeIngredient":  "Cisplatin",
        "medicineClass":  "Chemotherapy",
        "condition":  "Cervical cancer",
        "conditionId":  "cervical-cancer",
        "category":  "Cancer",
        "categorySlug":  "cancer",
        "generalMedicalRole":  "Used in selected cancer regimens",
        "safetyNote":  "Oncology/hospital treatment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_colorectal-cancer_5-fluorouracil_121",
        "activeIngredient":  "5-Fluorouracil",
        "medicineClass":  "Chemotherapy",
        "condition":  "Colorectal cancer",
        "conditionId":  "colorectal-cancer",
        "category":  "Cancer",
        "categorySlug":  "cancer",
        "generalMedicalRole":  "Used in combination regimens",
        "safetyNote":  "Oncology-directed",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_lymphoma_rituximab_122",
        "activeIngredient":  "Rituximab",
        "medicineClass":  "Chemotherapy",
        "condition":  "Lymphoma",
        "conditionId":  "lymphoma",
        "category":  "Cancer",
        "categorySlug":  "cancer",
        "generalMedicalRole":  "B-cell malignancies in selected regimens",
        "safetyNote":  "Infusion/oncology supervision",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_severe-allergic-reaction_epinephrine_123",
        "activeIngredient":  "Epinephrine (adrenaline)",
        "medicineClass":  "Emergency medicine",
        "condition":  "Severe allergic reaction",
        "conditionId":  "severe-allergic-reaction",
        "category":  "Allergy/immune",
        "categorySlug":  "allergy-immune",
        "generalMedicalRole":  "Emergency treatment of anaphylaxis",
        "safetyNote":  "Emergency medical care is essential",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_allergic-dermatitis_cetirizine_124",
        "activeIngredient":  "Cetirizine",
        "medicineClass":  "Antihistamine",
        "condition":  "Allergic dermatitis",
        "conditionId":  "allergic-dermatitis",
        "category":  "Allergy/immune",
        "categorySlug":  "allergy-immune",
        "generalMedicalRole":  "Itch relief",
        "safetyNote":  "Identify/remove trigger when possible",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_rheumatoid-arthritis_methotrexate_125",
        "activeIngredient":  "Methotrexate",
        "medicineClass":  "DMARD",
        "condition":  "Rheumatoid arthritis",
        "conditionId":  "rheumatoid-arthritis",
        "category":  "Allergy/immune",
        "categorySlug":  "allergy-immune",
        "generalMedicalRole":  "Disease modification",
        "safetyNote":  "Specialist monitoring",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_systemic-lupus-erythematosus_hydroxychloroquine_126",
        "activeIngredient":  "Hydroxychloroquine",
        "medicineClass":  "Antimalarial",
        "condition":  "Systemic lupus erythematosus",
        "conditionId":  "systemic-lupus-erythematosus",
        "category":  "Allergy/immune",
        "categorySlug":  "allergy-immune",
        "generalMedicalRole":  "Disease control in selected patients",
        "safetyNote":  "Ophthalmic monitoring required",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_inflammatory-arthritis_ibuprofen_127",
        "activeIngredient":  "Ibuprofen",
        "medicineClass":  "NSAID",
        "condition":  "Inflammatory arthritis",
        "conditionId":  "inflammatory-arthritis",
        "category":  "Allergy/immune",
        "categorySlug":  "allergy-immune",
        "generalMedicalRole":  "Pain/inflammation relief",
        "safetyNote":  "GI/kidney/cardiovascular risks",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_fever_paracetamol_128",
        "activeIngredient":  "Paracetamol (acetaminophen)",
        "medicineClass":  "Analgesic/antipyretic",
        "condition":  "Fever",
        "conditionId":  "fever",
        "category":  "Emergency/supportive",
        "categorySlug":  "emergency-supportive",
        "generalMedicalRole":  "Fever/pain relief",
        "safetyNote":  "Cause of fever matters",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_mild-pain_paracetamol_129",
        "activeIngredient":  "Paracetamol (acetaminophen)",
        "medicineClass":  "Analgesic",
        "condition":  "Mild pain",
        "conditionId":  "mild-pain",
        "category":  "Emergency/supportive",
        "categorySlug":  "emergency-supportive",
        "generalMedicalRole":  "Pain relief",
        "safetyNote":  "Persistent/severe pain needs assessment",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_moderate-inflammatory-pain_ibuprofen_130",
        "activeIngredient":  "Ibuprofen",
        "medicineClass":  "NSAID",
        "condition":  "Moderate inflammatory pain",
        "conditionId":  "moderate-inflammatory-pain",
        "category":  "Emergency/supportive",
        "categorySlug":  "emergency-supportive",
        "generalMedicalRole":  "Pain/inflammation relief",
        "safetyNote":  "Not suitable for everyone",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    },
    {
        "id":  "hkare_dehydration_glucose-sodium-chloride-potassium-chloride-citrate_131",
        "activeIngredient":  "Glucose + sodium chloride + potassium chloride + citrate",
        "medicineClass":  "Oral rehydration",
        "condition":  "Dehydration",
        "conditionId":  "dehydration",
        "category":  "Emergency/supportive",
        "categorySlug":  "emergency-supportive",
        "generalMedicalRole":  "Replaces fluids/electrolytes",
        "safetyNote":  "Formulation and severity matter",
        "source":  "HKare_Common_Disease_Medicine_Reference(1).csv",
        "sourceType":  "HKare Reference Dataset"
    }
    ,
    {
        "id": "hkare_coronary-artery-disease_aspirin-antiplatelet_132",
        "activeIngredient": "Aspirin (Acetylsalicylic acid)",
        "medicineClass": "Antiplatelet / Cyclooxygenase-1 (COX-1) Inhibitor",
        "condition": "Coronary artery disease",
        "conditionId": "coronary-artery-disease",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Irreversibly inhibits platelet COX-1 enzyme, preventing thromboxane A2 production to stop arterial platelet aggregation and prevent myocardial infarction and ischemic stroke.",
        "safetyNote": "Gastrointestinal ulceration/bleeding risk; take with or after food. Strictly avoid in children and teenagers with viral illness (risk of Reye's syndrome). Contraindicated in active bleeding.",
        "source": "WHO Model List of Essential Medicines (EML) & ACC/AHA Guidelines",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_coronary-artery-disease_clopidogrel_133",
        "activeIngredient": "Clopidogrel (Clopidogrel bisulfate)",
        "medicineClass": "Antiplatelet / P2Y12 ADP Receptor Antagonist",
        "condition": "Coronary artery disease",
        "conditionId": "coronary-artery-disease",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Selectively and irreversibly inhibits ADP binding to platelet P2Y12 receptors, preventing activation of the GPIIb/IIIa complex, arterial thrombosis, and stent closure.",
        "safetyNote": "Bleeding risk; withhold 5 days prior to elective surgery under cardiology guidance. CYP2C19 poor metabolizers have reduced active metabolite; avoid co-administration with omeprazole/esomeprazole.",
        "source": "WHO Model List of Essential Medicines (EML) & ESC Guidelines",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_coronary-artery-disease_prasugrel_134",
        "activeIngredient": "Prasugrel (Prasugrel hydrochloride)",
        "medicineClass": "Potent P2Y12 Antiplatelet / Thienopyridine",
        "condition": "Coronary artery disease",
        "conditionId": "coronary-artery-disease",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Provides rapid, potent, and predictable irreversible platelet P2Y12 receptor inhibition to prevent stent thrombosis and recurrent myocardial infarction in acute coronary syndrome undergoing PCI.",
        "safetyNote": "Significant bleeding risk. Contraindicated in patients with prior stroke or transient ischemic attack (TIA). Use with caution in patients >=75 years or body weight <60 kg.",
        "source": "ACC/AHA & ESC Coronary Revascularization Guidelines",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_coronary-artery-disease_ticagrelor_135",
        "activeIngredient": "Ticagrelor",
        "medicineClass": "Direct-Acting Reversible P2Y12 Receptor Antagonist",
        "condition": "Coronary artery disease",
        "conditionId": "coronary-artery-disease",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Directly and reversibly binds the P2Y12 ADP receptor on platelets without requiring hepatic metabolic activation, providing rapid cardioprotection against ischemic vascular events.",
        "safetyNote": "Bleeding risk; dyspnea (shortness of breath) is a recognized reversible side effect. Bradyarrhythmias and hyperuricemia reported. Concurrent maintenance aspirin dose must not exceed 100 mg daily.",
        "source": "WHO Model List of Essential Medicines & ESC Guidelines",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_high-ldl-cholesterol_atorvastatin-calcium_136",
        "activeIngredient": "Atorvastatin (Atorvastatin calcium)",
        "medicineClass": "HMG-CoA Reductase Inhibitor (High-Intensity Statin)",
        "condition": "High LDL cholesterol",
        "conditionId": "high-ldl-cholesterol",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Competitively inhibits HMG-CoA reductase, increasing hepatic LDL receptor expression, lowering circulating LDL cholesterol by 40-50%, and stabilizing vascular plaques against rupture.",
        "safetyNote": "Monitor for unexplained muscle pain, tenderness, or weakness (risk of myopathy/rhabdomyolysis). Check baseline liver function. Strictly contraindicated in pregnancy and active liver disease.",
        "source": "WHO Model List of Essential Medicines (EML)",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_high-ldl-cholesterol_rosuvastatin_137",
        "activeIngredient": "Rosuvastatin (Rosuvastatin calcium)",
        "medicineClass": "HMG-CoA Reductase Inhibitor (Hydrophilic High-Potency Statin)",
        "condition": "High LDL cholesterol",
        "conditionId": "high-ldl-cholesterol",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Potently inhibits cholesterol synthesis, lowering LDL-C by up to 55-60%, raising HDL-C, and reducing vascular inflammatory biomarkers (hs-CRP) for atherosclerotic plaque regression.",
        "safetyNote": "Start with lower dose (5 mg) in Asian patients or severe renal impairment (eGFR <30 mL/min). Report unexpected muscle ache or weakness immediately. Contraindicated in pregnancy.",
        "source": "WHO Model List of Essential Medicines (EML) & AHA/ACC",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_angina_metoprolol_138",
        "activeIngredient": "Metoprolol (Metoprolol succinate / tartrate)",
        "medicineClass": "Cardioselective Beta-1 Adrenergic Blocker",
        "condition": "Angina",
        "conditionId": "angina",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Selectively blocks cardiac beta-1 adrenergic receptors, reducing resting and exercise heart rate, myocardial contractility, cardiac workload, and myocardial oxygen consumption.",
        "safetyNote": "Do not stop abruptly (risk of severe rebound tachycardia, angina, or acute MI). Contraindicated in severe sinus bradycardia, second/third-degree AV block, and cardiogenic shock.",
        "source": "WHO Model List of Essential Medicines (EML)",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_hypertension_amlodipine-besylate_139",
        "activeIngredient": "Amlodipine (Amlodipine besylate)",
        "medicineClass": "Dihydropyridine Calcium Channel Blocker (CCB)",
        "condition": "Hypertension",
        "conditionId": "hypertension",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Inhibits transmembrane calcium influx into vascular smooth muscle cells, causing systemic peripheral and coronary arteriolar vasodilation and sustained blood pressure reduction.",
        "safetyNote": "Dose-dependent bilateral peripheral ankle edema may develop. May cause flushing, headache, and dizziness on initiation; monitor standing blood pressure.",
        "source": "WHO Model List of Essential Medicines (EML)",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_hypertension_ramipril_140",
        "activeIngredient": "Ramipril",
        "medicineClass": "Angiotensin-Converting Enzyme (ACE) Inhibitor",
        "condition": "Hypertension",
        "conditionId": "hypertension",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Inhibits ACE, blocking the conversion of angiotensin I to angiotensin II, lowering systemic vascular resistance, decreasing aldosterone secretion, and reducing left ventricular remodeling.",
        "safetyNote": "Persistent dry cough reported in up to 15% of patients due to bradykinin buildup. Risk of hyperkalemia and renal dysfunction; check serum K+ and creatinine. Strictly contraindicated in pregnancy.",
        "source": "WHO Model List of Essential Medicines (EML)",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_hypertension_losartan_141",
        "activeIngredient": "Losartan (Losartan potassium)",
        "medicineClass": "Angiotensin II Receptor Blocker (ARB)",
        "condition": "Hypertension",
        "conditionId": "hypertension",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Selectively blocks AT1 receptors, preventing angiotensin II-mediated vasoconstriction and aldosterone release without inhibiting bradykinin degradation (cough-free alternative to ACEi).",
        "safetyNote": "Monitor serum potassium and renal function (BUN/creatinine). Teratogenic; black box warning against use during second and third trimesters of pregnancy.",
        "source": "WHO Model List of Essential Medicines (EML)",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_heart-failure_spironolactone_142",
        "activeIngredient": "Spironolactone",
        "medicineClass": "Aldosterone Antagonist / Potassium-Sparing Diuretic (MRA)",
        "condition": "Heart failure",
        "conditionId": "heart-failure",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Competitively antagonizes aldosterone receptors in the distal renal tubules and myocardium, increasing sodium and water excretion, retaining potassium, and preventing cardiac remodeling/fibrosis.",
        "safetyNote": "High risk of life-threatening hyperkalemia; close monitoring of potassium and renal function required. May cause gynecomastia, breast tenderness, and menstrual irregularities due to anti-androgenic effects.",
        "source": "WHO Model List of Essential Medicines (EML)",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_heart-failure_furosemide_143",
        "activeIngredient": "Furosemide",
        "medicineClass": "Loop Diuretic (High-Ceiling Diuretic)",
        "condition": "Heart failure",
        "conditionId": "heart-failure",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Inhibits Na+/K+/2Cl- co-transport in the thick ascending limb of Henle's loop, producing rapid, powerful diuresis and natriuresis to relieve pulmonary congestion and severe peripheral fluid retention.",
        "safetyNote": "Electrolyte depletion risk (hypokalemia, hyponatremia, hypomagnesemia); potassium supplementation or monitoring frequently required. Monitor for dehydration, hypotension, and ototoxicity at high doses.",
        "source": "WHO Model List of Essential Medicines (EML)",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_atrial-fibrillation_digoxin_144",
        "activeIngredient": "Digoxin",
        "medicineClass": "Cardiac Glycoside / Inotropic & AV Nodal Blocking Agent",
        "condition": "Atrial fibrillation",
        "conditionId": "atrial-fibrillation",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Increases vagal tone at the AV node to slow ventricular response in atrial fibrillation; also inhibits myocardial Na+/K+ ATPase to enhance cardiac contractile force in symptomatic heart failure.",
        "safetyNote": "Narrow therapeutic window (0.5 to 0.9 ng/mL). Toxicity exacerbated by hypokalemia and renal insufficiency. Warning signs include nausea, anorexia, yellow-green visual halos, confusion, and ventricular arrhythmias.",
        "source": "WHO Model List of Essential Medicines (EML)",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_angina_glyceryl-trinitrate-sublingual_145",
        "activeIngredient": "Glyceryl trinitrate (Nitroglycerin)",
        "medicineClass": "Organic Nitrate Vasodilator / Antianginal",
        "condition": "Angina",
        "conditionId": "angina",
        "category": "Cardiovascular",
        "categorySlug": "cardiovascular",
        "generalMedicalRole": "Undergoes enzymatic conversion to nitric oxide (NO) in vascular smooth muscle, causing potent systemic venodilation, lowering venous return (preload) and myocardial wall stress to rapidly alleviate acute anginal attacks.",
        "safetyNote": "Absolute contraindication: concurrent use of phosphodiesterase-5 (PDE-5) inhibitors (sildenafil, tadalafil) within 24-48h due to catastrophic fatal hypotension. Common adverse effects: throbbing headache, dizziness, flushing.",
        "source": "WHO Model List of Essential Medicines (EML)",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_type-2-diabetes_metformin_146",
        "activeIngredient": "Metformin (Metformin hydrochloride)",
        "medicineClass": "Biguanide Antidiabetic",
        "condition": "Type 2 diabetes",
        "conditionId": "type-2-diabetes",
        "category": "Endocrine & Metabolic",
        "categorySlug": "endocrine",
        "generalMedicalRole": "Suppresses hepatic glucose production (gluconeogenesis), improves peripheral insulin sensitivity, and increases cellular glucose uptake without inducing hypoglycemia or weight gain.",
        "safetyNote": "Gastrointestinal side effects (nausea, diarrhea); take with or immediately after meals. Rare risk of lactic acidosis; hold prior to iodinated radiocontrast procedures and in severe renal failure (eGFR <30 mL/min).",
        "source": "WHO Model List of Essential Medicines (EML)",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_type-2-diabetes_dapagliflozin_147",
        "activeIngredient": "Dapagliflozin (Dapagliflozin propanediol)",
        "medicineClass": "Sodium-Glucose Co-Transporter 2 (SGLT2) Inhibitor",
        "condition": "Type 2 diabetes",
        "conditionId": "type-2-diabetes",
        "category": "Endocrine & Metabolic",
        "categorySlug": "endocrine",
        "generalMedicalRole": "Inhibits SGLT2 in the renal proximal tubules, reducing glucose and sodium reabsorption to promote urinary caloric excretion, reducing HbA1c, body weight, blood pressure, and heart failure hospitalizations.",
        "safetyNote": "Increased incidence of genital mycotic infections and urinary tract infections. Rare risk of Euglycemic Diabetic Ketoacidosis (euDKA) and volume depletion/orthostatic hypotension. Maintain adequate hydration.",
        "source": "WHO Model List of Essential Medicines & ADA/KDIGO Guidelines",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_gerd_rabeprazole_148",
        "activeIngredient": "Rabeprazole (Rabeprazole sodium)",
        "medicineClass": "Proton Pump Inhibitor (PPI)",
        "condition": "GERD",
        "conditionId": "gerd",
        "category": "Gastrointestinal",
        "categorySlug": "gastrointestinal",
        "generalMedicalRole": "Selectively and irreversibly binds to the gastric parietal cell H+/K+ ATPase pump, providing rapid and prolonged suppression of basal and stimulated gastric acid secretion to heal esophagitis.",
        "safetyNote": "Take 30 to 60 minutes before breakfast. Prolonged suppression of stomach acid may reduce absorption of Vitamin B12, iron, and magnesium, and modestly increase risk of C. difficile-associated diarrhea.",
        "source": "WHO Model List of Essential Medicines & ACG Guidelines",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_gerd_ondansetron_149",
        "activeIngredient": "Ondansetron (Ondansetron hydrochloride)",
        "medicineClass": "5-HT3 Serotonin Receptor Antagonist / Antiemetic",
        "condition": "GERD",
        "conditionId": "gerd",
        "category": "Gastrointestinal",
        "categorySlug": "gastrointestinal",
        "generalMedicalRole": "Selectively antagonizes serotonin 5-HT3 receptors on vagal afferents and in the central solitary tract nucleus, halting the nausea and vomiting reflex during gastrointestinal distress and chemotherapy.",
        "safetyNote": "Dose-dependent prolongation of the QT interval; caution in patients with cardiac conduction abnormalities or hypokalemia. Common side effects: headache, mild constipation, and dizziness.",
        "source": "WHO Model List of Essential Medicines (EML)",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_allergic-rhinitis_levocetirizine_150",
        "activeIngredient": "Levocetirizine (Levocetirizine dihydrochloride)",
        "medicineClass": "Second-Generation Non-Sedating Antihistamine",
        "condition": "Allergic rhinitis",
        "conditionId": "allergic-rhinitis",
        "category": "Respiratory",
        "categorySlug": "respiratory",
        "generalMedicalRole": "The active R-enantiomer of cetirizine; selectively blocks peripheral H1 histamine receptors, reducing allergic rhinitis symptoms including sneezing, rhinorrhea, nasal congestion, and allergic pruritus.",
        "safetyNote": "Low sedative liability compared to first-generation antihistamines; however, avoid combining with alcohol or central nervous system depressants. Dose reduction advised in moderate renal impairment.",
        "source": "WHO Model List of Essential Medicines & ARIA Guidelines",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_asthma_montelukast_151",
        "activeIngredient": "Montelukast (Montelukast sodium)",
        "medicineClass": "Leukotriene Receptor Antagonist (LTRA)",
        "condition": "Asthma",
        "conditionId": "asthma",
        "category": "Respiratory",
        "categorySlug": "respiratory",
        "generalMedicalRole": "Binds with high affinity to cysteinyl leukotriene CysLT1 receptors, blocking leukotriene-mediated bronchoconstriction, airway mucosal edema, inflammatory cell recruitment, and airway hyperresponsiveness.",
        "safetyNote": "Intended for maintenance prevention; does not reverse acute asthma bronchospasm. FDA boxed warning: monitor for behavioral changes, agitation, sleep disturbances, or mood alterations.",
        "source": "WHO Model List of Essential Medicines & GINA Guidelines",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_osteoarthritis_aceclofenac_152",
        "activeIngredient": "Aceclofenac",
        "medicineClass": "NSAID / Phenylacetic Acid Derivative",
        "condition": "Osteoarthritis",
        "conditionId": "osteoarthritis",
        "category": "Musculoskeletal",
        "categorySlug": "musculoskeletal",
        "generalMedicalRole": "Inhibits cyclooxygenase enzymes (COX-1 and COX-2) to block prostaglandin synthesis, reducing joint swelling, morning stiffness, and pain while preserving articular cartilage matrix.",
        "safetyNote": "Take with meals. Caution in cardiovascular, hepatic, or renal impairment. Contraindicated in active peptic ulceration, gastrointestinal bleeding, severe congestive heart failure, and late pregnancy.",
        "source": "OARSI Clinical Practice Guidelines",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_pneumococcal-pneumonia_cefpodoxime_153",
        "activeIngredient": "Cefpodoxime (Cefpodoxime proxetil)",
        "medicineClass": "Third-Generation Oral Cephalosporin Antibiotic",
        "condition": "Pneumococcal pneumonia",
        "conditionId": "pneumococcal-pneumonia",
        "category": "Infectious",
        "categorySlug": "infectious",
        "generalMedicalRole": "Binds to essential penicillin-binding proteins (PBPs), inhibiting bacterial cell wall peptidoglycan synthesis, providing bactericidal action against respiratory streptococci and Gram-negative pathogens.",
        "safetyNote": "Administer with food for optimal proxetil bioavailability. Contraindicated in severe immediate beta-lactam anaphylaxis. Complete full prescribed course to prevent bacterial resistance development.",
        "source": "WHO Model List of Essential Medicines & IDSA Guidelines",
        "sourceType": "HKare Reference Dataset"
    },
    {
        "id": "hkare_pneumococcal-pneumonia_doxycycline_154",
        "activeIngredient": "Doxycycline (Doxycycline hyclate / monohydrate)",
        "medicineClass": "Tetracycline Broad-Spectrum Antibiotic",
        "condition": "Pneumococcal pneumonia",
        "conditionId": "pneumococcal-pneumonia",
        "category": "Infectious",
        "categorySlug": "infectious",
        "generalMedicalRole": "Inhibits bacterial protein synthesis by reversibly binding the 30S ribosomal subunit, blocking aminoacyl-tRNA attachment to the mRNA-ribosome complex across atypical respiratory and zoonotic pathogens.",
        "safetyNote": "Swallow with a full glass of water while sitting upright and do not lie down for 30 minutes (risk of pill-induced severe esophageal ulceration). Causes photosensitivity. Avoid during pregnancy and children <8 years.",
        "source": "WHO Model List of Essential Medicines (EML)",
        "sourceType": "HKare Reference Dataset"
    }
]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = HKARE_DATA;
}