const isSquare = require('./is-square')

describe('isSquare', () => {
  it('returns true if same rows size and matrix size', () => {
    const matrix = [
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ],
    ]

    expect(isSquare(matrix)).toBe(true)
  })

  it('returns false if no same rows size than matrix size', () => {
    const matrix = [
      [ 1, 1, 1 ],
      [ 1, 1, 1 ],
      [ 1, 1, 1 ],
      [ 1, 1, 1 ],
    ]

    expect(isSquare(matrix)).toBe(false)
  })

  it('returns false if any row of different size', () => {
    const matrix = [
      [ 1, 1, 1 ],
      [ 1, 1 ],
      [ 1, 1, 1 ],
    ]

    expect(isSquare(matrix)).toBe(false)
  })
})