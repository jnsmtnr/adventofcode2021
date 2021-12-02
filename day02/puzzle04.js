const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const commands = input.split('\n').filter(Boolean)

function readCommands(cmds) {
    let aim = 0
    let x = 0
    let y = 0

    for (const cmd of cmds) {
        const direction = cmd.split(' ')[0]
        const distance = +cmd.split(' ')[1]

        if (direction === 'forward') {
            x += distance
            y += distance * aim
        }
        if (direction === 'down') aim += distance
        if (direction === 'up') aim -= distance
    }

    return x * y
}

console.log(readCommands(commands))
