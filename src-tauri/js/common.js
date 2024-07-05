const getElementsByXPath = (xpath, parent) => {
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
};

const addCSS = (css) =>
  (document.head.appendChild(document.createElement("style")).innerHTML = css);

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
