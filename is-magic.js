const transpose = matrix => {
  const transposed = new Array(matrix.length)
    .fill(null)
    .map(x => new Array(matrix.length).fill(null))

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      transposed[j][i] = matrix[i][j]
    }
  }

  return transposed
}

const diagonals = matrix => {
  const diagonals = [[], []]

  for(let i = 0; i < matrix.length; i++) {
    diagonals[0].push(matrix[i][i])
    diagonals[1].push(matrix[i][matrix.length - 1 - i])
  }

  return diagonals
}

const sumArrays = arys =>
  arys.map(row => row.reduce((acc, x) => acc + x, 0))

module.exports = matrix => {
  const rowsSums = sumArrays(matrix)
  const colsSums = sumArrays(transpose(matrix))
  const diagonalsSums = sumArrays(diagonals(matrix))
  return new Set([...rowsSums, ...colsSums, ...diagonalsSums]).size === 1
}