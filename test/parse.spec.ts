// @ts-nocheck 
import arraytoGenerator  from "./../src/common/arraytoGenerator";
import Lexer  from "./../src/lexer/Lexer";
import parser from './../src/parser/ast/index'
import PeekIterator from './../src/common/peekIterator'
// describe('func + ', () => {
//     const lex = new Lexer()
//     const tks = lex.analyse(
//       arraytoGenerator([
//         ...`let a = 123;
//     `,
//     ])
//   )
//   const it = new PeekIterator(arraytoGenerator(...tks))
//   // parser(it)
// })
