document.getElementById('submit-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPass = document.getElementById('user-pass').value;

    if(userEmail == 'owner@bank.com' && userPass == 'bankPass'){
        // Redirect to another html page on button click
        window.location.href = 'bank.html'
    }else{
        alert('Enter your correct information.')
    }
    
})