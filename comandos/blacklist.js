const Discord = require("discord.js")
const db = require("quick.db")
exports.run = async (client, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando é restrito ao meu desenvolvedor.")

let erro = new Discord.MessageEmbed()

    .setTitle(`MODO DE USO!`)
    .setDescription(`*Adicionar usuário a blacklist.*`)
    .addField(`:hammer: **Uso**`, `\`blacklist <on/off> <id do user>\``, true)
    .addField(`:bookmark: **Permissão**`, `\`Desenvolvedor\``)
    .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
    .setColor("#303136");

  if (!args[0]) return message.channel.send(erro);
  if (!args[1]) return message.channel.send(erro);
  
if(args[0] === "on") {
let user = await client.users.cache.get(args[1]);
    if(!user) return message.channel.send(`Não achei esse id ._.`);
    
    let fetched = db.get(`blacklist_${user.id}`)
    
    if(!fetched) {
      db.set(`blacklist_${user.id}`, true)
      message.channel.send(`Usuário foi adicionado a blacklist!`);
    }else{ 
      return message.channel.send(`Esse usuário já está na blacklist!`);
    }
}
if(args[0] === "off") {
  let user = await client.users.cache.get(args[1]);
    if(!user) return message.channel.send(`Não achei esse id ._.`);
  
    let fetched = db.get(`blacklist_${user.id}`)
    if(!fetched) {
      return message.channel.send(`Esse usuário não está na blacklist!`);
    }else{
      db.delete(`blacklist_${user.id}`)
      message.channel.send(`Usuário foi removido da blacklist!`)
    }
  }
}

exports.help = {
  name: "blacklist",
  aliases: []
}