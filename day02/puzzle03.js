const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const commands = input.split('\n').filter(Boolean)

function readCommands(cmds) {
    let x = 0
    let y = 0

    for (const cmd of cmds) {
        const direction = cmd.split(' ')[0]
        const distance = +cmd.split(' ')[1]

        if (direction === 'forward') x += distance
        if (direction === 'down') y += distance
        if (direction === 'up') y -= distance
    }

    return x * y
}

console.log(readCommands(commands))
