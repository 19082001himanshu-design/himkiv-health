const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /api/doctors
router.get('/', (req, res) => {
  const { specialty, city, q } = req.query;
  let doctors = db.doctors.getAll();

  if (specialty) {
    const sLower = specialty.toLowerCase();
    doctors = doctors.filter(d => d.specialty && d.specialty.toLowerCase().includes(sLower));
  }

  if (city) {
    const cLower = city.toLowerCase();
    doctors = doctors.filter(d => d.city && d.city.toLowerCase().includes(cLower));
  }

  if (q) {
    const qLower = q.toLowerCase();
    doctors = doctors.filter(d => 
      (d.name && d.name.toLowerCase().includes(qLower)) ||
      (d.specialty && d.specialty.toLowerCase().includes(qLower)) ||
      (d.hospital && d.hospital.toLowerCase().includes(qLower))
    );
  }

  res.json({
    success: true,
    total: doctors.length,
    data: doctors
  });
});

// GET /api/doctors/:id
router.get('/:id', (req, res) => {
  const doc = db.doctors.getById(req.params.id);
  if (!doc) {
    return res.status(404).json({ success: false, error: 'Doctor not found' });
  }
  res.json({ success: true, data: doc });
});

// POST /api/doctors
router.post('/', (req, res) => {
  const {
    name,
    specialty,
    qualification,
    experienceYears,
    hospital,
    city,
    consultationFee,
    phone,
    availableDays,
    availableTimings,
    appointmentBookingUrl
  } = req.body;

  if (!name || !specialty) {
    return res.status(400).json({ success: false, error: 'Doctor name and specialty are required.' });
  }

  const id = 'doc_' + name.toLowerCase().replace(/[^a-z0-9]+/g, '_').substr(0, 20) + '_' + Date.now().toString(36).substr(0, 4);

  const newDoc = {
    id,
    name: name.trim(),
    specialty: specialty.trim(),
    qualification: qualification || 'MBBS, MD',
    experienceYears: parseInt(experienceYears) || 5,
    hospital: hospital || 'Himkiv Partner Hospital',
    city: city || 'New Delhi',
    consultationFee: consultationFee || '₹800',
    phone: phone || '',
    availableDays: availableDays || 'Monday - Saturday',
    availableTimings: availableTimings || '10:00 AM - 02:00 PM',
    appointmentBookingUrl: appointmentBookingUrl || '',
    verified: true
  };

  const saved = db.doctors.insert(newDoc);
  res.status(201).json({ success: true, message: 'Doctor added successfully', data: saved });
});

// PUT /api/doctors/:id
router.put('/:id', (req, res) => {
  const existing = db.doctors.getById(req.params.id);
  if (!existing) {
    return res.status(404).json({ success: false, error: 'Doctor not found' });
  }

  const updated = db.doctors.update(req.params.id, req.body);
  res.json({ success: true, message: 'Doctor updated successfully', data: updated });
});

// DELETE /api/doctors/:id
router.delete('/:id', (req, res) => {
  const removed = db.doctors.delete(req.params.id);
  if (!removed) {
    return res.status(404).json({ success: false, error: 'Doctor not found' });
  }
  res.json({ success: true, message: 'Doctor removed successfully', data: removed });
});

module.exports = router;
