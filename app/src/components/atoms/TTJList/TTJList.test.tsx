import { render } from '@testing-library/react'
import { TTJList } from './TTJList'

const setup = () => {
  const utils = render(<TTJList items={['test']} />)
  const checkbox = utils.getByRole('checkbox')
  const span = utils.getByLabelText('span')
  const unOrderList = utils.getByRole('list')
  const listItems = utils.getByRole('listitem')

  return {
    ...utils,
    checkbox,
    span,
    unOrderList,
    listItems,
  }
}

describe('TTJListの動作確認', () => {
  it('inputが存在すること', () => {
    const { checkbox } = setup()
    expect(checkbox).toBeInTheDocument()
  })

  it('inputのtypeがcheckboxであること', () => {
    const { checkbox } = setup()
    expect(checkbox).toBeInTheDocument()
  })

  it('spanタグが存在すること', () => {
    const { span } = setup()
    expect(span).toBeInTheDocument()
  })

  it('ulタグが存在すること', () => {
    const { unOrderList } = setup()
    expect(unOrderList).toBeInTheDocument()
  })

  it('listタグが存在すること', () => {
    const { listItems } = setup()
    expect(listItems).toBeInTheDocument()
  })
})
