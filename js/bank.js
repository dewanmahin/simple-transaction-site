//! Handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositTotal) + parseFloat(depositAmount);
    
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(depositAmount);

    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field
    depositInput.value = '';
})

//! Handle withdraw button event
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(withdrawAmount);

    withdrawTotal.innerText = newWithdrawTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(withdrawAmount);

    balanceTotal.innerText = newBalanceTotal;

    // clear the withdraw input field
    withdrawInput.value = '';
})