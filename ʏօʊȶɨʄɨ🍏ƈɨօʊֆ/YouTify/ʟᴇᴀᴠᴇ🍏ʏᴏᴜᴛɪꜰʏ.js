const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
module.exports.run = async (client, message, args) => {
  try {
    const Channel = message.member.voice.channel,
      Bot = message.guild.me.voice.channel;
    if (!Channel) {
      message.react(`❌`);
      message.channel.send("📕: error+code RED message").catch(console.error);
      message.channel
        .send(
          new MessageEmbed()
            .setTimestamp()
            .setColor(`#b60000`)
            .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
            .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
            .setURL(`https://github.com/Krakinz`)
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
            ).setDescription(`${message.author}
\`Error\`
**Not connected to any Voice Channel yet!  Please Join first**`)
        )
        .catch(console.error);
      return;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (!Bot) {
      message.react(`❌`);
      message.channel.send("📕: error+code RED message").catch(console.error);
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b60000`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setURL(`https://github.com/Krakinz`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .addField(`\`Error:\``, `**No 🍏YouTify™ Voice Channel present!**`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
          )
      );
      return;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (Bot.id != Channel.id) {
      message.react(`❌`);
      message.channel.send("📕: error+code RED message").catch(console.error);
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b60000`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setURL(`https://github.com/Krakinz`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .addField(
            `\`Error:\``,
            `**You need to be in same voiceChannel as 🍏YouTify™!**`
          )
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
          )
      );
      return;
    }

    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (
      !message.member.hasPermission("MANAGE_CHANNELS") &&
      Bot.members.length > 2
    ) {
      message.react(`❌`);
      message.channel.send("📕: error+code RED message").catch(console.error);
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b60000`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setURL(`https://github.com/Krakinz`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .addField(
            `\`Error:\``,
            `**Request Cancelled Due To Active 2+ Members in current voiceChannel**`
          )
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
          )
      );
      return;
    }

    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    try {
      await Bot.leave();
      await message.react("✅");
      await message.channel
        .send("📗: ok+code GREEN message")
        .catch(console.error);
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      return message.channel
        .send("Error: Unknown")
        .then(() => console.log(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ));
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
    message.client.channels.cache
      .get(`894958787792871475`)
      .send(
        new MessageEmbed()
          .setColor(`#b66c00`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setImage(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
          ).setDescription(`
**Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.**

**Error report:**
*${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
      )
      .catch(console.error);
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    message.channel.send("📙: sorry+code ORANGE message").catch(console.error);
    message.react(`😔`);
    message.channel.send(
      new MessageEmbed()
        .setTimestamp()
        .setColor(`#b66c00`)
        .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
        .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
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
module.exports.help = {
  name: "leave",
  aliases: ["leavevc", "lv"],
  cooldown: 7000,
  category: "YouTify",
  description: "Leave Voice Channel!",
  usage: "Leave",
  examples: ["leave"],
};
