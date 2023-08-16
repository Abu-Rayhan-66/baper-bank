document.getElementById('deposit-btn').addEventListener('click', function (){
    const getDeposit = document.getElementById('deposit-input')
    const newDepositAmountString = getDeposit.value
    const newDepositAmount = parseFloat(newDepositAmountString)


    const depositTotalAmount = document.getElementById('deposit-total')
    const currentDepositTotalString = depositTotalAmount.innerText
    const currentDepositTotal = parseFloat(currentDepositTotalString);
    const myDeposit = newDepositAmount+  currentDepositTotal
    depositTotalAmount.innerText = myDeposit;

      const totalBalanceAmount = document.getElementById('total-balance')
      const currentTotalBlanceString = totalBalanceAmount.innerText
      const currentTotalBlance = parseFloat(currentTotalBlanceString)

       const myTotalDeposit = newDepositAmount + currentTotalBlance
        totalBalanceAmount.innerText = myTotalDeposit

    getDeposit.value = ''
})

