const db = require("quick.db");
const ms = require("parse-ms");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  let member = message.mentions.users.first() || message.author;

  let timeout = 7.2e+7;
  let amount = Math.floor(Math.random() * 1500) + 500;

  let daily = await db.fetch(`daily_${message.author.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));

      const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`Hey **${message.author.username}**, você já coletou seu daily hoje! Pode coletá-lo em: \`${time.hours}h ${time.minutes}m ${time.seconds}s\``)
  message.channel.send(embedinvisivel)

    
  } else {
    let embed = new Discord.MessageEmbed()

      .setTitle(`DAILY`)
      .addField(`<:yens:832444247847731221> Hoje você recebeu`, `**¥ ${amount}**`)
      .setColor("#303136")
      .setFooter(`Hey, você pode me ajudar dando upvote? ${prefixo}upvote`);

    message.channel.send(embed);

    db.add(`reais_${message.author.id}`, amount);
    db.set(`daily_${message.author.id}`, Date.now());
  }
};

exports.help = {
  name: "daily",
  aliases: ["diario"]
};
