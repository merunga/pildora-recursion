import React from 'react';
import { CodeSurfer } from 'mdx-deck-code-surfer';
import theme from 'prism-react-renderer/themes/duotoneLight';
import ReactMarkdown from 'react-markdown';

const md = str => <ReactMarkdown source={str} />;

export default () => (
  <CodeSurfer
    title="Factorial (explicación)"
    code={require('!raw-loader!../../code/factorial.js')}
    lang="javascript"
    showNumbers={false}
    theme={theme}
    steps={[
      { notes: 'Vamos a seguir paso a paso la ejecución' },
      { lines: [1], notes: () => md('Comenzamos con `n = 5`') },
      { range: [2, 4], notes: () => md('`n = 5`, por lo tanto esto no va a suceder en ningun momento de nuestra ejecución') },
      { lines: [6], notes: () => md('`5 === 1` ? no -> continuamos') },
      { lines: [9], notes: () => md('`factorial(5) = 5 * factorial(4)`') },

      { lines: [1], notes: () => md('volvemos a entrar, con `n = 4`') },
      { lines: [6], notes: () => md('`4 === 1` ? no -> continuamos') },
      { lines: [9], notes: () => md('`factorial(4) = 4 * factorial(3)`') },

      { lines: [1], notes: () => md('volvemos a entrar, con `n = 3`') },
      { lines: [6], notes: () => md('`3 === 1` ? no -> continuamos') },
      { lines: [9], notes: () => md('`factorial(3) = 3 * factorial(2)`') },

      { lines: [1], notes: () => md('volvemos a entrar, con `n = 2`') },
      { lines: [6], notes: () => md('`2 === 1` ? no -> continuamos') },
      { lines: [9], notes: () => md('`factorial(2) = 2 * factorial(1)`') },

      { lines: [1], notes: () => md('volvemos a entrar, con `n = 1`') },
      { lines: [6], notes: () => md('`1 === 1` ? si!') },
      { lines: [7], notes: () => md('Retornamos `1`') },

      { lines: [1], notes: () => md('Volvemos a cuando `n = 2`') },
      { lines: [9], notes: () => md('`n = 2`\n\n`factorial(n-1) = factorial(1) = 1`\n\n`n * factorial(n-1) = 2 * factorial(1) = 2 * 1 = 2`') },
      { lines: [9], notes: () => md('retornamos `2`') },

      { lines: [1], notes: () => md('factorial para `n = 3`') },
      { lines: [9], notes: () => md('`n = 3`\n\n`factorial(n-1) = factorial(2) = 2`\n\n`n * factorial(n-1) = 3 * factorial(2) = 3 * 2 = 6`') },
      { lines: [9], notes: () => md('retornamos 6') },

      { lines: [1], notes: () => md('factorial para `n = 4`') },
      { lines: [9], notes: () => md('`n = 4`\n\n`factorial(n-1) = factorial(3) = 6`\n\n`n * factorial(n-1)) = 4 * factorial(3) = 4 * 6 = 24`') },
      { lines: [9], notes: () => md('retornamos 24') },

      { lines: [1], notes: () => md('factorial para `n = 5`') },
      { lines: [9], notes: () => md('`n = 5`\n\n`factorial(n-1) = factorial(4) = 24`\n\n`n * factorial(n-1) = 5 * factorial(4) = 5 * 24 = 120`') },
      { lines: [9], notes: () => md('retornamos 120') },

      { lines: [10], notes: () => md('FIN! 🎉\n\n`factorial(5) = 120`') },

      // { tokens: { 9: [3, 4, 5] }, notes: 'Note for the third step' },
    ]}
  />
);
