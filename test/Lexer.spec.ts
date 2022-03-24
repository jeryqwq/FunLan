import AlphabetHelper from "./../src/lexer/AlphabetHelper"
import arraytoGenerator  from "./../src/common/arraytoGenerator";
import Lexer  from "./../src/lexer/Lexer";
import TokenTypes from "../src/lexer/TokenType";


describe("operator + var + number ----", () => {
  test('操作符表达式', () => {
    const lex = new Lexer()
    lex.analyse(arraytoGenerator([...`chen+jie^100.12==+100-12
    `]))
    expect(lex.tokens[0].getVal()).toBe('chen');
    expect(lex.tokens[0].getType()).toBe(TokenTypes.VARIABLE.type);
    expect(lex.tokens[1].getVal()).toBe('+');
    expect(lex.tokens[1].getType()).toBe(TokenTypes.OPERATOR.type);
    expect(lex.tokens[2].getVal()).toBe('jie');
    expect(lex.tokens[2].getType()).toBe(TokenTypes.VARIABLE.type);
    expect(lex.tokens[3].getVal()).toBe('^');
    expect(lex.tokens[3].getType()).toBe(TokenTypes.OPERATOR.type);
    expect(lex.tokens[4].getVal()).toBe('100.12');
    expect(lex.tokens[4].getType()).toBe(TokenTypes.FLOAT.type);
    expect(lex.tokens[5].getVal()).toBe('==');
    expect(lex.tokens[5].getType()).toBe(TokenTypes.OPERATOR.type);
    expect(lex.tokens[6].getVal()).toBe('+');
    expect(lex.tokens[6].getType()).toBe(TokenTypes.OPERATOR.type);
    expect(lex.tokens[7].getVal()).toBe('100');
    expect(lex.tokens[7].getType()).toBe(TokenTypes.INTEGER.type);
    expect(lex.tokens[8].getVal()).toBe('-');
    expect(lex.tokens[8].getType()).toBe(TokenTypes.OPERATOR.type);
    expect(lex.tokens[9].getVal()).toBe('12');
    expect(lex.tokens[9].getType()).toBe(TokenTypes.INTEGER.type);
  });
});
describe('func + ', () => {
  const lex = new Lexer()
  lex.analyse(
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
  expect(lex.tokens[0].getVal()).toBe('func');
  expect(lex.tokens[0].getType()).toBe(TokenTypes.KEYWORD.type);
  expect(lex.tokens[1].getVal()).toBe('add');
  expect(lex.tokens[1].getType()).toBe(TokenTypes.VARIABLE.type);
  expect(lex.tokens[2].getVal()).toBe('(');
  expect(lex.tokens[2].getType()).toBe(TokenTypes.BRACKET.type);
  expect(lex.tokens[3].getVal()).toBe('a');
  expect(lex.tokens[3].getType()).toBe(TokenTypes.VARIABLE.type);
  expect(lex.tokens[4].getVal()).toBe(',');
  expect(lex.tokens[4].getType()).toBe(TokenTypes.OPERATOR.type);
  expect(lex.tokens[5].getVal()).toBe('b');
  expect(lex.tokens[5].getType()).toBe(TokenTypes.VARIABLE.type);
  expect(lex.tokens[6].getVal()).toBe(')');
  expect(lex.tokens[6].getType()).toBe(TokenTypes.BRACKET.type);
  expect(lex.tokens[7].getVal()).toBe('{');
  expect(lex.tokens[7].getType()).toBe(TokenTypes.BRACKET.type);
  expect(lex.tokens[8].getVal()).toBe('return');
  expect(lex.tokens[8].getType()).toBe(TokenTypes.KEYWORD.type);
  expect(lex.tokens[9].getVal()).toBe('a');
  expect(lex.tokens[9].getType()).toBe(TokenTypes.VARIABLE.type);
  expect(lex.tokens[10].getVal()).toBe('+');
  expect(lex.tokens[10].getType()).toBe(TokenTypes.OPERATOR.type);
  expect(lex.tokens[11].getVal()).toBe('b');
  expect(lex.tokens[11].getType()).toBe(TokenTypes.VARIABLE.type);
  expect(lex.tokens[12].getVal()).toBe('}');
  expect(lex.tokens[12].getType()).toBe(TokenTypes.BRACKET.type);
})

