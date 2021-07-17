const Discord = require("discord.js");
const c = require("../config.json");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")

  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`apenas administradores podem utilizar esse comando!`);

  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Deixe-me criar uma enquete*`)
    .addField(`:hammer: **Uso**`, `\`${c.prefix}enquete <enquete>\``, true)
    .addField(
      `:book: **Exemplo**`,
      `\`${c.prefix}enquete Querem um carin?\``,
      true
    )
    .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
    .addField(
      `:twisted_rightwards_arrows: **Alternativas**`,
      `\`${c.prefix}votação\``
    )
    .setColor("DARK");

  let mensg = args.join(" ");
  if (!mensg) {
    message.channel.send(erro);
    return undefined;
  }

  const embed = new Discord.MessageEmbed()

    .setTitle(`📊 ENQUETE`)
    .setDescription(`${mensg}`)
    .setColor("#303136")
    .setFooter(
      `Responsável: ${message.author.username}`,
      message.author.displayAvatarURL
    );

  var canal = message.guild.channels.get(
    db.get(`idenquete_${message.guild.id}`)
  );
  if (!canal)
    return message.reply(
      `esse Discord não possui um canal definido para enquetes. Caso você seja um Administrador, defina utilizando: \`%setenquete\``
    );

  canal
    .send(embed)
    .then(function(msg) {
      msg.react("☑️"); // checked
      msg.react("❎"); // unchecked

      const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`<:send:832808668893675571> | ${message.author}, enquete enviada ao ${canal}!`)
  message.channel.send(embedinvisivel)

        
    })
    .catch(function(error) {
      console.log(error);
    });
};

exports.help = {
  name: "enquete",
  aliases: ["votação", "votacao"]
};
