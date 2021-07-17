const c = require("../config.json");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const db = require("quick.db")

exports.run = async (client, message, args) => {
      let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Crie um texto em ASCII*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}ascii <texto>\``, true)
    .addField(`:book: **Exemplo**`, `\`${prefixo}ascii rickdoq\``, true)
    .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
    .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
    .setColor("DARK");

  let text = encodeURIComponent(args.join(" "));
  if (!text) return message.channel.send(erro);
  
  const tooLong = `Hey **${message.author.username}**, o texto é muito longo, tente um texto menor.`;

  fetch(`http://artii.herokuapp.com/make?text=${text}`)
    .then(res => res.text())
    .then(body => {
      if (body.length > 2000) return message.channel.send(tooLong);
      return message.channel.send(body, {
        code: "fix"
      });
    })
    .catch(error => {
      this.client.logger.error(error);
      return message.channel.send(
        text.general.error.replace(/{{err}}/g, error.message)
      );
    });
};

exports.help = {
  name: "ascii",
  aliases: []
};
