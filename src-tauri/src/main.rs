// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;
use webbrowser::{open_browser, Browser};

const REPOSITORY_URL: &'static str = env!("CARGO_PKG_REPOSITORY");

#[tauri::command]
fn open_url(url: &str) {
    if open_browser(Browser::Default, &url).is_err() {
        println!("open url {} failed", &url)
    }
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let _main_window = app.app_handle().get_window("main").unwrap();

            // open devtools if is debug build
            #[cfg(debug_assertions)]
            _main_window.open_devtools();

            Ok(())
        })
        .on_page_load(|window, _payload| {
            if window.label() == "main" && window.url().host_str() == Some("open.spotify.com") {
                // inject js
                window
                    .eval(
                        format!(
                            "var AppName = '{}'; var AppVersion = '{}'; var AppRepositoryUrl = '{}';",
                            window.app_handle().package_info().package_name(),
                            window.app_handle().package_info().version.to_string(),
                            REPOSITORY_URL
                        )
                        .as_str(),
                    )
                    .unwrap();
                window.eval(include_str!("../../dist/bundle.js")).unwrap();
            }
        })
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .invoke_handler(tauri::generate_handler![open_url])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
