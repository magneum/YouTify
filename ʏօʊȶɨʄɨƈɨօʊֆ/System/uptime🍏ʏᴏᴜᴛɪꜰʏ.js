const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
module.exports.run = async (client, message) => {
  try {
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
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
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
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
module.exports.help = {
  name: "uptime",
  aliases: ["ut"],
  cooldown: 7000,
  category: "System",
  description: "Get Bot Uptime!",
  usage: "Uptime",
  examples: ["uptime"],
};
