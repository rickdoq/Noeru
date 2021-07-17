const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = (client, message, args) => {
  randomPuppy("dog").then(url => {
    let embed = new Discord.MessageEmbed()
      .setDescription(`Doguinho`)
      .setImage(url)
      .setColor("#303136");
    return message.channel.send({ embed });
  });
};

exports.help = {
  name: "dogs",
  aliases: ["cachorros", "dog", "cachorro"]
};
