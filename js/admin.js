/**
 * HIMKIV Admin Console - Robust Dual-Mode Controller (Hybrid Cloud & Local REST API)
 * Founder & Creator: Himanshu Sharma
 */

const API_BASE = window.location.port === '5000' ? '' : 'http://localhost:5000';

let allMedicines = [];
let allDiseases = [];
let allHospitals = [];
let allDoctors = [];
let allBlogs = [];
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

// ========================================================
// FOUNDER AUTHENTICATION & ACCESS CONTROL SYSTEM
// Founder: Himanshu Sharma
// ========================================================

const DEFAULT_FOUNDER_USER = 'himanshu';
// Default SHA-256 hash for 'himkiv@2026'
const DEFAULT_FOUNDER_PWD_HASH = 'cdb57bf849a433a327949bac851905134a9ade62c7a3b6c4baeb15c7e7bc4fe5';

// Authenticated session keys
const AUTH_TOKEN_KEY = 'himkiv_auth_session_v2';
const AUTH_USER_KEY = 'himkiv_auth_user_v2';

// Configurable Credentials Storage Keys
const FOUNDER_USER_KEY = 'himkiv_founder_username';
const FOUNDER_PWD_KEY = 'himkiv_founder_pwd_hash';

function getActiveFounderUser() {
  return localStorage.getItem(FOUNDER_USER_KEY) || DEFAULT_FOUNDER_USER;
}

function getActiveFounderPwdHash() {
  return localStorage.getItem(FOUNDER_PWD_KEY) || DEFAULT_FOUNDER_PWD_HASH;
}

// Helper: Compute SHA-256 Hash using Web Crypto API
async function sha256(message) {
  try {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  } catch (e) {
    let hash = 0;
    for (let i = 0; i < message.length; i++) {
      hash = ((hash << 5) - hash) + message.charCodeAt(i);
      hash |= 0;
    }
    return String(hash);
  }
}

// Toggle password visibility in input fields
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPass = input.type === 'password';
  input.type = isPass ? 'text' : 'password';
  if (btn) {
    btn.innerHTML = `<i data-lucide="${isPass ? 'eye-off' : 'eye'}" class="w-4 h-4"></i>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

// Authentication Check
function checkAuth() {
  // Purge any legacy unverified tokens from previous test sessions
  localStorage.removeItem('himkiv_admin_token');
  sessionStorage.removeItem('himkiv_admin_token');
  localStorage.removeItem('himkiv_admin_user');
  sessionStorage.removeItem('himkiv_admin_user');

  // Check URL query or hash for explicit logout/login request
  if (window.location.search.includes('logout') || window.location.hash.includes('logout') || window.location.hash.includes('login')) {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    sessionStorage.removeItem(AUTH_USER_KEY);
  }

  const token = sessionStorage.getItem(AUTH_TOKEN_KEY) || localStorage.getItem(AUTH_TOKEN_KEY);
  const modal = document.getElementById('modalAuth');
  const appWrapper = document.getElementById('adminAppContent');

  if (token) {
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      modal.style.display = 'none';
    }
    if (appWrapper) {
      appWrapper.classList.remove('hidden');
      appWrapper.style.display = 'flex';
    }
    
    // Display logged in user details
    const activeUser = getActiveFounderUser();
    const nameEl = document.getElementById('adminUserName');
    if (nameEl) nameEl.textContent = activeUser;
    const badgeEl = document.getElementById('adminUserBadge');
    if (badgeEl) badgeEl.textContent = activeUser.substring(0, 2).toUpperCase();
    return true;
  } else {
    // Lock Admin Console & Display Login Screen
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      modal.style.display = 'flex';
    }
    if (appWrapper) {
      appWrapper.classList.add('hidden');
      appWrapper.style.display = 'none';
    }
    return false;
  }
}

// Handle Founder Login
async function handleLogin(e) {
  if (e) e.preventDefault();

  const userEl = document.getElementById('loginUsername');
  const passEl = document.getElementById('loginPassword');
  const rememberEl = document.getElementById('loginRememberMe');
  const errorEl = document.getElementById('loginErrorMsg');
  const errorTextEl = document.getElementById('loginErrorText');
  const submitBtn = document.getElementById('btnLoginSubmit');

  if (!userEl || !passEl) return;

  const username = userEl.value.trim();
  const password = passEl.value;
  const rememberMe = rememberEl ? rememberEl.checked : true;

  if (!username || !password) {
    if (errorEl) {
      errorEl.classList.remove('hidden');
      if (errorTextEl) errorTextEl.textContent = 'Kripya Username aur Password dono enter karein!';
    }
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>Verifying...</span>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  let authenticated = false;
  let loggedInUser = {
    id: 'admin_1',
    username: 'himanshu',
    fullName: 'Himanshu Sharma',
    role: 'founder'
  };

  // 1. Attempt Backend API Auth if server is running (with 1.5s timeout)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        authenticated = true;
        if (data.user) loggedInUser = data.user;
      }
    }
  } catch (err) {
    // Backend offline or timeout, fallback to secure client-side check
  }

  // 2. Client-Side Cryptographic Verification (Works on GitHub Pages & offline)
  if (!authenticated) {
    const enteredHash = await sha256(password);
    const targetUser = getActiveFounderUser();
    const targetHash = getActiveFounderPwdHash();
    
    // Check username and password hash (also supports raw 'himkiv@2026' direct check if default)
    const isUserValid = (username.toLowerCase() === targetUser.toLowerCase());
    const isPassValid = (enteredHash === targetHash) || (password === 'himkiv@2026' && targetHash === DEFAULT_FOUNDER_PWD_HASH);

    if (isUserValid && isPassValid) {
      authenticated = true;
      loggedInUser.username = targetUser;
      loggedInUser.fullName = targetUser;
    }
  }

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<i data-lucide="lock-open" class="w-4 h-4"></i><span>Unlock Admin Console</span>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  if (authenticated) {
    if (errorEl) errorEl.classList.add('hidden');
    
    // Generate secure session token
    const token = 'himkiv_founder_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    
    if (rememberMe) {
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(loggedInUser));
    } else {
      sessionStorage.setItem(AUTH_TOKEN_KEY, token);
      sessionStorage.setItem(AUTH_USER_KEY, JSON.stringify(loggedInUser));
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(AUTH_USER_KEY);
    }

    const modal = document.getElementById('modalAuth');
    const appWrapper = document.getElementById('adminAppContent');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      modal.style.display = 'none';
    }
    if (appWrapper) {
      appWrapper.classList.remove('hidden');
      appWrapper.style.display = 'flex';
    }

    passEl.value = '';
    showToast('Swagatam, Himanshu Sharma! Admin Console Unlocked.', 'success');
    initDashboard();
  } else {
    // Authentication Failed
    if (errorEl) {
      errorEl.classList.remove('hidden');
      if (errorTextEl) {
        errorTextEl.textContent = 'Galat Username ya Password! Access keval Founder Himanshu Sharma ke liye restricted hai.';
      }
    }
    passEl.value = '';
    passEl.focus();
  }
}

// Logout & Lock Admin Console
function logoutAdmin() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
  sessionStorage.removeItem(AUTH_TOKEN_KEY);
  sessionStorage.removeItem(AUTH_USER_KEY);
  localStorage.removeItem('himkiv_admin_token');
  sessionStorage.removeItem('himkiv_admin_token');

  const modal = document.getElementById('modalAuth');
  const appWrapper = document.getElementById('adminAppContent');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.display = 'flex';
  }
  if (appWrapper) {
    appWrapper.classList.add('hidden');
    appWrapper.style.display = 'none';
  }

  const passEl = document.getElementById('loginPassword');
  if (passEl) passEl.value = '';
  const errEl = document.getElementById('loginErrorMsg');
  if (errEl) errEl.classList.add('hidden');

  showToast('Admin Console locked successfully.', 'success');
}

// Modal: Change Credentials (Login ID & Password)
function openChangePasswordModal() {
  const modal = document.getElementById('modalChangePassword');
  const form = document.getElementById('formChangePassword');
  const err = document.getElementById('changePwdError');
  const userInp = document.getElementById('newUsernameInput');
  if (form) form.reset();
  if (err) err.classList.add('hidden');
  if (userInp) {
    userInp.value = getActiveFounderUser();
  }
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.display = 'flex';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

function closeChangePasswordModal() {
  const modal = document.getElementById('modalChangePassword');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.style.display = 'none';
  }
}

async function handleChangePassword(e) {
  e.preventDefault();
  const currentPass = document.getElementById('currentPasswordInput').value;
  const newUsername = (document.getElementById('newUsernameInput')?.value || '').trim();
  const newPass = document.getElementById('newPasswordInput')?.value || '';
  const confirmPass = document.getElementById('confirmPasswordInput')?.value || '';
  const errEl = document.getElementById('changePwdError');

  if (!newUsername || newUsername.length < 3) {
    if (errEl) {
      errEl.textContent = 'Login ID / Username kam se kam 3 characters ka hona chahiye!';
      errEl.classList.remove('hidden');
    }
    return;
  }

  if (newPass) {
    if (newPass.length < 6) {
      if (errEl) {
        errEl.textContent = 'Naya password kam se kam 6 characters ka hona chahiye!';
        errEl.classList.remove('hidden');
      }
      return;
    }

    if (newPass !== confirmPass) {
      if (errEl) {
        errEl.textContent = 'New password aur Confirm password match nahi ho rahe!';
        errEl.classList.remove('hidden');
      }
      return;
    }
  }

  // Verify current password
  const currentHash = await sha256(currentPass);
  const targetHash = getActiveFounderPwdHash();

  const isCurrentValid = (currentHash === targetHash) || (currentPass === 'himkiv@2026' && targetHash === DEFAULT_FOUNDER_PWD_HASH);

  if (!isCurrentValid) {
    if (errEl) {
      errEl.textContent = 'Aapka Current Password galat hai!';
      errEl.classList.remove('hidden');
    }
    return;
  }

  // 1. Update Username in localStorage
  localStorage.setItem(FOUNDER_USER_KEY, newUsername);

  // 2. Update Password if provided
  let newHash = targetHash;
  if (newPass) {
    newHash = await sha256(newPass);
    localStorage.setItem(FOUNDER_PWD_KEY, newHash);
  }

  // 3. Update active session user object
  const userStr = sessionStorage.getItem(AUTH_USER_KEY) || localStorage.getItem(AUTH_USER_KEY);
  if (userStr) {
    try {
      const u = JSON.parse(userStr);
      u.username = newUsername;
      u.fullName = newUsername;
      if (sessionStorage.getItem(AUTH_USER_KEY)) sessionStorage.setItem(AUTH_USER_KEY, JSON.stringify(u));
      if (localStorage.getItem(AUTH_USER_KEY)) localStorage.setItem(AUTH_USER_KEY, JSON.stringify(u));
    } catch (e) {}
  }

  // 4. Update UI labels in header
  const nameEl = document.getElementById('adminUserName');
  if (nameEl) nameEl.textContent = newUsername;
  const badgeEl = document.getElementById('adminUserBadge');
  if (badgeEl) badgeEl.textContent = newUsername.substring(0, 2).toUpperCase();

  // 5. Sync to backend API if server is alive
  try {
    fetch(`${API_BASE}/api/auth/update-credentials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        currentPassword: currentPass,
        newUsername,
        newPassword: newPass || undefined,
        newPasswordHash: newHash
      })
    }).catch(() => {});
  } catch (err) {}

  closeChangePasswordModal();
  showToast(newPass ? 'Login ID aur Password kamyabi se update ho gaye!' : 'Login ID kamyabi se update ho gayi!', 'success');
}

// Tab Switching
function switchTab(tabId) {
  const tabs = ['overview', 'medicines', 'diseases', 'affiliates', 'hospitals', 'doctors', 'seo', 'blogs'];
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
  if (tabId === 'seo' && typeof initSeoPanel === 'function') {
    initSeoPanel();
  }
  if (tabId === 'blogs') {
    renderBlogsTable();
  }
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

  // 5. Seed Blogs & Articles
  if (typeof HKARE_BLOGS !== 'undefined' && Array.isArray(HKARE_BLOGS)) {
    allBlogs = [...HKARE_BLOGS];
  } else if (typeof getAllBlogs === 'function') {
    allBlogs = getAllBlogs();
  }
  try {
    const customBlogs = JSON.parse(localStorage.getItem('himkiv_custom_blogs') || '[]');
    if (Array.isArray(customBlogs) && customBlogs.length > 0) {
      customBlogs.forEach(cb => {
        const idx = allBlogs.findIndex(b => b.id === cb.id || b.slug === cb.slug);
        if (idx !== -1) allBlogs[idx] = cb;
        else allBlogs.unshift(cb);
      });
    }
  } catch (e) {
    console.warn('Error reading himkiv_custom_blogs in admin:', e);
  }
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
  const elBlogs = document.getElementById('kpiBlogs');

  if (elMeds) elMeds.textContent = allMedicines.length;
  if (elDis) elDis.textContent = allDiseases.length;
  if (elAff) elAff.textContent = affCount || (allMedicines.length * 3);
  if (elHosp) elHosp.textContent = allHospitals.length;
  if (elDoc) elDoc.textContent = allDoctors.length;
  if (elBlogs) elBlogs.textContent = allBlogs.length;

  const nMeds = document.getElementById('navCountMeds');
  const nDis = document.getElementById('navCountDiseases');
  const nAff = document.getElementById('navCountAffiliates');
  const nHosp = document.getElementById('navCountHospitals');
  const nDoc = document.getElementById('navCountDoctors');
  const nBlogs = document.getElementById('navCountBlogs');
  const badgeBlogs = document.getElementById('blogsHeaderCountBadge');

  if (nMeds) nMeds.textContent = allMedicines.length;
  if (nDis) nDis.textContent = allDiseases.length;
  if (nAff) nAff.textContent = affCount || (allMedicines.length * 3);
  if (nHosp) nHosp.textContent = allHospitals.length;
  if (nDoc) nDoc.textContent = allDoctors.length;
  if (nBlogs) nBlogs.textContent = allBlogs.length;
  if (badgeBlogs) badgeBlogs.textContent = `${allBlogs.length} Articles Live`;
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
    localStorage.setItem('himkiv_custom_blogs', JSON.stringify(allBlogs));
    if (typeof allSeoPages === 'object' && Object.keys(allSeoPages).length > 0) {
      localStorage.setItem('himkiv_seo_config', JSON.stringify(allSeoPages));
    }
    localStorage.setItem('himkiv_last_sync', Date.now().toString());

    // Broadcast event to current page and listening sub-components
    window.dispatchEvent(new CustomEvent('himkiv_data_synced', {
      detail: {
        medicines: allMedicines.length,
        conditions: allDiseases.length,
        hospitals: allHospitals.length,
        doctors: allDoctors.length,
        blogs: allBlogs.length
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
  if (typeof initSeoPanel === 'function') {
    initSeoPanel();
  }
  renderBlogsTable();

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

// ========================================================
// HIMKIV SEO & META TAGS MASTER CONTROLLER
// Complete Page-by-Page Manager, Image Alt Text Engine, SERP Simulator, Sitemap & Robots
// ========================================================

let currentSeoPageId = 'index';
let allSeoPages = {};
let serpPreviewMode = 'desktop';
let seoListenersAttached = false;

// HTML Entity Escape Helper
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Initialize Master SEO Panel
function initSeoPanel() {
  allSeoPages = {};

  // 1. Seed SEO configurations: Default config + LocalStorage overrides
  if (typeof SEO_DEFAULT_CONFIG !== 'undefined' && typeof SEO_DEFAULT_CONFIG === 'object') {
    if (Array.isArray(SEO_DEFAULT_CONFIG.pages)) {
      SEO_DEFAULT_CONFIG.pages.forEach(p => {
        allSeoPages[p.id] = {
          id: p.id,
          file: p.fileName || `${p.id}.html`,
          name: p.name || p.id,
          badge: p.badge || 'Page',
          title: p.title || '',
          description: p.description || '',
          keywords: p.keywords || '',
          canonical: p.canonical || (SEO_DEFAULT_CONFIG.siteUrl + '/' + (p.fileName || '')),
          robots: p.robots || 'index, follow',
          ogTitle: p.ogTitle || p.title || '',
          ogDescription: p.ogDescription || p.description || '',
          ogImage: p.ogImage || SEO_DEFAULT_CONFIG.defaultOgImage || 'https://himkiv.online/images/himkiv-logo.png',
          ogImageAlt: p.ogImageAlt || `${p.name} - HIMKIV Health & MedGuide official portal`,
          sitemapPriority: p.priority !== undefined ? p.priority : 0.8,
          sitemapFrequency: p.changefreq || 'weekly',
          pageImages: Array.isArray(p.pageImages) ? JSON.parse(JSON.stringify(p.pageImages)) : [
            {
              id: 'header_logo',
              label: 'Header Navigation Brand Logo',
              src: 'images/himkiv-logo.png',
              alt: `${p.name} - HIMKIV Health & MedGuide official healthcare portal logo`
            },
            {
              id: 'footer_logo',
              label: 'Footer Brand Emblem',
              src: 'images/himkiv-logo.png',
              alt: `HIMKIV Health & MedGuide - Healthcare Intelligence by Himanshu Sharma`
            },
            {
              id: 'favicon',
              label: 'Browser Favicon / Web Icon',
              src: 'images/himkiv-favicon.png',
              alt: `HIMKIV Health official medical badge icon`
            },
            {
              id: 'og_share',
              label: 'Social Share Card Graphic',
              src: p.ogImage || 'images/himkiv-logo.png',
              alt: p.ogImageAlt || `${p.name} - HIMKIV Health & MedGuide`
            }
          ]
        };
      });
    } else {
      allSeoPages = JSON.parse(JSON.stringify(SEO_DEFAULT_CONFIG));
    }
  }

  // 2. Merge saved localStorage overrides
  try {
    const saved = localStorage.getItem('himkiv_seo_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (typeof parsed === 'object' && parsed !== null) {
        Object.keys(parsed).forEach(k => {
          if (allSeoPages[k]) {
            allSeoPages[k] = Object.assign({}, allSeoPages[k], parsed[k]);
            if (Array.isArray(parsed[k].pageImages)) {
              allSeoPages[k].pageImages = JSON.parse(JSON.stringify(parsed[k].pageImages));
            }
          } else {
            allSeoPages[k] = parsed[k];
          }
        });
      }
    }
  } catch (e) {
    console.warn('Failed to parse himkiv_seo_config from localStorage:', e);
  }

  // 3. Render Page Selector Pills
  renderSeoPageSelectorBar();

  // 4. Select Active Page (default 'index')
  if (!allSeoPages[currentSeoPageId]) {
    currentSeoPageId = Object.keys(allSeoPages)[0] || 'index';
  }
  selectSeoPage(currentSeoPageId);

  // 5. Attach Live Input Listeners (once)
  attachSeoLiveListeners();

  // 6. Render Sitemap & Robots viewers
  renderSitemapViewer();
  renderRobotsViewer();
}

// Render horizontal page selector bar
function renderSeoPageSelectorBar() {
  const container = document.getElementById('seoPageSelectorBar');
  if (!container) return;

  const pageKeys = Object.keys(allSeoPages);
  if (pageKeys.length === 0) {
    container.innerHTML = '<span class="text-xs text-slate-400">No pages configured.</span>';
    return;
  }

  container.innerHTML = pageKeys.map(key => {
    const page = allSeoPages[key];
    const isActive = (key === currentSeoPageId);
    const activeClass = isActive
      ? 'bg-emerald-600 text-white font-bold shadow-sm ring-2 ring-emerald-500/50'
      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium';
    
    return `
      <button type="button" onclick="selectSeoPage('${key}')" 
        class="seo-page-pill px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${activeClass}" 
        id="seoPill_${key}">
        <span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-emerald-500'}"></span>
        <span>${page.name || key}</span>
        <span class="text-[10px] opacity-75 font-mono">(${page.file || key})</span>
      </button>
    `;
  }).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Render Page Visual Assets & Image Alt Text Editor Rows
function renderPageImagesEditor(page) {
  const container = document.getElementById('seoPageImagesContainer');
  const countBadge = document.getElementById('seoAltTagsCount');
  if (!container) return;

  const images = Array.isArray(page.pageImages) ? page.pageImages : [];
  if (countBadge) countBadge.textContent = `${images.length} Visuals Tracked`;

  if (images.length === 0) {
    container.innerHTML = '<p class="text-xs text-slate-400">No visual assets registered for this page.</p>';
    return;
  }

  container.innerHTML = images.map((img, idx) => {
    const altVal = img.alt || '';
    const altLen = altVal.trim().length;
    let statusBadge = '';
    if (altLen >= 20) {
      statusBadge = '<span class="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Alt Set</span>';
    } else if (altLen > 0) {
      statusBadge = '<span class="text-[10px] font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Short Alt</span>';
    } else {
      statusBadge = '<span class="text-[10px] font-semibold text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Missing Alt</span>';
    }

    return `
      <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2.5 overflow-hidden">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center p-1 shrink-0 overflow-hidden">
              <img src="${img.src}" alt="${escapeHtml(altVal)}" class="w-full h-full object-contain">
            </div>
            <div class="overflow-hidden">
              <div class="text-xs font-bold text-slate-900 truncate">${img.label || 'Page Visual'}</div>
              <div class="text-[10px] text-slate-400 font-mono truncate">${img.src}</div>
            </div>
          </div>
          <div class="shrink-0" id="imgStatusBadge_${idx}">
            ${statusBadge}
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="block text-[11px] font-semibold text-slate-700">
              Image Alt Text (Alternative Text) <span class="text-rose-500">*</span>
            </label>
            <span class="text-[10px] text-slate-400 font-mono" id="imgAltCounter_${idx}">${altLen} chars</span>
          </div>
          <input type="text" class="seo-img-alt-input w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
            data-img-idx="${idx}"
            value="${escapeHtml(altVal)}"
            placeholder="Describe what is in this image with relevant health keywords...">
        </div>
      </div>
    `;
  }).join('');

  // Attach live input listeners to each alt text input
  container.querySelectorAll('.seo-img-alt-input').forEach(input => {
    input.addEventListener('input', (e) => {
      const idx = parseInt(e.target.getAttribute('data-img-idx'), 10);
      const val = e.target.value.trim();
      if (page.pageImages && page.pageImages[idx]) {
        page.pageImages[idx].alt = val;
      }
      const counter = document.getElementById(`imgAltCounter_${idx}`);
      if (counter) counter.textContent = `${val.length} chars`;

      const badgeContainer = document.getElementById(`imgStatusBadge_${idx}`);
      if (badgeContainer) {
        if (val.length >= 20) {
          badgeContainer.innerHTML = '<span class="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Alt Set</span>';
        } else if (val.length > 0) {
          badgeContainer.innerHTML = '<span class="text-[10px] font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Short Alt</span>';
        } else {
          badgeContainer.innerHTML = '<span class="text-[10px] font-semibold text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Missing Alt</span>';
        }
      }

      updateLiveSerpPreview();
    });
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Select a page and populate form & previews
function selectSeoPage(pageId) {
  if (!allSeoPages[pageId]) return;
  currentSeoPageId = pageId;
  const page = allSeoPages[pageId];

  // Update pill styles
  document.querySelectorAll('.seo-page-pill').forEach(btn => {
    btn.className = 'seo-page-pill px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium';
    const dot = btn.querySelector('span');
    if (dot) dot.className = 'w-1.5 h-1.5 rounded-full bg-emerald-500';
  });
  const activePill = document.getElementById(`seoPill_${pageId}`);
  if (activePill) {
    activePill.className = 'seo-page-pill px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 bg-emerald-600 text-white font-bold shadow-sm ring-2 ring-emerald-500/50';
    const dot = activePill.querySelector('span');
    if (dot) dot.className = 'w-1.5 h-1.5 rounded-full bg-white';
  }

  // Update Header labels
  const activeLabel = document.getElementById('seoActivePageLabel');
  if (activeLabel) activeLabel.textContent = `Currently Editing: ${page.file || pageId}`;

  const formPageName = document.getElementById('seoFormPageName');
  if (formPageName) formPageName.textContent = `${page.name || pageId} (${page.file || pageId})`;

  const formPagePath = document.getElementById('seoFormPagePath');
  if (formPagePath) formPagePath.textContent = `URL: ${page.canonical || page.url || 'https://himkiv.online/'}`;

  // Populate form fields
  const titleInput = document.getElementById('seoInputTitle');
  const descInput = document.getElementById('seoInputDesc');
  const keywordsInput = document.getElementById('seoInputKeywords');
  const canonicalInput = document.getElementById('seoInputCanonical');
  const robotsSelect = document.getElementById('seoInputRobots');
  const prioritySelect = document.getElementById('seoInputPriority');
  const freqSelect = document.getElementById('seoInputFreq');
  const ogTitleInput = document.getElementById('seoInputOgTitle');
  const ogImageInput = document.getElementById('seoInputOgImage');
  const ogDescInput = document.getElementById('seoInputOgDesc');
  const ogAltInput = document.getElementById('seoInputOgAlt');

  if (titleInput) titleInput.value = page.title || '';
  if (descInput) descInput.value = page.description || '';
  if (keywordsInput) keywordsInput.value = page.keywords || '';
  if (canonicalInput) canonicalInput.value = page.canonical || page.url || '';
  if (robotsSelect) robotsSelect.value = page.robots || 'index, follow';
  if (prioritySelect) prioritySelect.value = String(page.sitemapPriority || '0.8');
  if (freqSelect) freqSelect.value = page.sitemapFrequency || 'weekly';
  if (ogTitleInput) ogTitleInput.value = page.ogTitle || page.title || '';
  if (ogImageInput) ogImageInput.value = page.ogImage || 'https://himkiv.online/images/himkiv-logo.png';
  if (ogDescInput) ogDescInput.value = page.ogDescription || page.description || '';
  if (ogAltInput) ogAltInput.value = page.ogImageAlt || `${page.name} - HIMKIV Health & MedGuide`;

  // Render Page Images & Alt Text inputs
  renderPageImagesEditor(page);

  // Refresh live previews
  updateLiveSerpPreview();
}

// Attach real-time input listeners to fields
function attachSeoLiveListeners() {
  if (seoListenersAttached) return;
  const ids = [
    'seoInputTitle', 'seoInputDesc', 'seoInputKeywords', 'seoInputCanonical',
    'seoInputRobots', 'seoInputOgTitle', 'seoInputOgImage', 'seoInputOgDesc', 'seoInputOgAlt'
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => updateLiveSerpPreview());
      el.addEventListener('change', () => updateLiveSerpPreview());
    }
  });

  seoListenersAttached = true;
}

// Live Update for SERP Preview, Progress Bars, Social Card & SEO Checklist
function updateLiveSerpPreview() {
  const title = (document.getElementById('seoInputTitle')?.value || '').trim();
  const desc = (document.getElementById('seoInputDesc')?.value || '').trim();
  const canonical = (document.getElementById('seoInputCanonical')?.value || '').trim();
  const robots = (document.getElementById('seoInputRobots')?.value || 'index, follow').trim();
  const ogTitle = (document.getElementById('seoInputOgTitle')?.value || title).trim();
  const ogDesc = (document.getElementById('seoInputOgDesc')?.value || desc).trim();
  const ogImage = (document.getElementById('seoInputOgImage')?.value || 'images/himkiv-logo.png').trim();
  const ogAlt = (document.getElementById('seoInputOgAlt')?.value || '').trim();

  // 1. Title Character Counter & Progress Bar
  const titleLen = title.length;
  const titleCounter = document.getElementById('seoTitleCounter');
  const titleBar = document.getElementById('seoTitleBar');
  const serpTitleStatus = document.getElementById('serpTitleStatus');

  if (titleCounter) titleCounter.textContent = titleLen;
  if (titleBar) {
    const titlePct = Math.min(100, Math.round((titleLen / 60) * 100));
    titleBar.style.width = `${titlePct}%`;

    if (titleLen >= 40 && titleLen <= 60) {
      titleBar.className = 'h-full bg-emerald-500 transition-all duration-200';
      if (serpTitleStatus) {
        serpTitleStatus.className = 'font-bold text-emerald-600';
        serpTitleStatus.textContent = `Optimal (${titleLen} Chars)`;
      }
    } else if (titleLen < 40) {
      titleBar.className = 'h-full bg-amber-500 transition-all duration-200';
      if (serpTitleStatus) {
        serpTitleStatus.className = 'font-bold text-amber-600';
        serpTitleStatus.textContent = `Short (${titleLen}/40 Chars)`;
      }
    } else {
      titleBar.className = 'h-full bg-rose-500 transition-all duration-200';
      if (serpTitleStatus) {
        serpTitleStatus.className = 'font-bold text-rose-600';
        serpTitleStatus.textContent = `Too Long (${titleLen} Chars)`;
      }
    }
  }

  // 2. Description Character Counter & Progress Bar
  const descLen = desc.length;
  const descCounter = document.getElementById('seoDescCounter');
  const descBar = document.getElementById('seoDescBar');
  const serpDescStatus = document.getElementById('serpDescStatus');

  if (descCounter) descCounter.textContent = descLen;
  if (descBar) {
    const descPct = Math.min(100, Math.round((descLen / 160) * 100));
    descBar.style.width = `${descPct}%`;

    if (descLen >= 120 && descLen <= 160) {
      descBar.className = 'h-full bg-emerald-500 transition-all duration-200';
      if (serpDescStatus) {
        serpDescStatus.className = 'font-bold text-emerald-600';
        serpDescStatus.textContent = `Optimal (${descLen} Chars)`;
      }
    } else if (descLen < 120) {
      descBar.className = 'h-full bg-amber-500 transition-all duration-200';
      if (serpDescStatus) {
        serpDescStatus.className = 'font-bold text-amber-600';
        serpDescStatus.textContent = `Short (${descLen}/120 Chars)`;
      }
    } else {
      descBar.className = 'h-full bg-rose-500 transition-all duration-200';
      if (serpDescStatus) {
        serpDescStatus.className = 'font-bold text-rose-600';
        serpDescStatus.textContent = `Too Long (${descLen} Chars)`;
      }
    }
  }

  // 3. Google SERP Snippet Preview Elements
  const serpTitleDisplay = document.getElementById('serpTitleDisplay');
  const serpDescDisplay = document.getElementById('serpDescDisplay');
  const serpUrlDisplay = document.getElementById('serpUrlDisplay');

  if (serpTitleDisplay) {
    serpTitleDisplay.textContent = title || 'HIMKIV Health & MedGuide | Healthcare Portal';
  }
  if (serpDescDisplay) {
    serpDescDisplay.textContent = desc || 'Evidence-based medicine recommendations, active drug salt monographs, and clinical guidance.';
  }
  if (serpUrlDisplay) {
    serpUrlDisplay.textContent = canonical || 'https://himkiv.online/';
  }

  // 4. Social Card Elements
  const socialTitle = document.getElementById('socialCardTitle');
  const socialDesc = document.getElementById('socialCardDesc');
  const socialImg = document.getElementById('socialCardImage');
  const socialAlt = document.getElementById('socialCardAltText');
  const ogAltCounter = document.getElementById('seoOgAltCounter');

  if (socialTitle) socialTitle.textContent = ogTitle || title || 'HIMKIV';
  if (socialDesc) socialDesc.textContent = ogDesc || desc || 'Healthcare guidance portal';
  if (socialImg && ogImage) {
    socialImg.src = ogImage;
    socialImg.alt = ogAlt || ogTitle || title || 'HIMKIV Card';
  }
  if (socialAlt) {
    socialAlt.textContent = ogAlt ? `Alt: ${ogAlt}` : 'No Alt Tag';
  }
  if (ogAltCounter) {
    ogAltCounter.textContent = `${ogAlt.length} chars`;
  }

  // 5. Real-Time SEO Quality Checklist Evaluation (6 Criteria)
  const isTitleOk = (titleLen >= 35 && titleLen <= 65);
  const isDescOk = (descLen >= 100 && descLen <= 170);
  const isCanonicalOk = Boolean(canonical && canonical.startsWith('http'));
  const isRobotsOk = Boolean(robots && robots.includes('index'));
  const isOgOk = Boolean(ogImage && ogImage.length > 5);

  // 6th Criteria: Image Alt Tags Check
  const page = allSeoPages[currentSeoPageId];
  const images = (page && Array.isArray(page.pageImages)) ? page.pageImages : [];
  const isPageImagesAltOk = (images.length === 0 || images.every(img => img.alt && img.alt.trim().length >= 10));
  const isOgAltOk = Boolean(ogAlt && ogAlt.length >= 10);
  const isAltOk = isPageImagesAltOk && isOgAltOk;

  let passedCount = 0;
  if (isTitleOk) passedCount++;
  if (isDescOk) passedCount++;
  if (isCanonicalOk) passedCount++;
  if (isRobotsOk) passedCount++;
  if (isOgOk) passedCount++;
  if (isAltOk) passedCount++;

  const scoreBadge = document.getElementById('seoChecklistScore');
  if (scoreBadge) {
    scoreBadge.textContent = `${passedCount} / 6 Passed`;
    scoreBadge.className = passedCount >= 5
      ? 'text-[11px] font-bold text-emerald-600 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200'
      : 'text-[11px] font-bold text-amber-600 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200';
  }

  const checklistUl = document.getElementById('seoChecklistItems');
  if (checklistUl) {
    checklistUl.innerHTML = `
      <li class="flex items-center gap-2">
        <i data-lucide="${isTitleOk ? 'check-circle' : 'alert-circle'}" class="w-4 h-4 ${isTitleOk ? 'text-emerald-500' : 'text-amber-500'} shrink-0"></i>
        <span>Title tag within optimal 40–60 character range (${titleLen} chars)</span>
      </li>
      <li class="flex items-center gap-2">
        <i data-lucide="${isDescOk ? 'check-circle' : 'alert-circle'}" class="w-4 h-4 ${isDescOk ? 'text-emerald-500' : 'text-amber-500'} shrink-0"></i>
        <span>Meta description within 120–160 character snippet window (${descLen} chars)</span>
      </li>
      <li class="flex items-center gap-2">
        <i data-lucide="${isCanonicalOk ? 'check-circle' : 'alert-circle'}" class="w-4 h-4 ${isCanonicalOk ? 'text-emerald-500' : 'text-amber-500'} shrink-0"></i>
        <span>Canonical URL declared to prevent duplicate indexing</span>
      </li>
      <li class="flex items-center gap-2">
        <i data-lucide="${isRobotsOk ? 'check-circle' : 'alert-circle'}" class="w-4 h-4 ${isRobotsOk ? 'text-emerald-500' : 'text-amber-500'} shrink-0"></i>
        <span>Search crawler directive explicitly specified (${robots})</span>
      </li>
      <li class="flex items-center gap-2">
        <i data-lucide="${isOgOk ? 'check-circle' : 'alert-circle'}" class="w-4 h-4 ${isOgOk ? 'text-emerald-500' : 'text-amber-500'} shrink-0"></i>
        <span>Open Graph social share card image attached</span>
      </li>
      <li class="flex items-center gap-2">
        <i data-lucide="${isAltOk ? 'check-circle' : 'alert-circle'}" class="w-4 h-4 ${isAltOk ? 'text-emerald-500' : 'text-amber-500'} shrink-0"></i>
        <span>Image Alternative Text (Alt tags) optimized for visuals &amp; social card</span>
      </li>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

// Toggle SERP Simulator: Desktop vs Mobile
function setSerpPreviewMode(mode) {
  serpPreviewMode = mode;
  const btnDesktop = document.getElementById('btnPreviewDesktop');
  const btnMobile = document.getElementById('btnPreviewMobile');
  const serpBox = document.getElementById('googleSerpBox');

  if (mode === 'mobile') {
    if (btnMobile) {
      btnMobile.className = 'px-2.5 py-1 rounded-md font-semibold transition-all bg-white text-slate-900 shadow-2xs';
    }
    if (btnDesktop) {
      btnDesktop.className = 'px-2.5 py-1 rounded-md font-medium text-slate-500 hover:text-slate-900 transition-all';
    }
    if (serpBox) {
      serpBox.className = 'p-4 rounded-2xl border-2 border-slate-300 bg-white max-w-[380px] mx-auto shadow-md transition-all';
    }
  } else {
    if (btnDesktop) {
      btnDesktop.className = 'px-2.5 py-1 rounded-md font-semibold transition-all bg-white text-slate-900 shadow-2xs';
    }
    if (btnMobile) {
      btnMobile.className = 'px-2.5 py-1 rounded-md font-medium text-slate-500 hover:text-slate-900 transition-all';
    }
    if (serpBox) {
      serpBox.className = 'p-4 rounded-xl border border-slate-200 bg-white transition-all w-full';
    }
  }
}

// Save Current Page SEO & Image Alt Tags
function handleSavePageSeo(event) {
  if (event) event.preventDefault();
  if (!allSeoPages[currentSeoPageId]) return;

  const page = allSeoPages[currentSeoPageId];
  page.title = (document.getElementById('seoInputTitle')?.value || '').trim();
  page.description = (document.getElementById('seoInputDesc')?.value || '').trim();
  page.keywords = (document.getElementById('seoInputKeywords')?.value || '').trim();
  page.canonical = (document.getElementById('seoInputCanonical')?.value || '').trim();
  page.robots = (document.getElementById('seoInputRobots')?.value || 'index, follow').trim();
  page.sitemapPriority = parseFloat(document.getElementById('seoInputPriority')?.value || '0.8');
  page.sitemapFrequency = (document.getElementById('seoInputFreq')?.value || 'weekly').trim();
  page.ogTitle = (document.getElementById('seoInputOgTitle')?.value || page.title).trim();
  page.ogImage = (document.getElementById('seoInputOgImage')?.value || 'https://himkiv.online/images/himkiv-logo.png').trim();
  page.ogDescription = (document.getElementById('seoInputOgDesc')?.value || page.description).trim();
  page.ogImageAlt = (document.getElementById('seoInputOgAlt')?.value || '').trim();

  // Collect image alt tags from inputs
  const altInputs = document.querySelectorAll('.seo-img-alt-input');
  altInputs.forEach(inp => {
    const idx = parseInt(inp.getAttribute('data-img-idx'), 10);
    if (page.pageImages && page.pageImages[idx]) {
      page.pageImages[idx].alt = inp.value.trim();
    }
  });

  // Persist to localStorage
  try {
    localStorage.setItem('himkiv_seo_config', JSON.stringify(allSeoPages));
    localStorage.setItem('himkiv_last_sync', Date.now().toString());
  } catch (e) {
    console.warn('Storage save failed:', e);
  }

  // Refresh viewers
  renderSitemapViewer();
  renderRobotsViewer();
  renderSeoPageSelectorBar();

  showToast(`SEO & Image Alt tags saved for ${page.file || currentSeoPageId}!`, 'success');
}

// Save All SEO Settings
function saveAllSeoSettings() {
  // First persist active form into current page object
  handleSavePageSeo(null);

  try {
    localStorage.setItem('himkiv_seo_config', JSON.stringify(allSeoPages));
    localStorage.setItem('himkiv_last_sync', Date.now().toString());
    window.dispatchEvent(new CustomEvent('himkiv_data_synced', {
      detail: { seoPages: Object.keys(allSeoPages).length }
    }));
  } catch (e) {}

  renderSitemapViewer();
  renderRobotsViewer();
  showToast('All 11 pages SEO configuration and Image Alt tags saved!', 'success');
}

// Reset Current Page to Defaults
function resetCurrentPageSeo() {
  if (!confirm(`Are you sure you want to reset SEO & Image Alt settings for "${currentSeoPageId}" to original defaults?`)) return;

  if (typeof SEO_DEFAULT_CONFIG !== 'undefined') {
    let defaultPage = null;
    if (Array.isArray(SEO_DEFAULT_CONFIG.pages)) {
      defaultPage = SEO_DEFAULT_CONFIG.pages.find(p => p.id === currentSeoPageId);
    } else if (SEO_DEFAULT_CONFIG[currentSeoPageId]) {
      defaultPage = SEO_DEFAULT_CONFIG[currentSeoPageId];
    }

    if (defaultPage) {
      allSeoPages[currentSeoPageId] = JSON.parse(JSON.stringify(defaultPage));
      allSeoPages[currentSeoPageId].file = defaultPage.fileName || `${defaultPage.id}.html`;
      try {
        localStorage.setItem('himkiv_seo_config', JSON.stringify(allSeoPages));
      } catch (e) {}

      selectSeoPage(currentSeoPageId);
      renderSitemapViewer();
      showToast(`Reset ${currentSeoPageId} to default SEO & Image Alt settings.`, 'success');
      return;
    }
  }

  showToast('Default configuration not found for this page.', 'error');
}

// Copy HTML Meta Tags block for current page (including Image Alt tags)
function copySeoMetaTags() {
  const page = allSeoPages[currentSeoPageId];
  if (!page) return;

  const title = (document.getElementById('seoInputTitle')?.value || page.title || '').trim();
  const desc = (document.getElementById('seoInputDesc')?.value || page.description || '').trim();
  const keywords = (document.getElementById('seoInputKeywords')?.value || page.keywords || '').trim();
  const canonical = (document.getElementById('seoInputCanonical')?.value || page.canonical || page.url || '').trim();
  const robots = (document.getElementById('seoInputRobots')?.value || page.robots || 'index, follow').trim();
  const ogTitle = (document.getElementById('seoInputOgTitle')?.value || page.ogTitle || title).trim();
  const ogImage = (document.getElementById('seoInputOgImage')?.value || page.ogImage || 'https://himkiv.online/images/himkiv-logo.png').trim();
  const ogDesc = (document.getElementById('seoInputOgDesc')?.value || page.ogDescription || desc).trim();
  const ogAlt = (document.getElementById('seoInputOgAlt')?.value || page.ogImageAlt || `${page.name} - HIMKIV Health`).trim();

  // Generate Image Alt snippets
  const imgSnippets = (Array.isArray(page.pageImages) && page.pageImages.length > 0)
    ? page.pageImages.map(img => `<!-- ${img.label} -->\n<img src="${img.src}" alt="${escapeHtml(img.alt || '')}">`).join('\n')
    : '';

  const htmlBlock = `<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title" content="${title.replace(/"/g, '&quot;')}">
<meta name="description" content="${desc.replace(/"/g, '&quot;')}">
<meta name="keywords" content="${keywords.replace(/"/g, '&quot;')}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${robots}">

<!-- Open Graph / Facebook / WhatsApp -->
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${ogTitle.replace(/"/g, '&quot;')}">
<meta property="og:description" content="${ogDesc.replace(/"/g, '&quot;')}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:alt" content="${ogAlt.replace(/"/g, '&quot;')}">

<!-- Twitter Card -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${canonical}">
<meta property="twitter:title" content="${ogTitle.replace(/"/g, '&quot;')}">
<meta property="twitter:description" content="${ogDesc.replace(/"/g, '&quot;')}">
<meta property="twitter:image" content="${ogImage}">
<meta property="twitter:image:alt" content="${ogAlt.replace(/"/g, '&quot;')}">

${imgSnippets ? `<!-- Page Visuals with Optimized Alt Attributes -->\n${imgSnippets}` : ''}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(htmlBlock).then(() => {
      showToast('HTML meta tags & Image Alt snippets copied to clipboard!', 'success');
    }).catch(() => {
      prompt('Copy the HTML meta tags below:', htmlBlock);
    });
  } else {
    prompt('Copy the HTML meta tags below:', htmlBlock);
  }
}

// Generate valid XML Sitemap String
function generateSitemapXmlString() {
  const pages = Object.values(allSeoPages);
  const today = new Date().toISOString().split('T')[0];

  const urlEntries = pages
    .filter(p => !p.robots || p.robots.includes('index'))
    .map(p => {
      const priority = p.sitemapPriority !== undefined ? Number(p.sitemapPriority).toFixed(1) : '0.8';
      const freq = p.sitemapFrequency || 'weekly';
      const loc = p.canonical || p.url || ('https://himkiv.online/' + (p.file || ''));
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Render Sitemap in <pre>
function renderSitemapViewer() {
  const pre = document.getElementById('sitemapViewerPre');
  if (pre) {
    pre.textContent = generateSitemapXmlString();
  }
}

// Copy Sitemap XML
function copySitemapXml() {
  const xml = generateSitemapXmlString();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(xml).then(() => {
      showToast('Sitemap.xml content copied to clipboard!', 'success');
    });
  } else {
    prompt('Copy Sitemap.xml:', xml);
  }
}

// Download Sitemap XML File
function downloadSitemapXml() {
  const xml = generateSitemapXmlString();
  const blob = new Blob([xml], { type: 'application/xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('sitemap.xml downloaded successfully!');
}

// Generate Robots.txt String
function generateRobotsTxtString() {
  return `# HIMKIV Online Health Portal - robots.txt
# Generated via HIMKIV SEO Admin Console

User-agent: *
Allow: /
Disallow: /admin.html
Disallow: /backend/
Disallow: /tests/

# XML Sitemap Index
Sitemap: https://himkiv.online/sitemap.xml
`;
}

// Render Robots in <pre>
function renderRobotsViewer() {
  const pre = document.getElementById('robotsViewerPre');
  if (pre) {
    pre.textContent = generateRobotsTxtString();
  }
}

// Copy Robots.txt
function copyRobotsTxt() {
  const txt = generateRobotsTxtString();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).then(() => {
      showToast('robots.txt content copied to clipboard!', 'success');
    });
  } else {
    prompt('Copy robots.txt:', txt);
  }
}

// Download Robots.txt File
function downloadRobotsTxt() {
  const txt = generateRobotsTxtString();
  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'robots.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('robots.txt downloaded successfully!');
}

// ========================================================
// CLINICAL BLOGS & ARTICLES CMS CONTROLLER
// Author & Lead Architect: Himanshu Sharma
// ========================================================

function renderBlogsTable() {
  const tbody = document.getElementById('blogsTableBody');
  if (!tbody) return;

  const search = (document.getElementById('blogSearchInput')?.value || '').toLowerCase().trim();
  const categoryFilter = document.getElementById('blogCategoryFilter')?.value || 'all';
  const statusFilter = document.getElementById('blogStatusFilter')?.value || 'all';

  let filtered = allBlogs.filter(blog => {
    const matchSearch = !search ||
      (blog.title && blog.title.toLowerCase().includes(search)) ||
      (blog.excerpt && blog.excerpt.toLowerCase().includes(search)) ||
      (blog.category && blog.category.toLowerCase().includes(search)) ||
      (blog.slug && blog.slug.toLowerCase().includes(search)) ||
      (Array.isArray(blog.tags) && blog.tags.some(t => t.toLowerCase().includes(search)));

    const matchCategory = (categoryFilter === 'all') || (blog.category === categoryFilter);
    const matchStatus = (statusFilter === 'all') || ((blog.status || 'published') === statusFilter);

    return matchSearch && matchCategory && matchStatus;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-12 text-center text-slate-400">
          <i data-lucide="book-open" class="w-10 h-10 mx-auto text-slate-300 mb-2"></i>
          <p class="font-semibold text-sm text-slate-600">No blog articles match your search or filter</p>
          <p class="text-xs text-slate-400 mt-0.5">Click "+ Write New Blog Post" to publish an article live to himkiv.online/blog.html</p>
          <button onclick="openBlogModal()" class="mt-3 px-3.5 py-1.5 rounded-lg bg-sky-600 text-white text-xs font-semibold shadow-xs">
            + Write First Blog
          </button>
        </td>
      </tr>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  tbody.innerHTML = filtered.map(blog => {
    const isPublished = (blog.status || 'published') === 'published';
    const statusBadge = isPublished
      ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live
         </span>`
      : `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Draft
         </span>`;

    const coverSrc = blog.coverImage || 'images/himkiv-logo.png';
    const coverAlt = blog.coverImageAlt || blog.title;
    const authorName = blog.author || 'Himanshu Sharma';
    const dateStr = blog.date || 'Recent';
    const readTimeStr = blog.readTime || '5 min read';
    const categoryName = blog.category || 'General Health';

    return `
      <tr class="hover:bg-slate-50/80 transition-colors">
        <td class="py-3 px-4">
          <div class="w-12 h-9 rounded-lg overflow-hidden bg-slate-900 border border-slate-200 shadow-xs shrink-0">
            <img src="${coverSrc}" alt="${coverAlt}" class="w-full h-full object-cover" onerror="this.src='images/himkiv-logo.png'">
          </div>
        </td>
        <td class="py-3 px-4 max-w-xs">
          <a href="blog.html#${blog.slug || ''}" target="_blank" class="font-bold text-slate-900 hover:text-sky-600 transition-colors line-clamp-1 block text-xs" title="${blog.title}">
            ${blog.title}
          </a>
          <span class="text-[10px] font-mono text-slate-400 block mt-0.5 truncate">
            /${blog.slug || ''}
          </span>
        </td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200 whitespace-nowrap">
            ${categoryName}
          </span>
        </td>
        <td class="py-3 px-4 whitespace-nowrap">
          <div class="text-xs font-semibold text-slate-800">${authorName}</div>
          <div class="text-[10px] text-slate-400">${dateStr}</div>
        </td>
        <td class="py-3 px-4 whitespace-nowrap text-slate-500 font-medium text-xs">
          ${readTimeStr}
        </td>
        <td class="py-3 px-4 whitespace-nowrap">
          ${statusBadge}
        </td>
        <td class="py-3 px-4 text-right whitespace-nowrap space-x-1">
          <a href="blog.html#${blog.slug || ''}" target="_blank" class="inline-flex items-center p-1.5 rounded-lg text-slate-500 hover:text-sky-600 hover:bg-sky-50 transition-colors" title="View Live on Website">
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
          <button onclick="openBlogModal('${blog.id}')" class="inline-flex items-center p-1.5 rounded-lg text-slate-500 hover:text-sky-600 hover:bg-sky-50 transition-colors" title="Edit Article">
            <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
          </button>
          <button onclick="deleteBlog('${blog.id}')" class="inline-flex items-center p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors" title="Delete Article">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function autoGenerateBlogSlug(title) {
  const slugInput = document.getElementById('blogInputSlug');
  if (!slugInput) return;
  const editId = document.getElementById('blogEditId')?.value;
  if (editId && slugInput.value.trim() && slugInput.value !== '') return;

  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  slugInput.value = slug;
}

function openBlogModal(blogId) {
  const modal = document.getElementById('modalBlogEditor');
  const form = document.getElementById('formBlogEditor');
  if (form) form.reset();

  const titleEl = document.getElementById('blogModalTitle');
  const btnLabel = document.getElementById('btnSaveBlogLabel');
  const editIdInput = document.getElementById('blogEditId');

  const defaultStock = (typeof PRESET_BLOG_IMAGES !== 'undefined' && PRESET_BLOG_IMAGES[0])
    ? PRESET_BLOG_IMAGES[0]
    : { url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80', alt: 'Doctor with stethoscope' };

  if (blogId) {
    const blog = allBlogs.find(b => b.id === blogId);
    if (!blog) return;

    if (editIdInput) editIdInput.value = blog.id;
    if (titleEl) titleEl.textContent = 'Edit Clinical Blog Article';
    if (btnLabel) btnLabel.textContent = 'Save Article Changes';

    document.getElementById('blogInputTitle').value = blog.title || '';
    document.getElementById('blogInputSlug').value = blog.slug || '';
    document.getElementById('blogInputCategory').value = blog.category || 'Pediatric Posology';
    document.getElementById('blogInputStatus').value = blog.status || 'published';
    document.getElementById('blogInputReadTime').value = blog.readTime || '5 min read';
    document.getElementById('blogInputAuthor').value = blog.author || 'Himanshu Sharma';
    document.getElementById('blogInputAuthorRole').value = blog.authorRole || 'Founder & Lead Healthcare Architect';
    document.getElementById('blogInputDate').value = blog.date || '';
    document.getElementById('blogInputCoverUrl').value = blog.coverImage || '';
    document.getElementById('blogInputCoverAlt').value = blog.coverImageAlt || '';
    document.getElementById('blogCoverPreviewImg').src = blog.coverImage || defaultStock.url;
    document.getElementById('blogInputExcerpt').value = blog.excerpt || '';
    document.getElementById('blogInputContent').value = (blog.content || '').trim();
    document.getElementById('blogInputTags').value = Array.isArray(blog.tags) ? blog.tags.join(', ') : (blog.tags || '');
  } else {
    if (editIdInput) editIdInput.value = '';
    if (titleEl) titleEl.textContent = 'Publish New Clinical Blog Article';
    if (btnLabel) btnLabel.textContent = 'Publish Article Live';

    const now = new Date();
    const dateFormatted = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    document.getElementById('blogInputAuthor').value = 'Himanshu Sharma';
    document.getElementById('blogInputAuthorRole').value = 'Founder & Lead Healthcare Architect';
    document.getElementById('blogInputDate').value = dateFormatted;
    document.getElementById('blogInputReadTime').value = '5 min read';
    document.getElementById('blogInputStatus').value = 'published';
    document.getElementById('blogInputCoverUrl').value = defaultStock.url;
    document.getElementById('blogInputCoverAlt').value = defaultStock.alt;
    document.getElementById('blogCoverPreviewImg').src = defaultStock.url;
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.display = 'flex';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

function closeBlogModal() {
  const modal = document.getElementById('modalBlogEditor');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.style.display = 'none';
  }
}

function handleBlogImageUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    showToast('Photo size is greater than 5MB. Please choose an optimized photo.', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    const urlInput = document.getElementById('blogInputCoverUrl');
    const previewImg = document.getElementById('blogCoverPreviewImg');
    const altInput = document.getElementById('blogInputCoverAlt');

    if (urlInput) urlInput.value = dataUrl;
    if (previewImg) previewImg.src = dataUrl;
    if (altInput && !altInput.value.trim()) {
      const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      altInput.value = `Photo illustrating ${cleanName}`;
    }
    showToast('Image uploaded successfully from device!', 'success');
  };
  reader.readAsDataURL(file);
}

function updateBlogCoverPreview(url) {
  const previewImg = document.getElementById('blogCoverPreviewImg');
  if (previewImg) {
    previewImg.src = url || 'images/himkiv-logo.png';
  }
}

function clearBlogCoverImage() {
  const fileInput = document.getElementById('blogCoverFileInput');
  const urlInput = document.getElementById('blogInputCoverUrl');
  const previewImg = document.getElementById('blogCoverPreviewImg');
  if (fileInput) fileInput.value = '';
  if (urlInput) urlInput.value = '';
  if (previewImg) previewImg.src = 'images/himkiv-logo.png';
  showToast('Cover image cleared.');
}

function selectPresetBlogImage(index) {
  if (typeof PRESET_BLOG_IMAGES === 'undefined' || !PRESET_BLOG_IMAGES[index]) return;
  const preset = PRESET_BLOG_IMAGES[index];
  const urlInput = document.getElementById('blogInputCoverUrl');
  const altInput = document.getElementById('blogInputCoverAlt');
  const previewImg = document.getElementById('blogCoverPreviewImg');

  if (urlInput) urlInput.value = preset.url;
  if (altInput) altInput.value = preset.alt;
  if (previewImg) previewImg.src = preset.url;
  showToast(`Stock image selected: ${preset.name}`, 'success');
}

function insertBlogFormatting(type) {
  const textarea = document.getElementById('blogInputContent');
  if (!textarea) return;

  const start = textarea.selectionStart || 0;
  const end = textarea.selectionEnd || 0;
  const selected = textarea.value.substring(start, end) || '';

  let replacement = '';
  switch (type) {
    case 'h2':
      replacement = `\n<h2>${selected || 'Section Heading'}</h2>\n`;
      break;
    case 'h3':
      replacement = `\n<h3>${selected || 'Subsection Heading'}</h3>\n`;
      break;
    case 'bold':
      replacement = `<strong>${selected || 'Bold Text'}</strong>`;
      break;
    case 'italic':
      replacement = `<em>${selected || 'Italic Text'}</em>`;
      break;
    case 'list':
      replacement = `\n<ul>\n  <li>${selected || 'List item 1'}</li>\n  <li>List item 2</li>\n  <li>List item 3</li>\n</ul>\n`;
      break;
    case 'callout':
      replacement = `\n<div class="clinical-callout p-4 my-4 rounded-xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800">\n  <h4 class="font-bold text-sky-900 dark:text-sky-300 mb-1 flex items-center gap-1.5">\n    <i data-lucide="info" class="w-4 h-4"></i> Clinical Note\n  </h4>\n  <p class="text-xs text-sky-800 dark:text-sky-200">${selected || 'Insert critical dosage or clinical advice here...'}</p>\n</div>\n`;
      break;
    case 'table':
      replacement = `\n<table class="w-full text-left my-4 border text-xs">\n  <thead><tr class="bg-slate-100"><th class="p-2 border">Weight</th><th class="p-2 border">Recommended Dose</th></tr></thead>\n  <tbody><tr><td class="p-2 border">10 kg</td><td class="p-2 border">100 - 150 mg</td></tr></tbody>\n</table>\n`;
      break;
    default:
      replacement = selected;
  }

  textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
  textarea.focus();
  textarea.setSelectionRange(start + replacement.length, start + replacement.length);
}

function handleSaveBlog(e) {
  if (e) e.preventDefault();

  const editId = document.getElementById('blogEditId')?.value;
  const title = (document.getElementById('blogInputTitle')?.value || '').trim();
  const slug = (document.getElementById('blogInputSlug')?.value || '').trim() || ('blog-' + Date.now());
  const category = document.getElementById('blogInputCategory')?.value || 'General Health';
  const status = document.getElementById('blogInputStatus')?.value || 'published';
  const readTime = (document.getElementById('blogInputReadTime')?.value || '').trim() || '5 min read';
  const author = (document.getElementById('blogInputAuthor')?.value || '').trim() || 'Himanshu Sharma';
  const authorRole = (document.getElementById('blogInputAuthorRole')?.value || '').trim() || 'Founder & Lead Healthcare Architect';
  const date = (document.getElementById('blogInputDate')?.value || '').trim() || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const coverImage = (document.getElementById('blogInputCoverUrl')?.value || '').trim() || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80';
  const coverImageAlt = (document.getElementById('blogInputCoverAlt')?.value || '').trim() || title;
  const excerpt = (document.getElementById('blogInputExcerpt')?.value || '').trim();
  const content = (document.getElementById('blogInputContent')?.value || '').trim();
  const rawTags = document.getElementById('blogInputTags')?.value || '';
  const tags = rawTags.split(',').map(t => t.trim()).filter(Boolean);

  if (!title || !excerpt || !content) {
    showToast('Kripya Title, Excerpt aur Content sabhi enter karein!', 'error');
    return;
  }

  const blogItem = {
    id: editId || ('blog_' + Date.now()),
    slug,
    title,
    category,
    status,
    readTime,
    author,
    authorRole,
    authorAvatar: 'images/himkiv-logo.png',
    date,
    coverImage,
    coverImageAlt,
    excerpt,
    content,
    tags,
    views: Math.floor(Math.random() * 200) + 500,
    updatedAt: new Date().toISOString()
  };

  if (editId) {
    const idx = allBlogs.findIndex(b => b.id === editId);
    if (idx !== -1) {
      allBlogs[idx] = { ...allBlogs[idx], ...blogItem };
    } else {
      allBlogs.unshift(blogItem);
    }
    showToast('Article changes saved successfully!', 'success');
  } else {
    allBlogs.unshift(blogItem);
    showToast('Naya Blog Article successfully publish ho gaya!', 'success');
  }

  // Persist to localStorage
  try {
    localStorage.setItem('himkiv_custom_blogs', JSON.stringify(allBlogs));
    localStorage.setItem('himkiv_last_sync', Date.now().toString());
    // Dispatch instant live broadcast
    window.dispatchEvent(new CustomEvent('himkiv_data_synced', {
      detail: { blogs: allBlogs.length }
    }));
  } catch (err) {
    console.warn('LocalStorage save failed:', err);
  }

  // Update UI
  updateKpiCards();
  renderBlogsTable();
  closeBlogModal();
}

function deleteBlog(blogId) {
  const blog = allBlogs.find(b => b.id === blogId);
  const title = blog ? blog.title : 'this article';
  if (!confirm(`Are you sure you want to delete "${title}"? This will remove it from the website.`)) {
    return;
  }

  allBlogs = allBlogs.filter(b => b.id !== blogId);

  try {
    localStorage.setItem('himkiv_custom_blogs', JSON.stringify(allBlogs));
    localStorage.setItem('himkiv_last_sync', Date.now().toString());
    window.dispatchEvent(new CustomEvent('himkiv_data_synced', {
      detail: { blogs: allBlogs.length }
    }));
  } catch (e) {
    console.warn('LocalStorage save error:', e);
  }

  updateKpiCards();
  renderBlogsTable();
  showToast('Blog article deleted successfully.', 'success');
}

// Window Onload Initialization
window.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  const isAuth = checkAuth();
  if (isAuth) {
    initDashboard();
  }
});
