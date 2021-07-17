const Discord = require("discord.js");
const moment = require("moment");
const db = require("quick.db");

const status = {
  online: "🔵 Disponivel",
  idle: "🔶️ Ausente",
  dnd: "🔴 Ocupado",
  offline: "🔳 Offline"
};
exports.run = async (client, message, args) => {
  var permissions = [];
  var acknowledgements = "Nenhuma";

  const member = message.mentions.members.first() || message.member;
  var dinheiro = db.get(`reais_${member.id}`);
  if (dinheiro === null) dinheiro = 0;

  let emprego = await db.get(`trabaio_${member.id}`);
  if (emprego === 1) emprego = "💻 Programador";
  if (emprego === 2) emprego = "🎨 Desing";
  if (emprego === 3) emprego = "🎥 Streamer";
  if (emprego === 4) emprego = "♻️ Lixeiro";
  if (emprego === null) emprego = "Desempregado";

  var rep = db.get(`rep_${member.id}`);
  if (rep === null) rep = 0;

  const randomColor = "#000000".replace(/0/g, function() {
    return (~~(Math.random() * 16)).toString(16);
  });


  let emb = new Discord.MessageEmbed()

    .setAuthor(`${member.user.username}`, member.user.displayAvatarURL)
    .addField(
      "🚪 » Data de entrada nesse Discord",
      `\`${moment(member.joinedAt).format("LLL")}\``
    )
    .addField(
      ":date: » Data de criação da conta",
      `\`${moment(member.user.createdAt).format("LLL")}\``
    )
    
    .addField(
      "🎮 » Jogando",
      `${
        member.user.presence.game
          ? `${member.user.presence.game.name}`
          : "Nenhum jogo detectado"
      }`
    )
    .addField("✨ » Status", `${status[member.user.presence.status]}`)
    .addField("🔖 » Tag", `#${member.user.discriminator}`)
    .addField(
      ":busts_in_silhouette: » Apelido",
      `\`${
        member.nickname !== null ? `${member.nickname}` : "Nenhum apelido."
      }\``
    )
    .addField("<:yens:832444247847731221> » Yen", `\`¥ ${dinheiro}\``)
    .addField(":briefcase: » Emprego", `\`${emprego}\``)
    .addField(":handshake: » Reputação", `\`${rep} RP\``)
    .setThumbnail(member.user.displayAvatarURL)
    .setColor("DARK");

  message.channel.send(emb);
};

exports.help = {
  name: "userinfo",
  aliases: ["ui"]
};
