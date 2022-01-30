import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TTJFormAndList } from './TTJFormAndList'

const setup = () => {
  const utils = render(<TTJFormAndList />)
  const input = utils.getByRole('textbox')
  const button = utils.getByRole('button')
  const form = utils.getByLabelText('test-form')
  return {
    ...utils,
    input,
    button,
    form,
  }
}

describe('TTJFormAndListの動作確認', () => {
  it('inputの文字が正しく入力されること', () => {
    const { input } = setup()
    expect(input).toHaveValue('')
    userEvent.type(input, 'test')
    expect(input).toHaveValue('test')
  })

  it('文字列が空文字でsubmitした場合spanタグがある', () => {
    const { input, button } = setup()
    expect(input).toHaveValue('')
    userEvent.click(button)
    const span = screen.getByRole('alert')
    expect(span).toBeInTheDocument()
  })

  it('文字列が200文字以下でsubmitした場合spanタグがない', () => {
    const { input, button } = setup()
    const dummyText = 'a'
    userEvent.type(input, dummyText.repeat(200))
    userEvent.click(button)
    const span = screen.queryByRole('alert')
    expect(span).toBeNull()
  })

  it('文字列が201文字以上でsubmitした場合spanタグがある', () => {
    const { input, button } = setup()
    const dummyText = 'a'
    userEvent.type(input, dummyText.repeat(201))
    userEvent.click(button)
    const span = screen.getByRole('alert')
    expect(span).toBeInTheDocument()
  })
})
