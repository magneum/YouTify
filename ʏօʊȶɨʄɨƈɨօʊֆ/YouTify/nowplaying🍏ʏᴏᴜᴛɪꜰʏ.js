const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
const ᴅɪꜱᴄᴏʀᴅ = require(`../ӄʀǟӄɨռʐʟǟɮ`);
module.exports.run = async (client, message, args) => {
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
  if (!Queue || !Queue.Songs) {
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

  const Song = Queue.Songs[0],
    Type = ["YT", "SR"].includes(Song.Type)
      ? "Youtube"
      : Song.Type == "ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅ"
      ? "SoundCloud"
      : ["ʏᴏᴜᴛɪꜰʏꜱᴘᴏᴛᴅʟ", "ꜱᴘᴏᴛɪꜰʏᴘʟᴀʏʟɪꜱᴛ"].includes(Song.Type)
      ? "Spotify"
      : undefined;

  const Embed = new MessageEmbed()
    .setColor("#8DB600")
    .setAuthor("Now Playing")
    .setThumbnail(Song.Thumbnail)
    .setDescription(
      `Source - ${Type}\nTitle - [${Song.Title}](${Song.Link})
Duration - ${Song.Duration}
Added By - ${Song.Req}`
    )
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();
  message.react("✅");
  message.channel.send("📗: ok+code GREEN message").catch(console.error);
  return message.channel.send(Embed);
};

module.exports.help = {
  name: "nowplaying",
  aliases: ["np"],
  cooldown: 7000,
  category: "YouTify",
  description: "Get Currently Playing Song Information!",
  usage: "Nowplaying",
  examples: ["nowplaying"],
};
