const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const connections = input.split('\n').filter(Boolean).reduce((cons, line) => {
    const [start, end] = line.split('-')

    if (end !== 'start') {
        if (cons[start]) cons[start].push(end)
        else cons[start] = [end]
    }

    if (cons[end]) cons[end].push(start)
    else cons[end] = [start]

    return cons
}, {})

let paths = [{ route: ['start'], visited: false }]
let finishedPaths = 0

let go = true

while (go) {
    go = false

    const newPaths = []

    for (const path of paths) {
        const lastNode = path.route[path.route.length - 1]

        const cons = connections[lastNode]

        for (const nextNode of cons) {
            if (nextNode === 'end') {
                finishedPaths++
                continue
            }

            const newPath = { visited: path.visited }

            if (/[a-z]/.test(nextNode) && path.route.includes(nextNode)) {
                if (newPath.visited) continue
                else newPath.visited = true
            }

            newPath.route = [...path.route, nextNode]
            newPaths.push(newPath)
            go = true
        }
    }

    paths = newPaths
}

console.log(finishedPaths)
