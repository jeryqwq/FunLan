import React, { useCallback } from 'react';
import arraytoGenerator  from "@/common/arraytoGenerator";
import Lexer  from "@/lexer/Lexer";
import parser from '@/parser/ast/index'
import PeekIterator from '@/common/peekIterator'
import { useEffect } from 'react';
import Token from '@/lexer/Token';
import exec from '@/exec'

function CodeEditor() {
  const handleKeyDown = useCallback((e:React.KeyboardEvent<HTMLDivElement>) => {
    const { anchorNode = {} } = document.getSelection() || {}
    const el = document.createElement('span')
    el.style.color='red'
    el.textContent = 'TEST'
    anchorNode?.parentNode.appendChild(el)
  }, [])
  useEffect(() => {
        const lex = new Lexer()
        const tks = lex.analyse(
          arraytoGenerator([
            ...` let a = !2; 
        `,
        ])
      )
      console.log(tks)
      const it = new PeekIterator<Token>(arraytoGenerator(tks), '\n')
      const program = parser(it)
      exec(program)
  })
  return (
    <div contentEditable="true" onKeyDown={handleKeyDown} style={{height: '80vh'}}>
      CodeEditor
    </div>
  );
}

export default CodeEditor;
