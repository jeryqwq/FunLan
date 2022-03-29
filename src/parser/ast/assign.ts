import { MyTokenIterator } from "@/common/peekIterator";
import AlphabetHelper from "./../../lexer/AlphabetHelper";
import Token from "@/lexer/Token";

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
  const varName = it.next().getVal()
  const opTk = it.next()
  const isOp = AlphabetHelper.isOperator(opTk.getVal())
  if(!isOp) {
    throw new Error(`syntx error in ${opTk.getVal()} at ${opTk.line}`)
  }
  let astObj = {
    type: 'VariableDeclaration',
    kind: 'let',
    // token: 
    // declarations: [
    //   name: varName,
    //   value: 
    // ]
  }

  return 
}

