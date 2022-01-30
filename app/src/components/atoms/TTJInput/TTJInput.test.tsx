import { render, screen } from '@testing-library/react'
import { TTJInput } from './TTJInput'

const setup = () => {
  const onChange = jest.fn()
  const utils = render(<TTJInput value='' onChange={onChange} />)
  const input = utils.getByRole('textbox')
  return {
    ...utils,
    input,
  }
}

describe('TTJInputの動作確認', () => {
  it('inputが表示されていること', () => {
    const { input } = setup()
    expect(input).toBeInTheDocument()
  })

  it('inputのtypeがtextであること', () => {
    const { input } = setup()
    expect(input).toBeInTheDocument()
  })

  it('inputの初期値が空文字であること', () => {
    const { input } = setup()
    expect(input).toHaveValue('')
  })

  it('inputのpropsが正しく渡っていること', () => {
    const onChange = jest.fn()
    render(<TTJInput value='test' onChange={onChange} />)
    expect(screen.getByRole('textbox')).toHaveValue('test')
  })
})
