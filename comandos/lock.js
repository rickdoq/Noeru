const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")

  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply("Ei, você tem permissão de ADMINISTRADOR.");
  let everyone = message.guild.roles.find(`name`, "@everyone");

  message.channel.overwritePermissions(everyone, {
    SEND_MESSAGES: false
  });
  message.channel.send("Chat bloqueado!");
};

exports.help = {
  name: "lock",
  aliases: ["lockchannel"]
}
