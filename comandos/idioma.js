const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")

  const idioma = db.get(`lang_${message.guild.id}`)
  if(!idioma) idioma = "br"

  let embed = new Discord.MessageEmbed()
    .setDescription(
      `Idioma Atual: ${idioma}\nCurrent Language: ${idioma}\n\nEscolha 🔷 para português, or choose 🔶 for english.`
    )
    .setColor("GREEN");

  message.channel.send(embed).then(msg => {
    msg.react("🔷").then(() => msg.react("🔶"));

    const filter = (reaction, user) => {
      return (
        ["🔷", "🔶"].includes(reaction.emoji.name) &&
        user.id === message.author.id
      );
    };

    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] }).then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === "🔷") {
          message.reply("Você escolheu Português.");
          db.set(`lang_${message.guild.id}`, "br");
        }

        if (reaction.emoji.name === "🔶") {
          message.reply("You choose English.");
          db.set(`lang_${message.guild.id}`, "eng");
        }
      }).catch(collected => {
        message.reply(
          "devido à sua demora, cancelei o pedido! Tente novamente."
        );
      });
  });
};

exports.help = {
  name: "idioma",
  aliases: ["language"]
};
