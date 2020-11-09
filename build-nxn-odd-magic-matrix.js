const isSquare = require('./is-square')

const buildEmpty = n => {
  const empty = new Array(n)
    .fill(null)
    .map(x => new Array(n).fill(null))

  return empty
}

const calculateNextCoord = (matrix, prev) => {
  let nextX = prev[0] - 1
  let nextY = prev[1] + 1

  if (matrix[nextX] !== undefined && matrix[nextX][nextY] === null) {
    return [nextX, nextY]
  }

  if (matrix[nextX] !== undefined && Number(matrix[nextX][nextY])) {
    nextX = prev[0] + 1
    nextY = prev[1]
  }

  if (matrix[nextX] !== undefined && matrix[nextX][nextY] === undefined) {
    nextY = 0
  }

  if (matrix[nextX] !== undefined && matrix[nextX][nextY] === null) {
    return [nextX, nextY]
  }

  if (matrix[nextX] === undefined) {
    nextX = matrix.length - 1
    nextY = prev[1] + 1

    if (matrix[nextX][nextY] === null) {
      return [nextX, nextY]
    }

    if (matrix[nextX][nextY] === undefined) {
      nextX = prev[0] + 1
      nextY = prev[1]
    }
  }

  return [nextX, nextY]
}

module.exports = matrix => {
  if (!isSquare(matrix)) {
    throw new Error('Wrong input')
  }

  if (matrix.length % 2 === 0) {
    throw new Error('Odd matrix expected')
  }

  const size = matrix.length
  const numbers = matrix.flat().sort((a, b) => b - a)
  const result = buildEmpty(size)
  let coord = [0, Math.floor(size / 2)]

  result[coord[0]][coord[1]] = numbers.pop()

  while(numbers.length) {
    coord = calculateNextCoord(result, coord)
    result[coord[0]][coord[1]] = numbers.pop()
  }

  return result
}