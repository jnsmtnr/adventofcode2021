const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const connections = input.split('\n').filter(Boolean).map(line => line.split('-'))

let paths = [['start']]

let go = true

while (go) {
    go = false

    const newPaths = []

    for (const path of paths) {

        const lastNode = path[path.length - 1]

        if (lastNode === 'end') {
            newPaths.push(path)
            continue
        }

        for (const c of connections) {
            const newPath = [...path]

            if (c.includes(lastNode)) {
                const nextNode = c[0] === lastNode ? c[1] : c[0]

                if (/[a-z]/.test(nextNode) && newPath.includes(nextNode)) continue

                newPath.push(nextNode)
                newPaths.push(newPath)
                go = true
            }
        }
    }

    paths = newPaths
}

console.log(paths.length)
