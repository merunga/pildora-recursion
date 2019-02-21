import React from 'react';

export default () => {
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          font-family: "Roboto Condensed",system-ui,sans-serif;
        }
        div#dom-example-root {
          margin: auto;
          width: 300px;
          background-color: white;
        }
        div#dom-example-root div {
          margin-left: 5px;
          padding: 5px;
          border: 1px solid black;
        }
      </style>
      <script>
        function walkTheDOM(node, funcToApply) {
          setTimeout(() => {
            funcToApply(node);
            let n = node.firstChild;
            while (n) {
              walkTheDOM(n, funcToApply);
              n = n.nextSibling;
            }
          }, 500);
        }
        
        function reverseTextNodes(elem) {
          console.log(elem)
          // recorremos el dom e invertimos todos los textos
          walkTheDOM(elem, (node) => {
            if (node.nodeType === 3) { // Es texto?
              const text = node.data.trim();
              if (text.length > 0) { // tiene algo que no sea vacio
                // invertimos su contenido
                node.data = text.split('').reverse().join('');
                node.parentNode.style.backgroundColor = '#EECE59';
                setTimeout(() => {
                  node.parentNode.style.backgroundColor = 'white';
                }, 300);
              }
            }
          });
        }

        function reverse() {
          reverseTextNodes(document.getElementById('dom-example-root'))
        }
      </script>
    </head>
    <body>
      <div id="dom-example-root">
        <div>
          <div>
            <div>
              uno
            </div>          
          </div>
          <div>
            dos
          </div>
        </div>
        <div>
          <div>
            <div>
              tres
            </div>
            <div>
              <div>
                <div>
                  <div>
                    cuatro
                  </div>
                </div>
                <div>
                  cinco
                </div>
              </div>
            </div>
          </div>
          <div>
            seis
          </div>
        </div>
        <div>
          siete
        </div>
      </div>
      <div style="text-align: center; margin-top: 20px">
        <button type="button" onclick="reverse()" style="margin: auto">Visitar nodos e invertir textos (reverseTextNodes)</button>
      </div>
    </body>
  </html>
`;
  return (
    <iframe
      title="walk the dom"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      srcDoc={html}
      width="350"
      height="380"
      frameBorder="0"
      scrolling="no"
    />
  );
};
