const Discord = require("discord.js");

exports.run = (client, message, args) => {
let icon = message.guild.iconURL({size: 4096, dynamic: true});

embed = new Discord.MessageEmbed()
.setColor("DARK") 
.setTimestamp(new Date()) 
.setAuthor(message.guild.name, icon) 
.setImage(icon)

message.channel.send(embed)
};

exports.help = {
  name: "servericon",
  aliases: ["iconserver"]
};
