const Discord = require("discord.js");
const db = require("quick.db");
const c = require("../config.json");

exports.run = async (client, message, args) => {
  if (!["282999559385513984"].includes(message.author.id)) {
    return message.reply(`apenas meu desenvolvedor!`);
  }

  if (!args[0]) return message.channel.send(`<valor> <@usuario>`);
  if (isNaN(args[0])) return message.channel.send(`<VALOR> <USUARIO>`);

  let member =
    message.mentions.users.first() ||
    message.guild.members.get(args[1]) ||
    message.author;

const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`${message.author} adicionou **¥ ${args[0]}** na conta do membro ${member}`)
  message.channel.send(embedinvisivel)
  db.add(`reais_${member.id}`, args[0]);
};

exports.help = {
  name: "addyen",
  aliases: ["addmoney"]
};
