/**
 * HIMKIV Healthcare Platform - Backend REST API & Admin Management Server
 * Founder & Creator: Himanshu Sharma
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth');
const medicineRoutes = require('./routes/medicines');
const diseaseRoutes = require('./routes/diseases');
const hospitalRoutes = require('./routes/hospitals');
const doctorRoutes = require('./routes/doctors');
const syncRoutes = require('./routes/sync');
const statsRoutes = require('./routes/stats');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve Admin Panel statically
const adminDir = path.join(__dirname, '..', 'admin');
app.use('/admin', express.static(adminDir));

// Serve Root Frontend statically for easy local browsing
const rootDir = path.join(__dirname, '..');
app.use(express.static(rootDir));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/medicines', medicineRoutes);
app.use('/api/diseases', diseaseRoutes);
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/sync', syncRoutes);
app.use('/api/stats', statsRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'Himkiv Healthcare Platform',
    founder: 'Himanshu Sharma',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Admin route - serves root admin.html
app.get(['/admin', '/admin/', '/admin.html'], (req, res) => {
  res.sendFile(path.join(rootDir, 'admin.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log('====================================================');
  console.log('  HIMKIV HEALTHCARE - BACKEND REST API SERVER       ');
  console.log('  Founder & Administrator: Himanshu Sharma         ');
  console.log('====================================================');
  console.log(`  ✓ API Running on:       http://localhost:${PORT}/api/health`);
  console.log(`  ✓ Admin Dashboard at:   http://localhost:${PORT}/admin/`);
  console.log(`  ✓ Live Website at:      http://localhost:${PORT}/index.html`);
  console.log('====================================================');
});
