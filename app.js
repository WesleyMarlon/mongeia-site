// MENU
const btn = document.getElementById('btn-menu');
const box = document.getElementById('box-menu');

btn.onclick = () => box.hidden = !box.hidden; // Abre/fecha no clique
document.onclick = e => {
  if (!btn.contains(e.target) && !box.contains(e.target)) box.hidden = true;}; // Fecha ao clicar fora
document.onkeydown = e => e.key === 'Escape' && (box.hidden = true); // Fecha com ESC
box.onclick = e => e.target.tagName === 'A' && (box.hidden = true); // Fecha ao clicar num link