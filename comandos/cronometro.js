const Discord = require("discord.js");
const c = require("../config.json");
const ms = require("ms");
const db = require("quick.db")
exports.run = async (client, message, args) => {
  let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Vou conometrar um tempo para você*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}cronometro <tempo> <lembrete>\``, true)
    .addField(`:book: **Exemplo**`, `\`${prefixo}cronometro 1d Pegar o daily\``, true)
    .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
    .addField(
      `:twisted_rightwards_arrows: **Alternativas**`,
      `\`${prefixo}lembrete, ${prefixo}lembrar\``
    )
    .setColor("DARK");

  let Timer = args[0];

  if (!args[0]) {
    return message.channel.send(erro);
  }

  if (args[0] <= 0) {
    return message.channel.send(erro);
  }
  
  var motivo = args.slice(1).join(" ");
  if (!motivo) motivo = "Motivo não informado."

  message.channel.send(
    "<:horaa:836665410136571959> **»** Irei te chamar em: " +
      `\`${ms(ms(Timer), { long: true })}\``
  );

  setTimeout(function() {
    let embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`<:sinno:836665436128280596> BIP BIP BIP! Você pediu para eu te lembrar: ${motivo}`)
  message.channel.send(`<@${message.author.id}>`, embedinvisivel)
  }, ms(Timer));
};

exports.help = {
  name: "lembrar",
  aliases: ["lembrete", "cronometro", "cronômetro"]
};
