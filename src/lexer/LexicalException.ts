class LexicalException extends Error {
  msg: string
  constructor(msg: string) {
    super()
    this.msg = msg
  }
  static fromChar(c: string) {
    return new SyntaxError(`unexpected char at ${c}`)
  }
}
export default LexicalException
