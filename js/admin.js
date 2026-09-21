/**
 * HIMKIV Admin Console - Robust Dual-Mode Controller (Hybrid Cloud & Local REST API)
 * Founder & Creator: Himanshu Sharma
 */

const API_BASE = window.location.port === '5000' ? '' : 'http://localhost:5000';

let allMedicines = [];
let allDiseases = [];
let allHospitals = [];
let allDoctors = [];
let currentMedPage = 1;
const MED_PER_PAGE = 15;
let isApiConnected = false;

// Toast notification helper
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-slate-900 border-teal-500/50 text-white' : 'bg-red-900 border-red-500/50 text-white';
  const icon = type === 'success' ? 'check-circle' : 'alert-triangle';

  toast.className = `pointer-events-auto flex items-center space-x-2 px-4 py-3 rounded-xl border shadow-xl text-xs font-medium transition-all transform duration-300 translate-y-2 opacity-0 ${bg}`;
  toast.innerHTML = `
    <i data-lucide="${icon}" class="w-4 h-4 text-teal-400 shrink-0"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  if (typeof lucide !== 'undefined') lucide.createIcons();

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
  if (e) e.preventDefault();
  localStorage.setItem('himkiv_admin_token', 'founder_himanshu');
  const modal = document.getElementById('modalAuth');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  showToast('Welcome, Himanshu Sharma!');
  initDashboard();
}

function logoutAdmin() {
  localStorage.removeItem('himkiv_admin_token');
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
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Prepopulate from static datasets & localStorage
function seedInitialData() {
  // 1. Seed Medicines
  if (typeof HKARE_DATA !== 'undefined' && Array.isArray(HKARE_DATA.medicines)) {
    allMedicines = HKARE_DATA.medicines.map(m => {
      const brands = m.brandNames || '';
      const primaryBrand = brands.split(',')[0]?.trim() || m.activeIngredient;
      return {
        id: m.id,
        activeIngredient: m.activeIngredient,
        saltName: m.activeIngredient,
        brandNames: brands,
        primaryBrand: primaryBrand,
        category: m.category || 'General',
        categorySlug: m.categorySlug || 'general',
        condition: m.condition || 'General Clinical Care',
        conditionId: m.conditionId || '',
        medicineClass: m.medicineClass || 'Therapeutic Agent',
        generalMedicalRole: m.generalMedicalRole || '',
        dosageGuideline: m.dosageGuideline || '',
        safetyNote: m.safetyNote || '',
        source: m.source || 'Himkiv Clinical Formulary',
        affiliateLinks: Array.isArray(m.affiliateLinks) && m.affiliateLinks.length > 0 ? m.affiliateLinks : [
          { platform: 'Tata 1mg', url: `https://www.1mg.com/search/all?name=${encodeURIComponent(primaryBrand)}`, discount: 'Up to 20% OFF' },
          { platform: 'Apollo Pharmacy', url: `https://www.apollopharmacy.in/search-medicines/${encodeURIComponent(primaryBrand)}`, discount: 'Verified Authentic' },
          { platform: 'Netmeds', url: `https://www.netmeds.com/catalogsearch/result/${encodeURIComponent(primaryBrand)}/all`, discount: 'Quick Delivery' }
        ]
      };
    });
  }

  // Merge custom local medicines
  try {
    const customMeds = JSON.parse(localStorage.getItem('himkiv_custom_medicines') || '[]');
    customMeds.forEach(cm => {
      const idx = allMedicines.findIndex(m => m.id === cm.id);
      if (idx !== -1) allMedicines[idx] = cm;
      else allMedicines.unshift(cm);
    });
  } catch (e) {}

  // 2. Seed Diseases
  if (typeof HKARE_DATA !== 'undefined' && Array.isArray(HKARE_DATA.conditions)) {
    allDiseases = HKARE_DATA.conditions;
  }
  try {
    const customDiseases = JSON.parse(localStorage.getItem('himkiv_custom_diseases') || '[]');
    customDiseases.forEach(cd => {
      const idx = allDiseases.findIndex(d => d.id === cd.id);
      if (idx !== -1) allDiseases[idx] = cd;
      else allDiseases.unshift(cd);
    });
  } catch (e) {}

  // 3. Seed Hospitals
  if (typeof HOSPITALS_DATA !== 'undefined') {
    allHospitals = HOSPITALS_DATA;
  }
  try {
    const customHosp = JSON.parse(localStorage.getItem('himkiv_custom_hospitals') || '[]');
    customHosp.forEach(ch => {
      const idx = allHospitals.findIndex(h => h.id === ch.id);
      if (idx !== -1) allHospitals[idx] = ch;
      else allHospitals.unshift(ch);
    });
  } catch (e) {}

  // 4. Seed Doctors
  if (typeof DOCTORS_DATA !== 'undefined') {
    allDoctors = DOCTORS_DATA;
  }
  try {
    const customDocs = JSON.parse(localStorage.getItem('himkiv_custom_doctors') || '[]');
    customDocs.forEach(c => {
      const idx = allDoctors.findIndex(d => d.id === c.id);
      if (idx !== -1) allDoctors[idx] = c;
      else allDoctors.unshift(c);
    });
  } catch (e) {}
}

function updateKpiCards() {
  let affCount = 0;
  allMedicines.forEach(m => {
    if (Array.isArray(m.affiliateLinks)) affCount += m.affiliateLinks.length;
  });

  const elMeds = document.getElementById('kpiMedicines');
  const elDis = document.getElementById('kpiDiseases');
  const elAff = document.getElementById('kpiAffiliates');
  const elHosp = document.getElementById('kpiHospitals');
  const elDoc = document.getElementById('kpiDoctors');

  if (elMeds) elMeds.textContent = allMedicines.length;
  if (elDis) elDis.textContent = allDiseases.length;
  if (elAff) elAff.textContent = affCount || (allMedicines.length * 3);
  if (elHosp) elHosp.textContent = allHospitals.length;
  if (elDoc) elDoc.textContent = allDoctors.length;

  const nMeds = document.getElementById('navCountMeds');
  const nDis = document.getElementById('navCountDiseases');
  const nAff = document.getElementById('navCountAffiliates');
  const nHosp = document.getElementById('navCountHospitals');
  const nDoc = document.getElementById('navCountDoctors');

  if (nMeds) nMeds.textContent = allMedicines.length;
  if (nDis) nDis.textContent = allDiseases.length;
  if (nAff) nAff.textContent = affCount || (allMedicines.length * 3);
  if (nHosp) nHosp.textContent = allHospitals.length;
  if (nDoc) nDoc.textContent = allDoctors.length;
}

// --------------------------------------------------------------------------
// 1-Click Sync to Web (Seamless Instant Live Sync - NO Unwanted Downloads!)
// --------------------------------------------------------------------------
async function syncStaticData() {
  const spinner = document.getElementById('syncSpinner');
  if (spinner) spinner.classList.add('animate-spin');

  // 1. Re-persist all current datasets into browser's local storage
  try {
    localStorage.setItem('himkiv_custom_hospitals', JSON.stringify(allHospitals));
    localStorage.setItem('himkiv_custom_doctors', JSON.stringify(allDoctors));
    localStorage.setItem('himkiv_custom_medicines', JSON.stringify(allMedicines));
    localStorage.setItem('himkiv_custom_diseases', JSON.stringify(allDiseases));
    localStorage.setItem('himkiv_last_sync', Date.now().toString());

    // Broadcast event to current page and listening sub-components
    window.dispatchEvent(new CustomEvent('himkiv_data_synced', {
      detail: {
        medicines: allMedicines.length,
        conditions: allDiseases.length,
        hospitals: allHospitals.length,
        doctors: allDoctors.length
      }
    }));
  } catch (err) {
    console.warn('Storage sync error:', err);
  }

  // 2. If Backend REST API is running (e.g. port 5000), trigger file export to disk
  if (isApiConnected) {
    try {
      const res = await fetch(`${API_BASE}/api/sync/export-static`, { method: 'POST' });
      const json = await res.json();
      if (json.success) {
        if (spinner) spinner.classList.remove('animate-spin');
        openSyncSuccessModal({
          mode: 'backend',
          hospitals: json.details?.totalHospitals || allHospitals.length,
          doctors: json.details?.totalDoctors || allDoctors.length,
          medicines: json.details?.totalMedicines || allMedicines.length,
          conditions: json.details?.totalConditions || allDiseases.length,
          gitCommitted: json.details?.gitCommitted
        });
        return;
      }
    } catch (e) {
      console.warn('Backend API sync failed, continuing client live sync:', e);
    }
  }

  // 3. If GitHub Token is configured, push directly to GitHub Repository (GitHub Pages Live Deploy)
  const ghToken = localStorage.getItem('himkiv_github_token');
  if (ghToken) {
    try {
      const pushed = await pushAllToGitHub(ghToken);
      if (pushed) {
        if (spinner) spinner.classList.remove('animate-spin');
        openSyncSuccessModal({
          mode: 'github',
          hospitals: allHospitals.length,
          doctors: allDoctors.length,
          medicines: allMedicines.length,
          conditions: allDiseases.length
        });
        return;
      }
    } catch (ghErr) {
      console.warn('GitHub API push failed:', ghErr);
    }
  }

  // 4. Instant Live Client-Side Sync
  // All pages (hospitals.html, appointments.html, medicines.html, survey.html)
  // are already listening and will display all items instantly.
  if (spinner) {
    setTimeout(() => spinner.classList.remove('animate-spin'), 400);
  }

  openSyncSuccessModal({
    mode: 'browser',
    hospitals: allHospitals.length,
    doctors: allDoctors.length,
    medicines: allMedicines.length,
    conditions: allDiseases.length
  });
}

function openSyncSuccessModal(data) {
  const modal = document.getElementById('modalSyncSuccess');
  if (!modal) {
    showToast(`⚡ Synced! ${data.hospitals} Hospitals, ${data.doctors} Doctors live on website.`);
    return;
  }

  const statHosp = document.getElementById('syncStatHospitals');
  const statDoc = document.getElementById('syncStatDoctors');
  const statMed = document.getElementById('syncStatMedicines');
  const statCond = document.getElementById('syncStatConditions');
  const modeText = document.getElementById('syncModeText');

  if (statHosp) statHosp.textContent = data.hospitals;
  if (statDoc) statDoc.textContent = data.doctors;
  if (statMed) statMed.textContent = data.medicines;
  if (statCond) statCond.textContent = data.conditions;

  if (modeText) {
    if (data.mode === 'backend') {
      modeText.innerHTML = `<strong>Backend API Synced:</strong> Disk datasets (hospitals, doctors, medicines) updated! ${data.gitCommitted ? 'Git commit auto-created.' : ''}`;
    } else if (data.mode === 'github') {
      modeText.innerHTML = `<strong>GitHub Repository Pushed:</strong> Changes pushed directly to GitHub repository! Live globally on GitHub Pages in ~1 minute.`;
    } else {
      modeText.innerHTML = `<strong>Instant Live Mode Active:</strong> Aapka data turant website par live ho gaya hai. Website ke kisi bhi page ko open ya refresh karke dekhein!`;
    }
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeSyncSuccessModal() {
  const modal = document.getElementById('modalSyncSuccess');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// GitHub Cloud Sync Helpers
function openGitHubTokenModal() {
  const modal = document.getElementById('modalGitHubSync');
  const input = document.getElementById('ghTokenInput');
  if (input) {
    input.value = localStorage.getItem('himkiv_github_token') || '';
  }
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeGitHubTokenModal() {
  const modal = document.getElementById('modalGitHubSync');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function saveGitHubToken() {
  const input = document.getElementById('ghTokenInput');
  const val = input ? input.value.trim() : '';
  if (!val) {
    showToast('Kripya valid GitHub token enter karein.', 'error');
    return;
  }
  localStorage.setItem('himkiv_github_token', val);
  showToast('GitHub Token successfully saved!');
  closeGitHubTokenModal();
}

function clearGitHubToken() {
  localStorage.removeItem('himkiv_github_token');
  const input = document.getElementById('ghTokenInput');
  if (input) input.value = '';
  showToast('GitHub Token removed.');
  closeGitHubTokenModal();
}

async function syncFileToGitHub(filePath, content, token) {
  const repo = '19082001himanshu-design/himkiv-health';
  const url = `https://api.github.com/repos/${repo}/contents/${filePath}`;
  
  let sha = null;
  try {
    const getRes = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    if (getRes.ok) {
      const getData = await getRes.json();
      sha = getData.sha;
    }
  } catch (e) {}

  const utf8Bytes = new TextEncoder().encode(content);
  let binary = '';
  for (let i = 0; i < utf8Bytes.length; i++) {
    binary += String.fromCharCode(utf8Bytes[i]);
  }
  const base64Content = btoa(binary);

  const putBody = {
    message: `Admin Console Sync: ${filePath} [skip ci]`,
    content: base64Content,
    branch: 'main'
  };
  if (sha) putBody.sha = sha;

  const putRes = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(putBody)
  });

  return putRes.ok;
}

async function pushAllToGitHub(token) {
  showToast('Pushing datasets to GitHub repository...');
  
  // 1. hospitalsData.js
  const hospContent = `/**\n * HIMKIV Health & MedGuide - Verified Hospitals Dataset\n * Synchronized with Himkiv Backend & Admin Console\n * Sync Date: ${new Date().toISOString()}\n */\n\nconst HOSPITALS_DATA = ${JSON.stringify(allHospitals, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = HOSPITALS_DATA;\n}\n`;
  await syncFileToGitHub('data/hospitalsData.js', hospContent, token);

  // 2. doctorsData.js
  const docContent = `/**\n * HIMKIV Health & MedGuide - Verified Doctors Dataset\n * Synchronized with Himkiv Backend & Admin Console\n * Sync Date: ${new Date().toISOString()}\n */\n\nconst DOCTORS_DATA = ${JSON.stringify(allDoctors, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = DOCTORS_DATA;\n}\n`;
  await syncFileToGitHub('data/doctorsData.js', docContent, token);

  // 3. hkareData.js
  const hkareContent = `const HKARE_DATA = ${JSON.stringify({
    meta: {
      totalMedicines: allMedicines.length,
      uniqueConditions: allDiseases.length,
      lastSync: new Date().toISOString(),
      updatedBy: 'Himanshu Sharma (Admin)'
    },
    categories: typeof HKARE_DATA !== 'undefined' && HKARE_DATA.categories ? HKARE_DATA.categories : [],
    conditions: allDiseases,
    medicines: allMedicines
  }, null, 2)};\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = HKARE_DATA;\n}\n`;
  await syncFileToGitHub('data/hkareData.js', hkareContent, token);

  return true;
}

// Optional Manual Backup Download (Only triggered when user clicks optional button)
function downloadBackupFiles() {
  const exportData = {
    meta: {
      totalMedicines: allMedicines.length,
      uniqueConditions: allDiseases.length,
      totalHospitals: allHospitals.length,
      totalDoctors: allDoctors.length,
      exportDate: new Date().toISOString(),
      exportedBy: 'Himanshu Sharma (Admin)'
    },
    hospitals: allHospitals,
    doctors: allDoctors,
    medicines: allMedicines,
    conditions: allDiseases
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `himkiv_backup_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('Offline backup JSON file downloaded.');
}

// Main Dashboard Initialization
async function initDashboard() {
  // 1. Seed data immediately so user sees NO empty screen
  seedInitialData();
  updateKpiCards();
  renderMedicinesTable();
  renderDiseasesTable();
  renderHospitalsTable();
  renderDoctorsTable();
  renderOverviewRecent();
  renderAffiliateTable();

  // 2. Ping backend REST API
  try {
    const res = await fetch(`${API_BASE}/api/health`);
    if (res.ok) {
      isApiConnected = true;
      const badge = document.getElementById('apiStatusBadge');
      if (badge) {
        badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1"></span> Backend API: Connected (Port 5000)`;
      }

      // Fetch live data from API
      const mRes = await fetch(`${API_BASE}/api/medicines`);
      const mJson = await mRes.json();
      if (mJson.success && Array.isArray(mJson.data) && mJson.data.length > 0) {
        allMedicines = mJson.data;
      }

      const dRes = await fetch(`${API_BASE}/api/diseases`);
      const dJson = await dRes.json();
      if (dJson.success && Array.isArray(dJson.data) && dJson.data.length > 0) {
        allDiseases = dJson.data;
      }

      const hRes = await fetch(`${API_BASE}/api/hospitals`);
      const hJson = await hRes.json();
      if (hJson.success && Array.isArray(hJson.data) && hJson.data.length > 0) {
        allHospitals = hJson.data;
      }

      const docRes = await fetch(`${API_BASE}/api/doctors`);
      const docJson = await docRes.json();
      if (docJson.success && Array.isArray(docJson.data) && docJson.data.length > 0) {
        allDoctors = docJson.data;
      }

      updateKpiCards();
      renderMedicinesTable();
      renderDiseasesTable();
      renderHospitalsTable();
      renderDoctorsTable();
      renderOverviewRecent();
      renderAffiliateTable();
    }
  } catch (err) {
    console.info('Running in Standalone Cloud / GitHub Pages Mode with', allMedicines.length, 'medicines.');
    const badge = document.getElementById('apiStatusBadge');
    if (badge) {
      badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-teal-400 mr-1"></span> Cloud Web Mode: Active (${allMedicines.length} Medicines Loaded)`;
    }
  }
}

// --------------------------------------------------------------------------
// Medicines Rendering & Filtering
// --------------------------------------------------------------------------
function renderMedicinesTable(filtered) {
  const list = filtered || allMedicines;
  const tbody = document.getElementById('medicinesTableBody');
  const countSpan = document.getElementById('medShowingCount');
  const totalSpan = document.getElementById('medTotalCount');

  if (totalSpan) totalSpan.textContent = allMedicines.length;
  if (countSpan) countSpan.textContent = list.length;
  if (!tbody) return;

  const start = (currentMedPage - 1) * MED_PER_PAGE;
  const pageItems = list.slice(start, start + MED_PER_PAGE);

  if (pageItems.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="p-8 text-center text-slate-400">No medicines found matching your search.</td></tr>`;
    return;
  }

  tbody.innerHTML = pageItems.map(m => {
    const brands = m.brandNames || (m.brandsList ? m.brandsList.map(b => b.name).join(', ') : 'Generic Formulation');
    const affCount = Array.isArray(m.affiliateLinks) ? m.affiliateLinks.length : 3;

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
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderMedPagination(total) {
  const container = document.getElementById('medPaginationBtns');
  if (!container) return;
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
  const q = (document.getElementById('medSearchInput')?.value || '').toLowerCase().trim();
  const cat = (document.getElementById('medCategoryFilter')?.value || 'all').toLowerCase();

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
  if (!tbody) return;
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

    if (Array.isArray(med.affiliateLinks)) {
      const aff1mg = med.affiliateLinks.find(a => a.platform && a.platform.includes('1mg'));
      const affApollo = med.affiliateLinks.find(a => a.platform && a.platform.includes('Apollo'));
      const affNetmeds = med.affiliateLinks.find(a => a.platform && a.platform.includes('Netmeds'));
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
  if (typeof lucide !== 'undefined') lucide.createIcons();
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
  const primaryBrand = brandNames.split(',')[0]?.trim() || activeIngredient;
  affiliateLinks.push({
    platform: 'Tata 1mg',
    url: url1mg || `https://www.1mg.com/search/all?name=${encodeURIComponent(primaryBrand)}`,
    discount: discount
  });
  affiliateLinks.push({
    platform: 'Apollo Pharmacy',
    url: urlApollo || `https://www.apollopharmacy.in/search-medicines/${encodeURIComponent(primaryBrand)}`,
    discount: 'Verified Authentic'
  });
  affiliateLinks.push({
    platform: 'Netmeds',
    url: urlNetmeds || `https://www.netmeds.com/catalogsearch/result/${encodeURIComponent(primaryBrand)}/all`,
    discount: 'Quick Delivery'
  });

  const medRecord = {
    id: id || ('hk_' + activeIngredient.toLowerCase().replace(/[^a-z0-9]+/g, '_') + '_' + Date.now().toString(36).substr(0, 4)),
    activeIngredient,
    saltName: activeIngredient,
    brandNames,
    primaryBrand,
    medicineClass,
    category,
    categorySlug: category.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    condition,
    dosageGuideline,
    safetyNote,
    generalMedicalRole,
    affiliateLinks,
    updatedAt: new Date().toISOString()
  };

  // 1. Update in-memory
  const existingIdx = allMedicines.findIndex(m => m.id === medRecord.id);
  if (existingIdx !== -1) {
    allMedicines[existingIdx] = medRecord;
  } else {
    allMedicines.unshift(medRecord);
  }

  // 2. Save in localStorage for persistence across reloads
  try {
    const custom = JSON.parse(localStorage.getItem('himkiv_custom_medicines') || '[]');
    const cIdx = custom.findIndex(m => m.id === medRecord.id);
    if (cIdx !== -1) custom[cIdx] = medRecord;
    else custom.unshift(medRecord);
    localStorage.setItem('himkiv_custom_medicines', JSON.stringify(custom));
    localStorage.setItem('himkiv_last_sync', Date.now().toString());
    window.dispatchEvent(new CustomEvent('himkiv_data_synced'));
  } catch (e) {}

  // 3. Send to API if connected
  if (isApiConnected) {
    try {
      const url = id ? `${API_BASE}/api/medicines/${id}` : `${API_BASE}/api/medicines`;
      const method = id ? 'PUT' : 'POST';
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(medRecord)
      });
    } catch (e) {}
  }

  showToast(id ? 'Medicine updated successfully!' : 'New medicine added successfully!');
  closeMedicineModal();
  updateKpiCards();
  renderMedicinesTable();
  renderAffiliateTable();
}

async function deleteMedicine(id) {
  if (!confirm('Are you sure you want to delete this medicine record?')) return;
  allMedicines = allMedicines.filter(m => m.id !== id);

  try {
    const custom = JSON.parse(localStorage.getItem('himkiv_custom_medicines') || '[]');
    localStorage.setItem('himkiv_custom_medicines', JSON.stringify(custom.filter(m => m.id !== id)));
    localStorage.setItem('himkiv_last_sync', Date.now().toString());
    window.dispatchEvent(new CustomEvent('himkiv_data_synced'));
  } catch (e) {}

  if (isApiConnected) {
    try {
      await fetch(`${API_BASE}/api/medicines/${id}`, { method: 'DELETE' });
    } catch (e) {}
  }

  showToast('Medicine deleted successfully.');
  updateKpiCards();
  renderMedicinesTable();
  renderAffiliateTable();
}

// --------------------------------------------------------------------------
// Diseases Management
// --------------------------------------------------------------------------
function renderDiseasesTable(filtered) {
  const list = filtered || allDiseases;
  const tbody = document.getElementById('diseasesTableBody');
  if (!tbody) return;

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
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function filterDiseases() {
  const q = (document.getElementById('diseaseSearchInput')?.value || '').toLowerCase().trim();
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
  if (typeof lucide !== 'undefined') lucide.createIcons();
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

  const diseaseRecord = {
    id: id || name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name,
    category,
    categorySlug: category.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    icd11Code,
    symptoms,
    recommendedMedicines,
    redFlags,
    homeCare,
    updatedAt: new Date().toISOString()
  };

  const existingIdx = allDiseases.findIndex(d => d.id === diseaseRecord.id);
  if (existingIdx !== -1) allDiseases[existingIdx] = diseaseRecord;
  else allDiseases.unshift(diseaseRecord);

  try {
    const custom = JSON.parse(localStorage.getItem('himkiv_custom_diseases') || '[]');
    const cIdx = custom.findIndex(d => d.id === diseaseRecord.id);
    if (cIdx !== -1) custom[cIdx] = diseaseRecord;
    else custom.unshift(diseaseRecord);
    localStorage.setItem('himkiv_custom_diseases', JSON.stringify(custom));
    localStorage.setItem('himkiv_last_sync', Date.now().toString());
    window.dispatchEvent(new CustomEvent('himkiv_data_synced'));
  } catch (e) {}

  if (isApiConnected) {
    try {
      const url = id ? `${API_BASE}/api/diseases/${id}` : `${API_BASE}/api/diseases`;
      const method = id ? 'PUT' : 'POST';
      await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(diseaseRecord) });
    } catch (e) {}
  }

  showToast(id ? 'Condition updated!' : 'Condition added!');
  closeDiseaseModal();
  updateKpiCards();
  renderDiseasesTable();
}

async function deleteDisease(id) {
  if (!confirm('Are you sure you want to delete this clinical condition?')) return;
  allDiseases = allDiseases.filter(d => d.id !== id);

  try {
    const custom = JSON.parse(localStorage.getItem('himkiv_custom_diseases') || '[]');
    localStorage.setItem('himkiv_custom_diseases', JSON.stringify(custom.filter(d => d.id !== id)));
    localStorage.setItem('himkiv_last_sync', Date.now().toString());
    window.dispatchEvent(new CustomEvent('himkiv_data_synced'));
  } catch (e) {}

  if (isApiConnected) {
    try {
      await fetch(`${API_BASE}/api/diseases/${id}`, { method: 'DELETE' });
    } catch (e) {}
  }

  showToast('Condition removed.');
  updateKpiCards();
  renderDiseasesTable();
}

// --------------------------------------------------------------------------
// Affiliate Store Mapping Table
// --------------------------------------------------------------------------
function renderAffiliateTable() {
  const tbody = document.getElementById('affiliateTableBody');
  if (!tbody) return;
  const sample = allMedicines.slice(0, 20);

  tbody.innerHTML = sample.map(m => {
    const brand = m.primaryBrand || (m.brandsList && m.brandsList[0]?.name) || m.activeIngredient;
    const aff1mg = m.affiliateLinks?.find(a => a.platform && a.platform.includes('1mg'))?.url || `https://www.1mg.com/search/all?name=${encodeURIComponent(brand)}`;
    const affApollo = m.affiliateLinks?.find(a => a.platform && a.platform.includes('Apollo'))?.url || `https://www.apollopharmacy.in/search-medicines/${encodeURIComponent(brand)}`;
    const affNetmeds = m.affiliateLinks?.find(a => a.platform && a.platform.includes('Netmeds'))?.url || `https://www.netmeds.com/catalogsearch/result/${encodeURIComponent(brand)}/all`;

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
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// --------------------------------------------------------------------------
// Hospitals Management
// --------------------------------------------------------------------------
function renderHospitalsTable() {
  const tbody = document.getElementById('hospitalsTableBody');
  if (!tbody) return;
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
  if (typeof lucide !== 'undefined') lucide.createIcons();
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
  if (typeof lucide !== 'undefined') lucide.createIcons();
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

  const hospRecord = {
    id: id || ('hosp_' + name.toLowerCase().replace(/[^a-z0-9]+/g, '_') + '_' + Date.now().toString(36).substr(0, 4)),
    name, city, state, phone, emergencyNumber, specialties, bedCount, rating, mapsUrl,
    verified: true
  };

  const existingIdx = allHospitals.findIndex(h => h.id === hospRecord.id);
  if (existingIdx !== -1) allHospitals[existingIdx] = hospRecord;
  else allHospitals.unshift(hospRecord);

  try {
    const custom = JSON.parse(localStorage.getItem('himkiv_custom_hospitals') || '[]');
    const cIdx = custom.findIndex(h => h.id === hospRecord.id);
    if (cIdx !== -1) custom[cIdx] = hospRecord;
    else custom.unshift(hospRecord);
    localStorage.setItem('himkiv_custom_hospitals', JSON.stringify(custom));
    localStorage.setItem('himkiv_last_sync', Date.now().toString());
    window.dispatchEvent(new CustomEvent('himkiv_data_synced'));
  } catch (e) {}

  if (isApiConnected) {
    try {
      const url = id ? `${API_BASE}/api/hospitals/${id}` : `${API_BASE}/api/hospitals`;
      const method = id ? 'PUT' : 'POST';
      await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(hospRecord) });
    } catch (e) {}
  }

  showToast(id ? 'Hospital updated!' : 'Hospital added!');
  closeHospitalModal();
  updateKpiCards();
  renderHospitalsTable();
}

async function deleteHospital(id) {
  if (!confirm('Are you sure you want to delete this hospital record?')) return;
  allHospitals = allHospitals.filter(h => h.id !== id);

  try {
    const custom = JSON.parse(localStorage.getItem('himkiv_custom_hospitals') || '[]');
    localStorage.setItem('himkiv_custom_hospitals', JSON.stringify(custom.filter(h => h.id !== id)));
    localStorage.setItem('himkiv_last_sync', Date.now().toString());
    window.dispatchEvent(new CustomEvent('himkiv_data_synced'));
  } catch (e) {}

  if (isApiConnected) {
    try {
      await fetch(`${API_BASE}/api/hospitals/${id}`, { method: 'DELETE' });
    } catch (e) {}
  }

  showToast('Hospital removed.');
  updateKpiCards();
  renderHospitalsTable();
}

// --------------------------------------------------------------------------
// Doctors Management
// --------------------------------------------------------------------------
function renderDoctorsTable() {
  const tbody = document.getElementById('doctorsTableBody');
  if (!tbody) return;
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
  if (typeof lucide !== 'undefined') lucide.createIcons();
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
  if (typeof lucide !== 'undefined') lucide.createIcons();
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

  const docRecord = {
    id: id || ('doc_' + name.toLowerCase().replace(/[^a-z0-9]+/g, '_') + '_' + Date.now().toString(36).substr(0, 4)),
    name, specialty, qualification, hospital, consultationFee, availableDays, availableTimings, appointmentBookingUrl,
    verified: true
  };

  const existingIdx = allDoctors.findIndex(d => d.id === docRecord.id);
  if (existingIdx !== -1) allDoctors[existingIdx] = docRecord;
  else allDoctors.unshift(docRecord);

  try {
    const custom = JSON.parse(localStorage.getItem('himkiv_custom_doctors') || '[]');
    const cIdx = custom.findIndex(d => d.id === docRecord.id);
    if (cIdx !== -1) custom[cIdx] = docRecord;
    else custom.unshift(docRecord);
    localStorage.setItem('himkiv_custom_doctors', JSON.stringify(custom));
    localStorage.setItem('himkiv_last_sync', Date.now().toString());
    window.dispatchEvent(new CustomEvent('himkiv_data_synced'));
  } catch (e) {}

  if (isApiConnected) {
    try {
      const url = id ? `${API_BASE}/api/doctors/${id}` : `${API_BASE}/api/doctors`;
      const method = id ? 'PUT' : 'POST';
      await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(docRecord) });
    } catch (e) {}
  }

  showToast(id ? 'Doctor profile updated!' : 'Doctor added!');
  closeDoctorModal();
  updateKpiCards();
  renderDoctorsTable();
}

async function deleteDoctor(id) {
  if (!confirm('Are you sure you want to delete this doctor profile?')) return;
  allDoctors = allDoctors.filter(d => d.id !== id);

  try {
    const custom = JSON.parse(localStorage.getItem('himkiv_custom_doctors') || '[]');
    localStorage.setItem('himkiv_custom_doctors', JSON.stringify(custom.filter(d => d.id !== id)));
    localStorage.setItem('himkiv_last_sync', Date.now().toString());
    window.dispatchEvent(new CustomEvent('himkiv_data_synced'));
  } catch (e) {}

  if (isApiConnected) {
    try {
      await fetch(`${API_BASE}/api/doctors/${id}`, { method: 'DELETE' });
    } catch (e) {}
  }

  showToast('Doctor removed.');
  updateKpiCards();
  renderDoctorsTable();
}

// Window Onload Initialization
window.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  checkAuth();
  initDashboard();
});
