import { MyTokenIterator } from "@/common/peekIterator";
import Token from "@/lexer/Token";
import express from './express'
export default function (it: MyTokenIterator<Token>){
  it.next() // 吃掉一个 return
  return {
    type: 'return',
    expression: express(it)
  }
}
