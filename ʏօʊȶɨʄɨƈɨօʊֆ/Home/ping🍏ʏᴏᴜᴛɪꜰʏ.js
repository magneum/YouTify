const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
const ᴅɪꜱᴄᴏʀᴅ = require(`../ӄʀǟӄɨռʐʟǟɮ`);

module.exports.run = (client, message) => {
  message.react("✅");
  message.channel.send("📗: ok status message").catch(console.error);
  return message.channel.send(`Pong - ${client.ws.ping}ms`);
};

module.exports.help = {
  name: "ping",
  aliases: ["p"],
  cooldown: 7000,
  category: "Home",
  description: "Get Bot Ping!",
  usage: "Ping",
  examples: ["ping"],
};
