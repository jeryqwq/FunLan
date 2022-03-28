// @ts-nocheck 
import AlphabetHelper from "./../src/lexer/AlphabetHelper"

describe("基本类型-------", () => {
  test('数字', () => {
    expect(AlphabetHelper.isNumber("1")).toBe(true);
    expect(AlphabetHelper.isNumber("9")).toBe(true);

  });
  test('大小写字母', () =>{
    expect(AlphabetHelper.isLetter("a")).toBe(true);
    expect(AlphabetHelper.isLetter("C")).toBe(true);

  })
  test('字母或者下划线  变量', () =>{
    expect(AlphabetHelper.isLiteral("_")).toBe(true);
  })
  test('操作符', () =>{
    expect(AlphabetHelper.isOperator("/")).toBe(true);
    expect(AlphabetHelper.isOperator("+")).toBe(true);
    expect(AlphabetHelper.isOperator("-")).toBe(true);
    expect(AlphabetHelper.isOperator(",")).toBe(true);

  })
});


