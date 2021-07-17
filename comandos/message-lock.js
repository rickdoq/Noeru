const db = require("quick.db");
const c = require('../config.json');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {

let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')
   let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Mensagem ao usar comando em um canal bloqueado*`)
  .addField(`:hammer: **Uso**`, `\`${prefixo}messagelock <mensagem>\``, true)
  .addField(`:book: **Exemplo**`, `\`${prefixo}messagelock blockedd\``, true)
  .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhum\``)
  .setColor('DARK');    


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Hey **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`)
    if (!args.join(" ")) return message.channel.send(erro)
   
    var messagem = db.set(`messagem_${message.guild.id}`, args.join(" ").trim())

    const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`<:check:832445897207447572> **»** Mensagem adicionada ao bloquear o canal.`)
  message.channel.send(embedinvisivel)


}

exports.help = {
    name: 'messagelock',
    aliases: ["msglock", "lockmessage", "messagelock"]
}