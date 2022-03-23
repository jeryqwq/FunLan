class Enum {
  type: string;
  val: any;
  constructor(type: string, value: any) {
    this.type = type
    this.val = value
  }
}
export default Enum
export type EnumType = {
  type: string;
  val: any;
}