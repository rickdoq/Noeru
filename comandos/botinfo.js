const Discord = require("discord.js"); // puxando a livraria 'discord.js'
const moment = require("moment"); // puxando o NPM 'moment' (instale utilizando: npm i moment)
moment.locale("pt-BR"); // definindo o moment para BR
const db = require("quick.db")
exports.run = (client, message, args) => {
  // puxando a base
  
    let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  let totalSeconds = (client.uptime / 1000); let days = Math.floor(totalSeconds / 86400); totalSeconds %= 86400; let hours = Math.floor(totalSeconds / 3600); totalSeconds %= 3600; let minutes = Math.floor(totalSeconds / 60); let seconds = Math.floor(totalSeconds % 60);
const uptime = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`

  // criando umas variaveis que podem ser clicadas e redirecionadas a um site
  var linguagem = "**`Node.js`**";
  var livraria = "**`Discord.js`**";
 // var jurubeba = "**`young#4565`**";
  var rick = "**`RickDOQ#5026`**";
  var data = "**`15/05/2020`**";
  var versao = "**`2.6 Alpha`**";

  
  let embed = new Discord.MessageEmbed()

    .setTitle(`Bot Info`)
    .setImage("https://cdn.discordapp.com/attachments/752633652772339712/839698337279246336/banner-noeru.png")
    .addField(`**<:configs:835691862625878088> | Meu prefixo:**`, `**\`${prefixo}\`**`)
    .addField(`**<:baterias:835692099781263381> | Versão atual:**`, versao)
    .addField(`**<:checado:835691695387050034> | Minha linguagem:**`, linguagem)
    .addField(`**<:livro:821944914291064863> | Minha livraria:**`, livraria)
    .addField(`**<:calendert:821949198542962730> | Estou acordada há:**`, uptime)
    .addField(`**<:devv:835693872217718814> | Programador:**`, rick)
    .addField(`**<:calenderb:835691949712211998> | Iniciado em:**`, data)
    .addField(`<:enter:832443100026765342> | **Servidores conectados:**`, `**\`${client.guilds.cache.size}\`**`)
    .addField(`<:user:821946962805915718> | **Usuários:**`, `**\`${client.users.cache.size}\`**`)
    .addField(`<:hash:821946983978893312> | **Canais:**`, `**\`${client.channels.cache.size}\`**`)

    .setColor("#303136");
  message.channel.send(embed);
};

exports.help = {
  // setando o nome do arquivo, seguido do prefix
  name: "botinfo",
  aliases: ["bot", "info"]
};
