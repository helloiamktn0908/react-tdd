type Props = {
  items: string[]
}

export function TTJList({ items }: Props) {
  return (
    <ul>
      {items.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`item-${i}`}>
          <input type='checkbox' />
          <span aria-label='span'>{item}</span>
        </li>
      ))}
    </ul>
  )
}
