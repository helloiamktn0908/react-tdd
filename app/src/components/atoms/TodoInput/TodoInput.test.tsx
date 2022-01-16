import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoInput from './TodoInput'

const setup = () => {
  const utils = render(<TodoInput />)
  const input = utils.getByRole('textbox')
  return {
    ...utils,
    input,
  }
}
describe('TodoInputのテスト', () => {
  it('inputタグが存在すること', () => {
    const { input } = setup()
    expect(input).toBeInTheDocument()
  })
  it('inputタグのvalueの初期値が空文字であること', () => {
    const { input } = setup()
    expect(input).toHaveValue('')
  })
  it('inputタグに正しく文字が入力されること', () => {
    const { input } = setup()
    userEvent.type(input, 'test')
    expect(input).toHaveValue('test')
  })
})
