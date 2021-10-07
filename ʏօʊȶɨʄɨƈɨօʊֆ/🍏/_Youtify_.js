const ʏᴏᴜᴛɪꜰʏʏᴛꜱʀ = require("youtube-sr").default;
const ʏᴏᴜᴛɪꜰʏꜱᴘᴏᴛᴅʟ = require("spotify-url-info");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
const ʏᴏᴜᴛɪꜰʏʏᴛᴅʟ = require("@distube/ytdl");
const getVideoId = require("get-video-id");
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
const Regex = {
  ʏᴏᴜᴛɪꜰʏᴠɪᴅ: /^[a-zA-Z0-9-_]{11}$/,
  ʏᴏᴜᴛɪꜰʏᴠᴜʀʟ:
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
  ʏᴏᴜᴛɪꜰʏᴘɪᴅ: /(PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41}/,
  ʏᴏᴜᴛɪꜰʏᴘᴜʀʟ:
    /https?:\/\/(www.)?youtube.com\/playlist\?list=((PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41})/,
  ʏᴏᴜᴛɪꜰʏꜱᴄꜱ:
    /^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)\/?$/,
  ʏᴏᴜᴛɪꜰʏꜱᴄᴘ:
    /^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/sets\/([A-Za-z0-9_-]+)\/?$/,
  ʏᴏᴜᴛɪꜰʏꜱᴘ: /^(spotify:|https:\/\/[a-z]+\.spotify\.com\/)/,
};
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
async function Type(Value) {
  if (Regex.ʏᴏᴜᴛɪꜰʏᴠɪᴅ.test(Value))
    return {
      ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ: "YT",
      ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ: `https://www.youtube.com/watch?v=${Regex.ʏᴏᴜᴛɪꜰʏᴠɪᴅ.exec(Value)[0]
        }`,
    };
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  if (Regex.ʏᴏᴜᴛɪꜰʏᴠᴜʀʟ.test(Value) && !Value.toLowerCase().includes("list"))
    return { ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ: "YT", ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ: Value };
  if (Regex.ʏᴏᴜᴛɪꜰʏᴘɪᴅ.test(Value) && !Value.startsWith("http"))
    return {
      ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ: "ʏᴏᴜᴛᴜʙᴇᴘʟᴀʏʟɪꜱᴛ",
      ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ: `https://www.youtube.com/playlist?list=${Value}`,
    };
  if (Regex.ʏᴏᴜᴛɪꜰʏᴘᴜʀʟ.test(Value))
    return { ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ: "ʏᴏᴜᴛᴜʙᴇᴘʟᴀʏʟɪꜱᴛ", ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ: Value };
  if (Regex.ʏᴏᴜᴛɪꜰʏꜱᴄꜱ.test(Value))
    return { ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ: "ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅ", ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ: Value };
  if (Regex.ʏᴏᴜᴛɪꜰʏꜱᴄᴘ.test(Value))
    return { ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ: "ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅᴘʟᴀʏʟɪꜱᴛ", ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ: Value };
  if (Regex.ʏᴏᴜᴛɪꜰʏꜱᴘ.test(Value) && Value.toLowerCase().includes("track"))
    return { ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ: "ʏᴏᴜᴛɪꜰʏꜱᴘᴏᴛᴅʟ", ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ: Value };
  if (Regex.ʏᴏᴜᴛɪꜰʏꜱᴘ.test(Value) && Value.toLowerCase().includes("playlist"))
    return { ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ: "ꜱᴘᴏᴛɪꜰʏᴘʟᴀʏʟɪꜱᴛ", ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ: Value };
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  const Data = await ʏᴏᴜᴛɪꜰʏʏᴛꜱʀ.searchOne(Value);
  if (!Data) return undefined;
  return {
    ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ: "YT",
    ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ: `https://www.youtube.com/watch?v=${Data.id}`,
  };
}
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
async function YouTify_Find_Infos(Query, message) {
  const ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ = await Type(Query);
  let ʏᴏᴜᴛɪꜰʏꜰɪɴᴀʟ, Info;
  if (!ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ) return undefined;
  if (ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ == "YT") {
    Info = await ʏᴏᴜᴛɪꜰʏʏᴛᴅʟ.getInfo(ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ);
    if (!Info) return undefined;
    (Info = await YouTify_Song_Feeder(Info.videoDetails, message, Info)),
      (Info.ʏᴏᴜᴛɪꜰʏᴘᴏɪɴᴛ = false);
    return Info;
  } else if (ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ == "ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅ") {
    Info = await message.client.ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅ.getSongInfo(
      ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ
    );
    if (!Info) return undefined;
    (Info = await YouTify_Song_Feeder(Info, message, Info, {
      Type: "ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅ",
    })),
      (Info.ʏᴏᴜᴛɪꜰʏᴘᴏɪɴᴛ = false);
    return Info;
  } else if (ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ == "ʏᴏᴜᴛɪꜰʏꜱᴘᴏᴛᴅʟ") {
    Info = await ʏᴏᴜᴛɪꜰʏꜱᴘᴏᴛᴅʟ.getData(ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ);
    if (!Info) return undefined;
    Info = {
      Type: "ʏᴏᴜᴛɪꜰʏꜱᴘᴏᴛᴅʟ",
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
    await YouTify_Song_Feeder(Info, message, Info, { Type: "ʏᴏᴜᴛɪꜰʏꜱᴘᴏᴛᴅʟ" }),
      (Info.ʏᴏᴜᴛɪꜰʏᴘᴏɪɴᴛ = false);
    return Info;
  } else if (
    ["ʏᴏᴜᴛᴜʙᴇᴘʟᴀʏʟɪꜱᴛ", "ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅᴘʟᴀʏʟɪꜱᴛ"].includes(
      ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ
    )
  ) {
    Info =
      ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ == "ʏᴏᴜᴛᴜʙᴇᴘʟᴀʏʟɪꜱᴛ"
        ? await ʏᴏᴜᴛɪꜰʏʏᴛꜱʀ.getPlaylist(ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ)
        : await message.client.ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅ.getPlaylist(
          ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ
        );
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (!Info) return undefined;
    const Songs = [],
      Type = {
        ʏᴏᴜᴛᴜʙᴇᴘʟᴀʏʟɪꜱᴛ: "videos",
        ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅᴘʟᴀʏʟɪꜱᴛ: "tracks",
      };
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    for (let Element of Info[Type[ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ]]) {
      const SInfo = await YouTify_Song_Feeder(Element, message, Element, {
        Type:
          ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ == "ʏᴏᴜᴛᴜʙᴇᴘʟᴀʏʟɪꜱᴛ"
            ? "SR"
            : "ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅ",
      });
      if (typeof SInfo != "undefined") Songs.push(SInfo);
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    ʏᴏᴜᴛɪꜰʏꜰɪɴᴀʟ = {
      ʏᴏᴜᴛɪꜰʏᴘᴏɪɴᴛ: true,
      Name: Info.title,
      Thumbnail: Info.thumbnail,
      Count:
        Info[
        ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ == "ʏᴏᴜᴛᴜʙᴇᴘʟᴀʏʟɪꜱᴛ"
          ? "videoCount"
          : "trackCount"
        ],
      Views: Info.views || 0,
      Link: Info.url,
      Videos: Songs,
      Other: Info,
    };
    return ʏᴏᴜᴛɪꜰʏꜰɪɴᴀʟ;
  } else if (ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ == "ꜱᴘᴏᴛɪꜰʏᴘʟᴀʏʟɪꜱᴛ") {
    try {
      Info = await ʏᴏᴜᴛɪꜰʏꜱᴘᴏᴛᴅʟ.getData(ʏᴏᴜᴛɪꜰʏᴛʜɪʀꜱᴛ.ʏᴏᴜᴛɪꜰʏʟᴏᴀᴅ);
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
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
        Type: "ꜱᴘᴏᴛɪꜰʏᴘʟᴀʏʟɪꜱᴛ",
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
    ʏᴏᴜᴛɪꜰʏꜰɪɴᴀʟ = {
      ʏᴏᴜᴛɪꜰʏᴘᴏɪɴᴛ: true,
      Name: Info.name,
      Thumbnail: Info.images[0].url,
      Link: Info.external_urls.spotify,
      Count: Info.tracks.items.length,
      Views: Info.followers.total,
      Videos: Songs,
      Other: Info,
    };
    return ʏᴏᴜᴛɪꜰʏꜰɪɴᴀʟ;
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
      ? (options.Song.Other = await ʏᴏᴜᴛɪꜰʏʏᴛᴅʟ.getInfo(options.Song.Link))
      : null;
    (Link = options.Song.Other),
      (Type = "SR"),
      (option["filter"] = options.Song.Other.videoDetails.isLiveContent
        ? "audioandvideo"
        : "audioonly");
  } else if (options.Song.Type == "ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅ") {
    (Link = await options.Song.Other.downloadProgressive()), (Type = "AR");
  } else if (options.Song.Type == "ʏᴏᴜᴛɪꜰʏꜱᴘᴏᴛᴅʟ") {
    (Link = options.Song.Audio), (Type = "AR");
  } else if (options.Song.Type == "ꜱᴘᴏᴛɪꜰʏᴘʟᴀʏʟɪꜱᴛ") {
    const Data = await ʏᴏᴜᴛɪꜰʏꜱᴘᴏᴛᴅʟ.getPreview(options.Song.Link);
    if (!Data) {
      message.channel.send("Error: No Playlist Found!");
      return;
    }
    options.Song = await YouTify_Song_Feeder(Data, message, Data, {
      Type: "ʏᴏᴜᴛɪꜰʏꜱᴘᴏᴛᴅʟ",
    });
    (Link = options.Song.Audio), (Type = "AR");
  }
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
  // ====================================================—••÷[🍏YouTify™]÷••—====================================================
  Steam =
    Type == "SR"
      ? await ʏᴏᴜᴛɪꜰʏʏᴛᴅʟ.downloadFromInfo(Link, option)
      : Type == "AR"
        ? await ʏᴏᴜᴛɪꜰʏʏᴛᴅʟ.arbitraryStream(Link, option)
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
