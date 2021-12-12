const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const connections = input.split('\n').filter(Boolean).map(line => line.split('-'))

let paths = [{ route: ['start'], visited: false}]

let go = true

while (go) {
    go = false

    const newPaths = []

    for (const path of paths) {

        const lastNode = path.route[path.route.length - 1]

        if (lastNode === 'end') {
            newPaths.push(path)
            continue
        }

        for (const c of connections) {
            const newPath = { route: [...path.route], visited: path.visited }

            if (c.includes(lastNode)) {
                const nextNode = c[0] === lastNode ? c[1] : c[0]

                if (nextNode === 'start') continue

                if (/[a-z]/.test(nextNode) && newPath.route.includes(nextNode) && newPath.visited) continue

                if (/[a-z]/.test(nextNode) && newPath.route.includes(nextNode)) newPath.visited = true

                newPath.route.push(nextNode)
                newPaths.push(newPath)
                go = true
            }
        }
    }

    paths = newPaths
}

console.log(paths.length)
