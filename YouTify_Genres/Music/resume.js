const { MessageEmbed } = require("../../YouTifyPlayer/YouTified.djs");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.run = async (client, message, args, Discord) => {
  const Channel = message.member.voice.channel;
  if (!Channel) return message.channel.send("Error: No Voice Channel!");

  const Queue = client.queue.get(message.guild.id);
  if (!Queue)
    return message.channel.send(
      "Error: No Queue, Please Add Some Songs By Using Play & Search Command!"
    );

  if (Queue.Playing) return message.channel.send("Error: Not Paused!");

  Queue.Playing = true;
  Queue.Connection.dispatcher.resume();

  try {
    await message.react("✅");
  } catch (e) {
    return message.channel.send("Error: Unknown").then(() => console.log(e));
  }
};

module.exports.help = {
  name: "resume",
  aliases: ["r", "rs"],
  cooldown: 10000,
  category: "Music",
  description: "Resume Currently Paused Song!",
  usage: "Resume",
  examples: ["resume"],
};
