import { createMutation } from "@farfetched/core";
import { invoke } from "@tauri-apps/api";

export interface DiscordPresenceDTO {
    text: string
    details: string
}

export const discordPresenceMutation = createMutation({
    handler: (params: DiscordPresenceDTO) => invoke('update_discord_presence', {
      stateText: params.text,
      details: params.details  
    })
})