module.exports = {
    name: 'agree',
    description: 'Da el rol de miembro a quien envia el mensaje',
    execute(message, args){
        if(!message.member.roles.cache.has('765333960821571635')){
            message.member.roles.add('765333960821571635').catch(console.error);
        } else {
            message.channel.send('Ya tenes entraste al server bro.');
        }
    }
}