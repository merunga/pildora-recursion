import React from 'react';
import Code from '../../lib/RunKitCode';

export default ({ noCode }) => {
  const source = require('!raw-loader!../../code/factorial.js');
  return (
    <Code title="Factorial: implementación recursiva" source={noCode ? '' : `${source}\nfactorial(5);`} />
  );
};
