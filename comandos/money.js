const db = require('quick.db');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let member = message.mentions.users.first() || message.author;
  
    var reais = await db.get(`reais_${member.id}`)
    if (reais === null) reais = 0;
  
    let embed = new Discord.MessageEmbed()

    .addField(`<:yens:832444247847731221> **Saldo atual**`, `**¥ ${reais}**`)
    .setColor('#303136')
    .setFooter(`Usuário: ${member.username}`)

    message.channel.send(embed)
}

exports.help = {
    name: 'money',
    aliases: ['dinheiro', 'yen', 'saldo']
}