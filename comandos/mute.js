const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  //!tempmute @user 1s/m/h/d
if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")

  let tomute = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  let user = message.author.member.id;
  if (!tomute) return message.reply("Marque um usuário.");
  if (!user.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Você não tem perm.");
  if (tomute === user) return message.reply("Você não pode se mutar.");
  let muterole = message.guild.roles.find(`name`, "😔・Muted");
  //start of create role
  if (!muterole) {
    try {
      muterole = await message.guild.createRole({
        name: "😔・Muted",
        color: "#000000",
        permissions: []
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if (!mutetime) return message.reply("Diga um tempo!");

  await tomute.addRole(muterole.id);
  message.reply(`<@${tomute.id}> foi mutado por ${ms(ms(mutetime))} ms.`);

  setTimeout(function() {
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> foi desmutado!`);
  }, ms(mutetime));

  //end of module
};

exports.help = {
  name: "mute",
  aliases: ["mutar"]
};
