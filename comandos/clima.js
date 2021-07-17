var weather = require("weather-js");
const c = require("../config.json");
const Discord = require("discord.js");
const db = require("quick.db")

exports.run = (client, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")

/*      let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Veja o clima em alguma cidade*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}clima <cidade>\``, true)
    .addField(`:book: **Exemplo**`, `\`${prefixo}clima rio de janeiro\``, true)
    .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
    .addField(
      `:twisted_rightwards_arrows: **Alternativas**`,
      `\`${prefixo}tempo\``
    )
    .setColor("DARK");

  weather.find(
    {
      search: args,
      degreeType: "C"
    },
    function(err, result) {
      if (err) console.log(err);
      if (!result) return message.channel.send(erro);
      if (!result[0]){ 
        let embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`Desculpe **${message.author.username}**, não encontrei essa cidade!`)
  message.channel.send(embedinvisivel)
}
})
      const embed = new Discord.MessageEmbed()
        .setTitle(`**${result[0].location.name}**`)
        .addField(
          `**<:soll:836661634847735839> » Temperatura**`,
          `\`${result[0].current.temperature}°C\``,
          true
        )
        .addField(
          `**<:termo:836661608389410816> » Sensação Térmica**`,
          `\`${result[0].current.feelslike}°C\``,
          true
        )
        .addField(`**<:gotass:836661488864985189> » Umidade**`, `\`${result[0].current.humidity}%\``)
        .addField(`**<:ventoo:836661548013191171> » Vento**`, `\`${result[0].current.windspeed}\``)
        .setColor("#303136")
        .setThumbnail(result[0].current.imageUrl);

      message.channel.send(embed);
    }*/
};

exports.help = {
  name: `tempo`,
  aliases: ["clima"]
};
