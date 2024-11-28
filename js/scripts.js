// Profile Modal for Home Page
const profilePic = document.getElementById('profile-pic');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

// Show Modal
profilePic?.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close Modal
closeBtn?.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Contact Form Modal
const contactForm = document.getElementById('contact-form');
const confirmModal = document.getElementById('confirm-modal');
const confirmBtn = document.getElementById('confirm-btn');
const cancelBtn = document.getElementById('cancel-btn');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    confirmModal.style.display = 'flex';
});

// Confirm or Cancel Submission
confirmBtn?.addEventListener('click', () => {
    alert('Form submitted successfully!');
    confirmModal.style.display = 'none';
    contactForm.submit();
});

cancelBtn?.addEventListener('click', () => {
    confirmModal.style.display = 'none';
});
