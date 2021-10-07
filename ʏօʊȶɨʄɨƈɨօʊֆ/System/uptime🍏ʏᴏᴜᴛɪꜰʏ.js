const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
const ᴅɪꜱᴄᴏʀᴅ = require(`../ӄʀǟӄɨռʐʟǟɮ`);

module.exports.run = async (client, message) => {
  let ᴅᴀʏꜱ = Math.floor(client.uptime / 86400000),
    ʜᴏᴜʀꜱ = Math.floor(client.uptime / 3600000) % 24,
    ᴍɪɴᴜᴛᴇꜱ = Math.floor(client.uptime / 60000) % 60,
    ꜱᴇᴄᴏɴᴅꜱ = Math.floor(client.uptime / 1000) % 60;
  const ʀᴍ = (Duration) => {
    return Duration.replace("0 Day\n", "")
      .replace("0 Hour\n", "")
      .replace("0 Minute\n", "");
  };
  let ʏᴏᴜᴛɪꜰʏᴜᴘᴛɪᴍᴇ = await ʀᴍ(
    `${ᴅᴀʏꜱ} ${ᴅᴀʏꜱ > 1 ? "ᴅᴀʏꜱ" : "Day"}\n${ʜᴏᴜʀꜱ} ${
      ʜᴏᴜʀꜱ > 1 ? "ʜᴏᴜʀꜱ" : "Hour"
    }\n${ᴍɪɴᴜᴛᴇꜱ} ${ᴍɪɴᴜᴛᴇꜱ > 1 ? "ᴍɪɴᴜᴛᴇꜱ" : "Minute"}\n${ꜱᴇᴄᴏɴᴅꜱ} ${
      ꜱᴇᴄᴏɴᴅꜱ > 1 ? "ꜱᴇᴄᴏɴᴅꜱ" : "Second"
    }`
  );

  message.react("✅");
  message.channel.send("📗: ok+code GREEN message").catch(console.error);
  message.channel
    .send(
      new MessageEmbed()
        .setTimestamp()
        .setColor("#8DB600")
        .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
        .setTitle(`\`\`\`🤖YouTify™ UpTime \`\`\` `)
        .setURL(`https://github.com/Krakinz?tab=repositories`)
        .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
        .setFooter(
          "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
          message.author.avatarURL({
            dynamic: true,
          })
        )
        .addField(
          `\`Time\``,
          `🕐**Server Refreshed ${ʏᴏᴜᴛɪꜰʏᴜᴘᴛɪᴍᴇ} ago!**`,
          true
        )
    )
    .catch(console.error);
  return;
};

module.exports.help = {
  name: "uptime",
  aliases: ["ut"],
  cooldown: 7000,
  category: "System",
  description: "Get Bot Uptime!",
  usage: "Uptime",
  examples: ["uptime"],
};
