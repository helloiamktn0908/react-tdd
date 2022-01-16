type Props = {
  value: string
  error: boolean
}

function TodoMessage(props: Props) {
  const { value, error } = props

  return error ? <span>{value}</span> : null
}

export default TodoMessage
