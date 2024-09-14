use discord_presence::Client as DiscordClient;

pub struct DiscordState {
    pub client: Option<DiscordClient>,
}

impl DiscordState {
    pub fn new(client_id: u64) -> Self {
        let client = DiscordClient::new(client_id);
        DiscordState {
            client: Some(client),
        }
    }
}
