const Discord = require("discord.js");
const db = require("quick.db");
const c = require("../config.json");

exports.run = async (client, message, args) => {
  if (!["282999559385513984"].includes(message.author.id)) {
    return message.reply(`apenas desenvolvedor!`);
  }

  if (!args[0]) return message.channel.send(`escreva um número`);
  if (isNaN(args[0])) return message.channel.send(`NÚMERO!!!!!`);

  let member =
    message.mentions.users.first() ||
    message.guild.members.get(args[1]) ||
    message.author;

const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`${message.author} removeu **¥ ${args[0]}** da conta do usuário ${member}`)
  message.channel.send(embedinvisivel)

  db.subtract(`reais_${member.id}`, args[0]);
};

exports.help = {
  name: "removeyen",
  aliases: ["removemoney"]
};
