const { MessageEmbed } = require("../../YouTifyPlayer/YouTified.djs");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.run = (client, message, args, Discord) => {
  message.react("🟢");
  message.channel
    .send(
      new MessageEmbed()
        .setTimestamp()
        .setColor("#43745a")
        .setTitle(`\`💬Invite\``)
        .setURL("https://github.com/Krakinz")
        .setImage(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
        .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
        .setAuthor(
          `🍏YouTify™`,
          `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
        )
        .addField(`\`Brought To You by\``, "👑Krakinz & KrakinzLab(c)👑", true)
        .addField(
          `\`YouTify™\``,
          `[🍏INVITE🍏](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`,
          true
        )
        .setFooter(
          `👈🏽‍Reqstd by ${message.author.username}`,
          message.author.avatarURL({ dynamic: true })
        )
    )
    .catch(console.error);
  return;
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.help = {
  name: "invite",
  aliases: ["iv", "info"],
  cooldown: 10000,
  category: "System",
  description: "Get Bot Invite Link & Other Info!",
  usage: "Invite",
  examples: ["invite"],
};
