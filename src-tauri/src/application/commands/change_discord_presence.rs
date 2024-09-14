#[tauri::command]
fn change_discord_presence(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
