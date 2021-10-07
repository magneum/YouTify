const { MessageEmbed } = require("discord.js");
const Discord = require(`discord.js`);
module.exports.run = async (client, message, args) => {
  let Categories = ["YouTify", "Home", "Filters"],
    YouTifyCommanders = [];
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  const Emotes = {
    YouTify: `🍏\`YouTify\``,
    Filters: `🎶\`Filters\``,
    Home: `❔\`Home\``,
  };
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  for (let i = 0; i < Categories.length; i++) {
    const Cmds = await client.commands
      .filter((C) => C.help.category === Categories[i])
      .array()
      .map((C) => C.help.name)
      .sort((a, b) => (a < b ? -1 : 1))
      .join(", ");
    YouTifyCommanders.push(`\n\n**•${Emotes[Categories[i]]}**\n${Cmds}`);
  }
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  if (!args[0]) {
    message.react("✅");
    message.channel.send("📗: ok status message").catch(console.error);
    message.author.send(
      new MessageEmbed()
        .setColor("#8DB600")
        .setDescription(`**👍 Sent from <#${message.channel.id}>**`)
    );
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    message.author.send(
      new MessageEmbed()
        .setTimestamp()
        .setColor("#8DB600")
        .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
        .setURL(`https://github.com/Krakinz?tab=repositories`)
        .setFooter(
          "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
          message.author.avatarURL({
            dynamic: true,
          })
        )
        .setTitle(`\`\`\` 🍏YouTify™ Help Menu \`\`\``)
        .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
        .setImage(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
        .setDescription(
          `**•\`ʏᴏᴜꜰɪx\`** 
${client.ʏᴏᴜꜰɪx}

**•\`For More Command Information\`**
${client.ʏᴏᴜꜰɪx}help loop
${client.ʏᴏᴜꜰɪx}help play
${YouTifyCommanders.join("") + ""}`
        )
    );
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    message.channel.send(
      new MessageEmbed()
        .setTimestamp()
        .setColor("#8DB600")
        .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
        .setURL(`https://github.com/Krakinz?tab=repositories`)
        .setFooter(
          "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
          message.author.avatarURL({
            dynamic: true,
          })
        )
        .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
        .setDescription(
          `\`User\`🍏${message.author}\n\nCheck your \`direct messages\` for a list of **🍏YouTify™** Commands!`
        )
    );
    return;
  }
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  args[0] = args[0].toLowerCase();
  let Cmd =
    client.commands.get(args[0]) ||
    client.commands.get(client.aliases.get(args[0]));
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  if (!Cmd) {
    message.channel.send("📕: error+code RED message").catch(console.error);
    message.react(`❌`);
    message.channel.send("Error: No Command Found!");
    return;
  } else {
    Cmd = Cmd.help;
  }
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  if (args[1] && args[1] == client.token) {
    message.channel.send("📕: error+code RED message").catch(console.error);
    message.react(`❌`);
    message.channel.send(
      new MessageEmbed()
        .setColor(`#b60000`)
        .setAuthor(
          "Wrong Usage",
          message.client.user.avatarURL({
            dynamic: true,
          })
        )
        .addField("Usage", Cmd.usage ? client.ʏᴏᴜꜰɪx + Cmd.usage : "None", true)
        .addField(
          "Examples",
          Cmd.examples
            ? Cmd.examples.join("\n").length === 0
              ? "None"
              : Cmd.examples.map((C) => client.ʏᴏᴜꜰɪx + C).join("\n")
            : "None"
        )
        .setTimestamp()
    );
    return;
  } else {
    message.react("✅");
    message.channel.send("📗: ok status message").catch(console.error);
    message.channel.send(
      new MessageEmbed()
        .setColor("#8DB600")
        .setAuthor(
          "Command",
          message.author.avatarURL({
            dynamic: true,
          })
        )
        .setDescription(Cmd.description)
        .addField("Name", Cmd.name, true)
        .addField("Category", Cmd.category, true)
        .addField(
          "Aliases",
          Cmd.aliases
            ? Cmd.aliases.join(", ").length === 0
              ? "None"
              : Cmd.aliases.join(", ")
            : "None"
        )
        .addField("Usage", Cmd.usage, true)
        .addField(
          "Examples",
          Cmd.examples
            ? Cmd.examples.join("\n").length === 0
              ? "None"
              : Cmd.examples.join("\n")
            : "None"
        )
        .setTimestamp()
    );
    return;
  }
};
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
module.exports.help = {
  name: "help",
  aliases: ["h"],
  cooldown: 5000,
  category: "Home",
  description: "Get Bot Commands!",
  usage: "Help | <Command Name>",
  examples: ["help", "help setprefix", "help play"],
};
