import { invoke } from "@tauri-apps/api/tauri";

async function openUrl(url: string) {
  return await invoke<void>("open_url", { url });
}

export { openUrl };
