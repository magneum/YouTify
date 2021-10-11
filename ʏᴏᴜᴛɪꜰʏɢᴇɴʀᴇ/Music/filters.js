const { YouTify_Singer } = require("../../YouTifyPlayer/YouTify_Singer.js");
const { MessageEmbed } = require("../../YouTifyPlayer/YouTified.djs");
const { Filters } = require("../../YouTifyPlayer/Filters.js");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.run = async (client, message, args, Discord) => {
  const Channel = message.member.voice.channel;
  if (!Channel) return message.channel.send("Error: No Voice Channel!");

  const Queue = client.queue.get(message.guild.id);
  if (!Queue)
    return message.channel.send(
      "Error: No Queue, Please Add Some Songs By Using Play & Search Command!"
    );

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

  const Embed = new MessageEmbed()
    .setColor(client.Color)
    .setAuthor(
      Filter[0].toUpperCase() + Filter.slice(1),
      message.author.avatarURL({ dynamic: true })
    )
    .setDescription(
      `${Filter[0].toUpperCase() + Filter.slice(1)} Filter Has Been ${
        Queue.Filters[Filter]
          ? "Disabled (Song Maybe Backward)"
          : "Enabled (Song Maybe Ahead)"
      }!`
    )
    .setTimestamp();

  Queue.Filters[Filter] = !Queue.Filters[Filter];

  await YouTify_Singer(client, message, {
    Filter: true,
    Song: Queue.Songs[0],
  });

  return message.channel.send(Embed);
};

module.exports.help = {
  name: "filters",
  yougen: "Sebeta-v9.6.79ie0",
  aliases: ["modifiers", "newfilter"],
  cooldown: 10000,
  category: "Music",
  description: "Add/Remove A Music Filter To/From Currently Playing Song!",
  usage: "Filters <Name>",
  examples: ["filters bassboost", "filters superfast"],
};
