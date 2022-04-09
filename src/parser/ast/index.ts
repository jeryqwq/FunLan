import { MyTokenIterator } from "@/common/peekIterator"
import Token from "@/lexer/Token"
import assign from "./assign"
import parseFunc from "./parseFunc"
import parseVar from './varibale'
import parseReturn from './return'
import call from "./call"
export default function entry (it: MyTokenIterator<Token>, asts: Array<any> = [], from?: string) :any  {
  if (!it.hasNext()) {
    return asts
  }
  let token = it.next()
  if(token.getVal() === ';') {
    token = it.next(); // 吃掉一个结尾符号
    if (!it.hasNext()) {
      return asts
    }
  }
  if(token.getVal() === '}') { // 适配函数结束, 代表一个作用域, 先不考虑if,while啥的
    it.next(); // 吃掉;
    return asts
  }
    const lookhead = it.peek()
    // 赋值语句
   // https://zhuanlan.zhihu.com/p/137509746 普拉特解析法
   if (token.isVariable() && lookhead.getVal() === "=") {
     it.putBack()
     asts.push(assign(it))
   } else if (token.getVal() === "let" && lookhead.isVariable()) { // 定义变量
   it.putBack()
     let ast = {
       right: { 
         name: lookhead.getVal()
       },
       left: undefined,
       type: 'assign'
     }
     ast.left = parseVar(it)
     asts.push(ast)
   }
   //  else if (token.getVal() === "if") {
   //   return IfStmt.parse(it)
   // }
   else if (token.getVal() === "func") {
     it.putBack()
     asts.push(parseFunc(it))
   } 
   else if (token.getVal() === "return") {
     it.putBack()
     asts.push(parseReturn(it))
   }
   else if (token.isVariable() && lookhead.getVal() === "(") { // 执行函数
     it.putBack()
     asts.push(call(it))
   }
 
  return entry(it, asts)
}
