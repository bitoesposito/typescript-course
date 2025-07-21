type InvestmentData = {
    initial: number,
    annualContribution: number,
    expectedReturn: number,
    duration: number
}

let data : InvestmentData = {
    initial: 10000,
    annualContribution: 2000,
    expectedReturn: 2,
    duration: 10
}

function calculateInvestment(data: InvestmentData) {
    let balance = data.initial;
    for (let i = 0; i < data.duration; i++) {
        balance += data.annualContribution;
        balance = balance * (1 + data.expectedReturn / 100);
    }
    return balance.toFixed(2);
}

function printResults(results: any) {
    console.log(`
        Initial investment: € ${data.initial}
        Annual contribution: € ${data.annualContribution}
        Expected return: ${data.expectedReturn}%
        Duration: ${data.duration} years
        Final balance: € ${results}
        `);
}

const results = calculateInvestment(data);
printResults(results);