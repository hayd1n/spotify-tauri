import { optimize } from "./optimize";
import { removeEl } from "./remove_elements";

let injected = false;

function main() {
  if (injected) return;

  removeEl();
  optimize();

  injected = true;
}

addEventListener("DOMContentLoaded", main);

main();
