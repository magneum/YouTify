const Os = require("os");
require("dotenv").config();
const ᴄʜᴀʟᴋ = require("chalk");
const Ms = require("pretty-ms");
const YouTix = process.env.YouTix;
const KRAKINZKEY = process.env.KRAKINZKEY;
const Discord = require("./YouTified.djs");
const SoundCloudZen = require("soundcloud-scraper");
const { MessageEmbed } = require("./YouTified.djs");
const CoolDowns = new Discord.Collection();
const YouTIFY = new Discord.Client({ restTimeOffset: 10 });
(YouTIFY.commands = new Discord.Collection()),
  (YouTIFY.aliases = new Discord.Collection()),
  (YouTIFY.queue = new Map());
// ===========================================================================================================================
// 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
YouTIFY.on("guildCreate", (guild) => {
  let Days = Math.floor(YouTIFY.uptime / 86400000),
    Hours = Math.floor(YouTIFY.uptime / 3600000) % 24,
    Minutes = Math.floor(YouTIFY.uptime / 60000) % 60,
    Seconds = Math.floor(YouTIFY.uptime / 1000) % 60;
  const RemoveUseless = (Duration) => {
    return Duration.replace("0 Day\n", "")
      .replace("0 Hour\n", "")
      .replace("0 Minute\n", "");
  };
  let Total = RemoveUseless(
    `${Days} ${Days > 1 ? "Days" : "Day"}\n${Hours} ${
      Hours > 1 ? "Hours" : "Hour"
    }\n${Minutes} ${Minutes > 1 ? "Minutes" : "Minute"}\n${Seconds} ${
      Seconds > 1 ? "Seconds" : "Second"
    }`
  );
  const channel = guild.channels.cache.find(
    (channel) =>
      channel.type === `text` &&
      channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
  );
  channel.send(`@everyone`);
  channel.send(
    new MessageEmbed()
      .setTimestamp()
      .setColor(`#43745a`)
      .setTitle(`\`\`\`🎧YouTify™\`\`\``)
      .setURL("https://github.com/Krakinz")
      .setImage(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
      .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
      .setAuthor(`🎧YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
      .setDescription(
        `\`🎶ΉΣY ƬΉΣЯΣ MЦƧIC LӨVΣЯƧ🎶\`
---------------::---------------\n
❤️𝘐 𝘨𝘰𝘵 𝘺𝘰𝘶 𝘤𝘰𝘷𝘦𝘳𝘦𝘥 𝘸𝘪𝘵𝘩 𝘥𝘪𝘳𝘦𝘤𝘵 𝘔𝘶𝘴𝘪𝘤 𝘚𝘳𝘦𝘢𝘮𝘪𝘯𝘨 𝘵𝘰 𝘥𝘪𝘴𝘤𝘰𝘳𝘥 𝘷𝘰𝘪𝘤𝘦 𝘤𝘩𝘢𝘯𝘯𝘦𝘭.🔥
🎧YouTify™ 𝘪𝘴 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 YouTube+SoundCloud+Spotify 𝘔𝘶𝘴𝘪𝘤 𝘉𝘰𝘵 𝘣𝘶𝘪𝘭𝘵 𝘸𝘪𝘵𝘩 𝘋𝘪𝘴𝘤𝘰𝘳𝘥.𝘫𝘴 𝘢𝘯𝘥 𝘩𝘢𝘴 Cool Audio Filters Pre-Built.

❓❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘪𝘴 𝘪𝘯 𝘩𝘦𝘢𝘷𝘺 𝘣𝘦𝘵𝘢 𝘴𝘵𝘢𝘨𝘦❓❓
---------------::--------------`
      )
      .addField(
        `:candy:\`YouTify Main Commands\``,
        `${YouTIFY.YouTix}play & ${YouTIFY.YouTix}help to know more...`,
        true
      )
      .addField(
        `:star:\`\`Note to\`\`@everyone`,
        `ᴀ channel ɴᴀᴍᴇ \`🎧YouTify™\` inside \`🔱Krakinz\` has been successfully created.
Please use \` Channel: 🎧YouTify™ \` For any \`🎧YouTify™\` commands.`,
        true
      )
      .addField(`\`Brought To You by\``, "👑Krakinz & KrakinzLab(c)👑", true)
      .addField(
        `\`🛸Uptime\``,
        `🤖YouTify™ is Smoothly Serving since ${Total}`,
        true
      )
      .addField(
        `\`📡Ping\``,
        `🤖YouTify's Server is Smoothly Running with Max Latency being ${YouTIFY.ws.ping}ms`,
        true
      )
  );

  guild.channels
    .create(`🔱𝗞𝗥𝗔𝗞𝗜𝗡𝗭𝗟𝗔𝗕™`, {
      type: `category`,
      permissionOverwrites: [
        {
          id: guild.id,
          deny: [`VIEW_CHANNEL`],
        },
        {
          id: guild.id,
          allow: [`VIEW_CHANNEL`],
        },
      ],
    })
    .then((parent) => {
      guild.channels.create(`🎧ʏᴏᴜᴛɪꜰʏ™`, {
        type: `text`,
        parent,
        permissionOverwrites: [
          {
            id: guild.id,
            deny: [
              `MANAGE_ROLES`,
              `MANAGE_NICKNAMES`,
              `MANAGE_CHANNELS`,
              `KICK_MEMBERS`,
              `BAN_MEMBERS`,
            ],
          },
          {
            id: guild.id,
            allow: [`VIEW_CHANNEL`, `SEND_MESSAGES`, `READ_MESSAGE_HISTORY`],
          },
        ],
      });

      return;
    });
});
// ===========================================================================================================================
// 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
YouTIFY.on("message", async (message) => {
  try {
    if (message.author.bot) {
      return;
    }
    if (message.webhookID) {
      return;
    }
    // ===========================================================================================================================
    // 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
    // ===========================================================================================================================
    if (!message.guild) {
      await message.react("🔴");
      await message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#b13d3d")
          .setTitle(`\`\`\`🎧YouTify™\`\`\``)
          .setURL("https://github.com/Krakinz")
          .setImage(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setFooter(
            `👈🏽‍Reqstd by`,
            message.author.avatarURL({ dynamic: true })
          ).setDescription(`\`User\`🎧${message.author}\n
---------------::---------------
❤️𝘐 𝘨𝘰𝘵 𝘺𝘰𝘶 𝘤𝘰𝘷𝘦𝘳𝘦𝘥 𝘸𝘪𝘵𝘩 𝘥𝘪𝘳𝘦𝘤𝘵 𝘔𝘶𝘴𝘪𝘤 𝘚𝘳𝘦𝘢𝘮𝘪𝘯𝘨 𝘵𝘰 𝘥𝘪𝘴𝘤𝘰𝘳𝘥 𝘷𝘰𝘪𝘤𝘦 𝘤𝘩𝘢𝘯𝘯𝘦𝘭.🔥
🎧YouTify™ 𝘪𝘴 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 YouTube+SoundCloud+Spotify 𝘔𝘶𝘴𝘪𝘤 𝘉𝘰𝘵 𝘣𝘶𝘪𝘭𝘵 𝘸𝘪𝘵𝘩 𝘋𝘪𝘴𝘤𝘰𝘳𝘥.𝘫𝘴 𝘢𝘯𝘥 𝘩𝘢𝘴 Cool Audio Filters Pre-Built.

❓❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘪𝘴 𝘪𝘯 𝘩𝘦𝘢𝘷𝘺 𝘣𝘦𝘵𝘢 𝘴𝘵𝘢𝘨𝘦❓❓
---------------::-------------

⚠️\`Error\`
• You are currently in a \`DMChannel\` and so you have been \`restricted\` using any \`🎧YouTify™ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀\`
• Add me in your channel and then all commands will be automatically accepted.

🔰\`Invite\`
[🎧YouTify™](https://discord.com/api/oauth2/authorize?client_id=895346909785489429&permissions=8&scope=bot%20applications.commands)`)
      );
      return;
    }
    // ===========================================================================================================================
    // 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
    // ===========================================================================================================================
    if (
      message.content.startsWith(YouTix) &&
      message.channel.name !== `🎧ʏᴏᴜᴛɪꜰʏ™`
    ) {
      await message.react("🔴");
      await message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#b13d3d")
          .setAuthor(
            `🎧YouTify™`,
            `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
          )
          .setURL("https://github.com/Krakinz")
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setFooter(
            `👈🏽‍Reqstd by`,
            message.author.avatarURL({ dynamic: true })
          )
          .addField(
            `\`☣️Error\``,
            `Please use \` Channel: 🎧YouTify™ \` For any \`🎧YouTify™\` commands.`,
            true
          )
      );

      return;
    }
    // ===========================================================================================================================
    // 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
    // ===========================================================================================================================
    if (!message.content.startsWith(YouTix)) return;
    // ===========================================================================================================================
    // 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
    // ===========================================================================================================================
    let Arguments = message.content.slice(YouTix.length).trim().split(/ +/g);
    let Command = Arguments.shift().toLowerCase();
    Command =
      (await YouTIFY.commands.get(Command)) ||
      (await YouTIFY.commands.get(YouTIFY.aliases.get(Command)));
    // ===========================================================================================================================
    // 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
    // ===========================================================================================================================
    if (!Arguments || !Command) return;
    try {
      if (!CoolDowns.has(Command.help.name))
        await CoolDowns.set(Command.help.name, new Discord.Collection());
      const Timestamps = CoolDowns.get(Command.help.name),
        CoolDown = parseInt(Command.help.cooldown || 1000),
        Now = Date.now();
      if (Timestamps.has(message.author.id)) {
        const ExpireTime = Timestamps.get(message.author.id) + CoolDown;
        if (Now < ExpireTime) {
          await message.react("🔴");
          await message.channel.send(
            new MessageEmbed()
              .setTimestamp()
              .setColor("#b13d3d")
              .setTitle(`\`💬Slow Down\``)
              .setAuthor(
                `🎧YouTify™`,
                `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
              )
              .setURL("https://github.com/Krakinz")
              .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
              .addField(
                `\`💤Calm Down\``,
                `Please Wait ${Ms(ExpireTime - Now, {
                  verbose: true,
                  secondsDecimalDigits: 0,
                })} Before Using ${
                  Command.help.name.charAt(0).toUpperCase() +
                  Command.help.name.slice(1)
                } Command Again`
              )
          );

          return;
        }
      }
      Timestamps.set(message.author.id, Now);
      YouTIFY.YouTix = YouTix;
      await Command.run(YouTIFY, message, Arguments, Discord);
      setTimeout(() => Timestamps.delete(message.author.id), CoolDown);
      // ===========================================================================================================================
      // 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
      // ===========================================================================================================================
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      message.client.channels.cache.get(`896660877091164180`).send(
        new MessageEmbed()
          .setColor(`#b66c00`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setAuthor(`🎧YouTify™ by KrakinzLab™️`)
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
            message.author.avatarURL({ dynamic: true })
          ).setDescription(`
Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.
Error report:
*${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
      );
      // ====================================================—••÷[🎧YouTify™]÷••—====================================================
      message.channel.send("📙: sorry+code ORANGE message");
      message.react(`😔`);
      message.channel.send(
        // .setTitle(`\`\`\`🎧YouTify™ encountered an error.\`\`\``)
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b66c00`)
          .setAuthor(`🎧YouTify™ by KrakinzLab™️`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setDescription(`\`Please report to either\`
🔰[In ᴅɪꜱᴄᴏʀᴅ channel](https://discord.gg/y2PtYAJgpy)
🔰[In ᴛᴇʟᴇɢʀᴀᴍ group](https://t.me/Krakns)

\`Error🔻Caught and Auto Sent to Dev Server!\`

\`Fix?\`
Try use ?leave and play again!
Try use ?clean and play again!`)
      );
      console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
    }
    return;
    // ===========================================================================================================================
    // 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
    // ===========================================================================================================================
  } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
    message.client.channels.cache.get(`896660877091164180`).send(
      new MessageEmbed()
        .setColor(`#b66c00`)
        .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
        .setAuthor(`🎧YouTify™ by KrakinzLab™️`)
        .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
        .setFooter(
          "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
          message.author.avatarURL({ dynamic: true })
        ).setDescription(`
Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.
Error report:
*${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
    );

    // ====================================================—••÷[🎧YouTify™]÷••—====================================================
    message.channel.send("📙: sorry+code ORANGE message");
    message.react(`😔`);
    message.channel.send(
      new MessageEmbed()
        .setTimestamp()
        .setTitle(`\`\`\`🎧YouTify™ encountered an error.\`\`\``)
        .setColor(`#b66c00`)
        .setAuthor(`🎧YouTify™ by KrakinzLab™️`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
        .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
        .setDescription(`\`Please report to either\`
🔰[In ᴅɪꜱᴄᴏʀᴅ channel](https://discord.gg/y2PtYAJgpy)
🔰[In ᴛᴇʟᴇɢʀᴀᴍ group](https://t.me/Krakns)

\`Error🔻Caught and Auto Sent to Dev Server!\`

\`Fix?\`
Try use ?leave and play again!
Try use ?clean and play again!`)
    );
    console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
  }
});
// ===========================================================================================================================
// 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
YouTIFY.login(KRAKINZKEY).catch((error) => console.log(new Error(error)));
YouTIFY.on("error", (error) => {
  console.log(error);
});
var f = "..js";
module.exports = {
  YouTIFY,
  f,
  YouTifiedFilesSoundMake,
  CodeErrorDes,
  YouTifyReadyLoger,
};
// ===========================================================================================================================
// 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
async function CodeErrorDes() {
  console.log(ᴄʜᴀʟᴋ.red(`📕: error+code RED message`));
  console.log(ᴄʜᴀʟᴋ.yellow(`📙: sorry+code ORANGE message`));
  console.log(ᴄʜᴀʟᴋ.green(`📗: ok+code GREEN message`));
  console.log(ᴄʜᴀʟᴋ.blue(`📘: canceled status message`));
}
// ===========================================================================================================================
// 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
async function YouTifiedFilesSoundMake() {
  const Key = await SoundCloudZen.keygen();
  YouTIFY.SoundCloudZen = new SoundCloudZen.Client(Key);
}
// ===========================================================================================================================
// 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
async function YouTifyReadyLoger() {
  var YOuTiFyACTiViTy = [
      `${YouTix}PLAY`,
      `${YouTix}CLEAN`,
      `${YouTix}CQ`,
      `${YouTix}FILTER`,
      `${YouTix}JOIN`,
      `${YouTix}LEAVE`,
      `${YouTix}LOOP`,
      `${YouTix}LYRICS`,
      `${YouTix}NP`,
      `${YouTix}SEARCH`,
      `${YouTix}SKIP`,
      `${YouTix}SHUFFLE`,
      `${YouTix}VOLUME`, // `${YouTIFY.guilds.cache.size} servers`,      // `${YouTIFY.users.cache.size} users!`,
    ],
    i = 0;
  setInterval(
    () =>
      YouTIFY.user.setActivity(
        `${YouTix}HELP 🎧 ${YOuTiFyACTiViTy[i++ % YOuTiFyACTiViTy.length]}`,
        { type: "WATCHING" }
      ),
    5000
  );
  console.log(
    `🔱 | Bot-Name=> ${
      YouTIFY.user.username
    }!\n🔱 | Bot-Os=> ${Os.platform().toUpperCase()}!\n🔱 | Ready on=> ${
      YouTIFY.guilds.cache.size
    } servers!\n🔱 | Total Users=> ${YouTIFY.users.cache.size} users!`
  );
}
// ===========================================================================================================================
// 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
