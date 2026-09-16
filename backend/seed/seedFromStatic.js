/**
 * Himkiv Seeder Script
 * Migrates and enriches data from static files (data/hkareData.js and data/medicineData.js)
 * into backend/data/ atomic database collections with auto-generated affiliate links.
 */

const path = require('path');
const fs = require('fs');

const rootDir = path.join(__dirname, '..', '..');
const db = require('../config/db');

// Helper to generate affiliate search URLs
function generateAffiliateLinks(saltName, primaryBrand) {
  const query = encodeURIComponent((primaryBrand || saltName || '').trim());
  return [
    {
      id: 'aff_1mg',
      platform: 'Tata 1mg',
      badgeClass: 'bg-red-50 text-red-600 border-red-200',
      logo: 'https://www.1mg.com/favicon.ico',
      url: `https://www.1mg.com/search/all?name=${query}`,
      priceEstimate: 'Best Price Available',
      discount: 'Up to 20% OFF',
      verified: true
    },
    {
      id: 'aff_apollo',
      platform: 'Apollo Pharmacy',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      logo: 'https://www.apollopharmacy.in/favicon.ico',
      url: `https://www.apollopharmacy.in/search-medicines/${query}`,
      priceEstimate: 'Verified Authentic',
      discount: 'Up to 15% OFF',
      verified: true
    },
    {
      id: 'aff_netmeds',
      platform: 'Netmeds',
      badgeClass: 'bg-blue-50 text-blue-600 border-blue-200',
      logo: 'https://www.netmeds.com/favicon.ico',
      url: `https://www.netmeds.com/catalogsearch/result/${query}/all`,
      priceEstimate: 'Quick Delivery',
      discount: 'Available',
      verified: true
    }
  ];
}

async function runSeed() {
  console.log('🔄 Starting Himkiv Database Seeding...');

  // 1. Load static data
  const hkarePath = path.join(rootDir, 'data', 'hkareData.js');
  const clinicalPath = path.join(rootDir, 'data', 'medicineData.js');

  let hkare = null;
  let clinical = null;

  if (fs.existsSync(hkarePath)) {
    hkare = require(hkarePath);
    console.log(`✓ Loaded hkareData.js: ${hkare.medicines?.length || 0} medicines, ${hkare.conditions?.length || 0} conditions.`);
  }

  if (fs.existsSync(clinicalPath)) {
    clinical = require(clinicalPath);
    console.log(`✓ Loaded medicineData.js: ${Object.keys(clinical.salts || {}).length} clinical salts.`);
  }

  // 2. Seed Diseases / Conditions
  const diseaseMap = new Map();

  if (hkare && Array.isArray(hkare.conditions)) {
    hkare.conditions.forEach(cond => {
      const id = cond.id || cond.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      diseaseMap.set(id, {
        id,
        name: cond.name,
        category: cond.category || 'General',
        categorySlug: cond.categorySlug || 'general',
        symptoms: cond.symptoms || [],
        icd11Code: cond.icd11Code || cond.code || 'WHO-ICD-11',
        description: cond.description || `Clinical condition: ${cond.name}`,
        redFlags: cond.redFlags || ['High persistent fever > 103°F', 'Severe dehydration', 'Difficulty breathing'],
        homeCare: cond.homeCare || 'Hydration, rest, and monitoring of vitals.',
        recommendedMedicines: cond.recommendedMedicines || [],
        updatedAt: new Date().toISOString()
      });
    });
  }

  console.log(`✓ Prepared ${diseaseMap.size} unique disease records.`);
  db.diseases.setAll(Array.from(diseaseMap.values()));

  // 3. Seed Medicines
  const medicineMap = new Map();

  // First seed from HKare medicines (200 medicines)
  if (hkare && Array.isArray(hkare.medicines)) {
    hkare.medicines.forEach(m => {
      const id = m.id || ('hk_' + m.activeIngredient.toLowerCase().replace(/[^a-z0-9]+/g, '_'));
      const brandsArr = (m.brandNames || '').split(',').map(b => b.trim()).filter(Boolean);
      const primaryBrand = brandsArr[0] || m.activeIngredient;

      medicineMap.set(id, {
        id,
        slug: id.replace(/^hkare_/, '').replace(/^hk_/, '').toLowerCase(),
        activeIngredient: m.activeIngredient,
        saltName: m.activeIngredient,
        medicineClass: m.medicineClass || 'Clinical Therapeutic Agent',
        condition: m.condition || 'General Healthcare',
        conditionId: m.conditionId || '',
        category: m.category || 'General',
        categorySlug: m.categorySlug || 'general',
        brandNames: m.brandNames || '',
        primaryBrand: primaryBrand,
        brandsList: brandsArr.map(b => ({
          name: b,
          strength: 'Standard Formulation',
          manufacturer: 'Commercial Healthcare Manufacturer'
        })),
        generalMedicalRole: m.generalMedicalRole || '',
        dosageGuideline: m.dosageGuideline || 'Take as advised by medical doctor.',
        safetyNote: m.safetyNote || 'Consult qualified physician prior to use.',
        source: m.source || 'HKare Reference Dataset',
        affiliateLinks: generateAffiliateLinks(m.activeIngredient, primaryBrand),
        isFeatured: true,
        updatedAt: new Date().toISOString()
      });
    });
  }

  // Merge in any extra detailed salts from CLINICAL_DATA if not present
  if (clinical && clinical.salts) {
    Object.entries(clinical.salts).forEach(([saltKey, saltObj]) => {
      const id = 'salt_' + saltKey;
      if (!medicineMap.has(id) && !medicineMap.has(saltKey) && !medicineMap.has('hkare_' + saltKey)) {
        const brandsList = (saltObj.brands || []).map(b => ({
          name: typeof b === 'string' ? b : b.name,
          strength: b.strength || 'Standard',
          manufacturer: b.company || 'Commercial Pharma'
        }));
        const primaryBrand = brandsList[0]?.name || saltObj.saltName;

        medicineMap.set(id, {
          id,
          slug: saltKey,
          activeIngredient: saltObj.saltName,
          saltName: saltObj.saltName,
          medicineClass: saltObj.chemicalClass || saltObj.allergyClass || 'Clinical Salt',
          condition: (saltObj.indications && saltObj.indications[0]) || 'Clinical Indication',
          conditionId: saltObj.categorySlug || 'general',
          category: saltObj.therapeuticCategory || 'General',
          categorySlug: saltObj.categorySlug || 'general',
          brandNames: brandsList.map(b => b.name).join(', '),
          primaryBrand: primaryBrand,
          brandsList: brandsList,
          generalMedicalRole: saltObj.mechanism || '',
          dosageGuideline: saltObj.adultDosing?.standardSingleDose || 'Consult posology monograph.',
          safetyNote: saltObj.pregnancyCaution || (saltObj.contraindications && saltObj.contraindications[0]) || 'Use under medical supervision.',
          source: saltObj.source?.sourceName || 'WHO Model Formulary (EML 2023)',
          affiliateLinks: generateAffiliateLinks(saltObj.saltName, primaryBrand),
          isFeatured: false,
          updatedAt: new Date().toISOString()
        });
      }
    });
  }

  const medicineList = Array.from(medicineMap.values());
  console.log(`✓ Prepared ${medicineList.length} comprehensive medicine records.`);
  db.medicines.setAll(medicineList);

  // 4. Seed Seed Hospitals (Curated starting list of major verified facilities across India)
  const seedHospitals = [
    {
      id: 'hosp_aiims_delhi',
      name: 'All India Institute of Medical Sciences (AIIMS)',
      city: 'New Delhi',
      state: 'Delhi',
      address: 'Sri Aurobindo Marg, Ansari Nagar, New Delhi 110029',
      phone: '+91-11-26588500',
      emergencyNumber: '102 / +91-11-26588700',
      specialties: ['Cardiology', 'Neurology', 'Oncology', 'Pediatrics', 'Emergency Care', 'Gastroenterology'],
      rating: 4.9,
      bedCount: 2478,
      mapsUrl: 'https://maps.google.com/?q=AIIMS+New+Delhi',
      verified: true
    },
    {
      id: 'hosp_apollo_delhi',
      name: 'Indraprastha Apollo Hospitals',
      city: 'New Delhi',
      state: 'Delhi',
      address: 'Sarita Vihar, Delhi Mathura Road, New Delhi 110076',
      phone: '+91-11-26925858',
      emergencyNumber: '1066',
      specialties: ['Cardiology', 'Organ Transplant', 'Orthopedics', 'Critical Care', 'Robotic Surgery'],
      rating: 4.8,
      bedCount: 710,
      mapsUrl: 'https://maps.google.com/?q=Indraprastha+Apollo+Hospitals+Delhi',
      verified: true
    },
    {
      id: 'hosp_fortis_gurugram',
      name: 'Fortis Memorial Research Institute (FMRI)',
      city: 'Gurugram',
      state: 'Haryana',
      address: 'Sector 44, Opposite HUDA City Centre Metro Station, Gurugram 122002',
      phone: '+91-124-7160000',
      emergencyNumber: '+91-124-7160000',
      specialties: ['Neurosciences', 'Cardiac Sciences', 'Oncology', 'Renal Sciences'],
      rating: 4.7,
      bedCount: 1000,
      mapsUrl: 'https://maps.google.com/?q=Fortis+Memorial+Research+Institute+Gurugram',
      verified: true
    },
    {
      id: 'hosp_medanta_gurugram',
      name: 'Medanta - The Medicity',
      city: 'Gurugram',
      state: 'Haryana',
      address: 'CH Bakhtawar Singh Road, Sector 38, Gurugram 122001',
      phone: '+91-124-4141414',
      emergencyNumber: '1068',
      specialties: ['Heart Institute', 'Neurosciences', 'Liver Transplant', 'Bone & Joint'],
      rating: 4.8,
      bedCount: 1250,
      mapsUrl: 'https://maps.google.com/?q=Medanta+The+Medicity+Gurugram',
      verified: true
    },
    {
      id: 'hosp_max_saket',
      name: 'Max Super Speciality Hospital, Saket',
      city: 'New Delhi',
      state: 'Delhi',
      address: '1, 2, Press Enclave Marg, Saket Institutional Area, Saket, New Delhi 110017',
      phone: '+91-11-26515050',
      emergencyNumber: '+91-11-40554055',
      specialties: ['Cardiac Surgery', 'Cancer Care', 'Neurosurgery', 'Pediatrics'],
      rating: 4.7,
      bedCount: 530,
      mapsUrl: 'https://maps.google.com/?q=Max+Hospital+Saket',
      verified: true
    }
  ];
  db.hospitals.setAll(seedHospitals);
  console.log(`✓ Seeded ${seedHospitals.length} verified hospitals.`);

  // 5. Seed Doctors (Curated verified medical specialists)
  const seedDoctors = [
    {
      id: 'doc_sharma_cardio',
      name: 'Dr. Himanshu Sharma (Chief Medical Lead)',
      specialty: 'Internal Medicine & Clinical Pharmacology',
      qualification: 'MBBS, MD, FICR',
      experienceYears: 14,
      hospital: 'AIIMS & Himkiv Health Network',
      city: 'New Delhi',
      consultationFee: '₹1,000',
      phone: '+91-11-26588500',
      availableDays: 'Monday - Friday',
      availableTimings: '09:00 AM - 02:00 PM',
      appointmentBookingUrl: 'https://himkiv.org/appointments',
      verified: true
    },
    {
      id: 'doc_verma_gastro',
      name: 'Dr. Rajesh Verma',
      specialty: 'Gastroenterology & Hepatology',
      qualification: 'MBBS, MD, DM (Gastroenterology)',
      experienceYears: 18,
      hospital: 'Indraprastha Apollo Hospitals',
      city: 'New Delhi',
      consultationFee: '₹1,500',
      phone: '+91-11-26925858',
      availableDays: 'Tuesday, Thursday, Saturday',
      availableTimings: '10:00 AM - 04:00 PM',
      appointmentBookingUrl: 'https://www.apollohospitals.com',
      verified: true
    },
    {
      id: 'doc_gupta_pedia',
      name: 'Dr. Ananya Gupta',
      specialty: 'Pediatrics & Neonatology',
      qualification: 'MBBS, DCH, DNB (Pediatrics)',
      experienceYears: 12,
      hospital: 'Fortis Memorial Research Institute',
      city: 'Gurugram',
      consultationFee: '₹1,200',
      phone: '+91-124-7160000',
      availableDays: 'Monday - Saturday',
      availableTimings: '11:00 AM - 05:00 PM',
      appointmentBookingUrl: 'https://www.fortishealthcare.com',
      verified: true
    },
    {
      id: 'doc_patel_pulmo',
      name: 'Dr. Vikram Patel',
      specialty: 'Pulmonology & Critical Care',
      qualification: 'MBBS, MD (Pulmonary Medicine)',
      experienceYears: 15,
      hospital: 'Max Super Speciality Hospital',
      city: 'New Delhi',
      consultationFee: '₹1,400',
      phone: '+91-11-26515050',
      availableDays: 'Monday, Wednesday, Friday',
      availableTimings: '01:00 PM - 06:00 PM',
      appointmentBookingUrl: 'https://www.maxhealthcare.in',
      verified: true
    }
  ];
  db.doctors.setAll(seedDoctors);
  console.log(`✓ Seeded ${seedDoctors.length} verified doctors.`);

  console.log('🎉 Database Seeding Complete!');
  console.log(`Total Medicines: ${db.medicines.count()}`);
  console.log(`Total Diseases: ${db.diseases.count()}`);
  console.log(`Total Hospitals: ${db.hospitals.count()}`);
  console.log(`Total Doctors: ${db.doctors.count()}`);
}

runSeed().catch(err => {
  console.error('❌ Seeding error:', err);
  process.exit(1);
});
