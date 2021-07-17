const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
 let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
 let erro = new Discord.MessageEmbed()

    .setTitle(`MODO DE USO!`)
    .setDescription(`*Irei adicionar um emoji para você.*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}prefix <novo prefixo>\``, true)
    .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
    .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`setprefix, prefix, prefixo, setprefixo\``)
    .setColor("DARK");
   if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Hey **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`) 

if(!args[0]) return message.channel.send(erro)
if(args[1]) return message.channel.send("Não coloque espaço no prefixo!")
if(args[0].lenght > 3) return message.channel.send("Esse prefixo é grande, use apenas 3 letras!")
if(args[0] === "") {
const resetprefix = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`O prefixo foi removido! Prefixo atual: **%**`)
  message.channel.send(resetprefix)
  await db.delete(`prefixo_${message.guild.id}`)
}
let newprefix = args[0]



const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`Antigo prefixo: ${prefixo}\nNovo prefixo: ${newprefix}`)
  message.channel.send(embedinvisivel)
await db.set(`prefixo_${message.guild.id}`, args[0])

}

exports.help = {
  name: "setprefix",
  aliases: ["prefix", "prefixo", "setprefixo"]
}