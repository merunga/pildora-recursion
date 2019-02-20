import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import MD from 'react-markdown';

export default ({
  titulo = '## Ejemplo 2: Círculos recursivos',
  code = 1,
  link = false,
}) => {
  const sketches = [
    require('../../code/circulos-nointeraction').default,
    require('../../code/circulos').default,
    require('../../code/circulos2').default,
  ];
  return (
    <>
      <MD source={titulo} />
      <P5Wrapper sketch={sketches[code]} />
      {link && (
        <small>
          <a
            href="https://editor.p5js.org/merunga/sketches/KZx9s5YER"
            target="_blank"
            rel="noopener noreferrer"
          >
            Puedes jugar con el codigo aquí
          </a>
        </small>
      )}
    </>
  );
};
