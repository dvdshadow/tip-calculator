function calculateTip() {
    var billAmount = parseFloat(document.getElementById('billAmount').value);
    var tipInput = document.getElementById('tipPercent').value;
    var numberOfPeople = parseInt(document.getElementById('numberOfPeople').value, 10);

    // Remove any % symbol and spaces from the tip input
    var tipPercent = parseFloat(tipInput.replace(/[%\s]/g, ''));

    if (isNaN(billAmount) || isNaN(tipPercent) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert("Please enter valid numbers for bill amount, tip percentage, and number of people");
        return;
    }

    var tipAmount = billAmount * (tipPercent / 100);
    var totalAmount = billAmount + tipAmount;
    var tipPerPerson = tipAmount / numberOfPeople;
    var totalPerPerson = totalAmount / numberOfPeople;

    document.getElementById('result').innerHTML = `
        <p>Total Tip: $${tipAmount.toFixed(2)}</p>
        <p>Tip Per Person: $${tipPerPerson.toFixed(2)}</p>
        <p>Total Amount: $${totalAmount.toFixed(2)}</p>
        <p>Amount Per Person: $${totalPerPerson.toFixed(2)}</p>
    `;
}
