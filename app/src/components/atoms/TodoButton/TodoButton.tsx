type Props = {
  value: string
}

function TodoButton(props: Props) {
  const { value } = props
  return <button type='submit'>{value}</button>
}

export default TodoButton
