import { useState } from 'react'
import { TTJList } from '../../atoms/TTJList/TTJList'
import { errorMessages } from '../../modules/error/errorMessages'
import { TTJForm } from '../../molecules/TTJForm/TTJForm'

export function TTJFormAndList() {
  const [text, setText] = useState('')
  const [errors, setErrors] = useState<string[]>([])
  const [todos, setTodos] = useState<string[]>([])

  function changeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  const addTodo = () => {
    const messages = errorMessages(text)
    if (messages.length > 0) {
      setErrors(messages)
    } else {
      setTodos([...todos, text])
    }
  }

  return (
    <div className='App'>
      <TTJForm
        text={text}
        onClick={addTodo}
        onChange={changeText}
        errors={errors}
      />
      <TTJList items={todos} />
    </div>
  )
}
