const input = require('fs').readFileSync('input.txt', 'utf8')

const numbers = input.split('\n').filter(Boolean)

let number = numbers[0]

for (let index = 1; index < numbers.length; index++) {
    number = '[' + number + ',' + numbers[index] + ']'

    let go = true

    while (go) {
        go = false

        let open = 0

        for (let i = 0; i < number.length; i++) {
            if (number[i] === ']') open--

            if (number[i] === '[') {
                open++

                if (open >= 5) {
                    let left = number.slice(0, i)
                    i++

                    let a
                    if (!Number.isNaN(+number[i]) && !Number.isNaN(+number[i + 1])) {
                        a = +number.slice(i, i + 2)
                        i++
                    }
                    else {
                        a = +number[i]
                    }

                    i += 2

                    let b
                    if (!Number.isNaN(+number[i]) && !Number.isNaN(+number[i + 1])) {
                        b = +number.slice(i, i + 2)
                        i++
                    }
                    else {
                        b = +number[i]
                    }

                    i += 2

                    let right = number.slice(i)

                    for (let c = left.length - 1; c >= 0; c--) {
                        if (!Number.isNaN(+left[c - 1]) && !Number.isNaN(+left[c])) {
                            left = left.split('')
                            left.splice(c - 1, 2, +(left[c - 1] + left[c]) + a)
                            left = left.join('')
                            break
                        }
                        else if (!Number.isNaN(+left[c])) {
                            left = left.split('')
                            left.splice(c, 1, +left[c] + a).join('')
                            left = left.join('')
                            break
                        }
                    }

                    for (let c = 0; c < right.length; c++) {
                        if (!Number.isNaN(+right[c]) && !Number.isNaN(+right[c + 1])) {
                            right = right.split('')
                            right.splice(c, 2, +(right[c] + right[c + 1]) + b)
                            right = right.join('')
                            break
                        }
                        else if (!Number.isNaN(+right[c])) {
                            right = right.split('')
                            right.splice(c, 1, +right[c] + b)
                            right = right.join('')
                            break
                        }
                    }

                    number = left + '0' + right

                    go = true
                    break
                }
            }
        }

        if (go) continue

        for (let i = 0; i < number.length; i++) {
            if (!Number.isNaN(+number[i]) && !Number.isNaN(+number[i + 1])) {
                const left = number.slice(0, i)
                const right = number.slice(i + 2)

                const a = Math.floor(parseInt(number.slice(i, i + 2)) / 2)
                const b = Math.ceil(parseInt(number.slice(i, i + 2)) / 2)

                const pair = '[' + a + ',' + b + ']'

                number = left + pair + right

                go = true
                break
            }
        }
    }
}

while (number.includes('[') || number.includes(']')) {
    let start = 0
    let end

    for (let i = 0; i < number.length; i++) {
        if (number[i] === '[') start = i
        else if (number[i] === ']') end = i

        if (end) break
    }

    const left = number.slice(0, start)
    const right = number.slice(end + 1)

    const [a, b] = number.slice(start + 1, end).split(',').map(Number)

    number = left + ( a * 3 + b * 2 ).toString() + right
}

console.log(number)
