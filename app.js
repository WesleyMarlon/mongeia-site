// MENU
const btn = document.getElementById('btn-menu');
const box = document.getElementById('box-menu');

btn.onclick = () => box.hidden = !box.hidden; // Abre/fecha no clique
document.onclick = e => {
  if (!btn.contains(e.target) && !box.contains(e.target)) box.hidden = true;}; // Fecha ao clicar fora
document.onkeydown = e => e.key === 'Escape' && (box.hidden = true); // Fecha com ESC
box.onclick = e => e.target.tagName === 'A' && (box.hidden = true); // Fecha ao clicar num link


// Modo Dark
const btnTheme = document.getElementById('btn-theme');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = savedTheme || (systemDark? 'dark' : 'light');

html.setAttribute('data-theme', currentTheme);
btnTheme.textContent = currentTheme === 'dark'? '☀️' : '🌙';

btnTheme.addEventListener('click', () => {
  const active = html.getAttribute('data-theme');
  const next = active === 'dark'? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  btnTheme.textContent = next === 'dark'? '☀️' : '🌙';
});


// Barra de Pesquisas