const { MessageEmbed } = require("discord.js");
const Discord = require(`discord.js`);
module.exports.run = async (client, message, args) => {
  const Channel = message.member.voice.channel,
    Bot = message.guild.me.voice.channel;
  if (!Channel) {
    message.channel.send("📕: error+code RED message").catch(console.error);
    message.react(`❌`);
    message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b60000`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setURL(`https://github.com/Krakinz?tab=repositories`)
          .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
            message.author.avatarURL({
              dynamic: true,
            })
          ).setDescription(`${message.author}
\`Error\`
**Not connected to any Voice Channel yet!  Please Join first**`)
      )
      .catch(console.error);
    return;
  }
  if (!Bot) return message.channel.send("Error: No Bot Voice Channel!");
  if (Bot.id != Channel.id)
    return message.channel.send("Error: Different Voice Channels!");
  if (
    !message.member.hasPermission("MANAGE_CHANNELS") &&
    Bot.members.length > 2
  )
    return message.channel.send("Error: Request Cancelled Due To 2+ Members");

  try {
    await Bot.leave();
    await message.react("✅");
    await message.channel.send("📗: ok status message").catch(console.error);
  } catch (YouTify_Error) {
    return message.channel
      .send("Error: Unknown")
      .then(() => console.log(YouTify_Error));
  }
};

module.exports.help = {
  name: "leave",
  aliases: ["leavevc", "lv"],
  cooldown: 7000,
  category: "YouTify",
  description: "Leave Voice Channel!",
  usage: "Leave",
  examples: ["leave"],
};
