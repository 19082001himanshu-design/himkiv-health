const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Helper to sanitize affiliate links
function formatAffiliateLinks(links, saltName, brandName) {
  if (!Array.isArray(links) || links.length === 0) {
    const q = encodeURIComponent((brandName || saltName || '').trim());
    return [
      {
        id: 'aff_1mg_' + Date.now(),
        platform: 'Tata 1mg',
        url: `https://www.1mg.com/search/all?name=${q}`,
        priceEstimate: 'Best Price',
        discount: '15% OFF',
        verified: true
      },
      {
        id: 'aff_apollo_' + Date.now(),
        platform: 'Apollo Pharmacy',
        url: `https://www.apollopharmacy.in/search-medicines/${q}`,
        priceEstimate: 'Verified Authentic',
        discount: '10% OFF',
        verified: true
      }
    ];
  }
  return links;
}

// GET /api/medicines - List with search & category filters
router.get('/', (req, res) => {
  const { q, category, condition, page, limit } = req.query;
  let meds = db.medicines.getAll();

  if (category && category !== 'all') {
    const catLower = category.toLowerCase();
    meds = meds.filter(m => (m.categorySlug && m.categorySlug.toLowerCase() === catLower) ||
                            (m.category && m.category.toLowerCase().includes(catLower)));
  }

  if (condition) {
    const condLower = condition.toLowerCase();
    meds = meds.filter(m => (m.conditionId && m.conditionId.toLowerCase().includes(condLower)) ||
                            (m.condition && m.condition.toLowerCase().includes(condLower)));
  }

  if (q) {
    const searchLower = q.toLowerCase().trim();
    meds = meds.filter(m => 
      (m.activeIngredient && m.activeIngredient.toLowerCase().includes(searchLower)) ||
      (m.brandNames && m.brandNames.toLowerCase().includes(searchLower)) ||
      (m.condition && m.condition.toLowerCase().includes(searchLower)) ||
      (m.medicineClass && m.medicineClass.toLowerCase().includes(searchLower))
    );
  }

  const total = meds.length;

  if (page && limit) {
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 20;
    const start = (pageNum - 1) * limitNum;
    meds = meds.slice(start, start + limitNum);
    return res.json({
      success: true,
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
      data: meds
    });
  }

  res.json({
    success: true,
    total,
    data: meds
  });
});

// GET /api/medicines/:id
router.get('/:id', (req, res) => {
  const med = db.medicines.getById(req.params.id);
  if (!med) {
    return res.status(404).json({ success: false, error: 'Medicine not found' });
  }
  res.json({ success: true, data: med });
});

// POST /api/medicines - Create a new medicine
router.post('/', (req, res) => {
  const {
    activeIngredient,
    medicineClass,
    condition,
    conditionId,
    category,
    categorySlug,
    brandNames,
    dosageGuideline,
    safetyNote,
    generalMedicalRole,
    affiliateLinks,
    source
  } = req.body;

  if (!activeIngredient) {
    return res.status(400).json({ success: false, error: 'Active ingredient (Salt Name) is required.' });
  }

  // Generate clean ID & slug
  const slug = activeIngredient.toLowerCase().replace(/[^a-z0-9]+/g, '_');
  const id = 'hk_' + slug + '_' + Date.now().toString(36).substr(0, 4);

  const brandsArr = (brandNames || '').split(',').map(b => b.trim()).filter(Boolean);
  const primaryBrand = brandsArr[0] || activeIngredient;

  const newMed = {
    id,
    slug,
    activeIngredient: activeIngredient.trim(),
    saltName: activeIngredient.trim(),
    medicineClass: medicineClass || 'General Pharmaceutical',
    condition: condition || 'General Clinical Care',
    conditionId: conditionId || (condition ? condition.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'general'),
    category: category || 'General',
    categorySlug: categorySlug || (category ? category.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'general'),
    brandNames: brandNames || '',
    primaryBrand,
    brandsList: brandsArr.map(b => ({
      name: b,
      strength: 'Standard Dose',
      manufacturer: 'Commercial Healthcare Manufacturer'
    })),
    generalMedicalRole: generalMedicalRole || '',
    dosageGuideline: dosageGuideline || 'Take as advised by medical doctor.',
    safetyNote: safetyNote || 'Consult qualified physician before administering.',
    source: source || 'Himkiv Clinical Formulary',
    affiliateLinks: formatAffiliateLinks(affiliateLinks, activeIngredient, primaryBrand),
    isFeatured: true
  };

  const saved = db.medicines.insert(newMed);
  res.status(201).json({ success: true, message: 'Medicine added successfully', data: saved });
});

// PUT /api/medicines/:id - Update medicine
router.put('/:id', (req, res) => {
  const existing = db.medicines.getById(req.params.id);
  if (!existing) {
    return res.status(404).json({ success: false, error: 'Medicine not found' });
  }

  const updates = { ...req.body };
  if (updates.brandNames) {
    const brandsArr = updates.brandNames.split(',').map(b => b.trim()).filter(Boolean);
    updates.primaryBrand = brandsArr[0] || existing.primaryBrand || updates.activeIngredient || existing.activeIngredient;
    updates.brandsList = brandsArr.map(b => ({
      name: b,
      strength: 'Standard Dose',
      manufacturer: 'Commercial Healthcare Manufacturer'
    }));
  }

  const updated = db.medicines.update(req.params.id, updates);
  res.json({ success: true, message: 'Medicine updated successfully', data: updated });
});

// DELETE /api/medicines/:id
router.delete('/:id', (req, res) => {
  const removed = db.medicines.delete(req.params.id);
  if (!removed) {
    return res.status(404).json({ success: false, error: 'Medicine not found' });
  }
  res.json({ success: true, message: 'Medicine deleted successfully', data: removed });
});

// POST /api/medicines/:id/affiliate - Add or update affiliate link for a medicine
router.post('/:id/affiliate', (req, res) => {
  const med = db.medicines.getById(req.params.id);
  if (!med) {
    return res.status(404).json({ success: false, error: 'Medicine not found' });
  }

  const { platform, url, priceEstimate, discount } = req.body;
  if (!platform || !url) {
    return res.status(400).json({ success: false, error: 'Platform and URL are required' });
  }

  const affiliateLinks = Array.isArray(med.affiliateLinks) ? [...med.affiliateLinks] : [];
  const existingIdx = affiliateLinks.findIndex(a => a.platform.toLowerCase() === platform.toLowerCase());

  const newLink = {
    id: existingIdx !== -1 ? affiliateLinks[existingIdx].id : 'aff_' + Date.now(),
    platform,
    url,
    priceEstimate: priceEstimate || 'Best Price',
    discount: discount || 'Available',
    verified: true,
    updatedAt: new Date().toISOString()
  };

  if (existingIdx !== -1) {
    affiliateLinks[existingIdx] = newLink;
  } else {
    affiliateLinks.push(newLink);
  }

  const updated = db.medicines.update(med.id, { affiliateLinks });
  res.json({ success: true, message: 'Affiliate link updated', data: updated });
});

module.exports = router;
