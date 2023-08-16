

document.getElementById('login-btn').addEventListener('click', function (){
    const userEmail = document.getElementById('email-input')
    const email = userEmail.value;
    

    const userPassword = document.getElementById('password-input');
    const password = userPassword.value
    

    if(email === 'baperbank@gmail.com' && password === 'aburayhan'){
        window.location.href = 'bank.html';
    }
    else{
        alert('tui to shala chor')
    }
})








