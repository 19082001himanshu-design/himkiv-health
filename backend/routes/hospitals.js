const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /api/hospitals
router.get('/', (req, res) => {
  const { city, specialty, q } = req.query;
  let hospitals = db.hospitals.getAll();

  if (city) {
    const cLower = city.toLowerCase();
    hospitals = hospitals.filter(h => h.city && h.city.toLowerCase().includes(cLower));
  }

  if (specialty) {
    const sLower = specialty.toLowerCase();
    hospitals = hospitals.filter(h => h.specialties && h.specialties.some(s => s.toLowerCase().includes(sLower)));
  }

  if (q) {
    const qLower = q.toLowerCase();
    hospitals = hospitals.filter(h => 
      (h.name && h.name.toLowerCase().includes(qLower)) ||
      (h.city && h.city.toLowerCase().includes(qLower)) ||
      (h.address && h.address.toLowerCase().includes(qLower))
    );
  }

  res.json({
    success: true,
    total: hospitals.length,
    data: hospitals
  });
});

// GET /api/hospitals/:id
router.get('/:id', (req, res) => {
  const hospital = db.hospitals.getById(req.params.id);
  if (!hospital) {
    return res.status(404).json({ success: false, error: 'Hospital not found' });
  }
  res.json({ success: true, data: hospital });
});

// POST /api/hospitals
router.post('/', (req, res) => {
  const {
    name,
    city,
    state,
    address,
    phone,
    emergencyNumber,
    specialties,
    rating,
    bedCount,
    mapsUrl
  } = req.body;

  if (!name || !city) {
    return res.status(400).json({ success: false, error: 'Hospital name and city are required.' });
  }

  const id = 'hosp_' + name.toLowerCase().replace(/[^a-z0-9]+/g, '_').substr(0, 20) + '_' + Date.now().toString(36).substr(0, 4);
  const specsArr = Array.isArray(specialties) ? specialties : (specialties || '').split(',').map(s => s.trim()).filter(Boolean);

  const newHospital = {
    id,
    name: name.trim(),
    city: city.trim(),
    state: state || 'India',
    address: address || '',
    phone: phone || '',
    emergencyNumber: emergencyNumber || '102 / 112',
    specialties: specsArr,
    rating: parseFloat(rating) || 4.5,
    bedCount: parseInt(bedCount) || 200,
    mapsUrl: mapsUrl || `https://maps.google.com/?q=${encodeURIComponent(name + ' ' + city)}`,
    verified: true
  };

  const saved = db.hospitals.insert(newHospital);
  res.status(201).json({ success: true, message: 'Hospital added successfully', data: saved });
});

// PUT /api/hospitals/:id
router.put('/:id', (req, res) => {
  const existing = db.hospitals.getById(req.params.id);
  if (!existing) {
    return res.status(404).json({ success: false, error: 'Hospital not found' });
  }

  const updates = { ...req.body };
  if (typeof updates.specialties === 'string') {
    updates.specialties = updates.specialties.split(',').map(s => s.trim()).filter(Boolean);
  }

  const updated = db.hospitals.update(req.params.id, updates);
  res.json({ success: true, message: 'Hospital updated successfully', data: updated });
});

// DELETE /api/hospitals/:id
router.delete('/:id', (req, res) => {
  const removed = db.hospitals.delete(req.params.id);
  if (!removed) {
    return res.status(404).json({ success: false, error: 'Hospital not found' });
  }
  res.json({ success: true, message: 'Hospital removed successfully', data: removed });
});

module.exports = router;
