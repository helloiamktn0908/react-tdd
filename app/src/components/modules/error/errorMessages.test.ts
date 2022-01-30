import { errorMessages } from './errorMessages'

describe('errorMessage.tsのテスト', () => {
  it('文字列が空', () => {
    const expected = ['文字列を入力してください']
    expect(errorMessages('')).toEqual(expect.arrayContaining(expected))
  })
  it('文字列が200文字以上', () => {
    const expected = ['200文字以下で入力してください']
    const dummyText = 'a'
    const dummyTexts = dummyText.repeat(201)
    expect(errorMessages(dummyTexts)).toEqual(expect.arrayContaining(expected))
  })
  it('文字列が200文字', () => {
    const expected: string[] = []
    const dummyText = 'a'
    const dummyTexts = dummyText.repeat(200)
    expect(errorMessages(dummyTexts)).toEqual(expect.arrayContaining(expected))
  })
})
