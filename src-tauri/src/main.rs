// mod infrastructure;
// mod rpc;

// use discord_presence::Client as DiscordClient;
// use std::sync::{Arc, Mutex};
// use infrastructure::discord::discord_state::DiscordState;
// use rpc::discord;

// fn main() {
//     let discord_state = Arc::new(
//         Mutex::new(DiscordState::new(1284562231555784756))
//     );

//     {
//         let state_clone = Arc::clone(&discord_state);
//         std::thread::spawn(move || {
//             let mut client = DiscordClient::new(1284562231555784756);
//             client.start();
//             state_clone.lock().unwrap().client = Some(client);
//         });
//     }

//     tauri::Builder::default()
//         .manage(discord_state)
//         .invoke_handler(tauri::generate_handler![discord::update_discord_presence])
//         .run(tauri::generate_context!())
//         .expect("error while running tauri application");
// }



mod core;

use core::config::{DataBaseBuilder, DataBase};


fn main() -> () {
    let db: DataBase = DataBaseBuilder::default().build().unwrap();
    println!("{:?}", db);
}
