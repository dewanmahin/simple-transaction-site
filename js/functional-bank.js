// getInputValue() use for collect all input value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputAmount = parseFloat(inputFieldText);
    // Clear the input
    inputField.value = ''
    return inputAmount;
}
// updateTotal() use for update balance and transactions details
function updateTotal(totalId, amount){
    const total = document.getElementById(totalId);
    const totalText = total.innerText;
    const totalAmount = parseFloat(totalText);
    // Total all amount
    total.innerText = totalAmount + amount;
}
// balanceUpdate() update present account balance
function balanceUpdate(amount, isAdd){
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

//! Deposit button handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = getInputValue("deposit-input")

    updateTotal('deposit-total', depositAmount)

    balanceUpdate(depositAmount, true);
})

//! Withdraw button handler
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');

    updateTotal('withdraw-total', withdrawAmount)

    balanceUpdate(withdrawAmount, false);
})