import { render, screen } from '@testing-library/react'
import TodoMessage from './TodoMessage'

describe('TodoMessageのテスト', () => {
  it('正しくpropsが渡ること', () => {
    render(<TodoMessage value='Error' error />)
    expect(screen.getByText('Error')).toBeInTheDocument()
  })
  it('初期状態では非表示であること', () => {
    render(<TodoMessage value='Error' error={false} />)
    expect(screen.queryByText('Error')).not.toBeInTheDocument()
  })
})
