
/**
 * @INFO
 * Bot Coded by WIZARD OF OZᶫᵒᵛᵉᵧₒᵤ#4090 | https://discord.gg/PqdEhECCZX
 * Please mention me when using this Code!
 * @INFO
 */

module.exports = async (client, guildId) => {
    let applicationCommands;
  
    if (guildId) {
      const guild = await client.guilds.fetch(guildId);
      applicationCommands = guild.commands;
    } else {
      applicationCommands = await client.application.commands;
    }
  
    await applicationCommands.fetch();
    return applicationCommands;
  };