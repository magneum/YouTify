const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/typings");

module.exports.run = async (client, message) => {
  let Days = Math.floor(client.uptime / 86400000),
    Hours = Math.floor(client.uptime / 3600000) % 24,
    Minutes = Math.floor(client.uptime / 60000) % 60,
    Seconds = Math.floor(client.uptime / 1000) % 60;
  const RemoveUseless = (Duration) => {
    return Duration.replace("0 Day\n", "")
      .replace("0 Hour\n", "")
      .replace("0 Minute\n", "");
  };
  let Total = await RemoveUseless(
    `${Days} ${Days > 1 ? "Days" : "Day"}\n${Hours} ${
      Hours > 1 ? "Hours" : "Hour"
    }\n${Minutes} ${Minutes > 1 ? "Minutes" : "Minute"}\n${Seconds} ${
      Seconds > 1 ? "Seconds" : "Second"
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
        .addField(`\`Time\``, `🕐**Server Refreshed ${Total} ago!**`, true)
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
