const db = require("quick.db");
const c = require("../config.json");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")

  var infu = "https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png";

  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Selecione o canal de enquetes*`)
    .addField(`:hammer: **Uso**`, `\`Ativar/Desativar xp\``, true)
    .addField(`:book: **Exemplo**`, `\`${c.prefix}xp **ON**/**OFF**\``, true)
    .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
    .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
    .setColor("DARK");

  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `Hey **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`
    );

  if (args(1) === "ON") {
    db.set(`xpligado_${message.guild.id}`, 1);
    message.channel.send("Sucesso, sistema de xp ativado.");
  }
  if (args(1) === "OFF") {
    db.set(`xpligado_${message.guild.id}`, 0);
    message.channel.send("Sucesso, sistema de xp desativado.");
  }
  if (!args) return message.channel.send(erro);
};
exports.help = {
  name: "xp",
  aliases: ["ativar-xp", "on-xp"]
};
