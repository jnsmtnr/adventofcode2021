const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

let score = 0

for (const line of input.split('\n').filter(Boolean)) {
    const openings = []

    for (const char of line) {
        if (['(', '[', '{', '<'].includes(char)) openings.push(char)

        else {
            if (char === ')') {
                if (openings[openings.length - 1] === '(') openings.pop()
                else {
                    score += 3 
                    break
                }
            }

            else if (char === ']') {
                if (openings[openings.length - 1] === '[') openings.pop()
                else {
                    score += 57
                    break
                }
            }

            else if (char === '}') {
                if (openings[openings.length - 1] === '{') openings.pop()
                else {
                    score += 1197
                    break
                }
            }

            else if (char === '>') {
                if (openings[openings.length - 1] === '<') openings.pop()
                else {
                    score += 25137
                    break
                }
            }
        }
    }
}

console.log(score)
