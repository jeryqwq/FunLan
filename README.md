# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
## TODO Started
### 主要逻辑大概流程
1. 词法分析
   * 对语言所有内容进行分析判断对应类型，关键字 ｜ 数字 ｜ 字符串 ｜ 变量名
2. 语法分析
  * 表达式处理
  * 函数
    * 参数
    * return
  * if
    * if内嵌表达式
    * if内return
  * 适配其他数据类型
    * 数组
    * 对象
3. 编辑器
  * 高亮语法
  * 语法提示
  * 错误提示
4. 代码执行
  * 表达式（!2-1+1*3/2-(5-3*2)）
    * 前序 !2| -4  
    * 中序 3-2+(5+2)*2
  * 函数执行
    * 闭包
    * 递归
    * 符号表 需提前
    * 普通函数
   