import React from 'react';
import Code from '../../lib/RunKitCode';

export default ({ noCode }) => {
  const source = require('!raw-loader!../../code/walk-the-dom.js');
  return (
    <Code title="Recorrer el DOM" source={noCode ? '' : `${source}`} />
  );
};
