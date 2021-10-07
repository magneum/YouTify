const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
const ᴅɪꜱᴄᴏʀᴅ = require(`../ӄʀǟӄɨռʐʟǟɮ`);

module.exports.run = (client, message) => {
  message.react("✅");
  message.channel.send("📗: ok+code GREEN message").catch(console.error);
  message.channel
    .send(
      new MessageEmbed()
        .setTimestamp()
        .setColor("#8DB600")
        .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
        .setTitle(`\`\`\`🤖Server Response Time\`\`\` `)
        .setURL(`https://github.com/Krakinz?tab=repositories`)
        .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
        .setFooter(
          "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
          message.author.avatarURL({
            dynamic: true,
          })
        )
        .addField(`\`Pong\``, `🛸**Took ${client.ws.ping}ms**`, true)
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
