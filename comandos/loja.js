const Discord = require("discord.js")
const db = require("quick.db")

exports.run = (client, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")
let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
const embed = new Discord.MessageEmbed()
.setTitle("Loja")
.setDescription(`Olá <@${message.author.id}>, aqui você pode comprar coisinhas interessantes:`)
.addField(`1. Multiplicador de Salário (2x)`, `Valor: 10,000 ¥`)
.addField(`2. Multiplicador de Salário (3x)`, `Valor: 15,000 ¥`)
.addField(`3. Multiplicador de Salário (5x)`, `Valor: 25,000 ¥`)
.addField(`4. Moedas Locais`, `Valor: (É retirado 30% do valor para conversão da moeda local.)`)
.setFooter(`Para comprar use: ${prefixo}comprar {número item}. Ex: ${prefixo}comprar 1`)
.setColor("#303136")
message.channel.send(embed)
}

exports.help = {
  name: "loja",
  aliases: ["shop"]
}