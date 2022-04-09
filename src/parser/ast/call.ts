import { MyTokenIterator } from "@/common/peekIterator";
import Token from "@/lexer/Token";
export default function (it: MyTokenIterator<Token>){
  const funcNameTk = it.next()
  let args = []
  it.next() // 吃掉一个(
    let curTk, index=  0
    while (curTk = it.next()) {
      if(curTk.getVal() === ',') {
        continue
      }
      if(curTk.getVal() === ')') {
        break
      }
      args.push({
        value: curTk.getVal(),
        index: index++,
        token: curTk,
      })
    }
  return {
    type: 'call',
    name: funcNameTk.getVal(),
    args
  }
}
