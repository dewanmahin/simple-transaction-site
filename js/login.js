document.getElementById('submit-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPass = document.getElementById('user-pass').value;

    if(userEmail == 'user@bank.com' && userPass == '1234'){
        // Redirect to another html page on button click
        window.location.href = 'bank.html'
    }else{
        alert('Enter your correct information.')
    }
})