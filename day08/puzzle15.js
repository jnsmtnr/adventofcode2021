const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const digits = input.split('\n').filter(Boolean).map(pattern => pattern.split(' | ')[1]).join(' ').split(' ')

let easyDigits = 0

for (const digit of digits) {
    if (digit.length === 2 || digit.length === 3 || digit.length === 4 || digit.length === 7) easyDigits++
}

console.log(easyDigits)
