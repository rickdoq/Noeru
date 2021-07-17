const Discord = require("discord.js");
const db = require("quick.db");
const c = require("../config.json");

exports.run = (client, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")
/*
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Aplique uma punição pesada*`)
    .addField(`:hammer: **Uso**`, `\`${c.prefix}ban <@user> <motivo>\``, true)
    .addField(`:book: **Exemplo**`, `\`${c.prefix}ban rickdoq Lindao\``, true)
    .addField(`:bookmark: **Permissão**`, `\`BAN_MEMBERS\``)
    .addField(
      `:twisted_rightwards_arrows: **Alternativas**`,
      `\`${c.prefix}banir\``
    )
    .setColor("DARK");

  var membro =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!membro) return message.channel.send(erro);
  if (membro === message.member)
    
  let embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`<:barreira:834667587715072022> Hey **${message.author.username}**, você não pode se banir!`)
  message.channel.send(embedinvisivel)

    

  var motivo = args.slice(1).join(" ");
  if (!motivo) motivo = "Motivo não informado."

  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(erro);

  let banembed = new Discord.MessageEmbed()

    .setTitle("Ban")
    .setDescription(
      `⚠️ **${message.author.username}**, você realmente deseja aplicar essa punição em **${membro.user.username}**?`
    )
    .setColor("#303136")
    .setFooter(`Clique no emoji para confirmar ou espere 30s para cancelar!`);

  message.channel.send(banembed).then(msg => {
    msg.react("<:check:832445897207447572>");

    let filtro = (reaction, usuario) =>
      reaction.emoji.id === "832445897207447572" && usuario.id === message.author.id;
    let coletor = msg.createReactionCollector(filtro, { max: 1, time: 30000 });

    coletor.on("collect", em => {
      em.remove(message.author.id);

      let embed = new Discord.MessageEmbed()

        .setTitle(`Ban`)
        .setDescription(
          `<:idd:821949156418387988> » Membro: \`${membro.user.tag} (${membro.user.id})\`\n\n<:distintivo:834667537286692894> » Responsável: ${message.author} (${message.author.id})\n\n<:logs:835692045549043722> » Motivo: ${motivo}`
        )
        .setColor("#303136");
      var canal = message.guild.channels.cache.get(
        db.get(`punichannel_${message.guild.id}`)
      );
      if (!canal) {
        message.channel.send(
          `Caso deseje escolher um canal para enviar punições, utilize: \`${c.prefix}stafflog\``,
          embed
        );
        membro.ban();
      } else {
        canal.send(embed);
        membro.ban();
      }
    });
  });*/
};
exports.help = {
  name: "ban",
  aliases: ["banir"]
};
