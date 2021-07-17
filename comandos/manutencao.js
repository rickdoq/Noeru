const Discord = require("discord.js")
const db = require("quick.db")
exports.run = async (client, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando é restrito ao meu desenvolvedor.")

let erro = new Discord.MessageEmbed()

    .setTitle(`MODO DE USO!`)
    .setDescription(`*Ativar modo restrito.*`)
    .addField(`:hammer: **Uso**`, `\`%manutencao <on/off>\``, true)
    .addField(`:bookmark: **Permissão**`, `\`Desenvolvedor\``)
    .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
    .setColor("#303136");

  if (!args[0]) return message.channel.send(erro);
  
if(args[0] === "on") {
      db.set(`manutencao`, true)
      message.channel.send(`O bot entrou em modo manutenção!`);
}
if(args[0] === "off") {
      db.delete(`manutencao`)
      message.channel.send(`O bot saiu do modo manutenção!`)
  }
}

exports.help = {
  name: "manutencao",
  aliases: []
}