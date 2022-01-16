import { useState } from 'react'

function Rtl() {
  const [value, setValue] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)

  const onChange = (event: { target: HTMLInputElement }) => {
    setValue(event.target.value)
    setDisabled(false)
  }

  return (
    <>
      <input
        type='text'
        value={value}
        aria-label='test-input'
        onChange={onChange}
      />
      <button type='button' aria-label='test-button' disabled={disabled}>
        Submit
      </button>
    </>
  )
}

export default Rtl
