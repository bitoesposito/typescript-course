var data = {
    initial: 10000,
    annualContribution: 2000,
    expectedReturn: 2,
    duration: 10
};
function calculateInvestment(data) {
    var balance = data.initial;
    for (var i = 0; i < data.duration; i++) {
        balance += data.annualContribution;
        balance = balance * (1 + data.expectedReturn / 100);
    }
    return balance.toFixed(2);
}
function printResults(results) {
    console.log("\n        Initial investment: \u20AC ".concat(data.initial, "\n        Annual contribution: \u20AC ").concat(data.annualContribution, "\n        Expected return: ").concat(data.expectedReturn, "%\n        Duration: ").concat(data.duration, " years\n        Final balance: \u20AC ").concat(results, "\n        "));
}
var results = calculateInvestment(data);
printResults(results);
