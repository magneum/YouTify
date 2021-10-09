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
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
async function Generate_Audio(Song, message, all, options = {}) {
    const Link = Song.video_url ? Song.video_url : Song.id && !isNaN(Song.id) ? Song.url : Song.url ? Song.url : `https://www.youtube.com/watch?v=${Song.id}`;
    const Thumbnail = Song.thumbnails ? Song.thumbnails[0].url : Song.thumbnail ? Song.thumbnail.url ? Song.thumbnail.url : Song.thumbnail : Song.image;
    let Duration;
    if (Song.lengthSeconds || !String(Song.duration).includes(":")) {
        Duration = await FD(Song.lengthSeconds || Song.duration, Song.duration ? "ms" : " ");
    } else {
        Duration = Song.duration;
    };
    return {
        Type: options.Type || "YouTubeTrack",
        ID: Song.videoId || Song.id,
        Title: Song.title,
        Audio: Song.audio,
        Req: message.author.username,
        Other: all,
        Thumbnail,
        Duration,
        Link
    };
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
module.exports = { Generate_Audio, FD };