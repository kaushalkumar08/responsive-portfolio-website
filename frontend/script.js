// Toggle mobile navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Submit contact form to backend API
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  formResponse.style.color = '#38bdf8';
  formResponse.textContent = 'Sending message...';

  try {
    const res = await fetch('https://responsive-portfolio-website-1m5r.onrender.com/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
});

    const data = await res.json();

    if (res.ok && data.success) {
      formResponse.style.color = '#4ade80';
      formResponse.textContent = 'Message sent successfully!';
      contactForm.reset();
    } else {
      formResponse.style.color = '#f87171';
      formResponse.textContent = data.error || 'Failed to send message.';
    }
  } catch (error) {
    formResponse.style.color = '#f87171';
    formResponse.textContent = 'Error connecting to the backend server.';
  }
});