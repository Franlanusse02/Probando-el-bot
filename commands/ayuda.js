module.exports = {
    name: 'ayuda',
    description: 'Lista de comandos',
    execute(message, args){
        message.channel.send('Los comandos dispoibles por el momento son: 1)ping, un easter egg 2)invitacion, te da un link para el server.');
    }
}