const db = require("quick.db");
const c = require("../config.json");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
      let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Aposte seus yens comigo*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}apostar <quantia>\``, true)
    .addField(`:book: **Exemplo**`, `\`${prefixo}apostar 100\``, true)
    .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
    .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
    .setColor("DARK");

  var money = await db.get(`reais_${message.author.id}`);

  var numeroaposta = parseInt(args[0]);
  if (!numeroaposta) return message.channel.send(erro);

  if (isNaN(numeroaposta)) return message.channel.send(erro);

  if (numeroaposta > money) return message.reply("você não tem esse dinheiro!")

  if (message.content.includes("-")) {
    return message.reply(
      `está tentando abusar? Olha ein! 👮`
    );
  }

  let escolha = ["ganhou", "perdeu"]
let resultado = escolha[Math.floor(Math.random() * escolha.length)];
  if (resultado === "ganhou") {
    let wining = new Discord.MessageEmbed()
      .setDescription(
        `**${message.author.username}**, você apostou **¥ ${numeroaposta}** e **GANHOU**!`
      )
      .addField(`<:yens:832444247847731221> Agora você possui`, `**¥ ${money + numeroaposta}**`)
      .setColor("#303136");
    message.channel.send(wining);
    db.add(`reais_${message.author.id}`, numeroaposta);
  } else {
    let losing = new Discord.MessageEmbed()
      .setDescription(
        `**${message.author.username}**, você apostou **¥ ${numeroaposta}** e **PERDEU**!`
      )
      .addField(`<:yens:832444247847731221> Agora você possui`, `**¥ ${money - numeroaposta}**`)
      .setColor("#303136");
    message.channel.send(losing);
    db.subtract(`reais_${message.author.id}`, numeroaposta);
  }

};

exports.help = {
  name: "aposta",
  aliases: ["apostar"]
};
