const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '<';

const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('El Argentino Roleador esta en linea');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
    } else if(command === 'invitacion'){
        client.commands.get('invitacion').execute(message, args);
    } else if(command === 'ayuda'){
        client.commands.get('ayuda').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'agree'){
        client.commands.get('agree').execute(message, args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } 
});

client.login('NzY1MjkwMTIwODk5MTk5MDE2.X4Sp9w.AerpHyTcYVUqrHIoHjzoIe75Rog');