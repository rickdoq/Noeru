const Discord = require("discord.js");

exports.run = (client, message, args) => {

let user = message.mentions.users.first() || message.author
      const embed = new Discord.MessageEmbed()
            .setTitle(`<:cameran:834667562896719902> ${user.tag}`)
         
           .setImage(user.displayAvatarURL())
            .setColor('#303136')
    message.channel.send({embed})
  
};

exports.help = {
  name: "avatar",
  aliases: ["foto"]
};
