const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  const m = await message.channel.send("Ping?");
  const embed = new Discord.MessageEmbed()
  .setDescription(`A minha Latência é de ${m.createdTimestamp - message.createdTimestamp}ms.`)
  .setColor("DARK");
   m.edit(embed)
};
exports.help = {
  name: "ping",
  aliases: ["latencia", "latência"]
};
