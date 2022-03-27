import { MyTokenIterator } from "@/common/peekIterator"
import Token from "@/lexer/Token"
import parseAssign from './assign'

export default function (it: MyTokenIterator<Token>)  {

  if (!it.hasNext()) {
    return null
  }
  const token = it.next()
  const lookhead = it.peek()
  it.putBack()
   // 赋值语句
  if (token.isVariable() && lookhead.getVal() === "=") {
    // return parseAssign(it)
  } else if (token.getVal() === "let" && lookhead.isVariable()) { // 定义变量
    return parseAssign(it)
  } else if (token.getVal() === "if") {
    return IfStmt.parse(it)
  } else if (token.getVal() === "func") {
    return FunctionDeclareStmt.parse(it)
  } else if (token.getVal() === "return") {
    return ReturnStmt.parse(it)
  }
}