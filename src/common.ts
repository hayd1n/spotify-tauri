function getElementsByXPath(xpath: string, parent?: Node) {
  let results = [];
  let query = document.evaluate(
    xpath,
    parent || document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );
  for (let i = 0, length = query.snapshotLength; i < length; ++i) {
    results.push(query.snapshotItem(i));
  }
  return results;
}

function addCSS(css: string) {
  document.head.appendChild(document.createElement("style")).innerHTML = css;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { getElementsByXPath, addCSS, sleep };
