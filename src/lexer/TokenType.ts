import { EnumType } from "@/common/enum"

import Enum from "./../common/enum"
const TokenTypes : Record<string, EnumType> = {
  KEYWORD: new Enum("KEYWPRD", 1),
  VARIABLE: new Enum("VARIABLE", 1),
  OPERATOR: new Enum("OPERATOR", 1),
  BRACKET: new Enum("BRACKET", 1),
  INTEGER: new Enum("INTEGER", 1),
  FLOAT: new Enum("FLOAT", 1),
  BOOLEAN: new Enum("BOOLEAN", 1),
  STRING: new Enum("STRING", 1),
  FUNCTION_ARGS: new Enum("FUNCTION_ARGS", 1),
}
export default TokenTypes
