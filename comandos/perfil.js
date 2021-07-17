const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let member = message.mentions.users.first() || message.author;
  var reais = await db.get(`reais_${member.id}`);
  if (reais === null) reais = 0;

 // var xp = await db.get(`xpinfo_${message.guild.id}_${message.author.id}`);
//  if (xp === null) xp = 0;

 // var level = await db.get(`level_${message.guild.id}_${message.author.id}`)
//  if (level === null) level = 0;
  
  var rep = await db.fetch(`rep_${member.id}`);
  if (rep === null) rep = 0;

  var emprego = await db.get(`trabaio_${member.id}`);
  if (emprego === null) emprego = `Desempregado`;
  if (emprego === 1) emprego = "💻 Programador";
  if (emprego === 2) emprego = "🎨 Designer";
  if (emprego === 3) emprego = "🎥 Streamer";
  if (emprego === 4) emprego = "♻️ Lixeiro";

  var desc = await db.get(`desc_${member.id}`);
  if (desc === null) desc = "Nenhuma biografia definida";

  let embed = new Discord.MessageEmbed()

    .setDescription(`${desc}`)
    .addField(`<:yens:832444247847731221> **Yen**`, `\`¥ ${reais}\``, true)
    .addField(`:handshake: **Reputação**`, `\`${rep} RP\``, true)
    .addField(`:briefcase: **Emprego**`, `\`${emprego}\``)
//    .addField(`XP:`, `${xp}`)
//  .addField(`Level:`,`${level}`)
    .setFooter(`Perfil de: ${member.username}`, member.avatarURL)
    .setColor("DARK");

  message.channel.send(embed);
};

exports.help = {
  name: "profile",
  aliases: ["perfil"]
};
