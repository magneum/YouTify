const Finder = require("lyrics-finder");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
const ᴅɪꜱᴄᴏʀᴅ = require(`../ӄʀǟӄɨռʐʟǟɮ`);

module.exports.run = async (client, message, args) => {
  try {
    const Queue = client.queue.get(message.guild.id);
    if (!Queue && !args[0])
      return message.channel.send(
        "Error: No Queue, Please Add Some Songs By Using Play & Search Command!"
      );
    let Lyric,
      Thing = Queue ? Queue.Songs[0].Title : args.join(" "),
      NoSong = false;

    try {
      Lyric = await Finder(Thing, "");
      if (!Lyric && Queue && args[0]) {
        Lyric = await Finder(args.join(" "));
        NoSong = true;
      }
      if (!Lyric)
        return message.channel.send(
          `No Lyrics Found - ${NoSong ? args.join(" ") : Thing}`
        );
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      return message.channel.send(`No Lyrics Found - ${Thing}`);
    }

    Lyric = await Lyric.replace(/(.{2021})/g, "\n1\n");
    message.react("✅");
    message.channel.send("📗: ok+code GREEN message").catch(console.error);
    return message.channel.send(Lyric, {
      split: {
        char: "\n",
      },
    });
  } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
    message.client.channels.cache
      .get(`894958787792871475`)
      .send(
        new MessageEmbed()
          .setColor(`#b66c00`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setImage(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
          .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
            message.author.avatarURL({
              dynamic: true,
            })
          ).setDescription(`
**Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.**

**Error report:**
*${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
      )
      .catch(console.error);
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    message.channel.send("📙: sorry+code ORANGE message").catch(console.error);
    message.react(`😔`);
    message.channel.send(
      new MessageEmbed()
        .setTimestamp()
        .setColor(`#b66c00`)
        .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
        .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
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
