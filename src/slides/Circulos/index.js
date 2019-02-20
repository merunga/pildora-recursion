import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import MD from 'react-markdown';

export default () => {
  const sketch = require('../../code/circulos').default;
  return (
    <>
      <MD source="## Ejemplo 2: Círculos" />
      <P5Wrapper sketch={sketch} />
    </>
  );
};
