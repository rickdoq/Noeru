const Discord = require("discord.js");
const c = require("../config.json");
var jimp = require("jimp");

exports.run = async (client, message, args) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")

  const member = message.author;

  let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK); //We declare a 32px font
  let font64 = await jimp.loadFont(jimp.FONT_SANS_64_WHITE); //We declare a 64px font
  let bfont64 = await jimp.loadFont(jimp.FONT_SANS_64_BLACK);
  let mask = await jimp.read("https://i.imgur.com/552kzaW.png"); //We load a mask for the avatar, so we can make it a circle instead of a shape
  let welcome = await jimp.read(
    "http://rovettidesign.com/wp-content/uploads/2011/07/clouds2.jpg"
  ); //We load the base image

  jimp.read(message.member.displayAvatarURL({ dynamic: true })).then(avatar => {
    //We take the user's avatar
    avatar.resize(200, 200); //Resize it
    mask.resize(200, 200); //Resize the mask
    avatar.mask(mask); //Make the avatar circle
    welcome.resize(1000, 300);

    welcome.print(font64, 265, 55, `Bem vindo ${member.user.username}`); //We print the new user's name with the 64px font
    welcome.print(bfont64, 265, 125, `Ao ${member.guild.name}`);
    welcome.print(
      font64,
      265,
      195,
      `Agora temos ${member.guild.memberCount} users`
    );
    welcome.composite(avatar, 40, 55).write("Teste2.png"); //Put the avatar on the image and create the Welcome2.png bot
    try {
      message.channel.send(``, { files: ["Teste2.png"] }); //Send the image to the channel
    } catch (e) {
      // dont do anything if error occurs
      // if this occurs bot probably can't send images or messages
    }
  });
};
exports.help = {
  name: "tt",
  aliases: []
};
