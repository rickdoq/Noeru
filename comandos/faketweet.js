const Discord = require("discord.js");
const fetch = require("node-fetch");
const c = require("../config.json");
exports.run = async (client, message, args) => {

if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")
  
/*
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Crie um falso tweet*`)
    .addField(`:hammer: **Uso**`, `\`${c.prefix}tweet <@conta> <texto>\``, true)
    .addField(
      `:book: **Exemplo**`,
      `\`${c.prefix}tweet @DonaldTrump Adoro o Bolsonaro\``,
      true
    )
    .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
    .addField(
      `:twisted_rightwards_arrows: **Alternativas**`,
      `\`${c.prefix}faketweet, ${c.prefix}tweetar\``
    )
    .setColor("DARK");

  let user = args[0];
  let text = args.slice(1).join(" ") || undefined;
  if (!user) return message.channel.send(erro);
  if (user.startsWith("@")) user = args[0].slice(1);
  const type =
    user.toLowerCase() === "realdonaldtrump" ? "trumptweet" : "tweet";
  const u = user.startsWith("@") ? user.slice(1) : user;
  if (!text) return message.channel.send(erro);
  message.channel.startTyping();
  fetch(
    `https://nekobot.xyz/api/imagegen?type=${type}&username=${u}&text=${encodeURIComponent(
      text
    )}`
  )
    .then(res => res.json())
    .then(data =>
      message.channel.send({
        file: data.message
      })
    )
    .catch(err => {
      this.client.logger.error(err.stack);
      message.channel.stopTyping(true);
      return this.client.embed("APIError", message);
    });
  message.channel.stopTyping(true); */
};

exports.help = {
  name: "faketweet",
  aliases: ["tweet", "tweetar"]
};
