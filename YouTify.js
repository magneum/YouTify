const Fs = require("fs");
const Os = require(`os`);
require("dotenv").config();
const ᴄʜᴀʟᴋ = require("chalk");
const Ms = require("pretty-ms");
const Token = process.env.Token;
const YouTix = process.env.YouTix;
const SC = require("soundcloud-scraper");
const Categories = ["Music", "System", "Filters"];
const Discord = require("./YouTiFy_Initializer/youtify.djs"), Client = new Discord.Client({ restTimeOffset: 10 }), CoolDowns = new Discord.Collection();
Client.commands = new Discord.Collection(), Client.aliases = new Discord.Collection(), Client.queue = new Map();
Client.login(Token).catch((e) => console.log(new Error(e)));
const style = `font-weight: bold;font-size: 50px;color: red;text-shadow: 3px 3px 0 rgb(217,31,38) ,6px 6px 0 rgb(226,91,14) ,
9px 9px 0 rgb(245,221,8) ,12px 12px 0 rgb(5,148,68) ,15px 15px 0 rgb(2,135,206) ,18px 18px 0 rgb(4,77,145) ,21px 21px 0 rgb(42,21,113)`;
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
Client.on("guildCreate", (guild) => {
   const channel = guild.channels.cache.find(
      (channel) =>
         channel.type === `text` &&
         channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
   );
   channel.send(`@everyone`);
   channel
      .send(
         new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`#8DB600`)
            .setTitle(`\`\`\`🍏YouTify™\`\`\``)
            .setURL(`https://github.com/Krakinz`)
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
            .setDescription(`
\`\`\`🍏𝐇𝐞𝐲 𝐭𝐡𝐞𝐫𝐞 𝐌𝐔𝐒𝐈𝐂 𝐥𝐨𝐯𝐞𝐫𝐬🎶!\`\`\`
---------------::---------------
❤️ɪ ɢᴏᴛ ʏᴏᴜ ᴀʟʟ ᴄᴏᴠᴇʀᴇᴅ ᴡɪᴛʜ ᴅɪʀᴇᴄᴛ ᴍᴜꜱɪᴄ ꜱᴛʀᴇᴀᴍɪɴɢ ᴛᴏ ᴅɪꜱᴄᴏʀᴅ ᴠᴏɪᴄᴇ ᴄʜᴀɴɴᴇʟ.🔥
**🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™** 𝘪𝘴 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 **𝐘𝐎𝐔𝐓𝐔𝐁𝐄** 𝘔𝘶𝘴𝘪𝘤 𝘉𝘰𝘵 𝘣𝘶𝘪𝘭𝘵 𝘸𝘪𝘵𝘩 𝘋𝘪𝘴𝘤𝘰𝘳𝘥.𝘫𝘴 𝘢𝘯𝘥 𝘩𝘢𝘴 **𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬.**
**❓❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓❓**
---------------::---------------

---------------::---------------
:candy:\`YouTify Basic Commands\`
**?play | ?help to know more...**
---------------::---------------

---------------::----------------
**:star:\`Note to @everyone\`**
ᴀ channel ɴᴀᴍᴇ \`🍏YouTify™\` inside \`🔱Krakinz\` has been successfully created.
Please use \` Channel: 🍏YouTify™ \` For any \`🍏YouTify™\` commands.
---------------::---------------`)
      )
      .catch(console.error);
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
         guild.channels
            .create(`🍏ʏᴏᴜᴛɪꜰʏ™`, {
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
                     allow: [
                        `VIEW_CHANNEL`,
                        `SEND_MESSAGES`,
                        `READ_MESSAGE_HISTORY`,
                     ],
                  },
               ],
            })
            .catch(console.error);
         return;
      });
})
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
Client.on("error", (error) => {
   console.log(error);
});
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
Client.on("message", async (message) => {
   if (message.author.bot) {
      return;
   }
   if (message.webhookID) {
      return;
   }
   if (!message.guild) {
      message.channel.send("DM")
   }
   if (!message.content.startsWith(YouTix)) return;
   let Arguments = message.content.slice(YouTix.length).trim().split(/ +/g);
   let Command = Arguments.shift().toLowerCase();
   Command = await Client.commands.get(Command) || await Client.commands.get(Client.aliases.get(Command));
   if (!Arguments || !Command) return;
   try {
      if (!CoolDowns.has(Command.help.name)) await CoolDowns.set(Command.help.name, new Discord.Collection());
      const Timestamps = CoolDowns.get(Command.help.name), CoolDown = parseInt(Command.help.cooldown || 1000), Now = Date.now();
      if (Timestamps.has(message.author.id)) {
         const ExpireTime = Timestamps.get(message.author.id) + CoolDown;
         if (Now < ExpireTime) {
            const Embed = new Discord.MessageEmbed()
               .setColor("RED")
               .setAuthor("Slow Down", message.author.avatarURL({ dynamic: true }))
               .setDescription(`Please Wait **${Ms(ExpireTime - Now, { verbose: true, secondsDecimalDigits: 0 })}** Before Using ${Command.help.name.charAt(0).toUpperCase() + Command.help.name.slice(1)} Command Again`)
               .setTimestamp();
            return message.channel.send(Embed);
         };
      };
      Timestamps.set(message.author.id, Now);
      Client.YouTix = YouTix;
      await Command.run(Client, message, Arguments, Discord);
      setTimeout(() => Timestamps.delete(message.author.id), CoolDown);
   } catch (error) {
      return message.channel.send("Something Went Wrong, Try Again Later").then(() => console.log(error));
   };
});
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
Categories.forEach((Category) => {
   Fs.readdir(`./KrakinzComs/${Category}`, (error, Files) => {
      if (error) throw error;
      Files.forEach((File) => {
         if (!File.endsWith(".js")) return;
         const Cmd = require(`./KrakinzComs/${Category}/${File}`);
         if (!Cmd.help.name || !Cmd.help.aliases) {
            console.log(ᴄʜᴀʟᴋ.yellow("YouTify's ❓"), ᴄʜᴀʟᴋ.red(` [ ${Cmd.help.name ? Cmd.help.name : "?"} ] Failed To Load - ❌`));
            return;
         }
         Client.commands.set(Cmd.help.name, Cmd);
         Cmd.help.aliases ? Cmd.help.aliases.forEach(Alias => Client.aliases.set(Alias, Cmd.help.name)) : Cmd.help.aliases = null;
         ComUp = Cmd.help.name.toUpperCase();
         console.log(ᴄʜᴀʟᴋ.yellow("YouTify's ✅"), ᴄʜᴀʟᴋ.green(` [ ${ComUp} ] command has been loaded!`));
      });
   });
});
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ==============================================================================G=============================================
Client.on("ready", async () => {
   console.log(ᴄʜᴀʟᴋ.red(`📕: error+code RED message`));
   console.log(ᴄʜᴀʟᴋ.yellow(`📙: sorry+code ORANGE message`));
   console.log(ᴄʜᴀʟᴋ.green(`📗: ok+code GREEN message`));
   console.log(ᴄʜᴀʟᴋ.blue(`📘: canceled status message`));
   console.log(`🔱Bot-Name:~~> ${Client.user.username}!\n🔱Bot-Os:~~> ${Os.platform().toUpperCase()}!\n🔱Ready on:~~> ${Client.guilds.cache.size} servers!\n🔱Total Users:~~> ${Client.users.cache.size} users!`);
   console.log(`${Client.user.username} is READY!`);
   Client.user.setActivity(`? help🍏?play`, {
      type: `WATCHING`,
   });
   const Key = await SC.keygen();
   Client.SC = new SC.Client(Key);
});
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ==============================================================================G=============================================