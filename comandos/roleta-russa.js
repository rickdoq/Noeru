const Discord = require("discord.js");

exports.run = (client, message, args) => {

    var random = Math.floor(Math.random() * (5 - 2) + 2);
    if (random === 3){

const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`Rodou o cartucho e você **SOBREVIVEU**! :sweat_smile:`)
  message.channel.send(embedinvisivel)
    }
    else{
const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`Rodou o cartucho e você **MORREU**! :cry:`)
  message.channel.send(embedinvisivel)
  
        
      }
}

exports.help = {
    name: 'roletarussa',
    aliases: []
}