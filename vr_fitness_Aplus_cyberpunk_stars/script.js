
const views = Array.from(document.querySelectorAll('.view'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let current = 0;

function render(){
  views.forEach((view, index) => view.classList.toggle('active', index === current));
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === views.length - 1;
  prevBtn.style.opacity = current === 0 ? 0.55 : 1;
  nextBtn.style.opacity = current === views.length - 1 ? 0.55 : 1;
}
function goTo(index){
  current = index;
  render();
}
prevBtn.addEventListener('click', () => {
  if (current > 0) { current -= 1; render(); }
});
nextBtn.addEventListener('click', () => {
  if (current < views.length - 1) { current += 1; render(); }
});
document.querySelectorAll('[data-go]').forEach(el => {
  el.addEventListener('click', () => goTo(Number(el.dataset.go)));
});
render();
