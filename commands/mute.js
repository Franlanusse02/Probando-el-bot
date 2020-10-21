module.exports = {
    name: 'mute',
    description: 'Mutea un miembro',
    execute(message, args){
        if(!message.member.permisions.has('KICK_MEMBERS') || !message.member.permisions.has('BAN_MEMBERS')){
            console.log('Oh oh')
            message.channel.send('No tenes permiso para usar este comando.');
            
        } else {
            let muteMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!muteMember) {
                message.channel.send('Esa persona no esta en el server.');
            }
            else {
                let mainRole = '765333960821571635'
                let muteRole = '765388234577936384'
                
                
                
                muteMember.roles.remove(mainRole);
                muteMember.roles.add(muteRole);

                message.channel.send(`@${muteMember.user.tag} fue muteado.`);
                
            }
        
        }
    }
}
