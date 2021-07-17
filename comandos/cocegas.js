const Discord = require("discord.js");
const c = require("../config.json");
const superagent = require("superagent");
const db = require("quick.db")
exports.run = async (client, message, args) => {
  
      let prefix = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefix = "%"
  
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Faça cócegas em alguém*`)
    .addField(`:hammer: **Uso**`, `\`${prefix}cocegas <@user>\``, true)
    .addField(`:book: **Exemplo**`, `\`${prefix}cocegas @rickdoq\``, true)
    .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
    .addField(
      `:twisted_rightwards_arrows: **Alternativas**`,
      `\`${c.prefix}tickle\``
    )
    .setColor("DARK");

  if (!message.mentions.users.first()) return message.channel.send(erro);
  const { body } = await superagent.get("https://nekos.life/api/v2/img/tickle");

  const embed = new Discord.MessageEmbed()
    .setColor("#303136")
    .setDescription(
      `**${message.author.username}** fez cócegas em **${
        message.mentions.users.first().username
      }** :joy:`
    )
    .setImage(body.url);
  message.channel.send({ embed });
};
exports.help = {
  name: "tickle",
  aliases: ["cocegas", "cócegas"]
};
