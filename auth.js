// =============================================
// MEDLYN - Sistema de Autenticação
// =============================================

var supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkAuth() {
  const user = JSON.parse(localStorage.getItem('medlyn_user') || 'null');
  if (!user) {
    window.location.href = 'login.html';
    return null;
  }
  return user;
}

function getUser() {
  return JSON.parse(localStorage.getItem('medlyn_user') || 'null');
}

function logout() {
  localStorage.removeItem('medlyn_user');
  window.location.href = 'login.html';
}

function renderUserHeader() {
  const user = getUser();
  if (!user) return;
  const el = document.getElementById('user-name');
  const av = document.getElementById('user-avatar');
  if (el) el.textContent = user.nome;
  if (av) av.textContent = user.nome.charAt(0).toUpperCase();
}

function getClinicaId() {
  const user = getUser();
  return user ? user.clinica_id || null : null;
}
