const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
const ᴅɪꜱᴄᴏʀᴅ = require(`../ӄʀǟӄɨռʐʟǟɮ`);

module.exports.run = (client, message, args) => {
  message.react("✅");
  message.channel.send("📗: ok status message").catch(console.error);
  message.channel.send(
    new MessageEmbed()
      .setColor("#8DB600")
      .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
      .setTitle(`\`\`\`Invite🍏YouTify™\`\`\``)
      .setURL(`https://github.com/Krakinz?tab=repositories`)
      .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
      .addField(
        `**\`Link\`**`,
        `📚[Press](https://discord.com/api/oauth2/authorize?client_id=895346909785489429&permissions=8&scope=bot%20applications.commands)`,
        true
      )
      .addField(
        `**\`Github\`**`,
        "🥳[Press](https://github.com/Krakinz/YouTify)",
        true
      )
      .addField(`\`Developer\``, "**Krakinz#7134**", true)
      .setFooter(
        "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
        message.author.avatarURL({
          dynamic: true,
        })
      )
      .setTimestamp()
  );
  return;
};

module.exports.help = {
  name: "invite",
  aliases: ["iv", "info"],
  cooldown: 7000,
  category: "Home",
  description: "Get Bot Invite Link & Home Info!",
  usage: "Invite",
  examples: ["invite"],
};
