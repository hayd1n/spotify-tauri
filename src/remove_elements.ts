import { addCSS, getElementsByXPath } from "./common";

function removeInstallBtn() {
  const removeInstallBtnInterval = setInterval(() => {
    console.log("Removing install button...");
    const elemnts = getElementsByXPath("//a[@href='/download']");
    if (elemnts.length === 0) return;
    elemnts.forEach((el) => (el as HTMLElement).remove());
    clearInterval(removeInstallBtnInterval);
    console.log("Install button removed successfully");
  }, 1000);
}

function removeFooter() {
  addCSS(`nav[data-testid='footer-div'] { display: none !important; }`);
}

function removeOpenInDesktop() {
  addCSS(
    `li.rQ6LXqVlEOGZdGIG0LgP:has(button.mWj8N7D_OlsbDgtQx5GW.vvMORUKtQKpQcpQ992bR) { display: none !important; }`
  );
}

function removeCookieBanner() {
  addCSS(`div#onetrust-banner-sdk { display: none !important; }`);
}

function removeEl() {
  removeInstallBtn();
  removeFooter();
  removeOpenInDesktop();
  removeCookieBanner();
}

export { removeEl };
