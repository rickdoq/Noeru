const Discord = require('discord.js');
const superagent = require('superagent');
const c = require('../config.json');

exports.run = async (client, message, args) => {

    if (!message.mentions.users.first()) return message.channel.send(`Hey **${message.author.username}**, você precisa mencionar um membro.`);
    if (message.mentions.users.first().id === "653691138229927936") return message.reply('por que deseja me bater? O que eu te fiz?!');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#303136")
    .setDescription(`**${message.author.username}** deu um tapa em **${message.mentions.users.first().username}**! :raised_hand:`)
    .setImage(body.url) 
    message.channel.send({embed})
}
exports.help = {
    name: 'slap',
    aliases: ['tapa']
}   