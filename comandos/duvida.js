const Discord = require("discord.js");
const c = require("../config.json");
const db = require("quick.db")
exports.run = (client, message, args) => {
  let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  var infu = "https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png";

  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Pergunte para mim, a mais sábia!*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}duvida <dúvida>\``, true)
    .addField(`:book: **Exemplo**`, `\`${prefixo}duvida Sou lindo?\``, true)
    .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
    .addField(
      `:twisted_rightwards_arrows: **Alternativas**`,
      `\`${prefixo}pergunta\``
    )
    .setColor("DARK");

  var replies = ["Sim", "Não", "Talvez", "Com certeza", "Não sei"];
  var result = Math.floor(Math.random() * replies.length);

  var duvida = args.slice(0).join(" ");
  if (!duvida) return message.channel.send(erro);

  let embed = new Discord.MessageEmbed()

    .setColor("#303136")
    .addField(`:thinking: » **Dúvida**`, `${duvida}`)
    .addField(`:person_tipping_hand: » Resposta`, `${replies[result]}`);

  message.channel.send(embed);
};

exports.help = {
  name: "duvida",
  aliases: ["pergunta", "dúvida"]
};
