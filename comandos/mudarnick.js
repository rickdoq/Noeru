exports.run = (client, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")

  const membro = message.member;

  membro.setNickname(`Teste`);
};
exports.help = {
  name: "nick",
  aliases: ["changenick"]
};
