
/**
 * @INFO
 * Bot Coded by WIZARD OF OZᶫᵒᵛᵉᵧₒᵤ#4090 | https://discord.gg/PqdEhECCZX
 * Please mention me when using this Code!
 * @INFO
 */



require('dotenv').config();
const { EmbedBuilder, ActivityType, ApplicationCommand, Client, IntentsBitField, Collection } = require('discord.js')
const colours = require('colours');
const configjs = require('../config')
const { prefix }= require('../config')
const fs = require('fs');
const eventHandler = require('./Handlers/eventHandler')
const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ],
  });
  
  
  
eventHandler(client)
  client.commands = new Collection();

// Handle incoming messages
client.on('messageCreate', async message => {
    // Ignore messages from bots and messages that don't start with the prefix
    if (message.author.bot || !message.content.startsWith(prefix)) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
  
    // If the command doesn't exist, do nothing
    if (!command) return;
  
    try {
      await command.execute(message, args);
    } catch (error) {
      console.error(error);
      await message.reply('There was an error while executing this command!');
    }

});

client.on('messageCreate', (message) => {
  if(message.content ==='ping'){
    message.reply('Pong!')
  }
})

client.on('messageCreate' , (message) =>{
  if(message.content ==='Hi'){
    message.channel.send('Hey, There something coming in the general vansh server')
  }

})


/**
 * @INFO
 * Bot Coded by WIZARD OF OZᶫᵒᵛᵉᵧₒᵤ#4090 | https://discord.gg/PqdEhECCZX
 * Please mention me when using this Code!
 * @INFO
 */


client.login(configjs.token)