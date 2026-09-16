const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /api/diseases
router.get('/', (req, res) => {
  const { q, category } = req.query;
  let diseases = db.diseases.getAll();

  if (category && category !== 'all') {
    const catLower = category.toLowerCase();
    diseases = diseases.filter(d => (d.categorySlug && d.categorySlug.toLowerCase() === catLower) ||
                                    (d.category && d.category.toLowerCase().includes(catLower)));
  }

  if (q) {
    const searchLower = q.toLowerCase().trim();
    diseases = diseases.filter(d => 
      (d.name && d.name.toLowerCase().includes(searchLower)) ||
      (d.description && d.description.toLowerCase().includes(searchLower)) ||
      (d.symptoms && Array.isArray(d.symptoms) && d.symptoms.some(s => s.toLowerCase().includes(searchLower)))
    );
  }

  res.json({
    success: true,
    total: diseases.length,
    data: diseases
  });
});

// GET /api/diseases/:id
router.get('/:id', (req, res) => {
  const disease = db.diseases.getById(req.params.id);
  if (!disease) {
    return res.status(404).json({ success: false, error: 'Disease not found' });
  }
  res.json({ success: true, data: disease });
});

// POST /api/diseases
router.post('/', (req, res) => {
  const {
    name,
    category,
    categorySlug,
    symptoms,
    icd11Code,
    description,
    redFlags,
    homeCare,
    recommendedMedicines
  } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, error: 'Disease / Condition name is required.' });
  }

  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const symptomsArr = Array.isArray(symptoms) ? symptoms : (symptoms || '').split(',').map(s => s.trim()).filter(Boolean);
  const redFlagsArr = Array.isArray(redFlags) ? redFlags : (redFlags || '').split(',').map(s => s.trim()).filter(Boolean);
  const medsArr = Array.isArray(recommendedMedicines) ? recommendedMedicines : (recommendedMedicines || '').split(',').map(s => s.trim()).filter(Boolean);

  const newDisease = {
    id,
    name: name.trim(),
    category: category || 'General',
    categorySlug: categorySlug || (category ? category.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'general'),
    symptoms: symptomsArr,
    icd11Code: icd11Code || 'WHO-ICD-11',
    description: description || `Clinical monograph and health guidance for ${name}.`,
    redFlags: redFlagsArr.length > 0 ? redFlagsArr : ['Severe persistent pain', 'High fever > 103°F', 'Difficulty breathing'],
    homeCare: homeCare || 'Rest, oral hydration, and clinical monitoring.',
    recommendedMedicines: medsArr
  };

  const saved = db.diseases.insert(newDisease);
  res.status(201).json({ success: true, message: 'Condition added successfully', data: saved });
});

// PUT /api/diseases/:id
router.put('/:id', (req, res) => {
  const existing = db.diseases.getById(req.params.id);
  if (!existing) {
    return res.status(404).json({ success: false, error: 'Disease not found' });
  }

  const updates = { ...req.body };
  if (typeof updates.symptoms === 'string') {
    updates.symptoms = updates.symptoms.split(',').map(s => s.trim()).filter(Boolean);
  }
  if (typeof updates.redFlags === 'string') {
    updates.redFlags = updates.redFlags.split(',').map(s => s.trim()).filter(Boolean);
  }
  if (typeof updates.recommendedMedicines === 'string') {
    updates.recommendedMedicines = updates.recommendedMedicines.split(',').map(s => s.trim()).filter(Boolean);
  }

  const updated = db.diseases.update(req.params.id, updates);
  res.json({ success: true, message: 'Disease updated successfully', data: updated });
});

// DELETE /api/diseases/:id
router.delete('/:id', (req, res) => {
  const removed = db.diseases.delete(req.params.id);
  if (!removed) {
    return res.status(404).json({ success: false, error: 'Disease not found' });
  }
  res.json({ success: true, message: 'Disease deleted successfully', data: removed });
});

module.exports = router;
