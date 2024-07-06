import { addCSS, getElementsByXPath, sleep } from "./common";
import { openUrl } from "./commands";
import githubLogo from "./assets/github.png";

function bodyNoScroll() {
  addCSS(`body { overflow: hidden; }`);
}

function getMenuNode(
  content: string,
  icon?: string,
  clickable: boolean = false,
  onClick?: (event: MouseEvent) => any,
  index: number = -1
) {
  let dom = document.createElement("li");
  dom.role = "presentation";
  dom.className = "rQ6LXqVlEOGZdGIG0LgP";
  dom.innerHTML = `
        <button role="menuitem" class="mWj8N7D_OlsbDgtQx5GW" ${
          !clickable && "disabled"
        }
         tabindex="${index}" style="${
    clickable
      ? ""
      : "background-color: transparent; opacity: 0.5; color: white;"
  }">
            <span dir="auto"
            class="Type__TypeElement-sc-goli3j-0 dsbIME ellipsis-one-line htqz7Vb8mLJvGKTi1vrs"
            data-encore-id="type">${content}</span>
            ${
              icon
                ? `<img src="${icon}" style="height: 100%; aspect-ratio: 1 / 1;" />`
                : ""
            }
        </button>
    `;
  if (onClick !== undefined)
    dom.querySelector("button")?.addEventListener("click", onClick);
  return dom;
}

function addAboutButton() {
  const bindAddAboutInterval = setInterval(() => {
    console.log("Adding about button...");
    const elemnts = getElementsByXPath(
      "//button[@data-testid='user-widget-link']"
    );
    if (!elemnts || elemnts.length === 0) return;

    const avatarEl = elemnts[0] as HTMLElement;

    avatarEl.addEventListener("click", async () => {
      await sleep(50);
      const open = avatarEl.getAttribute("data-context-menu-open");
      if (open !== "true") return;

      const menuEl = getElementsByXPath(
        "//div[@data-testid='user-widget-menu']//ul"
      );
      if (!menuEl || menuEl.length === 0) return;

      const el = menuEl[0] as HTMLElement;

      const firstChild = el.firstChild;

      let hr = document.createElement("div");
      hr.setAttribute(
        "style",
        "border-top: 1px solid hsla(0, 0%, 100%, .1); margin: 0;"
      );

      el.insertBefore(
        getMenuNode(`${AppName} V${AppVersion}`, githubLogo, true, async () => {
          await openUrl(AppRepositoryUrl);

          // click avatar button to close the menu
          avatarEl.click();
        }),
        firstChild
      );
      el.insertBefore(getMenuNode("Made by Hayden with ❤️"), firstChild);
      el.insertBefore(hr, firstChild);
    });

    clearInterval(bindAddAboutInterval);
    console.log("About button add successfully");
  }, 1000);
}

function optimize() {
  bodyNoScroll();
  addAboutButton();
}

export { optimize };
