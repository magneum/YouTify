const { MessageEmbed } = require("discord.js");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.run = async (client, message, args, Discord) => {
  // ===========================================================================================================================
  // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
  // ===========================================================================================================================
  if (!args[0]) {
    await message.react("🟢");
    await message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#43745a")
          .setURL("https://github.com/Krakinz")
          .setTitle(`💬\`YouTify™ Help Menu\``)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setAuthor(
            `🍏YouTify™`,
            `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
          )
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addField(
            `\`💡Sent\``,
            `**Please Check Your \`Direct Message\` For An Entire Command Helper Menu Of YouTify™**`,
            true
          )
      )
      .catch(console.error);
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
    // ===========================================================================================================================
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
    message.author
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#43745a")
          .setURL("https://github.com/Krakinz")
          .setTitle(`💬\`YouTify™ Help Menu\``)
          .setImage(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setAuthor(
            `🍏YouTify™`,
            `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
          )
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .setDescription(
            `**💡This is the Entire Command Helper Menu for YouTify™**💡\n:exclamation:*For more help type ${client.YouTix}help <command name>*\n================🍏================\n\n`
          )
          .addField(`**\`PREFIX\`**`, `**${client.YouTix}**`, true)
          .addField(
            `**\`🎹YOUTIFY PLAYER\`**`,
            `**play,clean,\nclearqueue,join,\nleave,loop,\nlyrics,nowplaying,\nqueue,search,\nshuffle,skip,volume**`,
            true
          )
          .addField(`**\`⚙️SYSTEM\`**`, `**help,invite,\nping,uptime**`, true)
          .addField(
            `**\`🎶FILTERS\`**`,
            `*(remember to disable any applied filter just re-send that filter command)*
**aphaser, apulsator, asetrate,
bassboost, deesser, earwax,
echo, filters, flanger, gate,
haas, karaoke, mcompand, mono,
nightcore, normalizer, phaser,
pulsator, reverse, slow, sofalizer,
speed, subboost, superslow,
superspeed, surround, treble,
tremolo, vaporwave, vibrato**`,
            true
          )
          .addField(
            `\`Brought To You by\``,
            "👑**Krakinz & KrakinzLab(c)**👑",
            true
          )
          .addField(
            `\`🛸Uptime\``,
            `🤖**YouTify™ is Smoothly Serving since ${Total}**`,
            true
          )
          .addField(
            `\`📡Pong\``,
            `**YouTify's Server is Smoothly Running with Max Latency being ${client.ws.ping}ms**`,
            true
          )
      )
      .catch(console.error);
    return;
  }
  // ===========================================================================================================================
  // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
  // ===========================================================================================================================
  args[0] = args[0].toLowerCase();
  let Cmd =
    client.commands.get(args[0]) ||
    client.commands.get(client.aliases.get(args[0]));
  if (!Cmd) {
    await message.react("🟡");
    await message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setURL("https://github.com/Krakinz")
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setAuthor(
            `🍏YouTify™`,
            `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
          )
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addField(`\`☣️Error\``, `**No Such Command found!**`, true)
      )
      .catch(console.error);
    return;
  }
  // ===========================================================================================================================
  // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
  // ===========================================================================================================================
  Cmd = Cmd.help;
  if (args[1] && args[1] == client.token) {
    await message.react("🔴");
    message.channel
      .send(
        new MessageEmbed()
          .setColor("#b13d3d")
          .setAuthor("Wrong Usage")
          .setThumbnail(`https://YouNum.postimg.cc/9f0mS5NY/YouTify.png`)
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addField(
            "Usage",
            Cmd.usage ? client.YouTix + Cmd.usage : "None",
            true
          )
          .addField(
            "Examples",
            Cmd.examples
              ? Cmd.examples.join("\n").length === 0
                ? "None"
                : Cmd.examples.map((YouC) => client.YouTix + YouC).join("\n")
              : "None"
          )
          .setTimestamp()
      )
      .catch(console.error);
    return;
  }
  // ===========================================================================================================================
  // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
  // ===========================================================================================================================
  await message.react("⚪");
  await message.channel
    .send(
      new MessageEmbed()
        .setTimestamp()
        .setColor("#ffffff")
        .setURL("https://github.com/Krakinz")
        .setTitle(`**${Cmd.description}**`)
        .setThumbnail(`https://YouNum.postimg.cc/9f0mS5NY/YouTify.png`)
        .setAuthor(
          `🍏YouTify™`,
          `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
        )
        .setFooter(
          `👈🏽‍Reqstd by ${message.author.username}`,
          message.author.avatarURL({ dynamic: true })
        )
        .addField(`**\`📜Title\`**`, Cmd.name, true)
        .addField(`**\`⚙️Usage\`**`, `${client.YouTix}${Cmd.usage}`, true)
        .addField(`**\`📂Genre\`**`, Cmd.category, true)
        .addField(
          `**\`⚡Aliases\`**`,
          Cmd.aliases
            ? Cmd.aliases.join(", ").length === 0
              ? "None"
              : Cmd.aliases.join(", ")
            : "None"
        )
        .addField(
          `**\`🔎Example\`**`,
          Cmd.examples
            ? Cmd.examples.join("\n").length === 0
              ? "None"
              : Cmd.examples.join("\n")
            : "None"
        )
    )
    .catch(console.error);
  return;
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.help = {
  name: "help",
  aliases: ["h"],
  cooldown: 5000,
  category: "System",
  description: "Get Bot Commands!",
  usage: "Help | <Command Name>",
  examples: ["help", "help play"],
};
