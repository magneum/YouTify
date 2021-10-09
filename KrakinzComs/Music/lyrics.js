const Finder = require("lyrics-finder");
const { MessageEmbed } = require("../../YouTiFy_Initializer/youtify.djs");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
module.exports.run = async (client, message, args, Discord) => {
  const Queue = client.queue.get(message.guild.id);
  if (!Queue) {
    await message.react("🟡")
    await message.channel.send(new MessageEmbed()
      .setTimestamp()
      .setColor("#c4b932")
      .setTitle(`\`💬Lyrics\``)
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
  let Lyric, Thing = Queue ? Queue.Songs[0].Title : args.join(" "), NoSong = false;
  try {
    Lyric = await Finder(Thing, "");
    if (!Lyric && Queue && args[0]) {
      Lyric = await Finder(args.join(" "));
      NoSong = true;
    };
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    if (!Lyric) {
      message.channel.send(`Sorry! No Lyrics Found for ${NoSong ? args.join(" ") : Thing}`)
      return;
    }
  } catch (e) {
    message.channel.send(`Sorry! No Lyrics Found for ${Thing}`)
    return;
  };
  // ===========================================================================================================================
  // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
  // ===========================================================================================================================
  Lyric = Lyric.replace(/(.{2021})/g, "\n1\n");
  message.channel.send(Lyric, { split: { char: "\n" } })
  return;
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
module.exports.help = {
  name: "lyrics",
  aliases: ["lyric", "ly"],
  cooldown: 7000,
  category: "Music",
  description: "Show Song Lyrics",
  usage: "Lyrics | <Title>",
  examples: ["lyrics", "lyrics we don't talk anymore", "lyrics shape of you", "lyrics despacito"]
};