const db = require("quick.db"); // Puxando a nossa DataBase. *Instale utilizando: npm i quick.db --save
const Discord = require("discord.js"); // Puxando a livraria Discord.js

exports.run = async (client, message, args) => {
  var emprego = await db.get(`trabaio_${message.author.id}`); // Puxando o 'trabaio', que iremos utilizar para definir na DB o trabalho dos usuários

if (emprego >= "1" )  {
  let embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription("Você já tem um emprego. Se demita antes de conseguir um novo.")
  message.channel.send(embedinvisivel)
  } else  {

  
  
  const Programador = 1;
  const Designer = 2;
  const Streamer = 3;
  const Lixeiro = 4;
  let embed = new Discord.MessageEmbed() // Criando uma embed
    .setDescription(
      `Escolha o seu emprego, clicando no emoji correspondente.\n\n💻 = Programador\n🎨  = Designer\n🎥 = Streamer\n♻️ = Lixeiro`
    )
    .setColor("#303136");

  message.channel.send(embed).then(msg => {
    // definindo a função 'then' como 'msg'

    msg
      .react("💻")
      .then(() => msg.react("🎨"))
      .then(() => msg.react("🎥"))
      .then(() => msg.react("♻️"));

    const filter = (reaction, user) => {
      // Criando um filtro para quem clicou no emoji
      return (
        ["💻", "🎨", "🎥", "♻️"].includes(reaction.emoji.name) &&
        user.id === message.author.id
      ); // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
    msg
      .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] }) // retornnando com as reações
      .then(collected => {
        // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();

        if (reaction.emoji.name === "💻") {
          // Caso o usuário clique no emoji referente à Programador
          
    let embedemprego = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`Agora você tem um emprego, comece a trabalhar.`)
  message.channel.send(embedemprego)
 
          db.set(`trabaio_${message.author.id}`, Programador); // iremos adicionar 1 (um) na DB, que iremos usar como Programador
        }

        if (reaction.emoji.name === "🎨") {
          // Agora, caso o usuário clique no outro emoji, referente à Designer
              let embedemprego = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`Agora você tem um emprego, comece a trabalhar.`)
  message.channel.send(embedemprego)
  db.set(`trabaio_${message.author.id}`, Designer); // iremos adicionar 2 (dois) na DB, que iremos definir como Designer
        }

        if (reaction.emoji.name === "🎥") {
          // Caso o usuário clique no emoji referente à Programador
              let embedemprego = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`Agora você tem um emprego, comece a trabalhar.`)
  message.channel.send(embedemprego)
  db.set(`trabaio_${message.author.id}`, Streamer); // iremos adicionar 1 (um) na DB, que iremos usar como Programador
        }

        if (reaction.emoji.name === "♻️") {
          // Caso o usuário clique no emoji referente à Programador
              let embedemprego = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`Agora você tem um emprego, comece a trabalhar.`)
  message.channel.send(embedemprego)
  db.add(`trabaio_${message.author.id}`, Lixeiro); // iremos adicionar 1 (um) na DB, que iremos usar como Programador
        }
      });
  });
  }
};

exports.help = {
  name: "emprego",
  aliases: ["trabalho", "job"]
};
