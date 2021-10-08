const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
module.exports.run = (client, message, args) => {
    try {
        message.react("✅");
        message.channel.send("📗: ok+code GREEN message").catch(console.error);
        message.channel.send(
            new MessageEmbed()
                .setColor("#8DB600")
                .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
                .setTitle(`\`\`\`Invite🍏YouTify™\`\`\``)
                .setURL(`https://github.com/Krakinz`)
                .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
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
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️", message.author.avatarURL({ dynamic: true })
                )
                .setTimestamp()
        );
        return;
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
    name: "invite",
    aliases: ["iv", "info"],
    cooldown: 7000,
    category: "System",
    description: "Get Bot Invite Link",
    usage: "Invite",
    examples: ["invite"],
};
