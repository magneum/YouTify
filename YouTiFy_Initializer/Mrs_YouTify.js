const YouTifyYtDl = require("@distube/ytdl");
const YouTifySpotify = require("spotify-url-info");
const Discord = require("./youtify.djs");
const { EntireEffects } = require("./Effects.js");
const { Generate_Audio } = require("./Generate_Audio.js");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
async function HandleVoice(message, client) {
  const Queue = await client.queue.get(message.guild.id);
  await Queue.Connection.on("disconnect", () => {
    client.queue.delete(message.guild.id);
  });
  await Queue.Connection.dispatcher
    .on("finish", async () => {
      const Shift = await Queue.Songs.shift();
      if (Queue.Loop == true) await Queue.Songs.push(Shift);
      await Mrs_YouTify(client, message, { Song: Queue.Songs[0] });
    })
    .on("error", async (error) => {
      console.log(error);
      return Queue.Text.send("Something Went Wrong, Try Again Later!");
    });
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
async function Mrs_YouTify(client, message, options = {}) {
  const queue = await client.queue.get(message.guild.id), Encoder = await EntireEffects(queue);
  const Seek = options.Filter ? queue.ExtraTime ? queue.Connection.dispatcher.streamTime + queue.ExtraTime : queue.Connection.dispatcher.streamTime : undefined;
  if (queue.Steam) queue.Steam.destroy();
  if (!options.Song) {
    await queue.Voice.leave() && await client.queue.delete(message.guild.id);
    const End = new Discord.MessageEmbed()
      .setColor(client.Color)
      .setAuthor("Queue Ended", message.author.avatarURL({ dynamic: true }))
      .setDescription("Queue Has Been Ended, Please Add More Songs")
      .setTimestamp();
    return message.channel.send(End);
  };
  // ===========================================================================================================================
  // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
  // ===========================================================================================================================
  const Bitrates = client.ws.ping <= 20 ? 513000 : client.ws.ping <= 40 ? 128000 : client.ws.ping <= 60 ? 96000 : 64000;
  let Steam, Dispatcher, Link, Type, option = {
    opusEncoded: true,
    filter: "audioonly",
    dlChunkSize: 0,
    quality: "highestaudio",
    seek: Seek / 1000,
    encoderArgs: Encoder,
    highWaterMark: 1 << 25
  };
  // ===========================================================================================================================
  // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
  // ===========================================================================================================================
  if (options.Song.Type == "YouTube-Sr" || options.Song.Type == "YouTubeTrack") {
    options.Song.Type == "YouTube-Sr" ? options.Song.Other = await YouTifyYtDl.getInfo(options.Song.Link) : null;
    Link = options.Song.Other, Type = "YouTube-Sr", option["filter"] = options.Song.Other.videoDetails.isLiveContent ? "audioandvideo" : "audioonly";
  } else if (options.Song.Type == "SoundCloudTrack") {
    Link = await options.Song.Other.downloadProgressive(), Type = "AR";
  } else if (options.Song.Type == "SpotifyTrack") {
    Link = options.Song.Audio, Type = "AR";
  } else if (options.Song.Type == "SpotifyPlaylist") {
    const Data = await YouTifySpotify.getPreview(options.Song.Link);
    if (!Data) return message.channel.send("Error: No Playlist Found!");
    options.Song = await Generate_Audio(Data, message, Data, { Type: "SpotifyTrack" });
    Link = options.Song.Audio, Type = "AR";
  };
  // ===========================================================================================================================
  // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
  // ===========================================================================================================================
  Steam = Type == "YouTube-Sr" ? await YouTifyYtDl.downloadFromInfo(Link, option) : Type == "AR" ? await YouTifyYtDl.arbitraryStream(Link, option) : undefined;
  if (!Steam) return message.channel.send("Error: Something Went Wrong, Try Again Later!");
  Dispatcher = await queue.Connection.play(Steam, {
    volume: queue.Volume / 100,
    type: "opus",
    bitrate: Bitrates
  });
  queue.Steam = Steam;
  if (Seek) {
    queue.ExtraTime = 0;
  } else {
    const Embed = new Discord.MessageEmbed()
      .setColor(client.Color)
      .setAuthor("Playing", message.author.avatarURL({ dynamic: true }))
      .setThumbnail(queue.Songs[0].Thumbnail)
      .setDescription(`Now Playing - [${queue.Songs[0].Title}](${queue.Songs[0].Link})`)
      .setFooter(`Requested By ${message.author.username}`)
    queue.Text.send(Embed);
    Dispatcher.setVolumeLogarithmic(queue.Volume / 100);
    queue.ExtraTime = 0;
  };
  return HandleVoice(message, client);
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
module.exports = { Mrs_YouTify };