// @ts-nocheck 
import arraytoGenerator  from "./../src/common/arraytoGenerator";
import Lexer  from "./../src/lexer/Lexer";
import parser from './../src/parser/ast/index'
describe('func + ', () => {
    const lex = new Lexer()
    const it = lex.analyse(
      arraytoGenerator([
        ...`let a = 123
    `,
    ])
  )
  parser(it)
})
