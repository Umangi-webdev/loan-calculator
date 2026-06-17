document.getElementById('calculateBtn').addEventListener('click',calculateLoan);

function calculateLoan(){
    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
    const intrestRate = parseFloat(document.getElementById("interestRate").value);
    const loanTerm = parseFloat(document.getElementById("loanTermInput").value);

    if(isNaN(loanAmount) || isNaN(intrestRate) || isNaN(loanTerm)){
        alert("Bro, Enter valid Numbers")
    }
    const monthlyInterest = intrestRate / 100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest =(monthlyPayment * totalPayments)-loanAmount;


    displayResult(monthlyPayment,totalInterest);


};

function displayResult(monthlyPayment, totalInterest){
    const resultdiv = document.getElementById('result');

    resultdiv.innerHTML =  `
    <p><strong> Monthly Payment: ${monthlyPayment.toFixed(2)} </strong></p>
    <p><strong> Total Interest: ${totalInterest.toFixed(2)} </strong></p>
    `
}