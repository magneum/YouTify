const { YouTify_Singer } = require("../../ʏօʊȶɨʄʏքʟǟʏɛʀ/YouTify_Singer..js");
const { MessageEmbed } = require("../../ʏօʊȶɨʄʏքʟǟʏɛʀ/YouTified.djs");
const { Filters } = require("../../ʏօʊȶɨʄʏքʟǟʏɛʀ/Filters..js");
// ===========================================================================================================================
// 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord..js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.run = async (client, message, args, Discord) => {
  const Channel = message.member.voice.channel;
  if (!Channel) {
    try {
      message.react("🟡");
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`💬Clean\``)
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
      message.react("🟡");
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`💬Clean\``)
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
  let Filter = args[0],
    All = await Object.keys(await Filters());
  if (!Filter) {
    try {
      message.react("🟡");
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`💬Clean\``)
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
          .addField(`\`☣️Error\``, `No Filter name specified!`, true)
          .addField(
            `\`🎶Filter Names\``,
            All.map((E) => E[0].toUpperCase() + E.slice(1)).join(", "),
            true
          )
      );
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
  if (!All.includes(Filter.toLowerCase())) {
    try {
      message.react("🟡");
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`💬Clean\``)
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
          .addField(`\`☣️Error\``, `No Such Filter Found For\n${Filter}`, true)
          .addField(
            `\`🎶Filter Names\``,
            All.map((E) => E[0].toUpperCase() + E.slice(1)).join(", "),
            true
          )
      );
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
  if (
    Object.keys(Queue.Filters).length >= 2 &&
    !Queue.Filters[Filter.toLowerCase()]
  ) {
    try {
      message.react("🟡");
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`💬Clean\``)
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
            `Max Filters Allowed at a time is 2! (to keep bot and music not to DEATHMODE)`,
            true
          )
      );
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
  try {
    Filter = Filter.toLowerCase();
    Queue.Filters[Filter] = !Queue.Filters[Filter];
    await YouTify_Singer(client, message, {
      Filter: true,
      Song: Queue.Songs[0],
    });
    message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#43745a")
          .setTitle(`\`💬Bassboost\``)
          .setAuthor(
            `🎧YouTify™`,
            `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
          )
          .setURL("https://github.com/Krakinz")
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setFooter(
            `👈🏽‍Reqstd by`,
            message.author.avatarURL({ dynamic: true })
          )
          .addField(
            `\`👄Filter Applied\``,
            `Bassboost Filter Has Been ${
              Queue.Filters["bassboost"]
                ? "✅Enabled (Song Maybe Ahead)"
                : "❌Disabled (Song Maybe Backward)"
            }!`,
            true
          )
          .addField(
            `\`⚡Filter Warning!\``,
            `Note That Filter takes time to be applied to the current music as it depends on the size and lenth of audio!`,
            true
          )
      )
      .catch(console.error);
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
  name: "filter",
  yougen: "Sebeta-v9.6.79ie0",
  aliases: ["modifiers", "newfilter"],
  cooldown: 10000,
  category: "Music",
  description: "Add/Remove A Music Filter To/From Currently Playing Song!",
  usage: "Filters <Name>",
  examples: ["filter bassboost or ?bb(on)/?bb(off)"],
};
