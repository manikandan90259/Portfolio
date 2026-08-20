document.getElementById('revYear').textContent = new Date().getFullYear();


const menuToggle = document.getElementById('menuToggle');
const topbarNav = document.querySelector('.topbar__nav');

menuToggle.addEventListener('click', () => {
  const isOpen = topbarNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

topbarNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    topbarNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});


function handleResumeClick() {
  window.open('resume/Resume.pdf', '_blank');
}
document.getElementById('resumeBtn').addEventListener('click', handleResumeClick);
document.getElementById('resumeBtn2').addEventListener('click', handleResumeClick);

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

function setError(id, message) {
  document.getElementById('err-' + id).textContent = message;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  const username = document.getElementById('f-username').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const message = document.getElementById('f-message').value.trim();

  setError('username', '');
  setError('email', '');
  setError('message', '');
  status.textContent = '';

  if (!username) {
    setError('username', 'Enter your name');
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    setError('email', 'Enter a valid email');
    valid = false;
  }

  if (!message) {
    setError('message', 'Enter a message');
    valid = false;
  }

  if (!valid) return;

  status.textContent = 'Message sent. I\u2019ll reply soon.';
  form.reset();
});