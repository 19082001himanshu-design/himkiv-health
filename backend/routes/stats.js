const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /api/stats
router.get('/', (req, res) => {
  const medicines = db.medicines.getAll();
  const diseases = db.diseases.getAll();
  const hospitals = db.hospitals.getAll();
  const doctors = db.doctors.getAll();

  let affiliateLinkCount = 0;
  medicines.forEach(m => {
    if (Array.isArray(m.affiliateLinks)) {
      affiliateLinkCount += m.affiliateLinks.length;
    }
  });

  res.json({
    success: true,
    data: {
      totalMedicines: medicines.length,
      totalDiseases: diseases.length,
      totalAffiliateLinks: affiliateLinkCount,
      totalHospitals: hospitals.length,
      totalDoctors: doctors.length,
      lastSync: new Date().toISOString(),
      adminUser: 'Himanshu Sharma',
      systemHealth: 'Optimal'
    }
  });
});

module.exports = router;
