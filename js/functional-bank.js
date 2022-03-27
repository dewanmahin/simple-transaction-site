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
// getCurrentBalance() added to use multiple time current balance
function getCurrentBalance(){
    const balanceTotal = document.getElementById("balance-total").innerText;
    const previousBalanceTotal = parseFloat(balanceTotal);
    return previousBalanceTotal;
}
// balanceUpdate() update present account balance
function balanceUpdate(amount, isAdd){
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = getCurrentBalance();

    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

//! Deposit button handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = getInputValue("deposit-input")
    // Condition for deposit process
    if(depositAmount > 0){
        updateTotal('deposit-total', depositAmount)
        balanceUpdate(depositAmount, true);
    }
    else{
        alert("Please enter valid amount for deposit.");
    }
})

//! Withdraw button handler
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    // Condition for withdraw process
    if(withdrawAmount > 0 && withdrawAmount <= currentBalance){
        updateTotal('withdraw-total', withdrawAmount)
        balanceUpdate(withdrawAmount, false);
    }
    else{
        alert("Please enter valid amount for withdraw.");
    }
})