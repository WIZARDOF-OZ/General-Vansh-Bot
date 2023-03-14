/**
 * @param {import("../../structures/Client.js").G_V_GuildBot} client
 * @param {import("discord.js").Interaction} interaction
 */

export default async (client, interaction) => {
    console.log(interaction)
    /** @type {import("../../structures/Types.js").SlashCommand} */

    const cwd = client.commands.get(interaction.commandName);
    if (cwd) {
        cwd.execute(client, interaction)
    }
}