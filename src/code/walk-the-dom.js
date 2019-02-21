export function walkTheDOM(node, funcToApply) {
  funcToApply(node);
  let n = node.firstChild;
  while (n) {
    walkTheDOM(n, funcToApply);
    n = n.nextSibling;
  }
}

export function reverseTextNodes(elem) {
  // recorremos el dom e invertimos todos los textos
  walkTheDOM(elem, (node) => {
    if (node.nodeType === 3) { // Es texto?
      const text = node.data.trim();
      if (text.length > 0) { // tiene algo que no sea vacio
        // invertimos su contenido
        node.data = text.split('').reverse().join('');
      }
    }
  });
}
