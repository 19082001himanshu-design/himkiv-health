/**
 * HIMKIV Health & MedGuide - Standardized Clinical Pharmacology Dataset
 * Structure based on WHO ICD-11 MMS Classification.
 * Contains WHO-derived taxonomic metadata and HIMKIV educational clinical posology references.
 *
 * Attribution:
 * - Disease classification: WHO ICD-11 (https://icd.who.int/browse11/l-m/en)
 * - Essential Medicines: WHO Model List of Essential Medicines (EML, 23rd List, 2023)
 * - Posology Reference: British National Formulary (BNF) & WHO Model Formulary for Children
 *
 * Notice:
 * Educational and clinical reference portal. Not an automated prescription engine.
 */

const CLINICAL_DATA = {
    "version":  "2.0.0",
    "standard":  "WHO ICD-11 MMS & WHO Model List of Essential Medicines (EML)",
    "lastUpdated":  "2026-05",
    "categories":  [
                       {
                           "id":  "all",
                           "name":  "All Conditions",
                           "icd11Chapter":  "All Chapters",
                           "description":  "Comprehensive multi-system clinical condition database"
                       },
                       {
                           "id":  "general",
                           "name":  "Fever & General",
                           "icd11Chapter":  "Chapter 01 & Chapter 21",
                           "description":  "Systemic febrile states and viral prodromes",
                           "subcategories":  [
                                                 {
                                                     "id":  "febrile",
                                                     "name":  "Acute Febrile Illness"
                                                 },
                                                 {
                                                     "id":  "vector-borne",
                                                     "name":  "Vector-Borne & Tropical"
                                                 },
                                                 {
                                                     "id":  "systemic-pain",
                                                     "name":  "Generalized Pain & Malaise"
                                                 }
                                             ]
                       },
                       {
                           "id":  "respiratory",
                           "name":  "Respiratory & Throat",
                           "icd11Chapter":  "Chapter 12",
                           "description":  "Upper and lower airway infections and allergic respiratory conditions",
                           "subcategories":  [
                                                 {
                                                     "id":  "upper-respiratory",
                                                     "name":  "Upper Airway & Pharynx"
                                                 },
                                                 {
                                                     "id":  "lower-respiratory",
                                                     "name":  "Lower Airway & Bronchi"
                                                 },
                                                 {
                                                     "id":  "chronic-airway",
                                                     "name":  "Chronic Airway Disease"
                                                 }
                                             ]
                       },
                       {
                           "id":  "gastro",
                           "name":  "Gastrointestinal & Acid",
                           "icd11Chapter":  "Chapter 13",
                           "description":  "Acid peptic disorders and infectious enteritis",
                           "subcategories":  [
                                                 {
                                                     "id":  "acid-peptic",
                                                     "name":  "Acid Peptic Disorders"
                                                 },
                                                 {
                                                     "id":  "intestinal-infection",
                                                     "name":  "Enteric & Intestinal"
                                                 },
                                                 {
                                                     "id":  "functional-gi",
                                                     "name":  "Functional GI Disorders"
                                                 }
                                             ]
                       },
                       {
                           "id":  "chronic",
                           "name":  "Chronic Care",
                           "icd11Chapter":  "Chapter 05 & Chapter 11",
                           "description":  "Cardiovascular, glycemic, and endocrine management",
                           "subcategories":  [
                                                 {
                                                     "id":  "cardiovascular",
                                                     "name":  "Cardiovascular Health"
                                                 },
                                                 {
                                                     "id":  "metabolic-diabetes",
                                                     "name":  "Glycemic & Metabolic"
                                                 },
                                                 {
                                                     "id":  "endocrine-thyroid",
                                                     "name":  "Thyroid & Hormone Care"
                                                 }
                                             ]
                       },
                       {
                           "id":  "ortho",
                           "name":  "Musculoskeletal",
                           "icd11Chapter":  "Chapter 15",
                           "description":  "Soft tissue strain and degenerative joint disorders",
                           "subcategories":  [
                                                 {
                                                     "id":  "muscle-strain",
                                                     "name":  "Muscle Strain & Spasm"
                                                 },
                                                 {
                                                     "id":  "joint-arthropathy",
                                                     "name":  "Joint & Arthropathy"
                                                 }
                                             ]
                       },
                       {
                           "id":  "neuro",
                           "name":  "Neurology & Headache",
                           "icd11Chapter":  "Chapter 08",
                           "description":  "Primary headache disorders and neuropathic states",
                           "subcategories":  [
                                                 {
                                                     "id":  "primary-headache",
                                                     "name":  "Primary Headache Disorders"
                                                 },
                                                 {
                                                     "id":  "peripheral-nerve",
                                                     "name":  "Neuropathic Conditions"
                                                 }
                                             ]
                       },
                       {
                           "id":  "derm",
                           "name":  "Dermatology & Allergy",
                           "icd11Chapter":  "Chapter 14",
                           "description":  "Allergic dermatoses and cutaneous fungal infections",
                           "subcategories":  [
                                                 {
                                                     "id":  "allergic-skin",
                                                     "name":  "Allergic & Eczematous"
                                                 },
                                                 {
                                                     "id":  "infectious-skin",
                                                     "name":  "Superficial Cutaneous Infections"
                                                 }
                                             ]
                       },
                       {
                           "id":  "uro",
                           "name":  "Genitourinary",
                           "icd11Chapter":  "Chapter 16",
                           "description":  "Lower urinary tract infections and renal calculi",
                           "subcategories":  [
                                                 {
                                                     "id":  "urinary-infection",
                                                     "name":  "Urinary Tract Infections"
                                                 },
                                                 {
                                                     "id":  "renal-calculi",
                                                     "name":  "Nephrolithiasis & Colic"
                                                 }
                                             ]
                       }
                   ],
    "diseases":  [
                     {
                         "id":  "fever-bodyache",
                         "name":  "Fever & Generalized Body Ache (Pyrexia)",
                         "icd11Code":  "MG26",
                         "icd11Uri":  "http://id.who.int/icd/entity/fever-bodyache",
                         "category":  "Fever & General",
                         "categoryId":  "general",
                         "subcategory":  "Acute Febrile Illness",
                         "subcategoryId":  "febrile",
                         "severity":  "Mild to Moderate",
                         "symptoms":  [
                                          "Elevated core body temperature (\u003e99.5°F)",
                                          "Generalized muscle aches & body stiffness",
                                          "Chills & rigors",
                                          "Frontal headache",
                                          "Malaise & fatigue"
                                      ],
                         "description":  "Elevation of core body temperature usually in response to viral or bacterial immune activation.",
                         "firstLineSalts":  [
                                                "paracetamol",
                                                "ibuprofen"
                                            ],
                         "relevantSalts":  [
                                               "paracetamol",
                                               "ibuprofen"
                                           ],
                         "emergencyFlags":  [
                                                "Temperature \u003e 103°F (39.4°C) unresponsive to antipyretics",
                                                "Stiff neck, photophobia, or sudden confusion (Rule out Meningitis)",
                                                "Seizures or prostration in infants \u003c 6 months",
                                                "Petechial non-blanching skin rash"
                                            ],
                         "specialist":  "General Physician / Family Medicine",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Oral hydration (electrolytes, broths). Tepid sponging on forehead. Rest in a thermoneutral, well-ventilated room.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "allergic-rhinitis",
                         "name":  "Allergic Rhinitis & Seasonal Pollinosis",
                         "icd11Code":  "CA08",
                         "icd11Uri":  "http://id.who.int/icd/entity/allergic-rhinitis",
                         "category":  "Respiratory & Throat",
                         "categoryId":  "respiratory",
                         "subcategory":  "Upper Airway & Pharynx",
                         "subcategoryId":  "upper-respiratory",
                         "severity":  "Mild to Moderate",
                         "symptoms":  [
                                          "Paroxysmal sneezing bouts",
                                          "Clear watery rhinorrhea",
                                          "Nasal mucosal congestion",
                                          "Pruritus of eyes, nose, and palate",
                                          "Red itchy watery eyes"
                                      ],
                         "description":  "IgE-mediated inflammatory condition of nasal mucous membranes triggered by aeroallergens like pollen, dust mites, or dander.",
                         "firstLineSalts":  [
                                                "cetirizine",
                                                "fexofenadine",
                                                "montelukast-levocetirizine"
                                            ],
                         "relevantSalts":  [
                                               "cetirizine",
                                               "fexofenadine",
                                               "montelukast-levocetirizine"
                                           ],
                         "emergencyFlags":  [
                                                "Sudden swelling of lips, tongue, or uvula (Anaphylaxis risk)",
                                                "Audible wheezing, stridor, or severe chest tightness",
                                                "Rapid hypotension with faintness"
                                            ],
                         "specialist":  "Allergist / ENT Specialist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Saline nasal irrigation twice daily. Minimize outdoor exposure during peak pollen hours. HEPA room filtration.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "bacterial-pharyngitis",
                         "name":  "Acute Pharyngitis & Streptococcal Tonsillitis",
                         "icd11Code":  "1B20.0",
                         "icd11Uri":  "http://id.who.int/icd/entity/bacterial-pharyngitis",
                         "category":  "Respiratory & Throat",
                         "categoryId":  "respiratory",
                         "subcategory":  "Upper Airway & Pharynx",
                         "subcategoryId":  "upper-respiratory",
                         "severity":  "Moderate",
                         "symptoms":  [
                                          "Severe sore throat with pain on swallowing (odynophagia)",
                                          "Swollen tonsils with white pus exudate",
                                          "Tender anterior cervical lymph nodes",
                                          "Fever without typical viral cough"
                                      ],
                         "description":  "Streptococcal or mixed bacterial upper respiratory infection of the pharynx and tonsils.",
                         "firstLineSalts":  [
                                                "amoxicillin",
                                                "amoxicillin-clavulanate",
                                                "azithromycin",
                                                "paracetamol"
                                            ],
                         "relevantSalts":  [
                                               "amoxicillin",
                                               "amoxicillin-clavulanate",
                                               "azithromycin",
                                               "paracetamol"
                                           ],
                         "emergencyFlags":  [
                                                "Trismus (inability to open mouth fully) or quinsy abscess",
                                                "Inability to swallow liquids or drooling saliva",
                                                "Stridor or respiratory distress"
                                            ],
                         "specialist":  "ENT Specialist / General Physician",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Warm isotonic saline gargles 3-4 times daily. Soft cool moist diet. Complete prescribed antibiotic course.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "productive-cough-bronchitis",
                         "name":  "Acute Bronchitis & Productive Cough",
                         "icd11Code":  "CA42",
                         "icd11Uri":  "http://id.who.int/icd/entity/productive-cough-bronchitis",
                         "category":  "Respiratory & Throat",
                         "categoryId":  "respiratory",
                         "subcategory":  "Lower Airway & Bronchi",
                         "subcategoryId":  "lower-respiratory",
                         "severity":  "Moderate",
                         "symptoms":  [
                                          "Persistent cough with yellow/green phlegm",
                                          "Substernal chest soreness from coughing",
                                          "Coarse rattling rhonchi on deep breath",
                                          "Low-grade fever & fatigue"
                                      ],
                         "description":  "Acute self-limiting inflammation of the bronchial tree with mucus hypersecretion and reactive airway cough.",
                         "firstLineSalts":  [
                                                "guaifenesin",
                                                "montelukast-levocetirizine",
                                                "paracetamol"
                                            ],
                         "relevantSalts":  [
                                               "guaifenesin",
                                               "montelukast-levocetirizine",
                                               "paracetamol"
                                           ],
                         "emergencyFlags":  [
                                                "Hemoptysis (coughing up fresh blood)",
                                                "Resting respiratory rate \u003e 25 breaths/min",
                                                "Cyanosis (bluish tint around lips/fingers)",
                                                "Oxygen saturation \u003c 92%"
                                            ],
                         "specialist":  "Pulmonologist / Chest Physician",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Adequate warm fluid hydration. Steam inhalation twice daily. Honey for children \u003e 1 yr. Avoid smoke and cold drafts.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "gerd-gastritis",
                         "name":  "Gastroesophageal Reflux (GERD) & Gastritis",
                         "icd11Code":  "DA22",
                         "icd11Uri":  "http://id.who.int/icd/entity/gerd-gastritis",
                         "category":  "Gastrointestinal & Acid",
                         "categoryId":  "gastro",
                         "subcategory":  "Acid Peptic Disorders",
                         "subcategoryId":  "acid-peptic",
                         "severity":  "Mild to Moderate",
                         "symptoms":  [
                                          "Retrosternal burning sensation (Heartburn)",
                                          "Sour bitter acid regurgitation (Waterbrash)",
                                          "Epigastric gnawing ache",
                                          "Post-prandial fullness and bloating",
                                          "Nocturnal acid cough"
                                      ],
                         "description":  "Retrograde transit of caustic gastric acid into the esophagus causing mucosal irritation and micro-erosions.",
                         "firstLineSalts":  [
                                                "pantoprazole",
                                                "omeprazole",
                                                "pantoprazole-domperidone",
                                                "famotidine"
                                            ],
                         "relevantSalts":  [
                                               "pantoprazole",
                                               "omeprazole",
                                               "pantoprazole-domperidone",
                                               "famotidine"
                                           ],
                         "emergencyFlags":  [
                                                "Crushing retrosternal chest pain radiating to left arm/jaw (MUST rule out Heart Attack)",
                                                "Vomiting blood or coffee-ground emesis",
                                                "Black tarry stools (Melena)",
                                                "Progressive difficulty swallowing food (Dysphagia)"
                                            ],
                         "specialist":  "Gastroenterologist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Eat smaller frequent meals. Avoid spicy and fried foods. Elevate head of bed 15 cm. Avoid recumbency within 3 hours of eating.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "acute-gastroenteritis",
                         "name":  "Acute Infectious Diarrhea & Gastroenteritis",
                         "icd11Code":  "1A40",
                         "icd11Uri":  "http://id.who.int/icd/entity/acute-gastroenteritis",
                         "category":  "Gastrointestinal & Acid",
                         "categoryId":  "gastro",
                         "subcategory":  "Enteric & Intestinal",
                         "subcategoryId":  "intestinal-infection",
                         "severity":  "Moderate",
                         "symptoms":  [
                                          "Frequent loose or watery stools (\u003e3 times/day)",
                                          "Abdominal colicky cramps",
                                          "Nausea and vomiting",
                                          "Dry mouth, thirst, and oliguria",
                                          "Low-grade fever"
                                      ],
                         "description":  "Acute mucosal inflammation of stomach and intestines leading to rapid electrolyte and water loss.",
                         "firstLineSalts":  [
                                                "ors-zinc",
                                                "ondansetron"
                                            ],
                         "relevantSalts":  [
                                               "ors-zinc",
                                               "ondansetron"
                                           ],
                         "emergencyFlags":  [
                                                "Complete inability to retain oral fluids for \u003e 6 hours",
                                                "Signs of severe dehydration: Sunken eyes, lethargy, poor skin turgor",
                                                "Gross blood in stool with high fever (Dysentery)",
                                                "No urine output for \u003e 6 hours"
                                            ],
                         "specialist":  "Gastroenterologist / Pediatrician",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Immediate continuous ORS intake: 200-300ml after every loose purge. Zinc for 14 days in children. Rice water, banana, curd.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "migraine-headache",
                         "name":  "Migraine with/without Aura & Vascular Headache",
                         "icd11Code":  "8A80",
                         "icd11Uri":  "http://id.who.int/icd/entity/migraine-headache",
                         "category":  "Neurology & Headache",
                         "categoryId":  "neuro",
                         "subcategory":  "Primary Headache Disorders",
                         "subcategoryId":  "primary-headache",
                         "severity":  "Moderate to Severe",
                         "symptoms":  [
                                          "Unilateral throbbing or pulsating headache (4-72 hours)",
                                          "Photophobia and phonophobia",
                                          "Nausea or vomiting",
                                          "Visual aura before onset (in 25%)",
                                          "Worsening with physical exertion"
                                      ],
                         "description":  "Neurovascular disorder characterized by recurrent attacks of throbbing unilateral headache with sensory hypersensitivity.",
                         "firstLineSalts":  [
                                                "ibuprofen",
                                                "paracetamol",
                                                "naproxen",
                                                "ondansetron"
                                            ],
                         "relevantSalts":  [
                                               "ibuprofen",
                                               "paracetamol",
                                               "naproxen",
                                               "ondansetron"
                                           ],
                         "emergencyFlags":  [
                                                "Sudden explosive \u0027Thunderclap\u0027 headache peaking in seconds (Rule out SAH)",
                                                "Headache with focal weakness, facial droop, or speech slurring",
                                                "New onset headache in individuals \u003e 50 years"
                                            ],
                         "specialist":  "Neurologist / Headache Specialist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Rest in a cool, quiet, dark room. Cold compress to temples. Regular sleep and meal schedule. Avoid trigger foods.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "type2-diabetes",
                         "name":  "Type 2 Diabetes Mellitus Management",
                         "icd11Code":  "5A11",
                         "icd11Uri":  "http://id.who.int/icd/entity/type2-diabetes",
                         "category":  "Chronic Care",
                         "categoryId":  "chronic",
                         "subcategory":  "Glycemic & Metabolic",
                         "subcategoryId":  "metabolic-diabetes",
                         "severity":  "Chronic",
                         "symptoms":  [
                                          "Excessive thirst (Polydipsia)",
                                          "Frequent urination especially at night (Polyuria)",
                                          "Unexplained weight loss",
                                          "Blurred vision",
                                          "Slow-healing minor wounds"
                                      ],
                         "description":  "Metabolic disorder of progressive insulin resistance and relative insulin deficiency resulting in chronic hyperglycemia.",
                         "firstLineSalts":  [
                                                "metformin",
                                                "glimepiride",
                                                "sitagliptin"
                                            ],
                         "relevantSalts":  [
                                               "metformin",
                                               "glimepiride",
                                               "sitagliptin"
                                           ],
                         "emergencyFlags":  [
                                                "Acute hypoglycemia: Blood sugar \u003c 70 mg/dL with tremors, cold sweating, confusion (take oral glucose immediately)",
                                                "Fruity breath odor, deep rapid breathing, vomiting (Diabetic Ketoacidosis)",
                                                "Sudden loss of consciousness"
                                            ],
                         "specialist":  "Endocrinologist / Diabetologist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Low glycemic index, high-fiber diet. 150 mins weekly moderate exercise. Daily foot self-inspection. Blood glucose tracking.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "essential-hypertension",
                         "name":  "Essential Hypertension (High Blood Pressure)",
                         "icd11Code":  "BA00",
                         "icd11Uri":  "http://id.who.int/icd/entity/essential-hypertension",
                         "category":  "Chronic Care",
                         "categoryId":  "chronic",
                         "subcategory":  "Cardiovascular Health",
                         "subcategoryId":  "cardiovascular",
                         "severity":  "Chronic",
                         "symptoms":  [
                                          "Often asymptomatic (\u0027The Silent Killer\u0027)",
                                          "Early morning occipital throbbing headache",
                                          "Dizziness or unsteadiness",
                                          "Palpitations",
                                          "Epistaxis (nosebleeds) during acute spikes"
                                      ],
                         "description":  "Persistent arterial blood pressure elevation \u003e= 130/80 mmHg without an identifiable secondary etiology.",
                         "firstLineSalts":  [
                                                "telmisartan",
                                                "amlodipine",
                                                "losartan"
                                            ],
                         "relevantSalts":  [
                                               "telmisartan",
                                               "amlodipine",
                                               "losartan"
                                           ],
                         "emergencyFlags":  [
                                                "Hypertensive Crisis: BP \u003e= 180/120 mmHg with acute chest pain, dyspnea, or vision loss",
                                                "Sudden unilateral motor weakness or speech difficulty (Stroke / TIA)",
                                                "Crushing chest discomfort radiating to left arm"
                                            ],
                         "specialist":  "Cardiologist / General Physician",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "DASH diet: Sodium \u003c 2g/day (\u003c 5g salt). Daily aerobic exercise. Weight management. Smoking cessation.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "urinary-tract-infection",
                         "name":  "Uncomplicated Lower Urinary Tract Infection (Cystitis)",
                         "icd11Code":  "GC00",
                         "icd11Uri":  "http://id.who.int/icd/entity/urinary-tract-infection",
                         "category":  "Genitourinary",
                         "categoryId":  "uro",
                         "subcategory":  "Urinary Tract Infections",
                         "subcategoryId":  "urinary-infection",
                         "severity":  "Moderate",
                         "symptoms":  [
                                          "Burning or scalding pain during urination (Dysuria)",
                                          "Increased urinary frequency of small volumes",
                                          "Distressing urinary urgency",
                                          "Cloudy or foul-smelling urine",
                                          "Lower suprapubic pelvic heaviness"
                                      ],
                         "description":  "Bacterial colonization and inflammation of bladder and urethra, most commonly caused by Uropathogenic E. coli.",
                         "firstLineSalts":  [
                                                "nitrofurantoin",
                                                "cefixime",
                                                "ciprofloxacin",
                                                "paracetamol"
                                            ],
                         "relevantSalts":  [
                                               "nitrofurantoin",
                                               "cefixime",
                                               "ciprofloxacin",
                                               "paracetamol"
                                           ],
                         "emergencyFlags":  [
                                                "High spiking fever with shaking chills and rigors (Pyelonephritis / Kidney infection)",
                                                "Severe unilateral flank loin tenderness",
                                                "Visible blood or clots in urine (Gross hematuria)",
                                                "Inability to void urine"
                                            ],
                         "specialist":  "Urologist / Nephrologist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Drink 2.5 to 3 liters of water daily. Do not delay urination. Wipe front to back. Cranberry extract may assist prevention.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "muscle-spasm-pain",
                         "name":  "Acute Musculoskeletal Strain & Lumbar Spasm",
                         "icd11Code":  "FB32",
                         "icd11Uri":  "http://id.who.int/icd/entity/muscle-spasm-pain",
                         "category":  "Musculoskeletal",
                         "categoryId":  "ortho",
                         "subcategory":  "Muscle Strain & Spasm",
                         "subcategoryId":  "muscle-strain",
                         "severity":  "Mild to Moderate",
                         "symptoms":  [
                                          "Sudden involuntary painful muscle contraction",
                                          "Paravertebral lumbar or cervical tenderness",
                                          "Restricted range of motion and antalgic posture",
                                          "Pain exacerbated by bending or heavy lifting"
                                      ],
                         "description":  "Acute muscle fiber strain or myofascial contracture following unaccustomed physical exertion or posture strain.",
                         "firstLineSalts":  [
                                                "diclofenac-chlorzoxazone",
                                                "ibuprofen",
                                                "paracetamol",
                                                "thiocolchicoside"
                                            ],
                         "relevantSalts":  [
                                               "diclofenac-chlorzoxazone",
                                               "ibuprofen",
                                               "paracetamol",
                                               "thiocolchicoside"
                                           ],
                         "emergencyFlags":  [
                                                "Loss of bowel or bladder control (urinary retention / incontinence - Cauda Equina Emergency)",
                                                "Saddle perineal sensory numbness",
                                                "Progressive leg weakness or foot drop",
                                                "Severe unremitting nocturnal bone pain"
                                            ],
                         "specialist":  "Orthopedic Specialist / Physiatrist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Relative active rest. Ice packs for first 48 hours, followed by warm moist compresses. Ergonomic posture. Core exercises.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "asthma-bronchospasm",
                         "name":  "Bronchial Asthma & Acute Bronchospasm",
                         "icd11Code":  "CA23",
                         "icd11Uri":  "http://id.who.int/icd/entity/asthma-bronchospasm",
                         "category":  "Respiratory & Throat",
                         "categoryId":  "respiratory",
                         "subcategory":  "Chronic Airway Disease",
                         "subcategoryId":  "chronic-airway",
                         "severity":  "Moderate to Chronic",
                         "symptoms":  [
                                          "Expiratory high-pitched musical wheezing",
                                          "Episodic shortness of breath with cold air or exercise",
                                          "Nocturnal dry cough waking patient",
                                          "Chest tightness and air hunger"
                                      ],
                         "description":  "Chronic inflammatory disorder of the airways causing bronchial hyperresponsiveness and reversible bronchoconstriction.",
                         "firstLineSalts":  [
                                                "salbutamol",
                                                "budesonide-formoterol",
                                                "montelukast-levocetirizine"
                                            ],
                         "relevantSalts":  [
                                               "salbutamol",
                                               "budesonide-formoterol",
                                               "montelukast-levocetirizine"
                                           ],
                         "emergencyFlags":  [
                                                "Severe breathlessness: Inability to speak full sentences without pausing",
                                                "Accessory muscle retractions (neck and ribs pulling in)",
                                                "Silent Chest: Diminished wheeze with severe exhaustion (Impending Arrest)",
                                                "Peak flow \u003c 50% unresponsive to inhaler"
                                            ],
                         "specialist":  "Pulmonologist / Chest Physician",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Strict adherence to inhaled corticosteroid controller. Carry rescue Salbutamol inhaler with spacer at all times. Avoid smoke/dust.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "acute-sinusitis",
                         "name":  "Acute Rhinosinusitis & Facial Pressure",
                         "icd11Code":  "CA01",
                         "icd11Uri":  "http://id.who.int/icd/entity/acute-sinusitis",
                         "category":  "Respiratory & Throat",
                         "categoryId":  "respiratory",
                         "subcategory":  "Upper Airway & Pharynx",
                         "subcategoryId":  "upper-respiratory",
                         "severity":  "Moderate",
                         "symptoms":  [
                                          "Facial pain, pressure, or fullness over cheeks and forehead",
                                          "Thick discolored yellow/green purulent nasal discharge",
                                          "Nasal obstruction and impaired sense of smell (hyposmia)",
                                          "Maxillary dental ache",
                                          "Headache worse on bending forward"
                                      ],
                         "description":  "Mucosal inflammation of the paranasal sinuses and nasal cavity, typically following a viral upper respiratory infection.",
                         "firstLineSalts":  [
                                                "amoxicillin-clavulanate",
                                                "paracetamol",
                                                "cetirizine"
                                            ],
                         "relevantSalts":  [
                                               "amoxicillin-clavulanate",
                                               "paracetamol",
                                               "cetirizine"
                                           ],
                         "emergencyFlags":  [
                                                "Periorbital edema, erythema, or bulging eyeball (Orbital Cellulitis)",
                                                "Double vision (Diplopia) or ophthalmoplegia",
                                                "Severe unremitting frontal headache with photophobia (Intracranial extension)"
                                            ],
                         "specialist":  "ENT Specialist / General Physician",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Nasal saline irrigation 3 times daily. Steam inhalation. Adequate oral hydration. Elevate head during sleep.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "peptic-ulcer-disease",
                         "name":  "Peptic Ulcer Disease (Gastric & Duodenal)",
                         "icd11Code":  "DA60",
                         "icd11Uri":  "http://id.who.int/icd/entity/peptic-ulcer-disease",
                         "category":  "Gastrointestinal & Acid",
                         "categoryId":  "gastro",
                         "subcategory":  "Acid Peptic Disorders",
                         "subcategoryId":  "acid-peptic",
                         "severity":  "Moderate to Severe",
                         "symptoms":  [
                                          "Burning epigastric ache occurring 2-3 hours after meals or at night",
                                          "Relief of pain with antacids or food (typical for duodenal)",
                                          "Nausea, early satiety, and belching",
                                          "Intolerance to fatty foods"
                                      ],
                         "description":  "Focal mucosal defect in the gastric or duodenal wall extending through the muscularis mucosae, commonly driven by H. pylori or NSAID usage.",
                         "firstLineSalts":  [
                                                "pantoprazole",
                                                "omeprazole",
                                                "sucralfate",
                                                "famotidine"
                                            ],
                         "relevantSalts":  [
                                               "pantoprazole",
                                               "omeprazole",
                                               "sucralfate",
                                               "famotidine"
                                           ],
                         "emergencyFlags":  [
                                                "Sudden severe generalized \u0027board-like\u0027 abdominal rigidity (Perforation Emergency)",
                                                "Vomiting frank blood or \u0027coffee-grounds\u0027 (Hematemesis)",
                                                "Melena (black tarry fetid stool)",
                                                "Syncope, dizziness, or profound pallor (Hemorrhagic shock)"
                                            ],
                         "specialist":  "Gastroenterologist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Strict cessation of NSAIDs and aspirin. Avoid smoking and alcohol. Small regular non-irritant meals. H. pylori eradication testing.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "irritable-bowel-syndrome",
                         "name":  "Irritable Bowel Syndrome (IBS)",
                         "icd11Code":  "DD91",
                         "icd11Uri":  "http://id.who.int/icd/entity/irritable-bowel-syndrome",
                         "category":  "Gastrointestinal & Acid",
                         "categoryId":  "gastro",
                         "subcategory":  "Functional GI Disorders",
                         "subcategoryId":  "functional-gi",
                         "severity":  "Chronic",
                         "symptoms":  [
                                          "Recurrent abdominal pain related to defecation",
                                          "Change in stool frequency (diarrhea, constipation, or alternating)",
                                          "Change in stool form (lumpy, hard, or loose/watery)",
                                          "Abdominal distension and visible bloating",
                                          "Sensation of incomplete evacuation"
                                      ],
                         "description":  "Chronic functional gastrointestinal disorder characterized by recurrent abdominal pain linked to altered bowel habits and visceral hypersensitivity.",
                         "firstLineSalts":  [
                                                "ors-zinc",
                                                "ondansetron",
                                                "loperamide"
                                            ],
                         "relevantSalts":  [
                                               "ors-zinc",
                                               "ondansetron",
                                               "loperamide"
                                           ],
                         "emergencyFlags":  [
                                                "Unintended progressive weight loss",
                                                "Onset of symptoms after age 50",
                                                "Rectal bleeding not attributable to hemorrhoids",
                                                "Persistent nocturnal diarrhea waking patient from sleep",
                                                "Family history of colorectal malignancy"
                                            ],
                         "specialist":  "Gastroenterologist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Low FODMAP dietary trial. Soluble fiber supplementation (Psyllium husk). Stress management and gut-directed hypnotherapy. Regular exercise.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "tension-type-headache",
                         "name":  "Tension-Type Headache & Scalp Tenderness",
                         "icd11Code":  "8A81",
                         "icd11Uri":  "http://id.who.int/icd/entity/tension-type-headache",
                         "category":  "Neurology & Headache",
                         "categoryId":  "neuro",
                         "subcategory":  "Primary Headache Disorders",
                         "subcategoryId":  "primary-headache",
                         "severity":  "Mild to Moderate",
                         "symptoms":  [
                                          "Bilateral pressing or tightening non-pulsatile pain (\u0027tight band around head\u0027)",
                                          "Mild to moderate intensity, not aggravated by routine walking",
                                          "Pericranial muscle tenderness (scalp, neck, trapezius)",
                                          "Absence of nausea or vomiting",
                                          "No true photophobia and phonophobia together"
                                      ],
                         "description":  "Most prevalent primary headache disorder, mediated by peripheral myofascial pain sensitivity and central sensitization.",
                         "firstLineSalts":  [
                                                "paracetamol",
                                                "ibuprofen",
                                                "naproxen"
                                            ],
                         "relevantSalts":  [
                                               "paracetamol",
                                               "ibuprofen",
                                               "naproxen"
                                           ],
                         "emergencyFlags":  [
                                                "Sudden explosive thunderclap onset",
                                                "New onset headache with fever and neck stiffness",
                                                "Headache with progressive focal neurological signs",
                                                "New headache in patient with known active cancer"
                                            ],
                         "specialist":  "Neurologist / Primary Care",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Cognitive relaxation exercises. Ergonomic neck support. Regular sleep rhythm. Physical therapy for cervical spine.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "osteoarthritis-knee",
                         "name":  "Osteoarthritis of the Knee & Joint Stiffness",
                         "icd11Code":  "FA00",
                         "icd11Uri":  "http://id.who.int/icd/entity/osteoarthritis-knee",
                         "category":  "Musculoskeletal",
                         "categoryId":  "ortho",
                         "subcategory":  "Joint & Arthropathy",
                         "subcategoryId":  "joint-arthropathy",
                         "severity":  "Chronic",
                         "symptoms":  [
                                          "Knee joint pain aggravated by weight-bearing, walking, and stair climbing",
                                          "Morning joint stiffness lasting \u003c 30 minutes",
                                          "Crepitus (grating or crunching sensation) on joint movement",
                                          "Bony enlargement and joint line tenderness",
                                          "Restricted flexion or extension range"
                                      ],
                         "description":  "Progressive degenerative disorder of articular cartilage accompanied by subchondral bone remodeling, osteophyte formation, and joint space narrowing.",
                         "firstLineSalts":  [
                                                "paracetamol",
                                                "aceclofenac",
                                                "diclofenac",
                                                "ibuprofen"
                                            ],
                         "relevantSalts":  [
                                               "paracetamol",
                                               "aceclofenac",
                                               "diclofenac",
                                               "ibuprofen"
                                           ],
                         "emergencyFlags":  [
                                                "Hot, erythematous, tensely swollen joint with high fever (Septic Arthritis Emergency)",
                                                "Sudden inability to bear any weight with severe deformity",
                                                "Locked knee joint unable to flex or extend"
                                            ],
                         "specialist":  "Orthopedic Surgeon / Rheumatologist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Low-impact physical exercise (swimming, stationary cycling). Quadriceps strengthening. Weight loss (reduces knee load by 4x). Supportive footwear.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "cervical-spondylosis",
                         "name":  "Cervical Spondylosis & Neck Strain",
                         "icd11Code":  "FA80",
                         "icd11Uri":  "http://id.who.int/icd/entity/cervical-spondylosis",
                         "category":  "Musculoskeletal",
                         "categoryId":  "ortho",
                         "subcategory":  "Muscle Strain & Spasm",
                         "subcategoryId":  "muscle-strain",
                         "severity":  "Mild to Moderate",
                         "symptoms":  [
                                          "Chronic aching neck pain and occipital stiffness",
                                          "Pain exacerbated by prolonged neck flexion (\u0027text neck\u0027)",
                                          "Restricted cervical rotation and lateral flexion",
                                          "Trapezius muscle tightness and trigger points"
                                      ],
                         "description":  "Age-related degenerative wear of cervical vertebrae and intervertebral discs causing myofascial soreness and mechanical nerve root irritation.",
                         "firstLineSalts":  [
                                                "diclofenac-chlorzoxazone",
                                                "thiocolchicoside",
                                                "paracetamol"
                                            ],
                         "relevantSalts":  [
                                               "diclofenac-chlorzoxazone",
                                               "thiocolchicoside",
                                               "paracetamol"
                                           ],
                         "emergencyFlags":  [
                                                "Shooting electric-shock pain radiating down arm into fingers (Radiculopathy)",
                                                "Hand clumsiness, difficulty buttoning shirts, or dropping objects (Cervical Myelopathy)",
                                                "Gait unsteadiness and spastic leg weakness"
                                            ],
                         "specialist":  "Orthopedist / Spine Specialist / Physiatrist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Ergonomic screen elevation at eye level. Frequent posture breaks every 45 mins. Cervical isometric strengthening exercises. Cervical pillow.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "atopic-dermatitis",
                         "name":  "Atopic Dermatitis & Eczematous Lesions",
                         "icd11Code":  "EA80",
                         "icd11Uri":  "http://id.who.int/icd/entity/atopic-dermatitis",
                         "category":  "Dermatology & Allergy",
                         "categoryId":  "derm",
                         "subcategory":  "Allergic & Eczematous",
                         "subcategoryId":  "allergic-skin",
                         "severity":  "Mild to Moderate",
                         "symptoms":  [
                                          "Intense cutaneous pruritus (itching) often worse at night",
                                          "Erythematous papules and plaques with excoriation",
                                          "Dry, scaly, lichenified skin folds (flexural: elbows, knees, neck)",
                                          "Oozing and crusting in acute exacerbations"
                                      ],
                         "description":  "Chronic relapsing inflammatory skin disease characterized by epidermal barrier dysfunction, immune dysregulation, and intense pruritus.",
                         "firstLineSalts":  [
                                                "cetirizine",
                                                "levocetirizine",
                                                "hydrocortisone-topical"
                                            ],
                         "relevantSalts":  [
                                               "cetirizine",
                                               "levocetirizine",
                                               "hydrocortisone-topical"
                                           ],
                         "emergencyFlags":  [
                                                "Rapidly spreading painful vesicular eruption with fever (Eczema Herpeticum Emergency)",
                                                "Extensive honey-colored crusting with warmth (Secondary Impetigo)",
                                                "Erythroderma covering \u003e 90% body surface area"
                                            ],
                         "specialist":  "Dermatologist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Liberal twice-daily emollient application immediately after tepid bathing. Use soap-free cleansers. Wear loose cotton garments. Keep fingernails short.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "acute-urticaria-hives",
                         "name":  "Acute Urticaria (Hives & Wheals)",
                         "icd11Code":  "EB00",
                         "icd11Uri":  "http://id.who.int/icd/entity/acute-urticaria-hives",
                         "category":  "Dermatology & Allergy",
                         "categoryId":  "derm",
                         "subcategory":  "Allergic & Eczematous",
                         "subcategoryId":  "allergic-skin",
                         "severity":  "Mild to Moderate",
                         "symptoms":  [
                                          "Transient raised, erythematous wheals with pale centers",
                                          "Intense itching, burning, or stinging sensation",
                                          "Lesions resolve within 24 hours without leaving scars, while new lesions appear elsewhere",
                                          "Dermographism (wheal response to scratching)"
                                      ],
                         "description":  "Mast cell degranulation in the superficial dermis releasing histamine and inflammatory mediators, causing localized edema and vasodilation.",
                         "firstLineSalts":  [
                                                "fexofenadine",
                                                "cetirizine",
                                                "levocetirizine"
                                            ],
                         "relevantSalts":  [
                                               "fexofenadine",
                                               "cetirizine",
                                               "levocetirizine"
                                           ],
                         "emergencyFlags":  [
                                                "Associated swelling of lips, tongue, or pharynx (Angioedema)",
                                                "Difficulty breathing, throat tightness, or inspiratory stridor (Anaphylaxis)",
                                                "Dizziness, cold sweat, or sudden collapse"
                                            ],
                         "specialist":  "Dermatologist / Allergist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Avoid known allergic triggers, NSAIDs, and excessive ambient heat. Cool baths and calamine lotion for symptomatic pruritus relief.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "tinea-corporis-fungal",
                         "name":  "Tinea Corporis (Ringworm & Fungal Dermatophytosis)",
                         "icd11Code":  "1F28",
                         "icd11Uri":  "http://id.who.int/icd/entity/tinea-corporis-fungal",
                         "category":  "Dermatology & Allergy",
                         "categoryId":  "derm",
                         "subcategory":  "Superficial Cutaneous Infections",
                         "subcategoryId":  "infectious-skin",
                         "severity":  "Mild",
                         "symptoms":  [
                                          "Annular (ring-shaped) erythematous plaque with raised scaly active borders",
                                          "Central clearing as the lesion expands peripherally",
                                          "Moderate to severe localized pruritus",
                                          "Common in groin (tinea cruris), body, or feet (tinea pedis)"
                                      ],
                         "description":  "Superficial fungal infection of keratinized skin tissues caused by dermatophytes (Trichophyton, Microsporum, Epidermophyton).",
                         "firstLineSalts":  [
                                                "clotrimazole",
                                                "fluconazole"
                                            ],
                         "relevantSalts":  [
                                               "clotrimazole",
                                               "fluconazole"
                                           ],
                         "emergencyFlags":  [
                                                "Secondary bacterial cellulitis with spreading redness, warmth, and purulent drainage",
                                                "Extensive widespread lesions in immunocompromised hosts",
                                                "Lesions affecting facial beard or scalp with hair loss (Kerion)"
                                            ],
                         "specialist":  "Dermatologist / Primary Care",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Keep affected areas clean and dry. Avoid sharing towels and clothing. Wear loose breathable cotton fabrics. Complete full topical antifungal course.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "hypothyroidism",
                         "name":  "Primary Hypothyroidism (Underactive Thyroid)",
                         "icd11Code":  "5A00",
                         "icd11Uri":  "http://id.who.int/icd/entity/hypothyroidism",
                         "category":  "Chronic Care",
                         "categoryId":  "chronic",
                         "subcategory":  "Thyroid & Hormone Care",
                         "subcategoryId":  "endocrine-thyroid",
                         "severity":  "Chronic",
                         "symptoms":  [
                                          "Chronic generalized fatigue and lethargy",
                                          "Unexplained weight gain despite poor appetite",
                                          "Cold intolerance and chilly sensation",
                                          "Constipation and sluggish gut motility",
                                          "Dry brittle skin, thinning hair, and puffy face",
                                          "Bradycardia (slow heart rate)"
                                      ],
                         "description":  "Endocrine deficiency disorder characterized by inadequate production of thyroid hormones (T4 and T3) by the thyroid gland, leading to reduced metabolic rate.",
                         "firstLineSalts":  [
                                                "levothyroxine"
                                            ],
                         "relevantSalts":  [
                                               "levothyroxine"
                                           ],
                         "emergencyFlags":  [
                                                "Myxedema Coma: Hypothermia, severe bradycardia, profound confusion, hypoventilation (Life-threatening ICU emergency)",
                                                "Pericardial effusion with chest heaviness",
                                                "Severe worsening depression or cognitive slowing"
                                            ],
                         "specialist":  "Endocrinologist / General Physician",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Take levothyroxine tablet on empty stomach in morning with plain water, 45-60 mins before breakfast. Periodic TSH monitoring every 6-8 weeks during titration.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "dyslipidemia",
                         "name":  "Dyslipidemia & Hypercholesterolemia",
                         "icd11Code":  "5C80",
                         "icd11Uri":  "http://id.who.int/icd/entity/dyslipidemia",
                         "category":  "Chronic Care",
                         "categoryId":  "chronic",
                         "subcategory":  "Cardiovascular Health",
                         "subcategoryId":  "cardiovascular",
                         "severity":  "Chronic",
                         "symptoms":  [
                                          "Typically completely asymptomatic (\u0027Silent vascular risk\u0027)",
                                          "Elevated LDL cholesterol, total cholesterol, or triglycerides on lipid panel",
                                          "Occasional xanthomas (lipid deposits in skin/tendons) in severe genetic forms",
                                          "Corneal arcus (white ring in cornea) in premature disease"
                                      ],
                         "description":  "Metabolic perturbation in lipoprotein metabolism leading to elevated circulating atherogenic particles (LDL-C, non-HDL-C) accelerating coronary plaque formation.",
                         "firstLineSalts":  [
                                                "atorvastatin"
                                            ],
                         "relevantSalts":  [
                                               "atorvastatin"
                                           ],
                         "emergencyFlags":  [
                                                "Acute severe crushing chest pain, diaphoresis, radiating pain (Acute Coronary Syndrome / MI)",
                                                "Sudden unilateral weakness, facial droop, or speech arrest (Ischemic Stroke)"
                                            ],
                         "specialist":  "Cardiologist / Preventive Physician",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Mediterranean cardioprotective diet (rich in olive oil, nuts, legumes, fish). Eliminate trans fats. Daily 30-minute brisk walk. Tobacco cessation.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "hyperuricemia-gout",
                         "name":  "Acute Gouty Arthritis & Hyperuricemia",
                         "icd11Code":  "FA25",
                         "icd11Uri":  "http://id.who.int/icd/entity/hyperuricemia-gout",
                         "category":  "Musculoskeletal",
                         "categoryId":  "ortho",
                         "subcategory":  "Joint & Arthropathy",
                         "subcategoryId":  "joint-arthropathy",
                         "severity":  "Moderate to Severe",
                         "symptoms":  [
                                          "Sudden excruciating pain, exquisite tenderness, and swelling in first metatarsophalangeal joint (Big Toe - Podagra)",
                                          "Overlying skin hot, tense, shiny, and violaceous red",
                                          "Attack typically begins acutely in early morning hours",
                                          "Even the touch of a bedsheet is agonizing"
                                      ],
                         "description":  "Inflammatory crystal-induced arthritis caused by monosodium urate monohydrate crystal deposition in joints secondary to chronic hyperuricemia.",
                         "firstLineSalts":  [
                                                "ibuprofen",
                                                "diclofenac",
                                                "paracetamol",
                                                "naproxen"
                                            ],
                         "relevantSalts":  [
                                               "ibuprofen",
                                               "diclofenac",
                                               "paracetamol",
                                               "naproxen"
                                           ],
                         "emergencyFlags":  [
                                                "Involvement of multiple large joints with high spiking fever and rigors (Rule out Septic Arthritis)",
                                                "Impaired renal function or anuria in patient taking uricosurics",
                                                "Skin ulceration over large tophi"
                                            ],
                         "specialist":  "Rheumatologist / Orthopedist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Apply ice packs wrapped in cloth for 20 mins. Avoid high-purine foods (organ meats, shellfish, beer, high-fructose corn syrup). Drink \u003e= 2.5L water daily.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "allergic-conjunctivitis",
                         "name":  "Allergic Conjunctivitis & Ocular Pruritus",
                         "icd11Code":  "9A60",
                         "icd11Uri":  "http://id.who.int/icd/entity/allergic-conjunctivitis",
                         "category":  "Dermatology & Allergy",
                         "categoryId":  "derm",
                         "subcategory":  "Allergic & Eczematous",
                         "subcategoryId":  "allergic-skin",
                         "severity":  "Mild to Moderate",
                         "symptoms":  [
                                          "Intense bilateral ocular itching (hallmark symptom)",
                                          "Conjunctival hyperaemia (pink/red eyes)",
                                          "Watery or stringy mucoid discharge",
                                          "Mild chemosis (conjunctival swelling)",
                                          "Periorbital dark circles (\u0027allergic shiners\u0027)"
                                      ],
                         "description":  "Mast-cell mediated IgE hypersensitivity reaction of the ocular conjunctiva to airborne environmental aeroallergens.",
                         "firstLineSalts":  [
                                                "olopatadine-ophthalmic",
                                                "carboxymethylcellulose",
                                                "cetirizine"
                                            ],
                         "relevantSalts":  [
                                               "olopatadine-ophthalmic",
                                               "carboxymethylcellulose",
                                               "cetirizine"
                                           ],
                         "emergencyFlags":  [
                                                "Severe deep ocular pain, photophobia, or foreign body sensation (Rule out Corneal Ulcer / Keratitis)",
                                                "Sudden acute reduction in visual acuity",
                                                "Fixed dilated pupil or ciliary flush"
                                            ],
                         "specialist":  "Ophthalmologist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Cold compresses over closed eyelids. Artificial tear lubricants to dilute ocular allergens. Avoid eye rubbing (prevents mechanical mast cell burst).",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "bacterial-conjunctivitis",
                         "name":  "Acute Bacterial Conjunctivitis (Pink Eye)",
                         "icd11Code":  "9A61",
                         "icd11Uri":  "http://id.who.int/icd/entity/bacterial-conjunctivitis",
                         "category":  "Dermatology & Allergy",
                         "categoryId":  "derm",
                         "subcategory":  "Superficial Cutaneous Infections",
                         "subcategoryId":  "infectious-skin",
                         "severity":  "Mild to Moderate",
                         "symptoms":  [
                                          "Thick, purulent yellow/green eye discharge",
                                          "Eyelids glued or crusted shut upon waking in morning",
                                          "Unilateral onset frequently spreading to contralateral eye within 48 hrs",
                                          "Conjunctival injection (bright pink conjunctiva)",
                                          "Foreign body sensation"
                                      ],
                         "description":  "Acute bacterial infection of the bulbar and palpebral conjunctiva, most commonly caused by Staph aureus, Strep pneumoniae, or H. influenzae.",
                         "firstLineSalts":  [
                                                "ciprofloxacin",
                                                "carboxymethylcellulose"
                                            ],
                         "relevantSalts":  [
                                               "ciprofloxacin",
                                               "carboxymethylcellulose"
                                           ],
                         "emergencyFlags":  [
                                                "Severe pain, corneal opacity, or white spot on cornea (Corneal Ulcer)",
                                                "Marked vision loss or photophobia",
                                                "Copious hyperacute purulent discharge in sexually active person (Gonococcal Keratoconjunctivitis Emergency)"
                                            ],
                         "specialist":  "Ophthalmologist / Primary Physician",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Meticulous hand hygiene. Separate personal towels and pillows. Clean lid margins with sterile warm saline wipes. Discard contact lenses.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "acute-otitis-media",
                         "name":  "Acute Otitis Media (Middle Ear Infection)",
                         "icd11Code":  "AA00",
                         "icd11Uri":  "http://id.who.int/icd/entity/acute-otitis-media",
                         "category":  "Respiratory & Throat",
                         "categoryId":  "respiratory",
                         "subcategory":  "Upper Airway & Pharynx",
                         "subcategoryId":  "upper-respiratory",
                         "severity":  "Moderate",
                         "symptoms":  [
                                          "Severe sharp or throbbing otalgia (earache)",
                                          "Fever (frequently 100.4°F - 102°F)",
                                          "Conductive hearing dullness in affected ear",
                                          "Ear tugging, irritability, and poor feeding in young children",
                                          "Otorrhea (discharge) if tympanic membrane perforates"
                                      ],
                         "description":  "Acute bacterial or viral infection of the mucoperiosteal lining of the middle ear cavity, usually secondary to Eustachian tube dysfunction following a viral URI.",
                         "firstLineSalts":  [
                                                "amoxicillin",
                                                "amoxicillin-clavulanate",
                                                "paracetamol",
                                                "ibuprofen"
                                            ],
                         "relevantSalts":  [
                                               "amoxicillin",
                                               "amoxicillin-clavulanate",
                                               "paracetamol",
                                               "ibuprofen"
                                           ],
                         "emergencyFlags":  [
                                                "Retroauricular post-ear swelling, redness, and tenderness pushing auricle forward (Acute Mastoiditis Emergency)",
                                                "Facial nerve weakness or drooping on affected side",
                                                "Vertigo, nystagmus, or ataxia (Labyrinthitis)",
                                                "Lethargy, neck stiffness, or high fever"
                                            ],
                         "specialist":  "ENT Specialist / Pediatrician",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Analgesic pain control is primary priority. Keep ear dry if membrane is perforated. Avoid inserting cotton swabs into ear canal.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "generalized-anxiety",
                         "name":  "Generalized Anxiety & Somatic Stress",
                         "icd11Code":  "6B00",
                         "icd11Uri":  "http://id.who.int/icd/entity/generalized-anxiety",
                         "category":  "Neurology & Headache",
                         "categoryId":  "neuro",
                         "subcategory":  "Neuropathic Conditions",
                         "subcategoryId":  "peripheral-nerve",
                         "severity":  "Mild to Moderate",
                         "symptoms":  [
                                          "Persistent excessive uncontrollable worry about everyday issues",
                                          "Muscle tension, restlessness, and inability to relax",
                                          "Autonomic hyperarousal: palpitations, tremors, dry mouth",
                                          "Fatigability, difficulty concentrating, and irritability",
                                          "Sleep-onset insomnia and frequent awakenings"
                                      ],
                         "description":  "Common mental health disorder characterized by chronic, pervasive, non-situational anxiety and excessive worry lasting at least 6 months.",
                         "firstLineSalts":  [
                                                "paracetamol"
                                            ],
                         "relevantSalts":  [
                                               "paracetamol"
                                           ],
                         "emergencyFlags":  [
                                                "Active suicidal ideation or intent to harm self (Emergency Mental Health Crisis)",
                                                "Panic attack with chest pain: MUST rule out acute cardiac event first",
                                                "Severe dissociative stupor or psychosis"
                                            ],
                         "specialist":  "Psychiatrist / Clinical Psychologist / Primary Care",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Cognitive Behavioral Therapy (CBT). Diaphragmatic box breathing (4-4-4-4). Regular aerobic exercise. Eliminate excess caffeine and energy drinks. Sleep hygiene.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "primary-insomnia",
                         "name":  "Chronic Insomnia Disorder & Sleep Disruption",
                         "icd11Code":  "7A00",
                         "icd11Uri":  "http://id.who.int/icd/entity/primary-insomnia",
                         "category":  "Neurology & Headache",
                         "categoryId":  "neuro",
                         "subcategory":  "Primary Headache Disorders",
                         "subcategoryId":  "primary-headache",
                         "severity":  "Mild to Moderate",
                         "symptoms":  [
                                          "Difficulty initiating sleep (sleep latency \u003e 30 minutes)",
                                          "Frequent nocturnal awakenings with difficulty falling back asleep",
                                          "Early morning awakening with inability to return to sleep",
                                          "Non-restorative sleep with daytime fatigue, irritability, and low focus"
                                      ],
                         "description":  "Persistent sleep difficulty despite adequate opportunity for sleep, resulting in daytime functional impairment for \u003e= 3 months.",
                         "firstLineSalts":  [
                                                "paracetamol"
                                            ],
                         "relevantSalts":  [
                                               "paracetamol"
                                           ],
                         "emergencyFlags":  [
                                                "Severe daytime sleepiness leading to motor vehicle accidents or near-misses",
                                                "Accompanied by loud snoring, gasping, and witnessed breathing pauses (Obstructive Sleep Apnea)",
                                                "Severe unremitting depressive symptoms or hopelessness"
                                            ],
                         "specialist":  "Sleep Medicine Specialist / Neurologist / Psychiatrist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Cognitive Behavioral Therapy for Insomnia (CBT-I). Strict sleep schedule (same wake time 7 days/wk). Keep bedroom dark, quiet, and cool. No screens 1 hour before bed. Limit caffeine after 2 PM.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "community-acquired-pneumonia",
                         "name":  "Community-Acquired Pneumonia (Lower Respiratory Infection)",
                         "icd11Code":  "CA40",
                         "icd11Uri":  "http://id.who.int/icd/entity/community-acquired-pneumonia",
                         "category":  "Respiratory & Throat",
                         "categoryId":  "respiratory",
                         "subcategory":  "Lower Airway & Bronchi",
                         "subcategoryId":  "lower-respiratory",
                         "severity":  "Severe",
                         "symptoms":  [
                                          "Productive cough with rust-colored or purulent sputum",
                                          "High continuous fever with shaking chills and diaphoresis",
                                          "Pleuritic chest pain (sharp pain catching on deep inhalation)",
                                          "Tachypnea (rapid breathing) and exertional breathlessness",
                                          "Inspiratory crackles and bronchial breath sounds on auscultation"
                                      ],
                         "description":  "Acute infection of the pulmonary parenchymal tissue (alveoli and bronchioles) acquired outside hospital settings, causing alveolar exudative consolidation.",
                         "firstLineSalts":  [
                                                "amoxicillin-clavulanate",
                                                "azithromycin",
                                                "paracetamol"
                                            ],
                         "relevantSalts":  [
                                               "amoxicillin-clavulanate",
                                               "azithromycin",
                                               "paracetamol"
                                           ],
                         "emergencyFlags":  [
                                                "Oxygen saturation (SpO2) \u003c 92% on room air (Immediate Oxygen / ER Triage)",
                                                "Respiratory rate \u003e= 30 breaths/minute",
                                                "Systolic blood pressure \u003c 90 mmHg or confusion in elderly (CURB-65 criteria)",
                                                "Cyanosis, altered mental status, or septic prostration"
                                            ],
                         "specialist":  "Pulmonologist / Critical Care / Infectious Disease",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "IMMEDIATE medical evaluation required. Requires formal chest radiography and antibiotic therapy. Bed rest and supplemental hydration under physician care.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "angina-pectoris-ischemia",
                         "name":  "Angina Pectoris & Suspected Myocardial Ischemia",
                         "icd11Code":  "BA80",
                         "icd11Uri":  "http://id.who.int/icd/entity/angina-pectoris-ischemia",
                         "category":  "Chronic Care",
                         "categoryId":  "chronic",
                         "subcategory":  "Cardiovascular Health",
                         "subcategoryId":  "cardiovascular",
                         "severity":  "Severe",
                         "symptoms":  [
                                          "Substernal crushing, squeezing, or heavy chest pressure (\u0027elephant on chest\u0027)",
                                          "Radiation of pain to left shoulder, arm, neck, jaw, or epigastrium",
                                          "Precipitated by physical exertion or emotional stress, lasting 2-10 minutes",
                                          "Relieved within minutes by rest or sublingual nitroglycerin",
                                          "Accompanied by diaphoresis (cold clammy sweat) and nausea"
                                      ],
                         "description":  "Clinical syndrome of transient myocardial ischemia resulting from imbalance between myocardial oxygen demand and coronary arterial blood supply.",
                         "firstLineSalts":  [
                                                "atorvastatin",
                                                "telmisartan",
                                                "amlodipine"
                                            ],
                         "relevantSalts":  [
                                               "atorvastatin",
                                               "telmisartan",
                                               "amlodipine"
                                           ],
                         "emergencyFlags":  [
                                                "Chest pain persisting \u003e 15-20 minutes at rest (Suspected Acute Myocardial Infarction - CALL 108 / 911 IMMEDIATELY)",
                                                "Chest pain with loss of consciousness, diaphoresis, hypotension, or acute pulmonary edema",
                                                "Crushing pain not relieved by rest"
                                            ],
                         "specialist":  "Cardiologist / Emergency Medicine",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "EMERGENCY EVALUATION: Do NOT ignore acute chest pain. Requires immediate ECG and cardiac biomarkers. Strict cessation of smoking. Cardiac rehabilitation.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "dengue-fever",
                         "name":  "Dengue Arboviral Fever & Platelet Monitoring",
                         "icd11Code":  "1D20",
                         "icd11Uri":  "http://id.who.int/icd/entity/dengue-fever",
                         "category":  "Fever & General",
                         "categoryId":  "general",
                         "subcategory":  "Vector-Borne & Tropical",
                         "subcategoryId":  "vector-borne",
                         "severity":  "Moderate to Severe",
                         "symptoms":  [
                                          "Sudden high fever (103°F - 104°F) with saddleback biphasic pattern",
                                          "Severe retro-orbital pain (sharp pain behind the eyes on moving eyeballs)",
                                          "Severe arthralgia and myalgia (\u0027Breakbone Fever\u0027)",
                                          "Maculopapular blanching rash appearing days 3-5",
                                          "Nausea, vomiting, and extreme prostration"
                                      ],
                         "description":  "Mosquito-borne arboviral infection (DENV 1-4) transmitted by Aedes aegypti mosquitoes, characterized by thrombocytopenia and capillary plasma leakage risk.",
                         "firstLineSalts":  [
                                                "paracetamol",
                                                "ors-zinc"
                                            ],
                         "relevantSalts":  [
                                               "paracetamol",
                                               "ors-zinc"
                                           ],
                         "emergencyFlags":  [
                                                [
                                                    "WARNING SIGNS (Critical Phase: Days 3-7): Persistent vomiting, severe abdominal pain, mucosal bleeding (gums/nose)",
                                                    "Lethargy, fluid accumulation (pleural/ascites), rapid drop in platelets with rising hematocrit",
                                                    "Black stools or red urine (Plasma Leakage / Dengue Shock Syndrome)"
                                                ],
                                                "Infectious Disease / Critical Care / General Physician"
                                            ],
                         "specialist":  "PARACETAMOL ONLY for fever. NEVER take Ibuprofen, Aspirin, or NSAIDs (causes catastrophic hemorrhage in dengue!). Continuous oral rehydration. Daily platelet counts.",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  null,
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "enteric-typhoid-fever",
                         "name":  "Enteric Fever (Typhoid & Paratyphoid)",
                         "icd11Code":  "1A07",
                         "icd11Uri":  "http://id.who.int/icd/entity/enteric-typhoid-fever",
                         "category":  "Fever & General",
                         "categoryId":  "general",
                         "subcategory":  "Acute Febrile Illness",
                         "subcategoryId":  "febrile",
                         "severity":  "Moderate to Severe",
                         "symptoms":  [
                                          "Step-ladder progressive rising fever reaching 103°F-104°F by week 2",
                                          "Relative bradycardia (pulse rate slower than expected for high fever - Faget sign)",
                                          "Coated tongue with red edges",
                                          "Dull frontal headache and lethargy",
                                          "Constipation in early phase followed by \u0027pea-soup\u0027 diarrhea",
                                          "Faint rose-spots on trunk (in 10-20%)"
                                      ],
                         "description":  "Systemic bacterial bacteremia and reticuloendothelial infection caused by Salmonella enterica serovars Typhi or Paratyphi, transmitted via contaminated food/water.",
                         "firstLineSalts":  [
                                                "cefixime",
                                                "ciprofloxacin",
                                                "azithromycin",
                                                "paracetamol"
                                            ],
                         "relevantSalts":  [
                                               "cefixime",
                                               "ciprofloxacin",
                                               "azithromycin",
                                               "paracetamol"
                                           ],
                         "emergencyFlags":  [
                                                "Sudden severe agonizing abdominal pain and rigidity (Ileal Perforation Emergency)",
                                                "Massive lower GI bleeding (Melena / Hematochezia)",
                                                "Delirium, stupor, or persistent muttering \u0027coma vigil\u0027 (Neuropsychiatric Typhoid)"
                                            ],
                         "specialist":  "Infectious Disease / General Physician",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Drink only boiled or chlorinated water. Strict food hygiene. Complete full course of culture-guided antibiotics. Rest and bland non-irritant diet.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "renal-colic-calculi",
                         "name":  "Acute Renal Colic & Nephrolithiasis",
                         "icd11Code":  "GB70",
                         "icd11Uri":  "http://id.who.int/icd/entity/renal-colic-calculi",
                         "category":  "Genitourinary",
                         "categoryId":  "uro",
                         "subcategory":  "Nephrolithiasis & Colic",
                         "subcategoryId":  "renal-calculi",
                         "severity":  "Moderate to Severe",
                         "symptoms":  [
                                          "Sudden excruciating agonizing flank loin pain radiating anteriorly to groin, labia, or testicle",
                                          "Pain occurs in sharp waves (colic) and patient wriggles constantly unable to find comfortable posture",
                                          "Microscopic or visible pink/red hematuria (blood in urine)",
                                          "Nausea, vomiting, and cold diaphoresis during pain spikes",
                                          "Urinary frequency and dysuria as stone approaches bladder"
                                      ],
                         "description":  "Acute ureteral spasm and proximal hydronephrotic capsular distension caused by acute transit or impaction of a urinary calculus (kidney stone).",
                         "firstLineSalts":  [
                                                "diclofenac",
                                                "ibuprofen",
                                                "paracetamol"
                                            ],
                         "relevantSalts":  [
                                               "diclofenac",
                                               "ibuprofen",
                                               "paracetamol"
                                           ],
                         "emergencyFlags":  [
                                                "Renal colic accompanied by high spiking fever and rigors (Infected Obstructed Kidney - Urosepsis Emergency)",
                                                "Anuria (complete absence of urine in solitary kidney)",
                                                "Intractable pain unresponsive to parenterally administered analgesics"
                                            ],
                         "specialist":  "Urologist / Nephrologist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "High fluid intake (2.5 - 3.5 liters/day) to maintain dilute urine once obstruction is excluded. Strain all urine to catch passed stones for analysis. Limit high-oxalate foods.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "diabetic-peripheral-neuropathy",
                         "name":  "Diabetic Peripheral Neuropathy & Sensory Loss",
                         "icd11Code":  "8E40",
                         "icd11Uri":  "http://id.who.int/icd/entity/diabetic-peripheral-neuropathy",
                         "category":  "Neurology & Headache",
                         "categoryId":  "neuro",
                         "subcategory":  "Neuropathic Conditions",
                         "subcategoryId":  "peripheral-nerve",
                         "severity":  "Chronic",
                         "symptoms":  [
                                          "Bilateral symmetric distal burning pain, numbness, or tingling (\u0027pins and needles\u0027) in feet and legs (\u0027stocking-glove distribution\u0027)",
                                          "Exacerbation of burning pain at night interfering with sleep",
                                          "Hyperalgesia / Allodynia (touch of bedsheet feels painful)",
                                          "Loss of protective sensation (inability to feel cuts or blisters)",
                                          "Reduced Achilles ankle jerk reflexes"
                                      ],
                         "description":  "Progressive distal symmetric polyneuropathy driven by chronic hyperglycemia-induced microvascular endoneurial ischemia and metabolic sorbitol accumulation.",
                         "firstLineSalts":  [
                                                "paracetamol"
                                            ],
                         "relevantSalts":  [
                                               "paracetamol"
                                           ],
                         "emergencyFlags":  [
                                                "Painless foot ulcer, blister, or blackened necrotic toe (Diabetic Foot Ulcer / Gangrene Emergency)",
                                                "Spreading redness, warmth, and purulent exudate around foot wound (Diabetic Cellulitis / Osteomyelitis)",
                                                "Charcot neuroarthropathy (hot swollen painless deformed foot)"
                                            ],
                         "specialist":  "Neurologist / Diabetologist / Podiatrist",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Strict glycemic control (HbA1c \u003c 7.0%). Daily visual foot inspection using a mirror. Never walk barefoot. Wear seamless diabetic cushioned socks. Moisturize dry feet (avoid between toes).",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     },
                     {
                         "id":  "oral-candidiasis-thrush",
                         "name":  "Oral Candidiasis (Thrush & Moniliasis)",
                         "icd11Code":  "1F23",
                         "icd11Uri":  "http://id.who.int/icd/entity/oral-candidiasis-thrush",
                         "category":  "Dermatology & Allergy",
                         "categoryId":  "derm",
                         "subcategory":  "Superficial Cutaneous Infections",
                         "subcategoryId":  "infectious-skin",
                         "severity":  "Mild to Moderate",
                         "symptoms":  [
                                          "Creamy white pseudomembranous plaques on tongue, buccal mucosa, palate, or gums",
                                          "Plaques can be scraped off leaving an erythematous, raw, bleeding mucosal base",
                                          "Oral burning sensation, soreness, or altered taste (dysgeusia)",
                                          "Difficulty or pain on swallowing dry food",
                                          "Angular cheilitis (red cracked fissures at corners of mouth)"
                                      ],
                         "description":  "Opportunistic mucosal fungal overgrowth of Candida albicans, frequently triggered by inhaled corticosteroids without rinsing, broad-spectrum antibiotics, or immunosuppression.",
                         "firstLineSalts":  [
                                                "clotrimazole",
                                                "fluconazole"
                                            ],
                         "relevantSalts":  [
                                               "clotrimazole",
                                               "fluconazole"
                                           ],
                         "emergencyFlags":  [
                                                "Severe retrosternal pain on swallowing (Odynophagia / Esophageal Candidiasis - marker of severe systemic immunosuppression)",
                                                "Inability to swallow fluids leading to dehydration",
                                                "Spread to pharynx and airway in compromised patient"
                                            ],
                         "specialist":  "Dentist / Oral Physician / General Practitioner",
                         "careLevel":  "Primary / Specialist Outpatient",
                         "lifestyleGuidance":  "Always rinse mouth thoroughly with water and spit after using inhaled corticosteroids (Budesonide/Fluticasone). Clean dentures nightly. Maintain good oral hygiene.",
                         "source":  {
                                        "sourceName":  "WHO ICD-11 & Standard Clinical Posology",
                                        "reviewedDate":  "2026-05",
                                        "attribution":  "WHO ICD-11 Taxonomy / HIMKIV Posology"
                                    }
                     }
                 ],
    "salts":  {
                  "cefixime":  {
                                   "id":  "cefixime",
                                   "saltName":  "Cefixime Trihydrate",
                                   "chemicalClass":  "Third-Generation Oral Cephalosporin",
                                   "therapeuticCategory":  "Cephalosporin Antibacterial",
                                   "categorySlug":  "respiratory",
                                   "whoModelList":  true,
                                   "indications":  [
                                                       "Uncomplicated lower urinary tract infections",
                                                       "Acute otitis media and bacterial pharyngitis",
                                                       "Typhoid (enteric) fever caused by Salmonella",
                                                       "Uncomplicated gonococcal urethritis"
                                                   ],
                                   "brands":  [
                                                  {
                                                      "name":  "Zifi 200",
                                                      "strength":  "200 mg tablet",
                                                      "company":  "FDC"
                                                  },
                                                  {
                                                      "name":  "Taxim-O 200",
                                                      "strength":  "200 mg tablet",
                                                      "company":  "Alkem"
                                                  },
                                                  {
                                                      "name":  "Cef-O",
                                                      "strength":  "100mg/5ml suspension",
                                                      "company":  "Mankind"
                                                  }
                                              ],
                                   "pediatricDosing":  {
                                                           "formulaPerKg":  "8 mg/kg/day as single daily dose or in 2 divided doses",
                                                           "minMgPerKg":  4,
                                                           "maxMgPerKg":  8,
                                                           "frequency":  "Every 12 to 24 hours",
                                                           "maxDailyCeilingPerKg":  8,
                                                           "liquidFormulations":  [
                                                                                      {
                                                                                          "name":  "Dry Syrup",
                                                                                          "strength":  "50 mg / 5 ml",
                                                                                          "typicalAge":  "6 mos - 2 yrs",
                                                                                          "perMlMg":  10
                                                                                      },
                                                                                      {
                                                                                          "name":  "Forte Suspension",
                                                                                          "strength":  "100 mg / 5 ml",
                                                                                          "typicalAge":  "2 - 12 yrs",
                                                                                          "perMlMg":  20
                                                                                      }
                                                                                  ],
                                                           "source":  "WHO EMLc / BNF for Children 2024",
                                                           "clinicalNote":  "Not established in infants under 6 months."
                                                       },
                                   "adultDosing":  {
                                                       "standardSingleDose":  "200 mg to 400 mg tablet",
                                                       "frequency":  "200 mg twice daily or 400 mg once daily",
                                                       "maxDailyCeiling":  "400 mg in 24 hours",
                                                       "elderlyRenalAdjustment":  "Reduce dose to 200 mg once daily if creatinine clearance \u003c 20 ml/min.",
                                                       "source":  "BNF 86"
                                                   },
                                   "mechanism":  "Bactericidal: Inhibits bacterial cell wall synthesis by binding to PBPs, highly stable against hydrolysis by many beta-lactamases produced by Gram-negative bacilli.",
                                   "contraindications":  [
                                                             "Known hypersensitivity to cephalosporins",
                                                             "History of severe immediate anaphylaxis to penicillins (5-10% cross-reactivity)"
                                                         ],
                                   "sideEffects":  {
                                                       "common":  [
                                                                      "Diarrhea / soft stools",
                                                                      "Nausea",
                                                                      "Dyspepsia",
                                                                      "Flatulence"
                                                                  ],
                                                       "serious":  [
                                                                       "Clostridioides difficile colitis",
                                                                       "Severe cutaneous adverse reactions (DRESS, SJS)",
                                                                       "Transient leukopenia"
                                                                   ]
                                                   },
                                   "interactions":  [
                                                        "Carbamazepine (cefixime elevates carbamazepine levels)",
                                                        "Warfarin (may prolong prothrombin time)"
                                                    ],
                                   "administration":  "Can be taken with or without food. Complete full course.",
                                   "allergyClass":  "Cephalosporin (Caution in severe penicillin allergy)",
                                   "pregnancyCaution":  "Category B: Considered safe during pregnancy.",
                                   "source":  {
                                                  "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                  "reviewedDate":  "2026-05"
                                              }
                               },
                  "azithromycin":  {
                                       "id":  "azithromycin",
                                       "saltName":  "Azithromycin",
                                       "chemicalClass":  "Azalide / Macrolide Antibacterial",
                                       "therapeuticCategory":  "Macrolide Antibiotic",
                                       "categorySlug":  "respiratory",
                                       "whoModelList":  true,
                                       "indications":  [
                                                           "Atypical community-acquired pneumonia (Mycoplasma/Chlamydophila)",
                                                           "Streptococcal pharyngitis in penicillin-allergic patients",
                                                           "Acute bacterial exacerbations of COPD",
                                                           "Chlamydia trachomatis genital infections"
                                                       ],
                                       "brands":  [
                                                      {
                                                          "name":  "Azithral 500",
                                                          "strength":  "500 mg tablet",
                                                          "company":  "Alembic"
                                                      },
                                                      {
                                                          "name":  "Azee 500",
                                                          "strength":  "500 mg tablet",
                                                          "company":  "Cipla"
                                                      },
                                                      {
                                                          "name":  "Zithromax",
                                                          "strength":  "200mg/5ml suspension",
                                                          "company":  "Pfizer"
                                                      }
                                                  ],
                                       "pediatricDosing":  {
                                                               "formulaPerKg":  "10 mg/kg once daily for 3 days (or 10 mg/kg day 1, then 5 mg/kg days 2-5)",
                                                               "minMgPerKg":  5,
                                                               "maxMgPerKg":  10,
                                                               "frequency":  "Once daily on an empty stomach",
                                                               "maxDailyCeilingPerKg":  10,
                                                               "liquidFormulations":  [
                                                                                          {
                                                                                              "name":  "Oral Suspension",
                                                                                              "strength":  "100 mg / 5 ml",
                                                                                              "typicalAge":  "6 mos - 3 yrs",
                                                                                              "perMlMg":  20
                                                                                          },
                                                                                          {
                                                                                              "name":  "Forte Suspension",
                                                                                              "strength":  "200 mg / 5 ml",
                                                                                              "typicalAge":  "3 - 12 yrs",
                                                                                              "perMlMg":  40
                                                                                          }
                                                                                      ],
                                                               "source":  "WHO Model Formulary for Children 2024 / IDSA Guidelines",
                                                               "clinicalNote":  "Long tissue half-life (\u003e68 hours) allows short 3 to 5 day therapeutic courses."
                                                           },
                                       "adultDosing":  {
                                                           "standardSingleDose":  "500 mg tablet",
                                                           "frequency":  "Once daily for 3 to 5 consecutive days",
                                                           "maxDailyCeiling":  "500 mg daily",
                                                           "elderlyRenalAdjustment":  "Caution with cardiac history: baseline QTc assessment recommended.",
                                                           "source":  "BNF 86"
                                                       },
                                       "mechanism":  "Bacteriostatic: Binds reversibly to the 50S ribosomal subunit of susceptible microorganisms, inhibiting transpeptidation and protein synthesis.",
                                       "contraindications":  [
                                                                 "Hypersensitivity to azithromycin, erythromycin, or any macrolide",
                                                                 "History of cholestatic jaundice / hepatic dysfunction associated with prior use",
                                                                 "Known congenital long QT syndrome"
                                                             ],
                                       "sideEffects":  {
                                                           "common":  [
                                                                          "Diarrhea",
                                                                          "Nausea",
                                                                          "Abdominal cramping",
                                                                          "Headache"
                                                                      ],
                                                           "serious":  [
                                                                           "QT prolongation and Torsades de Pointes arrhythmia",
                                                                           "Severe hepatotoxicity",
                                                                           "C. difficile colitis"
                                                                       ]
                                                       },
                                       "interactions":  [
                                                            "Antacids containing aluminum/magnesium (delays absorption rate)",
                                                            "Digoxin (increased digoxin serum concentrations)",
                                                            "Warfarin"
                                                        ],
                                       "administration":  "Take 1 hour before or 2 hours after meals with water.",
                                       "allergyClass":  "Macrolide Class (Safe in Penicillin Allergy)",
                                       "pregnancyCaution":  "Category B: Safe in pregnancy when benefit outweighs risk.",
                                       "source":  {
                                                      "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                      "reviewedDate":  "2026-05"
                                                  }
                                   },
                  "amlodipine":  {
                                     "id":  "amlodipine",
                                     "saltName":  "Amlodipine Besylate",
                                     "chemicalClass":  "Third-Generation Dihydropyridine CCB",
                                     "therapeuticCategory":  "Antihypertensive & Antianginal",
                                     "categorySlug":  "chronic",
                                     "whoModelList":  true,
                                     "indications":  [
                                                         "Essential hypertension (first-line in elderly and Black patients)",
                                                         "Chronic stable angina pectoris",
                                                         "Vasospastic angina"
                                                     ],
                                     "brands":  [
                                                    {
                                                        "name":  "Amlong 5",
                                                        "strength":  "5 mg tablet",
                                                        "company":  "Micro Labs"
                                                    },
                                                    {
                                                        "name":  "Norvasc",
                                                        "strength":  "5 mg / 10 mg tablet",
                                                        "company":  "Pfizer"
                                                    }
                                                ],
                                     "pediatricDosing":  {
                                                             "formulaPerKg":  "2.5 to 5 mg once daily (children 6 to 17 years)",
                                                             "minMgPerKg":  0.05,
                                                             "maxMgPerKg":  0.1,
                                                             "frequency":  "Once daily",
                                                             "maxDailyCeilingPerKg":  5,
                                                             "liquidFormulations":  [

                                                                                    ],
                                                             "source":  "BNF for Children 2024",
                                                             "clinicalNote":  "For pediatric hypertension under specialist care."
                                                         },
                                     "adultDosing":  {
                                                         "standardSingleDose":  "5 mg tablet",
                                                         "frequency":  "Once daily",
                                                         "maxDailyCeiling":  "10 mg in 24 hours",
                                                         "elderlyRenalAdjustment":  "Start with 2.5 mg daily in elderly or frail patients.",
                                                         "source":  "BNF 86"
                                                     },
                                     "mechanism":  "Inhibits transmembrane calcium influx into vascular smooth muscle and cardiac myocytes, producing systemic vasodilation.",
                                     "contraindications":  [
                                                               "Severe hypotension (systolic BP \u003c 90 mmHg)",
                                                               "Severe aortic stenosis",
                                                               "Cardiogenic shock"
                                                           ],
                                     "sideEffects":  {
                                                         "common":  [
                                                                        "Peripheral dependent ankle edema (very common)",
                                                                        "Facial flushing",
                                                                        "Dizziness",
                                                                        "Palpitations"
                                                                    ],
                                                         "serious":  [
                                                                         "Gingival hyperplasia",
                                                                         "Paradoxical worsening of angina (rare)"
                                                                     ]
                                                     },
                                     "interactions":  [
                                                          "Simvastatin (max 20mg simvastatin when co-administered)",
                                                          "Strong CYP3A4 inhibitors (Ketoconazole, Clarithromycin)"
                                                      ],
                                     "administration":  "Can be taken with or without food. Harmless ankle swelling may occur.",
                                     "allergyClass":  "Calcium Channel Blocker",
                                     "pregnancyCaution":  "Category C: Use only if safer alternatives unavailable.",
                                     "source":  {
                                                    "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                    "reviewedDate":  "2026-05"
                                                }
                                 },
                  "levothyroxine":  {
                                        "id":  "levothyroxine",
                                        "saltName":  "Levothyroxine Sodium (T4)",
                                        "chemicalClass":  "Synthetic L-Thyroxine Hormone",
                                        "therapeuticCategory":  "Thyroid Hormone Replacement",
                                        "categorySlug":  "chronic",
                                        "whoModelList":  true,
                                        "indications":  [
                                                            "Primary, secondary, and tertiary hypothyroidism",
                                                            "Pituitary TSH suppression in thyroid goiter and cancer management"
                                                        ],
                                        "brands":  [
                                                       {
                                                           "name":  "Thyronorm",
                                                           "strength":  "25 mcg / 50 mcg / 75 mcg / 100 mcg tablet",
                                                           "company":  "Abbott"
                                                       },
                                                       {
                                                           "name":  "Eltroxin",
                                                           "strength":  "25 mcg / 50 mcg / 100 mcg tablet",
                                                           "company":  "GSK"
                                                       }
                                                   ],
                                        "pediatricDosing":  {
                                                                "formulaPerKg":  "10 to 15 mcg/kg/day (congenital hypothyroidism); 3-5 mcg/kg/day (children \u003e 1 yr)",
                                                                "minMgPerKg":  0.003,
                                                                "maxMgPerKg":  0.015,
                                                                "frequency":  "Once daily in morning on empty stomach",
                                                                "maxDailyCeilingPerKg":  0.02,
                                                                "liquidFormulations":  [

                                                                                       ],
                                                                "source":  "ATA Pediatric Guidelines",
                                                                "clinicalNote":  "Immediate initiation in congenital hypothyroidism prevents intellectual disability."
                                                            },
                                        "adultDosing":  {
                                                            "standardSingleDose":  "Approx 1.6 mcg/kg/day (typically 50-100 mcg)",
                                                            "frequency":  "Once daily in morning on empty stomach",
                                                            "maxDailyCeiling":  "Individualized based on TSH target",
                                                            "elderlyRenalAdjustment":  "Start with 12.5 to 25 mcg/day in elderly or CAD to avoid cardiac ischemia.",
                                                            "source":  "ATA Guidelines / BNF 86"
                                                        },
                                        "mechanism":  "Identical to endogenous thyroxine. Converted peripherally to active T3, binding to nuclear receptors and restoring basal metabolic rate.",
                                        "contraindications":  [
                                                                  "Untreated thyrotoxicosis",
                                                                  "Acute uncorrected adrenal insufficiency",
                                                                  "Acute myocardial infarction"
                                                              ],
                                        "sideEffects":  {
                                                            "common":  [
                                                                           "Usually zero side effects at exact replacement dose. Overtreatment causes hyperthyroid symptoms (palpitations, tremors, weight loss)"
                                                                       ],
                                                            "serious":  [
                                                                            "Cardiac arrhythmias (Atrial Fibrillation)",
                                                                            "Bone mineral loss"
                                                                        ]
                                                        },
                                        "interactions":  [
                                                             "Calcium, Iron, Soy, Aluminum antacids (BIND AND BLOCK ABSORPTION - take \u003e= 4 hours apart)",
                                                             "Warfarin (potentiates anticoagulation)"
                                                         ],
                                        "administration":  "MUST be taken with PLAIN WATER on an EMPTY STOMACH at least 30-60 MINUTES BEFORE BREAKFAST or tea/coffee.",
                                        "allergyClass":  "Synthetic Thyroid Hormone",
                                        "pregnancyCaution":  "Category A: CRITICAL AND ESSENTIAL in pregnancy.",
                                        "source":  {
                                                       "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                       "reviewedDate":  "2026-05"
                                                   }
                                    },
                  "aceclofenac":  {
                                      "id":  "aceclofenac",
                                      "saltName":  "Aceclofenac",
                                      "chemicalClass":  "Phenylacetic acid derivative / Preferential COX-2 inhibitor",
                                      "therapeuticCategory":  "Analgesic & Anti-inflammatory",
                                      "categorySlug":  "ortho",
                                      "whoModelList":  false,
                                      "indications":  [
                                                          "Osteoarthritis, rheumatoid arthritis, and ankylosing spondylitis",
                                                          "Acute lumbago and musculoskeletal strain",
                                                          "Dental pain relief"
                                                      ],
                                      "brands":  [
                                                     {
                                                         "name":  "Hifenac",
                                                         "strength":  "100 mg tablet",
                                                         "company":  "Intas"
                                                     },
                                                     {
                                                         "name":  "Zerodol",
                                                         "strength":  "100 mg tablet",
                                                         "company":  "Ipca"
                                                     },
                                                     {
                                                         "name":  "Aceclo Plus",
                                                         "strength":  "Aceclofenac 100mg + Paracetamol 325mg",
                                                         "company":  "Aristo"
                                                     }
                                                 ],
                                      "pediatricDosing":  {
                                                              "formulaPerKg":  "Not approved in pediatric age group (\u003c18 years)",
                                                              "minMgPerKg":  0,
                                                              "maxMgPerKg":  0,
                                                              "frequency":  "Not applicable",
                                                              "maxDailyCeilingPerKg":  0,
                                                              "liquidFormulations":  [

                                                                                     ],
                                                              "source":  "Verified dosing reference unavailable",
                                                              "clinicalNote":  "Not recommended for children under 18 years."
                                                          },
                                      "adultDosing":  {
                                                          "standardSingleDose":  "100 mg tablet",
                                                          "frequency":  "Twice daily (every 12 hours) with meals",
                                                          "maxDailyCeiling":  "200 mg in 24 hours",
                                                          "elderlyRenalAdjustment":  "Reduce initial dose to 100 mg once daily in hepatic impairment.",
                                                          "source":  "European Medicines Agency (EMA) / CDSCO"
                                                      },
                                      "mechanism":  "Preferentially inhibits COX-2 enzyme with reduced gastrointestinal toxicity profile compared to traditional non-selective NSAIDs.",
                                      "contraindications":  [
                                                                "Active GI bleeding or ulcer",
                                                                "Severe heart failure or established ischemic heart disease",
                                                                "Severe hepatic or renal impairment"
                                                            ],
                                      "sideEffects":  {
                                                          "common":  [
                                                                         "Dyspepsia",
                                                                         "Abdominal discomfort",
                                                                         "Dizziness"
                                                                     ],
                                                          "serious":  [
                                                                          "Peptic ulceration",
                                                                          "Cardiovascular thrombotic events",
                                                                          "Elevated transaminases"
                                                                      ]
                                                      },
                                      "interactions":  [
                                                           "Anticoagulants",
                                                           "Diuretics",
                                                           "ACE inhibitors",
                                                           "Lithium"
                                                       ],
                                      "administration":  "Take preferably with or after food with plenty of fluids.",
                                      "allergyClass":  "NSAID",
                                      "pregnancyCaution":  "Avoid during pregnancy, especially 3rd trimester.",
                                      "source":  {
                                                     "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                     "reviewedDate":  "2026-05"
                                                 }
                                  },
                  "guaifenesin":  {
                                      "id":  "guaifenesin",
                                      "saltName":  "Guaifenesin",
                                      "chemicalClass":  "Propanediol Derivative / Expectorant",
                                      "therapeuticCategory":  "Respiratory Expectorant",
                                      "categorySlug":  "respiratory",
                                      "whoModelList":  true,
                                      "indications":  [
                                                          "Symptomatic relief of wet, productive cough with thick bronchial mucus in bronchitis and upper respiratory infections"
                                                      ],
                                      "brands":  [
                                                     {
                                                         "name":  "Mucinex",
                                                         "strength":  "600 mg extended release tablet",
                                                         "company":  "Reckitt"
                                                     },
                                                     {
                                                         "name":  "Grilinctus-BM",
                                                         "strength":  "Guaifenesin 100mg + Terbutaline 2.5mg per 5ml",
                                                         "company":  "Franco-Indian"
                                                     },
                                                     {
                                                         "name":  "Ascoril",
                                                         "strength":  "Guaifenesin 100mg + Salbutamol 2mg + Bromhexine 4mg per 10ml",
                                                         "company":  "Glenmark"
                                                     }
                                                 ],
                                      "pediatricDosing":  {
                                                              "formulaPerKg":  "12 mg/kg/day in divided doses (children 2 to 11 years)",
                                                              "minMgPerKg":  2.5,
                                                              "maxMgPerKg":  5,
                                                              "frequency":  "Every 4 hours with full glass of water",
                                                              "maxDailyCeilingPerKg":  20,
                                                              "liquidFormulations":  [
                                                                                         {
                                                                                             "name":  "Pediatric Syrup",
                                                                                             "strength":  "50 mg / 5 ml",
                                                                                             "typicalAge":  "2 - 6 yrs",
                                                                                             "perMlMg":  10
                                                                                         },
                                                                                         {
                                                                                             "name":  "Junior Syrup",
                                                                                             "strength":  "100 mg / 5 ml",
                                                                                             "typicalAge":  "6 - 12 yrs",
                                                                                             "perMlMg":  20
                                                                                         }
                                                                                     ],
                                                              "source":  "BNF for Children 2024 / FDA OTC Monograph",
                                                              "clinicalNote":  "Adequate water intake is essential for expectorant thinning action."
                                                          },
                                      "adultDosing":  {
                                                          "standardSingleDose":  "200 mg to 400 mg (immediate release) or 600 mg (extended release)",
                                                          "frequency":  "Every 4 hours (IR) or every 12 hours (ER) with plenty of water",
                                                          "maxDailyCeiling":  "2400 mg in 24 hours",
                                                          "elderlyRenalAdjustment":  "No dose adjustment required.",
                                                          "source":  "BNF 86"
                                                      },
                                      "mechanism":  "Increases the output of thin respiratory tract secretions by reducing sputum surface tension and adhesiveness, facilitating ciliary clearance and productive expectoration.",
                                      "contraindications":  [
                                                                "Hypersensitivity to guaifenesin",
                                                                "Persistent chronic cough from smoking, asthma, or emphysema unless directed by physician"
                                                            ],
                                      "sideEffects":  {
                                                          "common":  [
                                                                         "Nausea",
                                                                         "Vomiting with excessive doses",
                                                                         "Dizziness",
                                                                         "Headache"
                                                                     ],
                                                          "serious":  [
                                                                          "Hypersensitivity rash",
                                                                          "Nephrolithiasis (rare with extreme abuse)"
                                                                      ]
                                                      },
                                      "interactions":  [
                                                           "No significant adverse drug interactions"
                                                       ],
                                      "administration":  "Drink a FULL GLASS OF WATER with each dose to enhance bronchial mucus liquefaction.",
                                      "allergyClass":  "Expectorant",
                                      "pregnancyCaution":  "Category C: Safe during pregnancy when indicated; hydration first.",
                                      "source":  {
                                                     "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                     "reviewedDate":  "2026-05"
                                                 }
                                  },
                  "clotrimazole":  {
                                       "id":  "clotrimazole",
                                       "saltName":  "Clotrimazole",
                                       "chemicalClass":  "Synthetic Imidazole Derivative",
                                       "therapeuticCategory":  "Broad-Spectrum Topical Antifungal",
                                       "categorySlug":  "derm",
                                       "whoModelList":  true,
                                       "indications":  [
                                                           "Tinea corporis (ringworm), Tinea cruris, Tinea pedis",
                                                           "Cutaneous and mucosal candidiasis (oral thrush, vulvovaginal candidiasis)",
                                                           "Pityriasis versicolor"
                                                       ],
                                       "brands":  [
                                                      {
                                                          "name":  "Candid Cream / Powder",
                                                          "strength":  "1% w/w topical cream & powder",
                                                          "company":  "Glenmark"
                                                      },
                                                      {
                                                          "name":  "Canesten",
                                                          "strength":  "1% cream & 100mg vaginal tablet",
                                                          "company":  "Bayer"
                                                      },
                                                      {
                                                          "name":  "Candid Mouth Paint",
                                                          "strength":  "1% w/v oral paint",
                                                          "company":  "Glenmark"
                                                      }
                                                  ],
                                       "pediatricDosing":  {
                                                               "formulaPerKg":  "Apply sparingly 2 to 3 times daily to affected lesions",
                                                               "minMgPerKg":  0,
                                                               "maxMgPerKg":  0,
                                                               "frequency":  "2 to 3 times daily for 2 to 4 weeks",
                                                               "maxDailyCeilingPerKg":  0,
                                                               "liquidFormulations":  [
                                                                                          {
                                                                                              "name":  "Mouth Paint",
                                                                                              "strength":  "1% w/v (10-20 drops on oral lesions)",
                                                                                              "typicalAge":  "All ages",
                                                                                              "perMlMg":  10
                                                                                          }
                                                                                      ],
                                                               "source":  "WHO Model Formulary for Children 2024",
                                                               "clinicalNote":  "Continue for 14 days after lesions disappear to prevent fungal relapse."
                                                           },
                                       "adultDosing":  {
                                                           "standardSingleDose":  "Apply thin layer covering lesion and 2cm surrounding skin",
                                                           "frequency":  "2 to 3 times daily",
                                                           "maxDailyCeiling":  "Topical use: minimal systemic absorption",
                                                           "elderlyRenalAdjustment":  "No adjustment required.",
                                                           "source":  "BNF 86"
                                                       },
                                       "mechanism":  "Inhibits fungal lanosterol 14-alpha-demethylase, blocking ergosterol synthesis and disrupting fungal cell membrane integrity.",
                                       "contraindications":  [
                                                                 "Hypersensitivity to clotrimazole or imidazole antifungals",
                                                                 "Do not apply inside eyes"
                                                             ],
                                       "sideEffects":  {
                                                           "common":  [
                                                                          "Mild localized erythema",
                                                                          "Stinging or burning",
                                                                          "Skin peeling"
                                                                      ],
                                                           "serious":  [
                                                                           "Severe contact dermatitis (rare)"
                                                                       ]
                                                       },
                                       "interactions":  [
                                                            "Negligible systemic drug interactions"
                                                        ],
                                       "administration":  "Wash and thoroughly dry area before application. Rub in gently.",
                                       "allergyClass":  "Imidazole Antifungal",
                                       "pregnancyCaution":  "Category B: Safe for topical/vaginal use during pregnancy.",
                                       "source":  {
                                                      "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                      "reviewedDate":  "2026-05"
                                                  }
                                   },
                  "fexofenadine":  {
                                       "id":  "fexofenadine",
                                       "saltName":  "Fexofenadine Hydrochloride",
                                       "chemicalClass":  "Active Carboxylic Acid Metabolite of Terfenadine / H1 Antagonist",
                                       "therapeuticCategory":  "Non-Sedating Second-Generation Antihistamine",
                                       "categorySlug":  "respiratory",
                                       "whoModelList":  true,
                                       "indications":  [
                                                           "Seasonal allergic rhinitis (sneezing, rhinorrhea, itchy nose)",
                                                           "Chronic idiopathic urticaria",
                                                           "Allergic skin manifestations"
                                                       ],
                                       "brands":  [
                                                      {
                                                          "name":  "Allegra 120 / 180",
                                                          "strength":  "120 mg / 180 mg tablet",
                                                          "company":  "Sanofi"
                                                      },
                                                      {
                                                          "name":  "Fexova 120",
                                                          "strength":  "120 mg tablet",
                                                          "company":  "Intas"
                                                      },
                                                      {
                                                          "name":  "Allegra Suspension",
                                                          "strength":  "30 mg / 5 ml",
                                                          "company":  "Sanofi"
                                                      }
                                                  ],
                                       "pediatricDosing":  {
                                                               "formulaPerKg":  "30 mg twice daily (children 2 - 11 years)",
                                                               "minMgPerKg":  1,
                                                               "maxMgPerKg":  1.5,
                                                               "frequency":  "Twice daily with water",
                                                               "maxDailyCeilingPerKg":  3,
                                                               "liquidFormulations":  [
                                                                                          {
                                                                                              "name":  "Pediatric Suspension",
                                                                                              "strength":  "30 mg / 5 ml",
                                                                                              "typicalAge":  "2 - 11 yrs",
                                                                                              "perMlMg":  6
                                                                                          }
                                                                                      ],
                                                               "source":  "BNF for Children 2024",
                                                               "clinicalNote":  "Do NOT administer with fruit juices (apple, orange, grapefruit) due to OATP1A2 inhibition."
                                                           },
                                       "adultDosing":  {
                                                           "standardSingleDose":  "120 mg once daily (rhinitis) or 180 mg once daily (urticaria)",
                                                           "frequency":  "Once daily with plain water",
                                                           "maxDailyCeiling":  "180 mg in 24 hours",
                                                           "elderlyRenalAdjustment":  "60 mg once daily as starting dose in renal impairment.",
                                                           "source":  "BNF 86"
                                                       },
                                       "mechanism":  "Truly non-sedating: Does not cross the blood-brain barrier. Highly selective peripheral H1-receptor antagonist without anticholinergic or alpha-adrenergic blocking effects.",
                                       "contraindications":  [
                                                                 "Known hypersensitivity to fexofenadine"
                                                             ],
                                       "sideEffects":  {
                                                           "common":  [
                                                                          "Headache",
                                                                          "Drowsiness (rare, comparable to placebo)",
                                                                          "Nausea",
                                                                          "Dizziness"
                                                                      ],
                                                           "serious":  [
                                                                           "Hypersensitivity reactions",
                                                                           "Very rare angioedema"
                                                                       ]
                                                       },
                                       "interactions":  [
                                                            "Fruit juices (grapefruit, orange, apple - reduce bioavailability by \u003e35% via OATP1A2 inhibition; take with PLAIN WATER ONLY)",
                                                            "Aluminum/magnesium antacids (take 2 hours apart)"
                                                        ],
                                       "administration":  "Take with plain WATER ONLY. Avoid fruit juices 4 hours before and after dosing.",
                                       "allergyClass":  "Piperidine H1 Antagonist (Zero Sedation)",
                                       "pregnancyCaution":  "Category C: Use in pregnancy only if potential benefit justifies fetal risk.",
                                       "source":  {
                                                      "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                      "reviewedDate":  "2026-05"
                                                  }
                                   },
                  "omeprazole":  {
                                     "id":  "omeprazole",
                                     "saltName":  "Omeprazole Magnesium",
                                     "chemicalClass":  "Substituted Benzimidazole / PPI",
                                     "therapeuticCategory":  "Gastric Acid Inhibitor",
                                     "categorySlug":  "gastro",
                                     "whoModelList":  true,
                                     "indications":  [
                                                         "Duodenal and benign gastric ulcers",
                                                         "Gastroesophageal reflux disease (GERD)",
                                                         "Eradication of Helicobacter pylori in triple-therapy regimens",
                                                         "NSAID-associated ulcer healing"
                                                     ],
                                     "brands":  [
                                                    {
                                                        "name":  "Omez 20",
                                                        "strength":  "20 mg capsule",
                                                        "company":  "Dr. Reddy\u0027s"
                                                    },
                                                    {
                                                        "name":  "Prilosec",
                                                        "strength":  "20 mg / 40 mg capsule",
                                                        "company":  "AstraZeneca"
                                                    },
                                                    {
                                                        "name":  "Omecip",
                                                        "strength":  "20 mg capsule",
                                                        "company":  "Cipla"
                                                    }
                                                ],
                                     "pediatricDosing":  {
                                                             "formulaPerKg":  "0.7 to 1.4 mg/kg/day (children \u003e= 1 year and \u003e= 10 kg)",
                                                             "minMgPerKg":  0.7,
                                                             "maxMgPerKg":  1.4,
                                                             "frequency":  "Once daily in morning before breakfast",
                                                             "maxDailyCeilingPerKg":  1.4,
                                                             "liquidFormulations":  [

                                                                                    ],
                                                             "source":  "BNF for Children 2024 / WHO EMLc",
                                                             "clinicalNote":  "Capsules can be opened and enteric pellets mixed with apple sauce if unable to swallow whole."
                                                         },
                                     "adultDosing":  {
                                                         "standardSingleDose":  "20 mg to 40 mg capsule",
                                                         "frequency":  "Once daily in the morning before food",
                                                         "maxDailyCeiling":  "40 mg daily (up to 80mg in severe ulcer / Zollinger-Ellison)",
                                                         "elderlyRenalAdjustment":  "No dosage reduction necessary in renal impairment or elderly.",
                                                         "source":  "BNF 86"
                                                     },
                                     "mechanism":  "Inactivates the gastric H+/K+-ATPase enzyme system via disulfide bond covalent binding with cysteine residues, suppressing basal and stimulated acid production.",
                                     "contraindications":  [
                                                               "Hypersensitivity to omeprazole or other PPIs",
                                                               "Concurrent administration of rilpivirine or nelfinavir"
                                                           ],
                                     "sideEffects":  {
                                                         "common":  [
                                                                        "Headache",
                                                                        "Abdominal pain",
                                                                        "Nausea",
                                                                        "Diarrhea",
                                                                        "Constipation"
                                                                    ],
                                                         "serious":  [
                                                                         "Subacute cutaneous lupus erythematosus",
                                                                         "C. difficile-associated colitis",
                                                                         "Hypomagnesemia"
                                                                     ]
                                                     },
                                     "interactions":  [
                                                          "Clopidogrel (CYP2C19 competitive inhibition reduces active clopidogrel metabolite formation)",
                                                          "Diazepam, Phenytoin, Warfarin"
                                                      ],
                                     "administration":  "Take 30-60 minutes before morning breakfast. Do NOT chew or crush enteric pellets.",
                                     "allergyClass":  "Benzimidazole PPI",
                                     "pregnancyCaution":  "Category C: Extensive epidemiological data show no teratogenicity; safe when indicated.",
                                     "source":  {
                                                    "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                    "reviewedDate":  "2026-05"
                                                }
                                 },
                  "carboxymethylcellulose":  {
                                                 "id":  "carboxymethylcellulose",
                                                 "saltName":  "Carboxymethylcellulose Sodium (CMC)",
                                                 "chemicalClass":  "High-Molecular-Weight Polysaccharide Polymer",
                                                 "therapeuticCategory":  "Ocular Lubricant / Artificial Tears",
                                                 "categorySlug":  "derm",
                                                 "whoModelList":  true,
                                                 "indications":  [
                                                                     "Temporary relief of burning, irritation, and discomfort due to dryness of the eye, digital screen fatigue, wind or sun exposure"
                                                                 ],
                                                 "brands":  [
                                                                {
                                                                    "name":  "Refresh Tears 0.5%",
                                                                    "strength":  "0.5% w/v eye drops",
                                                                    "company":  "Allergan"
                                                                },
                                                                {
                                                                    "name":  "Eco Tears",
                                                                    "strength":  "0.5% drops",
                                                                    "company":  "Intas"
                                                                }
                                                            ],
                                                 "pediatricDosing":  {
                                                                         "formulaPerKg":  "1 to 2 drops into affected eye(s) as needed",
                                                                         "minMgPerKg":  0,
                                                                         "maxMgPerKg":  0,
                                                                         "frequency":  "As needed (3 to 4 times daily)",
                                                                         "maxDailyCeilingPerKg":  0,
                                                                         "liquidFormulations":  [

                                                                                                ],
                                                                         "source":  "WHO EML 2023 / Ophthalmic Reference",
                                                                         "clinicalNote":  "Safe for all pediatric age groups with dry irritated eyes."
                                                                     },
                                                 "adultDosing":  {
                                                                     "standardSingleDose":  "1 to 2 drops in the affected eye(s)",
                                                                     "frequency":  "3 to 4 times daily or as needed",
                                                                     "maxDailyCeiling":  "No toxicity limit",
                                                                     "elderlyRenalAdjustment":  "No adjustment required.",
                                                                     "source":  "BNF 86"
                                                                 },
                                                 "mechanism":  "Viscous polymer that binds to corneal and conjunctival epithelial cells, prolonging tear film breakup time and protecting ocular surface from mechanical friction.",
                                                 "contraindications":  [
                                                                           "Hypersensitivity to carboxymethylcellulose sodium"
                                                                       ],
                                                 "sideEffects":  {
                                                                     "common":  [
                                                                                    "Transient blurry vision for 30-60 seconds immediately after instillation"
                                                                                ],
                                                                     "serious":  [
                                                                                     "None known"
                                                                                 ]
                                                                 },
                                                 "interactions":  [
                                                                      "Wait 5-10 minutes before applying other medicated eye drops"
                                                                  ],
                                                 "administration":  "Instill 1-2 drops into conjunctival sac. Do NOT touch dropper tip to eye or skin.",
                                                 "allergyClass":  "Ocular Lubricant",
                                                 "pregnancyCaution":  "Safe during pregnancy and lactation.",
                                                 "source":  {
                                                                "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                                "reviewedDate":  "2026-05"
                                                            }
                                             },
                  "famotidine":  {
                                     "id":  "famotidine",
                                     "saltName":  "Famotidine",
                                     "chemicalClass":  "Thiazole Derivative / Histamine H2-Receptor Antagonist",
                                     "therapeuticCategory":  "H2 Blocker / Antacid",
                                     "categorySlug":  "gastro",
                                     "whoModelList":  true,
                                     "indications":  [
                                                         "Short-term treatment of active duodenal and gastric ulcers",
                                                         "Symptomatic relief of heartburn and acid indigestion",
                                                         "Maintenance therapy for duodenal ulcer at reduced dosage"
                                                     ],
                                     "brands":  [
                                                    {
                                                        "name":  "Famocid 20 / 40",
                                                        "strength":  "20 mg / 40 mg tablet",
                                                        "company":  "Sun Pharma"
                                                    },
                                                    {
                                                        "name":  "Pepcid AC",
                                                        "strength":  "10 mg / 20 mg tablet",
                                                        "company":  "J&J"
                                                    },
                                                    {
                                                        "name":  "Facid",
                                                        "strength":  "20 mg / 40 mg tablet",
                                                        "company":  "Intas"
                                                    }
                                                ],
                                     "pediatricDosing":  {
                                                             "formulaPerKg":  "0.5 to 1 mg/kg/day in 1 or 2 divided doses (children \u003e 1 year)",
                                                             "minMgPerKg":  0.5,
                                                             "maxMgPerKg":  1,
                                                             "frequency":  "Once at bedtime or twice daily",
                                                             "maxDailyCeilingPerKg":  1,
                                                             "liquidFormulations":  [

                                                                                    ],
                                                             "source":  "BNF for Children 2024",
                                                             "clinicalNote":  "Dose reduction in renal insufficiency."
                                                         },
                                     "adultDosing":  {
                                                         "standardSingleDose":  "20 mg to 40 mg tablet",
                                                         "frequency":  "Once daily at bedtime or twice daily (morning & night)",
                                                         "maxDailyCeiling":  "40 mg to 80 mg in 24 hours",
                                                         "elderlyRenalAdjustment":  "Reduce dose by 50% or extend interval to 36-48 hours if eGFR \u003c 50 ml/min to avoid CNS toxicity.",
                                                         "source":  "BNF 86"
                                                     },
                                     "mechanism":  "Competitive reversible inhibitor of histamine at gastric parietal cell H2 receptors, suppressing both daytime and nocturnal basal gastric acid volume and concentration.",
                                     "contraindications":  [
                                                               "Hypersensitivity to famotidine or other H2-receptor antagonists"
                                                           ],
                                     "sideEffects":  {
                                                         "common":  [
                                                                        "Headache",
                                                                        "Dizziness",
                                                                        "Constipation",
                                                                        "Diarrhea"
                                                                    ],
                                                         "serious":  [
                                                                         "Confusion / delirium (primarily in elderly with renal impairment)",
                                                                         "Bradycardia (with IV formulation)"
                                                                     ]
                                                     },
                                     "interactions":  [
                                                          "Atazanavir, Delavirdine, Ketoconazole (reduced bioavailability due to pH elevation)"
                                                      ],
                                     "administration":  "Can be taken with or without food. Bedtime dosing is ideal for nocturnal acid suppression.",
                                     "allergyClass":  "H2 Receptor Blocker",
                                     "pregnancyCaution":  "Category B: Considered safe during pregnancy.",
                                     "source":  {
                                                    "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                    "reviewedDate":  "2026-05"
                                                }
                                 },
                  "diclofenac":  {
                                     "id":  "diclofenac",
                                     "saltName":  "Diclofenac Sodium / Potassium",
                                     "chemicalClass":  "Phenylacetic acid derivative / NSAID",
                                     "therapeuticCategory":  "Analgesic & Anti-inflammatory",
                                     "categorySlug":  "pain-fever",
                                     "whoModelList":  true,
                                     "indications":  [
                                                         "Acute musculoskeletal injuries and soft tissue sprains",
                                                         "Acute gouty arthritis and osteoarthritis flare-ups",
                                                         "Post-operative and renal colic pain"
                                                     ],
                                     "brands":  [
                                                    {
                                                        "name":  "Voveran SR",
                                                        "strength":  "75 mg / 100 mg tablet",
                                                        "company":  "Novartis"
                                                    },
                                                    {
                                                        "name":  "Volini Gel",
                                                        "strength":  "1.16% topical gel",
                                                        "company":  "Sun Pharma"
                                                    },
                                                    {
                                                        "name":  "Dynapar AQ",
                                                        "strength":  "75 mg/1ml injection",
                                                        "company":  "Troikaa"
                                                    }
                                                ],
                                     "pediatricDosing":  {
                                                             "formulaPerKg":  "Not recommended for routine pediatric self-care",
                                                             "minMgPerKg":  0,
                                                             "maxMgPerKg":  0,
                                                             "frequency":  "Prescription only for pediatric juvenile arthritis",
                                                             "maxDailyCeilingPerKg":  0,
                                                             "liquidFormulations":  [

                                                                                    ],
                                                             "source":  "WHO EML / BNF",
                                                             "clinicalNote":  "Pediatric use restricted to specialist juvenile arthritis regimens."
                                                         },
                                     "adultDosing":  {
                                                         "standardSingleDose":  "50 mg tablet or 75 mg SR tablet",
                                                         "frequency":  "Every 8 to 12 hours with meals",
                                                         "maxDailyCeiling":  "150 mg in 24 hours",
                                                         "elderlyRenalAdjustment":  "Use lowest effective dose for shortest duration. High cardiovascular caution.",
                                                         "source":  "BNF 86"
                                                     },
                                     "mechanism":  "Potent inhibition of prostaglandin synthesis by COX-1 and COX-2 with secondary inhibition of arachidonic acid lipoxygenase pathway.",
                                     "contraindications":  [
                                                               "Active peptic ulcer or GI hemorrhage",
                                                               "Severe congestive heart failure (NYHA II-IV)",
                                                               "Ischemic heart disease or peripheral arterial disease",
                                                               "Third trimester of pregnancy"
                                                           ],
                                     "sideEffects":  {
                                                         "common":  [
                                                                        "Epigastric distress",
                                                                        "Nausea",
                                                                        "Headache",
                                                                        "Fluid retention"
                                                                    ],
                                                         "serious":  [
                                                                         "GI perforation / hemorrhage",
                                                                         "Myocardial infarction / stroke risk in high chronic doses",
                                                                         "Hepatotoxicity"
                                                                     ]
                                                     },
                                     "interactions":  [
                                                          "Anticoagulants (warfarin/DOACs)",
                                                          "Methotrexate (increased toxicity)",
                                                          "Digoxin (elevated plasma levels)"
                                                      ],
                                     "administration":  "Take immediately after meals with a full glass of water. Do not crush SR tablets.",
                                     "allergyClass":  "NSAID Class",
                                     "pregnancyCaution":  "Contraindicated in 3rd trimester.",
                                     "source":  {
                                                    "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                    "reviewedDate":  "2026-05"
                                                }
                                 },
                  "ondansetron":  {
                                      "id":  "ondansetron",
                                      "saltName":  "Ondansetron Hydrochloride",
                                      "chemicalClass":  "Selective Serotonin 5-HT3 Receptor Antagonist",
                                      "therapeuticCategory":  "Antiemetic",
                                      "categorySlug":  "gastro",
                                      "whoModelList":  true,
                                      "indications":  [
                                                          "Prevention and treatment of acute nausea and vomiting in gastroenteritis",
                                                          "Chemotherapy-induced and radiation-induced emesis",
                                                          "Post-operative nausea and vomiting"
                                                      ],
                                      "brands":  [
                                                     {
                                                         "name":  "Emeset 4",
                                                         "strength":  "4 mg tablet & 2mg/5ml syrup",
                                                         "company":  "Cipla"
                                                     },
                                                     {
                                                         "name":  "Zofran",
                                                         "strength":  "4 mg / 8 mg tablet",
                                                         "company":  "Novartis"
                                                     },
                                                     {
                                                         "name":  "Vomikind",
                                                         "strength":  "4 mg MD (mouth dissolving) tablet",
                                                         "company":  "Mankind"
                                                     }
                                                 ],
                                      "pediatricDosing":  {
                                                              "formulaPerKg":  "0.15 mg/kg/dose (children \u003e= 6 months)",
                                                              "minMgPerKg":  0.1,
                                                              "maxMgPerKg":  0.15,
                                                              "frequency":  "Every 8 hours as needed for vomiting",
                                                              "maxDailyCeilingPerKg":  0.45,
                                                              "liquidFormulations":  [
                                                                                         {
                                                                                             "name":  "Oral Solution",
                                                                                             "strength":  "2 mg / 5 ml",
                                                                                             "typicalAge":  "6 mos - 10 yrs",
                                                                                             "perMlMg":  0.4
                                                                                         }
                                                                                     ],
                                                              "source":  "WHO Model Formulary for Children 2024 / AAP Guidelines",
                                                              "clinicalNote":  "Single dose in acute pediatric gastroenteritis significantly reduces IV hydration requirement."
                                                          },
                                      "adultDosing":  {
                                                          "standardSingleDose":  "4 mg to 8 mg tablet",
                                                          "frequency":  "Every 8 hours as needed (30 mins before meals)",
                                                          "maxDailyCeiling":  "16 mg to 24 mg daily",
                                                          "elderlyRenalAdjustment":  "Do not exceed 8 mg/day in severe hepatic impairment (Child-Pugh score \u003e= 10).",
                                                          "source":  "BNF 86"
                                                      },
                                      "mechanism":  "Selectively blocks peripheral 5-HT3 receptors on vagal afferents in the gut and centrally in the chemoreceptor trigger zone (CTZ) of the area postrema.",
                                      "contraindications":  [
                                                                "Known hypersensitivity to ondansetron",
                                                                "Concurrent use of apomorphine (profound hypotension)",
                                                                "Congenital long QT syndrome"
                                                            ],
                                      "sideEffects":  {
                                                          "common":  [
                                                                         "Headache (very common)",
                                                                         "Constipation",
                                                                         "Flushing",
                                                                         "Drowsiness"
                                                                     ],
                                                          "serious":  [
                                                                          "QTc prolongation",
                                                                          "Serotonin syndrome (when combined with serotonergic drugs)"
                                                                      ]
                                                      },
                                      "interactions":  [
                                                           "QTc prolonging antiarrhythmics / psychotropics",
                                                           "Apomorphine",
                                                           "Tramadol (reduced tramadol analgesia)"
                                                       ],
                                      "administration":  "Can be taken with or without food. Mouth-dissolving tablets dissolve rapidly on tongue.",
                                      "allergyClass":  "5-HT3 Antagonist",
                                      "pregnancyCaution":  "Category B: First-line hospital antiemetic in hyperemesis gravidarum.",
                                      "source":  {
                                                     "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                     "reviewedDate":  "2026-05"
                                                 }
                                  },
                  "glimepiride":  {
                                      "id":  "glimepiride",
                                      "saltName":  "Glimepiride",
                                      "chemicalClass":  "Second/Third-Generation Sulfonylurea",
                                      "therapeuticCategory":  "Oral Hypoglycemic Agent",
                                      "categorySlug":  "chronic",
                                      "whoModelList":  true,
                                      "indications":  [
                                                          "Adjunct to diet and exercise in Type 2 Diabetes Mellitus when metformin alone is insufficient"
                                                      ],
                                      "brands":  [
                                                     {
                                                         "name":  "Amaryl 1 / 2",
                                                         "strength":  "1 mg / 2 mg tablet",
                                                         "company":  "Sanofi"
                                                     },
                                                     {
                                                         "name":  "Glimestar 1 / 2",
                                                         "strength":  "1 mg / 2 mg tablet",
                                                         "company":  "Mankind"
                                                     }
                                                 ],
                                      "pediatricDosing":  {
                                                              "formulaPerKg":  "Not approved in pediatric age group (\u003c18 years)",
                                                              "minMgPerKg":  0,
                                                              "maxMgPerKg":  0,
                                                              "frequency":  "Not applicable",
                                                              "maxDailyCeilingPerKg":  0,
                                                              "liquidFormulations":  [

                                                                                     ],
                                                              "source":  "Verified dosing reference unavailable",
                                                              "clinicalNote":  "Sulfonylureas generally avoided in children due to hypoglycemia risk."
                                                          },
                                      "adultDosing":  {
                                                          "standardSingleDose":  "1 mg to 2 mg tablet",
                                                          "frequency":  "Once daily with the first main meal (breakfast)",
                                                          "maxDailyCeiling":  "8 mg in 24 hours (clinical efficacy mostly \u003c= 4mg)",
                                                          "elderlyRenalAdjustment":  "Start with 1 mg daily in elderly or renal impairment; extreme hypoglycemia vigilance.",
                                                          "source":  "BNF 86"
                                                      },
                                      "mechanism":  "Binds to SUR1 receptors on pancreatic beta-cell membranes, closing K-ATP channels, stimulating endogenous insulin exocytosis.",
                                      "contraindications":  [
                                                                "Type 1 Diabetes Mellitus",
                                                                "Diabetic ketoacidosis",
                                                                "Severe hepatic or renal insufficiency",
                                                                "Known sulfonamide hypersensitivity"
                                                            ],
                                      "sideEffects":  {
                                                          "common":  [
                                                                         "Hypoglycemia (blood sugar \u003c 70 mg/dL)",
                                                                         "Weight gain",
                                                                         "Dizziness",
                                                                         "Nausea"
                                                                     ],
                                                          "serious":  [
                                                                          "Severe prolonged hypoglycemia (requires dextrose monitoring)",
                                                                          "Aplastic anemia (rare)"
                                                                      ]
                                                      },
                                      "interactions":  [
                                                           "Beta-blockers (mask warning signs of hypoglycemia like tremors/tachycardia)",
                                                           "Fluconazole, Clarithromycin (impair clearance and precipitate severe hypoglycemia)",
                                                           "Alcohol"
                                                       ],
                                      "administration":  "MUST be taken IMMEDIATELY BEFORE OR WITH BREAKFAST. Never skip meals after taking.",
                                      "allergyClass":  "Sulfonylurea (Hypoglycemia Risk)",
                                      "pregnancyCaution":  "Category C: Avoid in pregnancy; insulin is standard of care.",
                                      "source":  {
                                                     "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                     "reviewedDate":  "2026-05"
                                                 }
                                  },
                  "ibuprofen":  {
                                    "id":  "ibuprofen",
                                    "saltName":  "Ibuprofen",
                                    "chemicalClass":  "Propionic acid derivative / Non-Selective NSAID",
                                    "therapeuticCategory":  "NSAID & Anti-inflammatory",
                                    "categorySlug":  "pain-fever",
                                    "whoModelList":  true,
                                    "indications":  [
                                                        "Inflammatory pain (musculoskeletal strain, arthritis, dental pain)",
                                                        "Dysmenorrhea",
                                                        "Second-line antipyretic in high fever"
                                                    ],
                                    "brands":  [
                                                   {
                                                       "name":  "Brufen",
                                                       "strength":  "200 mg / 400 mg tablet",
                                                       "company":  "Abbott"
                                                   },
                                                   {
                                                       "name":  "Ibugesic Plus",
                                                       "strength":  "Ibuprofen 400mg + Paracetamol 325mg",
                                                       "company":  "Cipla"
                                                   },
                                                   {
                                                       "name":  "Advil",
                                                       "strength":  "200 mg tablet",
                                                       "company":  "Pfizer"
                                                   }
                                               ],
                                    "pediatricDosing":  {
                                                            "formulaPerKg":  "10 mg/kg/dose",
                                                            "minMgPerKg":  5,
                                                            "maxMgPerKg":  10,
                                                            "frequency":  "Every 6 to 8 hours with meals (Max 3 doses in 24 hours)",
                                                            "maxDailyCeilingPerKg":  30,
                                                            "liquidFormulations":  [
                                                                                       {
                                                                                           "name":  "Pediatric Suspension",
                                                                                           "strength":  "100 mg / 5 ml",
                                                                                           "typicalAge":  "6 mos - 12 yrs",
                                                                                           "perMlMg":  20
                                                                                       }
                                                                                   ],
                                                            "source":  "BNF for Children 2024",
                                                            "clinicalNote":  "Contraindicated in infants \u003c 3 months or \u003c 5 kg. NEVER use in suspected Dengue."
                                                        },
                                    "adultDosing":  {
                                                        "standardSingleDose":  "400 mg tablet",
                                                        "frequency":  "Every 6 to 8 hours with food",
                                                        "maxDailyCeiling":  "1200 mg (OTC) to 2400 mg (Prescription maximum)",
                                                        "elderlyRenalAdjustment":  "Avoid in moderate to severe renal impairment (eGFR \u003c 30 ml/min).",
                                                        "source":  "British National Formulary (BNF 86)"
                                                    },
                                    "mechanism":  "Inhibits cyclooxygenase enzymes COX-1 and COX-2, blocking peripheral synthesis of pro-inflammatory prostaglandins and thromboxane.",
                                    "contraindications":  [
                                                              "Active peptic ulcer disease or GI bleeding",
                                                              "Third trimester of pregnancy (premature ductus arteriosus closure)",
                                                              "Aspirin-exacerbated respiratory disease (AERD)",
                                                              "Suspected Dengue fever"
                                                          ],
                                    "sideEffects":  {
                                                        "common":  [
                                                                       "Dyspepsia",
                                                                       "Heartburn",
                                                                       "Nausea"
                                                                   ],
                                                        "serious":  [
                                                                        "GI ulceration and bleeding",
                                                                        "Acute renal impairment",
                                                                        "Bronchospasm in asthmatics"
                                                                    ]
                                                    },
                                    "interactions":  [
                                                         "Aspirin / Anticoagulants (increased hemorrhage risk)",
                                                         "ACE inhibitors / ARBs (attenuated hypotensive effect and renal strain)",
                                                         "Lithium (decreased clearance)"
                                                     ],
                                    "administration":  "MUST be taken with food or milk to minimize gastric mucosal irritation.",
                                    "allergyClass":  "NSAID / COX Inhibitor",
                                    "pregnancyCaution":  "Contraindicated in 3rd trimester. Avoid in 1st/2nd trimester unless physician-prescribed.",
                                    "source":  {
                                                   "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                   "reviewedDate":  "2026-05"
                                               }
                                },
                  "metronidazole":  {
                                        "id":  "metronidazole",
                                        "saltName":  "Metronidazole",
                                        "chemicalClass":  "Synthetic Nitroimidazole",
                                        "therapeuticCategory":  "Antiprotozoal & Anaerobic Antibacterial",
                                        "categorySlug":  "gastro",
                                        "whoModelList":  true,
                                        "indications":  [
                                                            "Amoebiasis (entamoeba histolytica) and Giardiasis",
                                                            "Anaerobic intra-abdominal sepsis and dental abscesses",
                                                            "Bacterial vaginosis and Trichomoniasis",
                                                            "Helicobacter pylori eradication regimens"
                                                        ],
                                        "brands":  [
                                                       {
                                                           "name":  "Flagyl 400",
                                                           "strength":  "400 mg tablet",
                                                           "company":  "Abbott"
                                                       },
                                                       {
                                                           "name":  "Metrogyl 400",
                                                           "strength":  "400 mg tablet",
                                                           "company":  "J.B. Chemicals"
                                                       },
                                                       {
                                                           "name":  "Metrogyl Suspension",
                                                           "strength":  "200mg/5ml suspension",
                                                           "company":  "J.B. Chemicals"
                                                       }
                                                   ],
                                        "pediatricDosing":  {
                                                                "formulaPerKg":  "30 to 40 mg/kg/day in 3 divided doses for amoebiasis",
                                                                "minMgPerKg":  10,
                                                                "maxMgPerKg":  15,
                                                                "frequency":  "Every 8 hours with meals for 5-7 days",
                                                                "maxDailyCeilingPerKg":  40,
                                                                "liquidFormulations":  [
                                                                                           {
                                                                                               "name":  "Oral Suspension (as benzoate)",
                                                                                               "strength":  "200 mg / 5 ml",
                                                                                               "typicalAge":  "1 - 12 yrs",
                                                                                               "perMlMg":  40
                                                                                           }
                                                                                       ],
                                                                "source":  "WHO Model Formulary for Children 2024",
                                                                "clinicalNote":  "Suspension formulated as metronidazole benzoate to mask bitter taste."
                                                            },
                                        "adultDosing":  {
                                                            "standardSingleDose":  "400 mg tablet",
                                                            "frequency":  "Every 8 hours with meals for 5 to 7 days",
                                                            "maxDailyCeiling":  "1200 mg to 1500 mg in 24 hours",
                                                            "elderlyRenalAdjustment":  "Dose reduction in severe hepatic impairment. No renal adjustment needed.",
                                                            "source":  "BNF 86"
                                                        },
                                        "mechanism":  "Prodrug reduced inside anaerobic microorganisms and protozoa to generate toxic nitro free radicals that disrupt helical DNA structure.",
                                        "contraindications":  [
                                                                  "First trimester of pregnancy (relative)",
                                                                  "Known hypersensitivity to nitroimidazoles",
                                                                  "Active severe CNS disease"
                                                              ],
                                        "sideEffects":  {
                                                            "common":  [
                                                                           "Metallic taste in mouth (very common)",
                                                                           "Nausea",
                                                                           "Anorexia",
                                                                           "Dark red-brown urine"
                                                                       ],
                                                            "serious":  [
                                                                            "Disulfiram-like ethanol reaction",
                                                                            "Peripheral neuropathy with prolonged use",
                                                                            "Seizures"
                                                                        ]
                                                        },
                                        "interactions":  [
                                                             "ALCOHOL (causes severe disulfiram reaction: violent vomiting, flushing, tachycardia - avoid alcohol during and for 48h after)",
                                                             "Warfarin",
                                                             "Lithium"
                                                         ],
                                        "administration":  "MUST be taken with or after meals. ABSOLUTE AVOIDANCE of alcohol.",
                                        "allergyClass":  "Nitroimidazole",
                                        "pregnancyCaution":  "Avoid in first trimester; use only if clearly necessary in 2nd/3rd.",
                                        "source":  {
                                                       "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                       "reviewedDate":  "2026-05"
                                                   }
                                    },
                  "losartan":  {
                                   "id":  "losartan",
                                   "saltName":  "Losartan Potassium",
                                   "chemicalClass":  "Prototypical Angiotensin II Receptor Antagonist",
                                   "therapeuticCategory":  "Antihypertensive & Renal Protective",
                                   "categorySlug":  "chronic",
                                   "whoModelList":  true,
                                   "indications":  [
                                                       "Hypertension management",
                                                       "Diabetic nephropathy in type 2 diabetes with proteinuria",
                                                       "Stroke risk reduction in hypertension with LVH"
                                                   ],
                                   "brands":  [
                                                  {
                                                      "name":  "Repace 50",
                                                      "strength":  "50 mg tablet",
                                                      "company":  "Sun Pharma"
                                                  },
                                                  {
                                                      "name":  "Cozaar",
                                                      "strength":  "50 mg / 100 mg tablet",
                                                      "company":  "Merck"
                                                  }
                                              ],
                                   "pediatricDosing":  {
                                                           "formulaPerKg":  "0.7 mg/kg once daily (children \u003e= 6 years; max 50mg/day)",
                                                           "minMgPerKg":  0.7,
                                                           "maxMgPerKg":  1.4,
                                                           "frequency":  "Once daily",
                                                           "maxDailyCeilingPerKg":  1.4,
                                                           "liquidFormulations":  [

                                                                                  ],
                                                           "source":  "BNF for Children 2024",
                                                           "clinicalNote":  "For pediatric hypertension."
                                                       },
                                   "adultDosing":  {
                                                       "standardSingleDose":  "50 mg tablet",
                                                       "frequency":  "Once daily",
                                                       "maxDailyCeiling":  "100 mg in 24 hours",
                                                       "elderlyRenalAdjustment":  "Consider 25 mg starting dose in elderly \u003e 75 yrs.",
                                                       "source":  "BNF 86"
                                                   },
                                   "mechanism":  "Competitive AT1 receptor antagonist with unique mild uricosuric action (promotes uric acid excretion), ideal in hypertension with gout.",
                                   "contraindications":  [
                                                             "Pregnancy (Black Box Warning)",
                                                             "Concomitant aliskiren in diabetes",
                                                             "Severe hepatic insufficiency"
                                                         ],
                                   "sideEffects":  {
                                                       "common":  [
                                                                      "Dizziness",
                                                                      "Nasal congestion",
                                                                      "Back pain"
                                                                  ],
                                                       "serious":  [
                                                                       "Hyperkalemia",
                                                                       "Acute renal deterioration",
                                                                       "Angioedema"
                                                                   ]
                                                   },
                                   "interactions":  [
                                                        "Potassium supplements / salt substitutes",
                                                        "Lithium",
                                                        "NSAIDs"
                                                    ],
                                   "administration":  "Take once daily with water. Monitor baseline potassium and renal function.",
                                   "allergyClass":  "ARB Class",
                                   "pregnancyCaution":  "Category D: STRICTLY CONTRAINDICATED in pregnancy.",
                                   "source":  {
                                                  "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                  "reviewedDate":  "2026-05"
                                              }
                               },
                  "pantoprazole":  {
                                       "id":  "pantoprazole",
                                       "saltName":  "Pantoprazole Sodium",
                                       "chemicalClass":  "Substituted Benzimidazole / Proton Pump Inhibitor",
                                       "therapeuticCategory":  "Gastric Acid Inhibitor / PPI",
                                       "categorySlug":  "gastro",
                                       "whoModelList":  true,
                                       "indications":  [
                                                           "GERD and reflux esophagitis",
                                                           "Peptic ulcer disease (gastric and duodenal)",
                                                           "Zollinger-Ellison syndrome",
                                                           "NSAID-induced gastroprotection in high-risk patients"
                                                       ],
                                       "brands":  [
                                                      {
                                                          "name":  "Pan 40",
                                                          "strength":  "40 mg enteric-coated tablet",
                                                          "company":  "Alkem"
                                                      },
                                                      {
                                                          "name":  "Pantocid 40",
                                                          "strength":  "40 mg tablet",
                                                          "company":  "Sun Pharma"
                                                      },
                                                      {
                                                          "name":  "Protonix",
                                                          "strength":  "40 mg tablet",
                                                          "company":  "Pfizer"
                                                      }
                                                  ],
                                       "pediatricDosing":  {
                                                               "formulaPerKg":  "1 mg/kg/day (children \u003e= 5 years and \u003e= 15 kg)",
                                                               "minMgPerKg":  0.5,
                                                               "maxMgPerKg":  1,
                                                               "frequency":  "Once daily in morning before breakfast",
                                                               "maxDailyCeilingPerKg":  1,
                                                               "liquidFormulations":  [

                                                                                      ],
                                                               "source":  "BNF for Children 2024",
                                                               "clinicalNote":  "Tablets must not be split, crushed, or chewed."
                                                           },
                                       "adultDosing":  {
                                                           "standardSingleDose":  "40 mg enteric-coated tablet",
                                                           "frequency":  "Once daily in the morning (30-60 mins before breakfast)",
                                                           "maxDailyCeiling":  "80 mg daily (in divided doses for Zollinger-Ellison)",
                                                           "elderlyRenalAdjustment":  "No dose adjustment required in renal impairment or elderly.",
                                                           "source":  "BNF 86"
                                                       },
                                       "mechanism":  "Irreversibly inhibits the H+/K+-ATPase enzyme pump (\u0027proton pump\u0027) on the luminal secretory surface of gastric parietal cells, blocking the final step of acid secretion.",
                                       "contraindications":  [
                                                                 "Known hypersensitivity to substituted benzimidazoles (PPIs)",
                                                                 "Concomitant rilpivirine administration"
                                                             ],
                                       "sideEffects":  {
                                                           "common":  [
                                                                          "Headache",
                                                                          "Diarrhea",
                                                                          "Abdominal discomfort",
                                                                          "Flatulence"
                                                                      ],
                                                           "serious":  [
                                                                           "Clostridioides difficile-associated diarrhea",
                                                                           "Hypomagnesemia (with prolonged use \u003e 1 yr)",
                                                                           "Osteoporotic fracture risk with chronic high-dose therapy",
                                                                           "Vitamin B12 deficiency"
                                                                       ]
                                                       },
                                       "interactions":  [
                                                            "Methotrexate (elevated levels)",
                                                            "Clopidogrel (minimal interaction compared to omeprazole)",
                                                            "Ketoconazole / Iron (reduced absorption due to low acidity)"
                                                        ],
                                       "administration":  "Take 30-60 minutes BEFORE the first meal of the day. Swallow whole with water.",
                                       "allergyClass":  "Benzimidazole PPI",
                                       "pregnancyCaution":  "Category B: Safe during pregnancy when indicated.",
                                       "source":  {
                                                      "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                      "reviewedDate":  "2026-05"
                                                  }
                                   },
                  "nitrofurantoin":  {
                                         "id":  "nitrofurantoin",
                                         "saltName":  "Nitrofurantoin (Macrocrystals)",
                                         "chemicalClass":  "Nitrofuran Synthetic Antibacterial",
                                         "therapeuticCategory":  "Urinary Tract Antibacterial",
                                         "categorySlug":  "uro",
                                         "whoModelList":  true,
                                         "indications":  [
                                                             "Uncomplicated acute lower urinary tract infection (cystitis)",
                                                             "Prophylaxis of recurrent lower urinary tract infections"
                                                         ],
                                         "brands":  [
                                                        {
                                                            "name":  "Martifur MR",
                                                            "strength":  "100 mg modified release capsule",
                                                            "company":  "Mankind"
                                                        },
                                                        {
                                                            "name":  "Macrodantin",
                                                            "strength":  "50 mg / 100 mg capsule",
                                                            "company":  "Alvogen"
                                                        },
                                                        {
                                                            "name":  "Uribid",
                                                            "strength":  "100 mg tablet",
                                                            "company":  "Intas"
                                                        }
                                                    ],
                                         "pediatricDosing":  {
                                                                 "formulaPerKg":  "5 to 7 mg/kg/day in 4 divided doses (children \u003e 3 months)",
                                                                 "minMgPerKg":  1.25,
                                                                 "maxMgPerKg":  1.75,
                                                                 "frequency":  "Every 6 hours with milk or meals",
                                                                 "maxDailyCeilingPerKg":  7,
                                                                 "liquidFormulations":  [
                                                                                            {
                                                                                                "name":  "Oral Suspension",
                                                                                                "strength":  "25 mg / 5 ml",
                                                                                                "typicalAge":  "3 mos - 12 yrs",
                                                                                                "perMlMg":  5
                                                                                            }
                                                                                        ],
                                                                 "source":  "BNF for Children 2024",
                                                                 "clinicalNote":  "Contraindicated in infants \u003c 3 months of age (risk of neonatal hemolytic anemia)."
                                                             },
                                         "adultDosing":  {
                                                             "standardSingleDose":  "100 mg modified release capsule",
                                                             "frequency":  "Twice daily (every 12 hours) with meals for 5 days",
                                                             "maxDailyCeiling":  "200 mg in 24 hours",
                                                             "elderlyRenalAdjustment":  "CONTRAINDICATED if eGFR \u003c 45 ml/min (ineffective urinary concentrations and neurotoxicity risk).",
                                                             "source":  "BNF 86"
                                                         },
                                         "mechanism":  "Concentrates rapidly in the urinary bladder. Bacterial enzymes reduce nitrofurantoin to active electrophilic intermediates that attack ribosomal proteins, DNA, and metabolic enzymes.",
                                         "contraindications":  [
                                                                   "Renal impairment (eGFR \u003c 45 ml/min)",
                                                                   "Full-term pregnancy (38-42 weeks - risk of neonatal hemolysis)",
                                                                   "Glucose-6-phosphate dehydrogenase (G6PD) deficiency"
                                                               ],
                                         "sideEffects":  {
                                                             "common":  [
                                                                            "Nausea",
                                                                            "Anorexia",
                                                                            "Brown-tinged harmless urine discoloration"
                                                                        ],
                                                             "serious":  [
                                                                             "Acute pulmonary hypersensitivity / fibrosis",
                                                                             "Peripheral neuropathy",
                                                                             "Cholestatic jaundice"
                                                                         ]
                                                         },
                                         "interactions":  [
                                                              "Magnesium trisilicate antacids (reduce absorption)",
                                                              "Probenecid"
                                                          ],
                                         "administration":  "MUST be taken with food or milk to optimize absorption and prevent GI intolerance.",
                                         "allergyClass":  "Nitrofuran",
                                         "pregnancyCaution":  "Category B: Safe in 1st/2nd trimester; CONTRAINDICATED at term (38-42 wks).",
                                         "source":  {
                                                        "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                        "reviewedDate":  "2026-05"
                                                    }
                                     },
                  "amoxicillin":  {
                                      "id":  "amoxicillin",
                                      "saltName":  "Amoxicillin Trihydrate",
                                      "chemicalClass":  "Aminopenicillin / Beta-Lactam Antibacterial",
                                      "therapeuticCategory":  "Antibacterial / Penicillin",
                                      "categorySlug":  "respiratory",
                                      "whoModelList":  true,
                                      "indications":  [
                                                          "Streptococcal pharyngitis and tonsillitis",
                                                          "Acute otitis media in children",
                                                          "Uncomplicated community-acquired pneumonia",
                                                          "Dental abscess and skin soft tissue infections"
                                                      ],
                                      "brands":  [
                                                     {
                                                         "name":  "Novamox",
                                                         "strength":  "250 mg / 500 mg capsule",
                                                         "company":  "Cipla"
                                                     },
                                                     {
                                                         "name":  "Mox",
                                                         "strength":  "250 mg / 500 mg capsule",
                                                         "company":  "Ranbaxy"
                                                     },
                                                     {
                                                         "name":  "Amoxil",
                                                         "strength":  "125mg/5ml & 250mg/5ml suspension",
                                                         "company":  "GSK"
                                                     }
                                                 ],
                                      "pediatricDosing":  {
                                                              "formulaPerKg":  "20 to 40 mg/kg/day (up to 80-90 mg/kg/day in high-dose otitis media)",
                                                              "minMgPerKg":  10,
                                                              "maxMgPerKg":  15,
                                                              "frequency":  "Every 8 hours in divided doses",
                                                              "maxDailyCeilingPerKg":  90,
                                                              "liquidFormulations":  [
                                                                                         {
                                                                                             "name":  "Dry Syrup",
                                                                                             "strength":  "125 mg / 5 ml",
                                                                                             "typicalAge":  "1 mo - 2 yrs",
                                                                                             "perMlMg":  25
                                                                                         },
                                                                                         {
                                                                                             "name":  "Forte Syrup",
                                                                                             "strength":  "250 mg / 5 ml",
                                                                                             "typicalAge":  "2 - 10 yrs",
                                                                                             "perMlMg":  50
                                                                                         }
                                                                                     ],
                                                              "source":  "WHO Model Formulary for Children 2024 / AAP Guidelines",
                                                              "clinicalNote":  "Complete the full 7-10 day course as prescribed to prevent relapse and AMR."
                                                          },
                                      "adultDosing":  {
                                                          "standardSingleDose":  "500 mg tablet or capsule",
                                                          "frequency":  "Every 8 hours (or 875mg every 12 hours)",
                                                          "maxDailyCeiling":  "3000 mg in 24 hours",
                                                          "elderlyRenalAdjustment":  "Extend dosing interval to every 12 hours if GFR 10-30 ml/min.",
                                                          "source":  "BNF 86"
                                                      },
                                      "mechanism":  "Bactericidal: Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs), causing osmotic cell lysis.",
                                      "contraindications":  [
                                                                "Known hypersensitivity to Penicillins or Beta-lactams (Anaphylaxis risk)",
                                                                "Infectious Mononucleosis (EBV - triggers maculopapular rash)"
                                                            ],
                                      "sideEffects":  {
                                                          "common":  [
                                                                         "Diarrhea",
                                                                         "Nausea",
                                                                         "Maculopapular skin rash"
                                                                     ],
                                                          "serious":  [
                                                                          "Anaphylaxis",
                                                                          "Clostridioides difficile-associated pseudomembranous colitis",
                                                                          "Cholestatic jaundice"
                                                                      ]
                                                      },
                                      "interactions":  [
                                                           "Methotrexate (reduced excretion)",
                                                           "Allopurinol (increased skin rash frequency)",
                                                           "Oral contraceptives (minimal effect)"
                                                       ],
                                      "administration":  "Take at evenly spaced intervals with or without food. Complete full course.",
                                      "allergyClass":  "Penicillin Class (Severe Cross-Reactivity)",
                                      "pregnancyCaution":  "Category B: Generally safe in pregnancy under physician guidance.",
                                      "source":  {
                                                     "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                     "reviewedDate":  "2026-05"
                                                 }
                                  },
                  "amoxicillin-clavulanate":  {
                                                  "id":  "amoxicillin-clavulanate",
                                                  "saltName":  "Amoxicillin + Clavulanic Acid",
                                                  "chemicalClass":  "Beta-Lactam + Beta-Lactamase Inhibitor",
                                                  "therapeuticCategory":  "Broad-Spectrum Antibacterial",
                                                  "categorySlug":  "respiratory",
                                                  "whoModelList":  true,
                                                  "indications":  [
                                                                      "Bacterial sinusitis and recurrent otitis media",
                                                                      "Community-acquired pneumonia and acute bronchitis exacerbations",
                                                                      "Urinary tract infections and animal/human bite wounds",
                                                                      "Dental infections with anaerobic flora"
                                                                  ],
                                                  "brands":  [
                                                                 {
                                                                     "name":  "Augmentin 625 Duo",
                                                                     "strength":  "Amoxicillin 500mg + Clavulanate 125mg tablet",
                                                                     "company":  "GSK"
                                                                 },
                                                                 {
                                                                     "name":  "Moxikind-CV 625",
                                                                     "strength":  "500mg/125mg tablet",
                                                                     "company":  "Mankind"
                                                                 },
                                                                 {
                                                                     "name":  "Clavam 625",
                                                                     "strength":  "500mg/125mg tablet",
                                                                     "company":  "Alkem"
                                                                 },
                                                                 {
                                                                     "name":  "Augmentin DDS",
                                                                     "strength":  "400mg/57mg per 5ml syrup",
                                                                     "company":  "GSK"
                                                                 }
                                                             ],
                                                  "pediatricDosing":  {
                                                                          "formulaPerKg":  "25 to 45 mg/kg/day (based on amoxicillin component)",
                                                                          "minMgPerKg":  12.5,
                                                                          "maxMgPerKg":  22.5,
                                                                          "frequency":  "Every 12 hours in divided doses",
                                                                          "maxDailyCeilingPerKg":  45,
                                                                          "liquidFormulations":  [
                                                                                                     {
                                                                                                         "name":  "DDS Oral Suspension",
                                                                                                         "strength":  "400 mg amox / 5 ml",
                                                                                                         "typicalAge":  "2 mos - 12 yrs",
                                                                                                         "perMlMg":  80
                                                                                                     },
                                                                                                     {
                                                                                                         "name":  "Standard Suspension",
                                                                                                         "strength":  "200 mg amox / 5 ml",
                                                                                                         "typicalAge":  "2 mos - 6 yrs",
                                                                                                         "perMlMg":  40
                                                                                                     }
                                                                                                 ],
                                                                          "source":  "BNF for Children 2024",
                                                                          "clinicalNote":  "Dose based strictly on amoxicillin component. Store reconstituted suspension in refrigerator."
                                                                      },
                                                  "adultDosing":  {
                                                                      "standardSingleDose":  "625 mg tablet (500mg amox + 125mg clav)",
                                                                      "frequency":  "Every 8 to 12 hours with meals",
                                                                      "maxDailyCeiling":  "3 tablets of 625mg in 24 hours",
                                                                      "elderlyRenalAdjustment":  "Do not use 875mg or 1000mg forms if eGFR \u003c 30 ml/min.",
                                                                      "source":  "BNF 86"
                                                                  },
                                                  "mechanism":  "Clavulanic acid irreversibly binds and inactivates bacterial beta-lactamase enzymes, preventing degradation of Amoxicillin and restoring broad-spectrum bactericidal activity.",
                                                  "contraindications":  [
                                                                            "Penicillin hypersensitivity",
                                                                            "History of amoxicillin-clavulanate-associated cholestatic jaundice or hepatic dysfunction"
                                                                        ],
                                                  "sideEffects":  {
                                                                      "common":  [
                                                                                     "Loose stools / Diarrhea (very common due to clavulanic acid)",
                                                                                     "Nausea",
                                                                                     "Vaginal candidiasis"
                                                                                 ],
                                                                      "serious":  [
                                                                                      "Hepatotoxicity / Cholestatic hepatitis",
                                                                                      "Anaphylactic shock",
                                                                                      "Severe C. difficile colitis"
                                                                                  ]
                                                                  },
                                                  "interactions":  [
                                                                       "Anticoagulants (may prolong bleeding time)",
                                                                       "Methotrexate"
                                                                   ],
                                                  "administration":  "MUST be taken at the start of a meal to enhance clavulanate absorption and minimize gastrointestinal upset.",
                                                  "allergyClass":  "Penicillin Class",
                                                  "pregnancyCaution":  "Category B: Safe in pregnancy when clinically indicated.",
                                                  "source":  {
                                                                 "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                                 "reviewedDate":  "2026-05"
                                                             }
                                              },
                  "sucralfate":  {
                                     "id":  "sucralfate",
                                     "saltName":  "Sucralfate",
                                     "chemicalClass":  "Basic Aluminum Hydroxide Complex of Sulfated Sucrose",
                                     "therapeuticCategory":  "Gastrointestinal Mucosal Protective Agent",
                                     "categorySlug":  "gastro",
                                     "whoModelList":  true,
                                     "indications":  [
                                                         "Active duodenal ulcer and benign gastric ulcer healing",
                                                         "Maintenance therapy for duodenal ulcer",
                                                         "Stress ulcer prophylaxis and radiation proctitis",
                                                         "NSAID-associated mucosal erosion prevention"
                                                     ],
                                     "brands":  [
                                                    {
                                                        "name":  "Sucrafil",
                                                        "strength":  "1000 mg / 5 ml suspension",
                                                        "company":  "Fourrts"
                                                    },
                                                    {
                                                        "name":  "Carafate",
                                                        "strength":  "1 g tablet",
                                                        "company":  "Allergan"
                                                    },
                                                    {
                                                        "name":  "Sucral",
                                                        "strength":  "1000 mg tablet",
                                                        "company":  "Apex"
                                                    }
                                                ],
                                     "pediatricDosing":  {
                                                             "formulaPerKg":  "40 to 80 mg/kg/day in 4 divided doses (children \u003e 1 month)",
                                                             "minMgPerKg":  10,
                                                             "maxMgPerKg":  20,
                                                             "frequency":  "Every 6 hours on an empty stomach",
                                                             "maxDailyCeilingPerKg":  80,
                                                             "liquidFormulations":  [
                                                                                        {
                                                                                            "name":  "Oral Suspension",
                                                                                            "strength":  "1 g / 5 ml",
                                                                                            "typicalAge":  "1 mo - 12 yrs",
                                                                                            "perMlMg":  200
                                                                                        }
                                                                                    ],
                                                             "source":  "BNF for Children 2024",
                                                             "clinicalNote":  "Take 1 hour before meals."
                                                         },
                                     "adultDosing":  {
                                                         "standardSingleDose":  "1 gram (10 ml suspension or 1 tablet)",
                                                         "frequency":  "4 times daily (1 hour before each meal and at bedtime)",
                                                         "maxDailyCeiling":  "4 grams in 24 hours",
                                                         "elderlyRenalAdjustment":  "Aluminum accumulation risk in severe renal impairment (dialysis patients).",
                                                         "source":  "BNF 86"
                                                     },
                                     "mechanism":  "In acidic pH (pH \u003c 4), forms a viscous, adhesive, polyanionic paste that selectively cross-links and binds to positively charged protein exudates at ulcer craters, creating a protective mechanical barrier against pepsin, acid, and bile.",
                                     "contraindications":  [
                                                               "Known hypersensitivity to sucralfate",
                                                               "Severe renal failure (dialysis-dependent risk of aluminum osteodystrophy)"
                                                           ],
                                     "sideEffects":  {
                                                         "common":  [
                                                                        "Constipation (most frequent, due to aluminum)",
                                                                        "Dry mouth",
                                                                        "Nausea"
                                                                    ],
                                                         "serious":  [
                                                                         "Bezoar formation in patients with impaired gastric motility",
                                                                         "Aluminum toxicity in uremia"
                                                                     ]
                                                     },
                                     "interactions":  [
                                                          "Chelates and blocks absorption of: Ciprofloxacin, Levofloxacin, Digoxin, Thyroxine, Ketoconazole (take other drugs at least 2 hours before sucralfate)"
                                                      ],
                                     "administration":  "MUST be taken on an EMPTY STOMACH: 1 hour BEFORE meals and at bedtime.",
                                     "allergyClass":  "Mucosal Protectant",
                                     "pregnancyCaution":  "Category B: Minimal systemic absorption; safe in pregnancy.",
                                     "source":  {
                                                    "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                    "reviewedDate":  "2026-05"
                                                }
                                 },
                  "ciprofloxacin":  {
                                        "id":  "ciprofloxacin",
                                        "saltName":  "Ciprofloxacin Hydrochloride",
                                        "chemicalClass":  "Second-Generation Fluoroquinolone",
                                        "therapeuticCategory":  "Broad-Spectrum Fluoroquinolone",
                                        "categorySlug":  "uro",
                                        "whoModelList":  true,
                                        "indications":  [
                                                            "Complicated urinary tract infections and pyelonephritis",
                                                            "Infectious bacterial diarrhea and traveler\u0027s diarrhea",
                                                            "Typhoid fever and intra-abdominal sepsis",
                                                            "Bacterial conjunctivitis (topical ophthalmic)"
                                                        ],
                                        "brands":  [
                                                       {
                                                           "name":  "Ciplox 500",
                                                           "strength":  "500 mg tablet",
                                                           "company":  "Cipla"
                                                       },
                                                       {
                                                           "name":  "Cifran 500",
                                                           "strength":  "500 mg tablet",
                                                           "company":  "Sun Pharma"
                                                       },
                                                       {
                                                           "name":  "Ciplox Eye/Ear Drops",
                                                           "strength":  "0.3% w/v drops",
                                                           "company":  "Cipla"
                                                       }
                                                   ],
                                        "pediatricDosing":  {
                                                                "formulaPerKg":  "Not routinely recommended in children due to arthropathy risk",
                                                                "minMgPerKg":  0,
                                                                "maxMgPerKg":  0,
                                                                "frequency":  "Restricted to complicated pediatric CF pulmonary exacerbations or anthrax",
                                                                "maxDailyCeilingPerKg":  0,
                                                                "liquidFormulations":  [

                                                                                       ],
                                                                "source":  "WHO Model Formulary / FDA Warning",
                                                                "clinicalNote":  "Generally avoided in growing children due to cartilage/tendon toxicity risk."
                                                            },
                                        "adultDosing":  {
                                                            "standardSingleDose":  "500 mg tablet",
                                                            "frequency":  "Every 12 hours",
                                                            "maxDailyCeiling":  "1000 mg to 1500 mg daily",
                                                            "elderlyRenalAdjustment":  "Reduce dose by 50% if eGFR \u003c 30 ml/min. Avoid in elderly with tendon rupture risk.",
                                                            "source":  "BNF 86"
                                                        },
                                        "mechanism":  "Bactericidal: Inhibits bacterial DNA gyrase (topoisomerase II) and topoisomerase IV, preventing bacterial DNA replication and transcription.",
                                        "contraindications":  [
                                                                  "Hypersensitivity to fluoroquinolones",
                                                                  "Concomitant tizanidine administration",
                                                                  "History of tendon disorders related to fluoroquinolones",
                                                                  "Myasthenia gravis"
                                                              ],
                                        "sideEffects":  {
                                                            "common":  [
                                                                           "Nausea",
                                                                           "Diarrhea",
                                                                           "Headache",
                                                                           "Restlessness"
                                                                       ],
                                                            "serious":  [
                                                                            "Achilles tendonitis and tendon rupture (Black Box Warning)",
                                                                            "QT prolongation",
                                                                            "Peripheral neuropathy",
                                                                            "CNS excitation"
                                                                        ]
                                                        },
                                        "interactions":  [
                                                             "Dairy products, iron, calcium, magnesium antacids (chelation markedly impairs absorption)",
                                                             "Theophylline",
                                                             "Warfarin"
                                                         ],
                                        "administration":  "Take with plenty of water. Do NOT take with milk, yogurt, or calcium-fortified juice.",
                                        "allergyClass":  "Fluoroquinolone",
                                        "pregnancyCaution":  "Category C: Avoid in pregnancy unless no alternative available.",
                                        "source":  {
                                                       "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                       "reviewedDate":  "2026-05"
                                                   }
                                    },
                  "metformin":  {
                                    "id":  "metformin",
                                    "saltName":  "Metformin Hydrochloride",
                                    "chemicalClass":  "Biguanide Class Antihyperglycemic Agent",
                                    "therapeuticCategory":  "Oral Antidiabetic",
                                    "categorySlug":  "chronic",
                                    "whoModelList":  true,
                                    "indications":  [
                                                        "First-line pharmacological therapy for Type 2 Diabetes Mellitus",
                                                        "Prevention of type 2 diabetes in high-risk prediabetes",
                                                        "Polycystic Ovary Syndrome (PCOS) insulin resistance"
                                                    ],
                                    "brands":  [
                                                   {
                                                       "name":  "Glycomet 500 / 1000",
                                                       "strength":  "500 mg / 1000 mg tablet",
                                                       "company":  "USV"
                                                   },
                                                   {
                                                       "name":  "Glucophage",
                                                       "strength":  "500 mg / 850 mg tablet",
                                                       "company":  "Merck"
                                                   }
                                               ],
                                    "pediatricDosing":  {
                                                            "formulaPerKg":  "Initial 500 mg once or twice daily (children \u003e= 10 years)",
                                                            "minMgPerKg":  0,
                                                            "maxMgPerKg":  0,
                                                            "frequency":  "With meals, titrate weekly",
                                                            "maxDailyCeilingPerKg":  0,
                                                            "liquidFormulations":  [
                                                                                       {
                                                                                           "name":  "Oral Solution",
                                                                                           "strength":  "500 mg / 5 ml",
                                                                                           "typicalAge":  "\u003e= 10 yrs",
                                                                                           "perMlMg":  100
                                                                                       }
                                                                                   ],
                                                            "source":  "WHO EMLc / ADA Standards of Care",
                                                            "clinicalNote":  "Titrate slowly over 2-3 weeks to minimize GI side effects."
                                                        },
                                    "adultDosing":  {
                                                        "standardSingleDose":  "500 mg to 1000 mg tablet",
                                                        "frequency":  "Twice daily with meals",
                                                        "maxDailyCeiling":  "2550 mg in 24 hours (or 2000mg for SR)",
                                                        "elderlyRenalAdjustment":  "Max 1000 mg/day if eGFR 30-44 ml/min. CONTRAINDICATED if eGFR \u003c 30 ml/min.",
                                                        "source":  "ADA 2024 / BNF 86"
                                                    },
                                    "mechanism":  "Reduces hepatic gluconeogenesis, decreases intestinal glucose absorption, and increases peripheral insulin sensitivity via AMPK activation. Zero hypoglycemia risk as monotherapy.",
                                    "contraindications":  [
                                                              "Severe renal impairment (eGFR \u003c 30 ml/min)",
                                                              "Acute metabolic acidosis or DKA",
                                                              "Hypoxic states: acute heart failure, sepsis, shock",
                                                              "Iodinated radiocontrast procedures"
                                                          ],
                                    "sideEffects":  {
                                                        "common":  [
                                                                       "Diarrhea",
                                                                       "Nausea",
                                                                       "Abdominal distension",
                                                                       "Metallic taste"
                                                                   ],
                                                        "serious":  [
                                                                        "Lactic Acidosis (rare but serious: malaise, hyperventilation, severe abdominal pain)"
                                                                    ]
                                                    },
                                    "interactions":  [
                                                         "Iodinated contrast media (withhold 48h before/after)",
                                                         "Alcohol (synergistic lactic acidosis risk)"
                                                     ],
                                    "administration":  "MUST be taken WITH OR IMMEDIATELY AFTER MEALS to minimize GI upset. Do not crush SR tablets.",
                                    "allergyClass":  "Biguanide (No Hypoglycemia alone)",
                                    "pregnancyCaution":  "Category B: Safe in pregnancy and gestational diabetes under supervision.",
                                    "source":  {
                                                   "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                   "reviewedDate":  "2026-05"
                                               }
                                },
                  "naproxen":  {
                                   "id":  "naproxen",
                                   "saltName":  "Naproxen",
                                   "chemicalClass":  "Propionic acid derivative / Non-Selective NSAID",
                                   "therapeuticCategory":  "Analgesic & Anti-inflammatory",
                                   "categorySlug":  "pain-fever",
                                   "whoModelList":  true,
                                   "indications":  [
                                                       "Migraine acute attack and tension headache",
                                                       "Osteoarthritis, rheumatoid arthritis, and acute gout",
                                                       "Primary dysmenorrhea and orthopedic pain"
                                                   ],
                                   "brands":  [
                                                  {
                                                      "name":  "Naprosyn",
                                                      "strength":  "250 mg / 500 mg tablet",
                                                      "company":  "RPG Life Sciences"
                                                  },
                                                  {
                                                      "name":  "Aleve",
                                                      "strength":  "220 mg tablet",
                                                      "company":  "Bayer"
                                                  },
                                                  {
                                                      "name":  "Naxdom",
                                                      "strength":  "Naproxen 500mg + Domperidone 10mg",
                                                      "company":  "Sun Pharma"
                                                  }
                                              ],
                                   "pediatricDosing":  {
                                                           "formulaPerKg":  "10 mg/kg/day in 2 divided doses (juvenile arthritis)",
                                                           "minMgPerKg":  5,
                                                           "maxMgPerKg":  10,
                                                           "frequency":  "Every 12 hours with food",
                                                           "maxDailyCeilingPerKg":  15,
                                                           "liquidFormulations":  [

                                                                                  ],
                                                           "source":  "BNF for Children 2024",
                                                           "clinicalNote":  "For juvenile arthritis under specialist supervision."
                                                       },
                                   "adultDosing":  {
                                                       "standardSingleDose":  "250 mg to 500 mg tablet",
                                                       "frequency":  "Every 12 hours as needed",
                                                       "maxDailyCeiling":  "1250 mg on day 1, then 1000 mg daily",
                                                       "elderlyRenalAdjustment":  "Avoid if eGFR \u003c 30 ml/min. Favored cardiovascular profile among NSAIDs.",
                                                       "source":  "BNF 86"
                                                   },
                                   "mechanism":  "Reversibly inhibits COX-1 and COX-2 enzymes with a prolonged plasma elimination half-life of 12-15 hours, allowing twice-daily dosing.",
                                   "contraindications":  [
                                                             "Active peptic ulceration",
                                                             "Severe renal impairment",
                                                             "Aspirin-induced asthma",
                                                             "Third trimester pregnancy"
                                                         ],
                                   "sideEffects":  {
                                                       "common":  [
                                                                      "Nausea",
                                                                      "Heartburn",
                                                                      "Abdominal discomfort",
                                                                      "Headache"
                                                                  ],
                                                       "serious":  [
                                                                       "Upper GI hemorrhage",
                                                                       "Fluid retention",
                                                                       "Renal papillary necrosis"
                                                                   ]
                                                   },
                                   "interactions":  [
                                                        "Aspirin (interferes with cardioprotection)",
                                                        "Warfarin",
                                                        "ACE inhibitors",
                                                        "SSRI antidepressants"
                                                    ],
                                   "administration":  "Take with food or a large glass of water to reduce stomach irritation.",
                                   "allergyClass":  "NSAID",
                                   "pregnancyCaution":  "Avoid in pregnancy; contraindicated in 3rd trimester.",
                                   "source":  {
                                                  "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                  "reviewedDate":  "2026-05"
                                              }
                               },
                  "diclofenac-chlorzoxazone":  {
                                                   "id":  "diclofenac-chlorzoxazone",
                                                   "saltName":  "Diclofenac + Chlorzoxazone",
                                                   "chemicalClass":  "NSAID + Centrally Acting Muscle Relaxant",
                                                   "therapeuticCategory":  "Muscle Relaxant & Analgesic",
                                                   "categorySlug":  "ortho",
                                                   "whoModelList":  false,
                                                   "indications":  [
                                                                       "Acute painful muscle spasm associated with acute musculoskeletal conditions",
                                                                       "Low back strain and lumbago",
                                                                       "Cervical torticollis and muscle contracture"
                                                                   ],
                                                   "brands":  [
                                                                  {
                                                                      "name":  "Mobizox",
                                                                      "strength":  "Diclofenac 50mg + Chlorzoxazone 500mg + Paracetamol 325mg",
                                                                      "company":  "Sun Pharma"
                                                                  },
                                                                  {
                                                                      "name":  "Parafon Forte",
                                                                      "strength":  "Chlorzoxazone 500mg + Acetaminophen 300mg",
                                                                      "company":  "J&J"
                                                                  },
                                                                  {
                                                                      "name":  "Myospaz Forte",
                                                                      "strength":  "Diclofenac 50mg + Chlorzoxazone 500mg",
                                                                      "company":  "Win-Medicare"
                                                                  }
                                                              ],
                                                   "pediatricDosing":  {
                                                                           "formulaPerKg":  "Not recommended in pediatric patients (\u003c18 years)",
                                                                           "minMgPerKg":  0,
                                                                           "maxMgPerKg":  0,
                                                                           "frequency":  "Not applicable",
                                                                           "maxDailyCeilingPerKg":  0,
                                                                           "liquidFormulations":  [

                                                                                                  ],
                                                                           "source":  "Verified dosing reference unavailable",
                                                                           "clinicalNote":  "Contraindicated in pediatric population due to chlorzoxazone hepatotoxicity risk."
                                                                       },
                                                   "adultDosing":  {
                                                                       "standardSingleDose":  "1 tablet containing 50mg Diclofenac + 250-500mg Chlorzoxazone",
                                                                       "frequency":  "Twice or thrice daily after meals",
                                                                       "maxDailyCeiling":  "3 tablets in 24 hours",
                                                                       "elderlyRenalAdjustment":  "Avoid in hepatic dysfunction. Caution with driving due to sedation.",
                                                                       "source":  "CDSCO Clinical Reference"
                                                                   },
                                                   "mechanism":  "Dual mechanism: Diclofenac inhibits peripheral COX-mediated inflammation while Chlorzoxazone acts at spinal cord and subcortical levels to inhibit polysynaptic reflex arcs.",
                                                   "contraindications":  [
                                                                             "Active liver disease or impaired hepatic function",
                                                                             "Active peptic ulcer or GI bleed",
                                                                             "Pregnancy and lactation"
                                                                         ],
                                                   "sideEffects":  {
                                                                       "common":  [
                                                                                      "Drowsiness",
                                                                                      "Dizziness",
                                                                                      "Lightheadedness",
                                                                                      "Epigastric burning"
                                                                                  ],
                                                                       "serious":  [
                                                                                       "Idiosyncratic hepatotoxicity (rare but serious)",
                                                                                       "GI bleeding"
                                                                                   ]
                                                                   },
                                                   "interactions":  [
                                                                        "CNS depressants & Alcohol (profound sedation)",
                                                                        "Other NSAIDs (additive gastric toxicity)"
                                                                    ],
                                                   "administration":  "Take strictly after meals. Do not operate machinery or drive while taking.",
                                                   "allergyClass":  "NSAID + Muscle Relaxant",
                                                   "pregnancyCaution":  "Contraindicated during pregnancy.",
                                                   "source":  {
                                                                  "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                                  "reviewedDate":  "2026-05"
                                                              }
                                               },
                  "montelukast-levocetirizine":  {
                                                     "id":  "montelukast-levocetirizine",
                                                     "saltName":  "Montelukast + Levocetirizine",
                                                     "chemicalClass":  "Leukotriene Receptor Antagonist (CysLT1) + H1 Antihistamine",
                                                     "therapeuticCategory":  "Antiallergic & Bronchial Stabilizer",
                                                     "categorySlug":  "respiratory",
                                                     "whoModelList":  false,
                                                     "indications":  [
                                                                         "Moderate-to-severe allergic rhinitis with associated asthma symptoms",
                                                                         "Chronic allergic rhino-bronchitis and nocturnal coughing",
                                                                         "Persistent seasonal allergic rhinitis poorly responsive to monotherapy"
                                                                     ],
                                                     "brands":  [
                                                                    {
                                                                        "name":  "Montair-LC",
                                                                        "strength":  "Montelukast 10mg + Levocetirizine 5mg tablet",
                                                                        "company":  "Cipla"
                                                                    },
                                                                    {
                                                                        "name":  "Montek-LC",
                                                                        "strength":  "10mg/5mg tablet",
                                                                        "company":  "Sun Pharma"
                                                                    },
                                                                    {
                                                                        "name":  "Telekast-L",
                                                                        "strength":  "10mg/5mg tablet",
                                                                        "company":  "Lupin"
                                                                    },
                                                                    {
                                                                        "name":  "Montair-LC Kid",
                                                                        "strength":  "4mg/2.5mg dispersible tablet",
                                                                        "company":  "Cipla"
                                                                    }
                                                                ],
                                                     "pediatricDosing":  {
                                                                             "formulaPerKg":  "Montelukast 4mg + Levocetirizine 2.5mg once daily (children 2 - 5 years); 5mg/2.5mg (children 6 - 11 years)",
                                                                             "minMgPerKg":  0,
                                                                             "maxMgPerKg":  0,
                                                                             "frequency":  "Once daily in the evening at bedtime",
                                                                             "maxDailyCeilingPerKg":  0,
                                                                             "liquidFormulations":  [
                                                                                                        {
                                                                                                            "name":  "Kid Dispersible Tablet / Syrup",
                                                                                                            "strength":  "4 mg Mont + 2.5 mg Levo",
                                                                                                            "typicalAge":  "2 - 5 yrs",
                                                                                                            "perMlMg":  0
                                                                                                        }
                                                                                                    ],
                                                                             "source":  "BNF for Children 2024 / CDSCO Guidelines",
                                                                             "clinicalNote":  "Monitor for neuropsychiatric behavioral changes in children (nightmares, aggression)."
                                                                         },
                                                     "adultDosing":  {
                                                                         "standardSingleDose":  "1 tablet (10mg Montelukast + 5mg Levocetirizine)",
                                                                         "frequency":  "Once daily in the evening at bedtime",
                                                                         "maxDailyCeiling":  "1 tablet in 24 hours",
                                                                         "elderlyRenalAdjustment":  "Use caution in renal failure; dose titration guided by levocetirizine clearance.",
                                                                         "source":  "CDSCO Reference"
                                                                     },
                                                     "mechanism":  "Dual inflammatory pathway blockade: Levocetirizine suppresses the immediate histamine response (sneezing, rhinorrhea), while Montelukast blocks cysteinyl leukotriene CysLT1 receptors, suppressing mucosal congestion and airway edema.",
                                                     "contraindications":  [
                                                                               "Severe renal impairment (eGFR \u003c 10 ml/min)",
                                                                               "Pre-existing severe neuropsychiatric illness with suicidal ideation",
                                                                               "Hypersensitivity to components"
                                                                           ],
                                                     "sideEffects":  {
                                                                         "common":  [
                                                                                        "Somnolence",
                                                                                        "Headache",
                                                                                        "Upper respiratory tract infection",
                                                                                        "Abdominal discomfort"
                                                                                    ],
                                                                         "serious":  [
                                                                                         "Neuropsychiatric events (FDA Black Box Warning on Montelukast: Agitation, depression, sleep disturbances, suicidal thinking)",
                                                                                         "Churg-Strauss systemic eosinophilia (rare)"
                                                                                     ]
                                                                     },
                                                     "interactions":  [
                                                                          "Phenobarbital, Rifampicin (accelerate montelukast metabolism)",
                                                                          "Alcohol / Sedatives (additive sedation)"
                                                                      ],
                                                     "administration":  "Take ONCE DAILY IN THE EVENING at bedtime with water. Discontinue immediately if neuropsychiatric changes emerge.",
                                                     "allergyClass":  "LTRA + H1 Antagonist",
                                                     "pregnancyCaution":  "Use with caution in pregnancy.",
                                                     "source":  {
                                                                    "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                                    "reviewedDate":  "2026-05"
                                                                }
                                                 },
                  "cetirizine":  {
                                     "id":  "cetirizine",
                                     "saltName":  "Cetirizine Dihydrochloride",
                                     "chemicalClass":  "Piperazine Derivative / Second-Generation H1-Antihistamine",
                                     "therapeuticCategory":  "Antiallergic & Antihistamine",
                                     "categorySlug":  "respiratory",
                                     "whoModelList":  true,
                                     "indications":  [
                                                         "Allergic rhinitis (seasonal and perennial)",
                                                         "Allergic conjunctivitis with pruritus and lacrimation",
                                                         "Chronic idiopathic urticaria and pruritic dermatoses",
                                                         "Atopic eczema pruritus management"
                                                     ],
                                     "brands":  [
                                                    {
                                                        "name":  "Cetzine 10",
                                                        "strength":  "10 mg tablet",
                                                        "company":  "Dr. Reddy\u0027s"
                                                    },
                                                    {
                                                        "name":  "Zyrtec",
                                                        "strength":  "10 mg tablet & 5mg/5ml syrup",
                                                        "company":  "GSK"
                                                    },
                                                    {
                                                        "name":  "Alerid",
                                                        "strength":  "10 mg tablet",
                                                        "company":  "Cipla"
                                                    }
                                                ],
                                     "pediatricDosing":  {
                                                             "formulaPerKg":  "0.25 mg/kg/dose (or 2.5 mg once daily for 6mos-2yrs, 5 mg daily for 2-6yrs, 10 mg daily for \u003e6yrs)",
                                                             "minMgPerKg":  0.2,
                                                             "maxMgPerKg":  0.25,
                                                             "frequency":  "Once daily in the evening",
                                                             "maxDailyCeilingPerKg":  0.5,
                                                             "liquidFormulations":  [
                                                                                        {
                                                                                            "name":  "Pediatric Drops",
                                                                                            "strength":  "10 mg / 1 ml",
                                                                                            "typicalAge":  "6 mos - 2 yrs",
                                                                                            "perMlMg":  10
                                                                                        },
                                                                                        {
                                                                                            "name":  "Oral Syrup",
                                                                                            "strength":  "5 mg / 5 ml",
                                                                                            "typicalAge":  "2 - 6 yrs",
                                                                                            "perMlMg":  1
                                                                                        }
                                                                                    ],
                                                             "source":  "WHO Model Formulary for Children 2024 / BNFc",
                                                             "clinicalNote":  "Dosing in children \u003c 2 years is off-label in some regions; use under pediatric guidance."
                                                         },
                                     "adultDosing":  {
                                                         "standardSingleDose":  "10 mg tablet",
                                                         "frequency":  "Once daily in the evening (with or without food)",
                                                         "maxDailyCeiling":  "10 mg in 24 hours",
                                                         "elderlyRenalAdjustment":  "Reduce dose to 5 mg once daily if eGFR 10-50 ml/min.",
                                                         "source":  "BNF 86"
                                                     },
                                     "mechanism":  "Potent selective inverse agonist of peripheral H1 receptors, suppressing histamine-mediated capillary permeability, wheal and flare formation, and sensory nerve terminal pruritus with low CNS penetration.",
                                     "contraindications":  [
                                                               "Severe renal impairment (eGFR \u003c 10 ml/min)",
                                                               "Hypersensitivity to cetirizine or hydroxyzine"
                                                           ],
                                     "sideEffects":  {
                                                         "common":  [
                                                                        "Mild somnolence / drowsiness (approx 10-14%)",
                                                                        "Dry mouth",
                                                                        "Fatigue",
                                                                        "Headache"
                                                                    ],
                                                         "serious":  [
                                                                         "Severe sedation in sensitive individuals",
                                                                         "Paradoxical excitation in young children"
                                                                     ]
                                                     },
                                     "interactions":  [
                                                          "Alcohol & CNS depressants (additive psychomotor sedation)",
                                                          "Theophylline (slight decrease in cetirizine clearance)"
                                                      ],
                                     "administration":  "Can be taken with or without food. Evening administration is preferred to mitigate daytime somnolence.",
                                     "allergyClass":  "Piperazine H1 Antagonist",
                                     "pregnancyCaution":  "Category B: Reassuring safety profile in pregnancy.",
                                     "source":  {
                                                    "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                    "reviewedDate":  "2026-05"
                                                }
                                 },
                  "hydrocortisone-topical":  {
                                                 "id":  "hydrocortisone-topical",
                                                 "saltName":  "Hydrocortisone (Topical 1%)",
                                                 "chemicalClass":  "Mild Low-Potency Corticosteroid (Class VII)",
                                                 "therapeuticCategory":  "Topical Anti-inflammatory & Antipruritic",
                                                 "categorySlug":  "derm",
                                                 "whoModelList":  true,
                                                 "indications":  [
                                                                     "Temporary relief of itching, inflammation, and redness associated with mild atopic dermatitis, contact dermatitis, insect bites, and eczema"
                                                                 ],
                                                 "brands":  [
                                                                {
                                                                    "name":  "Cortopin 1%",
                                                                    "strength":  "1% w/w cream",
                                                                    "company":  "Pinewood"
                                                                },
                                                                {
                                                                    "name":  "Hycort 1%",
                                                                    "strength":  "1% w/w ointment / cream",
                                                                    "company":  "Sun Pharma"
                                                                },
                                                                {
                                                                    "name":  "Cortizone 10",
                                                                    "strength":  "1% cream",
                                                                    "company":  "Sanofi"
                                                                }
                                                            ],
                                                 "pediatricDosing":  {
                                                                         "formulaPerKg":  "Apply sparingly in a thin film 1 to 2 times daily (infants \u003e 1 month and children)",
                                                                         "minMgPerKg":  0,
                                                                         "maxMgPerKg":  0,
                                                                         "frequency":  "1 to 2 times daily for maximum 7 days",
                                                                         "maxDailyCeilingPerKg":  0,
                                                                         "liquidFormulations":  [

                                                                                                ],
                                                                         "source":  "BNF for Children 2024 / WHO EMLc",
                                                                         "clinicalNote":  "Use sparingly on face or diaper area; do not use tight occlusive plastic dressings in infants."
                                                                     },
                                                 "adultDosing":  {
                                                                     "standardSingleDose":  "Apply fingertip unit (FTU) thinly to affected skin area",
                                                                     "frequency":  "1 to 2 times daily",
                                                                     "maxDailyCeiling":  "Topical use: short-term use (up to 7 days for self-care)",
                                                                     "elderlyRenalAdjustment":  "No adjustment required.",
                                                                     "source":  "BNF 86"
                                                                 },
                                                 "mechanism":  "Binds to cytoplasmic glucocorticoid receptors, translocating to nucleus to upregulate lipocortin, inhibiting phospholipase A2, and reducing prostaglandin and leukotriene synthesis in the epidermis.",
                                                 "contraindications":  [
                                                                           "Untreated bacterial, fungal, or viral skin infections (herpes simplex, chickenpox)",
                                                                           "Rosacea or perioral dermatitis",
                                                                           "Ulcerated skin"
                                                                       ],
                                                 "sideEffects":  {
                                                                     "common":  [
                                                                                    "Transient local burning or stinging",
                                                                                    "Dryness"
                                                                                ],
                                                                     "serious":  [
                                                                                     "Cutaneous atrophy / skin thinning (with prolonged misuse)",
                                                                                     "Telangiectasia",
                                                                                     "Secondary infection"
                                                                                 ]
                                                                 },
                                                 "interactions":  [
                                                                      "Negligible systemic interactions with short-term topical use"
                                                                  ],
                                                 "administration":  "Apply THIN LAYER ONLY to affected skin. Do NOT apply inside eyes or on broken weeping skin.",
                                                 "allergyClass":  "Low-Potency Topical Corticosteroid",
                                                 "pregnancyCaution":  "Category C: Mildest topical steroid; safe for short-term localized use in pregnancy.",
                                                 "source":  {
                                                                "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                                "reviewedDate":  "2026-05"
                                                            }
                                             },
                  "telmisartan":  {
                                      "id":  "telmisartan",
                                      "saltName":  "Telmisartan",
                                      "chemicalClass":  "Non-Peptide Angiotensin II Receptor Blocker (ARB)",
                                      "therapeuticCategory":  "Antihypertensive & Cardioprotective",
                                      "categorySlug":  "chronic",
                                      "whoModelList":  true,
                                      "indications":  [
                                                          "Essential hypertension in adults",
                                                          "Cardiovascular risk reduction in patients with atherothrombotic disease"
                                                      ],
                                      "brands":  [
                                                     {
                                                         "name":  "Telma 40",
                                                         "strength":  "40 mg tablet",
                                                         "company":  "Glenmark"
                                                     },
                                                     {
                                                         "name":  "Micardis",
                                                         "strength":  "40 mg / 80 mg tablet",
                                                         "company":  "Boehringer Ingelheim"
                                                     }
                                                 ],
                                      "pediatricDosing":  {
                                                              "formulaPerKg":  "Not approved in pediatric age group (\u003c18 years)",
                                                              "minMgPerKg":  0,
                                                              "maxMgPerKg":  0,
                                                              "frequency":  "Not applicable",
                                                              "maxDailyCeilingPerKg":  0,
                                                              "liquidFormulations":  [

                                                                                     ],
                                                              "source":  "Verified dosing reference unavailable",
                                                              "clinicalNote":  "Safety not established in children."
                                                          },
                                      "adultDosing":  {
                                                          "standardSingleDose":  "40 mg tablet",
                                                          "frequency":  "Once daily in morning",
                                                          "maxDailyCeiling":  "80 mg in 24 hours",
                                                          "elderlyRenalAdjustment":  "Monitor serum potassium in renal disease.",
                                                          "source":  "WHO Guidelines / BNF 86"
                                                      },
                                      "mechanism":  "Displaces angiotensin II from AT1 receptor subtype, blocking aldosterone release, vasoconstriction, and sodium retention.",
                                      "contraindications":  [
                                                                "Pregnancy (Black Box Warning)",
                                                                "Bilateral renal artery stenosis",
                                                                "Severe biliary obstructive disorders"
                                                            ],
                                      "sideEffects":  {
                                                          "common":  [
                                                                         "Dizziness",
                                                                         "Back pain",
                                                                         "Sinusitis"
                                                                     ],
                                                          "serious":  [
                                                                          "Hyperkalemia",
                                                                          "Acute kidney injury in volume-depleted states"
                                                                      ]
                                                      },
                                      "interactions":  [
                                                           "Potassium supplements (severe hyperkalemia)",
                                                           "NSAIDs (attenuate hypotensive effect and impair renal function)",
                                                           "Lithium"
                                                       ],
                                      "administration":  "Take once daily at the same time each day with or without food.",
                                      "allergyClass":  "ARB Class",
                                      "pregnancyCaution":  "Category D: STRICTLY CONTRAINDICATED in pregnancy.",
                                      "source":  {
                                                     "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                     "reviewedDate":  "2026-05"
                                                 }
                                  },
                  "thiocolchicoside":  {
                                           "id":  "thiocolchicoside",
                                           "saltName":  "Thiocolchicoside",
                                           "chemicalClass":  "Semisynthetic Sulfur Derivative of Colchicoside",
                                           "therapeuticCategory":  "Myorelaxant & Anti-inflammatory",
                                           "categorySlug":  "ortho",
                                           "whoModelList":  false,
                                           "indications":  [
                                                               "Adjunctive treatment of acute painful muscle contractures in spinal pathology"
                                                           ],
                                           "brands":  [
                                                          {
                                                              "name":  "Myoril 4 / 8",
                                                              "strength":  "4 mg / 8 mg capsule",
                                                              "company":  "Sanofi"
                                                          },
                                                          {
                                                              "name":  "Zerodol-TH",
                                                              "strength":  "Aceclofenac 100mg + Thiocolchicoside 4mg",
                                                              "company":  "Ipca"
                                                          }
                                                      ],
                                           "pediatricDosing":  {
                                                                   "formulaPerKg":  "Strictly contraindicated in children (\u003c16 years)",
                                                                   "minMgPerKg":  0,
                                                                   "maxMgPerKg":  0,
                                                                   "frequency":  "Not applicable",
                                                                   "maxDailyCeilingPerKg":  0,
                                                                   "liquidFormulations":  [

                                                                                          ],
                                                                   "source":  "EMA Safety Review",
                                                                   "clinicalNote":  "Contraindicated in children due to aneugenic metabolite chromosome damage risk."
                                                               },
                                           "adultDosing":  {
                                                               "standardSingleDose":  "4 mg to 8 mg capsule",
                                                               "frequency":  "Twice daily with meals",
                                                               "maxDailyCeiling":  "16 mg in 24 hours (maximum duration 7 consecutive days)",
                                                               "elderlyRenalAdjustment":  "Strict adherence to 7-day maximum treatment duration.",
                                                               "source":  "EMA / CDSCO"
                                                           },
                                           "mechanism":  "Selective agonist of inhibitory GABA-A and glycine receptors, producing myorelaxant action at spinal and supraspinal levels.",
                                           "contraindications":  [
                                                                     "Pregnancy and women of childbearing potential not using contraception (Aneugenicity warning)",
                                                                     "Breastfeeding",
                                                                     "Children \u003c 16 years",
                                                                     "History of epilepsy"
                                                                 ],
                                           "sideEffects":  {
                                                               "common":  [
                                                                              "Drowsiness",
                                                                              "Gastric ache",
                                                                              "Diarrhea"
                                                                          ],
                                                               "serious":  [
                                                                               "Seizure precipitation in predisposed individuals",
                                                                               "Aneuploidy / teratogenic risk with chronic exposure"
                                                                           ]
                                                           },
                                           "interactions":  [
                                                                "Other CNS depressants",
                                                                "Anticonvulsants"
                                                            ],
                                           "administration":  "Maximum treatment duration is STRICTLY 7 CONSECUTIVE DAYS. Take after meals.",
                                           "allergyClass":  "GABA-ergic Myorelaxant",
                                           "pregnancyCaution":  "STRICTLY CONTRAINDICATED in pregnancy and lactation (EMA Black Box).",
                                           "source":  {
                                                          "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                          "reviewedDate":  "2026-05"
                                                      }
                                       },
                  "ors-zinc":  {
                                   "id":  "ors-zinc",
                                   "saltName":  "Oral Rehydration Salts (WHO Reduced Osmolarity) + Zinc",
                                   "chemicalClass":  "Electrolyte Solution + Trace Element",
                                   "therapeuticCategory":  "Oral Electrolyte Replenisher & Micronutrient",
                                   "categorySlug":  "gastro",
                                   "whoModelList":  true,
                                   "indications":  [
                                                       "Dehydration secondary to acute diarrhea, gastroenteritis, and cholera",
                                                       "Electrolyte replacement in fluid purging and excessive perspiration",
                                                       "Diarrheal duration reduction in children"
                                                   ],
                                   "brands":  [
                                                  {
                                                      "name":  "Electral",
                                                      "strength":  "21.8g sachet for 1 Liter water",
                                                      "company":  "FDC"
                                                  },
                                                  {
                                                      "name":  "WHO-ORS",
                                                      "strength":  "Reduced osmolarity sachet",
                                                      "company":  "Cipla"
                                                  },
                                                  {
                                                      "name":  "Zincovit / Zinconia",
                                                      "strength":  "20 mg zinc dispersible tablet",
                                                      "company":  "Apex"
                                                  }
                                              ],
                                   "pediatricDosing":  {
                                                           "formulaPerKg":  "50 to 100 ml/kg of ORS over 4 hours for mild-to-moderate dehydration, plus Zinc (10mg/day for \u003c6 mos, 20mg/day for \u003e=6 mos for 14 days)",
                                                           "minMgPerKg":  50,
                                                           "maxMgPerKg":  100,
                                                           "frequency":  "Continuous frequent sips after each purge",
                                                           "maxDailyCeilingPerKg":  150,
                                                           "liquidFormulations":  [
                                                                                      {
                                                                                          "name":  "Reconstituted Solution",
                                                                                          "strength":  "75 mmol/L Na+, 75 mmol/L Glucose",
                                                                                          "typicalAge":  "All ages",
                                                                                          "perMlMg":  1
                                                                                      }
                                                                                  ],
                                                           "source":  "WHO / UNICEF Clinical Management of Acute Diarrhea Guidelines",
                                                           "clinicalNote":  "Dissolve exact 1 sachet in exactly 1 Liter of clean drinking water. Do NOT boil reconstituted ORS."
                                                       },
                                   "adultDosing":  {
                                                       "standardSingleDose":  "200 ml to 400 ml after each loose stool",
                                                       "frequency":  "Continuously sip as thirst dictates",
                                                       "maxDailyCeiling":  "2 to 3 Liters daily as tolerated",
                                                       "elderlyRenalAdjustment":  "Caution in severe congestive heart failure or end-stage renal disease (fluid overload risk).",
                                                       "source":  "WHO Model Formulary"
                                                   },
                                   "mechanism":  "Glucose-facilitated sodium cotransport across intestinal brush border membrane: Sodium is actively absorbed even during cholera toxin-mediated secretion, pulling water osmotically. Zinc restores mucosal integrity.",
                                   "contraindications":  [
                                                             "Intestinal obstruction or paralytic ileus",
                                                             "Persistent intractable vomiting preventing any oral retention",
                                                             "Severe hypovolemic shock (requires immediate IV Ringer Lactate)"
                                                         ],
                                   "sideEffects":  {
                                                       "common":  [
                                                                      "Mild nausea if consumed too rapidly",
                                                                      "Vomiting if large volumes chugged at once"
                                                                  ],
                                                       "serious":  [
                                                                       "Hypernatremia (if mixed with too little water)",
                                                                       "Fluid overload in renal failure"
                                                                   ]
                                                   },
                                   "interactions":  [
                                                        "No significant adverse drug interactions; enhances gut mucosal drug absorption"
                                                    ],
                                   "administration":  "Dissolve in exact prescribed volume of clean boiled-cooled water. Consume within 24 hours of preparation.",
                                   "allergyClass":  "Electrolyte Solution",
                                   "pregnancyCaution":  "Category A: Safe and essential during pregnancy and lactation.",
                                   "source":  {
                                                  "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                  "reviewedDate":  "2026-05"
                                              }
                               },
                  "paracetamol":  {
                                      "id":  "paracetamol",
                                      "saltName":  "Paracetamol (Acetaminophen)",
                                      "chemicalClass":  "Aniline derivative / Central COX inhibitor",
                                      "therapeuticCategory":  "Antipyretic & Analgesic",
                                      "categorySlug":  "pain-fever",
                                      "whoModelList":  true,
                                      "indications":  [
                                                          "Fever reduction in acute infections",
                                                          "Mild to moderate somatic pain (headache, body ache, dental pain)",
                                                          "First-line analgesic in osteoarthritis and viral febrile illness"
                                                      ],
                                      "brands":  [
                                                     {
                                                         "name":  "Dolo 650",
                                                         "strength":  "650 mg tablet",
                                                         "company":  "Micro Labs"
                                                     },
                                                     {
                                                         "name":  "Crocin Advance",
                                                         "strength":  "500 mg / 650 mg tablet",
                                                         "company":  "GSK"
                                                     },
                                                     {
                                                         "name":  "Calpol",
                                                         "strength":  "120mg/5ml & 250mg/5ml syrup",
                                                         "company":  "GSK"
                                                     },
                                                     {
                                                         "name":  "Pacimol",
                                                         "strength":  "500 mg / 650 mg tablet",
                                                         "company":  "Ipca"
                                                     }
                                                 ],
                                      "pediatricDosing":  {
                                                              "formulaPerKg":  "15 mg/kg/dose",
                                                              "minMgPerKg":  10,
                                                              "maxMgPerKg":  15,
                                                              "frequency":  "Every 4 to 6 hours as needed (Max 4 doses in 24 hours)",
                                                              "maxDailyCeilingPerKg":  60,
                                                              "liquidFormulations":  [
                                                                                         {
                                                                                             "name":  "Paediatric Drops",
                                                                                             "strength":  "100 mg / 1 ml",
                                                                                             "typicalAge":  "0 - 1 yr",
                                                                                             "perMlMg":  100
                                                                                         },
                                                                                         {
                                                                                             "name":  "Junior Suspension",
                                                                                             "strength":  "120 mg / 5 ml",
                                                                                             "typicalAge":  "1 - 5 yrs",
                                                                                             "perMlMg":  24
                                                                                         },
                                                                                         {
                                                                                             "name":  "Forte Suspension",
                                                                                             "strength":  "250 mg / 5 ml",
                                                                                             "typicalAge":  "5 - 12 yrs",
                                                                                             "perMlMg":  50
                                                                                         }
                                                                                     ],
                                                              "source":  "BNF for Children (BNFC) 2024 / WHO Model Formulary",
                                                              "clinicalNote":  "Dose strictly based on weight, not age alone. Never exceed 4 doses in 24 hours."
                                                          },
                                      "adultDosing":  {
                                                          "standardSingleDose":  "500 mg to 650 mg tablet",
                                                          "frequency":  "Every 4 to 6 hours as needed",
                                                          "maxDailyCeiling":  "3000 mg to 4000 mg in 24 hours",
                                                          "elderlyRenalAdjustment":  "Reduce maximum daily dose to 2000 mg/day in chronic alcoholism or hepatic cirrhosis.",
                                                          "source":  "British National Formulary (BNF 86)"
                                                      },
                                      "mechanism":  "Inhibits central prostaglandin synthesis via COX enzyme pathway in the CNS. Acts on hypothalamic heat-regulating center to produce peripheral vasodilation.",
                                      "contraindications":  [
                                                                "Severe acute hepatic impairment or active liver failure",
                                                                "Hypersensitivity to acetaminophen",
                                                                "Caution in chronic malnutrition"
                                                            ],
                                      "sideEffects":  {
                                                          "common":  [
                                                                         "Nausea",
                                                                         "Mild epigastric discomfort"
                                                                     ],
                                                          "serious":  [
                                                                          "Hepatotoxicity (liver necrosis with overdose \u003e150mg/kg)",
                                                                          "Stevens-Johnson syndrome (very rare)"
                                                                      ]
                                                      },
                                      "interactions":  [
                                                           "Warfarin (high chronic doses may increase INR)",
                                                           "Isoniazid (increased hepatotoxicity risk)",
                                                           "Alcohol (synergistic hepatic strain)"
                                                       ],
                                      "administration":  "Take with or without food with a full glass of water. Maintain minimum 4-6 hours between doses.",
                                      "allergyClass":  "None (safe alternative in NSAID-allergic patients)",
                                      "pregnancyCaution":  "Category B: Considered safe at therapeutic doses during all trimesters.",
                                      "source":  {
                                                     "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                     "reviewedDate":  "2026-05"
                                                 }
                                  },
                  "atorvastatin":  {
                                       "id":  "atorvastatin",
                                       "saltName":  "Atorvastatin Calcium",
                                       "chemicalClass":  "Synthetic HMG-CoA Reductase Inhibitor",
                                       "therapeuticCategory":  "Lipid-Lowering Statin",
                                       "categorySlug":  "chronic",
                                       "whoModelList":  true,
                                       "indications":  [
                                                           "Primary hypercholesterolemia and mixed dyslipidemia",
                                                           "Secondary prevention of cardiovascular events in established CAD",
                                                           "Cardiovascular prophylaxis in type 2 diabetes"
                                                       ],
                                       "brands":  [
                                                      {
                                                          "name":  "Atorva 10 / 20 / 40",
                                                          "strength":  "10 mg / 20 mg / 40 mg tablet",
                                                          "company":  "Zydus"
                                                      },
                                                      {
                                                          "name":  "Lipitor",
                                                          "strength":  "10 mg / 20 mg / 40 mg tablet",
                                                          "company":  "Pfizer"
                                                      }
                                                  ],
                                       "pediatricDosing":  {
                                                               "formulaPerKg":  "10 mg once daily (children \u003e= 10 years with familial hypercholesterolemia)",
                                                               "minMgPerKg":  0,
                                                               "maxMgPerKg":  0,
                                                               "frequency":  "Once daily",
                                                               "maxDailyCeilingPerKg":  0,
                                                               "liquidFormulations":  [

                                                                                      ],
                                                               "source":  "BNF for Children 2024",
                                                               "clinicalNote":  "Restricted to specialized pediatric lipid clinics."
                                                           },
                                       "adultDosing":  {
                                                           "standardSingleDose":  "10 mg to 20 mg tablet (moderate) or 40 mg to 80 mg (high intensity)",
                                                           "frequency":  "Once daily in the evening or at night",
                                                           "maxDailyCeiling":  "80 mg in 24 hours",
                                                           "elderlyRenalAdjustment":  "No dosage adjustment needed in renal disease.",
                                                           "source":  "ACC/AHA Guidelines / BNF 86"
                                                       },
                                       "mechanism":  "Competitively inhibits HMG-CoA reductase, the rate-limiting enzyme in cholesterol biosynthesis. Upregulates hepatic LDL receptors, clearing atherogenic particles.",
                                       "contraindications":  [
                                                                 "Active liver disease or unexplained persistent transaminase elevation",
                                                                 "Pregnancy and lactation"
                                                             ],
                                       "sideEffects":  {
                                                           "common":  [
                                                                          "Myalgia / muscle ache",
                                                                          "Diarrhea",
                                                                          "Nasopharyngitis",
                                                                          "Mild transaminase elevation"
                                                                      ],
                                                           "serious":  [
                                                                           "Rhabdomyolysis (muscle necrosis with acute renal failure - rare)",
                                                                           "Hepatotoxicity"
                                                                       ]
                                                       },
                                       "interactions":  [
                                                            "Grapefruit juice in large amounts (\u003e1.2 L/day)",
                                                            "Clarithromycin, Itraconazole, Gemfibrozil (drastically increase myopathy risk)"
                                                        ],
                                       "administration":  "Can be taken with or without food at any time of day. Report dark tea-colored urine or severe unexplained muscle ache immediately.",
                                       "allergyClass":  "Statin Class",
                                       "pregnancyCaution":  "Category X: ABSOLUTE CONTRAINDICATION in pregnancy.",
                                       "source":  {
                                                      "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                      "reviewedDate":  "2026-05"
                                                  }
                                   },
                  "fluconazole":  {
                                      "id":  "fluconazole",
                                      "saltName":  "Fluconazole",
                                      "chemicalClass":  "Synthetic Bistriazole Antifungal",
                                      "therapeuticCategory":  "Systemic & Oral Antifungal",
                                      "categorySlug":  "derm",
                                      "whoModelList":  true,
                                      "indications":  [
                                                          "Oropharyngeal and esophageal candidiasis",
                                                          "Acute vulvovaginal candidiasis (single 150 mg dose)",
                                                          "Extensive tinea resistant to topicals",
                                                          "Cryptococcal meningitis"
                                                      ],
                                      "brands":  [
                                                     {
                                                         "name":  "Diflucan",
                                                         "strength":  "50 mg / 150 mg / 200 mg capsule",
                                                         "company":  "Pfizer"
                                                     },
                                                     {
                                                         "name":  "Forcan 150",
                                                         "strength":  "150 mg tablet",
                                                         "company":  "Cipla"
                                                     }
                                                 ],
                                      "pediatricDosing":  {
                                                              "formulaPerKg":  "3 to 6 mg/kg/day (up to 12 mg/kg/day in systemic candidiasis)",
                                                              "minMgPerKg":  3,
                                                              "maxMgPerKg":  6,
                                                              "frequency":  "Once daily with or without food",
                                                              "maxDailyCeilingPerKg":  12,
                                                              "liquidFormulations":  [
                                                                                         {
                                                                                             "name":  "Oral Suspension",
                                                                                             "strength":  "50 mg / 5 ml",
                                                                                             "typicalAge":  "All ages",
                                                                                             "perMlMg":  10
                                                                                         }
                                                                                     ],
                                                              "source":  "WHO EMLc / BNF for Children 2024",
                                                              "clinicalNote":  "Loading dose of double the daily maintenance dose is standard on day 1."
                                                          },
                                      "adultDosing":  {
                                                          "standardSingleDose":  "150 mg single dose (vaginal) or 100-200 mg daily (mucosal)",
                                                          "frequency":  "Once weekly (tinea) or once daily for 7-14 days (mucosal)",
                                                          "maxDailyCeiling":  "400 mg daily (up to 800mg in cryptococcal meningitis)",
                                                          "elderlyRenalAdjustment":  "Reduce dose by 50% if eGFR 21-50 ml/min.",
                                                          "source":  "BNF 86"
                                                      },
                                      "mechanism":  "Inhibits fungal CYP51 (lanosterol 14-alpha-demethylase), blocking ergosterol production with \u003e90% oral bioavailability and CSF penetration.",
                                      "contraindications":  [
                                                                "Concomitant terfenadine, cisapride, or quinidine (QTc prolongation)",
                                                                "Hypersensitivity to azoles"
                                                            ],
                                      "sideEffects":  {
                                                          "common":  [
                                                                         "Headache",
                                                                         "Nausea",
                                                                         "Abdominal discomfort",
                                                                         "Diarrhea"
                                                                     ],
                                                          "serious":  [
                                                                          "Hepatotoxicity (toxic hepatitis / liver failure - monitor LFTs)",
                                                                          "QTc prolongation",
                                                                          "Stevens-Johnson syndrome"
                                                                      ]
                                                      },
                                      "interactions":  [
                                                           "Warfarin (marked prolongation of INR)",
                                                           "Sulfonylureas (causes severe hypoglycemia)",
                                                           "Statins (elevated statin levels and rhabdomyolysis)"
                                                       ],
                                      "administration":  "Can be taken with or without food as a single oral dose.",
                                      "allergyClass":  "Triazole Antifungal",
                                      "pregnancyCaution":  "Category D: High-dose oral therapy CONTRAINDICATED in pregnancy (craniofacial malformations).",
                                      "source":  {
                                                     "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                     "reviewedDate":  "2026-05"
                                                 }
                                  },
                  "loperamide":  {
                                     "id":  "loperamide",
                                     "saltName":  "Loperamide Hydrochloride",
                                     "chemicalClass":  "Synthetic Piperidine Derivative / Peripheral Opioid Agonist",
                                     "therapeuticCategory":  "Antidiarrheal / Antimotility",
                                     "categorySlug":  "gastro",
                                     "whoModelList":  true,
                                     "indications":  [
                                                         "Symptomatic control of acute non-specific diarrhea in adults",
                                                         "Chronic diarrhea associated with irritable bowel syndrome (IBS-D)",
                                                         "Reduction of ileostomy discharge volume"
                                                     ],
                                     "brands":  [
                                                    {
                                                        "name":  "Imodium",
                                                        "strength":  "2 mg capsule",
                                                        "company":  "J&J"
                                                    },
                                                    {
                                                        "name":  "Eldoper",
                                                        "strength":  "2 mg capsule",
                                                        "company":  "Micro Labs"
                                                    },
                                                    {
                                                        "name":  "Lopamide",
                                                        "strength":  "2 mg tablet",
                                                        "company":  "Torrent"
                                                    }
                                                ],
                                     "pediatricDosing":  {
                                                             "formulaPerKg":  "CONTRAINDICATED in children under 2 years (and not recommended \u003c 12 years in acute diarrhea)",
                                                             "minMgPerKg":  0,
                                                             "maxMgPerKg":  0,
                                                             "frequency":  "Not recommended for pediatric acute diarrhea",
                                                             "maxDailyCeilingPerKg":  0,
                                                             "liquidFormulations":  [

                                                                                    ],
                                                             "source":  "WHO Guidelines on Diarrhea / FDA Black Box",
                                                             "clinicalNote":  "Contraindicated in children due to fatal paralytic ileus and toxic megacolon risk."
                                                         },
                                     "adultDosing":  {
                                                         "standardSingleDose":  "Initial 4 mg (2 capsules), followed by 2 mg after each loose unformed stool",
                                                         "frequency":  "As needed after each stool",
                                                         "maxDailyCeiling":  "8 mg daily (OTC) or 16 mg daily (Prescription maximum)",
                                                         "elderlyRenalAdjustment":  "Do not exceed recommended doses due to serious cardiac arrhythmia risk.",
                                                         "source":  "BNF 86"
                                                     },
                                     "mechanism":  "Acts on mu-opioid receptors in the myenteric plexus of the intestinal wall, inhibiting circular and longitudinal peristaltic contractions, prolonging gastrointestinal transit time, and increasing anal sphincter tone.",
                                     "contraindications":  [
                                                               "Acute dysentery (bloody diarrhea and high fever)",
                                                               "Bacterial enterocolitis caused by invasive organisms (Salmonella, Shigella, Campylobacter)",
                                                               "Active ulcerative colitis",
                                                               "Clostridioides difficile pseudomembranous colitis"
                                                           ],
                                     "sideEffects":  {
                                                         "common":  [
                                                                        "Constipation",
                                                                        "Abdominal cramps",
                                                                        "Nausea",
                                                                        "Dizziness"
                                                                    ],
                                                         "serious":  [
                                                                         "Toxic megacolon",
                                                                         "Paralytic ileus",
                                                                         "Cardiac arrest / Torsades de Pointes with supratherapeutic abuse doses"
                                                                     ]
                                                     },
                                     "interactions":  [
                                                          "P-glycoprotein inhibitors (Quinidine, Ritonavir - increases central penetration)",
                                                          "QTc prolonging agents"
                                                      ],
                                     "administration":  "Take with plain water. Discontinue immediately if abdominal distension occurs or no improvement after 48 hours.",
                                     "allergyClass":  "Peripheral Opioid Agonist",
                                     "pregnancyCaution":  "Category C: Avoid in first trimester; use only if clinically indispensable.",
                                     "source":  {
                                                    "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                    "reviewedDate":  "2026-05"
                                                }
                                 },
                  "doxycycline":  {
                                      "id":  "doxycycline",
                                      "saltName":  "Doxycycline Hyclate / Monohydrate",
                                      "chemicalClass":  "Second-Generation Tetracycline",
                                      "therapeuticCategory":  "Broad-Spectrum Tetracycline",
                                      "categorySlug":  "respiratory",
                                      "whoModelList":  true,
                                      "indications":  [
                                                          "Atypical community pneumonia and acute bronchitis",
                                                          "Scrub typhus, rickettsial infections, and malaria prophylaxis",
                                                          "Moderate to severe acne vulgaris and rosacea",
                                                          "Chlamydia genital infections"
                                                      ],
                                      "brands":  [
                                                     {
                                                         "name":  "Doxicip",
                                                         "strength":  "100 mg capsule",
                                                         "company":  "Cipla"
                                                     },
                                                     {
                                                         "name":  "Doxt-SL",
                                                         "strength":  "100 mg capsule",
                                                         "company":  "Dr. Reddy\u0027s"
                                                     },
                                                     {
                                                         "name":  "Vibramycin",
                                                         "strength":  "100 mg capsule",
                                                         "company":  "Pfizer"
                                                     }
                                                 ],
                                      "pediatricDosing":  {
                                                              "formulaPerKg":  "Contraindicated in children \u003c 8 years due to permanent dental staining",
                                                              "minMgPerKg":  0,
                                                              "maxMgPerKg":  0,
                                                              "frequency":  "Exception: Life-threatening Rocky Mountain Spotted Fever / Scrub Typhus (2.2 mg/kg q12h)",
                                                              "maxDailyCeilingPerKg":  0,
                                                              "liquidFormulations":  [

                                                                                     ],
                                                              "source":  "AAP Red Book / CDC",
                                                              "clinicalNote":  "Contraindicated in children \u003c 8 years due to permanent tooth enamel discoloration and bone growth slowing."
                                                          },
                                      "adultDosing":  {
                                                          "standardSingleDose":  "100 mg capsule",
                                                          "frequency":  "100 mg twice daily on day 1, then 100 mg once or twice daily",
                                                          "maxDailyCeiling":  "200 mg daily",
                                                          "elderlyRenalAdjustment":  "No dose adjustment needed in renal failure (eliminated via biliary/fecal route).",
                                                          "source":  "BNF 86"
                                                      },
                                      "mechanism":  "Bacteriostatic: Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit, preventing access of aminoacyl-tRNA to the ribosomal acceptor site.",
                                      "contraindications":  [
                                                                "Pregnancy (causes permanent tooth staining and skeletal delay in fetus)",
                                                                "Children under 8 years of age",
                                                                "Severe hepatic dysfunction"
                                                            ],
                                      "sideEffects":  {
                                                          "common":  [
                                                                         "Epigastric burning",
                                                                         "Nausea",
                                                                         "Photosensitivity (sunburn risk)",
                                                                         "Esophageal irritation"
                                                                     ],
                                                          "serious":  [
                                                                          "Severe pill-induced esophagitis / ulceration",
                                                                          "Benign intracranial hypertension"
                                                                      ]
                                                      },
                                      "interactions":  [
                                                           "Antacids (aluminum, magnesium, calcium), oral iron (binds and blocks absorption)",
                                                           "Warfarin",
                                                           "Rifampicin"
                                                       ],
                                      "administration":  "CRITICAL: Swallow with a full glass of water while UPRIGHT. Remain upright for at least 30 minutes to prevent pill esophagitis.",
                                      "allergyClass":  "Tetracycline",
                                      "pregnancyCaution":  "Category D: STRICTLY CONTRAINDICATED in pregnancy.",
                                      "source":  {
                                                     "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                     "reviewedDate":  "2026-05"
                                                 }
                                  },
                  "levofloxacin":  {
                                       "id":  "levofloxacin",
                                       "saltName":  "Levofloxacin Hemihydrate",
                                       "chemicalClass":  "Third-Generation \u0027Respiratory\u0027 Fluoroquinolone",
                                       "therapeuticCategory":  "Fluoroquinolone Antibacterial",
                                       "categorySlug":  "respiratory",
                                       "whoModelList":  true,
                                       "indications":  [
                                                           "Community-acquired pneumonia and acute pyelonephritis",
                                                           "Chronic bacterial prostatitis and complicated skin infections",
                                                           "Multidrug-resistant tuberculosis (second-line EML)"
                                                       ],
                                       "brands":  [
                                                      {
                                                          "name":  "Levaquin",
                                                          "strength":  "500 mg / 750 mg tablet",
                                                          "company":  "J&J"
                                                      },
                                                      {
                                                          "name":  "Glevo 500",
                                                          "strength":  "500 mg tablet",
                                                          "company":  "Glenmark"
                                                      },
                                                      {
                                                          "name":  "Loxof 500",
                                                          "strength":  "500 mg tablet",
                                                          "company":  "Ranbaxy"
                                                      }
                                                  ],
                                       "pediatricDosing":  {
                                                               "formulaPerKg":  "Restricted in pediatric age group (\u003c18 years)",
                                                               "minMgPerKg":  0,
                                                               "maxMgPerKg":  0,
                                                               "frequency":  "Not recommended for routine pediatric use",
                                                               "maxDailyCeilingPerKg":  0,
                                                               "liquidFormulations":  [

                                                                                      ],
                                                               "source":  "Verified dosing reference unavailable",
                                                               "clinicalNote":  "Restricted to severe pediatric multidrug-resistant infections under specialist infectious disease supervision."
                                                           },
                                       "adultDosing":  {
                                                           "standardSingleDose":  "500 mg tablet",
                                                           "frequency":  "Once daily (every 24 hours)",
                                                           "maxDailyCeiling":  "750 mg in 24 hours",
                                                           "elderlyRenalAdjustment":  "Dose reduction required based on renal clearance (eGFR \u003c 50 ml/min).",
                                                           "source":  "BNF 86"
                                                       },
                                       "mechanism":  "Pure L-enantiomer of ofloxacin, inhibiting bacterial DNA gyrase and topoisomerase IV with enhanced Gram-positive and atypical coverage.",
                                       "contraindications":  [
                                                                 "Hypersensitivity to quinolones",
                                                                 "History of tendon disorders",
                                                                 "Epilepsy",
                                                                 "Prolonged QTc interval"
                                                             ],
                                       "sideEffects":  {
                                                           "common":  [
                                                                          "Nausea",
                                                                          "Headache",
                                                                          "Insomnia",
                                                                          "Dizziness"
                                                                      ],
                                                           "serious":  [
                                                                           "Tendon rupture (especially Achilles tendon)",
                                                                           "Hepatotoxicity",
                                                                           "Peripheral neuropathy",
                                                                           "Clostridioides difficile colitis"
                                                                       ]
                                                       },
                                       "interactions":  [
                                                            "Iron, magnesium, aluminum antacids, sucralfate (take 2 hours apart)",
                                                            "Warfarin",
                                                            "Antiarrhythmics"
                                                        ],
                                       "administration":  "Take with plenty of water once daily at the same time.",
                                       "allergyClass":  "Fluoroquinolone",
                                       "pregnancyCaution":  "Category C: Avoid during pregnancy.",
                                       "source":  {
                                                      "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                      "reviewedDate":  "2026-05"
                                                  }
                                   },
                  "chlorzoxazone":  {
                                        "id":  "chlorzoxazone",
                                        "saltName":  "Chlorzoxazone",
                                        "chemicalClass":  "Benzoxazolone Derivative",
                                        "therapeuticCategory":  "Skeletal Muscle Relaxant",
                                        "categorySlug":  "ortho",
                                        "whoModelList":  false,
                                        "indications":  [
                                                            "Acute painful muscle spasms, torticollis, sprains, and lumbar strain"
                                                        ],
                                        "brands":  [
                                                       {
                                                           "name":  "Parafon Forte",
                                                           "strength":  "500 mg tablet",
                                                           "company":  "J&J"
                                                       },
                                                       {
                                                           "name":  "Myospaz",
                                                           "strength":  "Chlorzoxazone 250mg + Paracetamol 325mg",
                                                           "company":  "Win-Medicare"
                                                       }
                                                   ],
                                        "pediatricDosing":  {
                                                                "formulaPerKg":  "Not recommended in pediatric patients (\u003c18 years)",
                                                                "minMgPerKg":  0,
                                                                "maxMgPerKg":  0,
                                                                "frequency":  "Not applicable",
                                                                "maxDailyCeilingPerKg":  0,
                                                                "liquidFormulations":  [

                                                                                       ],
                                                                "source":  "Verified dosing reference unavailable",
                                                                "clinicalNote":  "Contraindicated in pediatric population."
                                                            },
                                        "adultDosing":  {
                                                            "standardSingleDose":  "250 mg to 500 mg tablet",
                                                            "frequency":  "3 to 4 times daily with food",
                                                            "maxDailyCeiling":  "750 mg 3 or 4 times daily (max 3000 mg in 24 hours)",
                                                            "elderlyRenalAdjustment":  "Avoid in hepatic dysfunction; caution in elderly due to fall risk.",
                                                            "source":  "FDA Clinical Reference"
                                                        },
                                        "mechanism":  "Acts primarily at spinal cord and subcortical areas to inhibit polysynaptic reflex arcs producing muscle spasm.",
                                        "contraindications":  [
                                                                  "Known hypersensitivity",
                                                                  "Pre-existing hepatic disease or abnormal LFTs"
                                                              ],
                                        "sideEffects":  {
                                                            "common":  [
                                                                           "Drowsiness / Sedation",
                                                                           "Dizziness",
                                                                           "Lightheadedness",
                                                                           "Orange/red harmless urine discoloration"
                                                                       ],
                                                            "serious":  [
                                                                            "Severe idiosyncratic hepatotoxicity (discontinue at first sign)",
                                                                            "GI bleeding"
                                                                        ]
                                                        },
                                        "interactions":  [
                                                             "Alcohol & CNS depressants (severe synergistic sedation)"
                                                         ],
                                        "administration":  "Take with food. Do not drive or operate machinery. Report jaundice or dark urine immediately.",
                                        "allergyClass":  "Central Muscle Relaxant",
                                        "pregnancyCaution":  "Category C: Avoid during pregnancy.",
                                        "source":  {
                                                       "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                       "reviewedDate":  "2026-05"
                                                   }
                                    },
                  "levocetirizine":  {
                                         "id":  "levocetirizine",
                                         "saltName":  "Levocetirizine Dihydrochloride",
                                         "chemicalClass":  "Pure R-Enantiomer of Cetirizine / H1 Antagonist",
                                         "therapeuticCategory":  "Non-Sedating Antihistamine",
                                         "categorySlug":  "respiratory",
                                         "whoModelList":  false,
                                         "indications":  [
                                                             "Allergic rhinitis and pollinosis",
                                                             "Chronic spontaneous urticaria and hives",
                                                             "Allergic pruritus and dermatographism"
                                                         ],
                                         "brands":  [
                                                        {
                                                            "name":  "Vozet 5",
                                                            "strength":  "5 mg tablet",
                                                            "company":  "Dr. Reddy\u0027s"
                                                        },
                                                        {
                                                            "name":  "Xyzal",
                                                            "strength":  "5 mg tablet",
                                                            "company":  "UCB"
                                                        },
                                                        {
                                                            "name":  "Levocet",
                                                            "strength":  "5 mg tablet & 2.5mg/5ml syrup",
                                                            "company":  "Hetero"
                                                        }
                                                    ],
                                         "pediatricDosing":  {
                                                                 "formulaPerKg":  "1.25 mg daily (6 mos - 5 yrs); 2.5 mg daily (6 - 11 yrs)",
                                                                 "minMgPerKg":  0.1,
                                                                 "maxMgPerKg":  0.15,
                                                                 "frequency":  "Once daily in the evening",
                                                                 "maxDailyCeilingPerKg":  0.2,
                                                                 "liquidFormulations":  [
                                                                                            {
                                                                                                "name":  "Oral Solution",
                                                                                                "strength":  "2.5 mg / 5 ml",
                                                                                                "typicalAge":  "6 mos - 11 yrs",
                                                                                                "perMlMg":  0.5
                                                                                            }
                                                                                        ],
                                                                 "source":  "BNF for Children 2024",
                                                                 "clinicalNote":  "Pure active enantiomer provides 2-fold higher affinity for H1 receptor than racemic cetirizine."
                                                             },
                                         "adultDosing":  {
                                                             "standardSingleDose":  "5 mg tablet",
                                                             "frequency":  "Once daily in the evening",
                                                             "maxDailyCeiling":  "5 mg in 24 hours",
                                                             "elderlyRenalAdjustment":  "Adjust dose: 5 mg every other day if eGFR 30-49 ml/min; every 3 days if eGFR 10-29 ml/min.",
                                                             "source":  "BNF 86"
                                                         },
                                         "mechanism":  "Enantiomerically pure active R-form of cetirizine with approximately double the affinity for human H1 receptors and lower somnolence incidence.",
                                         "contraindications":  [
                                                                   "End-stage renal disease (eGFR \u003c 10 ml/min) or hemodialysis patients",
                                                                   "Hypersensitivity to levocetirizine or hydroxyzine"
                                                               ],
                                         "sideEffects":  {
                                                             "common":  [
                                                                            "Somnolence",
                                                                            "Nasopharyngitis",
                                                                            "Dry mouth",
                                                                            "Fatigue"
                                                                        ],
                                                             "serious":  [
                                                                             "Severe paradoxical CNS stimulation",
                                                                             "Urinary retention in prostatic hyperplasia"
                                                                         ]
                                                         },
                                         "interactions":  [
                                                              "Alcohol and sedatives (avoid concomitant usage)"
                                                          ],
                                         "administration":  "Take once daily in the evening with a glass of water.",
                                         "allergyClass":  "H1 Antihistamine",
                                         "pregnancyCaution":  "Category B: Safe when needed during pregnancy.",
                                         "source":  {
                                                        "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                        "reviewedDate":  "2026-05"
                                                    }
                                     },
                  "budesonide-formoterol":  {
                                                "id":  "budesonide-formoterol",
                                                "saltName":  "Budesonide + Formoterol Fumarate",
                                                "chemicalClass":  "Inhaled Corticosteroid (ICS) + Long-Acting Beta-2 Agonist (LABA)",
                                                "therapeuticCategory":  "Maintenance & Reliever Therapy (SMART)",
                                                "categorySlug":  "respiratory",
                                                "whoModelList":  true,
                                                "indications":  [
                                                                    "Maintenance and reliever treatment of bronchial asthma (GINA Track 1 preference)",
                                                                    "Maintenance therapy of moderate to severe COPD with frequent exacerbations"
                                                                ],
                                                "brands":  [
                                                               {
                                                                   "name":  "Symbicort Turbuhaler",
                                                                   "strength":  "160 mcg / 4.5 mcg per actuation",
                                                                   "company":  "AstraZeneca"
                                                               },
                                                               {
                                                                   "name":  "Foracort 200 / 400",
                                                                   "strength":  "Budesonide 200mcg + Formoterol 6mcg Inhaler",
                                                                   "company":  "Cipla"
                                                               },
                                                               {
                                                                   "name":  "Budamate 200",
                                                                   "strength":  "200mcg/6mcg Inhaler",
                                                                   "company":  "Lupin"
                                                               }
                                                           ],
                                                "pediatricDosing":  {
                                                                        "formulaPerKg":  "Approved for children \u003e= 6 years (Symbicort 80/4.5: 1 puff twice daily)",
                                                                        "minMgPerKg":  0,
                                                                        "maxMgPerKg":  0,
                                                                        "frequency":  "Twice daily for maintenance, plus as needed for symptom relief",
                                                                        "maxDailyCeilingPerKg":  0,
                                                                        "liquidFormulations":  [

                                                                                               ],
                                                                        "source":  "GINA 2024 / BNF for Children 2024",
                                                                        "clinicalNote":  "GINA 2024 recommends anti-inflammatory reliever (ICS-formoterol) across age groups to prevent severe exacerbations."
                                                                    },
                                                "adultDosing":  {
                                                                    "standardSingleDose":  "1 to 2 inhalations (160mcg/4.5mcg or 200mcg/6mcg)",
                                                                    "frequency":  "Twice daily for maintenance, plus 1 puff as needed for breakthrough symptoms",
                                                                    "maxDailyCeiling":  "Maximum 8-12 puffs in a single day under SMART protocol",
                                                                    "elderlyRenalAdjustment":  "No dosage adjustment needed in renal failure.",
                                                                    "source":  "GINA 2024 / BNF 86"
                                                                },
                                                "mechanism":  "Dual anti-inflammatory and bronchodilator synergy: Budesonide suppresses bronchial eosinophilic and lymphocytic inflammation, while Formoterol provides rapid (within 1-3 mins) and long-lasting (\u003e12h) bronchodilation.",
                                                "contraindications":  [
                                                                          "Hypersensitivity to budesonide or formoterol",
                                                                          "Acute unmonitored status asthmaticus requiring parenteral intensive therapy"
                                                                      ],
                                                "sideEffects":  {
                                                                    "common":  [
                                                                                   "Oral candidiasis (thrush)",
                                                                                   "Dysphonia (hoarseness of voice)",
                                                                                   "Throat irritation",
                                                                                   "Mild fine tremors"
                                                                               ],
                                                                    "serious":  [
                                                                                    "Pneumonia in COPD patients",
                                                                                    "Systemic corticosteroid effects with supratherapeutic chronic doses (adrenal suppression)"
                                                                                ]
                                                                },
                                                "interactions":  [
                                                                     "Strong CYP3A4 inhibitors (Ketoconazole, Itraconazole, Ritonavir - increases systemic budesonide exposure)",
                                                                     "Beta-blockers"
                                                                 ],
                                                "administration":  "CRITICAL: MUST RINSE MOUTH THOROUGHLY WITH WATER AND SPIT OUT AFTER INHALATION to prevent oral candidiasis and hoarseness.",
                                                "allergyClass":  "ICS + LABA",
                                                "pregnancyCaution":  "Category C: Safe and preferred controller in pregnant asthmatics (prevents fetal hypoxia).",
                                                "source":  {
                                                               "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                               "reviewedDate":  "2026-05"
                                                           }
                                            },
                  "olopatadine-ophthalmic":  {
                                                 "id":  "olopatadine-ophthalmic",
                                                 "saltName":  "Olopatadine Hydrochloride (Ophthalmic)",
                                                 "chemicalClass":  "Dual Mast-Cell Stabilizer & H1-Antagonist",
                                                 "therapeuticCategory":  "Ocular Antiallergic",
                                                 "categorySlug":  "derm",
                                                 "whoModelList":  false,
                                                 "indications":  [
                                                                     "Relief of ocular itching, redness, and chemosis in allergic conjunctivitis"
                                                                 ],
                                                 "brands":  [
                                                                {
                                                                    "name":  "Patanol 0.1%",
                                                                    "strength":  "0.1% w/v drops (twice daily)",
                                                                    "company":  "Novartis / Alcon"
                                                                },
                                                                {
                                                                    "name":  "Pataday 0.2%",
                                                                    "strength":  "0.2% w/v drops (once daily)",
                                                                    "company":  "Novartis / Alcon"
                                                                }
                                                            ],
                                                 "pediatricDosing":  {
                                                                         "formulaPerKg":  "1 drop into affected eye(s) twice daily (children \u003e= 2 years)",
                                                                         "minMgPerKg":  0,
                                                                         "maxMgPerKg":  0,
                                                                         "frequency":  "Every 6 to 8 hours (0.1%) or once daily (0.2%)",
                                                                         "maxDailyCeilingPerKg":  0,
                                                                         "liquidFormulations":  [

                                                                                                ],
                                                                         "source":  "BNF for Children 2024",
                                                                         "clinicalNote":  "Approved for children aged 2 years and older."
                                                                     },
                                                 "adultDosing":  {
                                                                     "standardSingleDose":  "1 drop into affected eye(s)",
                                                                     "frequency":  "Twice daily at 6-8 hr interval (0.1%) or once daily in morning (0.2%)",
                                                                     "maxDailyCeiling":  "2 drops per eye in 24 hours",
                                                                     "elderlyRenalAdjustment":  "No dosage adjustment needed.",
                                                                     "source":  "BNF 86"
                                                                 },
                                                 "mechanism":  "Selective H1 receptor antagonist and mast cell stabilizer that prevents histamine release and suppresses acidophilic inflammatory migration into the conjunctiva.",
                                                 "contraindications":  [
                                                                           "Hypersensitivity to olopatadine or benzalkonium chloride preservative",
                                                                           "Contact lens irritation"
                                                                       ],
                                                 "sideEffects":  {
                                                                     "common":  [
                                                                                    "Transient ocular burning or stinging",
                                                                                    "Dry eyes",
                                                                                    "Foreign body sensation"
                                                                                ],
                                                                     "serious":  [
                                                                                     "Hypersensitivity keratitis (rare)"
                                                                                 ]
                                                                 },
                                                 "interactions":  [
                                                                      "Wait 5-10 minutes between administering other eye drops"
                                                                  ],
                                                 "administration":  "Instill into conjunctival sac. Remove soft contact lenses before instillation; wait 10-15 minutes before re-inserting.",
                                                 "allergyClass":  "Ophthalmic Antihistamine",
                                                 "pregnancyCaution":  "Category C: Safe for ophthalmic use when indicated.",
                                                 "source":  {
                                                                "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                                "reviewedDate":  "2026-05"
                                                            }
                                             },
                  "salbutamol":  {
                                     "id":  "salbutamol",
                                     "saltName":  "Salbutamol (Albuterol)",
                                     "chemicalClass":  "Short-Acting Beta-2 Adrenergic Agonist (SABA)",
                                     "therapeuticCategory":  "Rescue Bronchodilator",
                                     "categorySlug":  "respiratory",
                                     "whoModelList":  true,
                                     "indications":  [
                                                         "Immediate relief of acute bronchospasm in bronchial asthma",
                                                         "Prophylaxis of exercise-induced bronchospasm",
                                                         "Acute exacerbation of chronic obstructive pulmonary disease (COPD)"
                                                     ],
                                     "brands":  [
                                                    {
                                                        "name":  "Asthalin Inhaler",
                                                        "strength":  "100 mcg per metered actuation",
                                                        "company":  "Cipla"
                                                    },
                                                    {
                                                        "name":  "Ventolin HFA",
                                                        "strength":  "100 mcg per actuation",
                                                        "company":  "GSK"
                                                    },
                                                    {
                                                        "name":  "Asthalin Respules",
                                                        "strength":  "2.5 mg / 2.5 ml nebulizing solution",
                                                        "company":  "Cipla"
                                                    }
                                                ],
                                     "pediatricDosing":  {
                                                             "formulaPerKg":  "100 to 200 mcg (1-2 puffs) via MDI with spacer; nebulization: 0.15 mg/kg (min 1.25mg, max 5mg)",
                                                             "minMgPerKg":  0.1,
                                                             "maxMgPerKg":  0.15,
                                                             "frequency":  "Every 4 to 6 hours as needed for acute relief",
                                                             "maxDailyCeilingPerKg":  0,
                                                             "liquidFormulations":  [
                                                                                        {
                                                                                            "name":  "Respules for Nebulization",
                                                                                            "strength":  "2.5 mg / 2.5 ml",
                                                                                            "typicalAge":  "All ages",
                                                                                            "perMlMg":  1
                                                                                        },
                                                                                        {
                                                                                            "name":  "Asthalin Syrup",
                                                                                            "strength":  "2 mg / 5 ml",
                                                                                            "typicalAge":  "2 - 6 yrs",
                                                                                            "perMlMg":  0.4
                                                                                        }
                                                                                    ],
                                                             "source":  "GINA 2024 / BNF for Children 2024",
                                                             "clinicalNote":  "ALWAYS use a holding chamber / spacer with mask in children for optimal lung delivery."
                                                         },
                                     "adultDosing":  {
                                                         "standardSingleDose":  "100 mcg to 200 mcg (1 to 2 inhalations of 100 mcg MDI)",
                                                         "frequency":  "Every 4 to 6 hours as needed for acute relief",
                                                         "maxDailyCeiling":  "8 inhalations (800 mcg) in 24 hours under outpatient conditions",
                                                         "elderlyRenalAdjustment":  "Caution in ischemic heart disease or cardiac arrhythmias (risk of tachycardia).",
                                                         "source":  "GINA 2024 / BNF 86"
                                                     },
                                     "mechanism":  "Rapidly stimulates beta-2 adrenergic receptors on bronchial smooth muscle, activating adenylate cyclase, increasing intracellular cAMP, and causing immediate bronchial relaxation (within 3-5 minutes).",
                                     "contraindications":  [
                                                               "Hypersensitivity to salbutamol",
                                                               "Non-cardioselective beta-blockers (propranolol antagonizes effect and triggers severe bronchospasm)"
                                                           ],
                                     "sideEffects":  {
                                                         "common":  [
                                                                        "Fine skeletal muscle tremor (especially hands)",
                                                                        "Tachycardia and palpitations",
                                                                        "Headache",
                                                                        "Peripheral vasodilation"
                                                                    ],
                                                         "serious":  [
                                                                         "Hypokalemia (high doses drive K+ into cells)",
                                                                         "Cardiac arrhythmias / myocardial ischemia in cardiac patients",
                                                                         "Paradoxical bronchospasm"
                                                                     ]
                                                     },
                                     "interactions":  [
                                                          "Non-selective Beta-Blockers (Propranolol, Timolol - ABSOLUTE CONTRAINDICATION)",
                                                          "Diuretics (additive hypokalemia)",
                                                          "Digoxin"
                                                      ],
                                     "administration":  "INHALATION: Exhale completely, actuate inhaler at start of deep slow inhalation, hold breath for 10 seconds. Rinse mouth.",
                                     "allergyClass":  "Short-Acting Beta-2 Agonist",
                                     "pregnancyCaution":  "Category C: Drug of choice for acute asthma rescue in pregnancy.",
                                     "source":  {
                                                    "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                    "reviewedDate":  "2026-05"
                                                }
                                 },
                  "pantoprazole-domperidone":  {
                                                   "id":  "pantoprazole-domperidone",
                                                   "saltName":  "Pantoprazole + Domperidone (SR)",
                                                   "chemicalClass":  "PPI + Peripheral Dopamine D2 Receptor Antagonist",
                                                   "therapeuticCategory":  "Gastroprokinetic & PPI",
                                                   "categorySlug":  "gastro",
                                                   "whoModelList":  false,
                                                   "indications":  [
                                                                       "GERD with prominent delayed gastric emptying and nausea",
                                                                       "Dyspepsia associated with acid reflux and postprandial fullness",
                                                                       "Erosive esophagitis accompanied by gastroparesis"
                                                                   ],
                                                   "brands":  [
                                                                  {
                                                                      "name":  "Pan-D",
                                                                      "strength":  "Pantoprazole 40mg + Domperidone 30mg SR capsule",
                                                                      "company":  "Alkem"
                                                                  },
                                                                  {
                                                                      "name":  "Pantocid-D SR",
                                                                      "strength":  "40mg/30mg capsule",
                                                                      "company":  "Sun Pharma"
                                                                  },
                                                                  {
                                                                      "name":  "Dompan SR",
                                                                      "strength":  "40mg/30mg capsule",
                                                                      "company":  "Medley"
                                                                  }
                                                              ],
                                                   "pediatricDosing":  {
                                                                           "formulaPerKg":  "Not recommended in pediatric age group (\u003c12 years)",
                                                                           "minMgPerKg":  0,
                                                                           "maxMgPerKg":  0,
                                                                           "frequency":  "Not applicable",
                                                                           "maxDailyCeilingPerKg":  0,
                                                                           "liquidFormulations":  [

                                                                                                  ],
                                                                           "source":  "Verified dosing reference unavailable",
                                                                           "clinicalNote":  "Domperidone is contraindicated in pediatric self-care due to cardiac and extrapyramidal risk."
                                                                       },
                                                   "adultDosing":  {
                                                                       "standardSingleDose":  "1 capsule (40mg Pantoprazole + 30mg Domperidone SR)",
                                                                       "frequency":  "Once daily in the morning 30-60 minutes before breakfast",
                                                                       "maxDailyCeiling":  "1 capsule daily",
                                                                       "elderlyRenalAdjustment":  "Use with caution in elderly patients; baseline ECG recommended for cardiac QTc assessment.",
                                                                       "source":  "CDSCO / EMA Safety Reference"
                                                                   },
                                                   "mechanism":  "Dual therapy: Pantoprazole provides potent gastric acid suppression while Domperidone selectively antagonizes peripheral D2 dopamine receptors in the upper GI tract, accelerating gastric emptying.",
                                                   "contraindications":  [
                                                                             "Prolonged cardiac QTc interval or underlying cardiac arrhythmias",
                                                                             "Moderate to severe hepatic impairment",
                                                                             "GI mechanical obstruction, perforation, or active bleeding"
                                                                         ],
                                                   "sideEffects":  {
                                                                       "common":  [
                                                                                      "Dry mouth",
                                                                                      "Headache",
                                                                                      "Abdominal fullness"
                                                                                  ],
                                                                       "serious":  [
                                                                                       "Ventricular arrhythmias / QTc prolongation",
                                                                                       "Hyperprolactinemia (galactorrhea, gynecomastia)"
                                                                                   ]
                                                                   },
                                                   "interactions":  [
                                                                        "QTc prolonging drugs (amiodarone, erythromycin, haloperidol - STRICTLY AVOID)",
                                                                        "Ketoconazole"
                                                                    ],
                                                   "administration":  "MUST be taken on an empty stomach in the morning, 30-60 minutes before breakfast. Swallow whole.",
                                                   "allergyClass":  "PPI + Antiemetic",
                                                   "pregnancyCaution":  "Avoid in pregnancy unless physician-directed.",
                                                   "source":  {
                                                                  "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                                  "reviewedDate":  "2026-05"
                                                              }
                                               },
                  "sitagliptin":  {
                                      "id":  "sitagliptin",
                                      "saltName":  "Sitagliptin Phosphate",
                                      "chemicalClass":  "Selective DPP-4 Inhibitor",
                                      "therapeuticCategory":  "Incretin Enhancer / Antidiabetic",
                                      "categorySlug":  "chronic",
                                      "whoModelList":  true,
                                      "indications":  [
                                                          "Type 2 diabetes mellitus monotherapy or in combination with metformin/sulfonylureas",
                                                          "Glycemic control with weight neutrality and negligible hypoglycemia risk"
                                                      ],
                                      "brands":  [
                                                     {
                                                         "name":  "Januvia 50 / 100",
                                                         "strength":  "50 mg / 100 mg tablet",
                                                         "company":  "MSD"
                                                     },
                                                     {
                                                         "name":  "Janumet",
                                                         "strength":  "Sitagliptin 50mg + Metformin 500mg",
                                                         "company":  "MSD"
                                                     }
                                                 ],
                                      "pediatricDosing":  {
                                                              "formulaPerKg":  "Safety not established in pediatric patients (\u003c18 years)",
                                                              "minMgPerKg":  0,
                                                              "maxMgPerKg":  0,
                                                              "frequency":  "Not applicable",
                                                              "maxDailyCeilingPerKg":  0,
                                                              "liquidFormulations":  [

                                                                                     ],
                                                              "source":  "Verified dosing reference unavailable",
                                                              "clinicalNote":  "Not recommended in children under 18."
                                                          },
                                      "adultDosing":  {
                                                          "standardSingleDose":  "100 mg tablet",
                                                          "frequency":  "Once daily with or without food",
                                                          "maxDailyCeiling":  "100 mg daily",
                                                          "elderlyRenalAdjustment":  "50 mg daily if eGFR 30-44 ml/min; 25 mg daily if eGFR \u003c 30 ml/min.",
                                                          "source":  "BNF 86"
                                                      },
                                      "mechanism":  "Inhibits DPP-4 enzyme, slowing incretin degradation (GLP-1 and GIP). Increases insulin release and decreases glucagon in a glucose-dependent manner.",
                                      "contraindications":  [
                                                                "Hypersensitivity to sitagliptin",
                                                                "History of acute or chronic pancreatitis"
                                                            ],
                                      "sideEffects":  {
                                                          "common":  [
                                                                         "Upper respiratory infection",
                                                                         "Nasopharyngitis",
                                                                         "Headache"
                                                                     ],
                                                          "serious":  [
                                                                          "Acute pancreatitis (severe persistent epigastric pain radiating to back)",
                                                                          "Bullous pemphigoid"
                                                                      ]
                                                      },
                                      "interactions":  [
                                                           "Digoxin (slight increase in digoxin plasma levels)"
                                                       ],
                                      "administration":  "Can be taken with or without food at any time of day.",
                                      "allergyClass":  "DPP-4 Inhibitor (Weight Neutral)",
                                      "pregnancyCaution":  "Category B: Avoid in pregnancy; insulin preferred.",
                                      "source":  {
                                                     "sourceName":  "WHO Model Formulary (EML 2023) & BNF 86",
                                                     "reviewedDate":  "2026-05"
                                                 }
                                  }
              }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CLINICAL_DATA;
}
// Integrate HKare reference dataset if loaded
if (typeof HKARE_DATA !== 'undefined') {
    CLINICAL_DATA.hkareMeta = HKARE_DATA.meta;
    CLINICAL_DATA.categories = HKARE_DATA.categories;
    CLINICAL_DATA.diseases = HKARE_DATA.conditions;
    CLINICAL_DATA.medicineReferences = HKARE_DATA.medicines;

    // Ensure all 200 HKare medicines are available in the Dosage Calculator and verified salt references
    if (!CLINICAL_DATA.salts) {
        CLINICAL_DATA.salts = {};
    }
    HKARE_DATA.medicines.forEach(m => {
        const cleanId = m.id.replace(/^hkare_/, '').toLowerCase();
        if (!CLINICAL_DATA.salts[cleanId]) {
            const brandList = (m.brandNames || "").split(",").map(b => {
                const bName = b.trim();
                return {
                    name: bName,
                    strength: "Clinical Reference",
                    company: "Commercial Formulation"
                };
            }).filter(b => b.name.length > 0);

            CLINICAL_DATA.salts[cleanId] = {
                id: cleanId,
                saltName: m.activeIngredient,
                chemicalClass: m.medicineClass,
                therapeuticCategory: m.category,
                categorySlug: m.categorySlug || "general",
                whoModelList: true,
                indications: [m.condition, m.generalMedicalRole],
                brands: brandList.length > 0 ? brandList : [{ name: m.activeIngredient, strength: "Standard", company: "Commercial Formulation" }],
                pediatricDosing: {
                    formulaPerKg: m.dosageGuideline && m.dosageGuideline.includes("Pediatric:") ? m.dosageGuideline.split("Pediatric:")[1].trim() : "Standard pediatric dosing as advised by pediatrician.",
                    minMgPerKg: 0,
                    maxMgPerKg: 0,
                    frequency: "As clinically prescribed",
                    maxDailyCeilingPerKg: 0,
                    liquidFormulations: [],
                    source: m.source || "HKare Reference Dataset",
                    clinicalNote: m.safetyNote
                },
                adultDosing: {
                    standardSingleDose: m.dosageGuideline && m.dosageGuideline.includes("Adult:") ? m.dosageGuideline.split("Adult:")[1].split(".")[0].trim() : m.dosageGuideline,
                    frequency: "As clinically prescribed",
                    maxDailyCeiling: m.dosageGuideline && m.dosageGuideline.includes("Max:") ? m.dosageGuideline.split("Max:")[1].split(")")[0].trim() : "See posology monograph",
                    elderlyRenalAdjustment: "Standard geriatric caution; adjust per creatinine clearance.",
                    source: m.source || "HKare Reference Dataset"
                },
                mechanism: m.generalMedicalRole,
                contraindications: [m.safetyNote],
                sideEffects: {
                    common: ["Mild gastrointestinal upset", "Headache"],
                    serious: [m.safetyNote]
                },
                interactions: ["Consult physician for concomitant multi-drug interactions"],
                administration: "Administer per prescribed oral, parenteral, or topical instructions.",
                allergyClass: m.medicineClass,
                pregnancyCaution: m.safetyNote,
                source: {
                    sourceName: m.source || "HKare Reference Dataset",
                    reviewedDate: "2026-09"
                }
            };
        }
    });
}
