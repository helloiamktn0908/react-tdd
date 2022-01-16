import { render } from '@testing-library/react'
import TodoButton from './TodoButton'

const setup = () => {
  const utils = render(<TodoButton />)
  const button = utils.getByRole('button', { name: 'Add' })
  return {
    ...utils,
    button,
  }
}

describe('TodoButtonのテスト', () => {
  it('buttonタグが存在すること', () => {
    const { button } = setup()
    expect(button).toBeInTheDocument()
  })
})
