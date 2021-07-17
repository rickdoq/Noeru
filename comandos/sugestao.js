const Discord = require("discord.js");

exports.run = (client, message, args) => {

if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")
  
/*
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `Hey **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`
    );

  message.channel
    .send(
      `🔄 Por favor **${message.author.username}**, digite o título dessa sugestão.`
    )
    .then(msg2 => {
      let cj = message.channel
        .createMessageCollector(x => x.author.id == message.author.id, {
          max: 1
        })
        .on("collect", c => {
          const titulo = c.content;

          message.channel
            .send(
              `🔄 Por favor **${message.author.username}**, digite a mensagem dessa sugestão.`
            )
            .then(msg3 => {
              let cp = message.channel
                .createMessageCollector(x => x.author.id == message.author.id, {
                  max: 1
                })
                .on("collect", c => {
                  const mensagem = c.content;

                  let embed = new Discord.MessageEmbed()

                    .setTitle(titulo)
                    .setDescription(mensagem)
                    .setFooter(
                      `Sugestão criada por: ${message.author.username}`,
                      message.author.avatarURL
                    )
                    .setColor("DARK");

                  message.channel.send(embed);
                });
            });
        });
    });
    */
};

exports.help = {
  name: "sugerir",
  aliases: ["sugestão"]
};
