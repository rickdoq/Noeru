const Discord = require("discord.js");
const c = require("../config.json");
const db = require("quick.db")
exports.run = (client, message, args) => {
  let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`apenas administradores podem utilizar esse comando!`);

  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Dê uma bronca em quem não se comporta*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}warn <@user> <motivo>\``, true)
    .addField(`:book: **Exemplo**`, `\`${prefixo}Warn @rickdoq totoso\``, true)
    .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
    .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
    .setColor("DARK");

  let motivo = args.slice(1).join(" ");
  if (!motivo) return message.channel.send(erro);

  let membro =
    message.mentions.users.first() || message.guil.members.get(args[0]);
  if (!membro) return message.channel.send(erro);
  if (membro === message.member) return message.reply(`Mencione outro membro!`);

  let embed = new Discord.MessageEmbed()

    .setAuthor(`WARN`, membro.avatarURL)
    .setColor("DARK")
    .setDescription(motivo)
    .setFooter(
      `Responsável: ${message.author.username}`,
      message.author.avatarURL
    );

  membro.send(embed);
  message.reply(`Aviso enviado!`);
};
exports.help = {
  name: "warn",
  aliases: ["aviso"]
};
