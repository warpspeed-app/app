
use tokio::task;
use std::sync::{Mutex, Arc};
use tauri::State;

use crate::infrastructure::discord::discord_state::DiscordState;

#[tauri::command]
pub async fn update_discord_presence(
    state: State<'_, Arc<Mutex<DiscordState>>>,
    details: String,
    state_text: String,
) -> Result<(), String> {
    let state_clone = state.inner().clone();

    task::spawn_blocking(move || {
        let mut discord_state = state_clone.lock().unwrap();
        if let Some(client) = &mut discord_state.client {
            let _ = client.set_activity(|activity| {
                activity
                    .state(state_text)
                    .details(details)
                    .append_buttons(|button| {
                        button.label("Download").url("https://warpspeed.app")
                    })
            });
        }
    })
    .await
    .map_err(|e| format!("Failed to update Discord Presence: {:?}", e))?;
    
    Ok(())
}