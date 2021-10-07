const YouTify_YtSr = require("youtube-sr").default;
const YouTify_SpotDL = require("spotify-url-info");
const YouTify_YtDL = require("@distube/ytdl");
const getVideoId = require("get-video-id");
const { MessageEmbed } = require("discord.js");
const Discord = require(`discord.js`);
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
const Regex = {
  YouTify_Video_ID: /^[a-zA-Z0-9-_]{11}$/,
  YouTify_Video_URL:
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
  YouTify_Playlist_ID: /(PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41}/,
  YouTify_Playlist_URL:
    /https?:\/\/(www.)?youtube.com\/playlist\?list=((PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41})/,
  YouTify_SoundCloud_Single:
    /^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)\/?$/,
  YouTify_SoundCloud_Playlist:
    /^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/sets\/([A-Za-z0-9_-]+)\/?$/,
  YouTify_Spotify: /^(spotify:|https:\/\/[a-z]+\.spotify\.com\/)/,
};
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
async function Type(Value) {
  if (Regex.YouTify_Video_ID.test(Value))
    return {
      YouTify_Thirst: "YT",
      YouTify_Load: `https://www.youtube.com/watch?v=${
        Regex.YouTify_Video_ID.exec(Value)[0]
      }`,
    };
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  if (
    Regex.YouTify_Video_URL.test(Value) &&
    !Value.toLowerCase().includes("list")
  )
    return { YouTify_Thirst: "YT", YouTify_Load: Value };
  if (Regex.YouTify_Playlist_ID.test(Value) && !Value.startsWith("http"))
    return {
      YouTify_Thirst: "YOUTUBEPLAYLIST",
      YouTify_Load: `https://www.youtube.com/playlist?list=${Value}`,
    };
  if (Regex.YouTify_Playlist_URL.test(Value))
    return { YouTify_Thirst: "YOUTUBEPLAYLIST", YouTify_Load: Value };
  if (Regex.YouTify_SoundCloud_Single.test(Value))
    return { YouTify_Thirst: "SCOUNDCLOUD", YouTify_Load: Value };
  if (Regex.YouTify_SoundCloud_Playlist.test(Value))
    return { YouTify_Thirst: "SCOUNDCLOUDPLAYLIST", YouTify_Load: Value };
  if (
    Regex.YouTify_Spotify.test(Value) &&
    Value.toLowerCase().includes("track")
  )
    return { YouTify_Thirst: "YouTify_SpotDL", YouTify_Load: Value };
  if (
    Regex.YouTify_Spotify.test(Value) &&
    Value.toLowerCase().includes("playlist")
  )
    return { YouTify_Thirst: "SPOTIFYPLAYLIST", YouTify_Load: Value };
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  const Data = await YouTify_YtSr.searchOne(Value);
  if (!Data) return undefined;
  return {
    YouTify_Thirst: "YT",
    YouTify_Load: `https://www.youtube.com/watch?v=${Data.id}`,
  };
}
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
async function YouTify_Find_Infos(Query, message) {
  const YouTify_Thirst = await Type(Query);
  let YouTify_Final, Info;
  if (!YouTify_Thirst) return undefined;
  if (YouTify_Thirst.YouTify_Thirst == "YT") {
    Info = await YouTify_YtDL.getInfo(YouTify_Thirst.YouTify_Load);
    if (!Info) return undefined;
    (Info = await YouTify_Song_Feeder(Info.videoDetails, message, Info)),
      (Info.YouTify_Point = false);
    return Info;
  } else if (YouTify_Thirst.YouTify_Thirst == "SCOUNDCLOUD") {
    Info = await message.client.SCOUNDCLOUD.getSongInfo(
      YouTify_Thirst.YouTify_Load
    );
    if (!Info) return undefined;
    (Info = await YouTify_Song_Feeder(Info, message, Info, {
      Type: "SCOUNDCLOUD",
    })),
      (Info.YouTify_Point = false);
    return Info;
  } else if (YouTify_Thirst.YouTify_Thirst == "YouTify_SpotDL") {
    Info = await YouTify_SpotDL.getData(YouTify_Thirst.YouTify_Load);
    if (!Info) return undefined;
    Info = {
      Type: "YouTify_SpotDL",
      ID: Info.id,
      Title: Info.name,
      Audio: Info.preview_url,
      Req: message.author.username,
      Other: Info,
      Link: Info.external_urls.spotify,
      Duration: await FD(Info.duration_ms, "ms"),
    };
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    await YouTify_Song_Feeder(Info, message, Info, { Type: "YouTify_SpotDL" }),
      (Info.YouTify_Point = false);
    return Info;
  } else if (
    ["YOUTUBEPLAYLIST", "SCOUNDCLOUDPLAYLIST"].includes(
      YouTify_Thirst.YouTify_Thirst
    )
  ) {
    Info =
      YouTify_Thirst.YouTify_Thirst == "YOUTUBEPLAYLIST"
        ? await YouTify_YtSr.getPlaylist(YouTify_Thirst.YouTify_Load)
        : await message.client.SCOUNDCLOUD.getPlaylist(
            YouTify_Thirst.YouTify_Load
          );
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (!Info) return undefined;
    const Songs = [],
      Type = {
        YOUTUBEPLAYLIST: "videos",
        SCOUNDCLOUDPLAYLIST: "tracks",
      };
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    for (let Element of Info[Type[YouTify_Thirst.YouTify_Thirst]]) {
      const SInfo = await YouTify_Song_Feeder(Element, message, Element, {
        Type:
          YouTify_Thirst.YouTify_Thirst == "YOUTUBEPLAYLIST"
            ? "SR"
            : "SCOUNDCLOUD",
      });
      if (typeof SInfo != "undefined") Songs.push(SInfo);
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    YouTify_Final = {
      YouTify_Point: true,
      Name: Info.title,
      Thumbnail: Info.thumbnail,
      Count:
        Info[
          YouTify_Thirst.YouTify_Thirst == "YOUTUBEPLAYLIST"
            ? "videoCount"
            : "trackCount"
        ],
      Views: Info.views || 0,
      Link: Info.url,
      Videos: Songs,
      Other: Info,
    };
    return YouTify_Final;
  } else if (YouTify_Thirst.YouTify_Thirst == "SPOTIFYPLAYLIST") {
    try {
      Info = await YouTify_SpotDL.getData(YouTify_Thirst.YouTify_Load);
    } catch (YouTify_Error) {
      return undefined;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (!Info) return undefined;
    const Songs = [];
    for (let Element of Info.tracks.items) {
      const Data = Element.track;
      Songs.push({
        Type: "SPOTIFYPLAYLIST",
        ID: Data.id,
        Title: Data.name,
        Audio: Data.preview_url,
        Link: Data.external_urls.spotify,
        Req: message.author.username,
        Other: Data,
      });
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (!Songs) return undefined;
    YouTify_Final = {
      YouTify_Point: true,
      Name: Info.name,
      Thumbnail: Info.images[0].url,
      Link: Info.external_urls.spotify,
      Count: Info.tracks.items.length,
      Views: Info.followers.total,
      Videos: Songs,
      Other: Info,
    };
    return YouTify_Final;
  }
}
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
async function YouTify_Song_Feeder(Song, message, all, options = {}) {
  const Link = Song.video_url
    ? Song.video_url
    : Song.id && !isNaN(Song.id)
    ? Song.url
    : Song.url
    ? Song.url
    : `https://www.youtube.com/watch?v=${Song.id}`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  const Thumbnail = Song.thumbnails
    ? Song.thumbnails[0].url
    : Song.thumbnail
    ? Song.thumbnail.url
      ? Song.thumbnail.url
      : Song.thumbnail
    : Song.image;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
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
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
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
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
async function AllFilters(Queue) {
  let EncodeFilters = [],
    Encoder = [];
  for (let Filter of Object.keys(Queue.Filters)) {
    if (Queue.Filters[Filter]) {
      EncodeFilters.push((await Filters())[Filter]);
    }
  }
  if (EncodeFilters.length < 1) {
    Ecoder = [];
  } else {
    Encoder = ["-af", EncodeFilters.join(",")];
  }
  return Encoder;
}
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
async function YouTify_Manager(message, client) {
  const Queue = await client.queue.get(message.guild.id);
  await Queue.Connection.on("disconnect", () => {
    client.queue.delete(message.guild.id);
  });
  await Queue.Connection.dispatcher
    .on("finish", async () => {
      const Shift = await Queue.Songs.shift();
      if (Queue.Loop == true) await Queue.Songs.push(Shift);
      await _Youtify_(client, message, { Song: Queue.Songs[0] });
    })
    .on("error", async (error) => {
      console.log(error);
      Queue.Text.send("Something Went Wrong, Try Again Later!");
      return;
    });
}
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
async function _Youtify_(client, message, options = {}) {
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
    const End = new MessageEmbed()
      .setColor("#8DB600")
      .setAuthor("Queue Ended", message.author.avatarURL({ dynamic: true }))
      .setDescription("Queue Has Been Ended, Please Add More Songs")
      .setTimestamp();
    message.channel.send(End);
    return;
  }
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  const Bitrates =
    client.ws.ping <= 20
      ? 513000
      : client.ws.ping <= 40
      ? 128000
      : client.ws.ping <= 60
      ? 96000
      : 64000;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
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
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  if (options.Song.Type == "SR" || options.Song.Type == "YT") {
    options.Song.Type == "SR"
      ? (options.Song.Other = await YouTify_YtDL.getInfo(options.Song.Link))
      : null;
    (Link = options.Song.Other),
      (Type = "SR"),
      (option["filter"] = options.Song.Other.videoDetails.isLiveContent
        ? "audioandvideo"
        : "audioonly");
  } else if (options.Song.Type == "SCOUNDCLOUD") {
    (Link = await options.Song.Other.downloadProgressive()), (Type = "AR");
  } else if (options.Song.Type == "YouTify_SpotDL") {
    (Link = options.Song.Audio), (Type = "AR");
  } else if (options.Song.Type == "SPOTIFYPLAYLIST") {
    const Data = await YouTify_SpotDL.getPreview(options.Song.Link);
    if (!Data) {
      message.channel.send("Error: No Playlist Found!");
      return;
    }
    options.Song = await YouTify_Song_Feeder(Data, message, Data, {
      Type: "YouTify_SpotDL",
    });
    (Link = options.Song.Audio), (Type = "AR");
  }
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  Steam =
    Type == "SR"
      ? await YouTify_YtDL.downloadFromInfo(Link, option)
      : Type == "AR"
      ? await YouTify_YtDL.arbitraryStream(Link, option)
      : undefined;
  if (!Steam) {
    message.channel.send("Error: Something Went Wrong, Try Again Later!");
    return;
  }
  Dispatcher = await queue.Connection.play(Steam, {
    volume: queue.Volume / 100, // no 200 volume please
    type: "opus",
    bitrate: Bitrates,
  });
  queue.Steam = Steam;
  if (Seek) {
    queue.ExtraTime = 0;
  } else {
    const { id } = getVideoId(`${queue.Songs[0].Link}`);
    await queue.Text.send(
      new MessageEmbed()
        .setColor("#8DB600")
        .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
        .setURL(`https://github.com/Krakinz?tab=repositories`)
        .setAuthor(`\`\`\`Now🍏Playing\`\`\``)
        .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
        .setImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
        .setFooter(
          "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
          message.author.avatarURL({ dynamic: true })
        ).setDescription(`**𝘋𝘪𝘳𝘦𝘤𝘵 𝘚𝘵𝘳𝘦𝘢𝘮𝘪𝘯𝘨 𝘶𝘴𝘪𝘯𝘨:** \`ʏօʊȶɨʄɨƈɨօʊֆ.js\`

\`𝐓𝐢𝐭𝐥𝐞\`
**🏷[${queue.Songs[0].Title}](${queue.Songs[0].Link})**
\`𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧\`
**🏷${queue.Songs[0].Duration}**
\`𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐁𝐲\`
**🏷${message.author} aka ${message.author.username}**`)
    );
    Dispatcher.setVolumeLogarithmic(queue.Volume / 100);
    queue.ExtraTime = 0;
  }
  return YouTify_Manager(message, client);
}
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
async function Filters() {
  return {
    haas: "haas",
    gate: "agate",
    earwax: "earwax",
    speed: "atempo=2",
    flanger: "flanger",
    aphaser: "aphaser",
    slow: "atempo=0.8",
    tremolo: "tremolo",
    reverse: "areverse",
    mcompand: "mcompand",
    surround: "surround",
    treble: "treble=g=5",
    asetrate: "asetrate",
    subboost: "asubboost",
    superspeed: "atempo=3",
    deesser: "deesser=i=1",
    apulsator: "apulsator",
    sofalizer: "sofalizer",
    superslow: "atempo=0.5",
    vibrato: "vibrato=f=6.5",
    pulsator: "apulsator=hz=1",
    phaser: "aphaser=in_gain=0.4",
    normalizer: "dynaudnorm=f=200",
    echo: "aecho=0.8:0.9:1000:0.3",
    karaoke: "stereotools=mlev=0.1",
    mono: "pan=mono|c0=.5*c0+.5*c1",
    bassboost: "bass=g=10,dynaudnorm=f=150",
    vaporwave: "aresample=48000,asetrate=48000*0.8",
    nightcore: "aresample=48000,asetrate=48000*1.25",
  };
}
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
module.exports = {
  Type,
  YouTify_Find_Infos,
  _Youtify_,
  Filters,
  YouTify_Song_Feeder,
};
