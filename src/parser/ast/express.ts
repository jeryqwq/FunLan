import { MyTokenIterator } from "@/common/peekIterator";
import AlphabetHelper from "@/lexer/AlphabetHelper";
import Token from "@/lexer/Token";
import TokenType from "@/lexer/TokenType";
import { tokenTypes } from "./token";
const precedenceList = {
  "":0,
  assign:1,
  condition:2,
  and:2.5,
  compare:3,
  sum:4,
  product:5,
  prefix:6,
  postfix:7,
  call:8,
};

export function getLiteral (tk: Token) {
  switch (tk.getType()) {
    case TokenType.VARIABLE.type:
        return VariableDeclaration(tk)
      break;
      case TokenType.INTEGER.type:
        return IntegerLiteral(tk)
      break;
      case TokenType.STRING.type:
        return StringLiteral(tk)
      break;
    default:
      break;
  }
}

export default function expression(it: MyTokenIterator<Token>, ast: any) {
  const tk = it.next(); // value | number | fn | var
  const lookhead = it.peek();
  const curAst = {
    left: null,
    right: null,
    op: undefined,
  }
  if(lookhead.getVal() === ';') { // 下个如果不是操作符的话那就说明只是简单的基本类型或者变量
    return getLiteral(tk)
  }else { // 这里处理表达式的情况 前序 中序 复杂表达式
    if(tk.getVal() === '+' || tk.getVal() === '-' || tk.getVal() === '!') { // 前序
      return perfix(it, tk)
    }else{ // 复杂表达式

    }
  }
  return curAst
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

