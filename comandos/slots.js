const slotItems = ["🍇", "🍉", "🍋", "🍎", "️🥑", "🍓", "🍒"];
const db = require("quick.db");
const Discord = require('discord.js');
const c = require('../config.json');

exports.run = async (client, message, args) => {
  
    if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")
  
    let user = message.author;
    let moneydb = await db.fetch(`reais_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;
    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')
    let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Puxe a alavanca e teste sua sorte*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}slots <quantia>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}slots 100\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
  .setColor('DARK')  


    if (!money) return message.channel.send(erro);
    if (isNaN(money)) return message.channel.send(erro)
    if (money > moneydb) return message.channel.send(`🚫 **»** Você tentou apostar uma quantia de money que não possui.`);
    const i = parseInt(args[0])
    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let winbed = new Discord.MessageEmbed()

        .setDescription(`━━━━━━━\n${slotItems[number[0]]} \`|\` ${slotItems[number[1]]} \`|\` ${slotItems[number[2]]} \n━━━━━━━`)
        message.channel.send(`Você ganhou **¥ ${money}**`, winbed)
        db.add(`reais_${user.id}`, money)
    } else {

        let winbed = new Discord.MessageEmbed()

        .setDescription(`\n━━━━━━━\n${slotItems[number[0]]} \`|\` ${slotItems[number[1]]} \`|\` ${slotItems[number[2]]} \n━━━━━━━`)
        message.channel.send(`Você perdeu **¥ ${money}**`, winbed)
        let perde = (money-moneydb)
        db.set(`reais_${user.id}`, money)
    }

}
  
exports.help = {
    name:"slots",
    aliases: ["slot"]
 }