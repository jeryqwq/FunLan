import TokenTypes from "@/lexer/TokenType"
import { SymbolTable } from "./SymbolTable"

export default function (ast: any, vm = {log: console.log.bind(window)}) {
  const parentThis = new SymbolTable(ast, vm)
  for(let i = 0; i < ast.length; i++) {
    const item = ast[i]
    execCommand(item, parentThis)
  }
}
export const execCommand = function (ast: any, parent: SymbolTable) {
  switch (ast.type) {
    case 'assign':
      {
        const name = ast.right.name
        const init = ast.left.init
        parent.set(name, comptedExpression(init, parent))
      }
      break;
    case 'func':
      parent.set(ast.name, ast) // 当前作用域添加函数引用
      break;
    case 'call': 
        const { name, args } = ast
        const fn = parent.getVar(name)

        if(typeof fn === 'function') { // vm原生的函数
          let curParams: any[] = []
          args.forEach((item: any, idx: number) => {
            const value = item.token.getVal()
            curParams.push(parent.getVar(value))
          })

          fn(...curParams)
        }else {
          const { body, params } = fn
          const curThis = new SymbolTable(ast, {}) // 重新开一个函数作用域
          curThis.setParent(parent)
          if(args.length) { // 函数传参数赋值
            args.forEach((item: any, idx: number) => {
              const name = params[idx].name
              const value = item.token.getVal()
              const type = item.token.getType()
              curThis.set(name, TokenTypes.INTEGER.type === type ? Number(value) : value)
            })
          }
          body.forEach((item: any, idx: number) =>{
            execCommand(item, curThis)
          })
          // console.log(curThis, '-----')
        }
        
      break;
  }
}
export const getValue = function (ast: any, curThis: SymbolTable): any {
  if(!ast) return undefined;
  switch(ast.type) {
    case "var":

      return curThis.getVar(ast.name);
    case 'int':
      return Number(ast.value)
  }
  return undefined;
}
export const comptedExpression = function (ast: any, curThis: SymbolTable) {
    const { op, right,  } = ast;
    const { left, right: rg }  = right
    if(op === '/') {
      return getValue(right, curThis) / getValue(left, curThis)
    }else if(op === '+') {
      return getValue(right, curThis) + getValue(left || rg, curThis)
    }else if(op === '-') {
      return getValue(right, curThis) - getValue(left, curThis)
    }else if(op === '*') {
      return getValue(right, curThis) * getValue(left, curThis)
    }
    // function deep (ast:any, prefix: string = '') {
    //   const lf = ast.left, rg = ast.right;
    //   if(lf) {
    //     console.log(prefix + 'lf', lf.value, lf.op)
    //     deep(lf, prefix + ' ')
    //   }
    //   if(rg){
    //     deep(rg, prefix + ' ')
    //     console.log(prefix + 'rg', rg.value, rg.op)
    //   }
    // }
    return deep(ast)
}
