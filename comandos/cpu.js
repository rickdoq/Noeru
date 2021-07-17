const Discord = require("discord.js");
const cpuStat = require("cpu-stat");
const os = require("os");

exports.run = async (client, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")

  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }

    let embed = new Discord.MessageEmbed()

      .setThumbnail("https://image.flaticon.com/icons/png/512/1892/1892518.png")
      .addField(
        ":computer: **Modelo**",
        `\`${os.cpus().map(i => `${i.model}`)[0]}\``
      )
      .addField("📟 **Uso**", `\`${percent.toFixed(2)}%\``)
      .addField(
        ":battery: **Memória Utilizada**",
        `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
          2
        )}\` / \`${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``
      )
      .setColor("#303136");

    message.channel.send(embed);
  });
};
exports.help = {
  name: "cpu",
  aliases: ["maquina"]
};
