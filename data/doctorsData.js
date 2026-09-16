/**
 * HIMKIV Health & MedGuide - Verified Doctors Dataset
 * Synchronized with Himkiv Backend & Admin Console
 */

const DOCTORS_DATA = [
  {
    "id": "doc_sharma_cardio",
    "name": "Dr. Himanshu Sharma (Chief Medical Lead)",
    "specialty": "Internal Medicine & Clinical Pharmacology",
    "qualification": "MBBS, MD, FICR",
    "experienceYears": 14,
    "hospital": "AIIMS & Himkiv Health Network",
    "city": "New Delhi",
    "consultationFee": "₹1,000",
    "phone": "+91-11-26588500",
    "availableDays": "Monday - Friday",
    "availableTimings": "09:00 AM - 02:00 PM",
    "appointmentBookingUrl": "https://himkiv.org/appointments",
    "verified": true
  },
  {
    "id": "doc_verma_gastro",
    "name": "Dr. Rajesh Verma",
    "specialty": "Gastroenterology & Hepatology",
    "qualification": "MBBS, MD, DM (Gastroenterology)",
    "experienceYears": 18,
    "hospital": "Indraprastha Apollo Hospitals",
    "city": "New Delhi",
    "consultationFee": "₹1,500",
    "phone": "+91-11-26925858",
    "availableDays": "Tuesday, Thursday, Saturday",
    "availableTimings": "10:00 AM - 04:00 PM",
    "appointmentBookingUrl": "https://www.apollohospitals.com",
    "verified": true
  },
  {
    "id": "doc_gupta_pedia",
    "name": "Dr. Ananya Gupta",
    "specialty": "Pediatrics & Neonatology",
    "qualification": "MBBS, DCH, DNB (Pediatrics)",
    "experienceYears": 12,
    "hospital": "Fortis Memorial Research Institute",
    "city": "Gurugram",
    "consultationFee": "₹1,200",
    "phone": "+91-124-7160000",
    "availableDays": "Monday - Saturday",
    "availableTimings": "11:00 AM - 05:00 PM",
    "appointmentBookingUrl": "https://www.fortishealthcare.com",
    "verified": true
  },
  {
    "id": "doc_patel_pulmo",
    "name": "Dr. Vikram Patel",
    "specialty": "Pulmonology & Critical Care",
    "qualification": "MBBS, MD (Pulmonary Medicine)",
    "experienceYears": 15,
    "hospital": "Max Super Speciality Hospital",
    "city": "New Delhi",
    "consultationFee": "₹1,400",
    "phone": "+91-11-26515050",
    "availableDays": "Monday, Wednesday, Friday",
    "availableTimings": "01:00 PM - 06:00 PM",
    "appointmentBookingUrl": "https://www.maxhealthcare.in",
    "verified": true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DOCTORS_DATA;
}
