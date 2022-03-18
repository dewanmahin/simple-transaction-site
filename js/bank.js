//! Handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    
    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;

    // clear the deposit input field
    depositInput.value = '';
})