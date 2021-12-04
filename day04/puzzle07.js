const { readFileSync } = require("fs")
const input = readFileSync('input.txt', 'utf8')

const { playBingo, getNumbers, getBoards } = require('./common.js')

const numbers = getNumbers(input)
const boards = getBoards(input)

console.log(playBingo(boards, numbers))
