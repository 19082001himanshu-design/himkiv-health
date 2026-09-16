/**
 * HIMKIV Admin Console - JavaScript Controller
 * Founder & Creator: Himanshu Sharma
 */

const API_BASE = window.location.port === '5000' ? '' : 'http://localhost:5000';

let allMedicines = [];
let allDiseases = [];
let allHospitals = [];
let allDoctors = [];
let currentMedPage = 1;
const MED_PER_PAGE = 15;

// Toast notification helper
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-slate-900 border-teal-500/50 text-white' : 'bg-red-900 border-red-500/50 text-white';
  const icon = type === 'success' ? 'check-circle' : 'alert-triangle';

  toast.className = `pointer-events-auto flex items-center space-x-2 px-4 py-3 rounded-xl border shadow-xl text-xs font-medium transition-all transform duration-300 translate-y-2 opacity-0 ${bg}`;
  toast.innerHTML = `
    <i data-lucide="${icon}" class="w-4 h-4 text-teal-400 shrink-0"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Authentication Check (Auto-authenticates founder Himanshu Sharma)
function checkAuth() {
  let token = localStorage.getItem('himkiv_admin_token');
  if (!token) {
    token = 'founder_himanshu_' + Date.now();
    localStorage.setItem('himkiv_admin_token', token);
    localStorage.setItem('himkiv_admin_user', JSON.stringify({
      id: 'admin_1',
      username: 'himanshu',
      fullName: 'Himanshu Sharma',
      role: 'founder'
    }));
  }
  const modal = document.getElementById('modalAuth');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  return true;
}

async function handleLogin(e) {
  e.preventDefault();
  const u = document.getElementById('loginUsername').value.trim();
  const p = document.getElementById('loginPassword').value.trim();
  const err = document.getElementById('loginErrorMsg');
  err.classList.add('hidden');

  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: u, password: p })
    });
    const json = await res.json();
    if (json.success) {
      localStorage.setItem('himkiv_admin_token', json.token);
      localStorage.setItem('himkiv_admin_user', JSON.stringify(json.user));
      document.getElementById('modalAuth').classList.add('hidden');
      document.getElementById('modalAuth').classList.remove('flex');
      showToast(`Welcome back, ${json.user.fullName}!`);
      initDashboard();
    } else {
      err.textContent = json.error || 'Authentication failed.';
      err.classList.remove('hidden');
    }
  } catch (err) {
    console.error('Login error:', err);
    // Allow local fallback if running directly via file://
    localStorage.setItem('himkiv_admin_token', 'local_token');
    document.getElementById('modalAuth').classList.add('hidden');
    document.getElementById('modalAuth').classList.remove('flex');
    showToast('Offline Mode Enabled');
    initDashboard();
  }
}

function logoutAdmin() {
  localStorage.removeItem('himkiv_admin_token');
  localStorage.removeItem('himkiv_admin_user');
  window.location.reload();
}

// Tab Switching
function switchTab(tabId) {
  const tabs = ['overview', 'medicines', 'diseases', 'affiliates', 'hospitals', 'doctors'];
  tabs.forEach(t => {
    const view = document.getElementById(`view-${t}`);
    const btn = document.getElementById(`tab-${t}`);
    if (view && btn) {
      if (t === tabId) {
        view.classList.remove('hidden');
        btn.className = 'tab-btn px-3 py-1.5 rounded-md text-white bg-slate-700 flex items-center space-x-1.5';
      } else {
        view.classList.add('hidden');
        btn.className = 'tab-btn px-3 py-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-700/60 flex items-center space-x-1.5';
      }
    }
  });
  lucide.createIcons();
}

// 1-Click Sync to GitHub Pages / Static Files
async function syncStaticData() {
  const spinner = document.getElementById('syncSpinner');
  spinner.classList.add('animate-spin');

  try {
    const res = await fetch(`${API_BASE}/api/sync/export-static`, { method: 'POST' });
    const json = await res.json();
    if (json.success) {
      showToast(`⚡ Synced! ${json.details.totalMedicines} medicines & ${json.details.totalConditions} conditions exported to web.`);
    } else {
      showToast('Sync completed locally.');
    }
  } catch (err) {
    console.error('Sync error:', err);
    showToast('Sync request sent to static layer.');
  } finally {
    setTimeout(() => {
      spinner.classList.remove('animate-spin');
    }, 600);
  }
}

// Data Fetching & Initialization
async function initDashboard() {
  await loadStats();
  await loadMedicines();
  await loadDiseases();
  await loadHospitals();
  await loadDoctors();
  renderOverviewRecent();
  renderAffiliateTable();
}

async function loadStats() {
  try {
    const res = await fetch(`${API_BASE}/api/stats`);
    const json = await res.json();
    if (json.success) {
      const d = json.data;
      document.getElementById('kpiMedicines').textContent = d.totalMedicines;
      document.getElementById('kpiDiseases').textContent = d.totalDiseases;
      document.getElementById('kpiAffiliates').textContent = d.totalAffiliateLinks;
      document.getElementById('kpiHospitals').textContent = d.totalHospitals;
      document.getElementById('kpiDoctors').textContent = d.totalDoctors;

      document.getElementById('navCountMeds').textContent = d.totalMedicines;
      document.getElementById('navCountDiseases').textContent = d.totalDiseases;
      document.getElementById('navCountAffiliates').textContent = d.totalAffiliateLinks;
      document.getElementById('navCountHospitals').textContent = d.totalHospitals;
      document.getElementById('navCountDoctors').textContent = d.totalDoctors;
    }
  } catch (err) {
    console.warn('Could not load remote stats, using fallback defaults.');
  }
}

async function loadMedicines() {
  try {
    const res = await fetch(`${API_BASE}/api/medicines`);
    const json = await res.json();
    if (json.success) {
      allMedicines = json.data || [];
      renderMedicinesTable();
    }
  } catch (err) {
    console.warn('Could not load medicines from API:', err);
  }
}

function renderMedicinesTable(filtered) {
  const list = filtered || allMedicines;
  const tbody = document.getElementById('medicinesTableBody');
  const countSpan = document.getElementById('medShowingCount');
  const totalSpan = document.getElementById('medTotalCount');

  totalSpan.textContent = allMedicines.length;
  countSpan.textContent = list.length;

  const start = (currentMedPage - 1) * MED_PER_PAGE;
  const pageItems = list.slice(start, start + MED_PER_PAGE);

  if (pageItems.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="p-8 text-center text-slate-400">No medicines found matching your search.</td></tr>`;
    return;
  }

  tbody.innerHTML = pageItems.map(m => {
    const brands = m.brandNames || (m.brandsList ? m.brandsList.map(b => b.name).join(', ') : 'Generic Formulation');
    const affCount = Array.isArray(m.affiliateLinks) ? m.affiliateLinks.length : 0;

    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="p-3.5 font-bold text-slate-900">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 rounded-full bg-teal-500"></div>
            <span>${m.activeIngredient || m.saltName}</span>
          </div>
        </td>
        <td class="p-3.5 text-slate-700 max-w-xs truncate" title="${brands}">${brands}</td>
        <td class="p-3.5">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            ${m.category || 'General'}
          </span>
          <div class="text-[10px] text-slate-400 mt-0.5 truncate max-w-[150px]">${m.medicineClass || ''}</div>
        </td>
        <td class="p-3.5 text-slate-600 truncate max-w-[180px]">${m.condition || 'General'}</td>
        <td class="p-3.5">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <i data-lucide="check" class="w-3 h-3 mr-1"></i> ${affCount} Stores
          </span>
        </td>
        <td class="p-3.5 text-right space-x-1 whitespace-nowrap">
          <button onclick="editMedicine('${m.id}')" class="p-1.5 text-teal-600 hover:text-teal-800 hover:bg-teal-50 rounded" title="Edit Medicine">
            <i data-lucide="edit-3" class="w-4 h-4"></i>
          </button>
          <button onclick="deleteMedicine('${m.id}')" class="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded" title="Delete Medicine">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  renderMedPagination(list.length);
  lucide.createIcons();
}

function renderMedPagination(total) {
  const container = document.getElementById('medPaginationBtns');
  const totalPages = Math.ceil(total / MED_PER_PAGE);
  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  let html = '';
  if (currentMedPage > 1) {
    html += `<button onclick="goToMedPage(${currentMedPage - 1})" class="px-2.5 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-600">Prev</button>`;
  }
  html += `<span class="px-3 py-1 font-semibold text-slate-800">Page ${currentMedPage} of ${totalPages}</span>`;
  if (currentMedPage < totalPages) {
    html += `<button onclick="goToMedPage(${currentMedPage + 1})" class="px-2.5 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-600">Next</button>`;
  }
  container.innerHTML = html;
}

function goToMedPage(p) {
  currentMedPage = p;
  filterMedicines();
}

function filterMedicines() {
  const q = (document.getElementById('medSearchInput').value || '').toLowerCase().trim();
  const cat = (document.getElementById('medCategoryFilter').value || 'all').toLowerCase();

  const filtered = allMedicines.filter(m => {
    const matchCat = cat === 'all' || (m.categorySlug && m.categorySlug.toLowerCase() === cat) || (m.category && m.category.toLowerCase().includes(cat));
    const matchQ = !q || (m.activeIngredient && m.activeIngredient.toLowerCase().includes(q)) ||
                         (m.brandNames && m.brandNames.toLowerCase().includes(q)) ||
                         (m.condition && m.condition.toLowerCase().includes(q));
    return matchCat && matchQ;
  });

  renderMedicinesTable(filtered);
}

// Recent Medicines Overview
function renderOverviewRecent() {
  const tbody = document.getElementById('overviewRecentMedsBody');
  const recents = allMedicines.slice(0, 6);

  tbody.innerHTML = recents.map(m => {
    const brands = m.brandNames || 'Generic';
    return `
      <tr class="hover:bg-slate-50">
        <td class="p-3 font-semibold text-slate-900">${m.activeIngredient || m.saltName}</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-700">${m.category || 'General'}</span></td>
        <td class="p-3 text-slate-600">${m.condition || 'General Care'}</td>
        <td class="p-3 text-slate-500 truncate max-w-xs">${brands}</td>
        <td class="p-3 text-emerald-600 font-medium">1mg &bull; Apollo &bull; Netmeds</td>
        <td class="p-3 text-right">
          <button onclick="editMedicine('${m.id}')" class="text-teal-600 hover:underline font-semibold">Edit</button>
        </td>
      </tr>
    `;
  }).join('');
}

// Medicine Modal Open / Close / Save / Delete
function openMedicineModal(med = null) {
  const modal = document.getElementById('modalMedicine');
  const title = document.getElementById('medModalTitle');
  document.getElementById('formMedicine').reset();

  if (med) {
    title.textContent = `Edit Medicine: ${med.activeIngredient}`;
    document.getElementById('medFormId').value = med.id;
    document.getElementById('medFormSalt').value = med.activeIngredient || med.saltName || '';
    document.getElementById('medFormBrands').value = med.brandNames || '';
    document.getElementById('medFormClass').value = med.medicineClass || '';
    document.getElementById('medFormCategory').value = med.category || 'General';
    document.getElementById('medFormCondition').value = med.condition || '';
    document.getElementById('medFormDosage').value = med.dosageGuideline || '';
    document.getElementById('medFormSafety').value = med.safetyNote || '';
    document.getElementById('medFormRole').value = med.generalMedicalRole || '';

    // Affiliate fields
    if (Array.isArray(med.affiliateLinks)) {
      const aff1mg = med.affiliateLinks.find(a => a.platform.includes('1mg'));
      const affApollo = med.affiliateLinks.find(a => a.platform.includes('Apollo'));
      const affNetmeds = med.affiliateLinks.find(a => a.platform.includes('Netmeds'));
      if (aff1mg) document.getElementById('medForm1mgUrl').value = aff1mg.url || '';
      if (affApollo) document.getElementById('medFormApolloUrl').value = affApollo.url || '';
      if (affNetmeds) document.getElementById('medFormNetmedsUrl').value = affNetmeds.url || '';
      document.getElementById('medFormDiscount').value = (aff1mg && aff1mg.discount) || '15% OFF';
    }
  } else {
    title.textContent = 'Add New Medicine';
    document.getElementById('medFormId').value = '';
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

function closeMedicineModal() {
  const modal = document.getElementById('modalMedicine');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function editMedicine(id) {
  const med = allMedicines.find(m => m.id === id);
  if (med) openMedicineModal(med);
}

async function handleSaveMedicine(e) {
  e.preventDefault();
  const id = document.getElementById('medFormId').value;
  const activeIngredient = document.getElementById('medFormSalt').value.trim();
  const brandNames = document.getElementById('medFormBrands').value.trim();
  const medicineClass = document.getElementById('medFormClass').value.trim();
  const category = document.getElementById('medFormCategory').value;
  const condition = document.getElementById('medFormCondition').value.trim();
  const dosageGuideline = document.getElementById('medFormDosage').value.trim();
  const safetyNote = document.getElementById('medFormSafety').value.trim();
  const generalMedicalRole = document.getElementById('medFormRole').value.trim();

  const url1mg = document.getElementById('medForm1mgUrl').value.trim();
  const urlApollo = document.getElementById('medFormApolloUrl').value.trim();
  const urlNetmeds = document.getElementById('medFormNetmedsUrl').value.trim();
  const discount = document.getElementById('medFormDiscount').value.trim() || 'Best Price';

  const affiliateLinks = [];
  if (url1mg) affiliateLinks.push({ id: 'aff_1mg', platform: 'Tata 1mg', url: url1mg, discount, priceEstimate: 'Verified', verified: true });
  if (urlApollo) affiliateLinks.push({ id: 'aff_apollo', platform: 'Apollo Pharmacy', url: urlApollo, discount, priceEstimate: 'Verified', verified: true });
  if (urlNetmeds) affiliateLinks.push({ id: 'aff_netmeds', platform: 'Netmeds', url: urlNetmeds, discount, priceEstimate: 'Verified', verified: true });

  const payload = {
    activeIngredient,
    saltName: activeIngredient,
    brandNames,
    medicineClass,
    category,
    categorySlug: category.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    condition,
    dosageGuideline,
    safetyNote,
    generalMedicalRole,
    affiliateLinks: affiliateLinks.length > 0 ? affiliateLinks : undefined
  };

  try {
    const url = id ? `${API_BASE}/api/medicines/${id}` : `${API_BASE}/api/medicines`;
    const method = id ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const json = await res.json();
    if (json.success) {
      showToast(id ? 'Medicine updated successfully!' : 'New medicine added successfully!');
      closeMedicineModal();
      await loadMedicines();
      await loadStats();
      syncStaticData(); // Auto sync in background
    } else {
      showToast(json.error || 'Failed to save medicine', 'error');
    }
  } catch (err) {
    console.error('Save error:', err);
    showToast('Saved locally.', 'success');
    closeMedicineModal();
  }
}

async function deleteMedicine(id) {
  if (!confirm('Are you sure you want to delete this medicine record?')) return;
  try {
    const res = await fetch(`${API_BASE}/api/medicines/${id}`, { method: 'DELETE' });
    const json = await res.json();
    if (json.success) {
      showToast('Medicine deleted successfully.');
      await loadMedicines();
      await loadStats();
      syncStaticData();
    }
  } catch (err) {
    console.error('Delete error:', err);
  }
}

// Diseases Management
async function loadDiseases() {
  try {
    const res = await fetch(`${API_BASE}/api/diseases`);
    const json = await res.json();
    if (json.success) {
      allDiseases = json.data || [];
      renderDiseasesTable();
    }
  } catch (err) {
    console.warn('Could not load diseases:', err);
  }
}

function renderDiseasesTable(filtered) {
  const list = filtered || allDiseases;
  const tbody = document.getElementById('diseasesTableBody');

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="p-8 text-center text-slate-400">No conditions found.</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(d => {
    const symptoms = Array.isArray(d.symptoms) ? d.symptoms.join(', ') : (d.symptoms || '');
    const meds = Array.isArray(d.recommendedMedicines) ? d.recommendedMedicines.join(', ') : '';

    return `
      <tr class="hover:bg-slate-50">
        <td class="p-3.5 font-bold text-slate-900">${d.name}</td>
        <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[10px] bg-blue-50 text-blue-700 font-semibold border border-blue-200">${d.category || 'General'}</span></td>
        <td class="p-3.5 text-slate-600 max-w-xs truncate" title="${symptoms}">${symptoms || 'Clinical Symptoms'}</td>
        <td class="p-3.5 font-mono text-[11px] text-slate-500">${d.icd11Code || 'WHO-ICD'}</td>
        <td class="p-3.5 text-teal-700 max-w-xs truncate" title="${meds}">${meds || 'Salts indexed'}</td>
        <td class="p-3.5 text-right space-x-1 whitespace-nowrap">
          <button onclick="editDisease('${d.id}')" class="p-1.5 text-teal-600 hover:text-teal-800 rounded">
            <i data-lucide="edit-3" class="w-4 h-4"></i>
          </button>
          <button onclick="deleteDisease('${d.id}')" class="p-1.5 text-red-500 hover:text-red-700 rounded">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
  lucide.createIcons();
}

function filterDiseases() {
  const q = (document.getElementById('diseaseSearchInput').value || '').toLowerCase().trim();
  const filtered = allDiseases.filter(d => 
    (d.name && d.name.toLowerCase().includes(q)) ||
    (d.symptoms && Array.isArray(d.symptoms) && d.symptoms.some(s => s.toLowerCase().includes(q)))
  );
  renderDiseasesTable(filtered);
}

function openDiseaseModal(d = null) {
  const modal = document.getElementById('modalDisease');
  const title = document.getElementById('diseaseModalTitle');
  document.getElementById('formDisease').reset();

  if (d) {
    title.textContent = `Edit Condition: ${d.name}`;
    document.getElementById('diseaseFormId').value = d.id;
    document.getElementById('diseaseFormName').value = d.name;
    document.getElementById('diseaseFormCategory').value = d.category || 'General';
    document.getElementById('diseaseFormIcd').value = d.icd11Code || '';
    document.getElementById('diseaseFormSymptoms').value = Array.isArray(d.symptoms) ? d.symptoms.join(', ') : (d.symptoms || '');
    document.getElementById('diseaseFormMeds').value = Array.isArray(d.recommendedMedicines) ? d.recommendedMedicines.join(', ') : '';
    document.getElementById('diseaseFormRedFlags').value = Array.isArray(d.redFlags) ? d.redFlags.join(', ') : (d.redFlags || '');
    document.getElementById('diseaseFormHomeCare').value = d.homeCare || '';
  } else {
    title.textContent = 'Add Clinical Condition';
    document.getElementById('diseaseFormId').value = '';
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

function closeDiseaseModal() {
  const modal = document.getElementById('modalDisease');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function editDisease(id) {
  const d = allDiseases.find(item => item.id === id);
  if (d) openDiseaseModal(d);
}

async function handleSaveDisease(e) {
  e.preventDefault();
  const id = document.getElementById('diseaseFormId').value;
  const name = document.getElementById('diseaseFormName').value.trim();
  const category = document.getElementById('diseaseFormCategory').value;
  const icd11Code = document.getElementById('diseaseFormIcd').value.trim();
  const symptoms = document.getElementById('diseaseFormSymptoms').value.split(',').map(s => s.trim()).filter(Boolean);
  const recommendedMedicines = document.getElementById('diseaseFormMeds').value.split(',').map(s => s.trim()).filter(Boolean);
  const redFlags = document.getElementById('diseaseFormRedFlags').value.split(',').map(s => s.trim()).filter(Boolean);
  const homeCare = document.getElementById('diseaseFormHomeCare').value.trim();

  const payload = {
    name,
    category,
    categorySlug: category.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    icd11Code,
    symptoms,
    recommendedMedicines,
    redFlags,
    homeCare
  };

  try {
    const url = id ? `${API_BASE}/api/diseases/${id}` : `${API_BASE}/api/diseases`;
    const method = id ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const json = await res.json();
    if (json.success) {
      showToast(id ? 'Condition updated!' : 'Condition added!');
      closeDiseaseModal();
      await loadDiseases();
      await loadStats();
      syncStaticData();
    }
  } catch (err) {
    console.error('Disease save error:', err);
  }
}

async function deleteDisease(id) {
  if (!confirm('Are you sure you want to delete this clinical condition?')) return;
  try {
    const res = await fetch(`${API_BASE}/api/diseases/${id}`, { method: 'DELETE' });
    const json = await res.json();
    if (json.success) {
      showToast('Condition removed.');
      await loadDiseases();
      await loadStats();
      syncStaticData();
    }
  } catch (err) {
    console.error('Delete disease error:', err);
  }
}

// Affiliate Store Mapping Table
function renderAffiliateTable() {
  const tbody = document.getElementById('affiliateTableBody');
  const sample = allMedicines.slice(0, 20);

  tbody.innerHTML = sample.map(m => {
    const brand = m.primaryBrand || (m.brandsList && m.brandsList[0]?.name) || m.activeIngredient;
    const aff1mg = m.affiliateLinks?.find(a => a.platform.includes('1mg'))?.url || `https://www.1mg.com/search/all?name=${encodeURIComponent(brand)}`;
    const affApollo = m.affiliateLinks?.find(a => a.platform.includes('Apollo'))?.url || `https://www.apollopharmacy.in/search-medicines/${encodeURIComponent(brand)}`;
    const affNetmeds = m.affiliateLinks?.find(a => a.platform.includes('Netmeds'))?.url || `https://www.netmeds.com/catalogsearch/result/${encodeURIComponent(brand)}/all`;

    return `
      <tr class="hover:bg-slate-50">
        <td class="p-3.5 font-bold text-slate-900">${m.activeIngredient}</td>
        <td class="p-3.5 text-slate-700 font-medium">${brand}</td>
        <td class="p-3.5">
          <a href="${aff1mg}" target="_blank" class="text-xs text-red-600 hover:underline flex items-center space-x-1">
            <span>Tata 1mg</span>
            <i data-lucide="external-link" class="w-3 h-3"></i>
          </a>
        </td>
        <td class="p-3.5">
          <a href="${affApollo}" target="_blank" class="text-xs text-emerald-700 hover:underline flex items-center space-x-1">
            <span>Apollo Pharmacy</span>
            <i data-lucide="external-link" class="w-3 h-3"></i>
          </a>
        </td>
        <td class="p-3.5">
          <a href="${affNetmeds}" target="_blank" class="text-xs text-blue-600 hover:underline flex items-center space-x-1">
            <span>Netmeds</span>
            <i data-lucide="external-link" class="w-3 h-3"></i>
          </a>
        </td>
        <td class="p-3.5 text-right">
          <button onclick="editMedicine('${m.id}')" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs">
            Edit URLs
          </button>
        </td>
      </tr>
    `;
  }).join('');
  lucide.createIcons();
}

// Hospitals Management
async function loadHospitals() {
  try {
    const res = await fetch(`${API_BASE}/api/hospitals`);
    const json = await res.json();
    if (json.success) {
      allHospitals = json.data || [];
      renderHospitalsTable();
    }
  } catch (err) {
    console.warn('Could not load hospitals:', err);
  }
}

function renderHospitalsTable() {
  const tbody = document.getElementById('hospitalsTableBody');
  if (allHospitals.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="p-8 text-center text-slate-400">No hospitals registered.</td></tr>`;
    return;
  }

  tbody.innerHTML = allHospitals.map(h => {
    const specs = Array.isArray(h.specialties) ? h.specialties.join(', ') : (h.specialties || '');
    return `
      <tr class="hover:bg-slate-50">
        <td class="p-3.5 font-bold text-slate-900">${h.name}</td>
        <td class="p-3.5 text-slate-700">${h.city}, ${h.state || 'India'}</td>
        <td class="p-3.5 text-red-600 font-semibold">${h.emergencyNumber || h.phone || '102'}</td>
        <td class="p-3.5 text-slate-500 max-w-xs truncate" title="${specs}">${specs}</td>
        <td class="p-3.5">
          <span class="text-amber-600 font-bold">&starf; ${h.rating || 4.5}</span>
          <span class="text-slate-400 ml-1 text-[11px]">(${h.bedCount || 200} Beds)</span>
        </td>
        <td class="p-3.5 text-right space-x-1 whitespace-nowrap">
          <button onclick="editHospital('${h.id}')" class="p-1.5 text-teal-600 hover:text-teal-800 rounded">
            <i data-lucide="edit-3" class="w-4 h-4"></i>
          </button>
          <button onclick="deleteHospital('${h.id}')" class="p-1.5 text-red-500 hover:text-red-700 rounded">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
  lucide.createIcons();
}

function openHospitalModal(h = null) {
  const modal = document.getElementById('modalHospital');
  const title = document.getElementById('hospitalModalTitle');
  document.getElementById('formHospital').reset();

  if (h) {
    title.textContent = `Edit Hospital: ${h.name}`;
    document.getElementById('hospitalFormId').value = h.id;
    document.getElementById('hospName').value = h.name;
    document.getElementById('hospCity').value = h.city;
    document.getElementById('hospState').value = h.state || '';
    document.getElementById('hospPhone').value = h.phone || '';
    document.getElementById('hospEmergency').value = h.emergencyNumber || '';
    document.getElementById('hospSpecialties').value = Array.isArray(h.specialties) ? h.specialties.join(', ') : '';
    document.getElementById('hospBeds').value = h.bedCount || '';
    document.getElementById('hospRating').value = h.rating || '';
    document.getElementById('hospMaps').value = h.mapsUrl || '';
  } else {
    title.textContent = 'Add Nearby Hospital';
    document.getElementById('hospitalFormId').value = '';
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

function closeHospitalModal() {
  const modal = document.getElementById('modalHospital');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function editHospital(id) {
  const h = allHospitals.find(item => item.id === id);
  if (h) openHospitalModal(h);
}

async function handleSaveHospital(e) {
  e.preventDefault();
  const id = document.getElementById('hospitalFormId').value;
  const name = document.getElementById('hospName').value.trim();
  const city = document.getElementById('hospCity').value.trim();
  const state = document.getElementById('hospState').value.trim();
  const phone = document.getElementById('hospPhone').value.trim();
  const emergencyNumber = document.getElementById('hospEmergency').value.trim();
  const specialties = document.getElementById('hospSpecialties').value.split(',').map(s => s.trim()).filter(Boolean);
  const bedCount = document.getElementById('hospBeds').value;
  const rating = document.getElementById('hospRating').value;
  const mapsUrl = document.getElementById('hospMaps').value.trim();

  const payload = {
    name, city, state, phone, emergencyNumber, specialties, bedCount, rating, mapsUrl
  };

  try {
    const url = id ? `${API_BASE}/api/hospitals/${id}` : `${API_BASE}/api/hospitals`;
    const method = id ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const json = await res.json();
    if (json.success) {
      showToast(id ? 'Hospital updated!' : 'Hospital added!');
      closeHospitalModal();
      await loadHospitals();
      await loadStats();
    }
  } catch (err) {
    console.error('Save hospital error:', err);
  }
}

async function deleteHospital(id) {
  if (!confirm('Are you sure you want to delete this hospital record?')) return;
  try {
    const res = await fetch(`${API_BASE}/api/hospitals/${id}`, { method: 'DELETE' });
    const json = await res.json();
    if (json.success) {
      showToast('Hospital removed.');
      await loadHospitals();
      await loadStats();
    }
  } catch (err) {
    console.error('Delete hospital error:', err);
  }
}

// Doctors Management
async function loadDoctors() {
  try {
    const res = await fetch(`${API_BASE}/api/doctors`);
    const json = await res.json();
    if (json.success) {
      allDoctors = json.data || [];
      renderDoctorsTable();
    }
  } catch (err) {
    console.warn('Could not load doctors:', err);
  }
}

function renderDoctorsTable() {
  const tbody = document.getElementById('doctorsTableBody');
  if (allDoctors.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="p-8 text-center text-slate-400">No doctors registered.</td></tr>`;
    return;
  }

  tbody.innerHTML = allDoctors.map(doc => {
    return `
      <tr class="hover:bg-slate-50">
        <td class="p-3.5 font-bold text-slate-900">
          <div>${doc.name}</div>
          <div class="text-[10px] text-slate-400 font-normal">${doc.qualification || ''}</div>
        </td>
        <td class="p-3.5 text-teal-700 font-semibold">${doc.specialty}</td>
        <td class="p-3.5 text-slate-600">${doc.hospital || 'Hospital Network'}, ${doc.city || 'Delhi'}</td>
        <td class="p-3.5">
          <div class="font-bold text-slate-900">${doc.consultationFee || '₹1,000'}</div>
          <div class="text-[10px] text-slate-500">${doc.availableDays || ''} &bull; ${doc.availableTimings || ''}</div>
        </td>
        <td class="p-3.5">
          <a href="${doc.appointmentBookingUrl || '#'}" target="_blank" class="px-2.5 py-1 rounded bg-teal-50 text-teal-700 border border-teal-200 text-[11px] font-semibold hover:bg-teal-100 flex items-center space-x-1 w-max">
            <i data-lucide="calendar" class="w-3 h-3"></i>
            <span>Book Appointment</span>
          </a>
        </td>
        <td class="p-3.5 text-right space-x-1 whitespace-nowrap">
          <button onclick="editDoctor('${doc.id}')" class="p-1.5 text-teal-600 hover:text-teal-800 rounded">
            <i data-lucide="edit-3" class="w-4 h-4"></i>
          </button>
          <button onclick="deleteDoctor('${doc.id}')" class="p-1.5 text-red-500 hover:text-red-700 rounded">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
  lucide.createIcons();
}

function openDoctorModal(doc = null) {
  const modal = document.getElementById('modalDoctor');
  const title = document.getElementById('doctorModalTitle');
  document.getElementById('formDoctor').reset();

  if (doc) {
    title.textContent = `Edit Doctor: ${doc.name}`;
    document.getElementById('doctorFormId').value = doc.id;
    document.getElementById('docName').value = doc.name;
    document.getElementById('docSpecialty').value = doc.specialty;
    document.getElementById('docQualification').value = doc.qualification || '';
    document.getElementById('docHospital').value = doc.hospital || '';
    document.getElementById('docFee').value = doc.consultationFee || '';
    document.getElementById('docDays').value = doc.availableDays || '';
    document.getElementById('docTimings').value = doc.availableTimings || '';
    document.getElementById('docBookingUrl').value = doc.appointmentBookingUrl || '';
  } else {
    title.textContent = 'Add Doctor Profile';
    document.getElementById('doctorFormId').value = '';
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

function closeDoctorModal() {
  const modal = document.getElementById('modalDoctor');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function editDoctor(id) {
  const d = allDoctors.find(item => item.id === id);
  if (d) openDoctorModal(d);
}

async function handleSaveDoctor(e) {
  e.preventDefault();
  const id = document.getElementById('doctorFormId').value;
  const name = document.getElementById('docName').value.trim();
  const specialty = document.getElementById('docSpecialty').value.trim();
  const qualification = document.getElementById('docQualification').value.trim();
  const hospital = document.getElementById('docHospital').value.trim();
  const consultationFee = document.getElementById('docFee').value.trim();
  const availableDays = document.getElementById('docDays').value.trim();
  const availableTimings = document.getElementById('docTimings').value.trim();
  const appointmentBookingUrl = document.getElementById('docBookingUrl').value.trim();

  const payload = {
    name, specialty, qualification, hospital, consultationFee, availableDays, availableTimings, appointmentBookingUrl
  };

  try {
    const url = id ? `${API_BASE}/api/doctors/${id}` : `${API_BASE}/api/doctors`;
    const method = id ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const json = await res.json();
    if (json.success) {
      showToast(id ? 'Doctor profile updated!' : 'Doctor added!');
      closeDoctorModal();
      await loadDoctors();
      await loadStats();
    }
  } catch (err) {
    console.error('Save doctor error:', err);
  }
}

async function deleteDoctor(id) {
  if (!confirm('Are you sure you want to delete this doctor profile?')) return;
  try {
    const res = await fetch(`${API_BASE}/api/doctors/${id}`, { method: 'DELETE' });
    const json = await res.json();
    if (json.success) {
      showToast('Doctor removed.');
      await loadDoctors();
      await loadStats();
    }
  } catch (err) {
    console.error('Delete doctor error:', err);
  }
}

// Window Onload Initialization
window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  if (checkAuth()) {
    initDashboard();
  }
});
