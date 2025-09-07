
document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault(); 

  
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  
  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");


  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;


  if (username.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters.";
    isValid = false;
  }

  
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  
  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    isValid = false;
  }

  
  if (isValid) {
    alert("🎉 Sign-up successful! Welcome to the community.");
  }
});


let count = 0;
document.getElementById("counter-btn").addEventListener("click", function() {
  count++;
  document.getElementById("count").textContent = count;
});


document.getElementById("color-btn").addEventListener("click", function() {
  
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
