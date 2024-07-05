const bodyNoScroll = () => {
  addCSS(`body { overflow: hidden; }`);
};

const addAboutButton = () => {
  const aboutNode = `
    <li role="presentation" class="rQ6LXqVlEOGZdGIG0LgP">
        <button class="mWj8N7D_OlsbDgtQx5GW" role="menuitem" tabindex="-1" disabled style="background-color: transparent; opacity: 0.5; color: white;">
            <span dir="auto"
                class="Type__TypeElement-sc-goli3j-0 dsbIME ellipsis-one-line htqz7Vb8mLJvGKTi1vrs"
                data-encore-id="type">Made by Hayden with ❤️</span>
        </button>
    </li>
  `;

  const bindAddAboutInterval = setInterval(() => {
    console.log("Adding about button...");
    const elemnts = getElementsByXPath(
      "//button[@data-testid='user-widget-link']"
    );
    if (elemnts.length === 0) return;

    elemnts[0].addEventListener("click", async () => {
      await sleep(50);
      const open = elemnts[0].getAttribute("data-context-menu-open");
      if (open !== "true") return;

      const menuEl = getElementsByXPath(
        "//div[@data-testid='user-widget-menu']//ul"
      );
      if (menuEl.length === 0) return;

      menuEl[0].innerHTML += aboutNode;
    });

    clearInterval(bindAddAboutInterval);
    console.log("About button add successfully");
  }, 1000);
};

const optimize = () => {
  bodyNoScroll();
  addAboutButton();
};

addEventListener("DOMContentLoaded", () => {
  optimize();
});
