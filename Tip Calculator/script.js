function calculateTip() {
    var billAmount = document.getElementById('billAmount').value;
    var tipPercent = document.getElementById('tipPercent').value;
    var numberOfPeople = document.getElementById('numberOfPeople').value;

    if (billAmount === '' || tipPercent === '' || numberOfPeople === '' || numberOfPeople <= 0) {
        alert("Please enter valid values for bill amount, tip percentage, and number of people");
        return;
    }

    var tipAmount = billAmount * (tipPercent / 100);
    var totalAmount = parseFloat(billAmount) + tipAmount;
    var tipPerPerson = tipAmount / numberOfPeople;

    document.getElementById('result').innerHTML = `
        <p>Tip Amount: $${tipAmount.toFixed(2)}</p>
        <p>Total Amount: $${totalAmount.toFixed(2)}</p>
        <p>Tip Per Person: $${tipPerPerson.toFixed(2)}</p>
    `;
}
