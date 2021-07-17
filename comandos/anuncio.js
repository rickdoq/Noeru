const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `Hey **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`
    );

  message.channel
    .send(
      `🔄 Por favor **${message.author.username}**, digite o título desse anúncio.`
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
              `🔄 Por favor **${message.author.username}**, digite a mensagem desse anúncio.`
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
                      `Anúncio feito por: ${message.author.username}`,
                      message.author.avatarURL
                    )
                    .setColor("DARK");

                  message.channel.send(embed);
                });
            });
        });
    });
};

exports.help = {
  name: "anuncio",
  aliases: ["anunciar"]
};
