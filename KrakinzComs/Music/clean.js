const { Mrs_YouTify } = require("../../YouTiFy_Initializer/Mrs_YouTify.js");
const { MessageEmbed } = require("../../YouTiFy_Initializer/youtify.djs");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
module.exports.run = async (client, message) => {
    const Channel = message.member.voice.channel;
    if (!Channel) {
        await message.react("🟡")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#c4b932")
            .setTitle(`\`💬Clean\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(`👈🏽‍Reqstd by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
            .addField(`\`☣️Error\``, `**Not connected to any VoiceChannel!**`, true))
            .catch(console.error);
        return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    let Queue = await client.queue.get(message.guild.id), Connection;
    if (!Queue) {
        await message.react("🟡")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#c4b932")
            .setTitle(`\`💬Clean\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(`👈🏽‍Reqstd by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
            .addField(`\`☣️Error\``, `**No song in Queue, Please Add Some Songs By Using  ${client.YouTix}play or  ${client.YouTix}search Command!**`, true))
            .catch(console.error);
        return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    if (Queue.Voice.id != Channel.id) {
        await message.react("🟡")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#c4b932")
            .setTitle(`\`💬Clean\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(`👈🏽‍Reqstd by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
            .addField(`\`☣️Error\``, `**You Need To Join the Same Voice Channel where YouTify™ is playing Music!**`, true))
            .catch(console.error);
        return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    const Wait = await message.channel.send("**Cleaning...**");
    await message.guild.voice.kick(), await client.queue.delete(message.guild.id);
    await Wait.edit("Re-Configuring...");
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    setTimeout(async () => {
        try {
            Connection = await Channel.join();
            await Connection.voice.setSelfDeaf(true);
            Queue["Connection"] = Connection;
        } catch (e) {
            console.log(e);
            await Wait.edit("**Re-Configuration Process Failed - Unable To Join Voice Channel!**")
            return;
        };
        // ===========================================================================================================================
        // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
        // ===========================================================================================================================
        await Wait.edit("**Re-Configuration Process Success - Joined The Voice Channel**");
        await client.queue.set(message.guild.id, Queue);
        // ===========================================================================================================================
        // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
        // ===========================================================================================================================
        try {
            await Mrs_YouTify(client, message, {
                Song: Queue.Songs[0]
            });
        } catch (e) {
            console.log(e);
            await Wait.edit(`**Re-Configuration Process Failed - YouTify Error** *${e}*`)
            return;
        };
        // ===========================================================================================================================
        // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
        // ===========================================================================================================================
        await Wait.edit("**Re-Configuration Process Success - YouTify Playing!**").then((M) => M.delete({ timeout: 3000 }));
        message.react("✅")
        return;
    }, 3000);
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
module.exports.help = {
    name: "clean",
    aliases: ["cn", "cl", "c"],
    cooldown: 10000,
    category: "Music",
    description: "Make Music More Clear and remove any applied audio filter(s).",
    usage: "Clean",
    examples: ["clean"]
};