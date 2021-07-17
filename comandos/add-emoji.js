const Discord = require("discord.js");
const c = require("../config.json");

exports.run = (client, message, args) => {

  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.\n\n This command is undergoing maintenance.")
  
/*  if (!message.guild.me.hasPermission("MANAGE_EMOJIS"))
    return message.channel.send(
      `Ei **${message.author.username}**, para que eu adicione um emoji, preciso da permissão \`MANAGE_EMOJIS\`.`
    );

  let erro = new Discord.MessageEmbed()

    .setTitle(`MODO DE USO!`)
    .setDescription(`*Irei adicionar um emoji para você.*`)
    .addField(`:hammer: **Uso**`, `\`${c.prefix}addemoji <nome> <url>\``, true)
    .addField(`:bookmark: **Permissão**`, `\`MANAGE_EMOJIS\``)
    .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
    .setColor("DARK");

  if (!args[0]) return message.channel.send(erro);
  if (!args[1]) return message.channel.send(erro);
  if (!message.guild.me.hasPermission("MANAGE_EMOJIS"))
    return message.channel.send(
      `Ei **${message.author.username}**, eu necessito da permissão \`MANAGE_EMOJIS\` para adicionar emojis!`
    );
  if (!message.member.hasPermission("MANAGE_EMOJIS"))
    return message.channel.send(
      `Ei **${message.author.username}**, apenas usuários com a permissão \`MANAGE_EMOJIS\` podem utilizar!`
    );
  try {
   message.guild.emojis.create(args[1], args[0], { reason: `Emoji ${args[0]} foi adicionado por ${message.username}`).then(emoji => {
      message.channel.send(
        `Emoji adicionado com sucesso!\n> Emoji: ${emoji}\n> \n> Código: **\\${emoji}**`
      );
    });
  }  catch (err) {
    message.channel.send(`\`\`\`js\n${err}\`\`\``);
  }
} */
}

exports.help = {
  name: "addemoji",
  aliases: []
};
