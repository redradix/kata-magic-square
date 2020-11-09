const isMagic = require('./is-magic')
const buildOddMatrix = require('./build-nxn-odd-magic-matrix')

const matrix3x3 = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
]

const result = buildOddMatrix(matrix3x3)
console.table(result)
console.log('isMagic', isMagic(result))

// const matrix4x4 = [
//   [  1,  2,  3,  4 ],
//   [  5,  6,  7,  8 ],
//   [  9, 10, 11, 12 ],
//   [ 13, 14, 15, 16 ],
// ]
// 
// const result1 = buildOddMatrix(matrix4x4)
// console.table(result1)
// console.log('isMagic', isMagic(result1))

const matrix5x5 = [
  [  1,  2,  3,  4,  5 ],
  [  6,  7,  8,  9, 10 ],
  [ 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20 ],
  [ 21, 22, 23, 24, 25 ],
]

const result2 = buildOddMatrix(matrix5x5)
console.table(result2)
console.log('isMagic', isMagic(result2))
