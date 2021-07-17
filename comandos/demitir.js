const Discord = require("discord.js")
const db = require ("quick.db")

exports.run = (client, message, args) => {
  
  db.set(`trabaio_${message.author.id}`, 0)
  
  const embed = new Discord.MessageEmbed()
  .setTitle("Demitido")
  .setDescription("Você acabou de se demitir, seu vagabundo.")
  .setColor("#303136")
  message.channel.send(embed)
}

exports.help = {
  name: "demitir",
  aliases: ["deixaremprego"]
}