import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default () => {
  const codeString = require('!raw-loader!../../code/walk-the-dom.js');
  return <SyntaxHighlighter language="javascript" style={duotoneLight}>{codeString}</SyntaxHighlighter>;
};
