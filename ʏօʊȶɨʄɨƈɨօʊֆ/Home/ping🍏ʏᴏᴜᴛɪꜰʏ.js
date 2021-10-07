const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
const ᴅɪꜱᴄᴏʀᴅ = require(`../ӄʀǟӄɨռʐʟǟɮ`);

module.exports.run = (client, message) => {
  message.react("✅");
  message.channel.send("📗: ok+code GREEN message").catch(console.error);
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
};

module.exports.help = {
  name: "ping",
  aliases: ["p"],
  cooldown: 7000,
  category: "Home",
  description: "Get Bot Ping!",
  usage: "Ping",
  examples: ["ping"],
};
