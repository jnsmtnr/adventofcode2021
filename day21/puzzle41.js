const input = require('fs').readFileSync('input.txt', 'utf8')

let [ pos1, pos2 ] = input.split('\n').filter(Boolean).map(line => +line.split(' ')[4] - 1)
let score1 = 0
let score2 = 0

let i = 1

let player1 = true

while (score1 < 1000 && score2 < 1000) {
    const roll = i + (i + 1) + (i + 2)

    if (player1) {
        pos1 = (pos1 + roll) % 10
        score1 += pos1 + 1
    }
    else {
        pos2 = (pos2 + roll) % 10
        score2 += pos2 + 1
    }

    player1 = !player1
    i += 3
}

console.log(Math.min(score1, score2) * (i - 1))
