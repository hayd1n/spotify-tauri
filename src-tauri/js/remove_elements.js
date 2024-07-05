const removeInstallBtn = () => {
  const removeInstallBtnInterval = setInterval(() => {
    console.log("Removing install button...");
    const elemnts = getElementsByXPath("//a[@href='/download']");
    if (elemnts.length === 0) return;

    elemnts.forEach((el) => el.remove());
    clearInterval(removeInstallBtnInterval);
    console.log("Install button removed successfully");
  }, 1000);
};

const removeFooter = () => {
  addCSS(`nav[data-testid='footer-div'] { display: none !important; }`);
};

const removeOpenInDesktop = () => {
  addCSS(
    `li.rQ6LXqVlEOGZdGIG0LgP:has(button.mWj8N7D_OlsbDgtQx5GW.vvMORUKtQKpQcpQ992bR) { display: none !important; }`
  );
};

const removeEl = () => {
  removeInstallBtn();
  removeFooter();
  removeOpenInDesktop();
};

addEventListener("DOMContentLoaded", () => {
  removeEl();
});

window.navigation.addEventListener("navigate", (event) => {
  removeEl();
});
