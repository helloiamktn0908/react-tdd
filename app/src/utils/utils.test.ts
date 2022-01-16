import { sum } from './utils'

describe('Jestの動作確認', () => {
  it('sum関数が正しく動作する', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(1, 2)).not.toBe(4)
  })
})
