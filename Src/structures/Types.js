/**
 * @typedef { object } SlashCommand
 * @property {import("discord.js").SlashCommandBuilder} data
 *  @property {(client: import("./Client.js").G_V_GuildBot, interaction: import("discord.js").Interaction) => {}} execute
 */

/**
 * @typedef {object} ContextCommandUser
 * @property {import("discord.js").ContextMenuCommandBuilder} data
 * @property {(client: import("./Client.js").G_V_GuildBot, interaction: import("discord.js").UserContextMenuCommandInteraction) => {}} execute
 */

/**
 * @typedef {object} ContextCommandMessage
 * @property {import("discord.js").ContextMenuCommandBuilder} data
 * @property {(client: import("./Client.js").G_V_GuildBot, interaction: import("discord.js").MessageContextMenuCommandInteraction) => {}} execute
 */

export default {}