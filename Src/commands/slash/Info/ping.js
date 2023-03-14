import { SlashCommandBuilder } from "discord.js";

/** @type {import("../../../structures/Types.js").SlashCommand} */
export default {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Get my latency")
        .toJSON(),
    execute: async (client, interaction) => {
        interaction.reply({
            content: `PONG! ${client.ws.ping}`,
            ephemeral: false,
        })
        return;
    }
}