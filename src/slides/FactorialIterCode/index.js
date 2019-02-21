import React from 'react';
import Code from '../../lib/RunKitCode';

export default () => {
  const source = require('!raw-loader!../../code/factorial-iter.js');
  return (
    // <Code title="Factorial: implementación iterativa" source={`${source}\nfactorial(5);`} />
    <Code title="Factorial: implementación iterativa" source="" />
  );
};
