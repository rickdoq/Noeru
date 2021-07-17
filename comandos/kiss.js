const Discord = require("discord.js");
const superagent = require("superagent");
const c = require("../config.json");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Dê um beijo em alguém*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}beijo <@user>\``, true)
    .addField(`:book: **Exemplo**`, `\`${prefixo}beijo @rickdoq\``, true)
    .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
    .addField(
      `:twisted_rightwards_arrows: **Alternativas**`,
      `\`${prefixo}beijar\``
    )
    .setColor("DARK");

  if (!message.mentions.users.first()) return message.channel.send(erro);
  if (message.mentions.users.first().id === "653691138229927936")
    return message.channel.send(
      `Perdão **${message.author.username}**, já estou comprometida :3`
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/kiss");

  const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setDescription(
      `**${message.author.username}** deu um beijo em **${
        message.mentions.users.first().username
      }** :kiss:`
    )
    .setImage(body.url);
  message.channel.send({ embed });
};
exports.help = {
  name: "kiss",
  aliases: ["beijar"]
};
