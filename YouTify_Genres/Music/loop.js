const { MessageEmbed } = require("../../YouTifyPlayer/YouTified.djs");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.run = async (client, message, args, Discord) => {
  const Channel = message.member.voice.channel;
  if (!Channel) {
    await message.react("🟡");
    await message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`💬Loop\``)
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
            `**You are Not connected to any VoiceChannel!**`,
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
    await message.react("🟡");
    await message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`💬Loop\``)
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
  Queue.Loop = Queue.Loop ? false : true;
  await message.react("🟢");
  await message.channel
    .send(
      new MessageEmbed()
        .setTimestamp()
        .setColor("#43745a")
        .setTitle(`\`💬Loop\``)
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
          `\`🔁Loop\``,
          `**Loop Has Been ${Queue.Loop ? "Enabled" : "Disabled"}!**`,
          true
        )
    )
    .catch(console.error);
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.help = {
  name: "loop",
  aliases: ["lp", "l"],
  cooldown: 10000,
  category: "Music",
  description: "On Loop Or Off Loop!",
  usage: "Loop",
  examples: ["loop"],
};
