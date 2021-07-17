const db = require("quick.db");
const c = require("../config.json");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  var infu = "https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png";
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Escreva algo sobre vc*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}sobremim <texto>\``, true)
    .addField(
      `:book: **Exemplo**`,
      `\`${prefixo}sobremim Adoro cafezin\``,
      true
    )
    .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
    .addField(
      `:twisted_rightwards_arrows: **Alternativas**`,
      `\`${prefixo}biografia\``
    )
    .setColor("DARK");

  var bio = db.set(`desc_${message.author.id}`, args.join(" ").trim());
  if (!args[0]) return message.channel.send(erro);
  
  const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`<:check:832445897207447572> **»** Nova biografia adicionada ao seu perfil com sucesso. Para ver, use: \`${prefixo}perfil\``
  )
  message.channel.send(embedinvisivel)
};

exports.help = {
  name: "sobremim",
  aliases: ["biografia", "bio"]
};
