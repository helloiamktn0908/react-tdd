import { useState } from 'react'

function TodoInput() {
  const [value, setValue] = useState<string>('')
  const onChange = (event: { target: HTMLInputElement }) => {
    setValue(event.target.value)
  }
  return <input name='task' type='text' value={value} onChange={onChange} />
}

export default TodoInput
