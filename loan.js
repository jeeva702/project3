const calculateButton = document.getElementById('calculate-button');

calculateButton.addEventListener('click', () => {
  const loanAmount = document.getElementById('loan-amount').value;
  const interestRate = document.getElementById('interest-rate').value / 100 / 12;
  const loanTerm = document.getElementById('loan-term').value * 12;
  const downPayment = document.getElementById('down-payment').value;

  const principal = loanAmount - downPayment;
  const monthlyPayment = (principal * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
  const totalCost = monthlyPayment * loanTerm + Number(downPayment);

  document.getElementById('monthly-payment').textContent = `₹${monthlyPayment.toFixed(2)}`;
  document.getElementById('total-cost').textContent = `₹${totalCost.toFixed(2)}`;
});
