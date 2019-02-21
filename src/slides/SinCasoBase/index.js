import React from 'react';
import Code from '../../lib/RunKitCode';

export default () => {
  const source = require('!raw-loader!../../code/sin-caso-base.js');
  return (
    // <Code title="Factorial: implementación iterativa" source={`${source}`} />
    <Code title="Factorial: caso base" source="" />
  );
};
