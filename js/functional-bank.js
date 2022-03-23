//! getInputValue() use for collect all input value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputAmount = parseFloat(inputFieldText);
    // Clear the input
    inputField.value = ''
    return inputAmount;
}

//! Deposit button handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = getInputValue("deposit-input")
    console.log(depositAmount);
})