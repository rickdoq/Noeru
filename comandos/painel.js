const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  if(message.author.id != "282999559385513984") {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      `apenas administradores podem ver o painel de lobby do servidor!`
    );}

  var autorole = db.get(`autoRole_${message.guild.id}`, args.join(" ").trim());
  if (autorole === null) autorole = "Sem cargo definido";

  var autoChannel = db.get(
    `autoChannel_${message.guild.id}`,
    args.join(" ").trim()
  );
  if (autoChannel === null) autoChannel = `Sem canal definido, use \`${prefixo}wc\``;

  var mensagem = db.get(`mensagem_${message.guild.id}`, args.join(" ").trim());
  if (mensagem === null) mensagem = `Sem mensagem definida, use \`${prefixo}wm\``;

  var titulo = db.get(`titulo_${message.guild.id}`, args.join(" ").trim());
  if (titulo === null) titulo = `Sem título definido, use \`${prefixo}wt\``;

  // CONFIG DOS QUE SAIREM
  var removetitle = db.get(
    `removeTitle_${message.guild.id}`,
    args.join(" ").trim()
  );
  if (removetitle === null) removetitle = `Sem título definido, use \`${prefixo}lt\``;

  var removemessage = db.get(
    `removeMessage_${message.guild.id}`,
    args.join(" ").trim()
  );
  if (removemessage === null) removemessage = `Sem messagem definida, use \`${prefixo}lm\``;

  var removecanal = db.get(
    `removeCanal_${message.guild.id}`,
    args.join(" ").trim()
  );
  if (removecanal === null) removecanal = `Sem canal definido, use \`${prefixo}lc\``;

  let embed = new Discord.MessageEmbed()

    .setTitle(`LOBBY`)
    .setDescription(
      `Hey **${message.author.username}**, seja muito bem-vindo(a) ao **Painel de Lobby** do **${message.guild.name}**\n\n🚪 Entrada\n👋 Saída`
    )
    .setColor("DARK");

  message.channel.send(embed).then(msg => {
    msg.react("🚪").then( r => {
    msg.react("👋")
    })

    let filtro = (reaction, usuario) =>
      reaction.emoji.name === "🚪" && usuario.id === message.author.id;
    let coletor = msg.createReactionCollector(filtro);

    coletor.on("collect", c => {
      c.remove(message.author.id);

      let joined = new Discord.MessageEmbed()

        .setTitle(`🚪 Sistema de Entrada`)
        .setColor("DARK")
        .addField(`:bust_in_silhouette: » **AutoRole**`, `<@&${autorole}>`)
        .addField(`:speech_balloon: » **Canal**`, `<#${autoChannel}>`)
        .addField(`:clipboard: » **Mensagem**`, mensagem)
        .addField(`:ticket: » **Título**`, titulo);

      msg.edit(joined).then(m => {
        

        let filter = (reaction, user) =>
          reaction.emoji.name === "👋" && user.id === message.author.id;
        let coleter = m.createReactionCollector(filter);

        coleter.on("collect", e => {
          e.remove(message.author.id);

          let leaved = new Discord.MessageEmbed()

            .setTitle(`👋 Sistema de Saída`)
            .setColor("DARK")
            .addField(`:speech_balloon: » **Canal**`, `<#${removecanal}>`)
            .addField(`:clipboard: » **Mensagem**`, removemessage)
            .addField(`:ticket: » **Título**`, removetitle);

          m.edit(leaved);
        });
      });
    });
  });
};

exports.help = {
  name: "painel",
  aliases: ["dashboard"]
};
