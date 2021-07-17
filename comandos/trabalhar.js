const db = require("quick.db"); // Puxando a nossa DataBase. *Instale utilizando: npm i quick.db --save
const Discord = require("discord.js"); // Puxando a livraria Discord.js
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
  var emprego = await db.get(`trabaio_${message.author.id}`); // Puxando o 'trabaio', que iremos utilizar para definir na DB o trabalho dos usuários
  if (emprego === null) return message.reply("você não tem um emprego. Para conseguir um, digite: `%emprego`"); // Caso o usuário tenha 1 (um) registrado na DB, ele será reconhecido como Programador
  if (emprego === 0) return message.reply("você não tem um emprego. Para conseguir um, digite: `%emprego`"); // Ou, caso o usuário, tenha 2 (dois) registrado na DB, ele será reconhecido como Designer

  const Programador = 1;
  const Designer = 2;
  const Streamer = 3;
  const Lixeiro = 4;

  let empregojson;

  let user = message.author;
  let author = await db.fetch(`work_${user.id}`);
  
  let valor = 100;
  
  let boost = db.get(`booster_${user.id}`);  
  
  if(boost === null){
    boost = 1;
  }
  
  let valortotal = valor * boost;

  const embedcerto = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`Você concluiu com o seu trabalho e recebeu ${valortotal} yens.`);
  
  const embederrado = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`Você errou o seu trabalho e não irá receber.`)
  
  let timeout = 900000;
      
  if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
      .setColor("#303136")
      .setDescription(
        `Você trabalhou recentemente.\n\nTente novamente daqui a ${time.minutes}m ${time.seconds}s `
      );
    return message.channel.send(timeEmbed);
  }

  //PROGRAMADOR
  else if (emprego === Programador) {
    empregojson = require("../respostas/programador.json");
      
  }

  // Designer
  else if (emprego === Designer) {
    empregojson = require("../respostas/designer.json");
  }

  //STREAMER
  else if (emprego === Streamer) {
    empregojson = require("../respostas/streamer.json");
  }

  // Lixeiro
  else if (emprego === Lixeiro) {
    empregojson = require("../respostas/lixeiro.json");
  }

  const item = empregojson[Math.floor(Math.random() * empregojson.length)];

  let embed = new Discord.MessageEmbed() // Criando uma embed
    .setDescription(
        item.pergunta
    )
    .setColor("#303136");
    db.set(`work_${user.id}`, Date.now());
    message.channel.send(embed).then(msg => {
    // definindo a função 'then' como 'msg'
    if(item.quantopcoes === 2){
        msg
        .react("1️⃣")
        .then(() => msg.react("2️⃣"));
    }
    if(item.quantopcoes === 3){
        msg
        .react("1️⃣")
        .then(() => msg.react("2️⃣"))
        .then(() => msg.react("3️⃣"));
    }

    

    const filter = (reaction, user) => {
        // Criando um filtro para quem clicou no emoji
        return (
        ["1️⃣", "2️⃣", "3️⃣"].includes(reaction.emoji.name) &&
        user.id === message.author.id
        ); // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
    msg
        .awaitReactions(filter, { max: 1, time: 30000, errors: ["time"] }) // retornnando com as reações
        .then(collected => {
        // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();

        if (reaction.emoji.name === "1️⃣") {
            if("[\"1️⃣\"]" === JSON.stringify(item.resposta)){
                // Caso o usuário clique no emoji referente à Programador
                message.channel.send(embedcerto)
                msg.reactions.removeAll(embed);
                db.set(`work_${user.id}`, Date.now());
                db.add(`reais_${message.author.id}`, valortotal); // iremos adicionar 1 (um) na DB, que iremos usar como Programador
            }
            else{
                // Caso o usuário clique no emoji referente à Programador
                message.channel.send(embederrado)
                msg.reactions.removeAll(embed);
                db.set(`work_${user.id}`, Date.now()); // iremos adicionar 1 (um) na DB, que iremos usar como Programador
            }
        }

        if (reaction.emoji.name === "2️⃣") {
            if("[\"2️⃣\"]" === JSON.stringify(item.resposta)){
                // Caso o usuário clique no emoji referente à Programador
                message.channel.send(embedcerto)
                msg.reactions.removeAll(embed);
                db.set(`work_${user.id}`, Date.now());
                db.add(`reais_${message.author.id}`, valortotal); // iremos adicionar 1 (um) na DB, que iremos usar como Programador
            }
            else{
                // Caso o usuário clique no emoji referente à Programador
                message.channel.send(embederrado)
                msg.reactions.removeAll(embed);
                db.set(`work_${user.id}`, Date.now()); // iremos adicionar 1 (um) na DB, que iremos usar como Programador
            }
          
        }

        if (reaction.emoji.name === "3️⃣") {
            if("[\"3️⃣\"]" === JSON.stringify(item.resposta)){
                // Caso o usuário clique no emoji referente à Programador
                message.channel.send(embedcerto)
                msg.reactions.removeAll(embed);
                db.set(`work_${user.id}`, Date.now());
                db.add(`reais_${message.author.id}`, valortotal); // iremos adicionar 1 (um) na DB, que iremos usar como Programador
            }
            else{
                // Caso o usuário clique no emoji referente à Programador
                message.channel.send(embederrado)
                msg.reactions.removeAll(embed);
                db.set(`work_${user.id}`, Date.now()); // iremos adicionar 1 (um) na DB, que iremos usar como Programador
            }
        }
        });
    });
  

};

exports.help = {
  name: "work",
  aliases: ["trabalhar"]
};
