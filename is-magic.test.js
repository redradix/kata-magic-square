const isMagic = require('./is-magic')

describe('is-magic', () => {
  describe('returns false if no same sum in rows, cols and diagonals', () => {
    it('in a 3x3 matrix', () => {
      const magicMatrix = [
        [ 9, 7, 6 ],
        [ 2, 5, 1 ],
        [ 4, 3, 8 ],
      ]

      expect(isMagic(magicMatrix)).toBe(false)
    })

    it('in a 4x4 matrix', () => {
      const magicMatrix = [
        [  12, 15, 14,  4 ],
        [  1,  6,  7,  9 ],
        [  8, 10, 11,  5 ],
        [ 13,  3,  2, 16 ],
      ]

      expect(isMagic(magicMatrix)).toBe(false)
    })
  })

  describe('returns true if same sum in rows, cols and diagonals', () => {
    it('success for a 3x3 matrix', () => {
      const magicMatrix = [
        [ 2, 7, 6 ],
        [ 9, 5, 1 ],
        [ 4, 3, 8 ],
      ]

      expect(isMagic(magicMatrix)).toBe(true)
    })

    it('success for a 4x4 matrix', () => {
      const magicMatrix = [
        [  1, 15, 14,  4 ],
        [ 12,  6,  7,  9 ],
        [  8, 10, 11,  5 ],
        [ 13,  3,  2, 16 ],
      ]

      expect(isMagic(magicMatrix)).toBe(true)
    })

    it('success for a 4x4 matrix', () => {
      const magicMatrix = [
        [ 14,  4,  3, 17 ],
        [  9, 11, 12,  6 ],
        [ 13,  7,  8, 10 ],
        [  2, 16, 15,  5 ],
      ]

      expect(isMagic(magicMatrix)).toBe(true)
    })

    it('success for a 4x4 matrix', () => {
      const magicMatrix = [
        [  4,  5, 16,  9 ],
        [ 14, 11,  2,  7 ],
        [  1,  8, 13, 12 ],
        [ 15, 10,  3,  6 ],
      ]

      expect(isMagic(magicMatrix)).toBe(true)
    })

    it('success for a 5x5 matrix', () => {
      const magicMatrix = [
        [ 11, 10,  4, 23, 17 ],
        [ 18, 12,  6,  5, 24 ],
        [ 25, 19, 13,  7,  1 ],
        [  2, 21, 20, 14,  8 ],
        [  9,  3, 22, 16, 15 ],
      ]

      expect(isMagic(magicMatrix)).toBe(true)
    })
  })
})