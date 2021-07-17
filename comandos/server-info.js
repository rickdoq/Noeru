const Discord = require("discord.js");

const moment = require("moment");
moment.locale("pt-BR");

exports.run = (client, message, args) => {

if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")

  function checkBots(guild) {
    let botCount = 0;
    guild.members.forEach(member => {
      if (member.user.bot) botCount++;
    });
    return botCount;
  }

  function checkMembers(guild) {
    let memberCount = 0;
    guild.members.forEach(member => {
      if (!member.user.bot) memberCount++;
    });
    return memberCount;
  }

  let online = message.guild.members.filter(a => a.presence.status == "online")
    .cache.size;
  let ocupado = message.guild.members.filter(a => a.presence.status == "dnd")
    .cache.size;
  let ausente = message.guild.members.filter(a => a.presence.status == "idle")
    .cache.size;
  let offline = message.guild.members.filter(
    a => a.presence.status == "offline"
  ).cache.size;

  const verlvl = {
    0: `\`Sem restrições\``,
    1: `\`Baixa\``,
    2: `\`Mediana\``,
    3: `\`Alta\``,
    4: `\`Hardcore\``
  };

  let sicon = message.guild.iconURL;
  let dono = message.guild.owner.user.tag;
  let region = {
    brazil: "Brasil",
    "eu-central": "Europa Central",
    singapore: "Singapura",
    "us-central": "U.S Central",
    sydney: "Sydney",
    "us-east": "U.S Leste",
    "us-south": "U.S Sul",
    "us-west": "U.S Oeste",
    "eu-west": "Europa Ocidental",
    "vip-us-east": "VIP U.S Lest",
    london: "London",
    amsterdam: "Amsterdam",
    hongkong: "Hong Kong"
  };

  var texto = `${
    message.guild.channels.filter(chan => chan.type === "text").cache.size
  }`;
  var voz = `${
    message.guild.channels.filter(chan => chan.type === "voice").cache.size
  }`;

  var emojis;
  if (message.guild.emojis.cache.size === 0) {
    emojis = "0";
  } else {
    emojis = message.guild.emojis.cache.size;
  }

  var textoo = message.guild.channels.filter(chan => chan.type === "text").cache.size;
  var vozz = message.guild.channels.filter(chan => chan.type === "voice").cache.size;

  let serverembed = new Discord.MessageEmbed()

    .setAuthor(`${message.guild.name}`, message.guild.iconURL)
    .setColor("AQUA")
    .addField(
      `__**Informações**__`,
      `👑 » Proprietário: ${
        message.guild.owner
      } / \`${dono}\`\n🌎 » Região: \`${
        region[message.guild.region]
      }\`\n:open_file_folder: » Nivel de Verificação: \`${
        verlvl[message.guild.verificationLevel]
      }\`\n:laughing: » Emojis: \`${emojis}\``
    )
    .addField(
      `__**Datas**__`,
      `⚙️ » Servidor criado em: \`${moment(message.guild.createdAt).format(
        "LLL"
      )}\`\n:handshake: » Você se juntou aqui em: \`${moment(
        message.member.joinedAt
      ).format(
        "LLL"
      )}\`\n👤 » Eu me juntei ao servidor em: \`${moment(
        client.joinedAt
      ).format("LLL")}\``,
      true
    )
    .addField(
      `__**Canais**__ **(${textoo + vozz})**`,
      `💬 » Texto: \`${textoo}\`\n🎤 » Voz: \`${vozz}\``
    )
    .addField(
      `__**Membros**__ **(${message.guild.memberCount})**`,
      `🔵 Disponiveis: \`${online}\` │ ⛔ Ocupados: \`${ocupado}\` │ 🔶️ Ausentes: \`${ausente}\` │ 🔲 Offlines: \`${offline}\`\n:busts_in_silhouette: » Humanos: \`${checkMembers(
        message.guild
      )}\`\n🤖 » Robôs: \`${checkBots(
        message.guild
      )}\``
    )
    .setFooter(`ID: ${message.guild.id}`);

  message.channel.send(serverembed);
};

exports.help = {
  name: "serverinfo",
  aliases: ["guildinfo"]
};
