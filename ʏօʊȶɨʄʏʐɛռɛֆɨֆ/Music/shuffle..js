const { MessageEmbed } = require("../../ʏօʊȶɨʄʏքʟǟʏɛʀ/YouTified.djs");
// ===========================================================================================================================
// 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord..js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.run = async (client, message, args, Discord) => {
  const Channel = message.member.voice.channel;
  if (!Channel) {
    try {
      await message.react("🟡");
      await message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`💬Shuffle\``)
          .setAuthor(
            `🎧YouTify™`,
            `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
          )
          .setURL("https://github.com/Krakinz")
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addField(`\`☣️Error\``, `You Are Not Connected To Any VoiceChannel !`, true)
      );
      return;
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      message.client.channels.cache.get(`896660877091164180`).send(
        new MessageEmbed()
          .setColor(`#b66c00`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setAuthor(`🎧YouTify™ by KrakinzLab™️`)
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
            message.author.avatarURL({ dynamic: true })
          ).setDescription(`
Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.
Error report:
*${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
      );
      // ====================================================—••÷[🎧YouTify™]÷••—====================================================
      message.channel.send("📙: sorry+code ORANGE message");
      message.react(`😔`);
      message.channel.send(
        new MessageEmbed()
          .setTitle(`\`\`\`🎧YouTify™ encountered an error.\`\`\``)
          .setTimestamp()
          .setColor(`#b66c00`)
          .setAuthor(`🎧YouTify™ by KrakinzLab™️`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setDescription(`\`Please report to either\`
🔰[In ᴅɪꜱᴄᴏʀᴅ channel](https://discord.gg/y2PtYAJgpy)
🔰[In ᴛᴇʟᴇɢʀᴀᴍ group](https://t.me/Krakns)

\`Error🔻Caught and Auto Sent to Dev Server!\`

\`Fix?\`
Try use ?leave and play again!
Try use ?clean and play again!`)
      );
      console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
    }
    return;
  }
  // ===========================================================================================================================
  // 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord..js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
  // ===========================================================================================================================
  const Queue = client.queue.get(message.guild.id);
  if (!Queue) {
    try {
      await message.react("🟡");
      await message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`💬Shuffle\``)
          .setAuthor(
            `🎧YouTify™`,
            `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
          )
          .setURL("https://github.com/Krakinz")
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addField(
            `\`☣️Error\``,
            `No song in Queue, Please Add Some Songs By Using  ${client.YouTix}play or  ${client.YouTix}search Command!`,
            true
          )
      );
      return;
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      message.client.channels.cache.get(`896660877091164180`).send(
        new MessageEmbed()
          .setColor(`#b66c00`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setAuthor(`🎧YouTify™ by KrakinzLab™️`)
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
            message.author.avatarURL({ dynamic: true })
          ).setDescription(`
Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.
Error report:
*${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
      );
      // ====================================================—••÷[🎧YouTify™]÷••—====================================================
      message.channel.send("📙: sorry+code ORANGE message");
      message.react(`😔`);
      message.channel.send(
        new MessageEmbed()
          .setTitle(`\`\`\`🎧YouTify™ encountered an error.\`\`\``)
          .setTimestamp()
          .setColor(`#b66c00`)
          .setAuthor(`🎧YouTify™ by KrakinzLab™️`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setDescription(`\`Please report to either\`
🔰[In ᴅɪꜱᴄᴏʀᴅ channel](https://discord.gg/y2PtYAJgpy)
🔰[In ᴛᴇʟᴇɢʀᴀᴍ group](https://t.me/Krakns)

\`Error🔻Caught and Auto Sent to Dev Server!\`

\`Fix?\`
Try use ?leave and play again!
Try use ?clean and play again!`)
      );
      console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
    }
    return;
  }
  // ===========================================================================================================================
  // 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord..js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
  // ===========================================================================================================================
  const Current = await Queue.Songs.shift();
  Queue.Songs = Queue.Songs.sort(() => Math.random() - 0.5);
  await Queue.Songs.unshift(Current);

  try {
    await message.react("🟢");
    await message.channel.send(
      new MessageEmbed()
        .setTimestamp()
        .setColor("#43745a")
        .setTitle(`\`💬Shuffle\``)
        .setAuthor(
          `🎧YouTify™`,
          `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
        )
        .setURL("https://github.com/Krakinz")
        .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
        .setFooter(
          `👈🏽‍Reqstd by ${message.author.username}`,
          message.author.avatarURL({ dynamic: true })
        )
        .addField(
          `\`🥳Shuffled\``,
          `YouTify™ Music Queue has been shuffled!`,
          true
        )
    );
    return;
  } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
    message.client.channels.cache.get(`896660877091164180`).send(
      new MessageEmbed()
        .setColor(`#b66c00`)
        .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
        .setAuthor(`🎧YouTify™ by KrakinzLab™️`)
        .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
        .setFooter(
          "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
          message.author.avatarURL({ dynamic: true })
        ).setDescription(`
Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.
Error report:
*${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
    );
    // ====================================================—••÷[🎧YouTify™]÷••—====================================================
    message.channel.send("📙: sorry+code ORANGE message");
    message.react(`😔`);
    message.channel.send(
      new MessageEmbed()
        .setTitle(`\`\`\`🎧YouTify™ encountered an error.\`\`\``)
        .setTimestamp()
        .setColor(`#b66c00`)
        .setAuthor(`🎧YouTify™ by KrakinzLab™️`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
        .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
        .setDescription(`\`Please report to either\`
🔰[In ᴅɪꜱᴄᴏʀᴅ channel](https://discord.gg/y2PtYAJgpy)
🔰[In ᴛᴇʟᴇɢʀᴀᴍ group](https://t.me/Krakns)

\`Error🔻Caught and Auto Sent to Dev Server!\`

\`Fix?\`
Try use ?leave and play again!
Try use ?clean and play again!`)
    );
    console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
  }
  return;
};
// ===========================================================================================================================
// 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord..js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.help = {
  name: "shuffle",
  yougen: "Sebeta-v9.6.79ie0",
  aliases: ["sfl"],
  cooldown: 10000,
  category: "Music",
  description: "Shuffle Music Queue!",
  usage: "Shuffle",
  examples: ["shuffle"],
};
