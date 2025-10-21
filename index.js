const timeEl = document.getElementById('currentTime');
function updateTime() {
    timeEl.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    document.querySelectorAll('.error').forEach(e => e.textContent = '');
    successMsg.hidden = true;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    if (!name) {
        document.querySelector('[data-testid="test-contact-error-name"]').textContent = 'Full name is required.';
        valid = false;
    }

    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        document.querySelector('[data-testid="test-contact-error-email"]').textContent = 'Enter a valid email.';
        valid = false;
    }

    if (!subject) {
        document.querySelector('[data-testid="test-contact-error-subject"]').textContent = 'Subject is required.';
        valid = false;
    }

    if (message.length < 10) {
        document.querySelector('[data-testid="test-contact-error-message"]').textContent = 'Message must be at least 10 characters.';
        valid = false;
    }

    if (valid) {
        form.reset();
        successMsg.hidden = false;
    }
});