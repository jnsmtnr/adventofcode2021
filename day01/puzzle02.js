const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const measurements = input.split('\n').filter(Boolean).map(Number)

function countInc(array) {
    let inc = 0

    for (let i = 0; i < array.length - 3; i++) {
        const a = array[i] + array[i + 1] + array[i + 2]
        const b = array[i + 1] + array[i + 2] + array[i + 3]

        if (b > a) inc++
    }

    return inc
}

console.log(countInc(measurements))