import React from 'react';
import Code from '../../lib/RunKitCode';

export default () => {
  const source = require('!raw-loader!../../code/factorial.js');
  return (
    // <Code title="Factorial: implementación recursiva" source={`${source}\nfactorial(5);`} />
    <Code title="Factorial: implementación recursiva" source="" />
  );
};
