import AlphabetHelper from "./../src/lexer/AlphabetHelper"

describe("Alphabet ----", () => {
  test('数字', () => {
    expect(AlphabetHelper.isNumber("1")).toBe(true);
  });
  test('大小写字母', () =>{
    expect(AlphabetHelper.isLetter("a")).toBe(true);
  })
  test('字母活着下划线  变量', () =>{
    expect(AlphabetHelper.isLiteral("_")).toBe(true);
  })
  test('操作符', () =>{
    expect(AlphabetHelper.isOperator("/")).toBe(true);
    expect(AlphabetHelper.isOperator("+")).toBe(true);
    expect(AlphabetHelper.isOperator("-")).toBe(true);
  })
});


