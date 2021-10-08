const { _Youtify_, Filters } = require("../🍏/_Youtify_.js");

module.exports.run = async (client, message, args, ᴅɪꜱᴄᴏʀᴅ) => {
  const Channel = message.member.voice.channel;
  if (!Channel) {
    message.channel.send("📕: error+code RED message").catch(console.error);
    message.react(`❌`);
    message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b60000`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setURL(`https://github.com/Krakinz`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
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
  const Queue = client.queue.get(message.guild.id);
  if (!Queue) {
    message.channel.send("📕: error+code RED message").catch(console.error);
    message.react(`❌`);
    message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b60000`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setURL(`https://github.com/Krakinz`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
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
  let Filter = args[0],
    All = await Object.keys(await Filters());
  if (!Filter)
    return message.channel.send(
      "Please Give Filter Name - " +
      All.map((E) => E[0].toUpperCase() + E.slice(1)).join(", ")
    );
  if (!All.includes(Filter.toLowerCase()))
    return message.channel.send("No Filter Found - " + Filter);
  if (
    Object.keys(Queue.Filters).length >= 3 &&
    !Queue.Filters[Filter.toLowerCase()]
  )
    return message.channel.send("Error: Filters Limit Surpassed - 3");

  Filter = Filter.toLowerCase();

  const Embed = new ᴅɪꜱᴄᴏʀᴅ.MessageEmbed()
    .setColor("#8DB600")
    .setAuthor(
      Filter[0].toUpperCase() + Filter.slice(1),
      message.author.avatarURL({
        dynamic: true,
      })
    )
    .setDescription(
      `${Filter[0].toUpperCase() + Filter.slice(1)} Filter Has Been ${Queue.Filters[Filter]
        ? "Disabled (Song Maybe Backward)"
        : "Enabled (Song Maybe Ahead)"
      }!`
    )
    .setTimestamp();

  Queue.Filters[Filter] = !Queue.Filters[Filter];

  await _Youtify_(client, message, {
    Filter: true,
    Song: Queue.Songs[0],
  });

  return message.channel.send(Embed);
};

module.exports.help = {
  name: "filters",
  aliases: ["modifiers", "newfilter"],
  cooldown: 7000,
  category: "Filters",
  description: `Add/Remove A YouTify Filter To/From Currently Playing Song! (Type ${client.ʏᴏᴜꜰɪx}bb for bassboost..)`,
  usage: `${client.ʏᴏᴜꜰɪx}<Name>`,
  examples: [`${client.ʏᴏᴜꜰɪx}bassboost`, `${client.ʏᴏᴜꜰɪx}subboost`, `${client.ʏᴏᴜꜰɪx}nightcore`],
};
