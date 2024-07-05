// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let main_window = app.handle().get_window("main").unwrap();

            // include common.js
            main_window.eval(include_str!("../js/common.js")).unwrap();

            // include remove_elements.js
            main_window
                .eval(include_str!("../js/remove_elements.js"))
                .unwrap();

            // include optimize.js
            main_window.eval(include_str!("../js/optimize.js")).unwrap();

            Ok(())
        })
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
