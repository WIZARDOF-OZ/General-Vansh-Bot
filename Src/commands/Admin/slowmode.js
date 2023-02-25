
/**
 * @INFO
 * Bot Coded by WIZARD OF OZᶫᵒᵛᵉᵧₒᵤ#4090 | https://discord.gg/PqdEhECCZX
 * Please mention me when using this Code!
 * @INFO
 */

const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions, ApplicationCommandOptionType,   PermissionFlagsBits, } = require('discord.js');

module.exports = {
    name:'slowmode',
    description:'activate the slowmode in a particular channel',
    options: [
        {
          name: 'channel',
          description: 'The user to ban.',
          required: true,
          type: ApplicationCommandOptionType.Channel,
        },
        {
          name: 'seconds',
          description: 'The reason for banning.',
          type: ApplicationCommandOptionType.Number,
          required: true,
        },
      ],
      permissionsRequired: [PermissionFlagsBits.Administrator],
      botPermissions: [PermissionFlagsBits.Administrator],
  callback:async(interaction) => {
    const channel = interaction.options.get('channel').value;
    const seconds = interaction.options.get('seconds').value;

    if (!interaction.member.permissions.has(PermissionsBitField.FLAGS.MANAGE_CHANNELS)) {
      return interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
    }

    if (!channel.isText()) {
      return interaction.reply({ content: 'This is not a text channel.', ephemeral: true });
    }

    if (seconds < 0 || seconds > 21600) {
      return interaction.reply({ content: 'The slowmode must be between 0 and 21600 seconds.', ephemeral: true });
    }

    try {
      await channel.setRateLimitPerUser(seconds);
      await interaction.reply({ content: `Set the slowmode for ${channel} to ${seconds} seconds.`, ephemeral: true });
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'There was an error while executing this command.', ephemeral: true });
    }
  }
};
