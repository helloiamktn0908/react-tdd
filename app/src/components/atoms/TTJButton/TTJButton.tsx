type Props = { text: string; onClick: () => void }

export function TTJButton({ text, onClick }: Props) {
  return (
    <button type='button' aria-label='test-button' onClick={onClick}>
      {text}
    </button>
  )
}
