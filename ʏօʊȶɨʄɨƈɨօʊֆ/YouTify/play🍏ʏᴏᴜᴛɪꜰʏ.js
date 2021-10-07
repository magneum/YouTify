const { YouTify_Find_Infos, _Youtify_ } = require("../_Youtify_.js"),
  YouTify_YtSr = require("youtube-sr").default;
const { MessageEmbed } = require("discord.js");
const Discord = require(`discord.js`);

module.exports.run = async (client, message, args) => {
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
  if (!Channel.joinable || !Channel.speakable) {
    message.channel.send("Error: Voice Channel Not Joinable Or Speakable!");
    return;
  }

  if (!Value) {
    client.commands
      .get("help")
      .run(client, message, ["play", client.token], Discord);
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
    message.channel.send("📗: ok status message").catch(console.error);
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
  } catch (YouTify_Error) {
    console.log(YouTify_Error);
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
  } catch (YouTify_Error) {
    await Channel.leave(),
      await client.queue.delete(message.guild.id),
      await console.log(YouTify_Error);
    message.channel.send("Error: Something Went Wrong, Try Again Later!");
    return;
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
