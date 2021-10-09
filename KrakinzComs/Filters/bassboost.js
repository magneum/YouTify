const { Mrs_YouTify } = require("../../YouTiFy_Initializer/Mrs_YouTify.js");
const { MessageEmbed } = require("../../YouTiFy_Initializer/youtify.djs");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
module.exports.run = async (client, message) => {
    const Channel = message.member.voice.channel;
    if (!Channel) return message.channel.send("Error: No Voice Channel!");
    const Queue = client.queue.get(message.guild.id);
    if (!Queue) return message.channel.send("Error: No Queue, Please Add Some Songs By Using Play & Search Command!");

    const Embed = new MessageEmbed()
        .setAuthor("Bassboost", message.author.avatarURL({
            dynamic: true
        }))
        .setDescription(`Bassboost Filter Has Been ${Queue.Filters["bassboost"] ? "Disabled (Song Maybe Backward)" : "Enabled (Song Maybe Ahead)"}!`)
        .setTimestamp();

    Queue.Filters["bassboost"] = !Queue.Filters["bassboost"]

    await Mrs_YouTify(client, message, {
        Filter: true,
        Song: Queue.Songs[0]
    });

    return message.channel.send(Embed);
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
module.exports.help = {
    name: "bassboost",
    aliases: ["bb"],
    cooldown: 7000,
    category: "Filters",
    description: "Add/Remove Bassboost Filter To/From Currently Playing Song!",
    usage: "Bassboost",
    examples: ["bassboost"]
};