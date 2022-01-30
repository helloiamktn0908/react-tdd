export const errorMessages = (text: string) => {
  const errors: string[] = []
  if (text === '') {
    errors.push('文字列を入力してください')
  }
  if (text.length > 200) {
    errors.push('200文字以下で入力してください')
  }
  return errors
}
