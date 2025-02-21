
const themeToggle = document.getElementById('theme-toggle');
const bodyElement = document.body;


const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  bodyElement.classList.add(savedTheme);
  if (savedTheme === 'dark') {
    themeToggle.checked = true;
  }
}


themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    bodyElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    bodyElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});
const professionSection = document.querySelector('.profession__container');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', () => {
  if (isElementInViewport(professionSection)) {
    professionSection.style.transform = 'scale(0.98)';
    professionSection.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  } else {
    professionSection.style.transform = 'scale(1.03)';
    professionSection.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
  }
});
const registerForm = document.getElementById('authForm');

if (registerForm) {
  registerForm.addEventListener('submit', (event) => {
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeat-password').value;

    if (password !== repeatPassword) {
      alert('Пароли не совпадают!');
      event.preventDefault(); // Остановить отправку формы
    }
  });
}