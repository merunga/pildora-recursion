import React from 'react';
import { CodeSurfer } from 'mdx-deck-code-surfer';
import theme from 'prism-react-renderer/themes/duotoneLight';
import ReactMarkdown from 'react-markdown';

const md = str => <ReactMarkdown source={str} />;

export default () => (
  <CodeSurfer
    title="Circulos recursivos (código)"
    code={require('!raw-loader!../../code/circulos-sketch2.js')}
    lang="javascript"
    showNumbers={false}
    theme={theme}
    steps={[
      { range: [10, 22], notes: 'Podemos hacer el dibujo un poco más interesante' },
      { range: [20, 21], notes: 'Dibujanto otros 2 círculos, uno arriba y otro abajo' },
      { range: [14, 16], notes: () => md('Y modificando nuestro caso base, ahora cortando el pintado cuando el radio es mejor a `8px`,\n\nasí nuestra compu no sufre') },
      { notes: 'Veamos cómo queda' },
    ]}
  />
);
