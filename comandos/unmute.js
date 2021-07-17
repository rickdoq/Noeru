const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")

  //!tempmute @user 1s/m/h/d
  let muterole = message.guild.roles.find(`name`, "😔・Muted");
  let tomute = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  const user = message.member;
  if (user === tomute) return message.reply("Você não pode se desmutar");
  if (!tomute) return message.reply("Marque um usuário.");
  if (!user.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Você não tem perm.");

  tomute.removeRole(muterole.id);
  message.channel.send(`<@${tomute.id}> foi desmutado!`);

  //end of module
};

exports.help = {
  name: "unmute",
  aliases: ["desmutar"]
};
