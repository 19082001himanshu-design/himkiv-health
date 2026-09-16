/**
 * Himkiv Sync Service
 * Exports the latest database state into data/hkareData.js and data/medicineData.js
 * so that GitHub Pages and static site visitors immediately see all updates.
 */

const fs = require('fs');
const path = require('path');
const db = require('../config/db');

const rootDir = path.join(__dirname, '..', '..');
const hkarePath = path.join(rootDir, 'data', 'hkareData.js');

function syncToStatic() {
  const allMeds = db.medicines.getAll();
  const allDiseases = db.diseases.getAll();

  // 1. Read existing categories if available
  let existingCategories = [];
  try {
    if (fs.existsSync(hkarePath)) {
      delete require.cache[require.resolve(hkarePath)];
      const currentHkare = require(hkarePath);
      existingCategories = currentHkare.categories || [];
    }
  } catch (e) {
    console.warn('Could not read existing categories, using defaults.');
  }

  // Format medicines for HKARE_DATA
  const formattedMedicines = allMeds.map(m => ({
    id: m.id,
    activeIngredient: m.activeIngredient || m.saltName,
    medicineClass: m.medicineClass || '',
    condition: m.condition || '',
    conditionId: m.conditionId || '',
    conditionIds: [m.conditionId || '', m.categorySlug || ''].filter(Boolean),
    category: m.category || '',
    categorySlug: m.categorySlug || '',
    generalMedicalRole: m.generalMedicalRole || '',
    dosageGuideline: m.dosageGuideline || '',
    brandNames: m.brandNames || (m.brandsList ? m.brandsList.map(b => b.name).join(', ') : ''),
    safetyNote: m.safetyNote || '',
    source: m.source || 'Himkiv Clinical Network',
    sourceType: 'Himkiv Database Record',
    affiliateLinks: m.affiliateLinks || []
  }));

  // Format conditions for HKARE_DATA
  const formattedConditions = allDiseases.map(d => ({
    id: d.id,
    name: d.name,
    category: d.category || 'General',
    categorySlug: d.categorySlug || 'general',
    symptoms: d.symptoms || [],
    icd11Code: d.icd11Code || 'WHO-ICD-11',
    description: d.description || '',
    redFlags: d.redFlags || [],
    homeCare: d.homeCare || '',
    recommendedMedicines: d.recommendedMedicines || []
  }));

  const payload = {
    meta: {
      fileName: 'HKare_Common_Disease_Medicine_Reference(1).csv',
      sourceType: 'Himkiv Database & Clinical Formulary',
      totalMedicines: formattedMedicines.length,
      uniqueConditions: formattedConditions.length,
      lastSync: new Date().toISOString(),
      updatedBy: 'Himanshu Sharma (Admin)',
      standard: 'WHO ICD-11 MMS (2026 Release)'
    },
    categories: existingCategories.length > 0 ? existingCategories : [
      { id: 'all', name: 'All Conditions', icon: 'layers' },
      { id: 'general', name: 'Fever & General', icon: 'thermometer' },
      { id: 'respiratory', name: 'Respiratory & Throat', icon: 'wind' },
      { id: 'gastrointestinal', name: 'Gastrointestinal & Abdominal', icon: 'activity' }
    ],
    conditions: formattedConditions,
    medicines: formattedMedicines
  };

  const fileContent = `/**
 * HIMKIV Health & MedGuide - Synchronized Clinical Reference Dataset
 * Automatically exported from Himkiv Admin Management System
 * Updated by: Himanshu Sharma (Founder & Administrator)
 * Sync Date: ${new Date().toISOString()}
 */

const HKARE_DATA = ${JSON.stringify(payload, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = HKARE_DATA;
}
`;

  fs.writeFileSync(hkarePath, fileContent, 'utf8');

  return {
    success: true,
    totalMedicines: formattedMedicines.length,
    totalConditions: formattedConditions.length,
    timestamp: new Date().toISOString()
  };
}

module.exports = {
  syncToStatic
};
