import { MyTokenIterator } from "@/common/peekIterator";
import AlphabetHelper from "./../../lexer/AlphabetHelper";
import Token from "@/lexer/Token";
import expression from "./express";

// AST DEMO
// let tips = 123
// {
//   "type": "VariableDeclaration",
//   "start": 179,
//   "end": 193,
//   "declarations": [
//     {
//       "type": "VariableDeclarator",
//       "start": 183,
//       "end": 193,
//       "id": {
//         "type": "Identifier",
//         "start": 183,
//         "end": 187,
//         "name": "tips"
//       },
//       "init": {
//         "type": "Literal",
//         "start": 190,
//         "end": 193,
//         "value": 123,
//         "raw": "123"
//       }
//     }
//   ],
//   "kind": "let"
// },
export default function (it: MyTokenIterator<Token>) {
  const kind = it.next()
  const varName = it.next().getVal()
  const opTk = it.next()
  if(opTk.getVal() !== '=') {
    throw new Error(`syntx error in ${opTk.getVal()} at ${opTk.line}, it should be =`)
  }
  let astObj: any = {
    type: "VariableDeclaration",
    expression: {
      left:null,
      mid:null,
      op:kind,
      option:null,
      right:null,
      value: varName,
      init: {}
    }
  }
  astObj.expression.init = expression(it, astObj)
  return astObj
// let tips = 123
// let tipsStr = "123"
// let tipsFnExec = test()
// let tipsExpression = 1 + 2 + 3 
// let tipsExpressionAndFn = 1 + (4 * 3) + test()

}

