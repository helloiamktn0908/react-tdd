import { ChangeEvent } from 'react'
import { TTJButton } from '../../atoms/TTJButton/TTJButton'
import { TTJInput } from '../../atoms/TTJInput/TTJInput'

type Props = {
  text: string
  errors: string[]
  onClick: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function TTJForm({ text, errors, onClick, onChange }: Props) {
  return (
    <form aria-label='test-form'>
      <TTJInput value={text} onChange={onChange} />
      {errors.map((error, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={`error-messages-${i}`} role='alert'>
          {error}
        </span>
      ))}
      <TTJButton text='add' onClick={onClick} />
    </form>
  )
}
