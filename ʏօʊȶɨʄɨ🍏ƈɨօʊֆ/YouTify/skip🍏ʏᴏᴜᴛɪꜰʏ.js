const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
module.exports.run = async (client, message, args) => {
    try {
        const Channel = message.member.voice.channel;
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
        // ====================================================—••÷[🍏YouTify™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
        // ====================================================—••÷[🍏YouTify™]÷••—====================================================
        const Queue = client.queue.get(message.guild.id);
        if (!Queue) {
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
        // ====================================================—••÷[🍏YouTify™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
        // ====================================================—••÷[🍏YouTify™]÷••—====================================================
        if (!Queue.Playing) Queue.Playing = true;
        await Queue.Connection.dispatcher.end();
        // ====================================================—••÷[🍏YouTify™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
        // ====================================================—••÷[🍏YouTify™]÷••—====================================================
        try {
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
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
        // ====================================================—••÷[🍏YouTify™]÷••—====================================================
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
    name: "skip",
    aliases: ["sk", "s"],
    cooldown: 7000,
    category: "YouTify",
    description: "Skip A Song!",
    usage: "Skip",
    examples: ["skip"],
};
