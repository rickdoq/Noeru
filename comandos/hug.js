const Discord = require("discord.js");
const c = require("../config.json");
const superagent = require("superagent");
const db = require("quick.db")
exports.run = async (client, message, args) => {
  let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Dê um abraço em alguém*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}abraço <@user>\``, true)
    .addField(`:book: **Exemplo**`, `\`${prefixo}abraço @rickdoq\``, true)
    .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
    .addField(
      `:twisted_rightwards_arrows: **Alternativas**`,
      `\`${prefixo}hug, ${prefixo}abraçar\``
    )
    .setColor("DARK");

  if (!message.mentions.users.first()) return message.channel.send(erro);
  const { body } = await superagent.get("https://nekos.life/api/v2/img/hug");

  const embed = new Discord.MessageEmbed()
    .setColor("#303136")
    .setDescription(
      `**${message.author.username}** deu um abraço em **${
        message.mentions.users.first().username
      }** :busts_in_silhouette:`
    )
    .setImage(body.url);
  message.channel.send({ embed });
};
exports.help = {
  name: "hug",
  aliases: ["abracar", "abraçar", "abraco", "abraço"]
};
