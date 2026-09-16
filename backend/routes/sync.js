const express = require('express');
const router = express.Router();
const syncService = require('../services/syncService');

// POST /api/sync/export-static
router.post('/export-static', (req, res) => {
  try {
    const result = syncService.syncToStatic();
    res.json({
      success: true,
      message: 'Successfully exported all medicines, diseases, and affiliate links to static frontend datasets!',
      details: result
    });
  } catch (err) {
    console.error('Static export error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
