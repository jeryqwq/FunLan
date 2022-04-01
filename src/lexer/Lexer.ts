import Token from './Token';
import PeekIterator, { MyTokenIterator } from "./../common/peekIterator"
import tokenType  from "./TokenType"
import AlphabetHelper  from "./AlphabetHelper"
import LexicalException from "./LexicalException"
let line = 1
class Lexer {
  tokens: Array<Token>
  constructor() {
    this.tokens = []
  }
  analyse(source:  MyTokenIterator<{
    value: string
  }>) {
    const it = new PeekIterator(source, "/0")
    while (it.hasNext()) {
      let c = it.next() as string
      if (c === "/0") break
      if(c === '\n' || c === '\r\n') {
        line++
      }
      if (c === " " || c === "\n") {
        continue
      }
      if (c === "/") {
        //处理注释
        const lookHead = it.peek()
        if (lookHead === "/") {
          while (it.hasNext() && (c = it.next() as string) != "\n") {}
        } else if (lookHead === "*") {
          let success = false
          while (it.hasNext()) {
            let p = it.next()
            if (p === "*" && it.peek() === "/") {
              it.next() && it.next()
              success = true
              break
            }
          }
          if (!success) {
            throw new LexicalException("comment no matched")
          }
        }
      }
      if (c === "{" || c === "}" || c === "(" || c === ")") {
        this.tokens.push(new Token(tokenType.BRACKET.type, c, line))
        continue
      }
      if (c === '"' || c === "'") {
        it.putBack() //需要加上'或者" 回退一次
        this.tokens.push(Token.makeString(it, line)) //生成字符串token
        continue
      }
      if (AlphabetHelper.isLetter(c)) {
        it.putBack() //需要加上'或者" 回退一次
        this.tokens.push(Token.makeVarOrKeyword(it, line)) //生成字符串token
        continue
      }
      if (AlphabetHelper.isNumber(c)) {
        it.putBack() //需要加上'或者" 回退一次
        this.tokens.push(Token.makeNumber(it, line) as Token) //生成字符串token
        continue
      }
      if ((c === "+" || c === "-") && AlphabetHelper.isNumber(it.peek())) {
        //当前为操作符，下一个是数字
        //数字的+=
        const last = (this.tokens[this.tokens.length - 1] || null) as Token
        if (last == null || !last.isValue()) {
          //能直接参与计算的表达式  +5  || 6*5
          it.putBack()
          this.tokens.push(Token.makeNumber(it, line)  as Token)
          continue
        }
      }
      if (AlphabetHelper.isOperator(c)) {
        it.putBack()
        this.tokens.push(Token.makeOp(it, line) as Token)
        continue
      }
      LexicalException.fromChar(c)
    }
    return this.tokens
  }
}
export default Lexer
