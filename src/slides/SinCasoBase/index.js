import React from 'react';
import Code from '../../lib/RunKitCode';

export default ({ noCode }) => {
  const source = require('!raw-loader!../../code/sin-caso-base.js');
  return (
    <Code title="Factorial: caso base" source={noCode ? '' : `${source}`} />
  );
};
