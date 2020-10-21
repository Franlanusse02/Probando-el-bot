module.exports = {
    name: 'unmute',
    description: 'Desmutea un miembro',
    execute(message, args){
        let muteMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let mainRole = '765333960821571635'
        let muteRole = '765388234577936384'
        let modRole = '765334017011613717'
        if (!args[0]){
            message.channel.send('Nadie fue seleccionado para desmutear.');
        } else if(!message.member.roles.cache.has(modRole)){
            message.channel.send('No tenes permiso para usar este comando.');
        } else if(!muteMember) {
            message.channel.send('Esa persona no esta en el server.');
        } else if(message.member.roles.cache.has(modRole) || muteMember.roles.cache.has(muteRole)){
            muteMember.roles.add(mainRole);
            muteMember.roles.remove(muteRole);  
            message.channel.send(`@${muteMember.user.tag} fue desmuteado.`);
        } else if(message.member.roles.cache.has(modRole) || !muteMember.roles.cache.has(muteRole)){
            message.channel.send('La persona no esta muteada');
         
        } else {
            
        }
        
    }
}