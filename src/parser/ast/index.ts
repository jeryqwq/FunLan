import { MyTokenIterator } from "@/common/peekIterator"
import Token from "@/lexer/Token"
import assign from "./assign"
import parseFunc from "./parseFunc"
import parseVar from './varibale'

export default function (it: MyTokenIterator<Token>)  {
  if (!it.hasNext()) {
    return null
  }
  const token = it.next()
  const lookhead = it.peek()
  it.putBack()
   // 赋值语句
  // https://zhuanlan.zhihu.com/p/137509746 普拉特解析法
  let ast = {
    right: { 
      name: lookhead.getVal()
    },
    left: undefined,
    op: 'assign'
  }
  debugger
  if (token.isVariable() && lookhead.getVal() === "=") {
    return assign(it)
  } else if (token.getVal() === "let" && lookhead.isVariable()) { // 定义变量
    ast.left = parseVar(it)
  }
  //  else if (token.getVal() === "if") {
  //   return IfStmt.parse(it)
  // }
  else if (token.getVal() === "func") {
    return parseFunc(it)
  } 
  else if (token.getVal() === "return") {
  //   return ReturnStmt.parse(it)
  }
  
}
