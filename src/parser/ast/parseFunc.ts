import { MyTokenIterator } from "@/common/peekIterator";
import Token from "@/lexer/Token";
import entry from './index'
export default function (it: MyTokenIterator<Token>) {
  it.next() // 吃掉一个func定义关键字
  const nametk = it.next()
  it.next()  // 吃掉一个(
  const funcName = nametk.getVal()
  const ast: any = {
    type: 'func',
    params: [],
    body: [],
    name: funcName
  }
  let curParamsTk, index = 0
  while (curParamsTk = it.next()) { // 解析参数
    if(curParamsTk.getVal() === ')') {
      break;
    }
    if(curParamsTk.getVal() === ',') { // 分隔符需要忽略
      continue;
    }
    ast.params.push({
      name: curParamsTk.getVal(),
      index: index++,
      type: 'var'
    })
  }
  // 解析函数体
  it.next() // 吃掉一个{ 开括号
  ast.body = entry(it, [], 'func')

  return ast
}
