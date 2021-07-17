const db = require('quick.db');
const c = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')
   let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Selecione o canal de punições*`)
  .addField(`:hammer: **Uso**`, `\`${prefixo}stafflog <id do canal>\``, true)
  .addField(`:book: **Exemplo**`, `\`${prefixo}stafflog **ID**\``, true)
  .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${prefixo}modlog, ${prefixo}punichannel\``)
  .setColor('DARK')      

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Hey **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`)
    if (!args.join(" ")) return message.channel.send(erro)
    if (isNaN(args.join(" "))) return message.channel.send(erro)
    
    var canal = db.set(`punichannel_${message.guild.id}`, args.join(" ").trim())
 
 const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`<:check:832445897207447572> **»** Canal de punições setado com sucesso.`)
  message.channel.send(embedinvisivel)

}
exports.help = {
    name: 'punichannel',
    aliases: ['modlog', 'stafflog']
}