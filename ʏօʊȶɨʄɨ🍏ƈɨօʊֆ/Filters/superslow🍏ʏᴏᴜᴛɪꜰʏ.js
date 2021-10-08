const { _Youtify_ } = require("../🍏/_Youtify_.js");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");

module.exports.run = async (client, message, args, ᴅɪꜱᴄᴏʀᴅ) => {
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
          .setURL(`https://github.com/Krakinz`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
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
  const Queue = client.queue.get(message.guild.id);
  if (!Queue) {
    message.channel.send("📕: error+code RED message").catch(console.error);
    message.react(`❌`);
    message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b60000`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setURL(`https://github.com/Krakinz`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
            message.author.avatarURL({
              dynamic: true,
            })
          ).setDescription(`${message.author}
\`Error\`
**Nothing in Queue.\nPlease Add Some Songs By Using \` ${client.ʏᴏᴜꜰɪx}play \` or \` ${client.ʏᴏᴜꜰɪx}search \` Command!**`)
      )
      .catch(console.error);
    return;
  }

  const Embed = new ᴅɪꜱᴄᴏʀᴅ.MessageEmbed()
    .setColor("#8DB600")
    .setAuthor(
      "superslow",
      message.author.avatarURL({
        dynamic: true,
      })
    )
    .setDescription(
      `superslow Filter Has Been ${
        Queue.Filters["superslow"]
          ? "Disabled (Song Maybe Backward)"
          : "Enabled (Song Maybe Ahead)"
      }!`
    )
    .setTimestamp();

  Queue.Filters["superslow"] = !Queue.Filters["superslow"];

  await _Youtify_(client, message, {
    Filter: true,
    Song: Queue.Songs[0],
  });

  return message.channel.send(Embed);
};

module.exports.help = {
  name: "superslow",
  cooldown: 7000,
  category: "Filters",
  description: "Add/Remove superslow Filter To/From Currently Playing Song!",
  usage: "superslow",
  examples: ["superslow"],
};
