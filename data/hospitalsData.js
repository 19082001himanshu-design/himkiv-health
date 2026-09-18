/**
 * HIMKIV Health & MedGuide - Verified Hospitals Dataset
 * Synchronized with Himkiv Backend & Admin Console
 * Updated by: Himanshu Sharma (Founder & Administrator)
 * Sync Date: 2026-09-18T09:20:23.556Z
 */

const HOSPITALS_DATA = [
  {
    "id": "hosp_aiims_delhi",
    "name": "All India Institute of Medical Sciences (AIIMS)",
    "city": "New Delhi",
    "state": "Delhi",
    "address": "Sri Aurobindo Marg, Ansari Nagar, New Delhi 110029",
    "phone": "+91-11-26588500",
    "emergencyNumber": "102 / +91-11-26588700",
    "specialties": [
      "Cardiology",
      "Neurology",
      "Oncology",
      "Pediatrics",
      "Emergency Care",
      "Gastroenterology"
    ],
    "rating": 4.9,
    "bedCount": 2478,
    "mapsUrl": "https://maps.google.com/?q=AIIMS+New+Delhi",
    "verified": true
  },
  {
    "id": "hosp_apollo_delhi",
    "name": "Indraprastha Apollo Hospitals",
    "city": "New Delhi",
    "state": "Delhi",
    "address": "Sarita Vihar, Delhi Mathura Road, New Delhi 110076",
    "phone": "+91-11-26925858",
    "emergencyNumber": "1066",
    "specialties": [
      "Cardiology",
      "Organ Transplant",
      "Orthopedics",
      "Critical Care",
      "Robotic Surgery"
    ],
    "rating": 4.8,
    "bedCount": 710,
    "mapsUrl": "https://maps.google.com/?q=Indraprastha+Apollo+Hospitals+Delhi",
    "verified": true
  },
  {
    "id": "hosp_fortis_gurugram",
    "name": "Fortis Memorial Research Institute (FMRI)",
    "city": "Gurugram",
    "state": "Haryana",
    "address": "Sector 44, Opposite HUDA City Centre Metro Station, Gurugram 122002",
    "phone": "+91-124-7160000",
    "emergencyNumber": "+91-124-7160000",
    "specialties": [
      "Neurosciences",
      "Cardiac Sciences",
      "Oncology",
      "Renal Sciences"
    ],
    "rating": 4.7,
    "bedCount": 1000,
    "mapsUrl": "https://maps.google.com/?q=Fortis+Memorial+Research+Institute+Gurugram",
    "verified": true
  },
  {
    "id": "hosp_medanta_gurugram",
    "name": "Medanta - The Medicity",
    "city": "Gurugram",
    "state": "Haryana",
    "address": "CH Bakhtawar Singh Road, Sector 38, Gurugram 122001",
    "phone": "+91-124-4141414",
    "emergencyNumber": "1068",
    "specialties": [
      "Heart Institute",
      "Neurosciences",
      "Liver Transplant",
      "Bone & Joint"
    ],
    "rating": 4.8,
    "bedCount": 1250,
    "mapsUrl": "https://maps.google.com/?q=Medanta+The+Medicity+Gurugram",
    "verified": true
  },
  {
    "id": "hosp_max_saket",
    "name": "Max Super Speciality Hospital, Saket",
    "city": "New Delhi",
    "state": "Delhi",
    "address": "1, 2, Press Enclave Marg, Saket Institutional Area, Saket, New Delhi 110017",
    "phone": "+91-11-26515050",
    "emergencyNumber": "+91-11-40554055",
    "specialties": [
      "Cardiac Surgery",
      "Cancer Care",
      "Neurosurgery",
      "Pediatrics"
    ],
    "rating": 4.7,
    "bedCount": 530,
    "mapsUrl": "https://maps.google.com/?q=Max+Hospital+Saket",
    "verified": true
  },
  {
    "id": "hosp_shalby_jaipur",
    "name": "Shalby Multi-Specialty Hospital",
    "city": "Jaipur",
    "state": "Rajasthan",
    "address": "Sector 3, Chitrakoot, Vaishali Nagar, Jaipur, Rajasthan 302021",
    "phone": "0141-7123889",
    "emergencyNumber": "0141-7123889",
    "specialties": [
      "Cancer",
      "Cardiology",
      "Emergency Care",
      "Gastroenterology",
      "General Surgery",
      "Neurology",
      "Nephrology",
      "Orthopedics"
    ],
    "rating": 4.7,
    "bedCount": 237,
    "mapsUrl": "https://maps.google.com/?q=Shalby+Multi-Specialty+Hospital+Jaipur",
    "verified": true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = HOSPITALS_DATA;
}
