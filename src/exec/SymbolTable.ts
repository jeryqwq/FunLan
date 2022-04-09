export class SymbolTable  {
  program: any;
  vars: Record<string, any>;
  parent?: SymbolTable
  constructor(program: any, vm = {}){
    this.program = program;
    this.vars = {...vm}
  }
  setParent (_: SymbolTable) {
    this.parent = _
  }
  set (name: string, value: any) {
    this.vars[name] = value
  }
  getVar (key: string) {
    if(this.vars[key]) return this.vars[key];
    let curP = this.parent 
    while(curP) {  // 作用域查找机制
      if(curP.vars[key]) {
        return curP.vars[key];
      }
      curP = curP.parent
    }
  }
}
