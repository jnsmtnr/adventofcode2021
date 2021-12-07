const fs = require("fs");

const input = fs.readFileSync('input.txt', 'utf8')

const crabs = input
    .split(',')
    .map(Number)

const min = Math.min(...crabs)
const max = Math.max(...crabs)

let totalFuel = Infinity

for (let i = min; i <= max; i++) {
    let fuel = 0
    for (crab of crabs) {
        fuel += Math.abs(i - crab)
    }
    if (fuel < totalFuel) {
        totalFuel = fuel
    }
}

console.log(totalFuel)
