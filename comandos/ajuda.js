const Discord = require("discord.js");
const c = require('../config.json');
const db = require("quick.db")

exports.run = (client, message, args) => { 
    let prefixo = db.get(`prefixo_${message.guild.id}`)
    if(!prefixo) prefixo = "%"
    
    var akuraavatar = ("https://cdn.discordapp.com/attachments/706097086432804884/832396373471002654/c7bf4b30521f197c4a7d929de5327adb.jpg")

    

  let erro = new Discord.MessageEmbed()
  .setTitle("PAINEL DE AJUDA")
  .setImage("https://cdn.discordapp.com/attachments/752633652772339712/839698337279246336/banner-noeru.png")
  .addField(`1. <:checado:835691695387050034> Úteis`, `\`Comandos que serão úteis para o servidor.\``)
  .addField(`2. <:distintivo:834667537286692894> Moderação`, `\`Comandos para manter ordem no servidor.\``)
  .addField(`3. <:fogos:836394046829756418> Diversão`, `\`Comandos para divertir os membros.\``)
  .addField(`4. <:yens:832444247847731221> Economia`, `\`Comandos de economia do bot.\``)
  .addField(`5. <:userss:835693843641794561> Interação`, `\`Comandos para os usuários interagirem entre si.\``)
  .addField(`6. <:noeru:836391824300965888> Bot`, `\`Comandos com informações sobre mim.\``)
  .addField(`7. <:configs:835691862625878088> Configuráveis`, `\`Comandos de Dashboard para configurar o seu servidor.\``)
  .setColor("DARK")
  .setFooter(`Para ver os comandos de cada categoria, use: ${prefixo}ajuda {numero da categoria}.`)
  .setThumbnail(akuraavatar)
  
if(!args[0]) {
  message.channel.send(erro) 
}

    if(args[0] === "1") {
      embed = new Discord.MessageEmbed()
          .setTitle("<:checado:835691695387050034> Utilitários")
          .addField(`\`${prefixo}addemoji <nome> <link>\``, `Adicione um emoji ao servidor de forma mais fácil`)
          .addField(`\`${prefixo}avatar <@user>\``, `Amplie o avatar de um membro`)
          .addField(`\`${prefixo}clear <quantidade>\``, `Deixe-me mensagens de um canal`)
          .addField(`\`${prefixo}clima <cidade>\``, `Veja o clima em sua e outras cidades`)
          .addField(`\`${prefixo}anuncio\``, `Crie um anúncio em um canal`)
          .addField(`\`${prefixo}servericon\``, `Amplie o avatar do servidor`)
          .addField(`\`${prefixo}serverinfo\``, `Obtenha informações do servidor`)
          .addField(`\`${prefixo}userinfo <@user>\``, `Tenha informações de um membro`)
          .addField(`\`${prefixo}spotify\``, `Veja a música que o usuário escuta no spotify.`)
          .addField(`\`${prefixo}mcskin <nome>\``, `Veja a skin de um jogador`)
          .addField(`\`${prefixo}mchead <nome>\``, `Veja a cabeça de um jogador`)
          .setColor("#303136")
      message.channel.send(embed);
    }

 else if(args[0] === "2") {
     
     let embed = new Discord.MessageEmbed()
          .setTitle("<:distintivo:834667537286692894> Moderação")
          .addField(`\`${prefixo}ban <@user> <motivo>\``, `Aplique uma punição pesada`)
          .addField(`\`${prefixo}say\``, `Faça-me falar alguma coisa`)
          .addField(`\`${prefixo}kick <@user> <motivo>\``, `Aplique uma punição leve`)
          .addField(`\`${prefixo}warn <@user> <texto>\``, `Avise um membro sobre sua má postura`)
          .setColor("#303136")
      message.channel.send(embed);
  }

 
  else if(args[0] === "3") { 
     let embed = new Discord.MessageEmbed()
          .setTitle("<:fogos:836394046829756418> Entretenimento")
          .addField(`\`${prefixo}ascii <texto>\``, `Crie um texto em ASCII`)
          .addField(`\`${prefixo}bigtext <texto>\``, `Crie uma mensagem com letras maiores O_o`)
          .addField(`\`${prefixo}lembrete <tempo>\``, `Marque um tempo para eu te lembrar`)
          .addField(`\`${prefixo}dado\``, `De 1 a 6, em qual o dado para?`)
          .addField(`\`${prefixo}duvida <texto>\``, `Tire sua dúvida comigo`)
          .addField(`\`${prefixo}meme\``, `Desestresse um pouco e veja alguns memes`)
          .addField(`\`${prefixo}piada\``, `Leia algumas piadas de tiozão`)
          .addField(`\`${prefixo}perfil <@user>\``, `Veja o perfil de um membro`)
          .addField(`\`${prefixo}reverse <texto>\``, `Leia de tras pra frente um texto`)
          .addField(`\`${prefixo}roletarussa\``, `Está a fim de brincar com a morte?`)
          .addField(`\`${prefixo}cat\``, `Veja a foto de um gato fofucho`)
          .addField(`\`${prefixo}dog\``, `Veja a foto de um doguinho lindo`)
          .setColor("#303136")
      message.channel.send(embed);
  }

  
  
else if(args[0] === "4") { 
    
     let embed = new Discord.MessageEmbed()
          .setTitle("<:yens:832444247847731221> Economia")
          .addField(`\`${prefixo}apostar <quantia>\``, `Aposte seu money comigo`)
          .addField(`\`${prefixo}daily\``, `Colete seu money diário`)
          .addField(`\`${prefixo}emprego <emprego>\``, `Escolha em qual emprego deseja ingressar e receber um salário`)
          .addField(`\`${prefixo}yen <@user>\``, `Veja o seu saldo bancário ou de algum membro`)
          .addField(`\`${prefixo}pay <@user> <quantia>\``, `Sabe o dinheiro daquela coxinha que você está devendo? Pague com o seu money virtual`)
          .addField(`\`${prefixo}slots <quantia>\``, `Puxe a alavanca e teste sua sorte`)
          .addField(`\`${prefixo}trabalhar\``, `Trabalhe e ganhe o seu salário`)
          .addField(`\`${prefixo}ricos\``, `Veja os usuários mais ricos do bot`)
          .setColor("#303136")
      message.channel.send(embed);
  }
  
 
 
 else if(args[0] === "5") { 
    
      let embed = new Discord.MessageEmbed()
          .setTitle("<:userss:835693843641794561> Interação")
          .addField(`\`${prefixo}cocegas <@user>\``, `Faça cócegas em algum usuário`)
          .addField(`\`${prefixo}hug <@user>\``, `Dê um abraço de urso em algum usuário`)
          .addField(`\`${prefixo}shippar <@user> <@user2>\``, `Veja o quanto você ama um certo membro`)
          .addField(`\`${prefixo}reputação <@user>\``, `Algum membro te ajudou? Ajude-o também, dando uma reputação ao mesmo`)
          .addField(`\`${prefixo}slap <@user>\``, `Está com raiva de um membro? Desconte dando um tapa nele(a)`)
          .addField(`\`${prefixo}kiss <@user>\``, `Dê um beijo molhado em um membro`)
          .setColor("#303136")
      message.channel.send(embed);
  }

  

else if(args[0] === "6") { 
    
   let embed = new Discord.MessageEmbed()
        .setTitle("<:noeru:836391824300965888> **Bot**")
        .addField(`\`${prefixo}convite\``, `Receba o link para me adicionar`)
        .addField(`\`${prefixo}cpu\``, `Veja o estado atual da minha CPU`)
        .addField(`\`${prefixo}botinfo\``, `Saiba mais informações sobre mim`)
        .addField(`\`${prefixo}painel\``, `Visualize o painel de Entrada e Saída do servidor`)
        .addField(`\`${prefixo}ping\``, `Quer saber em quantos ms minha latência se encontra? Utilize esse comando`)
        .addField(`\`${prefixo}uptime\``, `Veja há quanto tempo não durmo`)
        .setColor("#303136")
    message.channel.send(embed);
}

else if(args[0] === "7") { 
    
    let embed = new Discord.MessageEmbed()
        .setTitle("<:configs:835691862625878088> **Configuraveis**")
        .addField(`\`${prefixo}setprefix <novo prefixo>\``, `Adicione um novo prefixo`)
        .addField(`\`${prefixo}autorole <id do cargo>\``, `Adicione um cargo aos novos membros`)
        .addField(`\`${prefixo}welcomechannel <id do canal>\``, `Selecione um canal para receber os novos membros`)
        .addField(`\`${prefixo}welcomemessage <texto>\``, `Escreva uma mensagem para a embed`)
        .addField(`\`${prefixo}welcometitle <titulo>\``, `Escreva o titulo para a embed`)
        .addField(`\`${prefixo}leavechannel <id do canal>\``, `Selecione um canal para se despedir de membros`)
        .addField(`\`${prefixo}leavemessage <texto>\``, `Escreva uma mensagem para a embed`)
        .addField(`\`${prefixo}leavetitle <titulo>\``, `Escreva o titulo para a embed`)
        .addField(`\`${prefixo}lockcommand <id do canal>\``, `Trave o uso de comandos em um canal`)
        .addField(`\`${prefixo}messagelock <texto>\``, `Adicione uma mensagem ao travar o uso de comandos em um canal`)
        .addField(`\`${prefixo}stafflog <id do canal>\``, `Selecione um canal para enviar punições`)
        .addField(`\`${prefixo}sobremim <texto>\``, `Escreva uma biografia para seu perfil`)
        .addField(`\`${prefixo}setenquete <id do canal>\``, `Eu irei setar o canal de enquetes`)
        .addField(`\`${prefixo}setsugestao <id do canal>\``, `Deixe-me criar um sistema de sugestões para seu servidor`)
        .addField(`\`${prefixo}settopic\``, `Adicione um topico para um canal`)
        .setColor("#303136")
    message.channel.send(embed);
}
   else {
     let embedinvisivel = new Discord.MessageEmbed()
  .setColor("#303136")
  .setDescription(`Para ver os comandos de categoria, use: ${prefixo}ajuda {número da categoria}.\nEx: ${prefixo}ajuda 1`)
  message.channel.send(embedinvisivel)
   }
  
};
exports.help = { 
    name: 'ajuda',
    aliases: ['help', 'comandos', 'commands'] 
}