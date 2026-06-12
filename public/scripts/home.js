const art = document.getElementById('expandingArt');
const typingTitle = document.querySelector('[data-typing-lines]');
const typingLine = typingTitle?.querySelector('.typing-line');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const ENTER_STAGGER = 78;
const EXIT_STAGGER = 22;

function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

function updateArt() {
  if (!art) return;
  const section = document.querySelector('.expanding-art-section');
  const rect = section.getBoundingClientRect();
  const total = section.offsetHeight - window.innerHeight;
  const progress = clamp(-rect.top / total, 0, 1);

  const scale = 0.78 + progress * 0.46;
  const radius = 32 - progress * 32;
  const shade = 0.08 + progress * 0.1;

  art.style.transform = `scale(${scale})`;
  art.style.borderRadius = `${radius}px`;
  art.style.setProperty('--image-shade', shade.toFixed(2));
}

async function fadeLines() {
  if (!typingTitle || !typingLine) return;

  const lines = JSON.parse(typingTitle.dataset.typingLines || '[]');
  if (!lines.length) return;

  if (reduceMotion.matches) {
    typingLine.textContent = lines[0];
    return;
  }

  let lineIndex = 0;
  typingTitle.classList.add('is-ready');
  renderLine(lines[lineIndex], 'enter');

  while (true) {
    await wait(4600);

    animateOut();
    await wait(760 + Math.min(lines[lineIndex].length * EXIT_STAGGER, 520));

    lineIndex = (lineIndex + 1) % lines.length;
    renderLine(lines[lineIndex], 'enter');
  }
}

function renderLine(text, mode) {
  typingLine.textContent = '';
  typingLine.classList.remove('is-leaving');

  [...text].forEach((char, index) => {
    const span = document.createElement('span');
    span.className = `typing-char is-${mode}`;
    span.textContent = char;
    span.style.setProperty('--char-delay', `${index * ENTER_STAGGER}ms`);
    typingLine.append(span);
  });
}

function animateOut() {
  const chars = [...typingLine.querySelectorAll('.typing-char')];
  chars.forEach((char, index) => {
    char.classList.remove('is-enter');
    char.classList.add('is-exit');
    char.style.setProperty('--char-delay', `${index * EXIT_STAGGER}ms`);
  });
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

updateArt();
fadeLines();
window.addEventListener('scroll', updateArt, { passive: true });
window.addEventListener('resize', updateArt);
