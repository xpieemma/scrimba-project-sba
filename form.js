function submitForm(event){
    event.preventDefault();

    const statusOutput = document.getElementById('form-status');
    const form = event.target.closest('form');

    //Validation
    const name = document.getElementById('name').Value.trim();
    const email = document.getElementById('email').Value.trim();
    const message = document.getElementById('message').Value.trim();

    if (!name || !email || !message){
        statusOutput.textContent = 'Please fill in all required fields.';
        statusOutput.className = 'error';
        return;
    }

    //Simulation
    statusOutput.textContent = 'Thank you! Your message has been sent successfully.';
    statusOutput.className = 'success';

    //reset form after 30 seconds

    setTimeout( () => {
        form.reset();
        statusOutput.textContent = '';
        statusOutput.className = '';
    }, 45000);
}