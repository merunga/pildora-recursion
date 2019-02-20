import React from 'react';
import { CodeSurfer } from 'mdx-deck-code-surfer';
import theme from 'prism-react-renderer/themes/duotoneLight';
import ReactMarkdown from 'react-markdown';

const md = str => <ReactMarkdown source={str} />;

export default () => (
  <CodeSurfer
    title="Circulos recursivos (código)"
    code={require('!raw-loader!../../code/circulos-sketch.js')}
    lang="javascript"
    showNumbers={false}
    theme={theme}
    steps={[
      { notes: 'Veamos el código que genera los círculos' },
      { range: [1, 3], notes: 'Creamos el canvas donde vamos a dibujar, con dimensiones 400x400' },
      { range: [5, 8], notes: () => md('Por como funciona `p5.js`, la función `draw` se va a ejecutar para cada ciclo de pintado\n\nVamos a pintar un circulo en el centro del `canvas` con un radio de `200px`') },
      { lines: [11], notes: () => md('El color de nuestro "lapiz" será negro') },
      { lines: [12], notes: () => md('Sin relleno') },
      { lines: [13], notes: () => md('Dibujamos la `ellipsis` con la función que nos brinda `p5.js`') },
      { range: [14, 16], notes: () => md('Aquí nuestro caso base: si el radio del círculo es menor a `2px` no dibujar') },
      { lines: [17], notes: () => md('Y aquí la primera recursión: volvemos a ejecutar la función pero ahora\n\ndibujando el círculo a la derecha del original con un radio igual a la mitad') },
      { lines: [18], notes: () => md('Y aquí la segunda recursión: volvemos a ejecutar la función pero ahora\n\ndibujando el círculo a la izquierda del original con un radio igual a la mitad') },
      { range: [5, 19], notes: 'Y el proceso se repite' },
    ]}
  />
);
