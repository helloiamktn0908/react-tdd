import { ChangeEvent } from 'react'

type Props = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function TTJInput({ value, onChange }: Props) {
  return <input type='text' value={value} onChange={onChange} />
}
