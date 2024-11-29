const form = document.querySelector('.contact-form form');
form.addEventListener('submit', (e) => {
  const email = form.email.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    e.preventDefault();
    alert('Please enter a valid email address.');
  }
});
