import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default () => {
  const codeString = `
    <div id="root">
      <div>
        <div>
          <div>uno</div>          
        </div>
        <div>dos</div>
      </div>
      <div>
        <div>
          <div>tres</div>
          <div>
            <div>
              <div>
                <div>cuatro</div>
              </div>
              <div>cinco</div>
            </div>
          </div>
        </div>
        <div>seis</div>
      </div>
      <div>siete</div>
    </div>
  `;
  return (
    <SyntaxHighlighter language="markup" style={duotoneLight}>{codeString}</SyntaxHighlighter>
  );
};
