import { render, screen } from '@testing-library/react'
import { TTJButton } from './TTJButton'

const setup = () => {
  const onClick = jest.fn()
  const utils = render(<TTJButton text='add' onClick={onClick} />)
  const button = utils.getByRole('button')
  return {
    ...utils,
    button,
  }
}

describe('TTJButtonの動作確認', () => {
  it('buttonが表示されていること', () => {
    const { button } = setup()
    expect(button).toBeInTheDocument()
  })

  it('buttonの文字列がaddであること', () => {
    const { button } = setup()
    expect(button).toHaveTextContent('add')
  })

  it('buttonの文字がpropsで渡ること', () => {
    const onClick = jest.fn()
    render(<TTJButton text='test' onClick={onClick} />)
    expect(screen.getByRole('button')).toHaveTextContent('test')
  })
})
