const Finder = require("lyrics-finder");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
module.exports.run = async (client, message, args) => {
  try {
    const Queue = client.queue.get(message.guild.id);
    if (!Queue && !args[0]) {
      message.react(`❌`);
      message.channel.send("📕: error+code RED message").catch(console.error);
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b60000`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setURL(`https://github.com/Krakinz`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .addField(
            `\`Error:\``,
            `**No Queue, Please Add Some Songs! (Play & Search Command)**`
          )
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
          )
      );
      return;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    let Lyric,
      Thing = Queue ? Queue.Songs[0].Title : args.join(" "),
      NoSong = false;
    try {
      Lyric = await Finder(Thing, "");
      if (!Lyric && Queue && args[0]) {
        Lyric = await Finder(args.join(" "));
        NoSong = true;
      }
      if (!Lyric) {
        message.channel.send(
          `No Lyrics Found - ${NoSong ? args.join(" ") : Thing}`
        );
        return;
      }
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      message.channel.send(`No Lyrics Found - ${Thing}`);
      return;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    Lyric = await Lyric.replace(/(.{2021})/g, "\n1\n");
    message.react("✅");
    message.channel.send("📗: ok+code GREEN message").catch(console.error);
    message.channel.send(Lyric, {
      split: {
        char: "\n",
      },
    });
    return;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
    message.client.channels.cache
      .get(`894958787792871475`)
      .send(
        new MessageEmbed()
          .setColor(`#b66c00`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setImage(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
          ).setDescription(`
**Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.**

**Error report:**
*${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
      )
      .catch(console.error);
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    message.channel.send("📙: sorry+code ORANGE message").catch(console.error);
    message.react(`😔`);
    message.channel.send(
      new MessageEmbed()
        .setTimestamp()
        .setColor(`#b66c00`)
        .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
        .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
        .setTitle(`\`\`\`🍏YouTify™ encountered an error.\`\`\``)
        .setDescription(`**\`Please report to either\`**
🔰[In ᴅɪꜱᴄᴏʀᴅ channel](https://discord.gg/y2PtYAJgpy)
🔰[In ᴛᴇʟᴇɢʀᴀᴍ group](https://t.me/Krakns)

**\`Error🔻Caught\`**
${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}`)
    );
    console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
  }
};
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
module.exports.help = {
  name: "lyrics",
  aliases: ["lyric", "ly"],
  cooldown: 7000,
  category: "YouTify",
  description: "Show Song Lyrics",
  usage: "Lyrics | <Title>",
  examples: [
    "lyrics",
    "lyrics we don't talk anymore",
    "lyrics shape of you",
    "lyrics despacito",
  ],
};
