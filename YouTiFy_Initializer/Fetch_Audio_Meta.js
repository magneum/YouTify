const { Regex } = require("./Regex.js");
const YouTifyYtDl = require("@distube/ytdl");
const YouTifyYtSr = require("youtube-sr").default;
const YouTifySpotify = require("spotify-url-info");
const { Generate_Audio, FD } = require("./Generate_Audio.js");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
async function YouTypeCheck(YouTVal) {
    if (Regex.VideoID.test(YouTVal)) {
        return { T: "YouTubeTrack", L: `https://www.youtube.com/watch?v=${Regex.VideoID.exec(YouTVal)[0]}` };
    }
    if (Regex.VideoURL.test(YouTVal) && !YouTVal.toLowerCase().includes("list")) {
        return { T: "YouTubeTrack", L: YouTVal };
    }
    if (Regex.PlaylistID.test(YouTVal) && !YouTVal.startsWith("http")) {
        return { T: "YouTubePlaylist", L: `https://www.youtube.com/playlist?list=${YouTVal}` };
    }
    if (Regex.PlaylistURL.test(YouTVal)) {
        return { T: "YouTubePlaylist", L: YouTVal };
    }
    if (Regex.SCTrack.test(YouTVal)) {
        return { T: "SoundCloudTrack", L: YouTVal };
    }
    if (Regex.SCPlaylist.test(YouTVal)) {
        return { T: "SoundCloudPlaylist", L: YouTVal };
    }
    if (Regex.Spotify.test(YouTVal) && YouTVal.toLowerCase().includes("track")) {
        return { T: "SpotifyTrack", L: YouTVal };
    }
    if (Regex.Spotify.test(YouTVal) && YouTVal.toLowerCase().includes("playlist")) {
        return { T: "SpotifyPlaylist", L: YouTVal };
    }
    const Data = await YouTifyYtSr.searchOne(YouTVal);
    if (!Data) { return undefined; }
    return { T: "YouTubeTrack", L: `https://www.youtube.com/watch?v=${Data.id}` }
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
async function Fetch_Audio_Meta(Query, message) {
    const T = await YouTypeCheck(Query);
    let Final, Info;
    if (!T) return undefined;
    if (T.T == "YouTubeTrack") {
        Info = await YouTifyYtDl.getInfo(T.L);
        if (!Info) return undefined;
        Info = await Generate_Audio(Info.videoDetails, message, Info), Info.P = false;
        return Info;
    } else if (T.T == "SoundCloudTrack") {
        Info = await message.client.SC.getSongInfo(T.L);
        if (!Info) return undefined;
        Info = await Generate_Audio(Info, message, Info, { Type: "SoundCloudTrack" }), Info.P = false;
        return Info;
    } else if (T.T == "SpotifyTrack") {
        Info = await YouTifySpotify.getData(T.L);
        if (!Info) return undefined;
        Info = {
            Type: "SpotifyTrack",
            ID: Info.id,
            Title: Info.name,
            Audio: Info.preview_url,
            Req: message.author.username,
            Other: Info,
            Link: Info.external_urls.spotify,
            Duration: await FD(Info.duration_ms, "ms")
        };
        await Generate_Audio(Info, message, Info, { Type: "SpotifyTrack" }), Info.P = false;
        return Info;
    } else if (["YouTubePlaylist", "SoundCloudPlaylist"].includes(T.T)) {
        Info = T.T == "YouTubePlaylist" ? await YouTifyYtSr.getPlaylist(T.L) : await message.client.SC.getPlaylist(T.L);
        if (!Info) return undefined;
        const Songs = [], Type = {
            YTPL: "videos",
            SCPL: "tracks"
        };
        for (let Element of Info[Type[T.T]]) {
            const SInfo = await Generate_Audio(Element, message, Element, { Type: T.T == "YouTubePlaylist" ? "YouTube-YouTifyYtSr" : "SoundCloudTrack" });
            if (typeof SInfo != "undefined") Songs.push(SInfo);
        };
        Final = {
            P: true,
            Name: Info.title,
            Thumbnail: Info.thumbnail,
            Count: Info[T.T == "YouTubePlaylist" ? "videoCount" : "trackCount"],
            Views: Info.views || 0,
            Link: Info.url,
            Videos: Songs,
            Other: Info
        };

        return Final;
    } else if (T.T == "SpotifyPlaylist") {
        try {
            Info = await YouTifySpotify.getData(T.L);
        } catch (e) {
            return undefined;
        };
        if (!Info) return undefined;
        const Songs = [];
        for (let Element of Info.tracks.items) {
            const Data = Element.track;
            Songs.push({ Type: "SpotifyPlaylist", ID: Data.id, Title: Data.name, Audio: Data.preview_url, Link: Data.external_urls.spotify, Req: message.author.username, Other: Data });
        };
        if (!Songs) return undefined;
        Final = {
            P: true,
            Name: Info.name,
            Thumbnail: Info.images[0].url,
            Link: Info.external_urls.spotify,
            Count: Info.tracks.items.length,
            Views: Info.followers.total,
            Videos: Songs,
            Other: Info
        };
        return Final;
    };
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================F
module.exports = { Fetch_Audio_Meta, YouTypeCheck };