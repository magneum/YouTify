const { MessageEmbed } = require("../../YouTiFy_Initializer/youtify.djs");
const { Mrs_YouTify } = require("../../YouTiFy_Initializer/Mrs_YouTify.js");
const { Fetch_Audio_Meta } = require("../../YouTiFy_Initializer/Fetch_Audio_Meta.js");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
module.exports.run = async (client, message, args, Discord) => {
    let Value = args.join(" ");
    let Channel = message.member.voice.channel;
    let Queue = await client.queue.get(message.guild.id);
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    const SpotifyBetaCheck = /^(spotify:|https:\/\/[a-z]+\.spotify\.com\/)/;
    const SBC = SpotifyBetaCheck.test(args[0])
    if (SBC) {
        await message.react("🟢")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#43745a")
            .setTitle(`\`💬Play\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(`👈🏽‍Reqstd by`, message.author.avatarURL({ dynamic: true }))
            .addField(`\`☣️BETA warning\``, `**Spotify Engine is in heavy Beta Stage!**`, true))
            .catch(console.error);
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    if (!Channel) {
        await message.react("🟡")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#c4b932")
            .setTitle(`\`💬Play\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(`👈🏽‍Reqstd by`, message.author.avatarURL({ dynamic: true }))
            .addField(`\`☣️Error\``, `**Not connected to any VoiceChannel!**`, true))
            .catch(console.error);
        return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    if (!Channel.joinable || !Channel.speakable) {
        await message.react("🟡")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#c4b932")
            .setTitle(`\`💬Play\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(`👈🏽‍Reqstd by`, message.author.avatarURL({ dynamic: true }))
            .addField(`\`☣️Error\``, `**connected VoiceChannel seems to be not Joinable Or Speakable**`, true))
            .catch(console.error);
        return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    if (!Value) {
        client.commands.get("help").run(client, message, ["play", client.token], Discord)
        return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    let Music = await Fetch_Audio_Meta(Value, message),
        Song, Songs, Connection, T = {};
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    if (!Music) {
        await message.react("🟡")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#c4b932")
            .setTitle(`\`💬Play\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(`👈🏽‍Reqstd by`, message.author.avatarURL({ dynamic: true }))
            .addField(`\`☣️Error\``, `**No Song Found!\nTry different search keystrings or use URL**`, true))
            .catch(console.error);
        return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    if (Music.P) {
        Songs = Music.Videos;
        Song = Music.Videos[0];
        T = Music;
    } else {
        Song = Music;
    };
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    if (Queue) {
        await (T.P ? Queue.Songs.push(...Songs) : Queue.Songs.push(Song));
        await message.react("🔵")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#3285c4")
            .setTitle(`\`💬Play\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setTitle((Songs ? "Playlist" : "Song"))
            .setThumbnail(Songs ? T.Other.thumbnail ? T.Other.thumbnail : T.Thumbnail : Song.Thumbnail)
            .addField(`\`Title\``, `${(Songs ? `[${T.Name}](${T.Link})` : `[${Song.Title}](${Song.Link})`)} has been added to Queue!`)
            .setFooter(`👈🏽‍Reqstd by`, message.author.avatarURL({ dynamic: true })))
            .catch(console.error);
        return;
    };
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    try {
        await message.react("🍏")
        Connection = await Channel.join();
        await Connection.voice.setSelfDeaf(true);
    } catch (e) {
        console.log(e);
        await message.react("🔴")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#b13d3d")
            .setTitle(`\`💬Play\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(`👈🏽‍Reqstd by`, message.author.avatarURL({ dynamic: true }))
            .addField(`\`☣️Error\``, `**Unable To Join Voice Channel!**\n\n*${e}*`, true))
            .catch(console.error);
        return;
    };
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    await client.queue.set(message.guild.id, {
        Text: message.channel,
        Voice: Channel,
        Connection,
        Volume: 100,
        Filters: {},
        Songs: Songs ? [...Songs] : [Song],
        Steam: null,
        Loop: false,
        Day: false,
        Playing: true
    });
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    Queue = await client.queue.get(message.guild.id);
    try {
        await Mrs_YouTify(client, message, {
            Song: Song
        });
    } catch (e) {
        await Channel.leave(), await client.queue.delete(message.guild.id), console.log(e);
        await message.react("🔴")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#b13d3d")
            .setTitle(`\`💬Play\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(`👈🏽‍Reqstd by`, message.author.avatarURL({ dynamic: true }))
            .addField(`\`☣️Error\``, `**Something Went Wrong, Try Again Later!**\n\n*${e}*`, true))
            .catch(console.error);
        return;
    };
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
module.exports.help = {
    name: "play",
    aliases: ["p", "pl"],
    cooldown: 5000,
    category: "Music",
    description: `Play Music From: 
**Youtube** (Video ID, Video Link, Playlist ID, Playlist Link)
**Soundcloud** (Song Link, Playlist Link)
*Spotify* (Song Link, Playlist Link)`,
    usage: "Play <Song | Playlist>",
    examples: [`
play <YouTube Link | Playlist>
play <SoundCloud Link | Playlist>

**BETA warning**
☣️play <Spotify Link | Playlist>`]
};