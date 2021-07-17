const Discord = require("discord.js");
const db = require("quick.db");
const c = require("../config.json");

exports.run = async (client, message, args, config) => {
 let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Pague yens para um usuário*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}pay <@user> <quantia>\``, true)
    .addField(`:book: **Exemplo**`, `\`${prefixo}pay @rickdoq 100\``, true)
    .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
    .addField(
      `:twisted_rightwards_arrows: **Alternativas**`,
      `\`${prefixo}pagar\``
    )
    .setColor("DARK");

  let member = message.mentions.users.first();

  let money = db.get(`reais_${message.author.id}`);

  if (!member) {
    return message.channel.send(erro);
  }

  if (member === message.author) {
    return message.reply(`mencione outro usuário!`);
  }

  if (!args[1]) {
    return message.channel.send(erro);
  }

  if (!args[0]) {
    return message.channel.send(erro);
  }

  if (args[1] < 1) {
    return message.channel.send(
      `Hey **${message.author.username}**, coloque um número acima de **¥ 1**`
    );
  }

  if (message.content.includes("-")) {
    return message.channel.send(
      `Hey **${message.author.username}**, você está tentando abusar?`
    );
  }

  if (isNaN(args[1])) {
    return message.channel.send(`lll`);
  }

  if (money < args[1]) {
    return message.channel.send(
      `Hey **${message.author.username}**, você não possui **¥ ${args[1]}**.`
    );
  }

  message.channel
    .send(
      `Hey **${
        message.author.username
      }**, você realmente deseja pagar **¥ ${args[1]}** ao membro **${
        member.username
      }**?`
    )
    .then(s => {
      s.react("☑️");
      let filtro = (reaction, usuario) =>
        reaction.emoji.name === "☑️" && usuario.id === message.author.id;
      let coletor = s.createReactionCollector(filtro, { max: 1, time: 36000 });

      coletor.on("collect", c => {
        c.remove(message.author.id);

const embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`<:check:832445897207447572> **»** Pronto **${message.author.username}**, pagamento feito com êxito!`)
  message.channel.send(embedinvisivel)
  
        s.delete();
        db.add(`reais_${member.id}`, args[1]);
        db.subtract(`reais_${message.author.id}`, args[1]);
      });
    });
};

exports.help = {
  name: "pay",
  aliases: ["pagar"]
};
