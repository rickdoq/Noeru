const db = require("quick.db");
const Discord = require("discord.js");
const c = require("../config.json");

exports.run = (client, message, args) => {
  let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Selecione o canal de entrada de usuários*`)
    .addField(
      `:hammer: **Uso**`,
      `\`${prefixo}welcomechannel <id do canal>\``,
      true
    )
    .addField(
      `:book: **Exemplo**`,
      `\`${prefixo}welcomechannel **ID**\``,
      true
    )
    .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
    .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhum\``)
    .setColor("DARK");

if(message.author.id != "282999559385513984") {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `Hey **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`
    );}
  if (!args.join(" ")) return message.channel.send(erro);
  if (isNaN(args.join(" "))) return message.channel.send(erro);

  var canal = db.set(`autoChannel_${message.guild.id}`, args.join(" ").trim());

  const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`<:check:832445897207447572> **»** Função finalizada com sucesso. Para ver toda a configuração completa, digite: \`${prefixo}painel\`.`)
  message.channel.send(embedinvisivel)
};
exports.help = {
  name: "welcomechannel",
  aliases: ["wc"]
};
