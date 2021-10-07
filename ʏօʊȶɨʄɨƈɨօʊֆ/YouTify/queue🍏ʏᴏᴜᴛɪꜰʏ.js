const { MessageEmbed } = require("discord.js");
const Discord = require(`discord.js`);
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
  const Queue = client.queue.get(message.guild.id);
  if (!Queue || !Queue.Songs) {
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
**Nothing in Queue.\nPlease Add Some Songs By Using \` ${client.ʏᴏᴜꜰɪx}play \` or \` ${client.ʏᴏᴜꜰɪx}search \` Command!**`)
      )
      .catch(console.error);
    return;
  }

  const Songs = await Queue.Songs.map((S, I) => {
    const Position = I + 1 == 1 ? "Now Playing" : I - 1 == 0 ? 1 : I + 1;
    return `${Position} | ${
      S.Title.length > 50 ? `${S.Title.slice(0, 50)}...` : S.Title
    }${Position == "Now Playing" ? "\n" : ""}`;
  }).join("\n");

  if (!Songs)
    return message.channel.send(
      "Error: No Queue, Please Add Some Songs By Using Play & Search Command!"
    );

  return message.channel.send(Songs, {
    split: {
      char: "\n",
    },
  });
};

module.exports.help = {
  name: "queue",
  aliases: ["q", "qu"],
  cooldown: 7000,
  category: "YouTify",
  description: "Get YouTify Queue!",
  usage: "Queue",
  examples: ["queue"],
};
