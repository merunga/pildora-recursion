import React from 'react';
import Code from '../../lib/RunKitCode';

export default ({ noCode }) => {
  const source = require('!raw-loader!../../code/factorial-iter.js');
  return (
    <Code title="Factorial: implementación iterativa" source={noCode ? '' : `${source}\nfactorial(5);`} />
  );
};
