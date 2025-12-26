function submitForm(event){
    event.preventDefault();

    const statusOutput = document.getElementById('form-status');
    const form = event.target.closest('form');

    //Validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message){
        statusOutput.textContent = 'Please fill in all required fields.';
        statusOutput.className = 'error';
        return;
    }

    //Simulation
    statusOutput.textContent = 'Thank you! Your message has been sent successfully.';
    statusOutput.className = 'success';

    //handle email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(email)) { 
        statusOutput.textContent = 'Please enter a valid email address.'; 
        statusOutput.style.color = 'red';
         return; }

    //reset form after 30 seconds

    setTimeout( () => {
        form.reset();
        statusOutput.textContent = '';
        statusOutput.className = '';
    }, 3000);
}