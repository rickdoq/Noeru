const db = require("quick.db");
const Discord = require("discord.js");
const c = require("../config.json");

exports.run = (client, message, args) => {
  let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  var infu = "https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png";
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Escreva um título para a mensagem de boas vindas*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}welcometitle <título>\``, true)
    .addField(`:book: **Exemplo**`, `\`${prefixo}welcometitle WELCOME\``, true)
    .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
    .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
    .setColor("DARK");

if(message.author.id != "282999559385513984"){
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `Hey **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`
    );}
    
  if (!args.join(" ")) return message.channel.send(erro);

  db.set(`titulo_${message.guild.id}`, args.join(" ").trim());

  const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`<:check:832445897207447572> **»** Função finalizada com sucesso. Para ver toda a configuração completa, digite: \`${prefixo}painel\`.`)
  message.channel.send(embedinvisivel)
};
exports.help = {
  name: "welcometitle",
  aliases: ["wt"]
};
