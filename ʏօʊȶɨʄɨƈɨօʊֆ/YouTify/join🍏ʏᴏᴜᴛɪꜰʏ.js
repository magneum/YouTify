const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
const ᴅɪꜱᴄᴏʀᴅ = require(`../ӄʀǟӄɨռʐʟǟɮ`);
module.exports.run = async (client, message, args) => {
  const Channel = message.member.voice.channel;
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
  if (Channel.full) return message.channel.send("Error: Channel Is Full!");
  if (!Channel.joinable || !Channel.speakable)
    return message.channel.send("Error: Not Joinable Or Speakable!");
  if (message.guild.me.voice.channel)
    return message.channel.send(
      `Error: Already Connected To ${
        message.guild.me.voice.channel.id == Channel.id ? "Your" : "A"
      } Voice Channel!`
    );

  try {
    await Channel.join().then((Connection) => {
      Connection.voice.setSelfDeaf(true);
      message.react("✅");
      message.channel.send("📗: ok status message").catch(console.error);
    });
  } catch (YouTify_Error) {
    return message.channel
      .send("Error: Unknown")
      .then(() => console.log(YouTify_Error));
  }
};

module.exports.help = {
  name: "join",
  aliases: ["joinvc", "jn"],
  cooldown: 7000,
  category: "YouTify",
  description: "Join Voice Channel!",
  usage: "Join",
  examples: ["join"],
};
