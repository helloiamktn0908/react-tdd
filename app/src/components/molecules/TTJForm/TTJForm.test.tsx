import { render } from '@testing-library/react'
import { TTJForm } from './TTJForm'

const setup = () => {
  const onClick = jest.fn()
  const onChange = jest.fn()
  const utils = render(
    <TTJForm text='' errors={[]} onClick={onClick} onChange={onChange} />
  )
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

describe('TTJFormの動作確認', () => {
  it('formタグが存在すること', () => {
    const { form } = setup()
    expect(form).toBeInTheDocument()
  })
})
