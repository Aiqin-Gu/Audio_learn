document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const emailInput = document.getElementById('email') as HTMLInputElement;
      const passwordInput = document.getElementById('password') as HTMLInputElement;

      if (emailInput && passwordInput) {
        console.log('Login attempt:');
        console.log(`Email: ${emailInput.value}`);
        // In a real application, you would not log the password.
        // This is for demonstration purposes only.
        console.log('Password entered.');
        
        alert('Login form submitted! Check the console for details.');
      }
    });
  }
});
