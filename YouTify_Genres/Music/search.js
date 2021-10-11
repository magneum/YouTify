const {
YouTify_Singer,
YouTify_Generate_Audio,
} = require("../../YouTifyPlayer/YouTify_Singer.js");
const Sr = require("youtube-sr").default;
const Dl = require("../../YouTifyPlayer/ytdl");
const { MessageEmbed } = require("../../YouTifyPlayer/YouTified.djs");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.run = async (client, message, args, Discord) => {
let Value = args.join(" "),
Channel = message.member.voice.channel,
Queue = await client.queue.get(message.guild.id);
if (!Channel) return message.channel.send("Error: No Voice Channel!");

if (!Channel.joinable || !Channel.speakable)
return message.channel.send(
"Error: Voice Channel Not Joinable Or Speakable!"
);

if (!Value)
return client.commands
.get("help")
.run(client, message, ["play", client.token], Discord);

await Sr.search(Value, { limit: 10 })
.then(async (Data) => {
if (!Data || !Data[0].id)
return message.channel.send("Error: No Song Found!");

Data.length > 10 ? (Data.length = 10) : null;
const Mapped = await Data.map(
(S, I) =>
`${I + 1} | [${
S.title.length > 50 ? `${S.title.slice(0, 50)}...` : S.title
}](https://youtube.com/watch?v=${S.id})`
),
Filter = (m) => m.author.id === message.author.id;

const Embed = new MessageEmbed()
.setColor(client.Color)
.setTitle("Please Choose")
.setDescription(Mapped)
.setFooter(`Please Select Betweent 1 - ${Data.length}, Time: 5 Minutes`)
.setTimestamp();

await message.channel.send(Embed);

await message.channel
.awaitMessages(Filter, {
max: 1,
time: 300000,
errors: ["time"],
})
.then(async (Msg) => {
Msg = Msg.first();
let Content = Msg.content,
Song;
if (isNaN(Content) || parseInt(Content) < 1)
return message.channel.send("Error: Invalid Index!");

Content = parseInt(Content);
if (Content - 1 > Data.length || !Data[Content - 1])
return message.channel.send("Error: Unknown Index!");

try {
Song = await Dl.getInfo(
`https://youtube.com/watch?v=${Data[Content - 1].id}`
);
Song = await YouTify_Generate_Audio(
Song.videoDetails,
message,
Song
);
} catch (e) {
return message.channel
.send("Error: Unknown")
.then(() => console.log(e));
}
if (Queue) {
await Queue.Songs.push(Song);
const QueueAdd = new MessageEmbed()
.setColor(client.Color)
.setThumbnail(Song.Thumbnail)
.setAuthor(
"Song Added",
message.author.avatarURL({ dynamic: true })
)
.setDescription(
`[${Song.Title}](${Song.Link})` + " Has Been Added To Queue!"
)
.setTimestamp();
return message.channel.send(QueueAdd);
}

try {
Connection = await Channel.join();
await Connection.voice.setSelfDeaf(true);
} catch (e) {
console.log(e);
return message.channel.send("Error: Unable To Join Voice Channel!");
}

await client.queue.set(message.guild.id, {
Text: message.channel,
Voice: Channel,
Connection,
Volume: 100,
Filters: {},
Songs: [Song],
Steam: null,
Loop: false,
Day: false,
Playing: true,
});

Queue = await client.queue.get(message.guild.id);

try {
await YouTify_Singer(client, message, { Song: Song });
} catch (e) {
await Channel.leave(),
await client.queue.delete(message.guild.id),
await console.log(e);
return message.channel.send(
"Error: Something Went Wrong, Try Again Later!"
);
}
})
.catch((e) => {
return message.channel
.send("Error: Time Limit Surpassed - Cancelled")
.then(() => console.log(e));
});
})
.catch((e) => {
return message.channel
.send("Error: Something Went Wrong, Try Again Later!")
.then(() => console.log(e));
});
};

module.exports.help = {
name: "search",
aliases: ["sh"],
cooldown: 10000,
category: "Music",
description: "Search For Song In Youtube!",
usage: "Search <Title>",
examples: ["play attention", "play we don't talk anymore"],
};
