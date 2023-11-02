

function toggleForm() {
  const contactForm = document.getElementById('contactForm');
  const confirmationMessage = document.getElementById('confirmationMessage');

  if (contactForm.style.display === 'none') {
    contactForm.style.display = 'block';
    confirmationMessage.style.display = 'none';
  } else {
    contactForm.style.display = 'none';
    confirmationMessage.style.display = 'none';
  }
}

function submitForm(event) {
  event.preventDefault();

  const firstname = document.getElementById('first name').value;
  const secendname = document.getElementById('secend name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Perform form validation here
  if (firstname === '' || secendname === '' || age === '' || email === '' || phone === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Clear form inputs
  document.getElementById('first name').value = '';
  document.getElementById('secend name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('message').value = '';

  const contactForm = document.getElementById('contactForm');
  const confirmationMessage = document.getElementById('confirmationMessage');

  contactForm.style.display = 'none';
  confirmationMessage.style.display = 'block';
}

// Example of adding comments dynamically
const commentList = document.getElementById('commentList');

function addComment(comment) {
  const li = document.createElement('li');
  li.textContent = comment;
  commentList.appendChild(li);
}

