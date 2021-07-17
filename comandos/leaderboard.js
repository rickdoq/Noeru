const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")

  let bank = db.get().filter(a => a.startsWith("reais", { sort: ".data" }));
  bank.sort((a, b) => (a.data < b.data ? 1 : -1));
  let content = " ";
  let count = 10;
  let start = 0;

  for (var i = 0; i < count; i++) {
    let usertest = client.users.cache.get(bank[i].ID.split("_")[2]);
    
    
    if (typeof usertest !== "undefined") {
      let user = client.users.cache.get(bank[i].ID.split("_")[2]).username;
      if(start+1 <= 3){
        content += `<:idd:821949156418387988> ・ ${user} ~ ${bank[i].data}$\n`;
      }else{
        content += `${start + 1}・ ${user} ~ ${bank[i].data}$\n`;
      }
      
      start++;
      
    }
    if(typeof usertest === "undefined"){
      count++;
    }
    
  }

  const embed = new Discord.MessageEmbed()
    .setTitle("<:yens:832444247847731221> » Top Ricos", message.guild.iconURL)
    .setDescription(content)
    .setColor("#303136");

  message.channel.send(embed);
}

exports.help = {
  name: "tops",
  aliases: ["leaderboard", "ricos"]
}
