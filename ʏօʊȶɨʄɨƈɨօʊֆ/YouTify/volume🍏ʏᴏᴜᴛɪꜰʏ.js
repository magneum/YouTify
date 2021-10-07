const { MessageEmbed } = require("discord.js");
const ᴅɪꜱᴄᴏʀᴅ = require(`discord.js`);
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
  if (!Queue) {
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
  let NewVolume = args[0];

  const Embed = new MessageEmbed()
    .setColor("#8DB600")
    .setAuthor(
      "Volume",
      message.author.avatarURL({
        dynamic: true,
      })
    )
    .setDescription(`Current Volume - ${Queue.Volume}`)
    .setTimestamp();

  if (!NewVolume) return message.channel.send(Embed);
  if (isNaN(NewVolume) || parseInt(NewVolume) < 1)
    return message.channel.send("Error: Invalid Volume Provided!");
  NewVolume = parseInt(NewVolume);
  if (NewVolume > 150)
    return message.channel.send("Error: Volume Limit Surpassed - 150");
  if (NewVolume == Queue.Volume)
    return message.channel.send(`Error: Already ${NewVolume}!`);

  Queue.Volume = NewVolume;
  Queue.Connection.dispatcher.setVolumeLogarithmic(Queue.Volume / 100);

  const Embeded = new MessageEmbed()
    .setColor("#8DB600")
    .setAuthor(
      "Volume",
      message.author.avatarURL({
        dynamic: true,
      })
    )
    .setDescription("YouTify Volume Has Been Changed - " + Queue.Volume + "!")
    .setTimestamp();
  message.react("✅");
  message.channel.send("📗: ok status message").catch(console.error);
  return message.channel.send(Embeded);
};

module.exports.help = {
  name: "volume",
  aliases: ["v", "vl", "vol"],
  cooldown: 7000,
  category: "YouTify",
  description: "View Or Change Currently Playing Song Volume!",
  usage: "Volume | <New Volume>",
  examples: ["volume", "volume 124", "volume 50", "volume 136"],
};
