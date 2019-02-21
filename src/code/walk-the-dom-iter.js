function walkTheDOMIter(root, funcToApply) {
  let node = root;

  start: while (node) {
    funcToApply(node);

    if (node.firstChild) {
      node = node.firstChild;
      continue start;
    }

    while (node) {
      if (node === root) {
        break start;
      }

      if (node.nextSibling) {
        node = node.nextSibling;
        continue start;
      }

      node = node.parentNode;
    }
  }
}
