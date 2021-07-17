const Discord = require("discord.js")
const db = require ("quick.db")

exports.run = (client, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")
/*
 let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Compre um item da loja*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}buy <item>\``, true)
    .addField(`:book: **Exemplo**`, `\`${prefixo}buy 1\``, true)
    .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
    .addField(
      `:twisted_rightwards_arrows: **Alternativas**`,
      `\`${prefixo}comprar\``
    )
    .setColor("DARK");
    
    let money = db.get(`reais_${message.author.id}`)
    
    if[args[0] === "1"] {
      if(money < 10000) return message.channel.send("Hey, você não tem esse dinheiro.")
      
    }
    else if[args[0] === "2"] {
      if(money < 20000) return message.channel.send("Hey, você não tem esse dinheiro.")
      
    }
    else if[args[0] === "3"] {
      if(money < 30000) return message.channel.send("Hey, você não tem esse dinheiro.")
      
    }
    else if[args[0] === "4"] {
      if(money < 10000) return message.channel.send("Hey, você não tem esse dinheiro.")
      
    }
    */
}

exports.help = {
  name: "comprar",
  aliases: ["buy"]
}