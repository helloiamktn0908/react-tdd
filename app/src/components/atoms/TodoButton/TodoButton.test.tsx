import { render, screen } from '@testing-library/react'
import TodoButton from './TodoButton'

describe('TodoButtonのテスト', () => {
  it('buttonタグが存在すること', () => {
    render(<TodoButton value='Add' />)
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()
  })
})
