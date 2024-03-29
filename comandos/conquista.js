const Discord = require("discord.js");
const c = require("../config.json");
const snekfetch = require("snekfetch");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Crie uma conquista no Minecraft*`)
    .addField(`:hammer: **Uso**`, `\`${prefixo}conquista <conquista>\``, true)
    .addField(
      `:book: **Exemplo**`,
      `\`${c.prefix}conquista Pegou diamante\``,
      true
    )
    .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
    .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
    .setColor("DARK");

  let [title, contents] = args.join(" ").split("|");
  if (!contents) [title, contents] = ["Conquista desbloqueada!", title];
  let rnd = Math.floor(Math.random() * 39 + 1);

  if (
    args
      .join(" ")
      .toLowerCase()
      .includes("burn")
  )
    rnd = 38;
  if (
    args
      .join(" ")
      .toLowerCase()
      .includes("cookie")
  )
    rnd = 21;
  if (
    args
      .join(" ")
      .toLowerCase()
      .includes("cake")
  )
    rnd = 10;

  if (!args.join(" ")) return message.reply(erro);
  if (title.length > 24 || contents.length > 22)
    return message.channel.send(
      "Você inseriu mais de 22 caracteres."
    );
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(
    title
  )}&t=${encodeURIComponent(contents)}`;
  snekfetch
    .get(url)
    .then(r => message.channel.send({ files: [{ attachment: r.body }] }));
};

exports.help = {
  name: "achievement",
  aliases: ["conquista"]
};
