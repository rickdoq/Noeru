const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    var number = Math.floor(Math.random() * 6) +1;

const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`:game_die: **»** O dado que você jogou caiu em: \`${number}\``)
  message.channel.send(embedinvisivel)


}

exports.help = {
    name: 'dado',
    aliases: ['dice']
}