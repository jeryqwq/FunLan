import AlphabetHelper from "./../src/lexer/AlphabetHelper"
import arraytoGenerator  from "./../src/common/arraytoGenerator";
import Lexer  from "./../src/lexer/Lexer";


const lex = new Lexer()
const lex2 = new Lexer()

lex.analyse(arraytoGenerator([..."chen+jie^100.12==+100-12 "]))
lex2.analyse(
  arraytoGenerator([
    ...`func add(a,b){
    return a+b
  } 
  //这是注释语句，应该被忽略
  /*
  这是注释语句，应该被忽略
  */
  add(3,6)
`,
  ])
)
console.log(lex, "----------")
console.log(lex2, "----------")
