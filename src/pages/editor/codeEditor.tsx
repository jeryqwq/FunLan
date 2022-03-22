import React, { useCallback } from 'react';

function CodeEditor() {
  const handleKeyDown = useCallback((e:React.KeyboardEvent<HTMLDivElement>) => {
    const { anchorNode } = document.getSelection()
    const el = document.createElement('span')
    el.style.color='red'
    el.textContent = 'TEST'
    anchorNode?.parentNode.appendChild(el)
  }, [])
  return (
    <div contentEditable="true" onKeyDown={handleKeyDown} style={{height: '80vh'}}>
      CodeEditor
    </div>
  );
}

export default CodeEditor;
