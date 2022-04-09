import { MyTokenIterator } from "@/common/peekIterator";
import AlphabetHelper from "@/lexer/AlphabetHelper";
import Token from "@/lexer/Token";
import TokenType from "@/lexer/TokenType";
import { tokenTypes } from "./token";
const precedenceList = {
   '+': 0,
   '-': 0,
   '*': 1,
   '/': 1,
   'call': 9
};

export function getLiteral (it: MyTokenIterator<Token>,tk: Token, ast?: any,  prevPoint?: number) {
  const parentAst:any = ast ||  {
    left: null,
    right: null,
  }
  const op = it.peek().getVal()
  parentAst.op = op
  let curAst: any
  switch (tk.getType()) {
    case TokenType.VARIABLE.type:
      curAst =  VariableDeclaration(tk)
      break;
      case TokenType.INTEGER.type:
        curAst =  IntegerLiteral(tk)
      break;
      case TokenType.STRING.type:
        curAst = StringLiteral(tk)
      break;
      case '+' || '-' || '!': // 前序 处理两个值 !a !123
      curAst =  perfix(it, tk)
      break;
    default:
      curAst = {
        type: 'unknow'
      }
      break;
  }

  const nextTk = it.next()
  if(nextTk && nextTk.getType() === TokenType.OPERATOR.type) { // 下一个还是操作符 + - * /
    const percdence = precedenceList[nextTk.getVal() as '/']
    if(prevPoint) {
      if(prevPoint > percdence) {
        parentAst.right = curAst
      }else{
        parentAst.left = curAst
      }
    }else{
      parentAst.right = curAst
    }// 表达式还未结束
    it.peek() && nextTk.getVal() !== ';' && getLiteral(it, it.next(), curAst, percdence)
  }
  return parentAst
}

export default function expression(it: MyTokenIterator<Token>, ast?: any) {
  const tk = it.next(); // value | number | fn | var

  // if(lookhead.getVal() === ';') { // 下个如果不是操作符的话那就说明只是简单的基本类型或者变量 let a = 12;
    return getLiteral(it, tk)
  // }else { // 这里处理表达式的情况 前序 中序 复杂表达式
  //   if(tk.getVal() === '+' || tk.getVal() === '-' || tk.getVal() === '!') { // 前序
  //     return perfix(it, tk)
  //   }else{ // 复杂表达式

  //   }
  // }
}
export const perfix =function (it: MyTokenIterator<Token>, tk: Token) {
  return {
    type: 'UnaryExpression',
    op: tk.getVal(),
    prefix: true,
    name: it.next().getVal()
  }
}
export const IntegerLiteral = function (tk: Token) {
  return {
    desc: 'Integer value: is ' + tk.getVal(),
    token: tk,
    value: tk.getVal(),
    type: 'IntegerLiteral'
  }
}
export const BooleanLiteral = function (it:MyTokenIterator<Token>) {

}
export const UnaryLiteral = function (tk: Token) { // 前序
  return {
    op: ''
  }
}
export const VariableDeclaration = function (tk: Token) {
  return {
    desc: 'var value: is ' + tk.getVal(),
    token: tk,
    value: tk.getVal(),
    type: 'Identifier',
    name: tk.getVal()
  }
}
export const StringLiteral = function (tk:Token) {
  return {
    desc: 'String value: is ' + tk.getVal(),
    token: tk,
    value: tk.getVal(),
    type: 'StringLiteral'
  }
}
export const expressStmt = function (tk:Token) {

}

