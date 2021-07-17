const Discord = require("discord.js");
const db = require("quick.db");

const config = require("./config.json");
const fs = require("fs");

// const verificarVotos = require('./verificarVotos.js');

// const bplHelper = require("bpl-helper");
// const helper = new bplHelper("706095889973772388");

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);

console.log("=========================")
console.log("|| CARREGANDO COMANDOS ||")
console.log("=========================")
  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    console.log(`${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.on("error", err => {
  console.log(err.message);
});



client.on("ready", () => {
  
  const embedonline = new Discord.MessageEmbed()
  .setTitle("<:check:832445897207447572> | Bot online")
  .addField(`<:enter:832443100026765342> **Servidores conectados:**`, `${client.guilds.cache.size}`)
  .addField(`<:user:821946962805915718> **Usuários:**`, `${client.users.cache.size}`)
  .addField(`<:hash:821946983978893312> **Canais**`, `${client.channels.cache.size}`)
  .setColor("DARK")
  client.channels.cache.get("834443944116486154").send(embedonline)
  
  console.log("=========================")
  console.log("|| COMANDOS CARREGADOS ||")
  console.log("=========================")

let canalum = client.channels.cache.get("711647383804706858")
canalum.edit({ name: "👥 USERS: " + client.users.cache.size })

let canal = client.channels.cache.get("711647299025109022")
canal.edit({ name: "📋 GUILDS: " + client.guilds.cache.size })

  var tabela = [
    { name: "%ajuda | Nova Atualização.", type: "STREAMING" },
    { name: `%ajuda | Meu programador: RickDOQ#5026`, type: "STREAMING" },
    { name: `%ajuda | Meu prefixo é %`, type: "STREAMING" },
    {
      name: `%ajuda | Estou ajudando ${client.users.cache.size} membros.`,
      type: "STREAMING"
    },
    { name: `%ajuda | Estou em ${client.guilds.cache.size} servidores.`, type: "PLAYING" }
  ];

  // ============== MANUTENÇÃO =======================
/* var tabela = [
     { name: "🔔 EM MANUTENÇÃO", type: "STREAMING" },
     { name: "🔕 EM MANUTENÇÃO", type: "STREAMING" }
    ]; */

  function setStatus() {
    let altstatus = tabela[Math.floor(Math.random() * tabela.length)];
    client.user.setActivity({
      name: altstatus.name,
      game: altstatus,
      type: altstatus.type
    });
  }
  setStatus();
  setInterval(() => setStatus(), 15000);
  
  function dbBackup() {

const files = ["./json.sqlite"]

client.channels.cache.get("837488576257589268").send({ files })
  }
  dbBackup();
  setInterval(() => dbBackup(), 7200000)
});


/* helper.on("ready", (socket) => {
  console.log("[UpVote] Conectado!");
});

helper.on("vote", data => {
  let embed = Discord.MessageEmbed()
  .setTitle("↗️ | Up Vote")
  .setDescription(`Obrigado, o usuário ${data.user.username} (${data.user.id})\nAgora eu tenho: ${data.bot.votos} votos.`)
  .setColor("#303136")
  client.channels.cache.get("753388096837648474").send(embed)
  
  let embed2 = Discord.MessageEmbed()
  .setTitle("↗️ | Up Vote")
  .setDescription(`Muito obrigado por ter dado Upvote, como recompensa irei te dar um multiplicador (2x) de salário com duração de 8 horas. Assim que acabar, você poderá dar mais um Upvote.`)
  client.users.cache.get(`${data.user.id}`).send(embed2)

   db.set(`booster_${user.id}`, 2);
   db.set(`boostertime_${user.id}`, Date.now());

});*/


  client.on("guildMemberAdd", guildMember => {
  let id = db.get(`autoRole_${guildMember.guild.id}`)
  let role = guildMember.guild.roles.cache.find(r => r.id == id);
  if(role){
  try{
    guildMember.roles.add(role);
  } catch (error) {
    console.log('Cargo não encontrado!');  
  }
 }
  

  var mensagem = db.get(`mensagem_${guildMember.guild.id}`);
  if(!mensagem) var mensagem = "Seja muito bem vindo ao servidor, espero que você goste do server."
  var titulo = db.get(`titulo_${guildMember.guild.id}`);
  if(!titulo) var titulo = "Bem Vindo!"
  var canal = guildMember.guild.channels.cache.get(
    db.get(`autoChannel_${guildMember.guild.id}`)
  );
  if (!canal) return;
  let embed = new Discord.MessageEmbed()

    .setTitle(titulo)
    .setDescription(mensagem)
    .setColor("DARK")
    .setFooter(`ID do Membro: ${guildMember.id}`, guildMember.user.avatarURL());

  canal.send(`${guildMember}`, embed);

});

client.on("guildMemberRemove", guildMember => {
  
  var mensagem = db.get(`removeMessage_${guildMember.guild.id}`);
  if(!mensagem) var mensagem = "Espero que você volte logo.";
  var titulo = db.get(`removeTitle_${guildMember.guild.id}`);
  if(!titulo) var titulo = "Adeus";

  var canal = guildMember.guild.channels.cache.get(
    db.get(`removeCanal_${guildMember.guild.id}`)
  );
  if(!canal)return;
  let embed = new Discord.MessageEmbed()

    .setTitle(titulo)
    .setDescription(mensagem)
    .setColor("DARK")
    .setFooter(`ID do Membro: ${guildMember.id}`, guildMember.user.avatarURL);

  canal.send(`\`${guildMember.user.tag}\``, embed);


});

client.on("guildCreate", guild => {
  var canal = client.channels.cache.get("706933244985212930");

let embed = new Discord.MessageEmbed()
.setTitle("<:check:832445897207447572> | Bot adicionado")
.setDescription(`Servidor: \`${guild.name} [${guild.id}]\`\n👥 » Membros: \`${guild.memberCount}\`\n👑 » Proprietário: \`${guild.owner.user.tag}\`\n🏳️ » Região: \`${guild.region}\``)
.setColor("#303136")

  canal.send(embed)
});

client.on("guildDelete", guild => {
  var canal = client.channels.cache.get("706933244985212930");

  let embed = new Discord.MessageEmbed()
.setTitle("🔰 | Bot removido")
.setDescription(`Servidor: \`${guild.name} [${guild.id}]\`\n👥 » Membros: \`${guild.memberCount}\`\n👑 » Proprietário: \`${guild.owner.user.tag}\`\n🏳️ » Região: \`${guild.region}\``)
.setColor("#303136")

  canal.send(embed)
});

client.on("message", async message => {
/*    verificarVotos.verificaVotos(message, function(user){
        // Modifique este bloco de acordo com a função que você deseja
      const upvote = new Discord.MessageEmbed()
      .setTitle("Obrigada!")
      .setDescription ("Olá, vim aqui te agradecer por ter dado UpVote em mim. Você pode votar novamente em mim daqui a 8 horas. ❤️\n\nVocê recebeu uma recompensa: \``¥ 800\``")
      .setColor("#303136");
      
        user.send(upvote);
       
       db.add(`reais_${user}`)
 const channel = client.channels.cache.get("753388096837648474") 
channel.send(`O usuário ${user} votou em mim.`)
        
})*/
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;


let customprefix = db.get(`prefixo_${message.guild.id}`)
if(!customprefix) customprefix = "%"

if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
const embedinvisivelmencao = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`Olá, você precisa de ajudar? Aqui vai:\nMeu prefixo: **${customprefix}**\nVer comandos: **${customprefix}ajuda**`)
  message.channel.send(embedinvisivelmencao)
}



  var messagem = db.get(`messagem_${message.guild.id}`);
  var idmessage = db.get(`messageid_${message.guild.id}`);

if(!messagem) messagem = "Hey, esse chat está proibido de usar meus comandos.\nHey, this chat is forbidden to use my commands."
  if (message.channel.id === idmessage) {
    if (message.content.startsWith(`${customprefix}`)) {
      return message.channel.send(messagem);
    }
  }
  
  
  var args = message.content.substring(customprefix.length).split(" ");
  if (!message.content.startsWith(customprefix)) {
  }
  
  
const boostuser = message.author;
const timeoutboost = 2.88e+7;  

const booststatus = db.get(`booster_${boostuser.id}`);
const boosttime = db.get(`boostertime_${boostuser.id}`);


if (booststatus != "1" && booststatus !== null) {
    if (boosttime !== null && timeoutboost - (Date.now() - boosttime) < 0) {
      db.set(`booster_${boostuser.id}`, 1);
      db.set(`boostertime_${boostuser.id}`, null);
    }
  }

  let prefix = customprefix;
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix) || message.author.bot) return;

let blacklist = db.get(`blacklist_${message.author.id}`);
if(blacklist == true) return message.reply("você está banido de usar meus comandos, você acha que isso é um bug? Entre no meu servidor de suporte.");
  
if(message.author.id != "282999559385513984") {
  let reiniciar = db.get(`manutencao`);
  if(reiniciar == true) return message.reply(`eu estou em modo de manutenção! Por isso, tente novamente mais tarde.\nI'm in maintenance mode, try again later.`);
}




  let command =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (command) {
    command.run(client, message, args);
    
    const channel = client.channels.cache.get("837128980809121833");
    const cmdembed = new Discord.MessageEmbed()
  .setTitle("📜 | Comando usado")
  .setDescription(`👤 Usuário: \`${message.author.tag} [${message.author.id}]\`\n🏓 Comando: \`${message.content.split(" ")}\`\n📂 Servidor: \`${message.guild.name} [${message.guild.id}]\``)
  .setColor("#303136")
  channel.send(cmdembed)
  
  }
});

client.login(config.token);
