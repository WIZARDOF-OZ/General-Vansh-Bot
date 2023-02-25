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