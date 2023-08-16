document.getElementById('withwraw-btn').addEventListener('click', function (){
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputString = withdrawInputField.value;
    const withdrawInput = parseFloat(withdrawInputString)

    const totalWithdrawAmount = document.getElementById('withdraw-total');
    const totalWithdrawstring = totalWithdrawAmount.innerText;
    const totalWithdraw = parseFloat(totalWithdrawstring);

    const myTotalWithdraw = withdrawInput + totalWithdraw;
    
     totalWithdrawAmount.innerText = myTotalWithdraw;

     const newTotalBalance = document.getElementById('total-balance');
     const newTotalBalanceString = newTotalBalance.innerText;
     const newTotal = parseFloat(newTotalBalanceString);

     const myTotalBalance = newTotal - withdrawInput;
     newTotalBalance.innerText = myTotalBalance

     
     withdrawInputField.value = ''
})