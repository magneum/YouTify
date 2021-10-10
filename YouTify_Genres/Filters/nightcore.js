const { YouTify_Singer } = require("../../YouTifyPlayer/YouTify_Singer.js");
const { MessageEmbed } = require("discord.js");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.run = async (client, message, args, Discord) => {
  const Channel = message.member.voice.channel;
  if (!Channel) {
    message.react("🟡");
    message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`💬Nightcore\``)
          .setAuthor(
            `🍏YouTify™`,
            `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
          )
          .setURL("https://github.com/Krakinz")
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addField(
            `\`☣️Error\``,
            `**Not connected to any VoiceChannel!**`,
            true
          )
      )
      .catch(console.error);
    return;
  }
  // ===========================================================================================================================
  // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
  // ===========================================================================================================================
  const Queue = client.queue.get(message.guild.id);
  if (!Queue) {
    message.react("🟡");
    message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`💬Nightcore\``)
          .setAuthor(
            `🍏YouTify™`,
            `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
          )
          .setURL("https://github.com/Krakinz")
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addField(
            `\`☣️Error\``,
            `**No song in Queue, Please Add Some Songs By Using  ${client.YouTix}play or  ${client.YouTix}search Command!**`,
            true
          )
      )
      .catch(console.error);
    return;
  }
  // ===========================================================================================================================
  // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
  // ===========================================================================================================================
  Queue.Filters["nightcore"] = !Queue.Filters["nightcore"];
  await YouTify_Singer(client, message, {
    Filter: true,
    Song: Queue.Songs[0],
  });
  message.channel
    .send(
      new MessageEmbed()
        .setTimestamp()
        .setColor("#43745a")
        .setTitle(`\`💬Nightcore\``)
        .setAuthor(
          `🍏YouTify™`,
          `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
        )
        .setURL("https://github.com/Krakinz")
        .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
        .setFooter(`👈🏽‍Reqstd by`, message.author.avatarURL({ dynamic: true }))
        .addField(
          `\`👄Filter Applied\``,
          `**Nightcore Filter Has Been ${
            Queue.Filters["nightcore"]
              ? "Enabled (Song Maybe Ahead)"
              : "Disabled (Song Maybe Backward)"
          }!**`,
          true
        )
        .addField(
          `\`⚡Filter Warning!\``,
          `**Note That Filter takes time to be applied to the current music as it depends on the size and lenth of audio!**`,
          true
        )
    )
    .catch(console.error);
  return;
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.help = {
  name: "nightcore",
  aliases: ["nc"],
  cooldown: 7000,
  category: "Filters",
  description: "Add/Remove nightcore Filter To/From Currently Playing Song!",
  usage: "nightcore",
  examples: ["nightcore"],
};
