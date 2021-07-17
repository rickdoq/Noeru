const Discord = require("discord.js");
const db = require("quick.db")

exports.run = (client, message, args) => {
/*const lang = db.get(`lang_${message.guild.id}`)
if(!lang) lang = "br" */

// if(lang === "br"){
  let embed = new Discord.MessageEmbed()
.setTitle("Links")
.setThumbnail("https://cdn.discordapp.com/attachments/706097086432804884/832396373471002654/c7bf4b30521f197c4a7d929de5327adb.jpg")
.setDescription("Olá, aqui está meus principais links:\n\n<:checado:835691695387050034> Servidor de Suporte: [Clique aqui](https://discord.gg/CnvuPZE)\n<:noeru:836391824300965888> Me adicione: [Clique aqui](https://discordapp.com/api/oauth2/authorize?client_id=706095889973772388&permissions=8&scope=bot)\n↗️ Up Vote: [Clique aqui](https://bluephoenixlist.tk/bot/706095889973772388)")
.setColor("#303136");
  message.channel.send(embed);
// } 
/*else {
    let embed = new Discord.MessageEmbed()
.setTitle("Links")
.setThumbnail("https://cdn.discordapp.com/attachments/706097086432804884/832396373471002654/c7bf4b30521f197c4a7d929de5327adb.jpg")
.setDescription("Hello, here are my main links:\n\n<:checado:835691695387050034> Support Server: [Click here](https://discord.gg/CnvuPZE)\n<:noeru:836391824300965888> Add me: [Click here](https://discordapp.com/api/oauth2/authorize?client_id=706095889973772388&permissions=8&scope=bot)\n↗️ Up Vote: [Click here](https://bluephoenixlist.tk/bot/706095889973772388)")
.setColor("#303136");
  message.channel.send(embed);
}*/
};

exports.help = {
  name: "convidar",
  aliases: ["adicionar", "convite", "invite", "upvote", "vote"]
};
