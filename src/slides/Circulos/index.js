import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

export default () => {
  const sketch = require('../../code/circulos').default;
  return (
    <P5Wrapper sketch={sketch} />
  );
};
