const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.ping') {
        message.reply('pong');
    }
});

client.on("guildMemberAdd", user => {
        message.author.sendMessage("Hello, I'm just testing!");  
});

client.login(process.env.BOT_TOKEN);
