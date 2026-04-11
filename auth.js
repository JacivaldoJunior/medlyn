// =============================================
// MEDLYN - Sistema de Autenticação
// =============================================

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Verifica se está logado, senão redireciona para login
async function checkAuth() {
  const user = JSON.parse(localStorage.getItem('medlyn_user') || 'null');
  if (!user) {
    window.location.href = 'login.html';
    return null;
  }
  return user;
}

// Retorna usuário logado
function getUser() {
  return JSON.parse(localStorage.getItem('medlyn_user') || 'null');
}

// Logout
function logout() {
  localStorage.removeItem('medlyn_user');
  window.location.href = 'login.html';
}

// Renderiza nome do usuário no header
function renderUserHeader() {
  const user = getUser();
  if (!user) return;
  const el = document.getElementById('user-name');
  const av = document.getElementById('user-avatar');
  if (el) el.textContent = user.nome;
  if (av) av.textContent = user.nome.charAt(0).toUpperCase();
}

// Cria cliente supabase com clinica_id no contexto
function getClinicaId() {
  const user = getUser();
  return user?.clinica_id || null;
}
