

const thumbnail = document.getElementById('thumbnail');
const overlay = document.getElementById('overlay');

thumbnail.addEventListener('click', () => {
  overlay.style.display = 'flex';
  // Даём время DOM обновиться
  setTimeout(() => overlay.classList.add('active'), 10);
});

function closeFullscreen() {
  overlay.classList.remove('active');
  // Ждём завершения анимации, прежде чем скрыть
  setTimeout(() => overlay.style.display = 'none', 400);
}


