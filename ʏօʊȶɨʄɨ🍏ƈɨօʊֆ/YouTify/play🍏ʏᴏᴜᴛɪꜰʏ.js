const { YouTify_Find_Infos, _Youtify_ } = require("../🍏/_Youtify_.js"),
  ʏᴏᴜᴛɪꜰʏʏᴛꜱʀ = require("youtube-sr").default;
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
const ᴅɪꜱᴄᴏʀᴅ = require(`../ӄʀǟӄɨռʐʟǟɮ`);

module.exports.run = async (client, message, args) => {
  try {
    let Value = args.join(" "),
      Channel = message.member.voice.channel,
      Queue = await client.queue.get(message.guild.id);
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
    if (!Channel.joinable || !Channel.speakable) {
      message.channel.send("Error: Voice Channel Not Joinable Or Speakable!");
      return;
    }

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

    if (!YouTify) {
      message.channel.send("Error: No Song Found!");
      return;
    }
    if (YouTify.ʏᴏᴜᴛɪꜰʏᴘᴏɪɴᴛ) {
      Songs = YouTify.Videos;
      Song = YouTify.Videos[0];
      ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ = YouTify;
    } else {
      Song = YouTify;
    }
    if (Queue) {
      await (ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏᴘᴏɪɴᴛ
        ? Queue.Songs.push(...Songs)
        : Queue.Songs.push(Song));
      message.react("✅");
      message.channel.send("📗: ok+code GREEN message").catch(console.error);
      message.channel.send(
        new MessageEmbed()
          .setColor("#8DB600")
          .setThumbnail(
            Songs
              ? ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.Other.thumbnail
                ? ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.Other.thumbnail
                : ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.Thumbnail
              : Song.Thumbnail
          )
          .setAuthor(
            (Songs ? "Playlist" : "Song") + " Added",
            message.author.avatarURL({
              dynamic: true,
            })
          )
          .setDescription(
            (Songs
              ? `[${ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.Name}](${ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.Link})`
              : `[${Song.Title}](${Song.Link})`) + " Has Been Added To Queue!"
          )
          .setTimestamp()
      );
      return;
    }

    try {
      Connection = await Channel.join();
      await Connection.voice.setSelfDeaf(true);
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      console.log(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
      message.channel.send("Error: Unable To Join Voice Channel!");
      return;
    }

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

    Queue = await client.queue.get(message.guild.id);

    try {
      await _Youtify_(client, message, {
        Song: Song,
      });
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      await Channel.leave(),
        await client.queue.delete(message.guild.id),
        await console.log(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
      message.channel.send("Error: Something Went Wrong, Try Again Later!");
      return;
    }
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
  name: "play",
  aliases: ["p", "pl", "ytf"],
  cooldown: 5000,
  category: "YouTify",
  description:
    "Play YouTify From Youtube (Video ID, Video Link, Playlist ID, Playlist Link), Soundcloud (Song Link, Playlist Link), Spotify (Song Link, Playlist Link), Facebook (Song Link)!",
  usage: "Play <Song | Playlist>",
  examples: [
    "play attention",
    "play nfs8NYg7yQM",
    "play ncs playlist",
    "play https://www.youtube.com/watch?v=nfs8NYg7yQM",
  ],
};
