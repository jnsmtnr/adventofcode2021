const input = require('fs').readFileSync('input.txt', 'utf8')

let [pos1, pos2] = input.split('\n').filter(Boolean).map(line => +line.split(' ')[4] - 1)

const player1 = {
    0: [
        {
            position: pos1,
            score: 0,
            universes: 1
        }
    ]
}

const player2 = {
    0: [
        {
            position: pos2,
            score: 0,
            universes: 1
        }
    ]
}

function generate(player) {
    let turn = 0
    
    do {
        const states = []
        
        for (const state of player[turn]) {
        
            if (state.score >= 21) continue
        
            // roll 3
            states.push({
                position: (state.position + 3) % 10,
                score: state.score + ((state.position + 3) % 10 + 1),
                universes: state.universes * 1
            })
        
            // roll 4
            states.push({
                position: (state.position + 4) % 10,
                score: state.score + ((state.position + 4) % 10 + 1),
                universes: state.universes * 3
            })
        
            // roll 5
            states.push({
                position: (state.position + 5) % 10,
                score: state.score + ((state.position + 5) % 10 + 1),
                universes: state.universes * 6
            })
        
            // roll 6
            states.push({
                position: (state.position + 6) % 10,
                score: state.score + ((state.position + 6) % 10 + 1),
                universes: state.universes * 7
            })
        
            // roll 7
            states.push({
                position: (state.position + 7) % 10,
                score: state.score + ((state.position + 7) % 10 + 1),
                universes: state.universes * 6
            })
        
            // roll 8
            states.push({
                position: (state.position + 8) % 10,
                score: state.score + ((state.position + 8) % 10 + 1),
                universes: state.universes * 3
            })
        
            // roll 9
            states.push({
                position: (state.position + 9) % 10,
                score: state.score + ((state.position + 9) % 10 + 1),
                universes: state.universes * 1
            })
        }
        
        player[turn + 1] = states
    
        turn++
    
    } while (player[turn].filter(state => state.score < 21).length > 0)
}

generate(player1)
generate(player2)

let player1wins = 0

for (const turn in player1) {
    if (player1[turn].filter(state => state.score >= 21).length > 0) {
        const wins = player1[turn].filter(state => state.score >= 21).reduce((uni, state) => uni + state.universes, 0)
        const losses = player2[+turn - 1].filter(state => state.score < 21).reduce((uni, state) => uni + state.universes, 0)
        
        player1wins += wins * losses
    }
}

let player2wins = 0

for (const turn in player2) {
    if (player2[turn].filter(state => state.score >= 21).length > 0 && player1[turn]) {
        const wins = player2[turn].filter(state => state.score >= 21).reduce((uni, state) => uni + state.universes, 0)
        const losses = player1[turn].filter(state => state.score < 21).reduce((uni, state) => uni + state.universes, 0)

        player2wins += wins * losses
    }
}

console.log(Math.max(player1wins, player2wins))
