const { readFileSync } = require("fs")
const input = readFileSync('input.txt', 'utf8')

const { checkBingo, playBingo, getBoards, getNumbers } = require('./common.js')

const numbers = getNumbers(input)
const boards = getBoards(input)

function playToLose(boards, numbers) {
    for (let i = 1; i < numbers.length; i++) {
        if (boards.length === 1) {
            return playBingo(boards, numbers)
        }

        for (let boardIndex = 0; boardIndex < boards.length; boardIndex++ ) {
            const bingo = checkBingo(boards[boardIndex], numbers.slice(0,i))
            if (bingo) {
                boards.splice(boardIndex, 1)
            }
        }
    }
}

console.log(playToLose(boards, numbers))
