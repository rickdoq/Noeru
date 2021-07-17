const Discord = require("discord.js");
const Canvas = require("canvas");

const applyText = (canvas, text) => {
  if(message.author.id != "282999559385513984") return message.reply("Hey, esse comando está passando por manutenção para uma melhoria.")

  const ctx = canvas.getContext("2d");

  // Declare a base size of the font
  let fontSize = 70;

  do {
    // Assign the font to the context and decrement it so it can be measured again
    ctx.font = `${(fontSize -= 10)}px sans-serif`;
    // Compare pixel width of the text to the canvas minus the approximate avatar size
  } while (ctx.measureText(text).width > canvas.width - 300);

  // Return the result to use in the actual canvas
  return ctx.font;
};

exports.run = async (client, message, args) => {
  const member =
    message.mentions.members.first() ||
    message.guild.members.get(args[0]) ||
    message.member;

  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext("2d");

  // Since the image takes time to load, you should await it
  const background = await Canvas.loadImage(
    "https://cdn.glitch.com/8e65f938-5400-42ab-a94c-1448da140ceb%2FIMG_20200516_162310.jpg?v=1589657041599"
  );
  // This uses the canvas dimensions to stretch the image onto the entire canvas
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  // Use helpful Attachment class structure to process the file for you

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // Add an exclamation point here and below
  ctx.font = applyText(canvas, `${member.displayName}`);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(
    `${member.displayName}`,
    canvas.width / 3.4,
    canvas.height / 2.5
  );

  // Pick up the pen
  ctx.beginPath();
  // Start the arc to form a circle
  ctx.arc(120, 120, 80, 0, Math.PI * 2, true);
  // Put the pen down
  ctx.closePath();
  // Clip off the region you drew on
  ctx.clip();

  ctx.beginPath();
  ctx.strokeStyle = "#ffffff";
  ctx.lineCap = "round";
  ctx.moveTo(10, 5);
  ctx.lineTo(5, 5);
  ctx.lineWidth = 100;
  ctx.stroke();

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  // Draw a shape onto the main canvas
  ctx.drawImage(avatar, 20, 0, 195, canvas.height);

  const attachment = new Discord.Attachment(
    canvas.toBuffer(),
    "testezinho.png"
  );

  message.channel.send(attachment);
};

exports.help = {
  name: "test",
  aliases: []
};
