const ptnLetter: RegExp = /^[a-zA-Z]$/
const ptnNumber: RegExp = /^[0-9]$/
const ptnLiteral: RegExp = /^[_a-zA-Z0-9]$/
const ptnOperator: RegExp = /^[+-\\*/><=!&|^%]$/
class AlphabetHelper {

  static isLetter(s: string) {
    return ptnLetter.test(s)
  }
  static isNumber(s: string) {
    return ptnNumber.test(s)
  }
  static isLiteral(s: string) {
    return ptnLiteral.test(s)
  }
  static isOperator(s: string) {
    return new RegExp(ptnOperator).test(s)
  }
}

export default AlphabetHelper
