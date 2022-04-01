import { MyTokenIterator } from "@/common/peekIterator";
import Token from "@/lexer/Token";
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


function infix(precedence: any,left: any,type: any){
  let right = expression(precedence);
  return {
    type,left,right
  }
}
export default function expression(it: MyTokenIterator<Token>) {
  const tk = it.next();

  return {

  }
}
export const IntegerLiteral = function (it: MyTokenIterator<Token>) {
  const tk = it.next();
  return {
    desc: 'Integer value: is' + tk.getVal(),
    token: tk,
    value: tk.getVal(),
    type: tk.getType()
  }
}
export const BooleanLiteral = function (it:MyTokenIterator<Token>) {

}
export const StringLiteral = function (it:MyTokenIterator<Token>) {}
const prefixParserMap = {
  // [tokenTypes.T_IDENT]:identifier,
  [tokenTypes.T_INT]:IntegerLiteral,
  [tokenTypes.T_STRING]:StringLiteral,
  // [tokenTypes.T_LPT]:group,
  // [tokenTypes.T_LMBR]:array,
  // [tokenTypes.T_ADD]:prefix.bind(null,tokenTypes.T_ADD),
  // [tokenTypes.T_SUB]:prefix.bind(null,tokenTypes.T_SUB),
};
