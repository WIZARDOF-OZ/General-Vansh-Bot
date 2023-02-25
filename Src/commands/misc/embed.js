
/**
 * @INFO
 * Bot Coded by WIZARD OF OZᶫᵒᵛᵉᵧₒᵤ#4090 | https://discord.gg/PqdEhECCZX
 * Please mention me when using this Code!
 * @INFO
 */

const { EmbedBuilder } = require('discord.js')
module.exports = {
    name: 'embed',
    description: 'Pong!',
    // devOnly: Boolean,
    testOnly: true,
    // options: Object[],
    // deleted: Boolean,
  
    callback: (client, interaction) => {
      const my = new EmbedBuilder()
      .setColor('Random')
      .setDescription('embed!')
      .setFooter(`hi`)
      interaction.reply({ embeds: [my] })
    },
}