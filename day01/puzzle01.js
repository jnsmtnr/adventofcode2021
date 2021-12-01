const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const measurements = input.split('\n').filter(Boolean).map(Number)

function countInc(array) {
    let inc = 0

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i-1]) inc++
    }

    return inc
}

console.log(countInc(measurements))