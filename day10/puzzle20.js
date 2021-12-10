const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

let scores = []

for (const line of input.split('\n').filter(Boolean)) {
    const openings = []

    let corrupt = false

    for (const char of line) {
        if (['(', '[', '{', '<'].includes(char)) openings.push(char)

        else {
            if (char === ')') {
                if (openings[openings.length - 1] === '(') openings.pop()
                else {
                    corrupt = true
                    break
                }
            }

            else if (char === ']') {
                if (openings[openings.length - 1] === '[') openings.pop()
                else {
                    corrupt = true
                    break
                }
            }

            else if (char === '}') {
                if (openings[openings.length - 1] === '{') openings.pop()
                else {
                    corrupt = true
                    break
                }
            }

            else if (char === '>') {
                if (openings[openings.length - 1] === '<') openings.pop()
                else {
                    corrupt = true
                    break
                }
            }
        }
    }

    if (corrupt) continue

    let score = 0

    for (char of openings.reverse()) {
        if (char === '(') {
            score = score * 5 + 1
        }

        if (char === '[') {
            score = score * 5 + 2
        }

        if (char === '{') {
            score = score * 5 + 3
        }

        if (char === '<') {
            score = score * 5 + 4
        }
    }

    scores.push(score)
}

console.log(scores.sort((a,b) => a-b)[Math.floor(scores.length / 2)])
