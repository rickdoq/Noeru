const db = require("quick.db");
const Discord = require("discord.js");
const c = require('../config.json');

exports.run = async (client, message, args) => {

let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')
   let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Trave o uso de comandos em um canal*`)
  .addField(`:hammer: **Uso**`, `\`${prefixo}lockchannel <id do canal>\``, true)
  .addField(`:book: **Exemplo**`, `\`${prefixo}lockchannel **ID**\``, true)
  .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
  .setColor('DARK')  


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Hey **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`)
    if (!args.join(" ")) return message.channel.send(erro)
    if (isNaN(args.join(' '))) return message.channel.send(erro)
   
    var canalblock = db.set(`messageid_${message.guild.id}`, args.join(" ").trim())
const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`<:check:832445897207447572> **»** Bloqueio realizado com sucesso. Eu não responderei à comandos no canal <#${canalblock}>!`)
  message.channel.send(embedinvisivel)


}

exports.help = {
    name: 'lockcommand',
    aliases: ['lockcmd']
}