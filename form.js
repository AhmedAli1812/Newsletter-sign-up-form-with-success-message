    document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('Email');
        const errorMessage = document.getElementById('error-message');
        
        const emailPattern = /\S+@\S+\.\S+/;;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add('input-error');
            errorMessage.style.display = 'block';
        } else {
            emailInput.classList.remove('input-error');
            errorMessage.style.display = 'none';
            // Submit the form or do further processing here
            window.location.href = './success.html';
        }
    });