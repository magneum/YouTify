const { YouTify_Find_Infos, ʏᴏᴜᴛɪꜰʏɢᴇɴʀᴇ } = require("../🍏/ʏᴏᴜᴛɪꜰʏɢᴇɴʀᴇ.js"),
  ʏᴏᴜᴛɪꜰʏʏᴛꜱʀ = require("youtube-sr").default;
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const ᴅɪꜱᴄᴏʀᴅ = require(`../ӄʀǟӄɨռʐʟǟɮ/src`);
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
module.exports.run = async (client, message, args) => {
  try {
    let Value = args.join(" "),
      Channel = message.member.voice.channel,
      Queue = await client.queue.get(message.guild.id);
    message.react("✅");
    message.channel.send("📗: ok+code GREEN message").catch(console.error);
    message.channel
      .send(
        new MessageEmbed()
          .setColor("#8DB600")
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .addField(
            `🔍Searching`,
            `** \`${args.join(" ")}\`, and Adding in 3sec🍏**`,
            true
          )
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
          )
      )
      .catch(console.error);
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (!Channel) {
      message.react(`❌`);
      message.channel.send("📕: error+code RED message").catch(console.error);
      message.channel
        .send(
          new MessageEmbed()
            .setTimestamp()
            .setColor(`#b60000`)
            .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
            .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
            .setURL(`https://github.com/Krakinz`)
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
            ).setDescription(`${message.author}
\`Error\`
**Not connected to any Voice Channel yet!  Please Join first**`)
        )
        .catch(console.error);
      return;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (!Channel.joinable || !Channel.speakable) {
      message.react(`❌`);
      message.channel.send("📕: error+code RED message").catch(console.error);
      message.channel
        .send(
          new MessageEmbed()
            .setTimestamp()
            .setColor(`#b60000`)
            .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
            .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
            .setURL(`https://github.com/Krakinz`)
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
            ).setDescription(`${message.author}
\`Error\`
**Voice Channel Not Joinable Or Speakable!!  Please ask Admins to give me proper rights first**`)
        )
        .catch(console.error);
      return;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (!Value) {
      client.commands
        .get("help")
        .run(client, message, ["play", client.token], ᴅɪꜱᴄᴏʀᴅ);
      return;
    }
    let YouTify = await YouTify_Find_Infos(Value, message),
      Song,
      Songs,
      Connection,
      ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ = {};
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (!YouTify) {
      message.channel
        .send("📙: sorry+code ORANGE message")
        .catch(console.error);
      message.react(`😔`);
      message.channel
        .send(
          new MessageEmbed()
            .setTimestamp()
            .setColor(`#b66c00`)
            .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
            .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
            .setURL(`https://github.com/Krakinz`)
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
            ).setDescription(`${message.author}
\`Error\`
**No Song Found!  Please try using different keystrings**`)
        )
        .catch(console.error);
      return;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (YouTify.ʏᴏᴜᴛɪꜰʏᴘᴏɪɴᴛ) {
      Songs = YouTify.Videos;
      Song = YouTify.Videos[0];
      ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ = YouTify;
    } else {
      Song = YouTify;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (Queue) {
      await (ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏᴘᴏɪɴᴛ
        ? Queue.Songs.push(...Songs)
        : Queue.Songs.push(Song));
      message.react("✅");
      message.channel.send("📗: ok+code GREEN message").catch(console.error);
      message.channel.send(
        new MessageEmbed()
          .setColor("#8DB600")
          .setTimestamp()
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
          )
          .setThumbnail(
            Songs
              ? ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.Other.thumbnail
                ? ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.Other.thumbnail
                : ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.Thumbnail
              : Song.Thumbnail
          )
          .setTitle(
            (Songs ? "Playlist" : "Song") + " Added",
            message.author.avatarURL({ dynamic: true })
          )
          .setDescription(
            (Songs
              ? `[${ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.Name}](${ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.Link})`
              : `[${Song.Title}](${Song.Link})`) + " Has Been Added To Queue!"
          )
      );
      return;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    try {
      Connection = await Channel.join();
      await Connection.voice.setSelfDeaf(true);
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      console.log(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
      message.channel
        .send("📙: sorry+code ORANGE message")
        .catch(console.error);
      message.react(`😔`);
      message.channel
        .send(
          new MessageEmbed()
            .setTimestamp()
            .setColor(`#b66c00`)
            .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
            .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
            .setURL(`https://github.com/Krakinz`)
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
            ).setDescription(`${message.author}
\`Error\`
**Unable To Join Voice Channel!  Please re-try or ask Admins to check my proper rights!**`)
        )
        .catch(console.error);
      return;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    await client.queue.set(message.guild.id, {
      Text: message.channel,
      Voice: Channel,
      Connection,
      Volume: 100,
      Filters: {},
      Songs: Songs ? [...Songs] : [Song],
      Steam: null,
      Loop: false,
      Day: false,
      Playing: true,
    });
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    Queue = await client.queue.get(message.guild.id);
    try {
      try {
        message.author
          .send(
            new MessageEmbed()
              .setColor("#8DB600")
              .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
              .setTitle(`\`\`\`👍Joined\`\`\``)
              .setURL("https://github.com/Krakinzs")
              .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
              ).setDescription(`${message.author}
**👍Joined \`${Channel.name}\`and is 📄 bound to \`#${message.channel.name}\`**

*AutoDeleting in*: **20secs**`)
          )
          .catch(console.error)
          .then((message) => {
            try {
              message.delete({
                timeout: 20000,
              });
            } catch (err) {
              console.log(err);
            }
          });
        // ====================================================—••÷[🍏YouTify™]÷••—====================================================
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#8DB600")
              .setTitle(`\`\`\`👍Joined\`\`\``)
              .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
              .setURL("https://github.com/Krakinzs")
              .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
              ).setDescription(`${message.author}
**👍Joined \`${Channel.name}\`and is 📄 bound to \`#${message.channel.name}\`**`)
          )
          .catch(console.error);
      } catch (e) {
        console.log(e.message);
      }
      // ====================================================—••÷[🍏YouTify™]÷••—====================================================
      await ʏᴏᴜᴛɪꜰʏɢᴇɴʀᴇ(client, message, {
        Song: Song,
      });
      // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      await Channel.leave(),
        await client.queue.delete(message.guild.id),
        await console.log(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
      message.react(`❌`);
      message.channel.send("📕: error+code RED message").catch(console.error);
      message.channel
        .send(
          new MessageEmbed()
            .setTimestamp()
            .setColor(`#b60000`)
            .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
            .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
            .setURL(`https://github.com/Krakinz`)
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
            ).setDescription(`${message.author}
\`Error\`
**Something Went Wrong, Try Again Later!**`)
        )
        .catch(console.error);
      return;
    }
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
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
        )
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
  name: "play",
  aliases: ["p", "pl", "ytf"],
  cooldown: 5000,
  category: "YouTify",
  description:
    "Play YouTify From Youtube (Video ID, Video Link, Playlist ID, Playlist Link), Soundcloud (Song Link, Playlist Link), Spotify (Song Link, Playlist Link), Facebook (Song Link)!",
  usage: "Play <Song | Playlist>",
  examples: [
    "play emptiness",
    "play nfs8NYg7yQM",
    "play chilledcow playlist",
    "play https://www.youtube.com/watch?v=nfs8NYg7yQM",
  ],
};
