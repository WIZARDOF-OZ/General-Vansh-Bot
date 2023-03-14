import { config } from 'dotenv';
import { G_V_GuildBot } from './structures/Client.js'
config();

const client = new G_V_GuildBot()

client.on("finishedLoadingBot", () => {
    console.log("Bot is Finished Loading and now LOGS in to Discord")
})