const Discord = require("discord.js");
const c = require('../config.json');

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username}**, apenas administradores podem utilizar esse comando.`)
  
  var fala = args.slice(0).join(' ');
  if (!fala) return message.reply(`escreva o que quer que eu repita.`)
  
  
  message.channel.send(`${fala}` + `\n\n~ <@${message.author.id}>`)
  message.delete()
  
}
exports.help = {
    name: 'say',
    aliases: ['falar']
}