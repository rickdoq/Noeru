const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let totalSeconds = (client.uptime / 1000); let days = Math.floor(totalSeconds / 86400); totalSeconds %= 86400; let hours = Math.floor(totalSeconds / 3600); totalSeconds %= 3600; let minutes = Math.floor(totalSeconds / 60); let seconds = Math.floor(totalSeconds % 60);
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Uptime!")
    .setDescription(`Hey, eu estou online já faz:\n\n\`${days}\` dias, \`${hours}\` horas, \`${minutes}\` minutos e \`${seconds}\` segundos.`)
    .setColor("DARK");
    
    message.channel.send(embed)

}

exports.help = {
    name: 'uptime',
    aliases: ['ontime']
}