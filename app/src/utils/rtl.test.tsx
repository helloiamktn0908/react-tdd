import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Rtl from './Rtl'

const setup = () => {
  const utils = render(<Rtl />)
  const input = utils.getByLabelText('test-input')
  const button = utils.getByLabelText('test-button')
  return {
    ...utils,
    input,
    button,
  }
}

describe('Rtlの動作確認', () => {
  it('inputが表示されていること', () => {
    const { input } = setup()
    expect(input).toBeInTheDocument()
  })
  it('buttonが表示されていること', () => {
    const { button } = setup()
    expect(button).toBeInTheDocument()
  })
  it('buttonが非活性であること', () => {
    const { button } = setup()
    expect(button).toBeDisabled()
  })
  it('inputに文字が入力されるとbuttonが活性化すること', () => {
    const { input, button } = setup()
    expect(button).toBeDisabled()
    userEvent.type(input, 'test')
    expect(button).toBeEnabled()
  })
  it('inputの文字が正しく入力されること', () => {
    const { input } = setup()
    expect(input).toHaveValue('')
    userEvent.type(input, 'test')
    expect(input).toHaveValue('test')
  })
})
