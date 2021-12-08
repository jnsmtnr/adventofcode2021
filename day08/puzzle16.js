const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

let total = 0

for (const line of input.split('\n').filter(Boolean)) {
    const input = line.split(' | ')[0].split(' ')
    const output = line.split(' | ')[1].split(' ')

    let zero
    const one = input.find(digit => digit.length === 2).split('').sort().join('')
    let two
    let three
    const four = input.find(digit => digit.length === 4).split('').sort().join('')
    let five
    let six
    const seven = input.find(digit => digit.length === 3).split('').sort().join('')
    const eight = input.find(digit => digit.length === 7).split('').sort().join('')
    let nine

    for (const digit of input) {
        if (digit.length === 6) {
            if (one.split('').some(x => !digit.includes(x))) {
                six = digit.split('').sort().join('')
                continue
            }

            if (four.split('').some(x => !digit.includes(x))) {
                zero = digit.split('').sort().join('')
                continue
            }

            nine = digit.split('').sort().join('')
        }

        if (digit.length === 5) {
            if (one.split('').every(x => digit.includes(x))) {
                three = digit.split('').sort().join('')
                continue
            }

            let absent = 0

            four.split('').forEach(x => !digit.includes(x) && absent++)

            if (absent === 1) five = digit.split('').sort().join('')
            if (absent === 2) two = digit.split('').sort().join('')
        }
    }

    let decoded = ''

    for (const digit of output) {
        const sorted = digit.split('').sort().join('')

        if (sorted === zero) decoded += '0'
        if (sorted === one) decoded += '1'
        if (sorted === two) decoded += '2'
        if (sorted === three) decoded += '3'
        if (sorted === four) decoded += '4'
        if (sorted === five) decoded += '5'
        if (sorted === six) decoded += '6'
        if (sorted === seven) decoded += '7'
        if (sorted === eight) decoded += '8'
        if (sorted === nine) decoded += '9'
    }

    total += parseInt(decoded)
}

console.log(total)
