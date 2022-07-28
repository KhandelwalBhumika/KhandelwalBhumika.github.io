const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

    const nameValue = name.value;  
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const messageValue = message.value.trim();

    if (!checkNameAndMessage(nameValue)) {
      name.parentElement.className = 'form-control fail';
      return;
    }

  if (!checkEmail(emailValue)) {
    email.parentElement.className = 'form-control fail';
    return;
  }

  if (!checkPhoneNumber(phoneNumberValue)) {
    phoneNumber.parentElement.className = 'form-control fail';
  } 

  if (!messageValue) {
    message.parentElement.className = 'form-control fail';
    return;
  }

  const feedback = {
    name: nameValue,
    email: emailValue,
    phoneNumber: phoneNumberValue,
    message: messageValue
  }

  localStorage.setItem('feedback', JSON.stringify(feedback));

  window.location.href="review.html"
});

function checkNameAndMessage(name){
    return /^[a-zA-Z\- ]+$/.test(name);
}

function checkPhoneNumber(phoneNumber){
    return /^(0|[+91]{3})?[7-9][0-9]{9}$/.test(phoneNumber);
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
