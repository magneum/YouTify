const { _Youtify_ } = require("../_Youtify_.js");
const { MessageEmbed } = require("discord.js");
const Discord = require(`discord.js`);

module.exports.run = async (client, message, args, Discord) => {
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

  const Embed = new Discord.MessageEmbed()
    .setColor("#8DB600")
    .setAuthor(
      "earwax",
      message.author.avatarURL({
        dynamic: true,
      })
    )
    .setDescription(
      `earwax Filter Has Been ${
        Queue.Filters["earwax"]
          ? "Disabled (Song Maybe Backward)"
          : "Enabled (Song Maybe Ahead)"
      }!`
    )
    .setTimestamp();

  Queue.Filters["earwax"] = !Queue.Filters["earwax"];

  await _Youtify_(client, message, {
    Filter: true,
    Song: Queue.Songs[0],
  });

  return message.channel.send(Embed);
};

module.exports.help = {
  name: "earwax",
  cooldown: 7000,
  category: "Filters",
  description: "Add/Remove earwax Filter To/From Currently Playing Song!",
  usage: "earwax",
  examples: ["earwax"],
};
