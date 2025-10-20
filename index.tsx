document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');

  if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const fullnameInput = document.getElementById('fullname') as HTMLInputElement;
      const emailInput = document.getElementById('email') as HTMLInputElement;
      const passwordInput = document.getElementById('password') as HTMLInputElement;
      const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;

      if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match!");
        return;
      }

      if (fullnameInput && emailInput && passwordInput) {
        console.log('Sign up attempt:');
        console.log(`Full Name: ${fullnameInput.value}`);
        console.log(`Email: ${emailInput.value}`);
        // In a real application, you would not log the password.
        // This is for demonstration purposes only.
        console.log('Password successfully set.');
        
        // Redirect to a success page instead of showing an alert
        window.location.href = 'signup-success.html';
      }
    });
  }
});