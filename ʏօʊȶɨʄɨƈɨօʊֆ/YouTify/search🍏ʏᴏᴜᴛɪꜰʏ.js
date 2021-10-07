const { _Youtify_, YouTify_Song_Feeder } = require("../🍏/_Youtify_.js"),
  ʏᴏᴜᴛɪꜰʏʏᴛꜱʀ = require("youtube-sr").default,
  ʏᴏᴜᴛɪꜰʏʏᴛᴅʟ = require("@distube/ytdl");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
const ᴅɪꜱᴄᴏʀᴅ = require(`../ӄʀǟӄɨռʐʟǟɮ`);
module.exports.run = async (client, message, args) => {
  let Value = args.join(" "),
    Channel = message.member.voice.channel,
    Queue = await client.queue.get(message.guild.id);
  if (!Channel) {
    message.channel.send("📕: error+code RED message").catch(console.error);
    message.react(`❌`);
    message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b60000`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setURL(`https://github.com/Krakinz?tab=repositories`)
          .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
            message.author.avatarURL({
              dynamic: true,
            })
          ).setDescription(`${message.author}
\`Error\`
**Not connected to any Voice Channel yet!  Please Join first**`)
      )
      .catch(console.error);
    return;
  }
  if (!Channel.joinable || !Channel.speakable) {
    message.channel.send("Error: Voice Channel Not Joinable Or Speakable!");
    return;
  }
  if (!Value)
    return client.commands
      .get("help")
      .run(client, message, ["play", client.token], ᴅɪꜱᴄᴏʀᴅ);

  await ʏᴏᴜᴛɪꜰʏʏᴛꜱʀ.search(Value, {
    limit: 10,
  })
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
        .setColor("#8DB600")
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
            Song = await ʏᴏᴜᴛɪꜰʏʏᴛᴅʟ.getInfo(
              `https://youtube.com/watch?v=${Data[Content - 1].id}`
            );
            Song = await YouTify_Song_Feeder(Song.videoDetails, message, Song);
          } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
            return message.channel
              .send("Error: Unknown")
              .then(() => console.log(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ));
          }
          if (Queue) {
            await Queue.Songs.push(Song);
            const QueueAdd = new MessageEmbed()
              .setColor("#8DB600")
              .setThumbnail(Song.Thumbnail)
              .setAuthor(
                "Song Added",
                message.author.avatarURL({
                  dynamic: true,
                })
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
          } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
            console.log(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
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
            await _Youtify_(client, message, {
              Song: Song,
            });
          } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
            await Channel.leave(),
              await client.queue.delete(message.guild.id),
              await console.log(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
            return message.channel.send(
              "Error: Something Went Wrong, Try Again Later!"
            );
          }
        })
        .catch((ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) => {
          return message.channel
            .send("Error: Time Limit Surpassed - Cancelled")
            .then(() => console.log(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ));
        });
    })
    .catch((ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) => {
      return message.channel
        .send("Error: Something Went Wrong, Try Again Later!")
        .then(() => console.log(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ));
    });
};

module.exports.help = {
  name: "search",
  aliases: ["sh"],
  cooldown: 5000,
  category: "YouTify",
  description: "Search For Song In Youtube!",
  usage: "Search <Title>",
  examples: ["play attention", "play we don't talk anymore"],
};
