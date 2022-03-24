import { EnumType } from "@/common/enum"

import _Enum from "./../common/enum"
const TokenTypes : Record<string, EnumType> = {
  KEYWORD: new _Enum("KEYWPRD", 1),
  VARIABLE: new _Enum("VARIABLE", 1),
  OPERATOR: new _Enum("OPERATOR", 1),
  BRACKET: new _Enum("BRACKET", 1),
  INTEGER: new _Enum("INTEGER", 1),
  FLOAT: new _Enum("FLOAT", 1),
  BOOLEAN: new _Enum("BOOLEAN", 1),
  STRING: new _Enum("STRING", 1),
  FUNCTION_ARGS: new _Enum("FUNCTION_ARGS", 1),
}
export default TokenTypes
