const { Regex } = require("./Regex..js");
const { AllFilters } = require("./Filters..js");
const Fetch = require("node-fetch").default;
const Discord = require("./YouTified.djs");
const Sr = require("youtube-sr").default;
const SP = require("spotify-url-info");
const Dl = require("./ytdl");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord..js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
async function YouTify_Type(Value) {
  if (Regex.VideoID.test(Value)) {
    return {
      T: "YT",
      L: `https://www.youtube.com/watch?v=${Regex.VideoID.exec(Value)[0]}`,
    };
  }
  if (Regex.VideoURL.test(Value) && !Value.toLowerCase().includes("list")) {
    return { T: "YT", L: Value };
  }
  if (Regex.PlaylistID.test(Value) && !Value.startsWith("http")) {
    return { T: "YTPL", L: `https://www.youtube.com/playlist?list=${Value}` };
  }
  if (Regex.PlaylistURL.test(Value)) {
    return { T: "YTPL", L: Value };
  }
  if (Regex.SCTrack.test(Value)) {
    return { T: "SC", L: Value };
  }
  if (Regex.SCPlaylist.test(Value)) {
    return { T: "SCPL", L: Value };
  }
  if (Regex.Spotify.test(Value) && Value.toLowerCase().includes("track")) {
    return { T: "SP", L: Value };
  }
  if (Regex.Spotify.test(Value) && Value.toLowerCase().includes("playlist")) {
    return { T: "SPPL", L: Value };
  }
  const Data = await Sr.searchOne(Value);
  if (!Data) {
    return undefined;
  }
  return {
    T: "YT",
    L: `https://www.youtube.com/watch?v=${Data.id}`,
  };
}

async function YouTify_Get_Meta_Data(Query, message) {
  const T = await YouTify_Type(Query);
  let Final, Info;
  if (!T) return undefined;

  if (T.T == "YT") {
    Info = await Dl.getInfo(T.L);
    if (!Info) return undefined;

    (Info = await YouTify_Generate_Audio(Info.videoDetails, message, Info)),
      (Info.P = false);
    return Info;
  } else if (T.T == "SC") {
    Info = await message.client.SoundCloudZen.getSongInfo(T.L);
    if (!Info) return undefined;

    (Info = await YouTify_Generate_Audio(Info, message, Info, { Type: "SC" })),
      (Info.P = false);
    return Info;
  } else if (T.T == "SP") {
    Info = await SP.getData(T.L);
    if (!Info) return undefined;

    Info = {
      Type: "SP",
      ID: Info.id,
      Title: Info.name,
      Audio: Info.preview_url,
      Req: message.author.username,
      Other: Info,
      Link: Info.external_urls.spotify,
      Duration: await FD(Info.duration_ms, "ms"),
    };
    await YouTify_Generate_Audio(Info, message, Info, { Type: "SP" }),
      (Info.P = false);
    return Info;
  } else if (["YTPL", "SCPL"].includes(T.T)) {
    Info =
      T.T == "YTPL"
        ? await Sr.getPlaylist(T.L)
        : await message.client.SoundCloudZen.getPlaylist(T.L);
    if (!Info) return undefined;

    const Songs = [],
      Type = {
        YTPL: "videos",
        SCPL: "tracks",
      };
    for (let Element of Info[Type[T.T]]) {
      const SInfo = await YouTify_Generate_Audio(Element, message, Element, {
        Type: T.T == "YTPL" ? "SR" : "SC",
      });
      if (typeof SInfo != "undefined") Songs.push(SInfo);
    }
    Final = {
      P: true,
      Name: Info.title,
      Thumbnail: Info.thumbnail,
      Count: Info[T.T == "YTPL" ? "videoCount" : "trackCount"],
      Views: Info.views || 0,
      Link: Info.url,
      Videos: Songs,
      Other: Info,
    };

    return Final;
  } else if (T.T == "SPPL") {
    try {
      Info = await SP.getData(T.L);
    } catch (e) {
      return undefined;
    }
    if (!Info) return undefined;

    const Songs = [];
    for (let Element of Info.tracks.items) {
      const Data = Element.track;
      Songs.push({
        Type: "SPPL",
        ID: Data.id,
        Title: Data.name,
        Audio: Data.preview_url,
        Link: Data.external_urls.spotify,
        Req: message.author.username,
        Other: Data,
      });
    }
    if (!Songs) return undefined;

    Final = {
      P: true,
      Name: Info.name,
      Thumbnail: Info.images[0].url,
      Link: Info.external_urls.spotify,
      Count: Info.tracks.items.length,
      Views: Info.followers.total,
      Videos: Songs,
      Other: Info,
    };
    return Final;
  }
}

async function YouTify_Generate_Audio(Song, message, all, options = {}) {
  const Link = Song.video_url
    ? Song.video_url
    : Song.id && !isNaN(Song.id)
    ? Song.url
    : Song.url
    ? Song.url
    : `https://www.youtube.com/watch?v=${Song.id}`;
  const Thumbnail = Song.thumbnails
    ? Song.thumbnails[0].url
    : Song.thumbnail
    ? Song.thumbnail.url
      ? Song.thumbnail.url
      : Song.thumbnail
    : Song.image;
  let Duration;
  if (Song.lengthSeconds || !String(Song.duration).includes(":")) {
    Duration = await FD(
      Song.lengthSeconds || Song.duration,
      Song.duration ? "ms" : " "
    );
  } else {
    Duration = Song.duration;
  }
  return {
    Type: options.Type || "YT",
    ID: Song.videoId || Song.id,
    Title: Song.title,
    Audio: Song.audio,
    Req: message.author.username,
    Other: all,
    Thumbnail,
    Duration,
    Link,
  };
}

async function FD(duration, type = " ") {
  if (type == "ms") duration = duration / 1000;

  let minutes = Math.floor(duration / 60);
  let hours = "";
  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    hours = hours >= 10 ? hours : "0" + hours;
    minutes = minutes - hours * 60;
    minutes = minutes >= 10 ? minutes : "0" + minutes;
  }
  duration = Math.floor(duration % 60);
  duration = duration >= 10 ? duration : "0" + duration;
  if (hours != "") {
    return hours + ":" + minutes + ":" + duration;
  }
  return minutes + ":" + duration;
}

async function HandleVoice(message, client) {
  const Queue = await client.queue.get(message.guild.id);
  await Queue.Connection.on("disconnect", () => {
    client.queue.delete(message.guild.id);
  });
  await Queue.Connection.dispatcher
    .on("finish", async () => {
      const Shift = await Queue.Songs.shift();
      if (Queue.Loop == true) await Queue.Songs.push(Shift);
      await YouTify_Singer(client, message, { Song: Queue.Songs[0] });
    })
    .on("error", async (error) => {
      console.log(error);
      Queue.Text.send("Something Went Wrong, Try Again Later!");
      return;
    });
}

async function YouTify_Singer(client, message, options = {}) {
  const queue = await client.queue.get(message.guild.id),
    Encoder = await AllFilters(queue);
  const Seek = options.Filter
    ? queue.ExtraTime
      ? queue.Connection.dispatcher.streamTime + queue.ExtraTime
      : queue.Connection.dispatcher.streamTime
    : undefined;

  if (queue.Steam) queue.Steam.destroy();

  if (!options.Song) {
    (await queue.Voice.leave()) &&
      (await client.queue.delete(message.guild.id));
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor(client.Color)
        .setAuthor("Queue Ended", message.author.avatarURL({ dynamic: true }))
        .setDescription("Queue Has Been Ended, Please Add More Songs")
        .setTimestamp()
    );
  }

  const Bitrates =
    client.ws.ping <= 20
      ? 513000
      : client.ws.ping <= 40
      ? 128000
      : client.ws.ping <= 60
      ? 96000
      : 64000;
  let Steam,
    Dispatcher,
    Link,
    Type,
    option = {
      opusEncoded: true,
      filter: "audioonly",
      dlChunkSize: 0,
      quality: "highestaudio",
      seek: Seek / 1000,
      encoderArgs: Encoder,
      highWaterMark: 1 << 25,
    };

  if (options.Song.Type == "SR" || options.Song.Type == "YT") {
    options.Song.Type == "SR"
      ? (options.Song.Other = await Dl.getInfo(options.Song.Link))
      : null;
    (Link = options.Song.Other),
      (Type = "SR"),
      (option["filter"] = options.Song.Other.videoDetails.isLiveContent
        ? "audioandvideo"
        : "audioonly");
  } else if (options.Song.Type == "SC") {
    (Link = await options.Song.Other.downloadProgressive()), (Type = "AR");
  } else if (options.Song.Type == "SP") {
    (Link = options.Song.Audio), (Type = "AR");
  } else if (options.Song.Type == "SPPL") {
    const Data = await SP.getPreview(options.Song.Link);
    if (!Data) {
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`💬Clean\``)
          .setAuthor(
            `🎧YouTify™`,
            `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
          )
          .setURL("https://github.com/Krakinz")
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addField(`\`☣️Error\``, `No Playlist Found!`, true)
      );
      return;
    }

    options.Song = await YouTify_Generate_Audio(Data, message, Data, {
      Type: "SP",
    });
    (Link = options.Song.Audio), (Type = "AR");
  }

  Steam =
    Type == "SR"
      ? Dl.downloadFromInfo(Link, option)
      : Type == "AR"
      ? Dl.arbitraryStream(Link, option)
      : undefined;
  if (!Steam)
    return message.channel.send(
      "Error: Something Went Wrong, Try Again Later!"
    );
  Dispatcher = await queue.Connection.play(Steam, {
    volume: queue.Volume / 100,
    type: "opus",
    bitrate: Bitrates,
  });
  let Channel = message.member.voice.channel;
  queue.Steam = Steam;
  if (Seek) {
    queue.ExtraTime = 0;
  } else {
    var YouTifyMusic = await queue.Text.send(
      new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#43745a")
        .setAuthor(
          `🍏YouTify™`,
          `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
        )
        .setURL("https://github.com/Krakinz")
        .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
        .setFooter(`👈🏽‍Reqstd by`, message.author.avatarURL({ dynamic: true }))
        .setTitle(`\`\`\`₦ðw🍏þlå¥ïñg\`\`\``)
        .setImage(queue.Songs[0].Thumbnail)
        .addField(
          `\`Title\``,
          `🏷[${queue.Songs[0].Title}](${queue.Songs[0].Link})`,
          true
        )
        .addField(`\`Duration\``, `🕰️${queue.Songs[0].Duration}`, true)
        .addField(`\`Requested By\``, `💬${message.author}`, true)
        .addField(
          `\`YouTify\``,
          `🍏Use ${client.YouTix}help to know more about YouTify™`,
          true
        )
        .addField(
          `\`Filters\``,
          `🎹Use ${client.YouTix}filter to know more about Available Audio filters`,
          true
        )
        .addField(`\`Coded by\``, `👑Krakinz#7134`, true)
        .addField(`\`👍 Joined\``, `❣️\`${Channel.name}`, true)
        .addField(`\`📄 Bound to\``, `\`#${message.channel.name}\``, true)
    ).catch(console.error);
    await YouTifyMusic.react("❤️").catch(console.error);
    Dispatcher.setVolumeLogarithmic(queue.Volume / 100);
    queue.ExtraTime = 0;
  }
  HandleVoice(message, client);
  return;
}
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord..js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports = {
  YouTify_Type,
  YouTify_Get_Meta_Data,
  YouTify_Singer,
  YouTify_Generate_Audio,
};
