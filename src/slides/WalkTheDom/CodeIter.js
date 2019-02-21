import React from 'react';
import Code from '../../lib/RunKitCode';

export default () => {
  const source = require('!raw-loader!../../code/walk-the-dom-iter.js');
  return (
    <Code title="Recorrer el DOM iterativamente" source={`${source}`} />
  );
};
